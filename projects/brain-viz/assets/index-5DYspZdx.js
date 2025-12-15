(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}})();class w{constructor(){this.vertices=[],this.indices=[],this.normals=[],this.fiberVertices=[]}generate(e=64,a=32){this.vertices=[],this.indices=[],this.normals=[],this.fiberVertices=[];for(let r=0;r<=a;r++){const t=r/a*Math.PI,i=Math.sin(t),o=Math.cos(t);for(let l=0;l<=e;l++){const n=l/e*2*Math.PI,u=Math.sin(n);let f=Math.cos(n)*i,d=o,h=u*i;const b=Math.sin(n*3+t*2)*.15,P=Math.cos(n*5-t*3)*.1,B=Math.sin(n*7+t*5)*.08,p=1+b+P+B;f*=p,d*=p,h*=p,this.vertices.push(f,d,h),this.normals.push(f,d,h),this.fiberVertices.push(f,d,h),this.fiberVertices.push(f,d,h)}}for(let r=0;r<a;r++)for(let t=0;t<e;t++){const i=r*(e+1)+t,o=i+e+1;this.indices.push(i,o,i+1),this.indices.push(o,o+1,i+1)}}getVertexData(){return new Float32Array(this.vertices)}getNormalData(){return new Float32Array(this.normals)}getIndexData(){return new Uint32Array(this.indices)}getFiberData(){return new Float32Array(this.fiberVertices)}getVertexCount(){return this.vertices.length/3}getIndexCount(){return this.indices.length}getFiberVertexCount(){return this.fiberVertices.length/3}}const g=`
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
    @location(1) normal: vec3<f32>, // Only used in solid mode
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

// Helper for Heatmap (Organic)
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
    var finalPos = input.position;
    var finalNormal = input.normal;
    var finalColor = vec3<f32>(0.0);
    
    // --- CONNECTOME MODE (Style 2) ---
    if (uniforms.style >= 2.0) {
        // In Fiber Mode, we have 2 vertices per fiber.
        // Even indices = Roots, Odd indices = Tips.
        let isTip = f32(vertexIndex % 2);
        let dataIndex = vertexIndex / 2; // Map pair to single data point
        
        // Safe data lookup
        let activity = tensorData[dataIndex % arrayLength(&tensorData)];
        
        // Calculate normal for fiber (approximate as direction from center)
        let normalDir = normalize(input.position);
        finalNormal = normalDir;
        
        // Animate the Tip
        if (isTip > 0.5) {
            // "Angular" radiation: Fibers grow based on activity
            // Length multiplier
            let length = 0.1 + (activity * 0.4); 
            
            // Add some "curl" or "flow" using sine waves on position
            let curl = vec3<f32>(
                sin(input.position.y * 10.0 + uniforms.time),
                cos(input.position.z * 10.0 + uniforms.time),
                sin(input.position.x * 10.0)
            ) * 0.05 * activity;
            
            finalPos = input.position + (normalDir * length) + curl;
            
            // Tip Color (Bright)
            // Color mapping based on direction (DTI style) or activity
            let dirColor = abs(normalDir); // RGB = XYZ direction
            finalColor = mix(dirColor, vec3<f32>(1.0, 1.0, 1.0), activity); 
        } else {
            // Root Color (Darker)
            finalColor = vec3<f32>(0.0, 0.0, 0.1); 
        }
        
        output.activity = activity;
        
    } else {
        // --- SOLID MODES (0 & 1) ---
        let dataIndex = vertexIndex % arrayLength(&tensorData);
        let activity = tensorData[dataIndex];
        
        var displacement = vec3<f32>(0.0);
        
        if (uniforms.style < 0.5) {
            // Organic
            displacement = input.normal * activity * activity * 0.4;
            finalColor = getHeatmapColor((activity + 0.2) * 0.8);
        } else {
            // Cyber
            let glitch = floor(activity * 5.0) / 5.0;
            displacement = input.normal * glitch * 0.6;
            finalColor = vec3<f32>(0.0, 0.2, 0.3);
        }
        
        finalPos = input.position + displacement;
        output.activity = activity;
    }

    // Common Transforms
    output.position = uniforms.mvpMatrix * vec4<f32>(finalPos, 1.0);
    output.worldPos = (uniforms.modelMatrix * vec4<f32>(finalPos, 1.0)).xyz;
    output.normal = normalize((uniforms.modelMatrix * vec4<f32>(finalNormal, 0.0)).xyz);
    output.color = finalColor;
    
    return output;
}
`,v=`
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
        // --- CONNECTOME MODE ---
        // Glowing lines. Alpha fades based on activity to make inactive fibers subtle
        let alpha = 0.3 + (input.activity * 0.7);
        return vec4<f32>(input.color, alpha);
    }
    
    // ... (Keep existing Organic/Cyber logic from previous steps) ...
    let normal = normalize(input.normal);
    let viewDir = normalize(vec3<f32>(0.0, 0.0, 5.0) - input.worldPos);
    var finalColor = vec3<f32>(0.0);
    
    if (uniforms.style < 0.5) {
        // Organic
        let lightDir = normalize(vec3<f32>(0.5, 1.0, 0.5));
        let diffuse = max(dot(normal, lightDir), 0.0) * 0.8;
        let specular = pow(max(dot(viewDir, reflect(-lightDir, normal)), 0.0), 32.0) * 0.6;
        finalColor = input.color * (0.2 + diffuse) + specular + (input.color * max(input.activity,0.0)*0.5);
    } else {
        // Cyber
        let fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 2.5);
        let rim = vec3<f32>(0.0, 0.8, 1.0);
        let spike = vec3<f32>(1.0, 0.0, 0.8) * max(input.activity, 0.0) * 2.5;
        finalColor = vec3<f32>(0.02) + (rim * fresnel) + spike;
    }
    return vec4<f32>(finalColor, 1.0);
}
`,C=`
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
    
    // Universal Math (mix of styles for general data movement)
    let wave = sin(fi * 0.05 + t * params.frequency);
    let noise = hash(fi + t) * 2.0 - 1.0;
    
    if (params.style >= 2.0) {
        // Connectome math: Fast pulses
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
`;class c{static create(){return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}static perspective(e,a,r,t){const i=1/Math.tan(e/2);return new Float32Array([i/a,0,0,0,0,i,0,0,0,0,t/(r-t),-1,0,0,t*r/(r-t),0])}static lookAt(e,a,r){const t=y([e[0]-a[0],e[1]-a[1],e[2]-a[2]]),i=y(x(r,t)),o=x(t,i);return new Float32Array([i[0],o[0],t[0],0,i[1],o[1],t[1],0,i[2],o[2],t[2],0,-m(i,e),-m(o,e),-m(t,e),1])}static multiply(e,a){const r=new Float32Array(16);for(let t=0;t<4;t++)for(let i=0;i<4;i++)r[t*4+i]=e[t*4+0]*a[0*4+i]+e[t*4+1]*a[1*4+i]+e[t*4+2]*a[2*4+i]+e[t*4+3]*a[3*4+i];return r}static transpose(e){return new Float32Array([e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15]])}static rotateY(e){const a=Math.cos(e),r=Math.sin(e);return new Float32Array([a,0,-r,0,0,1,0,0,r,0,a,0,0,0,0,1])}static rotateX(e){const a=Math.cos(e),r=Math.sin(e);return new Float32Array([1,0,0,0,0,a,r,0,0,-r,a,0,0,0,0,1])}}function y(s){const e=Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);return e===0?[0,0,0]:[s[0]/e,s[1]/e,s[2]/e]}function x(s,e){return[s[1]*e[2]-s[2]*e[1],s[2]*e[0]-s[0]*e[2],s[0]*e[1]-s[1]*e[0]]}function m(s,e){return s[0]*e[0]+s[1]*e[1]+s[2]*e[2]}class E{constructor(e){this.canvas=e,this.device=null,this.context=null,this.pipeline=null,this.fiberPipeline=null,this.rotation={x:0,y:0},this.targetRotation={x:.3,y:0},this.zoom=3.5,this.time=0,this.isRunning=!1,this.params={frequency:2,amplitude:.5,spikeThreshold:.8,smoothing:.9,style:0},this.setupInputHandlers()}setupInputHandlers(){let e=!1,a=0,r=0;this.canvas.addEventListener("mousedown",t=>{e=!0,a=t.clientX,r=t.clientY}),this.canvas.addEventListener("mousemove",t=>{e&&(this.targetRotation.y+=(t.clientX-a)*.01,this.targetRotation.x+=(t.clientY-r)*.01,this.targetRotation.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,this.targetRotation.x)),a=t.clientX,r=t.clientY)}),this.canvas.addEventListener("mouseup",()=>{e=!1}),this.canvas.addEventListener("wheel",t=>{t.preventDefault(),this.zoom=Math.max(2,Math.min(10,this.zoom+t.deltaY*.01))})}async initialize(){const e=await navigator.gpu.requestAdapter();if(!e)throw new Error("No GPU");this.device=await e.requestDevice(),this.context=this.canvas.getContext("webgpu");const a=navigator.gpu.getPreferredCanvasFormat();this.context.configure({device:this.device,format:a,alphaMode:"opaque"});const r=new w;r.generate(80,50),this.vertexBuffer=this.createBuffer(r.getVertexData(),GPUBufferUsage.VERTEX),this.normalBuffer=this.createBuffer(r.getNormalData(),GPUBufferUsage.VERTEX),this.indexBuffer=this.createBuffer(r.getIndexData(),GPUBufferUsage.INDEX),this.indexCount=r.getIndexCount(),this.fiberBuffer=this.createBuffer(r.getFiberData(),GPUBufferUsage.VERTEX),this.fiberVertexCount=r.getFiberVertexCount(),this.dataSize=r.getVertexCount(),this.tensorBuffer=this.device.createBuffer({size:this.dataSize*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.uniformBuffer=this.device.createBuffer({size:160,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.computeUniformBuffer=this.device.createBuffer({size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const t=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]});this.bindGroup=this.device.createBindGroup({layout:t,entries:[{binding:0,resource:{buffer:this.uniformBuffer}},{binding:1,resource:{buffer:this.tensorBuffer}}]}),this.pipeline=this.device.createRenderPipeline({layout:this.device.createPipelineLayout({bindGroupLayouts:[t]}),vertex:{module:this.device.createShaderModule({code:g}),entryPoint:"main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]}]},fragment:{module:this.device.createShaderModule({code:v}),entryPoint:"main",targets:[{format:a,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}}),this.fiberPipeline=this.device.createRenderPipeline({layout:this.device.createPipelineLayout({bindGroupLayouts:[t]}),vertex:{module:this.device.createShaderModule({code:g}),entryPoint:"main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"},{shaderLocation:1,offset:0,format:"float32x3"}]}]},fragment:{module:this.device.createShaderModule({code:v}),entryPoint:"main",targets:[{format:a,blend:{color:{srcFactor:"src-alpha",dstFactor:"one",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one",operation:"add"}}}]},primitive:{topology:"line-list"},depthStencil:{depthWriteEnabled:!1,depthCompare:"less",format:"depth24plus"}});const i=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.computeBindGroup=this.device.createBindGroup({layout:i,entries:[{binding:0,resource:{buffer:this.tensorBuffer}},{binding:1,resource:{buffer:this.computeUniformBuffer}}]}),this.computePipeline=this.device.createComputePipeline({layout:this.device.createPipelineLayout({bindGroupLayouts:[i]}),compute:{module:this.device.createShaderModule({code:C}),entryPoint:"main"}}),this.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})}createBuffer(e,a){const r=this.device.createBuffer({size:e.byteLength,usage:a|GPUBufferUsage.COPY_DST});return this.device.queue.writeBuffer(r,0,e),r}setParams(e){this.params={...this.params,...e}}updateUniforms(){this.rotation.x+=(this.targetRotation.x-this.rotation.x)*.1,this.rotation.y+=(this.targetRotation.y-this.rotation.y)*.1;const e=this.canvas.width/this.canvas.height,a=c.perspective(Math.PI/4,e,.1,100),r=c.lookAt([0,0,this.zoom],[0,0,0],[0,1,0]),t=c.multiply(c.rotateY(this.rotation.y),c.rotateX(this.rotation.x)),i=c.multiply(c.multiply(a,r),t),o=new Float32Array(40);o.set(i,0),o.set(t,16),o[32]=this.time,o[33]=this.params.style,this.device.queue.writeBuffer(this.uniformBuffer,0,o);const l=new ArrayBuffer(32),n=new DataView(l);n.setFloat32(0,this.time,!0),n.setUint32(4,this.dataSize,!0),n.setFloat32(8,this.params.frequency,!0),n.setFloat32(12,this.params.amplitude,!0),n.setFloat32(16,this.params.spikeThreshold,!0),n.setFloat32(20,this.params.smoothing,!0),n.setFloat32(24,this.params.style,!0),this.device.queue.writeBuffer(this.computeUniformBuffer,0,l)}render(){if(!this.isRunning)return;const e=this.canvas.clientWidth,a=this.canvas.clientHeight;(this.canvas.width!==e||this.canvas.height!==a)&&(this.canvas.width=e,this.canvas.height=a,this.depthTexture.destroy(),this.depthTexture=this.device.createTexture({size:[e,a],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})),this.time+=.016,this.updateUniforms();const r=this.device.createCommandEncoder(),t=r.beginComputePass();t.setPipeline(this.computePipeline),t.setBindGroup(0,this.computeBindGroup),t.dispatchWorkgroups(Math.ceil(this.dataSize/64)),t.end();const i=r.beginRenderPass({colorAttachments:[{view:this.context.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:this.depthTexture.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}});i.setBindGroup(0,this.bindGroup),this.params.style>=2?(i.setPipeline(this.fiberPipeline),i.setVertexBuffer(0,this.fiberBuffer),i.draw(this.fiberVertexCount)):(i.setPipeline(this.pipeline),i.setVertexBuffer(0,this.vertexBuffer),i.setVertexBuffer(1,this.normalBuffer),i.setIndexBuffer(this.indexBuffer,"uint32"),i.drawIndexed(this.indexCount)),i.end(),this.device.queue.submit([r.finish()]),requestAnimationFrame(()=>this.render())}start(){this.isRunning=!0,this.render()}stop(){this.isRunning=!1}}async function M(){const s=document.getElementById("canvas"),e=document.getElementById("error"),a={frequency:document.getElementById("freq"),amplitude:document.getElementById("amp"),spikeThreshold:document.getElementById("thresh"),smoothing:document.getElementById("smooth"),style:document.getElementById("style-mode")},r={frequency:document.getElementById("val-freq"),amplitude:document.getElementById("val-amp"),spikeThreshold:document.getElementById("val-thresh"),smoothing:document.getElementById("val-smooth")};if(!navigator.gpu){e.textContent="WebGPU is not supported in this browser.",e.style.display="block";return}try{const t=new E(s);await t.initialize();const i=(l,n)=>{const u=parseFloat(n);t.setParams({[l]:u}),r[l]&&(r[l].textContent=u.toFixed(2))};Object.keys(a).forEach(l=>{const n=a[l];n&&(i(l,n.value),n.addEventListener("input",u=>{i(l,u.target.value)}))});const o=document.getElementById("style-mode");o&&o.addEventListener("change",l=>{const n=parseFloat(l.target.value);t.setParams({style:n}),n===2?(t.setParams({frequency:8,smoothing:.2,amplitude:1.5}),a.frequency.value=8,a.smoothing.value=.2,a.amplitude.value=1.5,i("frequency",8)):n===1?(a.frequency.value=5,a.smoothing.value=.5,i("frequency",5),i("smoothing",.5)):(a.frequency.value=2,a.smoothing.value=.9,i("frequency",2),i("smoothing",.9))}),t.start()}catch(t){console.error("Failed to initialize:",t),e.textContent=`Error: ${t.message}`,e.style.display="block"}}M();
