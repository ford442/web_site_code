(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();class B{constructor(){this.vertices=[],this.indices=[],this.normals=[]}generate(t=32,o=16){this.vertices=[],this.indices=[],this.normals=[];for(let i=0;i<=o;i++){const e=i/o*Math.PI,r=Math.sin(e),a=Math.cos(e);for(let n=0;n<=t;n++){const u=n/t*2*Math.PI,f=Math.sin(u);let p=Math.cos(u)*r,l=a,m=f*r;const c=Math.sin(u*3+e*2)*.15,P=Math.cos(u*5-e*3)*.1,w=Math.sin(u*7+e*5)*.08,g=1+c+P+w;p*=g,l*=g,m*=g,this.vertices.push(p,l,m),this.normals.push(p,l,m)}}for(let i=0;i<o;i++)for(let e=0;e<t;e++){const r=i*(t+1)+e,a=r+t+1;this.indices.push(r,a,r+1),this.indices.push(a,a+1,r+1)}}getVertexData(){return new Float32Array(this.vertices)}getNormalData(){return new Float32Array(this.normals)}getIndexData(){return new Uint32Array(this.indices)}getVertexCount(){return this.vertices.length/3}getIndexCount(){return this.indices.length}}const b=`
struct Uniforms {
    modelViewProjectionMatrix: mat4x4<f32>,
    modelMatrix: mat4x4<f32>,
    time: f32,
    padding: vec3<f32>,
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

// Helper function for Heatmap Gradient (Blue -> Cyan -> Yellow -> Red)
fn getHeatmapColor(value: f32) -> vec3<f32> {
    let t = clamp(value, 0.0, 1.0);
    // Color stops
    let col0 = vec3<f32>(0.0, 0.0, 0.5); // Deep Blue (Low)
    let col1 = vec3<f32>(0.0, 1.0, 1.0); // Cyan
    let col2 = vec3<f32>(1.0, 1.0, 0.0); // Yellow
    let col3 = vec3<f32>(1.0, 0.0, 0.0); // Red (High)
    
    if (t < 0.33) {
        return mix(col0, col1, t * 3.0);
    } else if (t < 0.66) {
        return mix(col1, col2, (t - 0.33) * 3.0);
    } else {
        return mix(col2, col3, (t - 0.66) * 3.0);
    }
}

@vertex
fn main(input: VertexInput, @builtin(vertex_index) vertexIndex: u32) -> VertexOutput {
    var output: VertexOutput;
    
    // Get tensor value
    let dataIndex = vertexIndex % arrayLength(&tensorData);
    let activityLevel = tensorData[dataIndex];
    
    // Sharp displacement for "Spiking" look
    // We square the activity to make low values flat and high values pointy
    let displacementAmount = activityLevel * activityLevel * 0.4; 
    let displacement = input.normal * displacementAmount;
    let animatedPos = input.position + displacement;
    
    // Transform position
    output.position = uniforms.modelViewProjectionMatrix * vec4<f32>(animatedPos, 1.0);
    output.worldPos = (uniforms.modelMatrix * vec4<f32>(animatedPos, 1.0)).xyz;
    output.normal = normalize((uniforms.modelMatrix * vec4<f32>(input.normal, 0.0)).xyz);
    
    // Map activity to Heatmap
    // Normalize activity (-1 to 1 range -> 0 to 1 range for color)
    let normalizedActivity = (activityLevel + 0.2) * 0.8; 
    output.color = getHeatmapColor(normalizedActivity);
    output.activity = activityLevel; // Pass to fragment for glow
    
    return output;
}
`,U=`
struct FragmentInput {
    @location(0) worldPos: vec3<f32>,
    @location(1) normal: vec3<f32>,
    @location(2) color: vec3<f32>,
    @location(3) activity: f32,
}

@fragment
fn main(input: FragmentInput) -> @location(0) vec4<f32> {
    // Lighting
    let lightDir = normalize(vec3<f32>(0.5, 1.0, 0.5));
    let normal = normalize(input.normal);
    
    let ambient = 0.2;
    let diffuse = max(dot(normal, lightDir), 0.0) * 0.8;
    
    // Specular highlight for "wet/shiny" brain look
    let viewDir = normalize(-input.worldPos);
    let reflectDir = reflect(-lightDir, normal);
    let specular = pow(max(dot(viewDir, reflectDir), 0.0), 32.0) * 0.5;
    
    // Add "Self-Illumination" based on activity level
    // High activity regions emit their own light
    let emission = input.color * max(input.activity, 0.0) * 0.8;
    
    let finalColor = input.color * (ambient + diffuse) + specular + emission;
    
    return vec4<f32>(finalColor, 1.0);
}
`,M=`
struct TensorParams {
    time: f32,
    dataSize: u32,
    frequency: f32,
    amplitude: f32,
    spikeThreshold: f32,  // New param
    smoothing: f32,       // New param
    padding1: f32,        // Align to 16 bytes
    padding2: f32,
}

@group(0) @binding(0) var<storage, read_write> tensorData: array<f32>;
@group(0) @binding(1) var<uniform> params: TensorParams;

fn hash(n: f32) -> f32 {
    return fract(sin(n) * 43758.5453123);
}

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) globalId: vec3<u32>) {
    let index = globalId.x;
    if (index >= params.dataSize) { return; }
    
    let fi = f32(index);
    let t = params.time;
    
    // 1. Base Waves
    let slowWave = sin(fi * 0.05 + t * params.frequency * 0.2) * 0.2;
    let betaWave = sin(fi * 0.1 - t * params.frequency) * 0.3;
    
    // 2. High Freq Noise
    let gammaNoise = hash(fi + t) * 2.0 - 1.0; 
    let gammaWave = gammaNoise * 0.15 * (sin(t * params.frequency * 1.5) * 0.5 + 0.5);
    
    // 3. Spikes based on Threshold
    // We map the slider (0.0 - 1.0) to a trigger value
    let triggerVal = sin(fi * 0.02 + t * params.frequency * 0.5) + sin(fi * 0.03 - t * params.frequency * 0.3);
    // Invert threshold logic: Lower slider = More spikes
    let effectiveThresh = 2.0 - (params.spikeThreshold * 2.0); 
    
    var spike = 0.0;
    if (triggerVal > effectiveThresh) {
        spike = 1.0 * params.amplitude;
    }
    
    let signal = (slowWave + betaWave + gammaWave) * params.amplitude + spike;
    
    // 4. Smoothing / Decay
    // Use the smoothing parameter from UI
    let prevValue = tensorData[index];
    // smoothing 0.9 = 90% old value, 10% new value (slow trails)
    // smoothing 0.1 = 10% old value, 90% new value (fast twitch)
    let smoothFactor = 1.0 - params.smoothing; 
    tensorData[index] = mix(prevValue, signal, smoothFactor);
}
`;class d{static create(){return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}static perspective(t,o,i,e){const r=1/Math.tan(t/2),a=1/(i-e);return new Float32Array([r/o,0,0,0,0,r,0,0,0,0,(e+i)*a,-1,0,0,2*e*i*a,0])}static lookAt(t,o,i){const e=y([t[0]-o[0],t[1]-o[1],t[2]-o[2]]),r=y(x(i,e)),a=x(e,r);return new Float32Array([r[0],a[0],e[0],0,r[1],a[1],e[1],0,r[2],a[2],e[2],0,-v(r,t),-v(a,t),-v(e,t),1])}static multiply(t,o){const i=new Float32Array(16);for(let e=0;e<4;e++)for(let r=0;r<4;r++)i[e*4+r]=t[e*4+0]*o[0*4+r]+t[e*4+1]*o[1*4+r]+t[e*4+2]*o[2*4+r]+t[e*4+3]*o[3*4+r];return i}static rotateY(t){const o=Math.cos(t),i=Math.sin(t);return new Float32Array([o,0,i,0,0,1,0,0,-i,0,o,0,0,0,0,1])}static rotateX(t){const o=Math.cos(t),i=Math.sin(t);return new Float32Array([1,0,0,0,0,o,-i,0,0,i,o,0,0,0,0,1])}}function y(s){const t=Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);return t===0?[0,0,0]:[s[0]/t,s[1]/t,s[2]/t]}function x(s,t){return[s[1]*t[2]-s[2]*t[1],s[2]*t[0]-s[0]*t[2],s[0]*t[1]-s[1]*t[0]]}function v(s,t){return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]}class T{constructor(t){this.canvas=t,this.device=null,this.context=null,this.pipeline=null,this.computePipeline=null,this.rotation={x:0,y:0},this.targetRotation={x:.3,y:0},this.zoom=3.5,this.time=0,this.isRunning=!1,this.params={frequency:2,amplitude:.5,spikeThreshold:.8,smoothing:.9},this.setupInputHandlers()}setupInputHandlers(){let t=!1,o=0,i=0;this.canvas.addEventListener("mousedown",e=>{t=!0,o=e.clientX,i=e.clientY}),this.canvas.addEventListener("mousemove",e=>{if(t){const r=e.clientX-o,a=e.clientY-i;this.targetRotation.y+=r*.01,this.targetRotation.x+=a*.01,this.targetRotation.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,this.targetRotation.x)),o=e.clientX,i=e.clientY}}),this.canvas.addEventListener("mouseup",()=>{t=!1}),this.canvas.addEventListener("wheel",e=>{e.preventDefault(),this.zoom+=e.deltaY*.01,this.zoom=Math.max(2,Math.min(10,this.zoom))})}async initialize(){const t=await navigator.gpu.requestAdapter();if(!t)throw new Error("No GPU adapter found");this.device=await t.requestDevice(),this.context=this.canvas.getContext("webgpu");const o=navigator.gpu.getPreferredCanvasFormat();this.context.configure({device:this.device,format:o,alphaMode:"opaque"});const i=new B;i.generate(64,32),this.vertexBuffer=this.device.createBuffer({size:i.getVertexData().byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.vertexBuffer,0,i.getVertexData()),this.normalBuffer=this.device.createBuffer({size:i.getNormalData().byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.normalBuffer,0,i.getNormalData()),this.indexBuffer=this.device.createBuffer({size:i.getIndexData().byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.indexBuffer,0,i.getIndexData()),this.indexCount=i.getIndexCount();const e=i.getVertexCount();this.tensorBuffer=this.device.createBuffer({size:e*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});const r=new Float32Array(e);for(let h=0;h<e;h++)r[h]=Math.sin(h*.1)*.5;this.device.queue.writeBuffer(this.tensorBuffer,0,r),this.uniformBuffer=this.device.createBuffer({size:160,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.computeUniformBuffer=this.device.createBuffer({size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const a=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]});this.bindGroup=this.device.createBindGroup({layout:a,entries:[{binding:0,resource:{buffer:this.uniformBuffer}},{binding:1,resource:{buffer:this.tensorBuffer}}]});const n=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.computeBindGroup=this.device.createBindGroup({layout:n,entries:[{binding:0,resource:{buffer:this.tensorBuffer}},{binding:1,resource:{buffer:this.computeUniformBuffer}}]});const u=this.device.createPipelineLayout({bindGroupLayouts:[a]});this.pipeline=this.device.createRenderPipeline({layout:u,vertex:{module:this.device.createShaderModule({code:b}),entryPoint:"main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:"float32x3"}]}]},fragment:{module:this.device.createShaderModule({code:U}),entryPoint:"main",targets:[{format:o}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}});const f=this.device.createPipelineLayout({bindGroupLayouts:[n]});this.computePipeline=this.device.createComputePipeline({layout:f,compute:{module:this.device.createShaderModule({code:M}),entryPoint:"main"}}),this.depthTexture=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),this.dataSize=e}setParams(t){this.params={...this.params,...t}}updateUniforms(){this.rotation.x+=(this.targetRotation.x-this.rotation.x)*.1,this.rotation.y+=(this.targetRotation.y-this.rotation.y)*.1;const t=this.canvas.width/this.canvas.height,o=d.perspective(Math.PI/4,t,.1,100),i=[0,0,this.zoom],e=[0,0,0],r=[0,1,0],a=d.lookAt(i,e,r),n=d.rotateX(this.rotation.x),u=d.rotateY(this.rotation.y),f=d.multiply(u,n),h=d.multiply(o,a),p=d.multiply(h,f),l=new Float32Array(40);l.set(p,0),l.set(f,16),l[32]=this.time,this.device.queue.writeBuffer(this.uniformBuffer,0,l);const m=new ArrayBuffer(32),c=new DataView(m);c.setFloat32(0,this.time,!0),c.setUint32(4,this.dataSize,!0),c.setFloat32(8,this.params.frequency,!0),c.setFloat32(12,this.params.amplitude,!0),c.setFloat32(16,this.params.spikeThreshold,!0),c.setFloat32(20,this.params.smoothing,!0),c.setFloat32(24,0,!0),c.setFloat32(28,0,!0),this.device.queue.writeBuffer(this.computeUniformBuffer,0,m)}render(){if(!this.isRunning)return;const t=this.canvas.clientWidth,o=this.canvas.clientHeight;(this.canvas.width!==t||this.canvas.height!==o)&&(this.canvas.width=t,this.canvas.height=o,this.depthTexture.destroy(),this.depthTexture=this.device.createTexture({size:[t,o],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})),this.time+=.016,this.updateUniforms();const i=this.device.createCommandEncoder(),e=i.beginComputePass();e.setPipeline(this.computePipeline),e.setBindGroup(0,this.computeBindGroup);const r=Math.ceil(this.dataSize/64);e.dispatchWorkgroups(r),e.end();const a=i.beginRenderPass({colorAttachments:[{view:this.context.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:this.depthTexture.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}});a.setPipeline(this.pipeline),a.setBindGroup(0,this.bindGroup),a.setVertexBuffer(0,this.vertexBuffer),a.setVertexBuffer(1,this.normalBuffer),a.setIndexBuffer(this.indexBuffer,"uint32"),a.drawIndexed(this.indexCount),a.end(),this.device.queue.submit([i.finish()]),requestAnimationFrame(()=>this.render())}start(){this.isRunning=!0,this.render()}stop(){this.isRunning=!1}}async function I(){const s=document.getElementById("canvas"),t=document.getElementById("error"),o={frequency:document.getElementById("freq"),amplitude:document.getElementById("amp"),spikeThreshold:document.getElementById("thresh"),smoothing:document.getElementById("smooth")},i={frequency:document.getElementById("val-freq"),amplitude:document.getElementById("val-amp"),spikeThreshold:document.getElementById("val-thresh"),smoothing:document.getElementById("val-smooth")};if(!navigator.gpu){t.textContent="WebGPU is not supported in this browser.",t.style.display="block";return}try{const e=new T(s);await e.initialize();const r=(a,n)=>{const u=parseFloat(n);e.setParams({[a]:u}),i[a]&&(i[a].textContent=u.toFixed(2))};Object.keys(o).forEach(a=>{const n=o[a];n&&(r(a,n.value),n.addEventListener("input",u=>{r(a,u.target.value)}))}),e.start()}catch(e){console.error("Failed to initialize:",e),t.textContent=`Error: ${e.message}`,t.style.display="block"}}I();
