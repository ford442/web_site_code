(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();class M{constructor(){this.vertices=[],this.indices=[],this.normals=[],this.fiberVertices=[]}getPosition(t,a){let r=Math.sin(t)*Math.cos(a),e=Math.cos(t),i=Math.sin(t)*Math.sin(a);const o=.4;r*=.8;let s=1;const u=Math.abs(r),l=Math.exp(-Math.pow(u*4,2));s-=l*o;const g=Math.max(0,-e-.2)*Math.exp(-Math.pow(i,2))*Math.abs(r);s+=g*.5;const f=Math.max(0,-i-.3)*Math.max(0,-e-.3)*(1-Math.abs(r)*.5);s+=f*.8,i*=1.2,r*=s,e*=s,i*=s;const c=12,h=24,d=Math.sin(r*c)*Math.cos(e*c)*Math.sin(i*c),p=Math.sin(r*h+e)*Math.cos(i*h+r),y=(d+p*.5)*.04;return r+=r*y,e+=e*y,i+=i*y,{x:r,y:e,z:i}}generate(t=120,a=80){this.vertices=[],this.indices=[],this.normals=[],this.fiberVertices=[];for(let r=0;r<=a;r++){const e=r/a*Math.PI;for(let i=0;i<=t;i++){const o=i/t*2*Math.PI,s=this.getPosition(e,o),u=.005,l=this.getPosition(e+u,o),g=this.getPosition(e,o+u),f={x:l.x-s.x,y:l.y-s.y,z:l.z-s.z},c={x:g.x-s.x,y:g.y-s.y,z:g.z-s.z};let h=f.y*c.z-f.z*c.y,d=f.z*c.x-f.x*c.z,p=f.x*c.y-f.y*c.x;const v=Math.sqrt(h*h+d*d+p*p);v>1e-5?(h/=v,d/=v,p/=v):(h=0,d=1,p=0),this.vertices.push(s.x,s.y,s.z),this.normals.push(h,d,p),this.fiberVertices.push(s.x,s.y,s.z),this.fiberVertices.push(s.x,s.y,s.z)}}for(let r=0;r<a;r++)for(let e=0;e<t;e++){const i=r*(t+1)+e,o=i+t+1;this.indices.push(i,o,i+1),this.indices.push(o,o+1,i+1)}}getVertexData(){return new Float32Array(this.vertices)}getNormalData(){return new Float32Array(this.normals)}getIndexData(){return new Uint32Array(this.indices)}getFiberData(){return new Float32Array(this.fiberVertices)}getVertexCount(){return this.vertices.length/3}getIndexCount(){return this.indices.length}getFiberVertexCount(){return this.fiberVertices.length/3}}const b=`
struct Uniforms {
    mvpMatrix: mat4x4<f32>,
    modelMatrix: mat4x4<f32>,
    time: f32,
    style: f32,
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
    @location(2) color: vec3<f32>,
    @location(3) activity: f32,
}

@group(0) @binding(0) var<uniform> uniforms: Uniforms;
@group(0) @binding(1) var<storage, read> tensorData: array<f32>;

@vertex
fn main(input: VertexInput, @builtin(vertex_index) vertexIndex: u32) -> VertexOutput {
    var output: VertexOutput;
    var finalPos = input.position;
    var finalNormal = input.normal;
    var finalColor = vec3<f32>(0.0);
    
    // --- CONNECTOME MODE (Style 2) ---
    if (uniforms.style >= 2.0) {
        let isTip = f32(vertexIndex % 2);
        let dataIndex = vertexIndex / 2;
        let activity = tensorData[dataIndex % arrayLength(&tensorData)];
        
        let normalDir = normalize(input.position);
        
        if (isTip > 0.5) {
            let length = 0.1 + (activity * 0.4); 
            let curl = vec3<f32>(
                sin(input.position.y * 10.0 + uniforms.time),
                cos(input.position.z * 10.0 + uniforms.time),
                sin(input.position.x * 10.0)
            ) * 0.05 * activity;
            finalPos = input.position + (normalDir * length) + curl;
            finalColor = vec3<f32>(0.8, 0.9, 1.0) * (0.5 + activity * 0.5);
        } else {
            finalColor = vec3<f32>(0.1, 0.2, 0.3);
        }
        output.activity = activity;
        finalNormal = normalDir;
        
    } else {
        // --- TRANSPARENT OUTLINE MODE (Organic/Cyber) ---
        let dataIndex = vertexIndex % arrayLength(&tensorData);
        let activity = tensorData[dataIndex];
        
        // Use the activity to slightly pulse the position along normal
        let displacement = input.normal * activity * 0.02;
        
        finalPos = input.position + displacement;
        finalColor = vec3<f32>(0.2, 0.6, 1.0); // Base Cyan/Blue

        if (uniforms.style > 0.5) {
             // Cyber variation: Green/Teal
             finalColor = vec3<f32>(0.0, 0.9, 0.5);
        }

        output.activity = activity;
    }

    output.position = uniforms.mvpMatrix * vec4<f32>(finalPos, 1.0);
    output.worldPos = (uniforms.modelMatrix * vec4<f32>(finalPos, 1.0)).xyz;
    output.normal = normalize((uniforms.modelMatrix * vec4<f32>(finalNormal, 0.0)).xyz);
    output.color = finalColor;
    
    return output;
}
`,P=`
struct Uniforms {
    mvpMatrix: mat4x4<f32>,
    modelMatrix: mat4x4<f32>,
    time: f32,
    style: f32,
    padding: vec2<f32>,
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
    if (uniforms.style >= 2.0) {
        // Connectome fibers
        let alpha = 0.3 + (input.activity * 0.7);
        return vec4<f32>(input.color, alpha);
    }
    
    // --- GHOST / OUTLINE SHADER ---
    let normal = normalize(input.normal);
    let viewDir = normalize(vec3<f32>(0.0, 0.0, 5.0) - input.worldPos);
    
    // Fresnel
    let NdotV = abs(dot(normal, viewDir));
    let rim = pow(1.0 - NdotV, 2.5); // Slightly softer rim for more visibility

    // Alpha Calculation
    // Base alpha for the "surface" to ensure it's not invisible
    let baseAlpha = 0.1;

    // Rim alpha
    let rimAlpha = smoothstep(0.5, 1.0, rim);

    // Combine
    let finalAlpha = baseAlpha + rimAlpha * 0.8;

    // Color
    var col = input.color;

    // Highlights on Rim
    col += vec3<f32>(0.5) * rimAlpha;

    // Activity Glow on Rim
    let activityGlow = input.activity * 2.0;
    col += vec3<f32>(0.8, 0.4, 0.0) * activityGlow * rimAlpha;

    // Ensure we don't exceed 1.0 alpha logic visually if we want "mostly transparent"
    // But since we use OneMinusSrcAlpha, we just return correct alpha.

    return vec4<f32>(col, clamp(finalAlpha, 0.0, 1.0));
}
`,E=`
struct TensorParams {
    time: f32, dataSize: u32, frequency: f32, amplitude: f32, 
    spikeThreshold: f32, smoothing: f32, style: f32, padding: f32
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
    
    let wave = sin(fi * 0.05 + t * params.frequency);
    let noise = hash(fi + t) * 2.0 - 1.0;
    
    if (params.style >= 2.0) {
        let pulse = step(0.95, hash(fi * 0.01 + t * 2.0));
        signal = (wave * 0.2 + pulse) * params.amplitude;
    } else if (params.style < 0.5) {
        signal = (wave + noise * 0.1) * params.amplitude;
        if (sin(fi*0.02+t) > (2.0-params.spikeThreshold*2.0)) { signal += params.amplitude; }
    } else {
        signal = (sign(wave)*pow(abs(wave),0.2) * 0.1 + step(0.98, noise)) * params.amplitude;
        if (signal > (1.0 - params.spikeThreshold)) { signal *= 2.0; } else { signal = 0.0; }
    }
    
    let prev = tensorData[index];
    tensorData[index] = mix(prev, signal, 1.0 - params.smoothing);
}
`;class m{static create(){return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}static perspective(t,a,r,e){const i=1/Math.tan(t/2);return new Float32Array([i/a,0,0,0,0,i,0,0,0,0,e/(r-e),-1,0,0,e*r/(r-e),0])}static lookAt(t,a,r){const e=B([t[0]-a[0],t[1]-a[1],t[2]-a[2]]),i=B(w(r,e)),o=w(e,i);return new Float32Array([i[0],o[0],e[0],0,i[1],o[1],e[1],0,i[2],o[2],e[2],0,-x(i,t),-x(o,t),-x(e,t),1])}static multiply(t,a){const r=new Float32Array(16);for(let e=0;e<4;e++)for(let i=0;i<4;i++)r[e*4+i]=t[e*4+0]*a[0*4+i]+t[e*4+1]*a[1*4+i]+t[e*4+2]*a[2*4+i]+t[e*4+3]*a[3*4+i];return r}static transpose(t){return new Float32Array([t[0],t[4],t[8],t[12],t[1],t[5],t[9],t[13],t[2],t[6],t[10],t[14],t[3],t[7],t[11],t[15]])}static rotateY(t){const a=Math.cos(t),r=Math.sin(t);return new Float32Array([a,0,-r,0,0,1,0,0,r,0,a,0,0,0,0,1])}static rotateX(t){const a=Math.cos(t),r=Math.sin(t);return new Float32Array([1,0,0,0,0,a,r,0,0,-r,a,0,0,0,0,1])}}function B(n){const t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);return t===0?[0,0,0]:[n[0]/t,n[1]/t,n[2]/t]}function w(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function x(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}class U{constructor(t){this.canvas=t,this.device=null,this.context=null,this.pipeline=null,this.fiberPipeline=null,this.rotation={x:0,y:0},this.targetRotation={x:.3,y:0},this.zoom=3.5,this.time=0,this.isRunning=!1,this.params={frequency:2,amplitude:.5,spikeThreshold:.8,smoothing:.9,style:0},this.setupInputHandlers()}setupInputHandlers(){let t=!1,a=0,r=0;this.canvas.addEventListener("mousedown",e=>{t=!0,a=e.clientX,r=e.clientY}),this.canvas.addEventListener("mousemove",e=>{t&&(this.targetRotation.y+=(e.clientX-a)*.01,this.targetRotation.x+=(e.clientY-r)*.01,this.targetRotation.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,this.targetRotation.x)),a=e.clientX,r=e.clientY)}),this.canvas.addEventListener("mouseup",()=>{t=!1}),this.canvas.addEventListener("wheel",e=>{e.preventDefault(),this.zoom=Math.max(2,Math.min(10,this.zoom+e.deltaY*.01))})}async initialize(){const t=await navigator.gpu.requestAdapter();if(!t)throw new Error("No GPU");this.device=await t.requestDevice(),this.context=this.canvas.getContext("webgpu");const a=navigator.gpu.getPreferredCanvasFormat();this.context.configure({device:this.device,format:a,alphaMode:"opaque"});const r=new M;r.generate(80,50),this.vertexBuffer=this.createBuffer(r.getVertexData(),GPUBufferUsage.VERTEX),this.normalBuffer=this.createBuffer(r.getNormalData(),GPUBufferUsage.VERTEX),this.indexBuffer=this.createBuffer(r.getIndexData(),GPUBufferUsage.INDEX),this.indexCount=r.getIndexCount(),this.fiberBuffer=this.createBuffer(r.getFiberData(),GPUBufferUsage.VERTEX),this.fiberVertexCount=r.getFiberVertexCount(),this.dataSize=r.getVertexCount(),this.tensorBuffer=this.device.createBuffer({size:this.dataSize*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.uniformBuffer=this.device.createBuffer({size:160,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.computeUniformBuffer=this.device.createBuffer({size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const e=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]});this.bindGroup=this.device.createBindGroup({layout:e,entries:[{binding:0,resource:{buffer:this.uniformBuffer}},{binding:1,resource:{buffer:this.tensorBuffer}}]}),this.pipeline=this.device.createRenderPipeline({layout:this.device.createPipelineLayout({bindGroupLayouts:[e]}),vertex:{module:this.device.createShaderModule({code:b}),entryPoint:"main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]}]},fragment:{module:this.device.createShaderModule({code:P}),entryPoint:"main",targets:[{format:a,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}}),this.fiberPipeline=this.device.createRenderPipeline({layout:this.device.createPipelineLayout({bindGroupLayouts:[e]}),vertex:{module:this.device.createShaderModule({code:b}),entryPoint:"main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]}]},fragment:{module:this.device.createShaderModule({code:P}),entryPoint:"main",targets:[{format:a,blend:{color:{srcFactor:"src-alpha",dstFactor:"one",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one",operation:"add"}}}]},primitive:{topology:"line-list"},depthStencil:{depthWriteEnabled:!1,depthCompare:"less",format:"depth24plus"}});const i=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.computeBindGroup=this.device.createBindGroup({layout:i,entries:[{binding:0,resource:{buffer:this.tensorBuffer}},{binding:1,resource:{buffer:this.computeUniformBuffer}}]}),this.computePipeline=this.device.createComputePipeline({layout:this.device.createPipelineLayout({bindGroupLayouts:[i]}),compute:{module:this.device.createShaderModule({code:E}),entryPoint:"main"}}),this.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})}createBuffer(t,a){const r=this.device.createBuffer({size:t.byteLength,usage:a|GPUBufferUsage.COPY_DST});return this.device.queue.writeBuffer(r,0,t),r}setParams(t){this.params={...this.params,...t}}updateUniforms(){this.rotation.x+=(this.targetRotation.x-this.rotation.x)*.1,this.rotation.y+=(this.targetRotation.y-this.rotation.y)*.1;const t=this.canvas.width/this.canvas.height,a=m.perspective(Math.PI/4,t,.1,100),r=m.lookAt([0,0,this.zoom],[0,0,0],[0,1,0]),e=m.multiply(m.rotateX(this.rotation.x),m.rotateY(this.rotation.y)),i=m.multiply(r,a),o=m.multiply(e,i),s=new Float32Array(40);s.set(o,0),s.set(e,16),s[32]=this.time,s[33]=this.params.style,this.device.queue.writeBuffer(this.uniformBuffer,0,s);const u=new ArrayBuffer(32),l=new DataView(u);l.setFloat32(0,this.time,!0),l.setUint32(4,this.dataSize,!0),l.setFloat32(8,this.params.frequency,!0),l.setFloat32(12,this.params.amplitude,!0),l.setFloat32(16,this.params.spikeThreshold,!0),l.setFloat32(20,this.params.smoothing,!0),l.setFloat32(24,this.params.style,!0),this.device.queue.writeBuffer(this.computeUniformBuffer,0,u)}render(){if(!this.isRunning)return;const t=this.canvas.clientWidth,a=this.canvas.clientHeight;(this.canvas.width!==t||this.canvas.height!==a)&&(this.canvas.width=t,this.canvas.height=a,this.depthTexture.destroy(),this.depthTexture=this.device.createTexture({size:[t,a],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})),this.time+=.016,this.updateUniforms();const r=this.device.createCommandEncoder(),e=r.beginComputePass();e.setPipeline(this.computePipeline),e.setBindGroup(0,this.computeBindGroup),e.dispatchWorkgroups(Math.ceil(this.dataSize/64)),e.end();const i=r.beginRenderPass({colorAttachments:[{view:this.context.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:this.depthTexture.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}});i.setBindGroup(0,this.bindGroup),this.params.style>=2?(i.setPipeline(this.fiberPipeline),i.setVertexBuffer(0,this.fiberBuffer),i.setVertexBuffer(1,this.fiberBuffer),i.draw(this.fiberVertexCount)):(i.setPipeline(this.pipeline),i.setVertexBuffer(0,this.vertexBuffer),i.setVertexBuffer(1,this.normalBuffer),i.setIndexBuffer(this.indexBuffer,"uint32"),i.drawIndexed(this.indexCount)),i.end(),this.device.queue.submit([r.finish()]),requestAnimationFrame(()=>this.render())}start(){this.isRunning=!0,this.render()}stop(){this.isRunning=!1}}async function S(){const n=document.getElementById("canvas"),t=document.getElementById("error"),a={frequency:document.getElementById("freq"),amplitude:document.getElementById("amp"),spikeThreshold:document.getElementById("thresh"),smoothing:document.getElementById("smooth"),style:document.getElementById("style-mode")},r={frequency:document.getElementById("val-freq"),amplitude:document.getElementById("val-amp"),spikeThreshold:document.getElementById("val-thresh"),smoothing:document.getElementById("val-smooth")};if(!navigator.gpu){t.textContent="WebGPU is not supported in this browser.",t.style.display="block";return}try{const e=new U(n);await e.initialize();const i=(s,u)=>{const l=parseFloat(u);e.setParams({[s]:l}),r[s]&&(r[s].textContent=l.toFixed(2))};Object.keys(a).forEach(s=>{const u=a[s];u&&(i(s,u.value),u.addEventListener("input",l=>{i(s,l.target.value)}))});const o=document.getElementById("style-mode");o&&o.addEventListener("change",s=>{const u=parseFloat(s.target.value);e.setParams({style:u}),u===2?(e.setParams({frequency:8,smoothing:.2,amplitude:1.5}),a.frequency.value=8,a.smoothing.value=.2,a.amplitude.value=1.5,i("frequency",8)):u===1?(a.frequency.value=5,a.smoothing.value=.5,i("frequency",5),i("smoothing",.5)):(a.frequency.value=2,a.smoothing.value=.9,i("frequency",2),i("smoothing",.9))}),console.log("Starting renderer..."),e.start(),console.log("Renderer started")}catch(e){console.error("Failed to initialize:",e),t.textContent=`Error: ${e.message}`,t.style.display="block"}}S();
