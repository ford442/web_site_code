<html>
<head>
<meta charset="utf-8">
<meta http-equiv="cleartype" content="on">
<title>B*3*H*D</title>
<script type="text/javascript" charset="utf-8" src="https://js.1ink.us/slideout.min.js"></script>
<script type="text/javascript" charset="utf-8" src="https://js.1ink.us/rSlider.min.js"></script>
<style>
</style>
<link rel="stylesheet" charset="utf-8" href="https://css.1ink.us/b3hd16.css">
<link rel="stylesheet" charset="utf-8" href="https://css.1ink.us/rSlider.min.css"></head>
<body style="background-color:'white';">
<nav id="menu">
<h1></h1>
<section class="menu-section" id="menu-sections">

<ul class="menu-section-list">
<div style="position:absolute;width:384px;color:white;top:50px;">
<div id="slideframe">
<input type="text" id="timeslider"/>
</div>
Time between photo change

</div></ul></section></nav>
<main id="panel" style="background-color:rgba(255,255,255,0.0);">
<script>function openshut(){setTimeout(function(){document.getElementById('shut').innerHTML=2;},1300);}</script>
<canvas id="lb" style="background-color:rgba(255,255,255,0.0);image-rendering:'auto';top: 0;left: 0;bottom: 0;right: 0;width: 100%;overflow: hidden;z-index: 999994;overflow-y:hidden; overflow-x: hidden;height: 100%;"></canvas>
<div id="rra" hidden>0</div>
<div id="rrab" hidden>0</div>
<div id="rrb" hidden>0</div>
<div id="rrbb" hidden>0</div>
<div id="rrc" hidden>0</div>
<div id="rrcb" hidden>0</div>
<div id="mainr" hidden>16</div>
<iframe src="hex/custom723.html" charset="utf-8" style="position: absolute;top: 0px;left: 0px;right:  0px; bottom: 0px;overflow: hidden;z-index: 999996;padding: 0;display: block;overflow-y: hidden; overflow-x: hidden;" id="circle" onload="openshut()" title="Circular marquee mask"></iframe>
<input type="button" id="buttona" style="color: green;position: absolute;display: block;left: 5vh;top: 50vh;z-index: 999997;"/>
<input type="button" id="sttp" style="color: green;background-color:green;position: absolute;display: block;left: 5%;top: 75%;z-index: 999997;"/>
<div style="z-index: 999997;display: block;position:absolute;left: 6%;bottom: 50vh;color:green;font-size:2.0em;">Menu</div>
<input type="checkbox" id="di" hidden/>
<div id="iwid" hidden></div>
<div id="ihig" hidden></div>
<div id="wid" hidden></div>
<div id="hig" hidden></div>
<div id="tim" hidden></div>
<div id="inhred" hidden></div>
<div id="frate" hidden></div>
<div id="temptime" hidden>8000</div>
<div id="frptr" hidden></div>
<div id="shut" hidden>1</div>
<div class=emscripten id=status></div>

<div id="wrapper">
<div style="position:absolute;display:block;top:0;height:100vh;width:100vw;">
<img hidden=false id=imgA style="opacity:1;position:absolute;z-index:999991;height:100vh;width:100vw;"></img>
<img hidden=true id=imgB  style="opacity:1;position:absolute;z-index:999992;height:100vh;width:100vw;"></img>
</div>

<div class="px-video-container" id="myvid">

<div class="px-video-wrapper" id="wrap" style="position:absolute;z-index:999995;height:100vh;width:100vh;">

<div id="flip">
<div id="flipB">

<div id="cp" style="background-color:rgba(255,255,255,0.0);">
<canvas hidden id="tcanvas"></canvas>
<canvas id="imag"></canvas>
<canvas id="imag2" style="position:absolute;display:block;top:0;z-index:999994;opacity:1;height:100vh;width:100vh;background-color:rgba(255,255,255,0.0);"></canvas>
<canvas id="imag3" style="position:absolute;display:block;top:0;z-index:999995;opacity:1;height:100vh;width:100vh;background-color:rgba(255,255,255,0.0);"></canvas>
</div>
</div>
</div></div></div></div></main>

<img hidden src="" name="playing" id="myvideo" height="" width="" style="position:absolute;z-index:999993;top:0;height:100vh;width:auto;"></img>
<img hidden src="" name="loading" id="loadv" height="" width="" style="position:absolute;z-index:999993;top:0;height:100vh;width:auto;"></img>
<img src="" name="load" id="loadv1" height="" width="" style="position:absolute;z-index:999998;top:20vh;height:20vh;left:2vh;width:20vh;width:auto;"></img>
<img src="" name="load" id="loadv2" height="" width="" style="position:absolute;z-index:999998;top:40vh;height:20vh;right:2vh;width:20vh;width:auto;"></img>

