<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://js.1ink.us">
<link rel="preconnect" href="https://css.1ink.us">
<link rel="preconnect" href="https://img.1ink.us">
<link rel="preconnect" href="https://wasm.noahcohn.com">
<link rel="stylesheet" charset="UTF-8" href="https://css.1ink.us/b3hd16.css"/>

  <title>Project M</title>
  <style>
  body {
  background: #FF333333;
  font-family: arial;
  margin: 0;
  padding: none;
}

body>div,
body>div:-webkit-full-screen {
  background: black;
}

.emscripten {
  padding-right: 0;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

div.emscripten {
  text-align: center;
}

canvas.emscripten {
  border: 0px none;
  background-color: #333333;
  border-top-left-radius: 1.5% 2%;
  border-top-right-radius: 1.5% 2%;
  border-bottom-left-radius: 1.5% 2%;
  border-bottom-right-radius: 1.5% 2%;
}

#emscripten_logo {
  display: inline-block;
  margin: 0;
}

@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
  }
}

@-moz-keyframes rotation {
  from {
    -moz-transform: rotate(0deg);
  }

  to {
    -moz-transform: rotate(360deg);
  }
}

@-o-keyframes rotation {
  from {
    -o-transform: rotate(0deg);
  }

  to {
    -o-transform: rotate(360deg);
  }
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

#status {
  display: inline-block;
  vertical-align: top;
  margin-top: 30px;
  margin-left: 20px;
  font-weight: bold;
  color: rgb(120, 120, 120);
}

#progress {
  height: 20px;
  width: 30px;
}

#controls {
  background: none;
  display: block;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

</style>
</head>

<body>
  <input type="checkbox" id="di" hidden />
  <div id="ihig" hidden></div>
  <div id="iwid" hidden></div>
  <div id="shut" hidden>1</div>
  <iframe src="./bezz.htm" style="position:fixed;border-width:0px;overflow:hidden;z-index:999996;overflow-y:hidden;overflow-x:hidden;pointer-events: none;" id="circle" title="Mask"></iframe>
  <input type="checkbox" id="di" hidden />
  <input type="button" id="btn" style="background-color: green;position: absolute;display: block;left: 5%;top: 50%;z-index: 999997;border:5px solid #E7E7E7;border-radius:50%;" onclick="document.getElementById('di').click();"></input>
  <div class="emscripten" id="status">Wasming...</div>
  <div class="emscripten">
    <progress value="0" max="100" id="progress" hidden=1></progress>
  </div>
  
  
<div id="contain" style="pointer-events:none;z-index:999994;position:absolute;left:0px;top:0px;bottom:0px;width:100vw;">
  
<iframe src="./bezz2.htm" style="position:fixed;height:100%;width:100vw;border-width:0px;overflow:hidden;z-index:999993;overflow-y:hidden;overflow-x:hidden;pointer-events: none;" id="circle2" title="Mask2">
</iframe>

<div id="contain2">
<canvas class="emscripten" id="canvas" oncontextmenu="event.preventDefault()">
</canvas>
      </div>
</div>
  
  
<script src="./vanilla-tilt.js"></script>
<script>
VanillaTilt.init(document.getElementById("contain"), {
  max: 45,
  startX: 0,
  startY: 45,
});
document.getElementById("circle").width = window.innerWidth;
document.getElementById("circle").height = window.innerHeight;

 document.getElementById("circle2").width = window.innerWidth;
  document.getElementById("circle2").height = window.innerHeight; document.getElementById("contain2").width = window.innerHeight;
  document.getElementById("contain2").height = window.innerHeight;
let bz = new BroadcastChannel('bez');
document.getElementById('btn').addEventListener('click', function() {
  let hi = window.innerHeight;
  let wi = window.innerWidth;
  document.getElementById("ihig").innerHTML = hi;
  document.getElementById("iwid").innerHTML = hi;
 
 document.getElementById("circle").width = wi;
  document.getElementById("circle").height = hi;
  document.getElementById("circle2").width = wi;
document.getElementById("circle2").height = hi;
document.getElementById("canvas").style = "width:"+window.innerHeight+"px;height:"+window.innerHeight+"px;";

  let mid = Math.round((wi * 0.5) - (hi * 0.5));
  let rmid = wi - mid;
   document.getElementById("contain2").style = "pointer-events:none;z-index:999992;height:" + hi + "px;width:" + hi + "px;position:absolute;bottom:0px;left:"+mid+"px;";
  //document.getElementById("canvas").height = hi;
  document.getElementById("di").click();
  // document.getElementById("canvas").style.width=hi+'px';
  bz.postMessage({
    data: 222
  });
});


var statusElement = document.getElementById('status');
var progressElement = document.getElementById('progress');

var Module = {

  preRun: [],
  postRun: [],
  print: (function() {
    var element = document.getElementById('output');
    if (element) element.value = '';
    return function(text) {
      if (arguments.length > 1) text = Array.prototype.slice.call(arguments).join(' ');
      console.log(text);
      if (element) {
        element.value += text + "\n";
        element.scrollTop = element.scrollHeight;
      }
    };
  })(),
  printErr: function(text) {
    if (arguments.length > 1) text = Array.prototype.slice.call(arguments).join(' ');
    if (0) {
      dump(text + '\n');
    } else {
      console.error(text);
    }
  },
  canvas: (function() {
    var canvas = document.getElementById('canvas');
    canvas.addEventListener("webglcontextlost", function(e) {
      alert('WebGL context lost. You will need to reload the page.');
      e.preventDefault();
    }, false);
    return canvas;
  })(),
  setStatus: function(text) {
    if (!Module.setStatus.last) Module.setStatus.last = {
      time: Date.now(),
      text: ''
    };
    if (text === Module.setStatus.text) return;
    var m = text.match(/([^(]+)\((\d+(\.\d+)?)\/(\d+)\)/);
    var now = Date.now();
    if (m && now - Date.now() < 30) return; // if this is a progress update, skip it if too soon
    if (m) {
      text = m[1];
      progressElement.value = parseInt(m[2]) * 100;
      progressElement.max = parseInt(m[4]) * 100;
      progressElement.hidden = false;
    } else {
      progressElement.value = null;
      progressElement.max = null;
      progressElement.hidden = true;
    }
    statusElement.innerHTML = text;
  },
  totalDependencies: 0,
  monitorRunDependencies: function(left) {
    this.totalDependencies = Math.max(this.totalDependencies, left);
    Module.setStatus(left ? 'Preparing... (' + (this.totalDependencies - left) + '/' + this.totalDependencies + ')' : 'All downloads complete.');
  }
};
Module.setStatus('Downloading...');
window.onerror = function(event) {
  Module.setStatus('Exception thrown, see JavaScript console');
  Module.setStatus = function(text) {
    if (text) Module.printErr('[post-exception status] ' + text);
  };
};

</script><script charset="utf-8" async src="./fire.js"></script>

</body>
