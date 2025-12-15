<head>
<meta charset="utf-8">
<meta name="theme-color" content="#000000">
<link rel="preconnect" href="https://js.1ink.us">
<link rel="preconnect" href="https://css.1ink.us">
<link rel="preconnect" href="https://img.1ink.us">
<link rel="preconnect" href="https://wasm.noahcohn.com">
<link rel="stylesheet" charset="utf-8" href="https://css.1ink.us/b3hd16.css"/>
<link rel="stylesheet" charset="utf-8" href="./f1ui.css"/>
<meta http-equiv="Cache-Control" content="no-cache">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<link rel="apple-touch-icon" href="./logo.png">
<link rel="icon" href="./logo.png">
</head>
<body>
<canvas></canvas>
<script type="text/javascript" charset="utf-8" src="./fluid.js"></script>
<div id="ihig" hidden></div>
<div id="iwid" hidden></div>
<div id="shut" hidden>1</div>
<iframe src="./bezz.htm" style="border-width:0px;position:absolute;top:0px;left:0px;right:0px;bottom:0px;overflow:hidden;z-index:999996;display:block;overflow-y:hidden;overflow-x:hidden;pointer-events: none;" id="circle"  title="Mask"></iframe><input type="checkbox" id="di" hidden/>
<input type="button" id="btn" style="background-color: green;position: absolute;display: block;left: 5%;top: 50%;z-index: 999997;border:5px solid #e7e7e7;border-radius:50%;" onclick="document.getElementById('di').click();"></input>
<script>
document.getElementById('btn').addEventListener('click',function(){
let hi,wi;
hi=window.innerHeight;
wi=window.innerWidth;
hi=Math.round(hi);
wi=window.innerWidth;
wi=Math.round(wi);
document.getElementById("ihig").innerHTML=hi;
document.getElementById("circle").height=hi;
document.getElementById("circle").width=wi;
let bz=new BroadcastChannel('bez');
bz.postMessage({data: 222});});
</script>
<script charset="utf-8" src="./f1ui.js"></script>
</body>