<script>
const pnnl=document.body;

let Mov=1;
let vv=document.getElementById("sttp");

function doKey(e){
if(e.code=='Space'){
e.preventDefault();
if(Mov==1){console.log("change off");Mov=0;vv.style.backgroundColor='red';}
else if(Mov==0){console.log("change on");Mov=1;vv.style.backgroundColor='green';}
}
}

function doK(){
if(Mov==1){console.log("change off");Mov=0;vv.style.backgroundColor='red';}
else if(Mov==0){console.log("change on");Mov=1;vv.style.backgroundColor='green';}
}


pnnl.addEventListener('keydown',doKey);
vv.addEventListener('click',doK);

var mil,sfr,slo,tsl,tem,dat,datb,pan,a,hms,rihe,higg,slt,$loo,he,wi,adr,inhre,ihe,rato,iwi,nrato,nvids,$vids,hig,men,di,$lt,rnum,$sc,$rtm,$rn,$ls,endc,lo,mv,vide,adrl;
tem=document.getElementById("temptime");
pan=document.getElementById("panel");
ban=document.getElementById("buttona");
sfr=document.getElementById("slideframe");
function grab$lt(){
$lt=tem.innerHTML;
$lt=($lt*10);
$lt=Math.round($lt);
$lt=($lt/10);}
grab$lt();
slo=new Slideout({
"panel":document.getElementById("panel"),
"menu":document.getElementById("menu"),
"padding":384,
"tolerance":70,
"easing":"cubic-bezier(.32,2,.55,.27)"});
ban.addEventListener("click",function(){
slo.toggle();
sfr.innerHTML="";
setTimeout(function(){
sfr.innerHTML='<input type='+'"te'+'xt"id'+'="time'+'slider"/'+'>';
tsl=new rSlider({
target:"#timeslider",
values:{min:1,max:24},
step:[0.5],
labels:false,
tooltip:true,
scale:false,});
grab$lt();
slt=($lt/1000);
slt=(slt*10);
slt=Math.round(slt);
slt=(slt/10);
tsl.setValues(slt);
document.getElementById("menu").addEventListener("click",function(){
$loo=tsl.getValue();
$loo=($loo*10);
$loo=Math.round($loo);
$loo=($loo/10);
$loo=($loo*1000);
tem.innerHTML=$loo;});
setTimeout(function(){
slt=tem.innerHTML;},8);},16);});
nvids=<?php $cntr=file_get_contents("ctr.txt");echo "$cntr";?>;
$vids=<?php $cnt=file_get_contents("vids.txt");echo "$cnt";?>;
adr=$vids[0][0];
wi=$vids[0][1];
he=$vids[0][2];
document.getElementById("hig").innerHTML=he;
document.getElementById("wid").innerHTML=wi;
inhre=window.innerHeight;
inhre=Math.round(inhre);
document.getElementById("inhred").innerHTML=inhre;
rato=((wi/he)*100);
rato=Math.round(rato);
rato=(rato/100);
ihe=window.innerHeight;
ihe=Math.round(ihe);
iwi=(ihe*rato);
dat=document.getElementById("inhred");
datb=document.getElementById("ihig");
higg=(inhre+"px");
document.getElementById("ihig").innerHTML=ihe;
document.getElementById("iwid").innerHTML=iwi;
document.getElementById("wrap").style.lineheight=higg;
document.getElementById("wrap").style.height=higg;
document.getElementById("myvideo").src=adr;
function loada(){
if(Mov==1){
inhre=window.innerHeight;
inhre=Math.round(inhre);
document.getElementById("inhred").innerHTML=inhre;
$lt=tem.innerHTML;
$ldt=($lt*0.4);
$ldt=Math.round($ldt);
$ls=(($lt/1000)+(2*($ldt/1000)));
$ldt=Math.round($ldt);
$rn=Math.random();
rnum=($rn*nvids);
rnum=Math.round(rnum);
wi=$vids[rnum][1];
he=$vids[rnum][2];
document.getElementById("ihig").innerHTML=he;
document.getElementById("iwid").innerHTML=wi;
adrl="https://img.1ink.us/cr1p/";
adr=$vids[rnum][0];
ihe=window.innerHeight;
ihe=(ihe*1);
ihe=Math.round(ihe);
rato=((ihe/he)*100);
rato=Math.round(rato);
rato=(rato/100);
iwi=(wi*rato);
iwi=Math.round(iwi);
dat=document.getElementById("inhred");
inhre=(dat.innerHTML);
high=(ihe-dat.innerHTML);
window.scroll(0,0);
setTimeout(function(){
higg=(inhre+"px");},$ldt);
vide=document.querySelectorAll("img");
document.getElementById("ihig").innerHTML=ihe;
document.getElementById("iwid").innerHTML=ihe;
document.getElementById("loadv").src=adr;

// document.getElementById("loadv").width=iwi;
// document.getElementById("loadv").height=ihe;


setTimeout(function(){
var cirw=window.innerWidth+5;
var cirh=ihe+5;
document.getElementById("circle").style.width=window.innerWidth+"px";
document.getElementById("circle").style.height=ihe+"px";
document.getElementById("wrap").style.lineheight=higg;
// document.getElementById("wrap").style.height=higg;
// document.getElementById("wrap").style.width=iwi+"px";

document.getElementById("wrap").style.height=ihe+"px";
document.getElementById("wrap").style.width=ihe+"px";
document.getElementById("myvid").style.height=ihe+"px";
document.getElementById("myvid").style.width=ihe+"px";

document.getElementById("imag").height=ihe;
document.getElementById("imag").width=ihe;
document.getElementById("imag2").height=ihe;
document.getElementById("imag2").width=ihe;
document.getElementById("imag3").height=ihe;
document.getElementById("imag3").width=ihe;
document.getElementById("loadv1").src=adr;
mv=vide[2].id;
lo=vide[3].id;
vide[2].id=lo;
vide[3].id=mv;
document.getElementById("di").click();
var contxVars={
// colorType:'float64',
precision:'highp',
preferLowPowerToHighPerformance:false,
alpha:true,
depth:false,
stencil:false,
preserveDrawingBuffer:false,
premultipliedAlpha:false,
// imageSmoothingEnabled:false,
willReadFrequently:false,
lowLatency:false,
desynchronized:false,
powerPreference:'high-performance',
antialias:false
};
    const canvas = document.getElementById("tcanvas")
            const ctx = canvas.getContext('2d',contxVars);
            const imgWidth = document.getElementById("myvideo").naturalWidth;
            const imgHeight = document.getElementById("myvideo").naturalHeight;
            console.log('got image size:',imgWidth,' ',imgHeight);
            const maxSize = Math.max(imgWidth, imgHeight);
            canvas.width = maxSize;
            canvas.height = maxSize;
            const xPadding = (maxSize - imgWidth) / 2;
            const yPadding = (maxSize - imgHeight) / 2;
            ctx.clearRect(0, 0, maxSize, maxSize);
            ctx.drawImage(document.getElementById("myvideo"), xPadding, yPadding);
            const dataURL = canvas.toDataURL('image/png');
            document.getElementById("myvideo").src = dataURL;
            document.getElementById("myvideo").height = maxSize;
            document.getElementById("myvideo").width = maxSize;
document.getElementById("ihig").innerHTML=maxSize;
document.getElementById("iwid").innerHTML=maxSize;
},$ldt);
// setTimeout(function(){document.getElementById("loadv").hidden=false;document.getElementById("myvideo").hidden=false;
// setTimeout(function(){document.getElementById("loadv").hidden=true;document.getElementById("myvideo").hidden=true;
// },2200);},200);
}
setTimeout(function(){
loada();},$lt);}
loada();
let scr=document.createElement("script");
scr.async=true;
scr.charset='utf-8';
scr.type='text/javascript';
scr.defer=true;
// scr.src="https://wasm.noahcohn.com/b3hd/080123.1ijs";
// scr.src="https://wasm.noahcohn.com/b3hd/cc003.1ijs";
// scr.src="https://wasm.noahcohn.com/b3hd/w0-003-crp.1ijs";
// scr.src="https://wasm.noahcohn.com/b3hd/o0-001.1ijs";
scr.src="https://wasm.noahcohn.com/b3hd/o0-003.1ijs";
document.body.appendChild(scr);
</script>

    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js"></script>
<script src="https://cdn.jsdelivr.net/npm/webdnn@1.2.11/dist/webdnn.min.js"></script>

    <script src="https://js.1ink.us/nunif/ort/ortall.1ijs"  charset="utf-8"></script>
   <script src="https://js.1ink.us/nunif/simd.1ijs" charset="utf-8"></script>

</body></html>
