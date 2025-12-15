
var d;
d || (d = typeof Module !== 'undefined' ? Module : {});
var aa = {}, ba;
for (ba in d) {
  d.hasOwnProperty(ba) && (aa[ba] = d[ba]);
}
var ca = [], da = "./this.program";
function ea(a, b) {
  throw b;
}
if (d.ENVIRONMENT) {
  throw Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)");
}
var fa = "", ha;
"undefined" !== typeof document && document.currentScript && (fa = document.currentScript.src);
fa = 0 !== fa.indexOf("blob:") ? fa.substr(0, fa.lastIndexOf("/") + 1) : "";
if ("object" !== typeof window && "function" !== typeof importScripts) {
  throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
}
ha = function(a) {
  document.title = a;
};
var k = d.print || console.log.bind(console), l = d.printErr || console.warn.bind(console);
for (ba in aa) {
  aa.hasOwnProperty(ba) && (d[ba] = aa[ba]);
}
aa = null;
d.arguments && (ca = d.arguments);
Object.getOwnPropertyDescriptor(d, "arguments") || Object.defineProperty(d, "arguments", {configurable:!0, get:function() {
  m("Module.arguments has been replaced with plain arguments_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
d.thisProgram && (da = d.thisProgram);
Object.getOwnPropertyDescriptor(d, "thisProgram") || Object.defineProperty(d, "thisProgram", {configurable:!0, get:function() {
  m("Module.thisProgram has been replaced with plain thisProgram (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
d.quit && (ea = d.quit);
Object.getOwnPropertyDescriptor(d, "quit") || Object.defineProperty(d, "quit", {configurable:!0, get:function() {
  m("Module.quit has been replaced with plain quit_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
q("undefined" === typeof d.memoryInitializerPrefixURL, "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");
q("undefined" === typeof d.pthreadMainPrefixURL, "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");
q("undefined" === typeof d.cdInitializerPrefixURL, "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");
q("undefined" === typeof d.filePackagePrefixURL, "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");
q("undefined" === typeof d.read, "Module.read option was removed (modify read_ in JS)");
q("undefined" === typeof d.readAsync, "Module.readAsync option was removed (modify readAsync in JS)");
q("undefined" === typeof d.readBinary, "Module.readBinary option was removed (modify readBinary in JS)");
q("undefined" === typeof d.setWindowTitle, "Module.setWindowTitle option was removed (modify setWindowTitle in JS)");
q("undefined" === typeof d.TOTAL_MEMORY, "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");
Object.getOwnPropertyDescriptor(d, "read") || Object.defineProperty(d, "read", {configurable:!0, get:function() {
  m("Module.read has been replaced with plain read_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
Object.getOwnPropertyDescriptor(d, "readAsync") || Object.defineProperty(d, "readAsync", {configurable:!0, get:function() {
  m("Module.readAsync has been replaced with plain readAsync (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
Object.getOwnPropertyDescriptor(d, "readBinary") || Object.defineProperty(d, "readBinary", {configurable:!0, get:function() {
  m("Module.readBinary has been replaced with plain readBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
Object.getOwnPropertyDescriptor(d, "setWindowTitle") || Object.defineProperty(d, "setWindowTitle", {configurable:!0, get:function() {
  m("Module.setWindowTitle has been replaced with plain setWindowTitle (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
q(!0, "worker environment detected but not enabled at build time.  Add 'worker' to `-s ENVIRONMENT` to enable.");
q(!0, "node environment detected but not enabled at build time.  Add 'node' to `-s ENVIRONMENT` to enable.");
q(!0, "shell environment detected but not enabled at build time.  Add 'shell' to `-s ENVIRONMENT` to enable.");
function ia(a) {
  ja || (ja = {});
  ja[a] || (ja[a] = 1, l(a));
}
var ja, ka;
d.wasmBinary && (ka = d.wasmBinary);
Object.getOwnPropertyDescriptor(d, "wasmBinary") || Object.defineProperty(d, "wasmBinary", {configurable:!0, get:function() {
  m("Module.wasmBinary has been replaced with plain wasmBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
var noExitRuntime = d.noExitRuntime || !0;
Object.getOwnPropertyDescriptor(d, "noExitRuntime") || Object.defineProperty(d, "noExitRuntime", {configurable:!0, get:function() {
  m("Module.noExitRuntime has been replaced with plain noExitRuntime (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
"object" !== typeof WebAssembly && m("no native wasm support detected");
function la(a, b) {
  var c = "float";
  "*" === c.charAt(c.length - 1) && (c = "i32");
  switch(c) {
    case "i1":
      t[a >> 0] = b;
      break;
    case "i8":
      t[a >> 0] = b;
      break;
    case "i16":
      ma[a >> 1] = b;
      break;
    case "i32":
      v[a >> 2] = b;
      break;
    case "i64":
      na = [b >>> 0, (w = b, 1.0 <= +Math.abs(w) ? 0.0 < w ? (Math.min(+Math.floor(w / 4294967296.0), 4294967295.0) | 0) >>> 0 : ~~+Math.ceil((w - +(~~w >>> 0)) / 4294967296.0) >>> 0 : 0)];
      v[a >> 2] = na[0];
      v[a + 4 >> 2] = na[1];
      break;
    case "float":
      x[a >> 2] = b;
      break;
    case "double":
      y[a >> 3] = b;
      break;
    default:
      m("invalid type for setValue: " + c);
  }
}
var oa, pa = !1, qa;
function q(a, b) {
  a || m("Assertion failed: " + b);
}
var ra = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;
function sa(a, b, c) {
  var e = b + c;
  for (c = b; a[c] && !(c >= e);) {
    ++c;
  }
  if (16 < c - b && a.subarray && ra) {
    return ra.decode(a.subarray(b, c));
  }
  for (e = ""; b < c;) {
    var f = a[b++];
    if (f & 128) {
      var g = a[b++] & 63;
      if (192 == (f & 224)) {
        e += String.fromCharCode((f & 31) << 6 | g);
      } else {
        var h = a[b++] & 63;
        224 == (f & 240) ? f = (f & 15) << 12 | g << 6 | h : (240 != (f & 248) && ia("Invalid UTF-8 leading byte 0x" + f.toString(16) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!"), f = (f & 7) << 18 | g << 12 | h << 6 | a[b++] & 63);
        65536 > f ? e += String.fromCharCode(f) : (f -= 65536, e += String.fromCharCode(55296 | f >> 10, 56320 | f & 1023));
      }
    } else {
      e += String.fromCharCode(f);
    }
  }
  return e;
}
function z(a, b) {
  return a ? sa(C, a, b) : "";
}
function ta(a, b, c, e) {
  if (!(0 < e)) {
    return 0;
  }
  var f = c;
  e = c + e - 1;
  for (var g = 0; g < a.length; ++g) {
    var h = a.charCodeAt(g);
    if (55296 <= h && 57343 >= h) {
      var n = a.charCodeAt(++g);
      h = 65536 + ((h & 1023) << 10) | n & 1023;
    }
    if (127 >= h) {
      if (c >= e) {
        break;
      }
      b[c++] = h;
    } else {
      if (2047 >= h) {
        if (c + 1 >= e) {
          break;
        }
        b[c++] = 192 | h >> 6;
      } else {
        if (65535 >= h) {
          if (c + 2 >= e) {
            break;
          }
          b[c++] = 224 | h >> 12;
        } else {
          if (c + 3 >= e) {
            break;
          }
          2097152 <= h && ia("Invalid Unicode code point 0x" + h.toString(16) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x1FFFFF).");
          b[c++] = 240 | h >> 18;
          b[c++] = 128 | h >> 12 & 63;
        }
        b[c++] = 128 | h >> 6 & 63;
      }
      b[c++] = 128 | h & 63;
    }
  }
  b[c] = 0;
  return c - f;
}
function D(a, b, c) {
  q("number" == typeof c, "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
  return ta(a, C, b, c);
}
function ua(a) {
  for (var b = 0, c = 0; c < a.length; ++c) {
    var e = a.charCodeAt(c);
    55296 <= e && 57343 >= e && (e = 65536 + ((e & 1023) << 10) | a.charCodeAt(++c) & 1023);
    127 >= e ? ++b : b = 2047 >= e ? b + 2 : 65535 >= e ? b + 3 : b + 4;
  }
  return b;
}
"undefined" !== typeof TextDecoder && new TextDecoder("utf-16le");
function va(a) {
  var b = ua(a) + 1, c = E(b);
  c && ta(a, t, c, b);
  return c;
}
function wa(a) {
  var b = ua(a) + 1, c = xa(b);
  ta(a, t, c, b);
  return c;
}
var ya, t, C, ma, za, v, F, x, y;
d.TOTAL_STACK && q(5242880 === d.TOTAL_STACK, "the stack size can no longer be determined at runtime");
var Aa = d.INITIAL_MEMORY || 734003200;
Object.getOwnPropertyDescriptor(d, "INITIAL_MEMORY") || Object.defineProperty(d, "INITIAL_MEMORY", {configurable:!0, get:function() {
  m("Module.INITIAL_MEMORY has been replaced with plain INITIAL_MEMORY (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
q(5242880 <= Aa, "INITIAL_MEMORY should be larger than TOTAL_STACK, was " + Aa + "! (TOTAL_STACK=5242880)");
q("undefined" !== typeof Int32Array && "undefined" !== typeof Float64Array && void 0 !== Int32Array.prototype.subarray && void 0 !== Int32Array.prototype.set, "JS engine does not provide full typed array support");
q(!d.wasmMemory, "Use of `wasmMemory` detected.  Use -s IMPORTED_MEMORY to define wasmMemory externally");
q(734003200 == Aa, "Detected runtime INITIAL_MEMORY setting.  Use -s IMPORTED_MEMORY to define wasmMemory dynamically");
var H;
function Ba() {
  var a = Ca();
  q(0 == (a & 3));
  F[(a >> 2) + 1] = 34821223;
  F[(a >> 2) + 2] = 2310721022;
  v[0] = 1668509029;
}
function Da() {
  if (!pa) {
    var a = Ca(), b = F[(a >> 2) + 1];
    a = F[(a >> 2) + 2];
    34821223 == b && 2310721022 == a || m("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x" + a.toString(16) + " " + b.toString(16));
    1668509029 !== v[0] && m("Runtime error: The application has corrupted its heap memory area (address zero)!");
  }
}
var Ea = new Int16Array(1), Fa = new Int8Array(Ea.buffer);
Ea[0] = 25459;
if (115 !== Fa[0] || 99 !== Fa[1]) {
  throw "Runtime error: expected the system to be little-endian! (Run with -s SUPPORT_BIG_ENDIAN=1 to bypass)";
}
var Ga = [], Ha = [], Ia = [], Ja = [], Ka = [], La = !1, Ma = !1;
function Na() {
  var a = d.preRun.shift();
  Ga.unshift(a);
}
q(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
q(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
q(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
q(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
var Oa = 0, Pa = null, Qa = null, Ra = {};
function Sa() {
  Oa++;
  d.monitorRunDependencies && d.monitorRunDependencies(Oa);
  q(!Ra["wasm-instantiate"]);
  Ra["wasm-instantiate"] = 1;
  null === Pa && "undefined" !== typeof setInterval && (Pa = setInterval(function() {
    if (pa) {
      clearInterval(Pa), Pa = null;
    } else {
      var a = !1, b;
      for (b in Ra) {
        a || (a = !0, l("still waiting on run dependencies:")), l("dependency: " + b);
      }
      a && l("(end of list)");
    }
  }, 10000));
}
d.preloadedImages = {};
d.preloadedAudios = {};
function m(a) {
  if (d.onAbort) {
    d.onAbort(a);
  }
  l(a);
  pa = !0;
  qa = 1;
  a = "abort(" + a + ") at ";
  a: {
    var b = Error();
    if (!b.stack) {
      try {
        throw Error();
      } catch (c) {
        b = c;
      }
      if (!b.stack) {
        b = "(no stack trace available)";
        break a;
      }
    }
    b = b.stack.toString();
  }
  d.extraStackTrace && (b += "\n" + d.extraStackTrace());
  b = Ta(b);
  throw new WebAssembly.RuntimeError(a + b);
}
function Ua() {
  return I.startsWith("data:application/octet-stream;base64,");
}
function J(a) {
  return function() {
    var b = d.asm;
    q(La, "native function `" + a + "` called before runtime initialization");
    q(!Ma, "native function `" + a + "` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    b[a] || q(b[a], "exported native function `" + a + "` not found");
    return b[a].apply(null, arguments);
  };
}
var I;
I = "fire.wasm";
if (!Ua()) {
  var Va = I;
  I = d.locateFile ? d.locateFile(Va, fa) : fa + Va;
}
function Wa() {
  var a = I;
  try {
    if (a == I && ka) {
      return new Uint8Array(ka);
    }
    throw "both async and sync fetching of the wasm failed";
  } catch (b) {
    m(b);
  }
}
function Xa() {
  return ka || "function" !== typeof fetch ? Promise.resolve().then(function() {
    return Wa();
  }) : fetch(I, {credentials:"same-origin"}).then(function(a) {
    if (!a.ok) {
      throw "failed to load wasm binary file at '" + I + "'";
    }
    return a.arrayBuffer();
  }).catch(function() {
    return Wa();
  });
}
var w, na, bb = {49148:function(a) {
  a = z(a) + "\n\nAbort/Retry/Ignore/AlwaysIgnore? [ariA] :";
  a = window.prompt(a, "i");
  null === a && (a = "i");
  a = Ya(a);
  q(!1, "allocate no longer takes a type argument");
  q("number" !== typeof a, "allocate no longer takes a number as arg0");
  var b = E(a.length);
  a.subarray || a.slice ? C.set(a, b) : C.set(new Uint8Array(a), b);
  return b;
}, 49373:function(a, b, c) {
  d.SDL2 || (d.SDL2 = {});
  var e = d.SDL2;
  e.Pa !== d.canvas && (e.C = d.createContext(d.canvas, !1, !0), e.Pa = d.canvas);
  if (e.w !== a || e.Za !== b || e.bb !== e.C) {
    e.image = e.C.createImageData(a, b), e.w = a, e.Za = b, e.bb = e.C;
  }
  a = e.image.data;
  b = c >> 2;
  var f = 0;
  if ("undefined" !== typeof CanvasPixelArray && a instanceof CanvasPixelArray) {
    for (c = a.length; f < c;) {
      var g = v[b];
      a[f] = g & 255;
      a[f + 1] = g >> 8 & 255;
      a[f + 2] = g >> 16 & 255;
      a[f + 3] = 255;
      b++;
      f += 4;
    }
  } else {
    if (e.yb !== a && (e.Ra = new Int32Array(a.buffer), e.Sa = new Uint8Array(a.buffer)), a = e.Ra, c = a.length, a.set(v.subarray(b, b + c)), a = e.Sa, b = 3, f = b + 4 * c, 0 == c % 8) {
      for (; b < f;) {
        a[b] = 255, b = b + 4 | 0, a[b] = 255, b = b + 4 | 0, a[b] = 255, b = b + 4 | 0, a[b] = 255, b = b + 4 | 0, a[b] = 255, b = b + 4 | 0, a[b] = 255, b = b + 4 | 0, a[b] = 255, b = b + 4 | 0, a[b] = 255, b = b + 4 | 0;
      }
    } else {
      for (; b < f;) {
        a[b] = 255, b = b + 4 | 0;
      }
    }
  }
  e.C.putImageData(e.image, 0, 0);
  return 0;
}, 50828:function(a, b, c, e, f) {
  var g = document.createElement("canvas");
  g.width = a;
  g.height = b;
  var h = g.getContext("2d");
  a = h.createImageData(a, b);
  b = a.data;
  f >>= 2;
  var n = 0, p;
  if ("undefined" !== typeof CanvasPixelArray && b instanceof CanvasPixelArray) {
    for (p = b.length; n < p;) {
      var r = v[f];
      b[n] = r & 255;
      b[n + 1] = r >> 8 & 255;
      b[n + 2] = r >> 16 & 255;
      b[n + 3] = r >> 24 & 255;
      f++;
      n += 4;
    }
  } else {
    b = new Int32Array(b.buffer), p = b.length, b.set(v.subarray(f, f + p));
  }
  h.putImageData(a, 0, 0);
  c = 0 === c && 0 === e ? "url(" + g.toDataURL() + "), auto" : "url(" + g.toDataURL() + ") " + c + " " + e + ", auto";
  e = E(c.length + 1);
  D(c, e, c.length + 1);
  return e;
}, 51817:function(a) {
  d.canvas && (d.canvas.style.cursor = z(a));
  return 0;
}, 51910:function() {
  d.canvas && (d.canvas.style.cursor = "none");
}, 51979:function() {
  return screen.width;
}, 52004:function() {
  return screen.height;
}, 52030:function() {
  return window.innerWidth;
}, 52060:function() {
  return window.innerHeight;
}, 52091:function(a) {
  "undefined" !== typeof ha && ha(z(a));
  return 0;
}, 52186:function() {
  return "undefined" !== typeof AudioContext || "undefined" !== typeof webkitAudioContext ? 1 : 0;
}, 52323:function() {
  return "undefined" !== typeof navigator.mediaDevices && "undefined" !== typeof navigator.mediaDevices.getUserMedia || "undefined" !== typeof navigator.webkitGetUserMedia ? 1 : 0;
}, 52547:function(a) {
  "undefined" === typeof d.SDL2 && (d.SDL2 = {});
  var b = d.SDL2;
  a ? b.capture = {} : b.audio = {};
  b.m || ("undefined" !== typeof AudioContext ? b.m = new AudioContext : "undefined" !== typeof webkitAudioContext && (b.m = new webkitAudioContext), b.m && Za(b.m));
  return void 0 === b.m ? -1 : 0;
}, 53040:function() {
  return d.SDL2.m.sampleRate;
}, 53108:function(a, b, c, e) {
  function f() {
  }
  function g(n) {
    void 0 !== h.capture.U && (clearTimeout(h.capture.U), h.capture.U = void 0);
    h.capture.ba = h.m.createMediaStreamSource(n);
    h.capture.v = h.m.createScriptProcessor(b, a, 1);
    h.capture.v.onaudioprocess = function(p) {
      void 0 !== h && void 0 !== h.capture && (p.outputBuffer.getChannelData(0).fill(0.0), h.capture.ia = p.inputBuffer, ab(c, [e]));
    };
    h.capture.ba.connect(h.capture.v);
    h.capture.v.connect(h.m.destination);
    h.capture.stream = n;
  }
  var h = d.SDL2;
  h.capture.fa = h.m.createBuffer(a, b, h.m.sampleRate);
  h.capture.fa.getChannelData(0).fill(0.0);
  h.capture.U = setTimeout(function() {
    h.capture.ia = h.capture.fa;
    ab(c, [e]);
  }, b / h.m.sampleRate * 1000);
  void 0 !== navigator.mediaDevices && void 0 !== navigator.mediaDevices.getUserMedia ? navigator.mediaDevices.getUserMedia({audio:!0, video:!1}).then(g).catch(f) : void 0 !== navigator.webkitGetUserMedia && navigator.webkitGetUserMedia({audio:!0, video:!1}, g, f);
}, 54760:function(a, b, c, e) {
  var f = d.SDL2;
  f.audio.v = f.m.createScriptProcessor(b, 0, a);
  f.audio.v.onaudioprocess = function(g) {
    void 0 !== f && void 0 !== f.audio && (f.audio.ua = g.outputBuffer, ab(c, [e]));
  };
  f.audio.v.connect(f.m.destination);
}, 55170:function(a, b) {
  for (var c = d.SDL2, e = c.capture.ia.numberOfChannels, f = 0; f < e; ++f) {
    var g = c.capture.ia.getChannelData(f);
    if (g.length != b) {
      throw "Web Audio capture buffer length mismatch! Destination size: " + g.length + " samples vs expected " + b + " samples!";
    }
    if (1 == e) {
      for (var h = 0; h < b; ++h) {
        la(a + 4 * h, g[h]);
      }
    } else {
      for (h = 0; h < b; ++h) {
        la(a + 4 * (h * e + f), g[h]);
      }
    }
  }
}, 55775:function(a, b) {
  for (var c = d.SDL2, e = c.audio.ua.numberOfChannels, f = 0; f < e; ++f) {
    var g = c.audio.ua.getChannelData(f);
    if (g.length != b) {
      throw "Web Audio output buffer length mismatch! Destination size: " + g.length + " samples vs expected " + b + " samples!";
    }
    for (var h = 0; h < b; ++h) {
      g[h] = x[a + (h * e + f << 2) >> 2];
    }
  }
}, 56255:function(a) {
  var b = d.SDL2;
  if (a) {
    void 0 !== b.capture.U && clearTimeout(b.capture.U);
    if (void 0 !== b.capture.stream) {
      a = b.capture.stream.getAudioTracks();
      for (var c = 0; c < a.length; c++) {
        b.capture.stream.removeTrack(a[c]);
      }
      b.capture.stream = void 0;
    }
    void 0 !== b.capture.v && (b.capture.v.onaudioprocess = function() {
    }, b.capture.v.disconnect(), b.capture.v = void 0);
    void 0 !== b.capture.ba && (b.capture.ba.disconnect(), b.capture.ba = void 0);
    void 0 !== b.capture.fa && (b.capture.fa = void 0);
    b.capture = void 0;
  } else {
    void 0 != b.audio.v && (b.audio.v.disconnect(), b.audio.v = void 0), b.audio = void 0;
  }
  void 0 !== b.m && void 0 === b.audio && void 0 === b.capture && (b.m.close(), b.m = void 0);
}};
function cb(a, b, c) {
  a.addEventListener(b, c, {once:!0});
}
function Za(a) {
  var b;
  b || (b = [document, document.getElementById("canvas")]);
  ["keydown", "mousedown", "touchstart"].forEach(function(c) {
    b.forEach(function(e) {
      e && cb(e, c, function() {
        "suspended" === a.state && a.resume();
      });
    });
  });
}
function db(a) {
  for (; 0 < a.length;) {
    var b = a.shift();
    if ("function" == typeof b) {
      b(d);
    } else {
      var c = b.Ya;
      "number" === typeof c ? void 0 === b.W ? H.get(c)() : H.get(c)(b.W) : c(void 0 === b.W ? null : b.W);
    }
  }
}
function Ta(a) {
  return a.replace(/\b_Z[\w\d_]+/g, function(b) {
    ia("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");
    return b === b ? b : b + " [" + b + "]";
  });
}
function ab(a, b) {
  if ("vi".includes("j")) {
    q("dynCall_vi" in d, "bad function pointer type - no table for sig 'vi'");
    b && b.length ? q(b.length === "i".replace(/j/g, "--").length) : q(!1);
    var c = d.dynCall_vi;
    b && b.length ? c.apply(null, [a].concat(b)) : c.call(null, a);
  } else {
    q(H.get(a), "missing table entry in dynCall: " + a), H.get(a).apply(null, b);
  }
}
function eb(a) {
  if (14 == a) {
    return 0;
  }
  l("sigaction: signal type not supported: this is a no-op.");
  return 0;
}
function fb(a, b) {
  for (var c = 0, e = a.length - 1; 0 <= e; e--) {
    var f = a[e];
    "." === f ? a.splice(e, 1) : ".." === f ? (a.splice(e, 1), c++) : c && (a.splice(e, 1), c--);
  }
  if (b) {
    for (; c; c--) {
      a.unshift("..");
    }
  }
  return a;
}
function gb(a) {
  var b = "/" === a.charAt(0), c = "/" === a.substr(-1);
  (a = fb(a.split("/").filter(function(e) {
    return !!e;
  }), !b).join("/")) || b || (a = ".");
  a && c && (a += "/");
  return (b ? "/" : "") + a;
}
function hb(a) {
  var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
  a = b[0];
  b = b[1];
  if (!a && !b) {
    return ".";
  }
  b && (b = b.substr(0, b.length - 1));
  return a + b;
}
function ib(a) {
  if ("/" === a) {
    return "/";
  }
  a = gb(a);
  a = a.replace(/\/$/, "");
  var b = a.lastIndexOf("/");
  return -1 === b ? a : a.substr(b + 1);
}
function jb() {
  if ("object" === typeof crypto && "function" === typeof crypto.getRandomValues) {
    var a = new Uint8Array(1);
    return function() {
      crypto.getRandomValues(a);
      return a[0];
    };
  }
  return function() {
    m("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };");
  };
}
function kb() {
  for (var a = "", b = !1, c = arguments.length - 1; -1 <= c && !b; c--) {
    b = 0 <= c ? arguments[c] : "/";
    if ("string" !== typeof b) {
      throw new TypeError("Arguments to path.resolve must be strings");
    }
    if (!b) {
      return "";
    }
    a = b + "/" + a;
    b = "/" === b.charAt(0);
  }
  a = fb(a.split("/").filter(function(e) {
    return !!e;
  }), !b).join("/");
  return (b ? "/" : "") + a || ".";
}
var lb = [];
function mb(a, b) {
  lb[a] = {input:[], o:[], O:b};
  nb(a, ob);
}
var ob = {open:function(a) {
  var b = lb[a.node.S];
  if (!b) {
    throw new K(43);
  }
  a.l = b;
  a.seekable = !1;
}, close:function(a) {
  a.l.O.flush(a.l);
}, flush:function(a) {
  a.l.O.flush(a.l);
}, read:function(a, b, c, e) {
  if (!a.l || !a.l.O.za) {
    throw new K(60);
  }
  for (var f = 0, g = 0; g < e; g++) {
    try {
      var h = a.l.O.za(a.l);
    } catch (n) {
      throw new K(29);
    }
    if (void 0 === h && 0 === f) {
      throw new K(6);
    }
    if (null === h || void 0 === h) {
      break;
    }
    f++;
    b[c + g] = h;
  }
  f && (a.node.timestamp = Date.now());
  return f;
}, write:function(a, b, c, e) {
  if (!a.l || !a.l.O.la) {
    throw new K(60);
  }
  try {
    for (var f = 0; f < e; f++) {
      a.l.O.la(a.l, b[c + f]);
    }
  } catch (g) {
    throw new K(29);
  }
  e && (a.node.timestamp = Date.now());
  return f;
}}, pb = {za:function(a) {
  if (!a.input.length) {
    var b = null;
    "undefined" != typeof window && "function" == typeof window.prompt ? (b = window.prompt("Input: "), null !== b && (b += "\n")) : "function" == typeof readline && (b = readline(), null !== b && (b += "\n"));
    if (!b) {
      return null;
    }
    a.input = Ya(b, !0);
  }
  return a.input.shift();
}, la:function(a, b) {
  null === b || 10 === b ? (k(sa(a.o, 0)), a.o = []) : 0 != b && a.o.push(b);
}, flush:function(a) {
  a.o && 0 < a.o.length && (k(sa(a.o, 0)), a.o = []);
}}, qb = {la:function(a, b) {
  null === b || 10 === b ? (l(sa(a.o, 0)), a.o = []) : 0 != b && a.o.push(b);
}, flush:function(a) {
  a.o && 0 < a.o.length && (l(sa(a.o, 0)), a.o = []);
}}, L = {G:null, I:function() {
  return L.createNode(null, "/", 16895, 0);
}, createNode:function(a, b, c, e) {
  if (24576 === (c & 61440) || 4096 === (c & 61440)) {
    throw new K(63);
  }
  L.G || (L.G = {dir:{node:{L:L.h.L, H:L.h.H, R:L.h.R, ca:L.h.ca, Ja:L.h.Ja, Na:L.h.Na, Ka:L.h.Ka, Ia:L.h.Ia, ga:L.h.ga}, stream:{N:L.i.N}}, file:{node:{L:L.h.L, H:L.h.H}, stream:{N:L.i.N, read:L.i.read, write:L.i.write, qa:L.i.qa, Da:L.i.Da, Fa:L.i.Fa}}, link:{node:{L:L.h.L, H:L.h.H, T:L.h.T}, stream:{}}, ta:{node:{L:L.h.L, H:L.h.H}, stream:rb}});
  c = sb(a, b, c, e);
  16384 === (c.mode & 61440) ? (c.h = L.G.dir.node, c.i = L.G.dir.stream, c.g = {}) : 32768 === (c.mode & 61440) ? (c.h = L.G.file.node, c.i = L.G.file.stream, c.j = 0, c.g = null) : 40960 === (c.mode & 61440) ? (c.h = L.G.link.node, c.i = L.G.link.stream) : 8192 === (c.mode & 61440) && (c.h = L.G.ta.node, c.i = L.G.ta.stream);
  c.timestamp = Date.now();
  a && (a.g[b] = c, a.timestamp = c.timestamp);
  return c;
}, Bb:function(a) {
  return a.g ? a.g.subarray ? a.g.subarray(0, a.j) : new Uint8Array(a.g) : new Uint8Array(0);
}, va:function(a, b) {
  var c = a.g ? a.g.length : 0;
  c >= b || (b = Math.max(b, c * (1048576 > c ? 2.0 : 1.125) >>> 0), 0 != c && (b = Math.max(b, 256)), c = a.g, a.g = new Uint8Array(b), 0 < a.j && a.g.set(c.subarray(0, a.j), 0));
}, mb:function(a, b) {
  if (a.j != b) {
    if (0 == b) {
      a.g = null, a.j = 0;
    } else {
      var c = a.g;
      a.g = new Uint8Array(b);
      c && a.g.set(c.subarray(0, Math.min(b, a.j)));
      a.j = b;
    }
  }
}, h:{L:function(a) {
  var b = {};
  b.zb = 8192 === (a.mode & 61440) ? a.id : 1;
  b.Eb = a.id;
  b.mode = a.mode;
  b.Lb = 1;
  b.uid = 0;
  b.Cb = 0;
  b.S = a.S;
  16384 === (a.mode & 61440) ? b.size = 4096 : 32768 === (a.mode & 61440) ? b.size = a.j : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
  b.tb = new Date(a.timestamp);
  b.Jb = new Date(a.timestamp);
  b.xb = new Date(a.timestamp);
  b.Oa = 4096;
  b.ub = Math.ceil(b.size / b.Oa);
  return b;
}, H:function(a, b) {
  void 0 !== b.mode && (a.mode = b.mode);
  void 0 !== b.timestamp && (a.timestamp = b.timestamp);
  void 0 !== b.size && L.mb(a, b.size);
}, R:function() {
  throw tb[44];
}, ca:function(a, b, c, e) {
  return L.createNode(a, b, c, e);
}, Ja:function(a, b, c) {
  if (16384 === (a.mode & 61440)) {
    try {
      var e = ub(b, c);
    } catch (g) {
    }
    if (e) {
      for (var f in e.g) {
        throw new K(55);
      }
    }
  }
  delete a.parent.g[a.name];
  a.parent.timestamp = Date.now();
  a.name = c;
  b.g[c] = a;
  b.timestamp = a.parent.timestamp;
  a.parent = b;
}, Na:function(a, b) {
  delete a.g[b];
  a.timestamp = Date.now();
}, Ka:function(a, b) {
  var c = ub(a, b), e;
  for (e in c.g) {
    throw new K(55);
  }
  delete a.g[b];
  a.timestamp = Date.now();
}, Ia:function(a) {
  var b = [".", ".."], c;
  for (c in a.g) {
    a.g.hasOwnProperty(c) && b.push(c);
  }
  return b;
}, ga:function(a, b, c) {
  a = L.createNode(a, b, 41471, 0);
  a.link = c;
  return a;
}, T:function(a) {
  if (40960 !== (a.mode & 61440)) {
    throw new K(28);
  }
  return a.link;
}}, i:{read:function(a, b, c, e, f) {
  var g = a.node.g;
  if (f >= a.node.j) {
    return 0;
  }
  a = Math.min(a.node.j - f, e);
  q(0 <= a);
  if (8 < a && g.subarray) {
    b.set(g.subarray(f, f + a), c);
  } else {
    for (e = 0; e < a; e++) {
      b[c + e] = g[f + e];
    }
  }
  return a;
}, write:function(a, b, c, e, f, g) {
  q(!(b instanceof ArrayBuffer));
  if (!e) {
    return 0;
  }
  a = a.node;
  a.timestamp = Date.now();
  if (b.subarray && (!a.g || a.g.subarray)) {
    if (g) {
      return q(0 === f, "canOwn must imply no weird position inside the file"), a.g = b.subarray(c, c + e), a.j = e;
    }
    if (0 === a.j && 0 === f) {
      return a.g = b.slice(c, c + e), a.j = e;
    }
    if (f + e <= a.j) {
      return a.g.set(b.subarray(c, c + e), f), e;
    }
  }
  L.va(a, f + e);
  if (a.g.subarray && b.subarray) {
    a.g.set(b.subarray(c, c + e), f);
  } else {
    for (g = 0; g < e; g++) {
      a.g[f + g] = b[c + g];
    }
  }
  a.j = Math.max(a.j, f + e);
  return e;
}, N:function(a, b, c) {
  1 === c ? b += a.position : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.j);
  if (0 > b) {
    throw new K(28);
  }
  return b;
}, qa:function(a, b, c) {
  L.va(a.node, b + c);
  a.node.j = Math.max(a.node.j, b + c);
}, Da:function(a, b, c, e, f, g) {
  if (0 !== b) {
    throw new K(28);
  }
  if (32768 !== (a.node.mode & 61440)) {
    throw new K(43);
  }
  a = a.node.g;
  if (g & 2 || a.buffer !== ya) {
    if (0 < e || e + c < a.length) {
      a.subarray ? a = a.subarray(e, e + c) : a = Array.prototype.slice.call(a, e, e + c);
    }
    e = !0;
    m("internal error: mmapAlloc called but `memalign` native symbol not exported");
    c = void 0;
    if (!c) {
      throw new K(48);
    }
    t.set(a, c);
  } else {
    e = !1, c = a.byteOffset;
  }
  return {Ob:c, sb:e};
}, Fa:function(a, b, c, e, f) {
  if (32768 !== (a.node.mode & 61440)) {
    throw new K(43);
  }
  if (f & 2) {
    return 0;
  }
  L.i.write(a, b, 0, e, c, !1);
  return 0;
}}}, vb = {0:"Success", 1:"Arg list too long", 2:"Permission denied", 3:"Address already in use", 4:"Address not available", 5:"Address family not supported by protocol family", 6:"No more processes", 7:"Socket already connected", 8:"Bad file number", 9:"Trying to read unreadable message", 10:"Mount device busy", 11:"Operation canceled", 12:"No children", 13:"Connection aborted", 14:"Connection refused", 15:"Connection reset by peer", 16:"File locking deadlock error", 17:"Destination address required", 
18:"Math arg out of domain of func", 19:"Quota exceeded", 20:"File exists", 21:"Bad address", 22:"File too large", 23:"Host is unreachable", 24:"Identifier removed", 25:"Illegal byte sequence", 26:"Connection already in progress", 27:"Interrupted system call", 28:"Invalid argument", 29:"I/O error", 30:"Socket is already connected", 31:"Is a directory", 32:"Too many symbolic links", 33:"Too many open files", 34:"Too many links", 35:"Message too long", 36:"Multihop attempted", 37:"File or path name too long", 
38:"Network interface is not configured", 39:"Connection reset by network", 40:"Network is unreachable", 41:"Too many open files in system", 42:"No buffer space available", 43:"No such device", 44:"No such file or directory", 45:"Exec format error", 46:"No record locks available", 47:"The link has been severed", 48:"Not enough core", 49:"No message of desired type", 50:"Protocol not available", 51:"No space left on device", 52:"Function not implemented", 53:"Socket is not connected", 54:"Not a directory", 
55:"Directory not empty", 56:"State not recoverable", 57:"Socket operation on non-socket", 59:"Not a typewriter", 60:"No such device or address", 61:"Value too large for defined data type", 62:"Previous owner died", 63:"Not super-user", 64:"Broken pipe", 65:"Protocol error", 66:"Unknown protocol", 67:"Protocol wrong type for socket", 68:"Math result not representable", 69:"Read only file system", 70:"Illegal seek", 71:"No such process", 72:"Stale file handle", 73:"Connection timed out", 74:"Text file busy", 
75:"Cross-device link", 100:"Device not a stream", 101:"Bad font file fmt", 102:"Invalid slot", 103:"Invalid request code", 104:"No anode", 105:"Block device required", 106:"Channel number out of range", 107:"Level 3 halted", 108:"Level 3 reset", 109:"Link number out of range", 110:"Protocol driver not attached", 111:"No CSI structure available", 112:"Level 2 halted", 113:"Invalid exchange", 114:"Invalid request descriptor", 115:"Exchange full", 116:"No data (for no delay io)", 117:"Timer expired", 
118:"Out of streams resources", 119:"Machine is not on the network", 120:"Package not installed", 121:"The object is remote", 122:"Advertise error", 123:"Srmount error", 124:"Communication error on send", 125:"Cross mount point (not really error)", 126:"Given log. name not unique", 127:"f.d. invalid for this operation", 128:"Remote address changed", 129:"Can   access a needed shared lib", 130:"Accessing a corrupted shared lib", 131:".lib section in a.out corrupted", 132:"Attempting to link in too many libs", 
133:"Attempting to exec a shared library", 135:"Streams pipe error", 136:"Too many users", 137:"Socket type not supported", 138:"Not supported", 139:"Protocol family not supported", 140:"Can't send after socket shutdown", 141:"Too many references", 142:"Host is down", 148:"No medium (in tape drive)", 156:"Level 2 not synchronized"}, wb = {}, xb = null, yb = {}, zb = [], Ab = 1, Bb = null, Cb = !0, Db = {}, K = null, tb = {};
function Eb(a, b) {
  a = kb("/", a);
  b = b || {};
  if (!a) {
    return {path:"", node:null};
  }
  var c = {wa:!0, ma:0}, e;
  for (e in c) {
    void 0 === b[e] && (b[e] = c[e]);
  }
  if (8 < b.ma) {
    throw new K(32);
  }
  a = fb(a.split("/").filter(function(h) {
    return !!h;
  }), !1);
  var f = xb;
  c = "/";
  for (e = 0; e < a.length; e++) {
    var g = e === a.length - 1;
    if (g && b.parent) {
      break;
    }
    f = ub(f, a[e]);
    c = gb(c + "/" + a[e]);
    f.da && (!g || g && b.wa) && (f = f.da.root);
    if (!g || b.Y) {
      for (g = 0; 40960 === (f.mode & 61440);) {
        if (f = Fb(c), c = kb(hb(c), f), f = Eb(c, {ma:b.ma}).node, 40 < g++) {
          throw new K(32);
        }
      }
    }
  }
  return {path:c, node:f};
}
function Gb(a) {
  for (var b;;) {
    if (a === a.parent) {
      return a = a.I.Ea, b ? "/" !== a[a.length - 1] ? a + "/" + b : a + b : a;
    }
    b = b ? a.name + "/" + b : a.name;
    a = a.parent;
  }
}
function Hb(a, b) {
  for (var c = 0, e = 0; e < b.length; e++) {
    c = (c << 5) - c + b.charCodeAt(e) | 0;
  }
  return (a + c >>> 0) % Bb.length;
}
function ub(a, b) {
  var c;
  if (c = (c = Ib(a, "x")) ? c : a.h.R ? 0 : 2) {
    throw new K(c, a);
  }
  for (c = Bb[Hb(a.id, b)]; c; c = c.hb) {
    var e = c.name;
    if (c.parent.id === a.id && e === b) {
      return c;
    }
  }
  return a.h.R(a, b);
}
function sb(a, b, c, e) {
  q("object" === typeof a);
  a = new Jb(a, b, c, e);
  b = Hb(a.parent.id, a.name);
  a.hb = Bb[b];
  return Bb[b] = a;
}
var Kb = {r:0, "r+":2, w:577, "w+":578, a:1089, "a+":1090};
function Lb(a) {
  var b = ["r", "w", "rw"][a & 3];
  a & 512 && (b += "w");
  return b;
}
function Ib(a, b) {
  if (Cb) {
    return 0;
  }
  if (!b.includes("r") || a.mode & 292) {
    if (b.includes("w") && !(a.mode & 146) || b.includes("x") && !(a.mode & 73)) {
      return 2;
    }
  } else {
    return 2;
  }
  return 0;
}
function Mb(a, b) {
  try {
    return ub(a, b), 20;
  } catch (c) {
  }
  return Ib(a, "wx");
}
function Nb(a) {
  var b = 4096;
  for (a = a || 0; a <= b; a++) {
    if (!zb[a]) {
      return a;
    }
  }
  throw new K(33);
}
function Ob(a, b) {
  Pb || (Pb = function() {
  }, Pb.prototype = {object:{get:function() {
    return this.node;
  }, set:function(f) {
    this.node = f;
  }}});
  var c = new Pb, e;
  for (e in a) {
    c[e] = a[e];
  }
  a = c;
  b = Nb(b);
  a.u = b;
  return zb[b] = a;
}
var rb = {open:function(a) {
  a.i = yb[a.node.S].i;
  a.i.open && a.i.open(a);
}, N:function() {
  throw new K(70);
}};
function nb(a, b) {
  yb[a] = {i:b};
}
function Qb(a, b) {
  if ("string" === typeof a) {
    throw a;
  }
  var c = "/" === b, e = !b;
  if (c && xb) {
    throw new K(10);
  }
  if (!c && !e) {
    var f = Eb(b, {wa:!1});
    b = f.path;
    f = f.node;
    if (f.da) {
      throw new K(10);
    }
    if (16384 !== (f.mode & 61440)) {
      throw new K(54);
    }
  }
  b = {type:a, Nb:{}, Ea:b, gb:[]};
  a = a.I(b);
  a.I = b;
  b.root = a;
  c ? xb = a : f && (f.da = b, f.I && f.I.gb.push(b));
}
function Rb(a, b, c) {
  var e = Eb(a, {parent:!0}).node;
  a = ib(a);
  if (!a || "." === a || ".." === a) {
    throw new K(28);
  }
  var f = Mb(e, a);
  if (f) {
    throw new K(f);
  }
  if (!e.h.ca) {
    throw new K(63);
  }
  return e.h.ca(e, a, b, c);
}
function Sb(a) {
  return Rb(a, 16895, 0);
}
function Tb(a, b, c) {
  "undefined" === typeof c && (c = b, b = 438);
  Rb(a, b | 8192, c);
}
function Ub(a, b) {
  if (!kb(a)) {
    throw new K(44);
  }
  var c = Eb(b, {parent:!0}).node;
  if (!c) {
    throw new K(44);
  }
  b = ib(b);
  var e = Mb(c, b);
  if (e) {
    throw new K(e);
  }
  if (!c.h.ga) {
    throw new K(63);
  }
  c.h.ga(c, b, a);
}
function Fb(a) {
  a = Eb(a).node;
  if (!a) {
    throw new K(44);
  }
  if (!a.h.T) {
    throw new K(28);
  }
  return kb(Gb(a.parent), a.h.T(a));
}
function Vb(a, b, c, e) {
  if ("" === a) {
    throw new K(44);
  }
  if ("string" === typeof b) {
    var f = Kb[b];
    if ("undefined" === typeof f) {
      throw Error("Unknown file open mode: " + b);
    }
    b = f;
  }
  c = b & 64 ? ("undefined" === typeof c ? 438 : c) & 4095 | 32768 : 0;
  if ("object" === typeof a) {
    var g = a;
  } else {
    a = gb(a);
    try {
      g = Eb(a, {Y:!(b & 131072)}).node;
    } catch (h) {
    }
  }
  f = !1;
  if (b & 64) {
    if (g) {
      if (b & 128) {
        throw new K(20);
      }
    } else {
      g = Rb(a, c, 0), f = !0;
    }
  }
  if (!g) {
    throw new K(44);
  }
  8192 === (g.mode & 61440) && (b &= -513);
  if (b & 65536 && 16384 !== (g.mode & 61440)) {
    throw new K(54);
  }
  if (!f && (c = g ? 40960 === (g.mode & 61440) ? 32 : 16384 === (g.mode & 61440) && ("r" !== Lb(b) || b & 512) ? 31 : Ib(g, Lb(b)) : 44)) {
    throw new K(c);
  }
  if (b & 512) {
    c = g;
    c = "string" === typeof c ? Eb(c, {Y:!0}).node : c;
    if (!c.h.H) {
      throw new K(63);
    }
    if (16384 === (c.mode & 61440)) {
      throw new K(31);
    }
    if (32768 !== (c.mode & 61440)) {
      throw new K(28);
    }
    if (f = Ib(c, "w")) {
      throw new K(f);
    }
    c.h.H(c, {size:0, timestamp:Date.now()});
  }
  b &= -131713;
  e = Ob({node:g, path:Gb(g), flags:b, seekable:!0, position:0, i:g.i, pb:[], error:!1}, e);
  e.i.open && e.i.open(e);
  !d.logReadFiles || b & 1 || (Wb || (Wb = {}), a in Wb || (Wb[a] = 1, l("FS.trackingDelegate error on read file: " + a)));
  try {
    Db.onOpenFile && (g = 0, 1 !== (b & 2097155) && (g |= 1), 0 !== (b & 2097155) && (g |= 2), Db.onOpenFile(a, g));
  } catch (h) {
    l("FS.trackingDelegate['onOpenFile']('" + a + "', flags) threw an exception: " + h.message);
  }
  return e;
}
function Xb(a, b, c) {
  if (null === a.u) {
    throw new K(8);
  }
  if (!a.seekable || !a.i.N) {
    throw new K(70);
  }
  if (0 != c && 1 != c && 2 != c) {
    throw new K(28);
  }
  a.position = a.i.N(a, b, c);
  a.pb = [];
}
function Yb() {
  K || (K = function(a, b) {
    this.node = b;
    this.nb = function(c) {
      this.K = c;
      for (var e in wb) {
        if (wb[e] === c) {
          this.code = e;
          break;
        }
      }
    };
    this.nb(a);
    this.message = vb[a];
    this.stack && (Object.defineProperty(this, "stack", {value:Error().stack, writable:!0}), this.stack = Ta(this.stack));
  }, K.prototype = Error(), K.prototype.constructor = K, [44].forEach(function(a) {
    tb[a] = new K(a);
    tb[a].stack = "<generic error, no stack>";
  }));
}
var Zb;
function $b(a, b) {
  var c = 0;
  a && (c |= 365);
  b && (c |= 146);
  return c;
}
function ac(a, b, c) {
  a = gb("/dev/" + a);
  var e = $b(!!b, !!c);
  bc || (bc = 64);
  var f = bc++ << 8 | 0;
  nb(f, {open:function(g) {
    g.seekable = !1;
  }, close:function() {
    c && c.buffer && c.buffer.length && c(10);
  }, read:function(g, h, n, p) {
    for (var r = 0, u = 0; u < p; u++) {
      try {
        var B = b();
      } catch (G) {
        throw new K(29);
      }
      if (void 0 === B && 0 === r) {
        throw new K(6);
      }
      if (null === B || void 0 === B) {
        break;
      }
      r++;
      h[n + u] = B;
    }
    r && (g.node.timestamp = Date.now());
    return r;
  }, write:function(g, h, n, p) {
    for (var r = 0; r < p; r++) {
      try {
        c(h[n + r]);
      } catch (u) {
        throw new K(29);
      }
    }
    p && (g.node.timestamp = Date.now());
    return r;
  }});
  Tb(a, e, f);
}
var bc, cc = {}, Pb, Wb, dc = void 0;
function ec() {
  q(void 0 != dc);
  dc += 4;
  return v[dc - 4 >> 2];
}
function fc(a) {
  a = zb[a];
  if (!a) {
    throw new K(8);
  }
  return a;
}
var gc;
gc = function() {
  return performance.now();
};
function hc(a, b) {
  ic = a;
  jc = b;
  if (kc) {
    if (lc || (lc = !0), 0 == a) {
      mc = function() {
        var e = Math.max(0, nc + b - gc()) | 0;
        setTimeout(oc, e);
      }, pc = "timeout";
    } else {
      if (1 == a) {
        mc = function() {
          qc(oc);
        }, pc = "rAF";
      } else {
        if (2 == a) {
          if ("undefined" === typeof setImmediate) {
            var c = [];
            addEventListener("message", function(e) {
              if ("setimmediate" === e.data || "setimmediate" === e.data.target) {
                e.stopPropagation(), c.shift()();
              }
            }, !0);
            setImmediate = function(e) {
              c.push(e);
              postMessage("setimmediate", "*");
            };
          }
          mc = function() {
            setImmediate(oc);
          };
          pc = "immediate";
        }
      }
    }
  } else {
    l("emscripten_set_main_loop_timing: Cannot set timing mode for main loop since a main loop does not exist! Call emscripten_set_main_loop first to set one up.");
  }
}
function rc(a) {
  if (!(a instanceof sc || "unwind" === a)) {
    throw a && "object" === typeof a && a.stack && l("exception thrown: " + [a, a.stack]), a;
  }
}
function tc(a, b, c, e, f) {
  function g() {
    if (h < uc) {
      if (!noExitRuntime) {
        try {
          vc(qa);
        } catch (n) {
          rc(n);
        }
      }
      return !1;
    }
    return !0;
  }
  q(!kc, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
  kc = a;
  wc = e;
  var h = uc;
  lc = !1;
  oc = function() {
    if (!pa) {
      if (0 < xc.length) {
        var n = Date.now(), p = xc.shift();
        p.Ya(p.W);
        if (yc) {
          var r = yc, u = 0 == r % 1 ? r - 1 : Math.floor(r);
          yc = p.wb ? u : (8 * r + (u + 0.5)) / 9;
        }
        k('main loop blocker "' + p.name + '" took ' + (Date.now() - n) + " ms");
        d.setStatus && (n = d.statusMessage || "Please wait...", p = yc, r = zc.Ab, p ? p < r ? d.setStatus(n + " (" + (r - p) + "/" + r + ")") : d.setStatus(n) : d.setStatus(""));
        g() && setTimeout(oc, 0);
      } else {
        g() && (Ac = Ac + 1 | 0, 1 == ic && 1 < jc && 0 != Ac % jc ? mc() : (0 == ic && (nc = gc()), "timeout" === pc && d.C && (ia("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"), pc = ""), pa || d.preMainLoop && !1 === d.preMainLoop() || (Bc(a), d.postMainLoop && d.postMainLoop()), Da(), g() && ("object" === typeof SDL && 
        SDL.audio && SDL.audio.lb && SDL.audio.lb(), mc())));
      }
    }
  };
  f || (b && 0 < b ? hc(0, 1000.0 / b) : hc(1, 1), mc());
  if (c) {
    throw "unwind";
  }
}
function Bc(a) {
  if (pa) {
    l("user callback triggered after application aborted.  Ignoring.");
  } else {
    try {
      a();
    } catch (b) {
      rc(b);
    }
  }
}
function Cc(a) {
  setTimeout(function() {
    Bc(a);
  }, 10000);
}
var lc = !1, mc = null, pc = "", uc = 0, kc = null, wc = 0, ic = 0, jc = 0, Ac = 0, xc = [], zc = {}, nc, oc, yc, Dc = !1, Ec = !1, Fc = [];
function Gc() {
  function a() {
    Ec = document.pointerLockElement === d.canvas || document.mozPointerLockElement === d.canvas || document.webkitPointerLockElement === d.canvas || document.msPointerLockElement === d.canvas;
  }
  d.preloadPlugins || (d.preloadPlugins = []);
  if (!Hc) {
    Hc = !0;
    try {
      Ic = !0;
    } catch (c) {
      Ic = !1, k("warning: no blob constructor, cannot create blobs with mimetypes");
    }
    Jc = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : Ic ? null : k("warning: no BlobBuilder");
    Kc = "undefined" != typeof window ? window.URL ? window.URL : window.webkitURL : void 0;
    d.Ga || "undefined" !== typeof Kc || (k("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."), d.Ga = !0);
    d.preloadPlugins.push({canHandle:function(c) {
      return !d.Ga && /\.(jpg|jpeg|png|bmp)$/i.test(c);
    }, handle:function(c, e, f, g) {
      var h = null;
      if (Ic) {
        try {
          h = new Blob([c], {type:Lc(e)}), h.size !== c.length && (h = new Blob([(new Uint8Array(c)).buffer], {type:Lc(e)}));
        } catch (r) {
          ia("Blob constructor present but fails: " + r + "; falling back to blob builder");
        }
      }
      h || (h = new Jc, h.append((new Uint8Array(c)).buffer), h = h.getBlob());
      var n = Kc.createObjectURL(h);
      q("string" == typeof n, "createObjectURL must return a url as a string");
      var p = new Image;
      p.onload = function() {
        q(p.complete, "Image " + e + " could not be decoded");
        var r = document.createElement("canvas");
        r.width = p.width;
        r.height = p.height;
        r.getContext("2d").drawImage(p, 0, 0);
        d.preloadedImages[e] = r;
        Kc.revokeObjectURL(n);
        f && f(c);
      };
      p.onerror = function() {
        k("Image " + n + " could not be decoded");
        g && g();
      };
      p.src = n;
    }});
    d.preloadPlugins.push({canHandle:function(c) {
      return !d.Mb && c.substr(-4) in {".ogg":1, ".wav":1, ".mp3":1};
    }, handle:function(c, e, f, g) {
      function h(B) {
        p || (p = !0, d.preloadedAudios[e] = B, f && f(c));
      }
      function n() {
        p || (p = !0, d.preloadedAudios[e] = new Audio, g && g());
      }
      var p = !1;
      if (Ic) {
        try {
          var r = new Blob([c], {type:Lc(e)});
        } catch (B) {
          return n();
        }
        r = Kc.createObjectURL(r);
        q("string" == typeof r, "createObjectURL must return a url as a string");
        var u = new Audio;
        u.addEventListener("canplaythrough", function() {
          h(u);
        }, !1);
        u.onerror = function() {
          if (!p) {
            k("warning: browser could not fully decode audio " + e + ", trying slower base64 approach");
            for (var B = "", G = 0, A = 0, S = 0; S < c.length; S++) {
              for (G = G << 8 | c[S], A += 8; 6 <= A;) {
                var T = G >> A - 6 & 63;
                A -= 6;
                B += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[T];
              }
            }
            2 == A ? (B += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(G & 3) << 4], B += "==") : 4 == A && (B += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(G & 15) << 2], B += "=");
            u.src = "data:audio/x-" + e.substr(-3) + ";base64," + B;
            h(u);
          }
        };
        u.src = r;
        Cc(function() {
          h(u);
        });
      } else {
        return n();
      }
    }});
    var b = d.canvas;
    b && (b.requestPointerLock = b.requestPointerLock || b.mozRequestPointerLock || b.webkitRequestPointerLock || b.msRequestPointerLock || function() {
    }, b.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function() {
    }, b.exitPointerLock = b.exitPointerLock.bind(document), document.addEventListener("pointerlockchange", a, !1), document.addEventListener("mozpointerlockchange", a, !1), document.addEventListener("webkitpointerlockchange", a, !1), document.addEventListener("mspointerlockchange", a, !1), d.elementPointerLock && b.addEventListener("click", function(c) {
      !Ec && d.canvas.requestPointerLock && (d.canvas.requestPointerLock(), c.preventDefault());
    }, !1));
  }
}
function Mc(a, b, c, e) {
  if (b && d.C && a == d.canvas) {
    return d.C;
  }
  var f;
  if (b) {
    var g = {antialias:!1, alpha:!1, Ca:1, };
    if (e) {
      for (var h in e) {
        g[h] = e[h];
      }
    }
    if ("undefined" !== typeof Nc && (f = Oc(a, g))) {
      var n = Pc[f].J;
    }
  } else {
    n = a.getContext("2d");
  }
  if (!n) {
    return null;
  }
  c && (b || q("undefined" === typeof M, "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"), d.C = n, b && Qc(f), d.qb = b, Fc.forEach(function(p) {
    p();
  }), Gc());
  return n;
}
var Rc = !1, Sc = void 0, Tc = void 0;
function Uc(a, b) {
  function c() {
    Dc = !1;
    var g = e.parentNode;
    (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === g ? (e.exitFullscreen = Vc, Sc && e.requestPointerLock(), Dc = !0, Tc ? ("undefined" != typeof SDL && (v[SDL.screen >> 2] = F[SDL.screen >> 2] | 8388608), Wc(d.canvas), Xc()) : Wc(e)) : (g.parentNode.insertBefore(e, g), g.parentNode.removeChild(g), Tc ? ("undefined" != typeof SDL && (v[SDL.screen >> 2] = F[SDL.screen >> 
    2] & -8388609), Wc(d.canvas), Xc()) : Wc(e));
    if (d.onFullScreen) {
      d.onFullScreen(Dc);
    }
    if (d.onFullscreen) {
      d.onFullscreen(Dc);
    }
  }
  Sc = a;
  Tc = b;
  "undefined" === typeof Sc && (Sc = !0);
  "undefined" === typeof Tc && (Tc = !1);
  var e = d.canvas;
  Rc || (Rc = !0, document.addEventListener("fullscreenchange", c, !1), document.addEventListener("mozfullscreenchange", c, !1), document.addEventListener("webkitfullscreenchange", c, !1), document.addEventListener("MSFullscreenChange", c, !1));
  var f = document.createElement("div");
  e.parentNode.insertBefore(f, e);
  f.appendChild(e);
  f.requestFullscreen = f.requestFullscreen || f.mozRequestFullScreen || f.msRequestFullscreen || (f.webkitRequestFullscreen ? function() {
    f.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
  } : null) || (f.webkitRequestFullScreen ? function() {
    f.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
  } : null);
  f.requestFullscreen();
}
function Vc() {
  if (!Dc) {
    return !1;
  }
  (document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function() {
  }).apply(document, []);
  return !0;
}
var Yc = 0;
function qc(a) {
  if ("function" === typeof requestAnimationFrame) {
    requestAnimationFrame(a);
  } else {
    var b = Date.now();
    if (0 === Yc) {
      Yc = b + 1000 / 60;
    } else {
      for (; b + 2 >= Yc;) {
        Yc += 1000 / 60;
      }
    }
    setTimeout(a, Math.max(Yc - b, 0));
  }
}
function Lc(a) {
  return {jpg:"image/jpeg", jpeg:"image/jpeg", png:"image/png", bmp:"image/bmp", ogg:"audio/ogg", wav:"audio/wav", mp3:"audio/mpeg"}[a.substr(a.lastIndexOf(".") + 1)];
}
var Zc = [];
function Xc() {
  var a = d.canvas;
  Zc.forEach(function(b) {
    b(a.width, a.height);
  });
}
function Wc(a, b, c) {
  b && c ? (a.rb = b, a.$a = c) : (b = a.rb, c = a.$a);
  var e = b, f = c;
  d.forcedAspectRatio && 0 < d.forcedAspectRatio && (e / f < d.forcedAspectRatio ? e = Math.round(f * d.forcedAspectRatio) : f = Math.round(e / d.forcedAspectRatio));
  if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === a.parentNode && "undefined" != typeof screen) {
    var g = Math.min(screen.width / e, screen.height / f);
    e = Math.round(e * g);
    f = Math.round(f * g);
  }
  Tc ? (a.width != e && (a.width = e), a.height != f && (a.height = f), "undefined" != typeof a.style && (a.style.removeProperty("width"), a.style.removeProperty("height"))) : (a.width != b && (a.width = b), a.height != c && (a.height = c), "undefined" != typeof a.style && (e != b || f != c ? (a.style.setProperty("width", e + "px", "important"), a.style.setProperty("height", f + "px", "important")) : (a.style.removeProperty("width"), a.style.removeProperty("height"))));
}
var Hc, Ic, Jc, Kc, N = 12288, $c = !1, ad = 0, bd = 0, cd = 0, O = {alpha:!1, depth:!1, stencil:!1, antialias:!1}, dd = {}, ed;
function fd(a) {
  var b = a.getExtension("ANGLE_instanced_arrays");
  b && (a.vertexAttribDivisor = function(c, e) {
    b.vertexAttribDivisorANGLE(c, e);
  }, a.drawArraysInstanced = function(c, e, f, g) {
    b.drawArraysInstancedANGLE(c, e, f, g);
  }, a.drawElementsInstanced = function(c, e, f, g, h) {
    b.drawElementsInstancedANGLE(c, e, f, g, h);
  });
}
function gd(a) {
  var b = a.getExtension("OES_vertex_array_object");
  b && (a.createVertexArray = function() {
    return b.createVertexArrayOES();
  }, a.deleteVertexArray = function(c) {
    b.deleteVertexArrayOES(c);
  }, a.bindVertexArray = function(c) {
    b.bindVertexArrayOES(c);
  }, a.isVertexArray = function(c) {
    return b.isVertexArrayOES(c);
  });
}
function hd(a) {
  var b = a.getExtension("WEBGL_draw_buffers");
  b && (a.drawBuffers = function(c, e) {
    b.drawBuffersWEBGL(c, e);
  });
}
var jd = 1, kd = [], P = [], ld = [], md = [], nd = [], Q = [], od = [], Pc = [], R = [], pd = {}, qd = 4;
function U(a) {
  rd || (rd = a);
}
function sd(a) {
  for (var b = jd++, c = a.length; c < b; c++) {
    a[c] = null;
  }
  return b;
}
function Oc(a, b) {
  a.ya || (a.ya = a.getContext, a.getContext = function(e, f) {
    f = a.ya(e, f);
    return "webgl" == e == f instanceof WebGLRenderingContext ? f : null;
  });
  var c = a.getContext("webgl", b);
  return c ? td(c, b) : 0;
}
function td(a, b) {
  var c = sd(Pc), e = {Db:c, attributes:b, version:b.Ca, J:a};
  a.canvas && (a.canvas.P = e);
  Pc[c] = e;
  ("undefined" === typeof b.Ua || b.Ua) && ud(e);
  return c;
}
function Qc(a) {
  vd = Pc[a];
  d.C = M = vd && vd.J;
}
function ud(a) {
  a || (a = vd);
  if (!a.cb) {
    a.cb = !0;
    var b = a.J;
    fd(b);
    gd(b);
    hd(b);
    b.D = b.getExtension("EXT_disjoint_timer_query");
    b.Kb = b.getExtension("WEBGL_multi_draw");
    (b.getSupportedExtensions() || []).forEach(function(c) {
      c.includes("lose_context") || c.includes("debug") || b.getExtension(c);
    });
  }
}
var Nc = {}, rd, vd, wd = [], xd = 0;
function yd() {
  for (var a = zd.length - 1; 0 <= a; --a) {
    Ad(a);
  }
  zd = [];
  V = [];
}
var V = [];
function Bd(a, b, c) {
  function e(h, n) {
    if (h.length != n.length) {
      return !1;
    }
    for (var p in h) {
      if (h[p] != n[p]) {
        return !1;
      }
    }
    return !0;
  }
  for (var f in V) {
    var g = V[f];
    if (g.oa == a && e(g.ra, c)) {
      return;
    }
  }
  V.push({oa:a, Ha:b, ra:c});
  V.sort(function(h, n) {
    return h.Ha < n.Ha;
  });
}
function Cd(a) {
  for (var b = 0; b < V.length; ++b) {
    V[b].oa == a && (V.splice(b, 1), --b);
  }
}
function Dd() {
  if (xd && Ed.M) {
    for (var a = 0; a < V.length; ++a) {
      var b = V[a];
      V.splice(a, 1);
      --a;
      b.oa.apply(null, b.ra);
    }
  }
}
var zd = [];
function Ad(a) {
  var b = zd[a];
  b.target.removeEventListener(b.s, b.Va, b.A);
  zd.splice(a, 1);
}
function W(a) {
  function b(e) {
    ++xd;
    Ed = a;
    Dd();
    a.F(e);
    Dd();
    --xd;
  }
  if (a.B) {
    a.Va = b, a.target.addEventListener(a.s, b, a.A), zd.push(a), Fd || (Ja.push(yd), Fd = !0);
  } else {
    for (var c = 0; c < zd.length; ++c) {
      zd[c].target == a.target && zd[c].s == a.s && Ad(c--);
    }
  }
}
function Gd(a) {
  return a ? a == window ? "#window" : a == screen ? "#screen" : a && a.nodeName ? a.nodeName : "" : "";
}
function Hd() {
  return document.fullscreenEnabled || document.webkitFullscreenEnabled;
}
var Id = {}, Fd, Ed, Jd, Kd, Ld, Md, Nd, Od, Pd, Qd, Rd, Sd, Td, Ud, Vd = {}, Wd = [0, document, window];
function X(a) {
  a = 2 < a ? z(a) : a;
  return Wd[a] || document.querySelector(a);
}
function Xd(a) {
  var b = Yd(), c = xa(8), e = c + 4, f = xa(a.id.length + 1);
  D(a.id, f, a.id.length + 1);
  if (a = X(f)) {
    v[c >> 2] = a.width, v[e >> 2] = a.height;
  }
  c = [v[c >> 2], v[e >> 2]];
  Zd(b);
  return c;
}
function $d(a, b, c) {
  a = X(a);
  if (!a) {
    return -4;
  }
  a.width = b;
  a.height = c;
  return 0;
}
function ae(a, b, c) {
  if (a.vb) {
    var e = Yd(), f = xa(a.id.length + 1);
    D(a.id, f, a.id.length + 1);
    $d(f, b, c);
    Zd(e);
  } else {
    a.width = b, a.height = c;
  }
}
function be(a) {
  function b() {
    document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement || (document.removeEventListener("fullscreenchange", b), document.removeEventListener("webkitfullscreenchange", b), ae(a, e, f), a.style.width = g, a.style.height = h, a.style.backgroundColor = n, p || (document.body.style.backgroundColor = "white"), document.body.style.backgroundColor = p, a.style.paddingLeft = r, a.style.paddingRight = u, a.style.paddingTop = B, a.style.paddingBottom = G, a.style.marginLeft = 
    A, a.style.marginRight = S, a.style.marginTop = T, a.style.marginBottom = $a, document.body.style.margin = Le, document.documentElement.style.overflow = Me, document.body.scroll = Ne, a.style.Aa = Oe, a.P && a.P.J.viewport(0, 0, e, f), Vd.X && H.get(Vd.X)(37, 0, Vd.sa));
  }
  var c = Xd(a), e = c[0], f = c[1], g = a.style.width, h = a.style.height, n = a.style.backgroundColor, p = document.body.style.backgroundColor, r = a.style.paddingLeft, u = a.style.paddingRight, B = a.style.paddingTop, G = a.style.paddingBottom, A = a.style.marginLeft, S = a.style.marginRight, T = a.style.marginTop, $a = a.style.marginBottom, Le = document.body.style.margin, Me = document.documentElement.style.overflow, Ne = document.body.scroll, Oe = a.style.Aa;
  document.addEventListener("fullscreenchange", b);
  document.addEventListener("webkitfullscreenchange", b);
}
function ce(a, b, c) {
  a.style.paddingLeft = a.style.paddingRight = c + "px";
  a.style.paddingTop = a.style.paddingBottom = b + "px";
}
function de(a) {
  return 0 > Wd.indexOf(a) ? a.getBoundingClientRect() : {left:0, top:0};
}
function ee(a, b) {
  if (0 != b.na || 0 != b.ha) {
    be(a);
    var c = b.ob ? innerWidth : screen.width, e = b.ob ? innerHeight : screen.height, f = de(a), g = f.width;
    f = f.height;
    var h = Xd(a), n = h[0];
    h = h[1];
    3 == b.na ? (ce(a, (e - f) / 2, (c - g) / 2), c = g, e = f) : 2 == b.na && (c * h < n * e ? (g = h * c / n, ce(a, (e - g) / 2, 0), e = g) : (g = n * e / h, ce(a, 0, (c - g) / 2), c = g));
    a.style.backgroundColor || (a.style.backgroundColor = "black");
    document.body.style.backgroundColor || (document.body.style.backgroundColor = "black");
    a.style.width = c + "px";
    a.style.height = e + "px";
    1 == b.Xa && (a.style.Aa = "pixelated");
    g = 2 == b.ha ? devicePixelRatio : 1;
    0 != b.ha && (c = c * g | 0, e = e * g | 0, ae(a, c, e), a.P && a.P.J.viewport(0, 0, c, e));
  }
  if (a.requestFullscreen) {
    a.requestFullscreen();
  } else {
    if (a.webkitRequestFullscreen) {
      a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    } else {
      return Hd() ? -3 : -1;
    }
  }
  Vd = b;
  b.X && H.get(b.X)(37, 0, b.sa);
  return 0;
}
function fe(a) {
  if (a.requestPointerLock) {
    a.requestPointerLock();
  } else {
    if (a.ea) {
      a.ea();
    } else {
      return document.body.requestPointerLock || document.body.ea ? -3 : -1;
    }
  }
  return 0;
}
function ge(a, b) {
  y[a >> 3] = b.timestamp;
  for (var c = 0; c < b.axes.length; ++c) {
    y[a + 8 * c + 16 >> 3] = b.axes[c];
  }
  for (c = 0; c < b.buttons.length; ++c) {
    y[a + 8 * c + 528 >> 3] = "object" === typeof b.buttons[c] ? b.buttons[c].value : b.buttons[c];
  }
  for (c = 0; c < b.buttons.length; ++c) {
    v[a + 4 * c + 1040 >> 2] = "object" === typeof b.buttons[c] ? b.buttons[c].pressed : 1 == b.buttons[c];
  }
  v[a + 1296 >> 2] = b.connected;
  v[a + 1300 >> 2] = b.index;
  v[a + 8 >> 2] = b.axes.length;
  v[a + 12 >> 2] = b.buttons.length;
  D(b.id, a + 1304, 64);
  D(b.mapping, a + 1368, 64);
}
var he = [];
function ie(a, b, c, e) {
  for (var f = 0; f < a; f++) {
    var g = M[c](), h = g && sd(e);
    g ? (g.name = h, e[h] = g) : U(1282);
    v[b + 4 * f >> 2] = h;
  }
}
function je(a, b, c, e, f, g, h, n) {
  b = P[b];
  if (a = M[a](b, c)) {
    e = n && D(a.name, n, e), f && (v[f >> 2] = e), g && (v[g >> 2] = a.size), h && (v[h >> 2] = a.type);
  }
}
function ke(a, b) {
  F[a >> 2] = b;
  F[a + 4 >> 2] = (b - F[a >> 2]) / 4294967296;
  var c = 0 <= b ? F[a >> 2] + 4294967296 * F[a + 4 >> 2] : F[a >> 2] + 4294967296 * v[a + 4 >> 2];
  c != b && ia("writeI53ToI64() out of range: serialized JS Number " + b + " to Wasm heap as bytes lo=0x" + F[a >> 2].toString(16) + ", hi=0x" + F[a + 4 >> 2].toString(16) + ", which deserializes back to " + c + " instead!");
}
function le(a, b, c) {
  if (b) {
    var e = void 0;
    switch(a) {
      case 36346:
        e = 1;
        break;
      case 36344:
        0 != c && 1 != c && U(1280);
        return;
      case 36345:
        e = 0;
        break;
      case 34466:
        var f = M.getParameter(34467);
        e = f ? f.length : 0;
    }
    if (void 0 === e) {
      switch(f = M.getParameter(a), typeof f) {
        case "number":
          e = f;
          break;
        case "boolean":
          e = f ? 1 : 0;
          break;
        case "string":
          U(1280);
          return;
        case "object":
          if (null === f) {
            switch(a) {
              case 34964:
              case 35725:
              case 34965:
              case 36006:
              case 36007:
              case 32873:
              case 34229:
              case 34068:
                e = 0;
                break;
              default:
                U(1280);
                return;
            }
          } else {
            if (f instanceof Float32Array || f instanceof Uint32Array || f instanceof Int32Array || f instanceof Array) {
              for (a = 0; a < f.length; ++a) {
                switch(c) {
                  case 0:
                    v[b + 4 * a >> 2] = f[a];
                    break;
                  case 2:
                    x[b + 4 * a >> 2] = f[a];
                    break;
                  case 4:
                    t[b + a >> 0] = f[a] ? 1 : 0;
                }
              }
              return;
            }
            try {
              e = f.name | 0;
            } catch (g) {
              U(1280);
              l("GL_INVALID_ENUM in glGet" + c + "v: Unknown object returned from WebGL getParameter(" + a + ")! (error: " + g + ")");
              return;
            }
          }
          break;
        default:
          U(1280);
          l("GL_INVALID_ENUM in glGet" + c + "v: Native code calling glGet" + c + "v(" + a + ") and it returns " + f + " of type " + typeof f + "!");
          return;
      }
    }
    switch(c) {
      case 1:
        ke(b, e);
        break;
      case 0:
        v[b >> 2] = e;
        break;
      case 2:
        x[b >> 2] = e;
        break;
      case 4:
        t[b >> 0] = e ? 1 : 0;
    }
  } else {
    U(1281);
  }
}
function me(a) {
  var b = ua(a) + 1, c = E(b);
  D(a, c, b);
  return c;
}
function ne(a) {
  return "]" == a.slice(-1) && a.lastIndexOf("[");
}
function oe(a) {
  var b = a.V, c = a.Ma, e;
  if (!b) {
    for (a.V = b = {}, a.La = {}, e = 0; e < M.getProgramParameter(a, 35718); ++e) {
      var f = M.getActiveUniform(a, e);
      var g = f.name;
      f = f.size;
      var h = ne(g);
      h = 0 < h ? g.slice(0, h) : g;
      var n = a.pa;
      a.pa += f;
      c[h] = [f, n];
      for (g = 0; g < f; ++g) {
        b[n] = g, a.La[n++] = h;
      }
    }
  }
}
function Y(a) {
  var b = M.Qa;
  if (b) {
    var c = b.V[a];
    "number" === typeof c && (b.V[a] = c = M.getUniformLocation(b, b.La[a] + (0 < c ? "[" + c + "]" : "")));
    return c;
  }
  U(1282);
}
function pe(a, b, c, e) {
  if (c) {
    if (a = P[a], oe(a), a = M.getUniform(a, Y(b)), "number" == typeof a || "boolean" == typeof a) {
      switch(e) {
        case 0:
          v[c >> 2] = a;
          break;
        case 2:
          x[c >> 2] = a;
      }
    } else {
      for (b = 0; b < a.length; b++) {
        switch(e) {
          case 0:
            v[c + 4 * b >> 2] = a[b];
            break;
          case 2:
            x[c + 4 * b >> 2] = a[b];
        }
      }
    }
  } else {
    U(1281);
  }
}
function qe(a, b, c, e) {
  if (c) {
    if (a = M.getVertexAttrib(a, b), 34975 == b) {
      v[c >> 2] = a && a.name;
    } else {
      if ("number" == typeof a || "boolean" == typeof a) {
        switch(e) {
          case 0:
            v[c >> 2] = a;
            break;
          case 2:
            x[c >> 2] = a;
            break;
          case 5:
            v[c >> 2] = Math.fround(a);
        }
      } else {
        for (b = 0; b < a.length; b++) {
          switch(e) {
            case 0:
              v[c + 4 * b >> 2] = a[b];
              break;
            case 2:
              x[c + 4 * b >> 2] = a[b];
              break;
            case 5:
              v[c + 4 * b >> 2] = Math.fround(a[b]);
          }
        }
      }
    }
  } else {
    U(1281);
  }
}
function re(a, b, c, e, f) {
  a -= 5120;
  a = 1 == a ? C : 4 == a ? v : 6 == a ? x : 5 == a || 28922 == a ? F : za;
  var g = 31 - Math.clz32(a.BYTES_PER_ELEMENT), h = qd;
  return a.subarray(f >> g, f + e * (c * ({5:3, 6:4, 8:2, 29502:3, 29504:4, }[b - 6402] || 1) * (1 << g) + h - 1 & -h) >> g);
}
var se = [], te = [];
function ue(a, b) {
  if (!Hd()) {
    return -1;
  }
  a = X(a);
  return a ? a.requestFullscreen || a.webkitRequestFullscreen ? xd && Ed.M ? ee(a, b) : b.Ta ? (Bd(ee, 1, [a, b]), 1) : -2 : -3 : -4;
}
function ve(a, b) {
  var c = {target:X(2), s:"beforeunload", B:b, F:function(e) {
    e = e || event;
    var f = H.get(b)(28, 0, a);
    f && (f = z(f));
    if (f) {
      return e.preventDefault(), e.returnValue = f;
    }
  }, A:!0};
  W(c);
}
function we(a, b, c, e, f, g) {
  Kd || (Kd = E(256));
  a = {target:X(a), s:g, B:e, F:function(h) {
    h = h || event;
    var n = h.target.id ? h.target.id : "", p = Kd;
    D(Gd(h.target), p + 0, 128);
    D(n, p + 128, 128);
    H.get(e)(f, p, b) && h.preventDefault();
  }, A:c};
  W(a);
}
function xe(a, b, c, e, f) {
  Md || (Md = E(280));
  W({target:a, s:f, B:e, F:function(g) {
    g = g || event;
    var h = Md, n = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement, p = !!n;
    v[h >> 2] = p;
    v[h + 4 >> 2] = Hd();
    var r = p ? n : Ld, u = r && r.id ? r.id : "";
    D(Gd(r), h + 8, 128);
    D(u, h + 136, 128);
    v[h + 264 >> 2] = r ? r.clientWidth : 0;
    v[h + 268 >> 2] = r ? r.clientHeight : 0;
    v[h + 272 >> 2] = screen.width;
    v[h + 276 >> 2] = screen.height;
    p && (Ld = n);
    H.get(e)(19, h, b) && g.preventDefault();
  }, A:c});
}
function ye(a, b, c, e, f) {
  Nd || (Nd = E(1432));
  b = {target:X(2), M:!0, s:f, B:c, F:function(g) {
    g = g || event;
    var h = Nd;
    ge(h, g.gamepad);
    H.get(c)(e, h, a) && g.preventDefault();
  }, A:b};
  W(b);
}
function ze(a, b, c, e, f, g) {
  Od || (Od = E(176));
  a = {target:X(a), M:!0, s:g, B:e, F:function(h) {
    q(h);
    var n = Od;
    y[n >> 3] = h.timeStamp;
    var p = n >> 2;
    v[p + 2] = h.location;
    v[p + 3] = h.ctrlKey;
    v[p + 4] = h.shiftKey;
    v[p + 5] = h.altKey;
    v[p + 6] = h.metaKey;
    v[p + 7] = h.repeat;
    v[p + 8] = h.charCode;
    v[p + 9] = h.keyCode;
    v[p + 10] = h.which;
    D(h.key || "", n + 44, 32);
    D(h.code || "", n + 76, 32);
    D(h.char || "", n + 108, 32);
    D(h.locale || "", n + 140, 32);
    H.get(e)(f, n, b) && h.preventDefault();
  }, A:c};
  W(a);
}
function Ae(a, b, c) {
  q(0 == a % 4);
  y[a >> 3] = b.timeStamp;
  a >>= 2;
  v[a + 2] = b.screenX;
  v[a + 3] = b.screenY;
  v[a + 4] = b.clientX;
  v[a + 5] = b.clientY;
  v[a + 6] = b.ctrlKey;
  v[a + 7] = b.shiftKey;
  v[a + 8] = b.altKey;
  v[a + 9] = b.metaKey;
  ma[2 * a + 20] = b.button;
  ma[2 * a + 21] = b.buttons;
  v[a + 11] = b.movementX;
  v[a + 12] = b.movementY;
  c = de(c);
  v[a + 13] = b.clientX - c.left;
  v[a + 14] = b.clientY - c.top;
}
function Be(a, b, c, e, f, g) {
  Pd || (Pd = E(72));
  a = X(a);
  W({target:a, M:"mousemove" != g && "mouseenter" != g && "mouseleave" != g, s:g, B:e, F:function(h) {
    h = h || event;
    Ae(Pd, h, a);
    H.get(e)(f, Pd, b) && h.preventDefault();
  }, A:c});
}
function Ce(a, b, c, e, f) {
  Qd || (Qd = E(260));
  W({target:a, s:f, B:e, F:function(g) {
    g = g || event;
    var h = Qd, n = document.pointerLockElement || document.ab || document.Gb || document.Fb;
    v[h >> 2] = !!n;
    var p = n && n.id ? n.id : "";
    D(Gd(n), h + 4, 128);
    D(p, h + 132, 128);
    H.get(e)(20, h, b) && g.preventDefault();
  }, A:c});
}
function De(a, b, c, e) {
  Rd || (Rd = E(36));
  a = X(a);
  W({target:a, s:"resize", B:e, F:function(f) {
    f = f || event;
    if (f.target == a) {
      var g = document.body;
      if (g) {
        var h = Rd;
        v[h >> 2] = f.detail;
        v[h + 4 >> 2] = g.clientWidth;
        v[h + 8 >> 2] = g.clientHeight;
        v[h + 12 >> 2] = innerWidth;
        v[h + 16 >> 2] = innerHeight;
        v[h + 20 >> 2] = outerWidth;
        v[h + 24 >> 2] = outerHeight;
        v[h + 28 >> 2] = pageXOffset;
        v[h + 32 >> 2] = pageYOffset;
        H.get(e)(10, h, b) && f.preventDefault();
      }
    }
  }, A:c});
}
function Ee(a, b, c, e, f, g) {
  Sd || (Sd = E(1696));
  a = X(a);
  W({target:a, M:"touchstart" == g || "touchend" == g, s:g, B:e, F:function(h) {
    q(h);
    for (var n = {}, p = h.touches, r = 0; r < p.length; ++r) {
      var u = p[r];
      q(!u.Ba);
      q(!u.ka);
      n[u.identifier] = u;
    }
    p = h.changedTouches;
    for (r = 0; r < p.length; ++r) {
      u = p[r], q(!u.ka), u.Ba = 1, n[u.identifier] = u;
    }
    p = h.targetTouches;
    for (r = 0; r < p.length; ++r) {
      n[p[r].identifier].ka = 1;
    }
    p = Sd;
    y[p >> 3] = h.timeStamp;
    u = p >> 2;
    v[u + 3] = h.ctrlKey;
    v[u + 4] = h.shiftKey;
    v[u + 5] = h.altKey;
    v[u + 6] = h.metaKey;
    u += 7;
    var B = de(a), G = 0;
    for (r in n) {
      var A = n[r];
      v[u] = A.identifier;
      v[u + 1] = A.screenX;
      v[u + 2] = A.screenY;
      v[u + 3] = A.clientX;
      v[u + 4] = A.clientY;
      v[u + 5] = A.pageX;
      v[u + 6] = A.pageY;
      v[u + 7] = A.Ba;
      v[u + 8] = A.ka;
      v[u + 9] = A.clientX - B.left;
      v[u + 10] = A.clientY - B.top;
      u += 13;
      if (31 < ++G) {
        break;
      }
    }
    v[p + 8 >> 2] = G;
    H.get(e)(f, p, b) && h.preventDefault();
  }, A:c});
}
function Fe(a, b, c) {
  var e = Wd[1];
  Td || (Td = E(8));
  W({target:e, s:"visibilitychange", B:c, F:function(f) {
    f = f || event;
    var g = Td, h = ["hidden", "visible", "prerender", "unloaded"].indexOf(document.visibilityState);
    v[g >> 2] = document.hidden;
    v[g + 4 >> 2] = h;
    H.get(c)(21, g, a) && f.preventDefault();
  }, A:b});
}
function Ge(a, b, c, e) {
  Ud || (Ud = E(104));
  W({target:a, M:!0, s:"wheel", B:e, F:function(f) {
    f = f || event;
    var g = Ud;
    Ae(g, f, a);
    y[g + 72 >> 3] = f.deltaX;
    y[g + 80 >> 3] = f.deltaY;
    y[g + 88 >> 3] = f.deltaZ;
    v[g + 96 >> 2] = f.deltaMode;
    H.get(e)(9, g, b) && f.preventDefault();
  }, A:c});
}
var He = {};
function Ie() {
  if (!Je) {
    var a = {USER:"web_user", LOGNAME:"web_user", PATH:"/", PWD:"/", HOME:"/home/web_user", LANG:("object" === typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _:da || "./this.program"}, b;
    for (b in He) {
      void 0 === He[b] ? delete a[b] : a[b] = He[b];
    }
    var c = [];
    for (b in a) {
      c.push(b + "=" + a[b]);
    }
    Je = c;
  }
  return Je;
}
var Je;
function Jb(a, b, c, e) {
  a || (a = this);
  this.parent = a;
  this.I = a.I;
  this.da = null;
  this.id = Ab++;
  this.name = b;
  this.mode = c;
  this.h = {};
  this.i = {};
  this.S = e;
}
Object.defineProperties(Jb.prototype, {read:{get:function() {
  return 365 === (this.mode & 365);
}, set:function(a) {
  a ? this.mode |= 365 : this.mode &= -366;
}}, write:{get:function() {
  return 146 === (this.mode & 146);
}, set:function(a) {
  a ? this.mode |= 146 : this.mode &= -147;
}}});
Yb();
Bb = Array(4096);
Qb(L, "/");
Sb("/tmp");
Sb("/home");
Sb("/home/web_user");
(function() {
  Sb("/dev");
  nb(259, {read:function() {
    return 0;
  }, write:function(b, c, e, f) {
    return f;
  }});
  Tb("/dev/null", 259);
  mb(1280, pb);
  mb(1536, qb);
  Tb("/dev/tty", 1280);
  Tb("/dev/tty1", 1536);
  var a = jb();
  ac("random", a);
  ac("urandom", a);
  Sb("/dev/shm");
  Sb("/dev/shm/tmp");
})();
(function() {
  Sb("/proc");
  var a = Sb("/proc/self");
  Sb("/proc/self/fd");
  Qb({I:function() {
    var b = sb(a, "fd", 16895, 73);
    b.h = {R:function(c, e) {
      var f = zb[+e];
      if (!f) {
        throw new K(8);
      }
      c = {parent:null, I:{Ea:"fake"}, h:{T:function() {
        return f.path;
      }}};
      return c.parent = c;
    }};
    return b;
  }}, "/proc/self/fd");
})();
wb = {EPERM:63, ENOENT:44, ESRCH:71, EINTR:27, EIO:29, ENXIO:60, E2BIG:1, ENOEXEC:45, EBADF:8, ECHILD:12, EAGAIN:6, EWOULDBLOCK:6, ENOMEM:48, EACCES:2, EFAULT:21, ENOTBLK:105, EBUSY:10, EEXIST:20, EXDEV:75, ENODEV:43, ENOTDIR:54, EISDIR:31, EINVAL:28, ENFILE:41, EMFILE:33, ENOTTY:59, ETXTBSY:74, EFBIG:22, ENOSPC:51, ESPIPE:70, EROFS:69, EMLINK:34, EPIPE:64, EDOM:18, ERANGE:68, ENOMSG:49, EIDRM:24, ECHRNG:106, EL2NSYNC:156, EL3HLT:107, EL3RST:108, ELNRNG:109, EUNATCH:110, ENOCSI:111, EL2HLT:112, EDEADLK:16, 
ENOLCK:46, EBADE:113, EBADR:114, EXFULL:115, ENOANO:104, EBADRQC:103, EBADSLT:102, EDEADLOCK:16, EBFONT:101, ENOSTR:100, ENODATA:116, ETIME:117, ENOSR:118, ENONET:119, ENOPKG:120, EREMOTE:121, ENOLINK:47, EADV:122, ESRMNT:123, ECOMM:124, EPROTO:65, EMULTIHOP:36, EDOTDOT:125, EBADMSG:9, ENOTUNIQ:126, EBADFD:127, EREMCHG:128, ELIBACC:129, ELIBBAD:130, ELIBSCN:131, ELIBMAX:132, ELIBEXEC:133, ENOSYS:52, ENOTEMPTY:55, ENAMETOOLONG:37, ELOOP:32, EOPNOTSUPP:138, EPFNOSUPPORT:139, ECONNRESET:15, ENOBUFS:42, 
EAFNOSUPPORT:5, EPROTOTYPE:67, ENOTSOCK:57, ENOPROTOOPT:50, ESHUTDOWN:140, ECONNREFUSED:14, EADDRINUSE:3, ECONNABORTED:13, ENETUNREACH:40, ENETDOWN:38, ETIMEDOUT:73, EHOSTDOWN:142, EHOSTUNREACH:23, EINPROGRESS:26, EALREADY:7, EDESTADDRREQ:17, EMSGSIZE:35, EPROTONOSUPPORT:66, ESOCKTNOSUPPORT:137, EADDRNOTAVAIL:4, ENETRESET:39, EISCONN:30, ENOTCONN:53, ETOOMANYREFS:141, EUSERS:136, EDQUOT:19, ESTALE:72, ENOTSUP:138, ENOMEDIUM:148, EILSEQ:25, EOVERFLOW:61, ECANCELED:11, ENOTRECOVERABLE:56, EOWNERDEAD:62, 
ESTRPIPE:135, };
d.requestFullscreen = function(a, b) {
  Uc(a, b);
};
d.requestFullScreen = function() {
  m("Module.requestFullScreen has been replaced by Module.requestFullscreen (without a capital S)");
};
d.requestAnimationFrame = function(a) {
  qc(a);
};
d.setCanvasSize = function(a, b, c) {
  Wc(d.canvas, a, b);
  c || Xc();
};
d.pauseMainLoop = function() {
  mc = null;
  uc++;
};
d.resumeMainLoop = function() {
  uc++;
  var a = ic, b = jc, c = kc;
  kc = null;
  tc(c, 0, !1, wc, !0);
  hc(a, b);
  mc();
};
d.getUserMedia = function() {
  window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia);
  window.getUserMedia(void 0);
};
d.createContext = function(a, b, c, e) {
  return Mc(a, b, c, e);
};
for (var M, Z = 0; 32 > Z; ++Z) {
  he.push(Array(Z));
}
var Ke = new Float32Array(288);
for (Z = 0; 288 > Z; ++Z) {
  se[Z] = Ke.subarray(0, Z + 1);
}
var Pe = new Int32Array(288);
for (Z = 0; 288 > Z; ++Z) {
  te[Z] = Pe.subarray(0, Z + 1);
}
function Ya(a, b) {
  var c = Array(ua(a) + 1);
  a = ta(a, c, 0, c.length);
  b && (c.length = a);
  return c;
}
var Re = {__sigaction:eb, __sys_fcntl64:function(a, b, c) {
  dc = c;
  try {
    var e = fc(a);
    switch(b) {
      case 0:
        var f = ec();
        return 0 > f ? -28 : Vb(e.path, e.flags, 0, f).u;
      case 1:
      case 2:
        return 0;
      case 3:
        return e.flags;
      case 4:
        return f = ec(), e.flags |= f, 0;
      case 12:
        return f = ec(), ma[f + 0 >> 1] = 2, 0;
      case 13:
      case 14:
        return 0;
      case 16:
      case 8:
        return -28;
      case 9:
        return v[Qe() >> 2] = 28, -1;
      default:
        return -28;
    }
  } catch (g) {
    return "undefined" !== typeof cc && g instanceof K || m(g), -g.K;
  }
}, __sys_ioctl:function(a, b, c) {
  dc = c;
  try {
    var e = fc(a);
    switch(b) {
      case 21509:
      case 21505:
        return e.l ? 0 : -59;
      case 21510:
      case 21511:
      case 21512:
      case 21506:
      case 21507:
      case 21508:
        return e.l ? 0 : -59;
      case 21519:
        if (!e.l) {
          return -59;
        }
        var f = ec();
        return v[f >> 2] = 0;
      case 21520:
        return e.l ? -28 : -59;
      case 21531:
        a = f = ec();
        if (!e.i.eb) {
          throw new K(59);
        }
        return e.i.eb(e, b, a);
      case 21523:
        return e.l ? 0 : -59;
      case 21524:
        return e.l ? 0 : -59;
      default:
        m("bad ioctl syscall " + b);
    }
  } catch (g) {
    return "undefined" !== typeof cc && g instanceof K || m(g), -g.K;
  }
}, __sys_open:function(a, b, c) {
  dc = c;
  try {
    var e = z(a), f = c ? ec() : 0;
    return Vb(e, b, f).u;
  } catch (g) {
    return "undefined" !== typeof cc && g instanceof K || m(g), -g.K;
  }
}, clock_gettime:function(a, b) {
  if (0 === a) {
    a = Date.now();
  } else {
    if (1 === a || 4 === a) {
      a = gc();
    } else {
      return v[Qe() >> 2] = 28, -1;
    }
  }
  v[b >> 2] = a / 1000 | 0;
  v[b + 4 >> 2] = a % 1000 * 1E6 | 0;
  return 0;
}, dlclose:function() {
  m("To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking");
}, eglBindAPI:function(a) {
  if (12448 == a) {
    return N = 12288, 1;
  }
  N = 12300;
  return 0;
}, eglChooseConfig:function(a, b, c, e, f) {
  if (62000 != a) {
    N = 12296, c = 0;
  } else {
    if (b) {
      for (;;) {
        a = v[b >> 2];
        if (12321 == a) {
          O.alpha = 0 < v[b + 4 >> 2];
        } else {
          if (12325 == a) {
            O.depth = 0 < v[b + 4 >> 2];
          } else {
            if (12326 == a) {
              O.stencil = 0 < v[b + 4 >> 2];
            } else {
              if (12337 == a) {
                a = v[b + 4 >> 2], O.antialias = 0 < a;
              } else {
                if (12338 == a) {
                  a = v[b + 4 >> 2], O.antialias = 1 == a;
                } else {
                  if (12544 == a) {
                    O.Hb = 12547 != v[b + 4 >> 2];
                  } else {
                    if (12344 == a) {
                      break;
                    }
                  }
                }
              }
            }
          }
        }
        b += 8;
      }
    }
    c && e || f ? (f && (v[f >> 2] = 1), c && 0 < e && (v[c >> 2] = 62002), N = 12288, c = 1) : (N = 12300, c = 0);
  }
  return c;
}, eglCreateContext:function(a, b, c, e) {
  if (62000 != a) {
    return N = 12296, 0;
  }
  for (a = 1;;) {
    b = v[e >> 2];
    if (12440 == b) {
      a = v[e + 4 >> 2];
    } else {
      if (12344 == b) {
        break;
      } else {
        return N = 12292, 0;
      }
    }
    e += 8;
  }
  if (2 != a) {
    return N = 12293, 0;
  }
  O.Ca = a - 1;
  O.Ib = 0;
  ed = Oc(d.canvas, O);
  if (0 != ed) {
    return N = 12288, Qc(ed), d.qb = !0, Fc.forEach(function(f) {
      f();
    }), Qc(null), 62004;
  }
  N = 12297;
  return 0;
}, eglCreateWindowSurface:function(a, b) {
  if (62000 != a) {
    return N = 12296, 0;
  }
  if (62002 != b) {
    return N = 12293, 0;
  }
  N = 12288;
  return 62006;
}, eglDestroyContext:function(a, b) {
  if (62000 != a) {
    return N = 12296, 0;
  }
  if (62004 != b) {
    return N = 12294, 0;
  }
  a = ed;
  vd === Pc[a] && (vd = null);
  if ("object" === typeof Id) {
    for (var c = Pc[a].J.canvas, e = 0; e < zd.length; ++e) {
      zd[e].target != c || Ad(e--);
    }
  }
  Pc[a] && Pc[a].J.canvas && (Pc[a].J.canvas.P = void 0);
  Pc[a] = null;
  N = 12288;
  ad == b && (ad = 0);
  return 1;
}, eglDestroySurface:function(a, b) {
  if (62000 != a) {
    return N = 12296, 0;
  }
  if (62006 != b) {
    return N = 12301, 1;
  }
  bd == b && (bd = 0);
  cd == b && (cd = 0);
  N = 12288;
  return 1;
}, eglGetConfigAttrib:function(a, b, c, e) {
  if (62000 != a) {
    return N = 12296, 0;
  }
  if (62002 != b) {
    return N = 12293, 0;
  }
  if (!e) {
    return N = 12300, 0;
  }
  N = 12288;
  switch(c) {
    case 12320:
      return v[e >> 2] = O.alpha ? 32 : 24, 1;
    case 12321:
      return v[e >> 2] = O.alpha ? 8 : 0, 1;
    case 12322:
      return v[e >> 2] = 8, 1;
    case 12323:
      return v[e >> 2] = 8, 1;
    case 12324:
      return v[e >> 2] = 8, 1;
    case 12325:
      return v[e >> 2] = O.depth ? 24 : 0, 1;
    case 12326:
      return v[e >> 2] = O.stencil ? 8 : 0, 1;
    case 12327:
      return v[e >> 2] = 12344, 1;
    case 12328:
      return v[e >> 2] = 62002, 1;
    case 12329:
      return v[e >> 2] = 0, 1;
    case 12330:
      return v[e >> 2] = 4096, 1;
    case 12331:
      return v[e >> 2] = 16777216, 1;
    case 12332:
      return v[e >> 2] = 4096, 1;
    case 12333:
      return v[e >> 2] = 0, 1;
    case 12334:
      return v[e >> 2] = 0, 1;
    case 12335:
      return v[e >> 2] = 12344, 1;
    case 12337:
      return v[e >> 2] = O.antialias ? 4 : 0, 1;
    case 12338:
      return v[e >> 2] = O.antialias ? 1 : 0, 1;
    case 12339:
      return v[e >> 2] = 4, 1;
    case 12340:
      return v[e >> 2] = 12344, 1;
    case 12341:
    case 12342:
    case 12343:
      return v[e >> 2] = -1, 1;
    case 12345:
    case 12346:
      return v[e >> 2] = 0, 1;
    case 12347:
      return v[e >> 2] = 0, 1;
    case 12348:
      return v[e >> 2] = 1;
    case 12349:
    case 12350:
      return v[e >> 2] = 0, 1;
    case 12351:
      return v[e >> 2] = 12430, 1;
    case 12352:
      return v[e >> 2] = 4, 1;
    case 12354:
      return v[e >> 2] = 0, 1;
    default:
      return N = 12292, 0;
  }
}, eglGetDisplay:function() {
  N = 12288;
  return 62000;
}, eglGetError:function() {
  return N;
}, eglInitialize:function(a, b, c) {
  if (62000 == a) {
    return b && (v[b >> 2] = 1), c && (v[c >> 2] = 4), $c = !0, N = 12288, 1;
  }
  N = 12296;
  return 0;
}, eglMakeCurrent:function(a, b, c, e) {
  if (62000 != a) {
    return N = 12296, 0;
  }
  if (0 != e && 62004 != e) {
    return N = 12294, 0;
  }
  if (0 != c && 62006 != c || 0 != b && 62006 != b) {
    return N = 12301, 0;
  }
  Qc(e ? ed : null);
  ad = e;
  cd = b;
  bd = c;
  N = 12288;
  return 1;
}, eglQueryString:function(a, b) {
  if (62000 != a) {
    return N = 12296, 0;
  }
  N = 12288;
  if (dd[b]) {
    return dd[b];
  }
  switch(b) {
    case 12371:
      a = va("Emscripten");
      break;
    case 12372:
      a = va("1.4 Emscripten EGL");
      break;
    case 12373:
      a = va("");
      break;
    case 12429:
      a = va("OpenGL_ES");
      break;
    default:
      return N = 12300, 0;
  }
  return dd[b] = a;
}, eglSwapBuffers:function() {
  if ($c) {
    if (d.C) {
      if (d.C.isContextLost()) {
        N = 12302;
      } else {
        return N = 12288, 1;
      }
    } else {
      N = 12290;
    }
  } else {
    N = 12289;
  }
  return 0;
}, eglSwapInterval:function(a, b) {
  if (62000 != a) {
    return N = 12296, 0;
  }
  0 == b ? hc(0, 0) : hc(1, b);
  N = 12288;
  return 1;
}, eglTerminate:function(a) {
  if (62000 != a) {
    return N = 12296, 0;
  }
  cd = bd = ad = 0;
  $c = !1;
  N = 12288;
  return 1;
}, eglWaitGL:function() {
  N = 12288;
  return 1;
}, eglWaitNative:function() {
  N = 12288;
  return 1;
}, emscripten_asm_const_int:function(a, b, c) {
  q(Array.isArray(wd));
  q(0 == c % 16);
  wd.length = 0;
  var e;
  for (c >>= 2; e = C[b++];) {
    q(100 === e || 102 === e || 105 === e), (e = 105 > e) && c & 1 && c++, wd.push(e ? y[c++ >> 1] : v[c]), ++c;
  }
  bb.hasOwnProperty(a) || m("No EM_ASM constant found at address " + a);
  return bb[a].apply(null, wd);
}, emscripten_exit_fullscreen:function() {
  if (!Hd()) {
    return -1;
  }
  Cd(ee);
  var a = Wd[1];
  if (a.exitFullscreen) {
    a.fullscreenElement && a.exitFullscreen();
  } else {
    if (a.webkitExitFullscreen) {
      a.webkitFullscreenElement && a.webkitExitFullscreen();
    } else {
      return -1;
    }
  }
  return 0;
}, emscripten_exit_pointerlock:function() {
  Cd(fe);
  if (document.exitPointerLock) {
    document.exitPointerLock();
  } else {
    if (document.xa) {
      document.xa();
    } else {
      return -1;
    }
  }
  return 0;
}, emscripten_get_device_pixel_ratio:function() {
  return devicePixelRatio;
}, emscripten_get_element_css_size:function(a, b, c) {
  a = X(a);
  if (!a) {
    return -4;
  }
  a = de(a);
  y[b >> 3] = a.width;
  y[c >> 3] = a.height;
  return 0;
}, emscripten_get_gamepad_status:function(a, b) {
  if (!Jd) {
    throw "emscripten_get_gamepad_status() can only be called after having first called emscripten_sample_gamepad_data() and that function has returned EMSCRIPTEN_RESULT_SUCCESS!";
  }
  if (0 > a || a >= Jd.length) {
    return -5;
  }
  if (!Jd[a]) {
    return -7;
  }
  ge(b, Jd[a]);
  return 0;
}, emscripten_get_num_gamepads:function() {
  if (!Jd) {
    throw "emscripten_get_num_gamepads() can only be called after having first called emscripten_sample_gamepad_data() and that function has returned EMSCRIPTEN_RESULT_SUCCESS!";
  }
  return Jd.length;
}, emscripten_glActiveTexture:function(a) {
  M.activeTexture(a);
}, emscripten_glAttachShader:function(a, b) {
  M.attachShader(P[a], Q[b]);
}, emscripten_glBeginQueryEXT:function(a, b) {
  M.D.beginQueryEXT(a, R[b]);
}, emscripten_glBindAttribLocation:function(a, b, c) {
  M.bindAttribLocation(P[a], b, z(c));
}, emscripten_glBindBuffer:function(a, b) {
  M.bindBuffer(a, kd[b]);
}, emscripten_glBindFramebuffer:function(a, b) {
  M.bindFramebuffer(a, ld[b]);
}, emscripten_glBindRenderbuffer:function(a, b) {
  M.bindRenderbuffer(a, md[b]);
}, emscripten_glBindTexture:function(a, b) {
  M.bindTexture(a, nd[b]);
}, emscripten_glBindVertexArrayOES:function(a) {
  M.bindVertexArray(od[a]);
}, emscripten_glBlendColor:function(a, b, c, e) {
  M.blendColor(a, b, c, e);
}, emscripten_glBlendEquation:function(a) {
  M.blendEquation(a);
}, emscripten_glBlendEquationSeparate:function(a, b) {
  M.blendEquationSeparate(a, b);
}, emscripten_glBlendFunc:function(a, b) {
  M.blendFunc(a, b);
}, emscripten_glBlendFuncSeparate:function(a, b, c, e) {
  M.blendFuncSeparate(a, b, c, e);
}, emscripten_glBufferData:function(a, b, c, e) {
  M.bufferData(a, c ? C.subarray(c, c + b) : b, e);
}, emscripten_glBufferSubData:function(a, b, c, e) {
  M.bufferSubData(a, b, C.subarray(e, e + c));
}, emscripten_glCheckFramebufferStatus:function(a) {
  return M.checkFramebufferStatus(a);
}, emscripten_glClear:function(a) {
  M.clear(a);
}, emscripten_glClearColor:function(a, b, c, e) {
  M.clearColor(a, b, c, e);
}, emscripten_glClearDepthf:function(a) {
  M.clearDepth(a);
}, emscripten_glClearStencil:function(a) {
  M.clearStencil(a);
}, emscripten_glColorMask:function(a, b, c, e) {
  M.colorMask(!!a, !!b, !!c, !!e);
}, emscripten_glCompileShader:function(a) {
  M.compileShader(Q[a]);
}, emscripten_glCompressedTexImage2D:function(a, b, c, e, f, g, h, n) {
  M.compressedTexImage2D(a, b, c, e, f, g, n ? C.subarray(n, n + h) : null);
}, emscripten_glCompressedTexSubImage2D:function(a, b, c, e, f, g, h, n, p) {
  M.compressedTexSubImage2D(a, b, c, e, f, g, h, p ? C.subarray(p, p + n) : null);
}, emscripten_glCopyTexImage2D:function(a, b, c, e, f, g, h, n) {
  M.copyTexImage2D(a, b, c, e, f, g, h, n);
}, emscripten_glCopyTexSubImage2D:function(a, b, c, e, f, g, h, n) {
  M.copyTexSubImage2D(a, b, c, e, f, g, h, n);
}, emscripten_glCreateProgram:function() {
  var a = sd(P), b = M.createProgram();
  b.name = a;
  b.aa = b.Z = b.$ = 0;
  b.pa = 1;
  P[a] = b;
  return a;
}, emscripten_glCreateShader:function(a) {
  var b = sd(Q);
  Q[b] = M.createShader(a);
  return b;
}, emscripten_glCullFace:function(a) {
  M.cullFace(a);
}, emscripten_glDeleteBuffers:function(a, b) {
  for (var c = 0; c < a; c++) {
    var e = v[b + 4 * c >> 2], f = kd[e];
    f && (M.deleteBuffer(f), f.name = 0, kd[e] = null);
  }
}, emscripten_glDeleteFramebuffers:function(a, b) {
  for (var c = 0; c < a; ++c) {
    var e = v[b + 4 * c >> 2], f = ld[e];
    f && (M.deleteFramebuffer(f), f.name = 0, ld[e] = null);
  }
}, emscripten_glDeleteProgram:function(a) {
  if (a) {
    var b = P[a];
    b ? (M.deleteProgram(b), b.name = 0, P[a] = null) : U(1281);
  }
}, emscripten_glDeleteQueriesEXT:function(a, b) {
  for (var c = 0; c < a; c++) {
    var e = v[b + 4 * c >> 2], f = R[e];
    f && (M.D.deleteQueryEXT(f), R[e] = null);
  }
}, emscripten_glDeleteRenderbuffers:function(a, b) {
  for (var c = 0; c < a; c++) {
    var e = v[b + 4 * c >> 2], f = md[e];
    f && (M.deleteRenderbuffer(f), f.name = 0, md[e] = null);
  }
}, emscripten_glDeleteShader:function(a) {
  if (a) {
    var b = Q[a];
    b ? (M.deleteShader(b), Q[a] = null) : U(1281);
  }
}, emscripten_glDeleteTextures:function(a, b) {
  for (var c = 0; c < a; c++) {
    var e = v[b + 4 * c >> 2], f = nd[e];
    f && (M.deleteTexture(f), f.name = 0, nd[e] = null);
  }
}, emscripten_glDeleteVertexArraysOES:function(a, b) {
  for (var c = 0; c < a; c++) {
    var e = v[b + 4 * c >> 2];
    M.deleteVertexArray(od[e]);
    od[e] = null;
  }
}, emscripten_glDepthFunc:function(a) {
  M.depthFunc(a);
}, emscripten_glDepthMask:function(a) {
  M.depthMask(!!a);
}, emscripten_glDepthRangef:function(a, b) {
  M.depthRange(a, b);
}, emscripten_glDetachShader:function(a, b) {
  M.detachShader(P[a], Q[b]);
}, emscripten_glDisable:function(a) {
  M.disable(a);
}, emscripten_glDisableVertexAttribArray:function(a) {
  M.disableVertexAttribArray(a);
}, emscripten_glDrawArrays:function(a, b, c) {
  M.drawArrays(a, b, c);
}, emscripten_glDrawArraysInstancedANGLE:function(a, b, c, e) {
  M.drawArraysInstanced(a, b, c, e);
}, emscripten_glDrawBuffersWEBGL:function(a, b) {
  for (var c = he[a], e = 0; e < a; e++) {
    c[e] = v[b + 4 * e >> 2];
  }
  M.drawBuffers(c);
}, emscripten_glDrawElements:function(a, b, c, e) {
  M.drawElements(a, b, c, e);
}, emscripten_glDrawElementsInstancedANGLE:function(a, b, c, e, f) {
  M.drawElementsInstanced(a, b, c, e, f);
}, emscripten_glEnable:function(a) {
  M.enable(a);
}, emscripten_glEnableVertexAttribArray:function(a) {
  M.enableVertexAttribArray(a);
}, emscripten_glEndQueryEXT:function(a) {
  M.D.endQueryEXT(a);
}, emscripten_glFinish:function() {
  M.finish();
}, emscripten_glFlush:function() {
  M.flush();
}, emscripten_glFramebufferRenderbuffer:function(a, b, c, e) {
  M.framebufferRenderbuffer(a, b, c, md[e]);
}, emscripten_glFramebufferTexture2D:function(a, b, c, e, f) {
  M.framebufferTexture2D(a, b, c, nd[e], f);
}, emscripten_glFrontFace:function(a) {
  M.frontFace(a);
}, emscripten_glGenBuffers:function(a, b) {
  ie(a, b, "createBuffer", kd);
}, emscripten_glGenFramebuffers:function(a, b) {
  ie(a, b, "createFramebuffer", ld);
}, emscripten_glGenQueriesEXT:function(a, b) {
  for (var c = 0; c < a; c++) {
    var e = M.D.createQueryEXT();
    if (!e) {
      for (U(1282); c < a;) {
        v[b + 4 * c++ >> 2] = 0;
      }
      break;
    }
    var f = sd(R);
    e.name = f;
    R[f] = e;
    v[b + 4 * c >> 2] = f;
  }
}, emscripten_glGenRenderbuffers:function(a, b) {
  ie(a, b, "createRenderbuffer", md);
}, emscripten_glGenTextures:function(a, b) {
  ie(a, b, "createTexture", nd);
}, emscripten_glGenVertexArraysOES:function(a, b) {
  ie(a, b, "createVertexArray", od);
}, emscripten_glGenerateMipmap:function(a) {
  M.generateMipmap(a);
}, emscripten_glGetActiveAttrib:function(a, b, c, e, f, g, h) {
  je("getActiveAttrib", a, b, c, e, f, g, h);
}, emscripten_glGetActiveUniform:function(a, b, c, e, f, g, h) {
  je("getActiveUniform", a, b, c, e, f, g, h);
}, emscripten_glGetAttachedShaders:function(a, b, c, e) {
  a = M.getAttachedShaders(P[a]);
  var f = a.length;
  f > b && (f = b);
  v[c >> 2] = f;
  for (b = 0; b < f; ++b) {
    v[e + 4 * b >> 2] = Q.indexOf(a[b]);
  }
}, emscripten_glGetAttribLocation:function(a, b) {
  return M.getAttribLocation(P[a], z(b));
}, emscripten_glGetBooleanv:function(a, b) {
  le(a, b, 4);
}, emscripten_glGetBufferParameteriv:function(a, b, c) {
  c ? v[c >> 2] = M.getBufferParameter(a, b) : U(1281);
}, emscripten_glGetError:function() {
  var a = M.getError() || rd;
  rd = 0;
  return a;
}, emscripten_glGetFloatv:function(a, b) {
  le(a, b, 2);
}, emscripten_glGetFramebufferAttachmentParameteriv:function(a, b, c, e) {
  a = M.getFramebufferAttachmentParameter(a, b, c);
  if (a instanceof WebGLRenderbuffer || a instanceof WebGLTexture) {
    a = a.name | 0;
  }
  v[e >> 2] = a;
}, emscripten_glGetIntegerv:function(a, b) {
  le(a, b, 0);
}, emscripten_glGetProgramInfoLog:function(a, b, c, e) {
  a = M.getProgramInfoLog(P[a]);
  null === a && (a = "(unknown error)");
  b = 0 < b && e ? D(a, e, b) : 0;
  c && (v[c >> 2] = b);
}, emscripten_glGetProgramiv:function(a, b, c) {
  if (c) {
    if (a >= jd) {
      U(1281);
    } else {
      if (a = P[a], 35716 == b) {
        a = M.getProgramInfoLog(a), null === a && (a = "(unknown error)"), v[c >> 2] = a.length + 1;
      } else {
        if (35719 == b) {
          if (!a.aa) {
            for (b = 0; b < M.getProgramParameter(a, 35718); ++b) {
              a.aa = Math.max(a.aa, M.getActiveUniform(a, b).name.length + 1);
            }
          }
          v[c >> 2] = a.aa;
        } else {
          if (35722 == b) {
            if (!a.Z) {
              for (b = 0; b < M.getProgramParameter(a, 35721); ++b) {
                a.Z = Math.max(a.Z, M.getActiveAttrib(a, b).name.length + 1);
              }
            }
            v[c >> 2] = a.Z;
          } else {
            if (35381 == b) {
              if (!a.$) {
                for (b = 0; b < M.getProgramParameter(a, 35382); ++b) {
                  a.$ = Math.max(a.$, M.getActiveUniformBlockName(a, b).length + 1);
                }
              }
              v[c >> 2] = a.$;
            } else {
              v[c >> 2] = M.getProgramParameter(a, b);
            }
          }
        }
      }
    }
  } else {
    U(1281);
  }
}, emscripten_glGetQueryObjecti64vEXT:function(a, b, c) {
  if (c) {
    a = M.D.getQueryObjectEXT(R[a], b);
    var e;
    "boolean" == typeof a ? e = a ? 1 : 0 : e = a;
    ke(c, e);
  } else {
    U(1281);
  }
}, emscripten_glGetQueryObjectivEXT:function(a, b, c) {
  if (c) {
    a = M.D.getQueryObjectEXT(R[a], b);
    var e;
    "boolean" == typeof a ? e = a ? 1 : 0 : e = a;
    v[c >> 2] = e;
  } else {
    U(1281);
  }
}, emscripten_glGetQueryObjectui64vEXT:function(a, b, c) {
  if (c) {
    a = M.D.getQueryObjectEXT(R[a], b);
    var e;
    "boolean" == typeof a ? e = a ? 1 : 0 : e = a;
    ke(c, e);
  } else {
    U(1281);
  }
}, emscripten_glGetQueryObjectuivEXT:function(a, b, c) {
  if (c) {
    a = M.D.getQueryObjectEXT(R[a], b);
    var e;
    "boolean" == typeof a ? e = a ? 1 : 0 : e = a;
    v[c >> 2] = e;
  } else {
    U(1281);
  }
}, emscripten_glGetQueryivEXT:function(a, b, c) {
  c ? v[c >> 2] = M.D.getQueryEXT(a, b) : U(1281);
}, emscripten_glGetRenderbufferParameteriv:function(a, b, c) {
  c ? v[c >> 2] = M.getRenderbufferParameter(a, b) : U(1281);
}, emscripten_glGetShaderInfoLog:function(a, b, c, e) {
  a = M.getShaderInfoLog(Q[a]);
  null === a && (a = "(unknown error)");
  b = 0 < b && e ? D(a, e, b) : 0;
  c && (v[c >> 2] = b);
}, emscripten_glGetShaderPrecisionFormat:function(a, b, c, e) {
  a = M.getShaderPrecisionFormat(a, b);
  v[c >> 2] = a.rangeMin;
  v[c + 4 >> 2] = a.rangeMax;
  v[e >> 2] = a.precision;
}, emscripten_glGetShaderSource:function(a, b, c, e) {
  if (a = M.getShaderSource(Q[a])) {
    b = 0 < b && e ? D(a, e, b) : 0, c && (v[c >> 2] = b);
  }
}, emscripten_glGetShaderiv:function(a, b, c) {
  c ? 35716 == b ? (a = M.getShaderInfoLog(Q[a]), null === a && (a = "(unknown error)"), v[c >> 2] = a ? a.length + 1 : 0) : 35720 == b ? (a = M.getShaderSource(Q[a]), v[c >> 2] = a ? a.length + 1 : 0) : v[c >> 2] = M.getShaderParameter(Q[a], b) : U(1281);
}, emscripten_glGetString:function(a) {
  var b = pd[a];
  if (!b) {
    switch(a) {
      case 7939:
        b = M.getSupportedExtensions() || [];
        b = b.concat(b.map(function(e) {
          return "GL_" + e;
        }));
        b = me(b.join(" "));
        break;
      case 7936:
      case 7937:
      case 37445:
      case 37446:
        (b = M.getParameter(a)) || U(1280);
        b = b && me(b);
        break;
      case 7938:
        b = me("OpenGL ES 2.0 (" + M.getParameter(7938) + ")");
        break;
      case 35724:
        b = M.getParameter(35724);
        var c = b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
        null !== c && (3 == c[1].length && (c[1] += "0"), b = "OpenGL ES GLSL ES " + c[1] + " (" + b + ")");
        b = me(b);
        break;
      default:
        U(1280);
    }
    pd[a] = b;
  }
  return b;
}, emscripten_glGetTexParameterfv:function(a, b, c) {
  c ? x[c >> 2] = M.getTexParameter(a, b) : U(1281);
}, emscripten_glGetTexParameteriv:function(a, b, c) {
  c ? v[c >> 2] = M.getTexParameter(a, b) : U(1281);
}, emscripten_glGetUniformLocation:function(a, b) {
  b = z(b);
  if (a = P[a]) {
    oe(a);
    var c = a.V, e = 0, f = b, g = ne(b);
    0 < g && (e = parseInt(b.slice(g + 1)) >>> 0, f = b.slice(0, g));
    if ((f = a.Ma[f]) && e < f[0] && (e += f[1], c[e] = c[e] || M.getUniformLocation(a, b))) {
      return e;
    }
  } else {
    U(1281);
  }
  return -1;
}, emscripten_glGetUniformfv:function(a, b, c) {
  pe(a, b, c, 2);
}, emscripten_glGetUniformiv:function(a, b, c) {
  pe(a, b, c, 0);
}, emscripten_glGetVertexAttribPointerv:function(a, b, c) {
  c ? v[c >> 2] = M.getVertexAttribOffset(a, b) : U(1281);
}, emscripten_glGetVertexAttribfv:function(a, b, c) {
  qe(a, b, c, 2);
}, emscripten_glGetVertexAttribiv:function(a, b, c) {
  qe(a, b, c, 5);
}, emscripten_glHint:function(a, b) {
  M.hint(a, b);
}, emscripten_glIsBuffer:function(a) {
  return (a = kd[a]) ? M.isBuffer(a) : 0;
}, emscripten_glIsEnabled:function(a) {
  return M.isEnabled(a);
}, emscripten_glIsFramebuffer:function(a) {
  return (a = ld[a]) ? M.isFramebuffer(a) : 0;
}, emscripten_glIsProgram:function(a) {
  return (a = P[a]) ? M.isProgram(a) : 0;
}, emscripten_glIsQueryEXT:function(a) {
  return (a = R[a]) ? M.D.isQueryEXT(a) : 0;
}, emscripten_glIsRenderbuffer:function(a) {
  return (a = md[a]) ? M.isRenderbuffer(a) : 0;
}, emscripten_glIsShader:function(a) {
  return (a = Q[a]) ? M.isShader(a) : 0;
}, emscripten_glIsTexture:function(a) {
  return (a = nd[a]) ? M.isTexture(a) : 0;
}, emscripten_glIsVertexArrayOES:function(a) {
  return (a = od[a]) ? M.isVertexArray(a) : 0;
}, emscripten_glLineWidth:function(a) {
  M.lineWidth(a);
}, emscripten_glLinkProgram:function(a) {
  a = P[a];
  M.linkProgram(a);
  a.V = 0;
  a.Ma = {};
}, emscripten_glPixelStorei:function(a, b) {
  3317 == a && (qd = b);
  M.pixelStorei(a, b);
}, emscripten_glPolygonOffset:function(a, b) {
  M.polygonOffset(a, b);
}, emscripten_glQueryCounterEXT:function(a, b) {
  M.D.queryCounterEXT(R[a], b);
}, emscripten_glReadPixels:function(a, b, c, e, f, g, h) {
  (h = re(g, f, c, e, h)) ? M.readPixels(a, b, c, e, f, g, h) : U(1280);
}, emscripten_glReleaseShaderCompiler:function() {
}, emscripten_glRenderbufferStorage:function(a, b, c, e) {
  M.renderbufferStorage(a, b, c, e);
}, emscripten_glSampleCoverage:function(a, b) {
  M.sampleCoverage(a, !!b);
}, emscripten_glScissor:function(a, b, c, e) {
  M.scissor(a, b, c, e);
}, emscripten_glShaderBinary:function() {
  U(1280);
}, emscripten_glShaderSource:function(a, b, c, e) {
  for (var f = "", g = 0; g < b; ++g) {
    var h = e ? v[e + 4 * g >> 2] : -1;
    f += z(v[c + 4 * g >> 2], 0 > h ? void 0 : h);
  }
  M.shaderSource(Q[a], f);
}, emscripten_glStencilFunc:function(a, b, c) {
  M.stencilFunc(a, b, c);
}, emscripten_glStencilFuncSeparate:function(a, b, c, e) {
  M.stencilFuncSeparate(a, b, c, e);
}, emscripten_glStencilMask:function(a) {
  M.stencilMask(a);
}, emscripten_glStencilMaskSeparate:function(a, b) {
  M.stencilMaskSeparate(a, b);
}, emscripten_glStencilOp:function(a, b, c) {
  M.stencilOp(a, b, c);
}, emscripten_glStencilOpSeparate:function(a, b, c, e) {
  M.stencilOpSeparate(a, b, c, e);
}, emscripten_glTexImage2D:function(a, b, c, e, f, g, h, n, p) {
  M.texImage2D(a, b, c, e, f, g, h, n, p ? re(n, h, e, f, p) : null);
}, emscripten_glTexParameterf:function(a, b, c) {
  M.texParameterf(a, b, c);
}, emscripten_glTexParameterfv:function(a, b, c) {
  M.texParameterf(a, b, x[c >> 2]);
}, emscripten_glTexParameteri:function(a, b, c) {
  M.texParameteri(a, b, c);
}, emscripten_glTexParameteriv:function(a, b, c) {
  M.texParameteri(a, b, v[c >> 2]);
}, emscripten_glTexSubImage2D:function(a, b, c, e, f, g, h, n, p) {
  var r = null;
  p && (r = re(n, h, f, g, p));
  M.texSubImage2D(a, b, c, e, f, g, h, n, r);
}, emscripten_glUniform1f:function(a, b) {
  M.uniform1f(Y(a), b);
}, emscripten_glUniform1fv:function(a, b, c) {
  if (288 >= b) {
    for (var e = se[b - 1], f = 0; f < b; ++f) {
      e[f] = x[c + 4 * f >> 2];
    }
  } else {
    e = x.subarray(c >> 2, c + 4 * b >> 2);
  }
  M.uniform1fv(Y(a), e);
}, emscripten_glUniform1i:function(a, b) {
  M.uniform1i(Y(a), b);
}, emscripten_glUniform1iv:function(a, b, c) {
  if (288 >= b) {
    for (var e = te[b - 1], f = 0; f < b; ++f) {
      e[f] = v[c + 4 * f >> 2];
    }
  } else {
    e = v.subarray(c >> 2, c + 4 * b >> 2);
  }
  M.uniform1iv(Y(a), e);
}, emscripten_glUniform2f:function(a, b, c) {
  M.uniform2f(Y(a), b, c);
}, emscripten_glUniform2fv:function(a, b, c) {
  if (144 >= b) {
    for (var e = se[2 * b - 1], f = 0; f < 2 * b; f += 2) {
      e[f] = x[c + 4 * f >> 2], e[f + 1] = x[c + (4 * f + 4) >> 2];
    }
  } else {
    e = x.subarray(c >> 2, c + 8 * b >> 2);
  }
  M.uniform2fv(Y(a), e);
}, emscripten_glUniform2i:function(a, b, c) {
  M.uniform2i(Y(a), b, c);
}, emscripten_glUniform2iv:function(a, b, c) {
  if (144 >= b) {
    for (var e = te[2 * b - 1], f = 0; f < 2 * b; f += 2) {
      e[f] = v[c + 4 * f >> 2], e[f + 1] = v[c + (4 * f + 4) >> 2];
    }
  } else {
    e = v.subarray(c >> 2, c + 8 * b >> 2);
  }
  M.uniform2iv(Y(a), e);
}, emscripten_glUniform3f:function(a, b, c, e) {
  M.uniform3f(Y(a), b, c, e);
}, emscripten_glUniform3fv:function(a, b, c) {
  if (96 >= b) {
    for (var e = se[3 * b - 1], f = 0; f < 3 * b; f += 3) {
      e[f] = x[c + 4 * f >> 2], e[f + 1] = x[c + (4 * f + 4) >> 2], e[f + 2] = x[c + (4 * f + 8) >> 2];
    }
  } else {
    e = x.subarray(c >> 2, c + 12 * b >> 2);
  }
  M.uniform3fv(Y(a), e);
}, emscripten_glUniform3i:function(a, b, c, e) {
  M.uniform3i(Y(a), b, c, e);
}, emscripten_glUniform3iv:function(a, b, c) {
  if (96 >= b) {
    for (var e = te[3 * b - 1], f = 0; f < 3 * b; f += 3) {
      e[f] = v[c + 4 * f >> 2], e[f + 1] = v[c + (4 * f + 4) >> 2], e[f + 2] = v[c + (4 * f + 8) >> 2];
    }
  } else {
    e = v.subarray(c >> 2, c + 12 * b >> 2);
  }
  M.uniform3iv(Y(a), e);
}, emscripten_glUniform4f:function(a, b, c, e, f) {
  M.uniform4f(Y(a), b, c, e, f);
}, emscripten_glUniform4fv:function(a, b, c) {
  if (72 >= b) {
    var e = se[4 * b - 1], f = x;
    c >>= 2;
    for (var g = 0; g < 4 * b; g += 4) {
      var h = c + g;
      e[g] = f[h];
      e[g + 1] = f[h + 1];
      e[g + 2] = f[h + 2];
      e[g + 3] = f[h + 3];
    }
  } else {
    e = x.subarray(c >> 2, c + 16 * b >> 2);
  }
  M.uniform4fv(Y(a), e);
}, emscripten_glUniform4i:function(a, b, c, e, f) {
  M.uniform4i(Y(a), b, c, e, f);
}, emscripten_glUniform4iv:function(a, b, c) {
  if (72 >= b) {
    for (var e = te[4 * b - 1], f = 0; f < 4 * b; f += 4) {
      e[f] = v[c + 4 * f >> 2], e[f + 1] = v[c + (4 * f + 4) >> 2], e[f + 2] = v[c + (4 * f + 8) >> 2], e[f + 3] = v[c + (4 * f + 12) >> 2];
    }
  } else {
    e = v.subarray(c >> 2, c + 16 * b >> 2);
  }
  M.uniform4iv(Y(a), e);
}, emscripten_glUniformMatrix2fv:function(a, b, c, e) {
  if (72 >= b) {
    for (var f = se[4 * b - 1], g = 0; g < 4 * b; g += 4) {
      f[g] = x[e + 4 * g >> 2], f[g + 1] = x[e + (4 * g + 4) >> 2], f[g + 2] = x[e + (4 * g + 8) >> 2], f[g + 3] = x[e + (4 * g + 12) >> 2];
    }
  } else {
    f = x.subarray(e >> 2, e + 16 * b >> 2);
  }
  M.uniformMatrix2fv(Y(a), !!c, f);
}, emscripten_glUniformMatrix3fv:function(a, b, c, e) {
  if (32 >= b) {
    for (var f = se[9 * b - 1], g = 0; g < 9 * b; g += 9) {
      f[g] = x[e + 4 * g >> 2], f[g + 1] = x[e + (4 * g + 4) >> 2], f[g + 2] = x[e + (4 * g + 8) >> 2], f[g + 3] = x[e + (4 * g + 12) >> 2], f[g + 4] = x[e + (4 * g + 16) >> 2], f[g + 5] = x[e + (4 * g + 20) >> 2], f[g + 6] = x[e + (4 * g + 24) >> 2], f[g + 7] = x[e + (4 * g + 28) >> 2], f[g + 8] = x[e + (4 * g + 32) >> 2];
    }
  } else {
    f = x.subarray(e >> 2, e + 36 * b >> 2);
  }
  M.uniformMatrix3fv(Y(a), !!c, f);
}, emscripten_glUniformMatrix4fv:function(a, b, c, e) {
  if (18 >= b) {
    var f = se[16 * b - 1], g = x;
    e >>= 2;
    for (var h = 0; h < 16 * b; h += 16) {
      var n = e + h;
      f[h] = g[n];
      f[h + 1] = g[n + 1];
      f[h + 2] = g[n + 2];
      f[h + 3] = g[n + 3];
      f[h + 4] = g[n + 4];
      f[h + 5] = g[n + 5];
      f[h + 6] = g[n + 6];
      f[h + 7] = g[n + 7];
      f[h + 8] = g[n + 8];
      f[h + 9] = g[n + 9];
      f[h + 10] = g[n + 10];
      f[h + 11] = g[n + 11];
      f[h + 12] = g[n + 12];
      f[h + 13] = g[n + 13];
      f[h + 14] = g[n + 14];
      f[h + 15] = g[n + 15];
    }
  } else {
    f = x.subarray(e >> 2, e + 64 * b >> 2);
  }
  M.uniformMatrix4fv(Y(a), !!c, f);
}, emscripten_glUseProgram:function(a) {
  a = P[a];
  M.useProgram(a);
  M.Qa = a;
}, emscripten_glValidateProgram:function(a) {
  M.validateProgram(P[a]);
}, emscripten_glVertexAttrib1f:function(a, b) {
  M.vertexAttrib1f(a, b);
}, emscripten_glVertexAttrib1fv:function(a, b) {
  M.vertexAttrib1f(a, x[b >> 2]);
}, emscripten_glVertexAttrib2f:function(a, b, c) {
  M.vertexAttrib2f(a, b, c);
}, emscripten_glVertexAttrib2fv:function(a, b) {
  M.vertexAttrib2f(a, x[b >> 2], x[b + 4 >> 2]);
}, emscripten_glVertexAttrib3f:function(a, b, c, e) {
  M.vertexAttrib3f(a, b, c, e);
}, emscripten_glVertexAttrib3fv:function(a, b) {
  M.vertexAttrib3f(a, x[b >> 2], x[b + 4 >> 2], x[b + 8 >> 2]);
}, emscripten_glVertexAttrib4f:function(a, b, c, e, f) {
  M.vertexAttrib4f(a, b, c, e, f);
}, emscripten_glVertexAttrib4fv:function(a, b) {
  M.vertexAttrib4f(a, x[b >> 2], x[b + 4 >> 2], x[b + 8 >> 2], x[b + 12 >> 2]);
}, emscripten_glVertexAttribDivisorANGLE:function(a, b) {
  M.vertexAttribDivisor(a, b);
}, emscripten_glVertexAttribPointer:function(a, b, c, e, f, g) {
  M.vertexAttribPointer(a, b, c, !!e, f, g);
}, emscripten_glViewport:function(a, b, c, e) {
  M.viewport(a, b, c, e);
}, emscripten_has_asyncify:function() {
  return 0;
}, emscripten_memcpy_big:function(a, b, c) {
  C.copyWithin(a, b, b + c);
}, emscripten_request_fullscreen_strategy:function(a, b, c) {
  return ue(a, {na:v[c >> 2], ha:v[c + 4 >> 2], Xa:v[c + 8 >> 2], Ta:b, X:v[c + 12 >> 2], sa:v[c + 16 >> 2]});
}, emscripten_request_pointerlock:function(a, b) {
  a = X(a);
  return a ? a.requestPointerLock || a.ea ? xd && Ed.M ? fe(a) : b ? (Bd(fe, 2, [a]), 1) : -2 : -1 : -4;
}, emscripten_resize_heap:function(a) {
  m("Cannot enlarge memory arrays to size " + (a >>> 0) + " bytes (OOM). Either (1) compile with  -s INITIAL_MEMORY=X  with X higher than the current value " + t.length + ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ");
}, emscripten_sample_gamepad_data:function() {
  return (Jd = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : null) ? 0 : -1;
}, emscripten_set_beforeunload_callback_on_thread:function(a, b, c) {
  if ("undefined" === typeof onbeforeunload) {
    return -1;
  }
  if (1 !== c) {
    return -5;
  }
  ve(a, b);
  return 0;
}, emscripten_set_blur_callback_on_thread:function(a, b, c, e) {
  we(a, b, c, e, 12, "blur");
  return 0;
}, emscripten_set_canvas_element_size:$d, emscripten_set_element_css_size:function(a, b, c) {
  a = X(a);
  if (!a) {
    return -4;
  }
  a.style.width = b + "px";
  a.style.height = c + "px";
  return 0;
}, emscripten_set_focus_callback_on_thread:function(a, b, c, e) {
  we(a, b, c, e, 13, "focus");
  return 0;
}, emscripten_set_fullscreenchange_callback_on_thread:function(a, b, c, e) {
  if (!Hd()) {
    return -1;
  }
  a = X(a);
  if (!a) {
    return -4;
  }
  xe(a, b, c, e, "fullscreenchange");
  xe(a, b, c, e, "webkitfullscreenchange");
  return 0;
}, emscripten_set_gamepadconnected_callback_on_thread:function(a, b, c) {
  if (!navigator.getGamepads && !navigator.webkitGetGamepads) {
    return -1;
  }
  ye(a, b, c, 26, "gamepadconnected");
  return 0;
}, emscripten_set_gamepaddisconnected_callback_on_thread:function(a, b, c) {
  if (!navigator.getGamepads && !navigator.webkitGetGamepads) {
    return -1;
  }
  ye(a, b, c, 27, "gamepaddisconnected");
  return 0;
}, emscripten_set_keydown_callback_on_thread:function(a, b, c, e) {
  ze(a, b, c, e, 2, "keydown");
  return 0;
}, emscripten_set_keypress_callback_on_thread:function(a, b, c, e) {
  ze(a, b, c, e, 1, "keypress");
  return 0;
}, emscripten_set_keyup_callback_on_thread:function(a, b, c, e) {
  ze(a, b, c, e, 3, "keyup");
  return 0;
}, emscripten_set_main_loop:function(a, b, c) {
  a = H.get(a);
  tc(a, b, c);
}, emscripten_set_mousedown_callback_on_thread:function(a, b, c, e) {
  Be(a, b, c, e, 5, "mousedown");
  return 0;
}, emscripten_set_mouseenter_callback_on_thread:function(a, b, c, e) {
  Be(a, b, c, e, 33, "mouseenter");
  return 0;
}, emscripten_set_mouseleave_callback_on_thread:function(a, b, c, e) {
  Be(a, b, c, e, 34, "mouseleave");
  return 0;
}, emscripten_set_mousemove_callback_on_thread:function(a, b, c, e) {
  Be(a, b, c, e, 8, "mousemove");
  return 0;
}, emscripten_set_mouseup_callback_on_thread:function(a, b, c, e) {
  Be(a, b, c, e, 6, "mouseup");
  return 0;
}, emscripten_set_pointerlockchange_callback_on_thread:function(a, b, c, e) {
  if (!document || !document.body || !(document.body.requestPointerLock || document.body.xa || document.body.ab || document.body.ea)) {
    return -1;
  }
  a = X(a);
  if (!a) {
    return -4;
  }
  Ce(a, b, c, e, "pointerlockchange");
  Ce(a, b, c, e, "mozpointerlockchange");
  Ce(a, b, c, e, "webkitpointerlockchange");
  Ce(a, b, c, e, "mspointerlockchange");
  return 0;
}, emscripten_set_resize_callback_on_thread:function(a, b, c, e) {
  De(a, b, c, e);
  return 0;
}, emscripten_set_touchcancel_callback_on_thread:function(a, b, c, e) {
  Ee(a, b, c, e, 25, "touchcancel");
  return 0;
}, emscripten_set_touchend_callback_on_thread:function(a, b, c, e) {
  Ee(a, b, c, e, 23, "touchend");
  return 0;
}, emscripten_set_touchmove_callback_on_thread:function(a, b, c, e) {
  Ee(a, b, c, e, 24, "touchmove");
  return 0;
}, emscripten_set_touchstart_callback_on_thread:function(a, b, c, e) {
  Ee(a, b, c, e, 22, "touchstart");
  return 0;
}, emscripten_set_visibilitychange_callback_on_thread:function(a, b, c) {
  Fe(a, b, c);
  return 0;
}, emscripten_set_wheel_callback_on_thread:function(a, b, c, e) {
  a = X(a);
  return "undefined" !== typeof a.onwheel ? (Ge(a, b, c, e), 0) : -1;
}, emscripten_sleep:function() {
  throw "Please compile your program with async support in order to use asynchronous operations like emscripten_sleep";
}, emscripten_thread_sleep:function(a) {
  for (var b = gc(); gc() - b < a;) {
  }
}, environ_get:function(a, b) {
  var c = 0;
  Ie().forEach(function(e, f) {
    var g = b + c;
    f = v[a + 4 * f >> 2] = g;
    for (g = 0; g < e.length; ++g) {
      q(e.charCodeAt(g) === e.charCodeAt(g) & 255), t[f++ >> 0] = e.charCodeAt(g);
    }
    t[f >> 0] = 0;
    c += e.length + 1;
  });
  return 0;
}, environ_sizes_get:function(a, b) {
  var c = Ie();
  v[a >> 2] = c.length;
  var e = 0;
  c.forEach(function(f) {
    e += f.length + 1;
  });
  v[b >> 2] = e;
  return 0;
}, fd_close:function(a) {
  try {
    var b = fc(a);
    if (null === b.u) {
      throw new K(8);
    }
    b.ja && (b.ja = null);
    try {
      b.i.close && b.i.close(b);
    } catch (c) {
      throw c;
    } finally {
      zb[b.u] = null;
    }
    b.u = null;
    return 0;
  } catch (c) {
    return "undefined" !== typeof cc && c instanceof K || m(c), c.K;
  }
}, fd_read:function(a, b, c, e) {
  try {
    a: {
      for (var f = fc(a), g = a = 0; g < c; g++) {
        var h = v[b + (8 * g + 4) >> 2], n = f, p = v[b + 8 * g >> 2], r = h, u = void 0, B = t;
        if (0 > r || 0 > u) {
          throw new K(28);
        }
        if (null === n.u) {
          throw new K(8);
        }
        if (1 === (n.flags & 2097155)) {
          throw new K(8);
        }
        if (16384 === (n.node.mode & 61440)) {
          throw new K(31);
        }
        if (!n.i.read) {
          throw new K(28);
        }
        var G = "undefined" !== typeof u;
        if (!G) {
          u = n.position;
        } else {
          if (!n.seekable) {
            throw new K(70);
          }
        }
        var A = n.i.read(n, B, p, r, u);
        G || (n.position += A);
        var S = A;
        if (0 > S) {
          var T = -1;
          break a;
        }
        a += S;
        if (S < h) {
          break;
        }
      }
      T = a;
    }
    v[e >> 2] = T;
    return 0;
  } catch ($a) {
    return "undefined" !== typeof cc && $a instanceof K || m($a), $a.K;
  }
}, fd_seek:function(a, b, c, e, f) {
  try {
    var g = fc(a);
    a = 4294967296 * c + (b >>> 0);
    if (-9007199254740992 >= a || 9007199254740992 <= a) {
      return -61;
    }
    Xb(g, a, e);
    na = [g.position >>> 0, (w = g.position, 1.0 <= +Math.abs(w) ? 0.0 < w ? (Math.min(+Math.floor(w / 4294967296.0), 4294967295.0) | 0) >>> 0 : ~~+Math.ceil((w - +(~~w >>> 0)) / 4294967296.0) >>> 0 : 0)];
    v[f >> 2] = na[0];
    v[f + 4 >> 2] = na[1];
    g.ja && 0 === a && 0 === e && (g.ja = null);
    return 0;
  } catch (h) {
    return "undefined" !== typeof cc && h instanceof K || m(h), h.K;
  }
}, fd_write:function(a, b, c, e) {
  try {
    a: {
      for (var f = fc(a), g = a = 0; g < c; g++) {
        var h = f, n = v[b + 8 * g >> 2], p = v[b + (8 * g + 4) >> 2], r = void 0, u = t;
        if (0 > p || 0 > r) {
          throw new K(28);
        }
        if (null === h.u) {
          throw new K(8);
        }
        if (0 === (h.flags & 2097155)) {
          throw new K(8);
        }
        if (16384 === (h.node.mode & 61440)) {
          throw new K(31);
        }
        if (!h.i.write) {
          throw new K(28);
        }
        h.seekable && h.flags & 1024 && Xb(h, 0, 2);
        var B = "undefined" !== typeof r;
        if (!B) {
          r = h.position;
        } else {
          if (!h.seekable) {
            throw new K(70);
          }
        }
        var G = h.i.write(h, u, n, p, r, void 0);
        B || (h.position += G);
        try {
          if (h.path && Db.onWriteToFile) {
            Db.onWriteToFile(h.path);
          }
        } catch (T) {
          l("FS.trackingDelegate['onWriteToFile']('" + h.path + "') threw an exception: " + T.message);
        }
        var A = G;
        if (0 > A) {
          var S = -1;
          break a;
        }
        a += A;
      }
      S = a;
    }
    v[e >> 2] = S;
    return 0;
  } catch (T) {
    return "undefined" !== typeof cc && T instanceof K || m(T), T.K;
  }
}, gettimeofday:function(a) {
  var b = Date.now();
  v[a >> 2] = b / 1000 | 0;
  v[a + 4 >> 2] = b % 1000 * 1000 | 0;
  return 0;
}, setTempRet0:function() {
}, sigaction:function(a, b, c) {
  return eb(a, b, c);
}};
(function() {
  function a(g) {
    d.asm = g.exports;
    oa = d.asm.memory;
    q(oa, "memory not found in wasm exports");
    ya = g = oa.buffer;
    d.HEAP8 = t = new Int8Array(g);
    d.HEAP16 = ma = new Int16Array(g);
    d.HEAP32 = v = new Int32Array(g);
    d.HEAPU8 = C = new Uint8Array(g);
    d.HEAPU16 = za = new Uint16Array(g);
    d.HEAPU32 = F = new Uint32Array(g);
    d.HEAPF32 = x = new Float32Array(g);
    d.HEAPF64 = y = new Float64Array(g);
    H = d.asm.__indirect_function_table;
    q(H, "table not found in wasm exports");
    Ha.unshift(d.asm.__wasm_call_ctors);
    Oa--;
    d.monitorRunDependencies && d.monitorRunDependencies(Oa);
    q(Ra["wasm-instantiate"]);
    delete Ra["wasm-instantiate"];
    0 == Oa && (null !== Pa && (clearInterval(Pa), Pa = null), Qa && (g = Qa, Qa = null, g()));
  }
  function b(g) {
    q(d === f, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
    f = null;
    a(g.instance);
  }
  function c(g) {
    return Xa().then(function(h) {
      return WebAssembly.instantiate(h, e);
    }).then(function(h) {
      return h;
    }).then(g, function(h) {
      l("failed to asynchronously prepare wasm: " + h);
      I.startsWith("file://") && l("warning: Loading from a file URI (" + I + ") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing");
      m(h);
    });
  }
  var e = {env:Re, wasi_snapshot_preview1:Re, };
  Sa();
  var f = d;
  if (d.instantiateWasm) {
    try {
      return d.instantiateWasm(e, a);
    } catch (g) {
      return l("Module.instantiateWasm callback failed with error: " + g), !1;
    }
  }
  (function() {
    return ka || "function" !== typeof WebAssembly.instantiateStreaming || Ua() || "function" !== typeof fetch ? c(b) : fetch(I, {credentials:"same-origin"}).then(function(g) {
      return WebAssembly.instantiateStreaming(g, e).then(b, function(h) {
        l("wasm streaming compile failed: " + h);
        l("falling back to ArrayBuffer instantiation");
        return c(b);
      });
    });
  })();
  return {};
})();
d.___wasm_call_ctors = J("__wasm_call_ctors");
d._main = J("main");
d._free = J("free");
d._memcpy = J("memcpy");
var E = d._malloc = J("malloc"), Qe = d.___errno_location = J("__errno_location");
d._fflush = J("fflush");
var Ca = d._emscripten_stack_get_end = function() {
  return (Ca = d._emscripten_stack_get_end = d.asm.emscripten_stack_get_end).apply(null, arguments);
}, Yd = d.stackSave = J("stackSave"), Zd = d.stackRestore = J("stackRestore"), xa = d.stackAlloc = J("stackAlloc"), Se = d._emscripten_stack_init = function() {
  return (Se = d._emscripten_stack_init = d.asm.emscripten_stack_init).apply(null, arguments);
};
d._emscripten_stack_get_free = function() {
  return (d._emscripten_stack_get_free = d.asm.emscripten_stack_get_free).apply(null, arguments);
};
d.dynCall_jiji = J("dynCall_jiji");
d.dynCall_ji = J("dynCall_ji");
Object.getOwnPropertyDescriptor(d, "intArrayFromString") || (d.intArrayFromString = function() {
  m("'intArrayFromString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "intArrayToString") || (d.intArrayToString = function() {
  m("'intArrayToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "ccall") || (d.ccall = function() {
  m("'ccall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "cwrap") || (d.cwrap = function() {
  m("'cwrap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "setValue") || (d.setValue = function() {
  m("'setValue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "getValue") || (d.getValue = function() {
  m("'getValue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "allocate") || (d.allocate = function() {
  m("'allocate' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "UTF8ArrayToString") || (d.UTF8ArrayToString = function() {
  m("'UTF8ArrayToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "UTF8ToString") || (d.UTF8ToString = function() {
  m("'UTF8ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "stringToUTF8Array") || (d.stringToUTF8Array = function() {
  m("'stringToUTF8Array' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "stringToUTF8") || (d.stringToUTF8 = function() {
  m("'stringToUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "lengthBytesUTF8") || (d.lengthBytesUTF8 = function() {
  m("'lengthBytesUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "stackTrace") || (d.stackTrace = function() {
  m("'stackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "addOnPreRun") || (d.addOnPreRun = function() {
  m("'addOnPreRun' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "addOnInit") || (d.addOnInit = function() {
  m("'addOnInit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "addOnPreMain") || (d.addOnPreMain = function() {
  m("'addOnPreMain' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "addOnExit") || (d.addOnExit = function() {
  m("'addOnExit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "addOnPostRun") || (d.addOnPostRun = function() {
  m("'addOnPostRun' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "writeStringToMemory") || (d.writeStringToMemory = function() {
  m("'writeStringToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "writeArrayToMemory") || (d.writeArrayToMemory = function() {
  m("'writeArrayToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "writeAsciiToMemory") || (d.writeAsciiToMemory = function() {
  m("'writeAsciiToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "addRunDependency") || (d.addRunDependency = function() {
  m("'addRunDependency' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(d, "removeRunDependency") || (d.removeRunDependency = function() {
  m("'removeRunDependency' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(d, "FS_createFolder") || (d.FS_createFolder = function() {
  m("'FS_createFolder' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "FS_createPath") || (d.FS_createPath = function() {
  m("'FS_createPath' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(d, "FS_createDataFile") || (d.FS_createDataFile = function() {
  m("'FS_createDataFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(d, "FS_createPreloadedFile") || (d.FS_createPreloadedFile = function() {
  m("'FS_createPreloadedFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(d, "FS_createLazyFile") || (d.FS_createLazyFile = function() {
  m("'FS_createLazyFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(d, "FS_createLink") || (d.FS_createLink = function() {
  m("'FS_createLink' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "FS_createDevice") || (d.FS_createDevice = function() {
  m("'FS_createDevice' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(d, "FS_unlink") || (d.FS_unlink = function() {
  m("'FS_unlink' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(d, "getLEB") || (d.getLEB = function() {
  m("'getLEB' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "getFunctionTables") || (d.getFunctionTables = function() {
  m("'getFunctionTables' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "alignFunctionTables") || (d.alignFunctionTables = function() {
  m("'alignFunctionTables' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "registerFunctions") || (d.registerFunctions = function() {
  m("'registerFunctions' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "addFunction") || (d.addFunction = function() {
  m("'addFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "removeFunction") || (d.removeFunction = function() {
  m("'removeFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "getFuncWrapper") || (d.getFuncWrapper = function() {
  m("'getFuncWrapper' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "prettyPrint") || (d.prettyPrint = function() {
  m("'prettyPrint' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "dynCall") || (d.dynCall = function() {
  m("'dynCall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "getCompilerSetting") || (d.getCompilerSetting = function() {
  m("'getCompilerSetting' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "print") || (d.print = function() {
  m("'print' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "printErr") || (d.printErr = function() {
  m("'printErr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "getTempRet0") || (d.getTempRet0 = function() {
  m("'getTempRet0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "setTempRet0") || (d.setTempRet0 = function() {
  m("'setTempRet0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "callMain") || (d.callMain = function() {
  m("'callMain' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "abort") || (d.abort = function() {
  m("'abort' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "keepRuntimeAlive") || (d.keepRuntimeAlive = function() {
  m("'keepRuntimeAlive' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "zeroMemory") || (d.zeroMemory = function() {
  m("'zeroMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "stringToNewUTF8") || (d.stringToNewUTF8 = function() {
  m("'stringToNewUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "setFileTime") || (d.setFileTime = function() {
  m("'setFileTime' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "abortOnCannotGrowMemory") || (d.abortOnCannotGrowMemory = function() {
  m("'abortOnCannotGrowMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "emscripten_realloc_buffer") || (d.emscripten_realloc_buffer = function() {
  m("'emscripten_realloc_buffer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "ENV") || (d.ENV = function() {
  m("'ENV' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "ERRNO_CODES") || (d.ERRNO_CODES = function() {
  m("'ERRNO_CODES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "ERRNO_MESSAGES") || (d.ERRNO_MESSAGES = function() {
  m("'ERRNO_MESSAGES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "setErrNo") || (d.setErrNo = function() {
  m("'setErrNo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "inetPton4") || (d.inetPton4 = function() {
  m("'inetPton4' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "inetNtop4") || (d.inetNtop4 = function() {
  m("'inetNtop4' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "inetPton6") || (d.inetPton6 = function() {
  m("'inetPton6' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "inetNtop6") || (d.inetNtop6 = function() {
  m("'inetNtop6' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "readSockaddr") || (d.readSockaddr = function() {
  m("'readSockaddr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "writeSockaddr") || (d.writeSockaddr = function() {
  m("'writeSockaddr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "DNS") || (d.DNS = function() {
  m("'DNS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "getHostByName") || (d.getHostByName = function() {
  m("'getHostByName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "GAI_ERRNO_MESSAGES") || (d.GAI_ERRNO_MESSAGES = function() {
  m("'GAI_ERRNO_MESSAGES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "Protocols") || (d.Protocols = function() {
  m("'Protocols' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "Sockets") || (d.Sockets = function() {
  m("'Sockets' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "getRandomDevice") || (d.getRandomDevice = function() {
  m("'getRandomDevice' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "traverseStack") || (d.traverseStack = function() {
  m("'traverseStack' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "UNWIND_CACHE") || (d.UNWIND_CACHE = function() {
  m("'UNWIND_CACHE' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "withBuiltinMalloc") || (d.withBuiltinMalloc = function() {
  m("'withBuiltinMalloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "readAsmConstArgsArray") || (d.readAsmConstArgsArray = function() {
  m("'readAsmConstArgsArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "readAsmConstArgs") || (d.readAsmConstArgs = function() {
  m("'readAsmConstArgs' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "mainThreadEM_ASM") || (d.mainThreadEM_ASM = function() {
  m("'mainThreadEM_ASM' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "jstoi_q") || (d.jstoi_q = function() {
  m("'jstoi_q' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "jstoi_s") || (d.jstoi_s = function() {
  m("'jstoi_s' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "getExecutableName") || (d.getExecutableName = function() {
  m("'getExecutableName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "listenOnce") || (d.listenOnce = function() {
  m("'listenOnce' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "autoResumeAudioContext") || (d.autoResumeAudioContext = function() {
  m("'autoResumeAudioContext' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "dynCallLegacy") || (d.dynCallLegacy = function() {
  m("'dynCallLegacy' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "getDynCaller") || (d.getDynCaller = function() {
  m("'getDynCaller' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "dynCall") || (d.dynCall = function() {
  m("'dynCall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "callRuntimeCallbacks") || (d.callRuntimeCallbacks = function() {
  m("'callRuntimeCallbacks' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "handleException") || (d.handleException = function() {
  m("'handleException' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "runtimeKeepalivePush") || (d.runtimeKeepalivePush = function() {
  m("'runtimeKeepalivePush' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "runtimeKeepalivePop") || (d.runtimeKeepalivePop = function() {
  m("'runtimeKeepalivePop' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "callUserCallback") || (d.callUserCallback = function() {
  m("'callUserCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "maybeExit") || (d.maybeExit = function() {
  m("'maybeExit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "safeSetTimeout") || (d.safeSetTimeout = function() {
  m("'safeSetTimeout' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "asmjsMangle") || (d.asmjsMangle = function() {
  m("'asmjsMangle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "asyncLoad") || (d.asyncLoad = function() {
  m("'asyncLoad' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "alignMemory") || (d.alignMemory = function() {
  m("'alignMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "mmapAlloc") || (d.mmapAlloc = function() {
  m("'mmapAlloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "reallyNegative") || (d.reallyNegative = function() {
  m("'reallyNegative' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "unSign") || (d.unSign = function() {
  m("'unSign' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "reSign") || (d.reSign = function() {
  m("'reSign' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "formatString") || (d.formatString = function() {
  m("'formatString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "PATH") || (d.PATH = function() {
  m("'PATH' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "PATH_FS") || (d.PATH_FS = function() {
  m("'PATH_FS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "SYSCALLS") || (d.SYSCALLS = function() {
  m("'SYSCALLS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "syscallMmap2") || (d.syscallMmap2 = function() {
  m("'syscallMmap2' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "syscallMunmap") || (d.syscallMunmap = function() {
  m("'syscallMunmap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "getSocketFromFD") || (d.getSocketFromFD = function() {
  m("'getSocketFromFD' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "getSocketAddress") || (d.getSocketAddress = function() {
  m("'getSocketAddress' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "JSEvents") || (d.JSEvents = function() {
  m("'JSEvents' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "registerKeyEventCallback") || (d.registerKeyEventCallback = function() {
  m("'registerKeyEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "specialHTMLTargets") || (d.specialHTMLTargets = function() {
  m("'specialHTMLTargets' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "maybeCStringToJsString") || (d.maybeCStringToJsString = function() {
  m("'maybeCStringToJsString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "findEventTarget") || (d.findEventTarget = function() {
  m("'findEventTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "findCanvasEventTarget") || (d.findCanvasEventTarget = function() {
  m("'findCanvasEventTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "getBoundingClientRect") || (d.getBoundingClientRect = function() {
  m("'getBoundingClientRect' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "fillMouseEventData") || (d.fillMouseEventData = function() {
  m("'fillMouseEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "registerMouseEventCallback") || (d.registerMouseEventCallback = function() {
  m("'registerMouseEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "registerWheelEventCallback") || (d.registerWheelEventCallback = function() {
  m("'registerWheelEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "registerUiEventCallback") || (d.registerUiEventCallback = function() {
  m("'registerUiEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "registerFocusEventCallback") || (d.registerFocusEventCallback = function() {
  m("'registerFocusEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "fillDeviceOrientationEventData") || (d.fillDeviceOrientationEventData = function() {
  m("'fillDeviceOrientationEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "registerDeviceOrientationEventCallback") || (d.registerDeviceOrientationEventCallback = function() {
  m("'registerDeviceOrientationEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "fillDeviceMotionEventData") || (d.fillDeviceMotionEventData = function() {
  m("'fillDeviceMotionEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "registerDeviceMotionEventCallback") || (d.registerDeviceMotionEventCallback = function() {
  m("'registerDeviceMotionEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "screenOrientation") || (d.screenOrientation = function() {
  m("'screenOrientation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "fillOrientationChangeEventData") || (d.fillOrientationChangeEventData = function() {
  m("'fillOrientationChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "registerOrientationChangeEventCallback") || (d.registerOrientationChangeEventCallback = function() {
  m("'registerOrientationChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "fillFullscreenChangeEventData") || (d.fillFullscreenChangeEventData = function() {
  m("'fillFullscreenChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "registerFullscreenChangeEventCallback") || (d.registerFullscreenChangeEventCallback = function() {
  m("'registerFullscreenChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "registerRestoreOldStyle") || (d.registerRestoreOldStyle = function() {
  m("'registerRestoreOldStyle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "hideEverythingExceptGivenElement") || (d.hideEverythingExceptGivenElement = function() {
  m("'hideEverythingExceptGivenElement' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "restoreHiddenElements") || (d.restoreHiddenElements = function() {
  m("'restoreHiddenElements' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "setLetterbox") || (d.setLetterbox = function() {
  m("'setLetterbox' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "currentFullscreenStrategy") || (d.currentFullscreenStrategy = function() {
  m("'currentFullscreenStrategy' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "restoreOldWindowedStyle") || (d.restoreOldWindowedStyle = function() {
  m("'restoreOldWindowedStyle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "softFullscreenResizeWebGLRenderTarget") || (d.softFullscreenResizeWebGLRenderTarget = function() {
  m("'softFullscreenResizeWebGLRenderTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "doRequestFullscreen") || (d.doRequestFullscreen = function() {
  m("'doRequestFullscreen' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "fillPointerlockChangeEventData") || (d.fillPointerlockChangeEventData = function() {
  m("'fillPointerlockChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "registerPointerlockChangeEventCallback") || (d.registerPointerlockChangeEventCallback = function() {
  m("'registerPointerlockChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "registerPointerlockErrorEventCallback") || (d.registerPointerlockErrorEventCallback = function() {
  m("'registerPointerlockErrorEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "requestPointerLock") || (d.requestPointerLock = function() {
  m("'requestPointerLock' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "fillVisibilityChangeEventData") || (d.fillVisibilityChangeEventData = function() {
  m("'fillVisibilityChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "registerVisibilityChangeEventCallback") || (d.registerVisibilityChangeEventCallback = function() {
  m("'registerVisibilityChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "registerTouchEventCallback") || (d.registerTouchEventCallback = function() {
  m("'registerTouchEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "fillGamepadEventData") || (d.fillGamepadEventData = function() {
  m("'fillGamepadEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "registerGamepadEventCallback") || (d.registerGamepadEventCallback = function() {
  m("'registerGamepadEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "registerBeforeUnloadEventCallback") || (d.registerBeforeUnloadEventCallback = function() {
  m("'registerBeforeUnloadEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "fillBatteryEventData") || (d.fillBatteryEventData = function() {
  m("'fillBatteryEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "battery") || (d.battery = function() {
  m("'battery' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "registerBatteryEventCallback") || (d.registerBatteryEventCallback = function() {
  m("'registerBatteryEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "setCanvasElementSize") || (d.setCanvasElementSize = function() {
  m("'setCanvasElementSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "getCanvasElementSize") || (d.getCanvasElementSize = function() {
  m("'getCanvasElementSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "polyfillSetImmediate") || (d.polyfillSetImmediate = function() {
  m("'polyfillSetImmediate' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "demangle") || (d.demangle = function() {
  m("'demangle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "demangleAll") || (d.demangleAll = function() {
  m("'demangleAll' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "jsStackTrace") || (d.jsStackTrace = function() {
  m("'jsStackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "stackTrace") || (d.stackTrace = function() {
  m("'stackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "getEnvStrings") || (d.getEnvStrings = function() {
  m("'getEnvStrings' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "checkWasiClock") || (d.checkWasiClock = function() {
  m("'checkWasiClock' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "writeI53ToI64") || (d.writeI53ToI64 = function() {
  m("'writeI53ToI64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "writeI53ToI64Clamped") || (d.writeI53ToI64Clamped = function() {
  m("'writeI53ToI64Clamped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "writeI53ToI64Signaling") || (d.writeI53ToI64Signaling = function() {
  m("'writeI53ToI64Signaling' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "writeI53ToU64Clamped") || (d.writeI53ToU64Clamped = function() {
  m("'writeI53ToU64Clamped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "writeI53ToU64Signaling") || (d.writeI53ToU64Signaling = function() {
  m("'writeI53ToU64Signaling' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "readI53FromI64") || (d.readI53FromI64 = function() {
  m("'readI53FromI64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "readI53FromU64") || (d.readI53FromU64 = function() {
  m("'readI53FromU64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "convertI32PairToI53") || (d.convertI32PairToI53 = function() {
  m("'convertI32PairToI53' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "convertU32PairToI53") || (d.convertU32PairToI53 = function() {
  m("'convertU32PairToI53' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "uncaughtExceptionCount") || (d.uncaughtExceptionCount = function() {
  m("'uncaughtExceptionCount' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "exceptionLast") || (d.exceptionLast = function() {
  m("'exceptionLast' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "exceptionCaught") || (d.exceptionCaught = function() {
  m("'exceptionCaught' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "ExceptionInfo") || (d.ExceptionInfo = function() {
  m("'ExceptionInfo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "CatchInfo") || (d.CatchInfo = function() {
  m("'CatchInfo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "exception_addRef") || (d.exception_addRef = function() {
  m("'exception_addRef' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "exception_decRef") || (d.exception_decRef = function() {
  m("'exception_decRef' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "Browser") || (d.Browser = function() {
  m("'Browser' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "funcWrappers") || (d.funcWrappers = function() {
  m("'funcWrappers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "getFuncWrapper") || (d.getFuncWrapper = function() {
  m("'getFuncWrapper' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "setMainLoop") || (d.setMainLoop = function() {
  m("'setMainLoop' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "wget") || (d.wget = function() {
  m("'wget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "FS") || (d.FS = function() {
  m("'FS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "MEMFS") || (d.MEMFS = function() {
  m("'MEMFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "TTY") || (d.TTY = function() {
  m("'TTY' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "PIPEFS") || (d.PIPEFS = function() {
  m("'PIPEFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "SOCKFS") || (d.SOCKFS = function() {
  m("'SOCKFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "_setNetworkCallback") || (d._setNetworkCallback = function() {
  m("'_setNetworkCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "tempFixedLengthArray") || (d.tempFixedLengthArray = function() {
  m("'tempFixedLengthArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "miniTempWebGLFloatBuffers") || (d.miniTempWebGLFloatBuffers = function() {
  m("'miniTempWebGLFloatBuffers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "heapObjectForWebGLType") || (d.heapObjectForWebGLType = function() {
  m("'heapObjectForWebGLType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "heapAccessShiftForWebGLHeap") || (d.heapAccessShiftForWebGLHeap = function() {
  m("'heapAccessShiftForWebGLHeap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "GL") || (d.GL = function() {
  m("'GL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "emscriptenWebGLGet") || (d.emscriptenWebGLGet = function() {
  m("'emscriptenWebGLGet' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "computeUnpackAlignedImageSize") || (d.computeUnpackAlignedImageSize = function() {
  m("'computeUnpackAlignedImageSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "emscriptenWebGLGetTexPixelData") || (d.emscriptenWebGLGetTexPixelData = function() {
  m("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "emscriptenWebGLGetUniform") || (d.emscriptenWebGLGetUniform = function() {
  m("'emscriptenWebGLGetUniform' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "webglGetUniformLocation") || (d.webglGetUniformLocation = function() {
  m("'webglGetUniformLocation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "webglPrepareUniformLocationsBeforeFirstUse") || (d.webglPrepareUniformLocationsBeforeFirstUse = function() {
  m("'webglPrepareUniformLocationsBeforeFirstUse' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "webglGetLeftBracePos") || (d.webglGetLeftBracePos = function() {
  m("'webglGetLeftBracePos' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "emscriptenWebGLGetVertexAttrib") || (d.emscriptenWebGLGetVertexAttrib = function() {
  m("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "writeGLArray") || (d.writeGLArray = function() {
  m("'writeGLArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "AL") || (d.AL = function() {
  m("'AL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "SDL_unicode") || (d.SDL_unicode = function() {
  m("'SDL_unicode' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "SDL_ttfContext") || (d.SDL_ttfContext = function() {
  m("'SDL_ttfContext' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "SDL_audio") || (d.SDL_audio = function() {
  m("'SDL_audio' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "SDL") || (d.SDL = function() {
  m("'SDL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "SDL_gfx") || (d.SDL_gfx = function() {
  m("'SDL_gfx' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "GLUT") || (d.GLUT = function() {
  m("'GLUT' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "EGL") || (d.EGL = function() {
  m("'EGL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "GLFW_Window") || (d.GLFW_Window = function() {
  m("'GLFW_Window' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "GLFW") || (d.GLFW = function() {
  m("'GLFW' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "GLEW") || (d.GLEW = function() {
  m("'GLEW' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "IDBStore") || (d.IDBStore = function() {
  m("'IDBStore' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "runAndAbortIfError") || (d.runAndAbortIfError = function() {
  m("'runAndAbortIfError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "warnOnce") || (d.warnOnce = function() {
  m("'warnOnce' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "stackSave") || (d.stackSave = function() {
  m("'stackSave' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "stackRestore") || (d.stackRestore = function() {
  m("'stackRestore' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "stackAlloc") || (d.stackAlloc = function() {
  m("'stackAlloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "AsciiToString") || (d.AsciiToString = function() {
  m("'AsciiToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "stringToAscii") || (d.stringToAscii = function() {
  m("'stringToAscii' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "UTF16ToString") || (d.UTF16ToString = function() {
  m("'UTF16ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "stringToUTF16") || (d.stringToUTF16 = function() {
  m("'stringToUTF16' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "lengthBytesUTF16") || (d.lengthBytesUTF16 = function() {
  m("'lengthBytesUTF16' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "UTF32ToString") || (d.UTF32ToString = function() {
  m("'UTF32ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "stringToUTF32") || (d.stringToUTF32 = function() {
  m("'stringToUTF32' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "lengthBytesUTF32") || (d.lengthBytesUTF32 = function() {
  m("'lengthBytesUTF32' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "allocateUTF8") || (d.allocateUTF8 = function() {
  m("'allocateUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(d, "allocateUTF8OnStack") || (d.allocateUTF8OnStack = function() {
  m("'allocateUTF8OnStack' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
d.writeStackCookie = Ba;
d.checkStackCookie = Da;
Object.getOwnPropertyDescriptor(d, "ALLOC_NORMAL") || Object.defineProperty(d, "ALLOC_NORMAL", {configurable:!0, get:function() {
  m("'ALLOC_NORMAL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
}});
Object.getOwnPropertyDescriptor(d, "ALLOC_STACK") || Object.defineProperty(d, "ALLOC_STACK", {configurable:!0, get:function() {
  m("'ALLOC_STACK' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
}});
var Te;
function sc(a) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + a + ")";
  this.status = a;
}
Qa = function Ue() {
  Te || Ve();
  Te || (Qa = Ue);
};
function Ve(a) {
  function b() {
    if (!Te && (Te = !0, d.calledRun = !0, !pa)) {
      Da();
      q(!La);
      La = !0;
      if (!d.noFSInit && !Zb) {
        q(!Zb, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
        Zb = !0;
        Yb();
        d.stdin = d.stdin;
        d.stdout = d.stdout;
        d.stderr = d.stderr;
        d.stdin ? ac("stdin", d.stdin) : Ub("/dev/tty", "/dev/stdin");
        d.stdout ? ac("stdout", null, d.stdout) : Ub("/dev/tty", "/dev/stdout");
        d.stderr ? ac("stderr", null, d.stderr) : Ub("/dev/tty1", "/dev/stderr");
        var c = Vb("/dev/stdin", 0), e = Vb("/dev/stdout", 1), f = Vb("/dev/stderr", 1);
        q(0 === c.u, "invalid handle for stdin (" + c.u + ")");
        q(1 === e.u, "invalid handle for stdout (" + e.u + ")");
        q(2 === f.u, "invalid handle for stderr (" + f.u + ")");
      }
      Cb = !1;
      db(Ha);
      Da();
      db(Ia);
      if (d.onRuntimeInitialized) {
        d.onRuntimeInitialized();
      }
      if (We) {
        c = a;
        q(0 == Oa, 'cannot call main when async dependencies remain! (listen on Module["onRuntimeInitialized"])');
        q(0 == Ga.length, "cannot call main when preRun functions remain to be called");
        e = d._main;
        c = c || [];
        f = c.length + 1;
        var g = xa(4 * (f + 1));
        v[g >> 2] = wa(da);
        for (var h = 1; h < f; h++) {
          v[(g >> 2) + h] = wa(c[h - 1]);
        }
        v[(g >> 2) + f] = 0;
        try {
          var n = e(f, g);
          vc(n, !0);
        } catch (p) {
          p instanceof sc || "unwind" == p || ((n = p) && "object" === typeof p && p.stack && (n = [p, p.stack]), l("exception thrown: " + n), ea(1, p));
        } finally {
        }
      }
      Da();
      if (d.postRun) {
        for ("function" == typeof d.postRun && (d.postRun = [d.postRun]); d.postRun.length;) {
          n = d.postRun.shift(), Ka.unshift(n);
        }
      }
      db(Ka);
    }
  }
  a = a || ca;
  if (!(0 < Oa)) {
    Se();
    Ba();
    if (d.preRun) {
      for ("function" == typeof d.preRun && (d.preRun = [d.preRun]); d.preRun.length;) {
        Na();
      }
    }
    db(Ga);
    0 < Oa || (d.setStatus ? (d.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        d.setStatus("");
      }, 1);
      b();
    }, 1)) : b(), Da());
  }
}
d.run = Ve;
function Xe() {
  var a = k, b = l, c = !1;
  k = l = function() {
    c = !0;
  };
  try {
    var e = d._fflush;
    e && e(0);
    ["stdout", "stderr"].forEach(function(f) {
      f = "/dev/" + f;
      try {
        var g = Eb(f, {Y:!0});
        f = g.path;
      } catch (n) {
      }
      var h = {fb:!1, Wa:!1, error:0, name:null, path:null, object:null, ib:!1, kb:null, jb:null};
      try {
        g = Eb(f, {parent:!0}), h.ib = !0, h.kb = g.path, h.jb = g.node, h.name = ib(f), g = Eb(f, {Y:!0}), h.Wa = !0, h.path = g.path, h.object = g.node, h.name = g.node.name, h.fb = "/" === g.path;
      } catch (n) {
        h.error = n.K;
      }
      h && (g = lb[h.object.S]) && g.o && g.o.length && (c = !0);
    });
  } catch (f) {
  }
  k = a;
  l = b;
  c && ia("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.");
}
function vc(a, b) {
  qa = a;
  Xe();
  noExitRuntime ? b || l("program exited (with status: " + a + "), but EXIT_RUNTIME is not set, so halting execution but not exiting the runtime or preventing further async execution (build with EXIT_RUNTIME=1, if you want a true shutdown)") : (Da(), Ma = !0);
  qa = a;
  if (!noExitRuntime) {
    if (d.onExit) {
      d.onExit(a);
    }
    pa = !0;
  }
  ea(a, new sc(a));
}
if (d.preInit) {
  for ("function" == typeof d.preInit && (d.preInit = [d.preInit]); 0 < d.preInit.length;) {
    d.preInit.pop()();
  }
}
var We = !0;
d.noInitialRun && (We = !1);
Ve();

