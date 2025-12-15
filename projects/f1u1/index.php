<head>
<meta charset="utf-8">
<meta name="theme-color" content="#dbfdff">
<link rel="preconnect" href="https://js.1ink.us">
<link rel="preconnect" href="https://css.1ink.us">
<link rel="preconnect" href="https://img.1ink.us">
<link rel="preconnect" href="https://wasm.noahcohn.com">
<link rel="stylesheet" charset="UTF-8" href="https://css.1ink.us/b3hd16.css"/>
<link rel="stylesheet" href="./style.css">
</head>
<body>

<canvas class="emscripten" id="canvas" oncontextmenu="event.preventDefault()" style="cursor:url(cursor.cur),auto;"></canvas>
<div id="footer">
<textarea class="emscripten" id="output" rows=5></textarea>
</div>
<h3>by ArthurSonzogni</h3>
<div id="ihig" hidden>
</div>
<div id="di" hidden>
</div>
<div id="dis" hidden>
</div>
<div id="iwid" hidden>
</div>
<div id="shut" hidden>
1
</div>
<input type="checkbox" id="di" hidden/>
<iframe src="./bezz.htm" style="border-width:0px;position:absolute;top:0px;left:0px;right:0px;bottom:0px;overflow:hidden;z-index:999996;display:block;overflow-y:hidden;overflow-x:hidden;pointer-events: none;" id="circle" title="Mask">
</iframe>
<input type="button" id="btn" style="background-color:green;position: absolute;display:block;left:5%;top:50%;z-index:999997;border:5px solid #e7e7e7;border-radius:30%;">
</input>
</body>
<script>
let hi = window.innerHeight;
let wi = window.innerWidth; 
document.getElementById("ihig").innerHTML = hi;
document.getElementById("iwid").innerHTML = wi;
document.getElementById('btn').addEventListener('click', function() {
var bz = new BroadcastChannel('bez');
bz.postMessage({data: 222});
document.getElementById("di").click();
document.getElementById("circle").width = wi;
document.getElementById("circle").height = window.innerHeight;
document.getElementById('canvas').width=window.innerHeight;
document.getElementById('canvas').height=window.innerHeight; 
});
</script>
<script charset="utf-8" src="./loadEmscripten.16.js"></script>
<script charset="utf-8" src="./wasm/f1u1.16.js"></script>
