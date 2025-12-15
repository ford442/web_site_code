(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();class b{constructor(){this.vertices=[],this.indices=[],this.normals=[]}generate(e=32,s=16){this.vertices=[],this.indices=[],this.normals=[];for(let r=0;r<=s;r++){const t=r/s*Math.PI,i=Math.sin(t),o=Math.cos(t);for(let c=0;c<=e;c++){const l=c/e*2*Math.PI,u=Math.sin(l);let m=Math.cos(l)*i,f=o,d=u*i;const a=Math.sin(l*3+t*2)*.15,h=Math.cos(l*5-t*3)*.1,x=Math.sin(l*7+t*5)*.08,g=1+a+h+x;m*=g,f*=g,d*=g,this.vertices.push(m,f,d),this.normals.push(m,f,d)}}for(let r=0;r<s;r++)for(let t=0;t<e;t++){const i=r*(e+1)+t,o=i+e+1;this.indices.push(i,o,i+1),this.indices.push(o,o+1,i+1)}}getVertexData(){return new Float32Array(this.vertices)}getNormalData(){return new Float32Array(this.normals)}getIndexData(){return new Uint32Array(this.indices)}getVertexCount(){return this.vertices.length/3}getIndexCount(){return this.indices.length}}const I=`
struct Uniforms {
    mvpMatrix: mat4x4<f32>,
    modelMatrix: mat4x4<f32>,
    time: f32,
    style: f32, // 0 = Organic, 1 = Cyber
    padding1: f32,
    padding2: f32,
}

struct VertexInput {
    @location(0) position: vec3<f32>,
    @location(1) normal: vec3<f32>,
}

struct VertexOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) worldPos: vec3<f32>,
    @location(1) normal: vec3<f32>,
    @location(2) color: vec3<f32>,     // Used for Organic
    @location(3) activity: f32,
}

@group(0) @binding(0) var<uniform> uniforms: Uniforms;
@group(0) @binding(1) var<storage, read> tensorData: array<f32>;

// Heatmap function
fn getHeatmapColor(t: f32) -> vec3<f32> {
    let t_clamped = clamp(t, 0.0, 1.0);
    let col0 = vec3<f32>(0.0, 0.0, 0.5); 
    let col1 = vec3<f32>(0.0, 1.0, 1.0); 
    let col2 = vec3<f32>(1.0, 1.0, 0.0); 
    let col3 = vec3<f32>(1.0, 0.0, 0.0); 
    if (t_clamped < 0.33) { return mix(col0, col1, t_clamped * 3.0); }
    else if (t_clamped < 0.66) { return mix(col1, col2, (t_clamped - 0.33) * 3.0); }
    else { return mix(col2, col3, (t_clamped - 0.66) * 3.0); }
}

@vertex
fn main(input: VertexInput, @builtin(vertex_index) vertexIndex: u32) -> VertexOutput {
    var output: VertexOutput;
    let dataIndex = vertexIndex % arrayLength(&tensorData);
    let activity = tensorData[dataIndex];
    var displacement = vec3<f32>(0.0);
    
    // STYLE SWITCHING LOGIC
    if (uniforms.style < 0.5) {
        // ORGANIC MODE --- Smooth, round swelling
        let amount = activity * activity * 0.4;
        displacement = input.normal * amount;
        output.color = getHeatmapColor((activity + 0.2) * 0.8);
    } else {
        // CYBER MODE --- Sharp, glitchy spikes
        let glitch = floor(activity * 5.0) / 5.0;
        displacement = input.normal * glitch * 0.6;
        output.color = vec3<f32>(0.0, 0.2, 0.3);
    }

    let animatedPos = input.position + displacement;
    output.position = uniforms.mvpMatrix * vec4<f32>(animatedPos, 1.0);
    output.worldPos = (uniforms.modelMatrix * vec4<f32>(animatedPos, 1.0)).xyz;
    output.normal = normalize((uniforms.modelMatrix * vec4<f32>(input.normal, 0.0)).xyz);
    output.activity = activity;
    return output;
}
`,C=`
struct Uniforms {
    mvpMatrix: mat4x4<f32>,
    modelMatrix: mat4x4<f32>,
    time: f32,
    style: f32,
    padding1: f32,
    padding2: f32,
}
@group(0) @binding(0) var<uniform> uniforms: Uniforms;

struct FragmentInput {
    @location(0) worldPos: vec3<f32>,
    @location(1) normal: vec3<f32>,
    @location(2) color: vec3<f32>,
    @location(3) activity: f32,
}

@fragment
fn main(input: FragmentInput) -> @location(0) vec4<f32> {
    let normal = normalize(input.normal);
    let viewDir = normalize(vec3<f32>(0.0, 0.0, 5.0) - input.worldPos);
    var finalColor = vec3<f32>(0.0);
    if (uniforms.style < 0.5) {
        // ORGANIC: wet, shiny look
        let lightDir = normalize(vec3<f32>(0.5, 1.0, 0.5));
        let ambient = 0.2;
        let diffuse = max(dot(normal, lightDir), 0.0) * 0.8;
        let reflectDir = reflect(-lightDir, normal);
        let specular = pow(max(dot(viewDir, reflectDir), 0.0), 32.0) * 0.6;
        let emission = input.color * max(input.activity, 0.0) * 0.5;
        finalColor = input.color * (ambient + diffuse) + specular + emission;
    } else {
        // CYBER: holographic wireframe + neon
        let fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 2.5);
        let rimColor = vec3<f32>(0.0, 0.8, 1.0);
        let scanline = step(0.9, fract(input.worldPos.y * 5.0 + uniforms.time * 0.5));
        let signal = max(input.activity, 0.0);
        let spikeColor = vec3<f32>(1.0, 0.0, 0.8) * signal * 2.5;
        finalColor = (vec3<f32>(0.02) + (rimColor * fresnel) + (spikeColor * 0.8) + (rimColor * scanline * 0.3));
    }
    return vec4<f32>(finalColor, 1.0);
}
`,M=`
struct TensorParams {
    time: f32,
    dataSize: u32,
    frequency: f32,
    amplitude: f32,
    spikeThreshold: f32,
    smoothing: f32,
    style: f32, // Passed here too
    padding: f32,
}

@group(0) @binding(0) var<storage, read_write> tensorData: array<f32>;
@group(0) @binding(1) var<uniform> params: TensorParams;

fn hash(n: f32) -> f32 { return fract(sin(n) * 43758.5453123); }

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) globalId: vec3<u32>) {
    let index = globalId.x;
    if (index >= params.dataSize) { return; }
    let fi = f32(index);
    let t = params.time;
    var signal = 0.0;
    if (params.style < 0.5) {
        // ORGANIC MATH
        let slow = sin(fi * 0.05 + t * params.frequency * 0.2);
        let fast = sin(fi * 0.1 - t * params.frequency);
        let noise = (hash(fi + t) * 2.0 - 1.0) * 0.1;
        signal = (slow + fast + noise) * params.amplitude;
        if ((sin(fi * 0.02 + t) + sin(fi * 0.03 - t)) > (2.0 - params.spikeThreshold * 2.0)) {
            signal += params.amplitude;
        }
    } else {
        // CYBER MATH
        let carrier = sin(fi * 0.05 + t * params.frequency);
        let digi = sign(carrier) * pow(abs(carrier), 0.2);
        let noise = step(0.98, hash(fi * 0.01 + t * 0.5));
        signal = (digi * 0.1 + noise) * params.amplitude;
        if (signal > (1.0 - params.spikeThreshold)) {
            signal *= 2.0;
        } else {
            signal = 0.0;
        }
    }
    // Smoothing
    let smoothVal = select(params.smoothing, params.smoothing * 0.5, params.style > 0.5);
    let prev = tensorData[index];
    tensorData[index] = mix(prev, signal, 1.0 - smoothVal);
}
`;class p{static create(){return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}static perspective(e,s,r,t){const i=1/Math.tan(e/2);return new Float32Array([i/s,0,0,0,0,i,0,0,0,0,t/(r-t),-1,0,0,t*r/(r-t),0])}static lookAt(e,s,r){const t=w([e[0]-s[0],e[1]-s[1],e[2]-s[2]]),i=w(E(r,t)),o=E(t,i);return new Float32Array([i[0],o[0],t[0],0,i[1],o[1],t[1],0,i[2],o[2],t[2],0,-P(i,e),-P(o,e),-P(t,e),1])}static multiply(e,s){const r=new Float32Array(16);for(let t=0;t<4;t++)for(let i=0;i<4;i++)r[t*4+i]=e[t*4+0]*s[0*4+i]+e[t*4+1]*s[1*4+i]+e[t*4+2]*s[2*4+i]+e[t*4+3]*s[3*4+i];return r}static transpose(e){return new Float32Array([e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15]])}static rotateY(e){const s=Math.cos(e),r=Math.sin(e);return new Float32Array([s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1])}static rotateX(e){const s=Math.cos(e),r=Math.sin(e);return new Float32Array([1,0,0,0,0,s,r,0,0,-r,s,0,0,0,0,1])}}function w(n){const e=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);return e===0?[0,0,0]:[n[0]/e,n[1]/e,n[2]/e]}function E(n,e){return[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]]}function P(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]}class U{constructor(e){this.canvas=e,this.device=null,this.context=null,this.pipeline=null,this.computePipeline=null,this.rotation={x:0,y:0},this.targetRotation={x:.3,y:0},this.zoom=3.5,this.time=0,this.isRunning=!1,this.params={frequency:2,amplitude:.5,spikeThreshold:.8,smoothing:.9,style:0},this.setupInputHandlers()}setupInputHandlers(){let e=!1,s=0,r=0;this.canvas.addEventListener("mousedown",t=>{e=!0,s=t.clientX,r=t.clientY}),this.canvas.addEventListener("mousemove",t=>{if(e){const i=t.clientX-s,o=t.clientY-r;this.targetRotation.y+=i*.01,this.targetRotation.x+=o*.01,this.targetRotation.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,this.targetRotation.x)),s=t.clientX,r=t.clientY}}),this.canvas.addEventListener("mouseup",()=>{e=!1}),this.canvas.addEventListener("wheel",t=>{t.preventDefault(),this.zoom+=t.deltaY*.01,this.zoom=Math.max(2,Math.min(10,this.zoom))})}async initialize(){const e=await navigator.gpu.requestAdapter();if(!e)throw new Error("No GPU adapter found");this.device=await e.requestDevice(),this.context=this.canvas.getContext("webgpu");const s=navigator.gpu.getPreferredCanvasFormat();this.context.configure({device:this.device,format:s,alphaMode:"opaque"});const r=new b;r.generate(64,32),this.vertexBuffer=this.device.createBuffer({size:r.getVertexData().byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.vertexBuffer,0,r.getVertexData()),this.normalBuffer=this.device.createBuffer({size:r.getNormalData().byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalBuffer,0,r.getNormalData()),this.indexBuffer=this.device.createBuffer({size:r.getIndexData().byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.indexBuffer,0,r.getIndexData()),this.indexCount=r.getIndexCount(),console.log(`Generated geometry: vertices=${r.getVertexCount()}, indices=${this.indexCount}`);const t=r.getVertexCount();this.tensorBuffer=this.device.createBuffer({size:t*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});const i=new Float32Array(t);for(let a=0;a<t;a++)i[a]=Math.sin(a*.1)*.5;this.device.queue.writeBuffer(this.tensorBuffer,0,i),this.uniformBuffer=this.device.createBuffer({size:160,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.computeUniformBuffer=this.device.createBuffer({size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const o=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]});this.bindGroup=this.device.createBindGroup({layout:o,entries:[{binding:0,resource:{buffer:this.uniformBuffer}},{binding:1,resource:{buffer:this.tensorBuffer}}]});const c=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.computeBindGroup=this.device.createBindGroup({layout:c,entries:[{binding:0,resource:{buffer:this.tensorBuffer}},{binding:1,resource:{buffer:this.computeUniformBuffer}}]});const l=this.device.createPipelineLayout({bindGroupLayouts:[o]}),u=this.device.createShaderModule({code:I}),y=this.device.createShaderModule({code:C}),m=this.device.createShaderModule({code:M});try{const a=await u.compilationInfo(),h=await y.compilationInfo(),x=await m.compilationInfo();a.messages.concat(h.messages).concat(x.messages).forEach(v=>{v.type==="error"?console.error("WGSL error:",v.message):v.type==="warning"&&console.warn("WGSL warning:",v.message)});const g=a.messages.concat(h.messages).concat(x.messages).some(v=>v.type==="error"),B=typeof document<"u"?document.getElementById("status"):null;B&&(B.style.display="block",B.style.color=g?"#f00":"#0f0",B.textContent=g?"WGSL compilation errors (check console)":"Shaders OK")}catch(a){console.warn("Shader compilation info not available:",a);const h=typeof document<"u"?document.getElementById("status"):null;h&&(h.style.display="block",h.style.color="#ff0",h.textContent="Shader status unknown")}this.pipeline=this.device.createRenderPipeline({layout:l,vertex:{module:u,entryPoint:"main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]}]},fragment:{module:y,entryPoint:"main",targets:[{format:s}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{depthWriteEnabled:!1,depthCompare:"always",format:"depth24plus"}});const f=this.device.createPipelineLayout({bindGroupLayouts:[c]});this.computePipeline=this.device.createComputePipeline({layout:f,compute:{module:m,entryPoint:"main"}}),console.log("Render and compute pipelines created");const d=typeof document<"u"?document.getElementById("status"):null;d&&(d.style.display="block",d.style.color="#0f0",d.textContent="Pipelines created"),this.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.dataSize=t}setParams(e){this.params={...this.params,...e}}updateUniforms(){this.rotation.x+=(this.targetRotation.x-this.rotation.x)*.1,this.rotation.y+=(this.targetRotation.y-this.rotation.y)*.1;const e=this.canvas.width/this.canvas.height,s=p.perspective(Math.PI/4,e,.1,100),r=[0,0,this.zoom],t=[0,0,0],i=[0,1,0],o=p.lookAt(r,t,i),c=p.rotateX(this.rotation.x),l=p.rotateY(this.rotation.y),u=p.multiply(c,l),y=p.multiply(o,s),m=p.multiply(u,y),f=new Float32Array(40);f.set(m,0),f.set(u,16),f[32]=this.time,f[33]=this.params.style,this.device.queue.writeBuffer(this.uniformBuffer,0,f);const d=new ArrayBuffer(32),a=new DataView(d);a.setFloat32(0,this.time,!0),a.setUint32(4,this.dataSize,!0),a.setFloat32(8,this.params.frequency,!0),a.setFloat32(12,this.params.amplitude,!0),a.setFloat32(16,this.params.spikeThreshold,!0),a.setFloat32(20,this.params.smoothing,!0),a.setFloat32(24,this.params.style,!0),a.setFloat32(28,0,!0),this.device.queue.writeBuffer(this.computeUniformBuffer,0,d)}render(){if(!this.isRunning)return;const e=this.canvas.clientWidth,s=this.canvas.clientHeight;(this.canvas.width!==e||this.canvas.height!==s)&&(this.canvas.width=e,this.canvas.height=s,this.depthTexture.destroy(),this.depthTexture=this.device.createTexture({size:[e,s],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})),this.time+=.016,this.updateUniforms();const r=this.device.createCommandEncoder(),t=r.beginComputePass();t.setPipeline(this.computePipeline),t.setBindGroup(0,this.computeBindGroup);const i=Math.ceil(this.dataSize/64);t.dispatchWorkgroups(i),t.end();const o=r.beginRenderPass({colorAttachments:[{view:this.context.getCurrentTexture().createView(),clearValue:{r:.1,g:.1,b:.1,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:this.depthTexture.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}});o.setPipeline(this.pipeline),o.setBindGroup(0,this.bindGroup),o.setVertexBuffer(0,this.vertexBuffer),o.setVertexBuffer(1,this.normalBuffer),o.setIndexBuffer(this.indexBuffer,"uint32"),o.drawIndexed(this.indexCount),o.end(),this.device.queue.submit([r.finish()]),requestAnimationFrame(()=>this.render())}start(){this.isRunning=!0,this.render()}stop(){this.isRunning=!1}}async function G(){const n=document.getElementById("canvas"),e=document.getElementById("error"),s={frequency:document.getElementById("freq"),amplitude:document.getElementById("amp"),spikeThreshold:document.getElementById("thresh"),smoothing:document.getElementById("smooth"),style:document.getElementById("style-mode")},r={frequency:document.getElementById("val-freq"),amplitude:document.getElementById("val-amp"),spikeThreshold:document.getElementById("val-thresh"),smoothing:document.getElementById("val-smooth")};if(!navigator.gpu){e.textContent="WebGPU is not supported in this browser.",e.style.display="block";return}try{const t=new U(n);await t.initialize();const i=(c,l)=>{const u=parseFloat(l);t.setParams({[c]:u}),r[c]&&(r[c].textContent=u.toFixed(2))};Object.keys(s).forEach(c=>{const l=s[c];l&&(i(c,l.value),l.addEventListener("input",u=>{i(c,u.target.value)}))});const o=document.getElementById("style-mode");o&&o.addEventListener("change",c=>{const l=parseFloat(c.target.value);t.setParams({style:l}),l===1?(s.frequency.value=5,s.smoothing.value=.5,i("frequency",5),i("smoothing",.5)):(s.frequency.value=2,s.smoothing.value=.9,i("frequency",2),i("smoothing",.9))}),t.start()}catch(t){console.error("Failed to initialize:",t),e.textContent=`Error: ${t.message}`,e.style.display="block"}}G();
