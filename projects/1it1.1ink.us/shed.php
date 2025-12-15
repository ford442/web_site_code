<head>
<meta charset="UTF-8">
<link rel="preconnect" href="https://css.1ink.us"/>
<link rel="preconnect" href="https://js.1ink.us"/>
<link rel="preconnect" href="https://img.1ink.us">
<link rel="preconnect" href="https://wasm.noahcohn.com"/>
<title>
B*3*H*D
</title>
<script charset="UTF-8" src="https://js.1ink.us/shader-web-background.min.js">
</script>
<script type="x-shader/x-fragment" id="Image">
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform vec2 iMouse;
const float PI = 3.14159265359;

#define texture texture2D
<?php $cnt=file_get_contents("./circuit");echo "$cnt";?>
void main(){
mainImage(gl_FragColor,gl_FragCoord.xy);
}
</script>
<style>
::-webkit-scrollbar{display:none;}
#wrap{padding-top:0em;position:absolute;top:50%;left:50%;-moz-transform:translateX(-50%)translateY(-50%);-webkit-transform:translateX(-50%)translateY(-50%);transform:translateX(-50%)translateY(-50%);}
canvas {height:100vh;width:100vh;image-rendering:pixelated;}
body{background-color:black;overflow-x:hidden;overflow-y:scroll;}
</style>
</head>
<body>
<nav id="menu">
<section class="menu-section" id="menu-sections">
<br>
<div style="text-align:center;">
TIMESLIDER</div>
<br><br>
<ul class="menu-section-list">
<div id="mnu">
<div id="slideframe">
<input type="text" id="timeslider"/>
</div></div></ul></section></nav>
<main id="panel">
<script>
function opn(){
setTimeout(
function(){
document.getElementById('shut').innerHTML=2;
document.getElementById('ihig').innerHTML=window.innerHeight;
document.getElementById('iwid').innerHTML=window.innerWidth;
document.getElementById('bz').height=window.innerHeight;
document.getElementById('bz').width=window.innerWidth;
document.getElementById('wrap').width=window.innerHeight;
document.getElementById('wrap').height=window.innerHeight;
document.getElementById('vcanvas').width=window.innerHeight;
document.getElementById('vcanvas').height=window.innerHeight;
document.getElementById('di').click();
},300)}
</script>
<iframe src="./bezz.htm" style="border-width:0px;position:absolute;top:0px;left:0px;right:0px;bottom:0px;overflow: hidden;z-index:999996;display:block;overflow-y:hidden;overflow-x:hidden;pointer-events: none;" id="bz" onload="opn();" title="Circular mask"></iframe>
<input type="button" id="btn1" style="background-color:black;position:absolute;display:block;left:5%;top:50%;z-index:999997;border:5px solid #e7e7e7;border-radius:50%;"></input>
<input type="button" id="btn3" style="background-color:purple;position:absolute;display:block;left:3%;top:13%;z-index:999997;border:5px solid red;border-radius:50%;" onclick="document.getElementById('di').click();"></input>
<input type="button" id="btn" style="background-color:blue;position:absolute;display:block;left:3%;top:23%;z-index:999997;border:5px solid red;border-radius:50%;" onclick="document.getElementById('di').click();"></input>
<input type="button" id="btn2" style="background-color:white;position:absolute;display:block;left:3%;top:3%;z-index:999997;border:5px solid red;border-radius:50%;" onclick="document.getElementById('di').click();"></input>
<input type="button" id="btn4" style="background-color:grey;position:absolute;display:block;left:3%;top:33%;z-index:999997;border:5px solid red;border-radius:50%;" onclick="document.getElementById('di').click();"></input>
<input type="button" id="btn5" style="background-color:pink;position:absolute;display:block;left:3%;top:43%;z-index:999997;border:5px solid red;border-radius:50%;" onclick="document.getElementById('di').click();"></input>
<input type="button" id="btn6" style="background-color:yellow;position:absolute;display:block;left:3%;top:53%;z-index:999997;border:5px solid red;border-radius:50%;"></input>
<input type="button" id="btn7" style="background-color:black;position:absolute;display:block;left:3%;top:63%;z-index:999997;border:5px solid red;border-radius:50%;"></input>
<input type="button" id="btn8" style="background-color:cyan;position:absolute;display:block;left:3%;top:73%;z-index:999997;border:5px solid green;border-radius:50%;"></input>
<div id="wrap">
<canvas id="vcanvas">
</canvas>
</div>
<input type="checkbox" id="di" hidden/>
<input type="checkbox" id="dis" hidden/>
<div hidden id="path"></div>
<div hidden id="path2"></div>
<div hidden id="path3"></div>
<div hidden id="path4"></div>
<div id="iwid" hidden></div>
<div id="ihig" hidden></div>
<div id="pmhig" hidden></div>
<div id="wid" hidden></div>
<div id="hig" hidden></div>
<div id="ihid" hidden></div>
<div id="frate" hidden></div>
<div id="tim" hidden>13000</div>
<div id="shut" hidden>1</div>
</main>
<script>
let mouseX;
let mouseY;
document.addEventListener("mousemove",(event) =>{
mouseX=event.clientX;
mouseY=event.clientY;
});
let shaderMouseX;
let shaderMouseY;
setTimeout(function(){
shaderWebBackground.shade({
onResize: (width, height) => {
minDimension = Math.min(width, height);
},
onInit:(ctx) =>{
mouseX=ctx.cssWidth/2;
mouseY=ctx.cssHeight/2;},
onBeforeFrame:(ctx) =>{
time = performance.now() / 1000;
shaderMouseX=ctx.toShaderX(mouseX);
shaderMouseY=ctx.toShaderY(mouseY);},
canvas:document.getElementById("vcanvas"),
shaders:{
Image:{
uniforms:{
iChannel0: (gl, loc, ctx) => ctx.texture(loc, ctx.buffers.BufferD),
iMinDimension: (gl, loc) => gl.uniform1f(loc, minDimension),
iMouse:(gl,loc) => gl.uniform2f(loc,shaderMouseX, shaderMouseY),
iResolution:(gl,loc,ctx) => gl.uniform2f(loc, ctx.width,ctx.height),
iTime:(gl, loc) => gl.uniform1f(loc, performance.now()/1000),
}}}});},2000);
</script>
</body>
