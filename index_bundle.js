/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/p5/lib/p5.min.js":
/*!***************************************!*\
  !*** ./node_modules/p5/lib/p5.min.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*! p5.js v1.11.0 September 25, 2024 */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! p5 */ "./node_modules/p5/lib/p5.min.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_0__);


let sketch = p => {
  p.timepoIncio = 0;
  p.timepoEspere = 400;
  p.data;
  p.pre_timestamp;
  p.maxminTMP;
  p.maxminLGHT;
  p.maxminHMD;
  p.r = 280;
  p.cCle1, p.cCle2;
  p.img;
  p.txtClr = 0;
  p.dt = {};
  p.i = 0;
  p.keys;
  p.preload = () => {
    p.data = p.loadJSON("./json/cividata-gozoHouse-export.json");
  };
  p.setup = () => {
    p.keys = Object.keys(p.data);
    console.log(p.keys.length);
    p.pre_timestamp = p.dataCall(0).timestamp - 1000;
    p.maxminTMP = p.maxMin(["temperature"]);
    p.maxminLGHT = p.maxMin(["lightS"]);
    p.maxminHMD = p.maxMin(["humidity"]);
    p.maxminDST = p.maxMin(["fnDust", "dgrfnDust"]);
    console.log("maxminTMP:", p.maxminTMP);
    console.log("maxminLGHT:", p.maxminLGHT);
    console.log("maxminDST:", p.maxminDST);
  };
  p.dataCall = n => {
    let key = p.keys[n];
    let unitDT = {
      deviceid: p.data[key].deviceid,
      dgrfnDust: p.data[key].dgrfnDust,
      fnDust: p.data[key].fnDust,
      humidity: p.data[key].humidity,
      latitude: p.data[key].latitude,
      lgDust: p.data[key].lgDust,
      lightS: p.data[key].lightS,
      longitude: p.data[key].longitude,
      mddDust: p.data[key].mddDust,
      rainDrop: p.data[key].rainDrop,
      smDust: p.data[key].smDust,
      temperature: p.data[key].temperature,
      timestamp: p.data[key].timestamp,
      winddrtV: p.data[key].winddrtV,
      windspeed: p.data[key].windspeed
    };
    return unitDT;
  };
  p.tempToColor = clr => {
    let cs;
    if (clr <= 255) {
      cs = [255, clr, 0];
    } else if (255 < clr & clr <= 510) {
      cs = [255 - p.abs(255 - clr), 255, 0];
    } else if (510 < clr & clr <= 765) {
      cs = [0, 255, p.abs(clr - 510)];
    } else if (765 < clr & clr <= 1020) {
      cs = [0, 255 - p.abs(clr - 1020), 255];
    } else if (1020 < clr & clr <= 1275) {
      cs = [p.abs(clr - 1020), 0, 255];
    } else {
      cs = [255, 0, p.abs(1275 - clr)];
    }
    return cs;
  };
  p.windSpeedMapping = s => {
    var speedMap = p.map(s, 0.02, 2.0, 1.0, 4.0);
    return speedMap;
  };
  p.windAngle = windDrc => {
    var direct = [0, 0.0625, 0.1875, 0.3125, 0.4375, 0.5625, 0.6875, 0.8125, 0.9375, 1.0625, 1.1875, 1.3125, 1.4375, 1.5625, 1.6875, 1.8125, 1.9375];
    //"N"은 안되고  'N'은 된다.
    var degree = ['N', 'NEN', 'NE', 'EEN', 'E', 'EES', 'SE', 'SES', 'S', 'SWS', 'SW', 'WWS', 'W', 'WWN', 'NW', 'NWN'];
    var fwD = p.float(windDrc);
    if (fwD >= 1.937) {
      fwD = fwD - 1.937;
    }
    for (var i = 0; i < 16; i++) {
      if (direct[i] <= fwD && fwD < direct[i + 1]) {
        //start
        var angle = degree[i];
        return angle;
      }
    }
  };
  p.windMovementAngle = windAng => {
    var dgrAngle = {
      N: [0, 1],
      NEN: [-0.5, 1],
      NE: [-1, 1],
      EEN: [-1, -0.5],
      E: [-1, 0],
      EES: [-1, 0.5],
      SE: [-1, -1],
      SES: [-0.5, -1],
      S: [0, -1],
      SWS: [0.5, -1],
      SW: [1, -1],
      WWS: [1, -0.5],
      W: [1, 0],
      WWN: [1, 0.5],
      NW: [1, 1],
      NWN: [0.5, 1]
    };
    var degreeVector = dgrAngle[windAng];
    return degreeVector;
  };
  p.maxMin = attr => {
    var min = 100000;
    var max = 0;
    p.keys.forEach(k => {
      var e = p.data[k];
      var sum = 0;
      for (var n = 0; n < attr.length; n++) {
        sum += e[attr[n]];
      }
      if (min > sum) min = sum;
      if (max < sum) max = sum;
    });
    return [min, max];
  };
  p.draw = () => {
    if (p.millis() - p.timepoIncio > p.timepoEspere) {
      p.dt = p.dataCall(p.i);
      let tmp = p.map(p.dt.temperature, p.maxminTMP[1], p.maxminTMP[0], 0, 1530);
      p.dt.color = p.tempToColor(tmp);
      p.dt.MapHMD = p.int(p.map(p.dt.humidity, p.maxminHMD[0], p.maxminHMD[1], 1, 10));
      p.dt.MapLGHT = p.map(p.dt.lightS, p.maxminLGHT[1], p.maxminLGHT[0], 0.6, 1.4);
      p.dt.MapDST = p.map(p.dt.fnDust + p.dt.dgrfnDust, p.maxminDST[0], p.maxminDST[1], 4.0, 12.0); //"fnDust","dgrfnDust"
      p.dt.windDirection = p.windMovementAngle(p.windAngle(p.dt.winddrtV));

      // console.log(p.dt.MapLGHT);
      // console.log(p.dt.windDirection[0]);
      // p.info(p.cCle1,dt);  
      //--------------------wind

      //--------------------------
    }
    p.i++;
    if (p.i >= p.keys.length) {
      p.i = 0;
      console.log("finish!!");
    }
    ;
    if (p.timepoEspere >= 10000) {
      p.timepoEspere = 10000;
    }
    p.timepoEspere = (p.dt.timestamp - p.pre_timestamp) * 100;
    p.timepoIncio = p.millis();
    p.pre_timestamp = p.dt.timestamp;
  };
};
const p5 = new p5__WEBPACK_IMPORTED_MODULE_0__(sketch);
var data;
var d;
var opacities;
var canvas = document.getElementById('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;
var ctx = canvas.getContext('2d');
var circleColor = [255, 2, 20];
var circleSize = 200;
var backgroundColor = [250, 250, 250];
var lightS = 1;
var humidity = 5;
var dusts = 4;
var universX = innerWidth / 2;
var universY = innerHeight / 2;
var timeSTM = ' ';
var textDisplay = false;
var smokemachine = function (context, color) {
  //  
  color = color || [255, 2, 20];
  var polyfillAnimFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  var lastframe;
  var currentparticles = [];
  var pendingparticles = [];
  var buffer = document.createElement('canvas'),
    bctx = buffer.getContext('2d');
  buffer.width = 20;
  buffer.height = 20;
  opacities = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 5, 5, 7, 4, 4, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 17, 27, 41, 52, 56, 34, 23, 15, 11, 4, 9, 5, 1, 0, 0, 0, 0, 0, 0, 1, 45, 63, 57, 45, 78, 66, 52, 41, 34, 37, 23, 20, 0, 1, 0, 0, 0, 0, 1, 43, 62, 66, 64, 67, 115, 112, 114, 56, 58, 47, 33, 18, 12, 10, 0, 0, 0, 0, 39, 50, 63, 76, 87, 107, 105, 112, 128, 104, 69, 64, 29, 18, 21, 15, 0, 0, 0, 7, 42, 52, 85, 91, 103, 126, 153, 128, 124, 82, 57, 52, 52, 24, 1, 0, 0, 0, 2, 17, 41, 67, 84, 100, 122, 136, 159, 127, 78, 69, 60, 50, 47, 25, 7, 1, 0, 0, 0, 34, 33, 66, 82, 113, 138, 149, 168, 175, 82, 142, 133, 70, 62, 41, 25, 6, 0, 0, 0, 18, 39, 55, 113, 111, 137, 141, 139, 141, 128, 102, 130, 90, 96, 65, 37, 0, 0, 0, 2, 15, 27, 71, 104, 129, 129, 158, 140, 154, 146, 150, 131, 92, 100, 67, 26, 3, 0, 0, 0, 0, 46, 73, 104, 124, 145, 135, 122, 107, 120, 122, 101, 98, 96, 35, 38, 7, 2, 0, 0, 0, 50, 58, 91, 124, 127, 139, 118, 121, 177, 156, 88, 90, 88, 28, 43, 3, 0, 0, 0, 0, 30, 62, 68, 91, 83, 117, 89, 139, 139, 99, 105, 77, 32, 1, 1, 0, 0, 0, 0, 0, 16, 21, 8, 45, 101, 125, 118, 87, 110, 86, 64, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 28, 79, 79, 117, 122, 88, 84, 54, 46, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 6, 55, 61, 68, 71, 30, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 23, 25, 20, 12, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 12, 9, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0];
  data = bctx.createImageData(20, 20);
  d = data.data;
  for (var i = 0; i < d.length; i += 4) {
    d[i] = color[0];
    d[i + 1] = color[1];
    d[i + 2] = color[2];
    d[i + 3] = opacities[i / 4];
  }
  bctx.putImageData(data, 0, 0);
  var imagewidth = 20 * 5;
  var imageheight = 20 * 5;
  function particle(x, y, l) {
    this.x = x;
    this.y = y;
    this.age = 0;
    this.spead = 1;
    this.startvx = -(Math.random() * 30 + 510) / 100; //wind
    this.vx = this.startvx;
    // this.vx = (Math.random()*8-4)/100
    this.startvy = -(Math.random() * 30 + 10) / 100; //wind
    this.vy = this.startvy;
    this.scale = Math.random() * dusts; //density of particle
    this.lifetime = Math.random() * l + l / 2; //wind
    this.finalscale = dusts + this.scale + Math.random(); //density of particle

    this.update = function (deltatime) {
      var windspeed = p5.dt.windspeed * 0.5 || 1;
      var windDrt = p5.dt.windDirection || [1, 1];
      this.startvx = (Math.random() * 30 + 10) * windDrt[0] / 100 * windspeed; //wind
      this.vx = this.startvx;
      // this.vx = (Math.random()*8-4)/100
      this.startvy = (Math.random() * 30 + 10) * windDrt[1] / 100 * windspeed; //wind
      this.vy = this.startvy;
      this.x += this.vx * deltatime;
      this.y += this.vy * deltatime;
      var frac = Math.pow(this.age / this.lifetime, .5);
      this.vy = (1 - frac) * this.startvy;
      this.age += deltatime * 0.7;
      this.scale = frac * this.finalscale;
    };
    this.drawCircle = function (ctx, circleX, circleY) {
      ctx.fillStyle = `rgb(${backgroundColor[0]}, ${backgroundColor[1]}, ${backgroundColor[2]},${0.5})`;
      ctx.fillRect(0, 0, innerWidth, innerHeight); // 배경을 그리기   
      for (var i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.arc(circleX - i, circleY - i, circleSize - humidity / 2 * i, 0, Math.PI * 2);
        ctx.fillStyle = `rgb(${circleColor[0] + i * humidity}, ${circleColor[1] + i * humidity}, ${circleColor[2] + i * humidity},${250})`; // 원의 색상
        ctx.fill();
        // ctx.lineWidth = 3;
        // ctx.strokeStyle = circleColor;
        // ctx.stroke();
        ctx.closePath();
      }
    };
    this.draw = function () {
      this.drawCircle(ctx, universX, universY);
      if (textDisplay) {
        ctx.font = "20px Arial";
        ctx.fillText(timeSTM, universX - circleSize, universY - circleSize);
      }
      context.globalAlpha = (1 - Math.abs(1 - 2 * this.age / this.lifetime)) / 5; //density of paticle
      var off = this.scale * imagewidth / 2;
      var xmin = this.x - off;
      var xmax = xmin + this.scale * imageheight;
      var ymin = this.y - off;
      var ymax = ymin + this.scale * imageheight;
      context.drawImage(buffer, xmin, ymin, xmax - xmin, ymax - ymin);
    };
  }
  function addparticles(x, y, n, lifetime) {
    lifetime = lifetime || 4000;
    n = n || 10;
    if (n < 1) return Math.random() <= n && pendingparticles.push(new particle(x, y, lifetime));
    for (var i = 0; i < n; i++) {
      pendingparticles.push(new particle(x, y, lifetime));
    }
    ;
  }
  function updateanddrawparticles(deltatime) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    deltatime = deltatime || 16;
    var newparticles = [];
    currentparticles = currentparticles.concat(pendingparticles);
    pendingparticles = [];
    currentparticles.forEach(function (p) {
      p.update(deltatime);
      if (p.age < p.lifetime) {
        p.draw();
        newparticles.push(p);
      }
    });
    currentparticles = newparticles;
  }
  function frame(time) {
    if (running) {
      // console.log("data: ",p5.dt);
      //-------------------------------------updateColor
      humidity = p5.dt.MapHMD || 5;
      lightS = p5.dt.MapLGHT || 1;
      dusts = p5.dt.MapDST || 4;
      var colorSf = p5.dt.color || [255, 5, 10];
      circleColor = [colorSf[0] * lightS, colorSf[1] * lightS, colorSf[2] * lightS] || 0;
      timeSTM = new Date(p5.dt.timestamp * 1000).toLocaleTimeString("it-IT");
      var hour = parseInt(timeSTM[0] + timeSTM[1]);
      if (hour <= 12) {
        universX -= 0.02;
        universY -= 0.02;
      } else {
        universX += 0.02;
        universY += 0.02;
      }
      data = bctx.createImageData(20, 20);
      d = data.data;
      for (var i = 0; i < d.length; i += 4) {
        d[i] = circleColor[0];
        d[i + 1] = circleColor[1];
        d[i + 2] = circleColor[2];
        d[i + 3] = opacities[i / 4] * 4;
      }
      ;
      bctx.putImageData(data, 0, 0);

      //-------------------------------------------
      // console.log(circleColor);

      var deltat = time - lastframe;
      lastframe = time;
      updateanddrawparticles(deltat);
      polyfillAnimFrame(frame);
    }
  }
  var running = false;
  function start() {
    running = true;
    polyfillAnimFrame(function (time) {
      lastframe = time;
      polyfillAnimFrame(frame);
    });
  }
  function stop() {
    running = false;
  }
  return {
    start: start,
    stop: stop,
    step: updateanddrawparticles,
    addsmoke: addparticles
  };
};
var party = smokemachine(ctx, p5.dt.color); //[54, 16.8, 18.2] //temperature
party.start(); // start animating

// onmousemove = function (e) {
// 	var x = e.clientX
// 	var y = e.clientY
// 	var n = .5
// 	var t = Math.floor(Math.random() * 200) + 3800
// 	party.addsmoke(x, y, n, t)

// }

onmousemove = function (e) {
  if (e.clientX >= universX - circleSize / 2 && e.clientX <= universX + circleSize / 2 && e.clientY >= universY - circleSize / 2 && e.clientY <= universY + circleSize / 2) {
    textDisplay = true;
  } else {
    textDisplay = false;
  }
};
setInterval(function () {
  party.addsmoke(universX - circleSize / 2, universY - circleSize / 2, 1);
}, 100);

// // 네모 그리기
// let canvas, ctx; 
// let rectX = 50;   // 네모의 초기 x 위치
// let rectY = 100;  // 네모의 y 위치
// let rectSpeed = 3;  // 네모의 이동 속도
// let backgroundColor = 0;  // 백그라운드 색상 초기값
// let backgroundDirection = 1;  // 백그라운드 색상 변화 방향 (1이면 밝아지고, -1이면 어두워짐)

// function setup() {
//     // 캔버스 설정
//     canvas = document.getElementById('canvas');
//     ctx = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// }

// // 동그라미 그리기
// function drawCircle() {
//     ctx.beginPath();
//     ctx.arc(200, 200, 50, 0, Math.PI * 2);  // x, y, 반지름, 시작각도, 끝각도
//     ctx.fillStyle = 'blue';  // 파란색 동그라미
//     ctx.fill();
// }

// // 네모 그리기
// function drawRectangle() {
//     ctx.fillStyle = 'red';
//     ctx.fillRect(rectX, rectY, 100, 100);  // x, y, 너비, 높이
// }

// // 세모 그리기
// function drawTriangle() {
//     ctx.beginPath();
//     ctx.moveTo(400, 300);  // 세모의 첫 번째 꼭짓점
//     ctx.lineTo(450, 400);  // 두 번째 꼭짓점
//     ctx.lineTo(350, 400);  // 세 번째 꼭짓점
//     ctx.closePath();
//     ctx.fillStyle = 'green';  // 녹색 세모
//     ctx.fill();
// }

// // 네모를 움직이게 하기
// function moveRectangle() {
//     rectX += rectSpeed;  // 네모를 오른쪽으로 이동시킴
//     if (rectX + 100 > canvas.width || rectX < 0) {
//         rectSpeed *= -1;  // 화면 끝에 닿으면 반대 방향으로 이동
//     }
// }

// // 배경색을 변화시키기
// function changeBackgroundColor() {
//     backgroundColor += backgroundDirection;
//     if (backgroundColor > 255 || backgroundColor < 0) {
//         backgroundDirection *= -1;  // 색상이 최대/최소에 도달하면 방향 변경
//     }
//     ctx.fillStyle = `rgb(${backgroundColor}, ${backgroundColor}, ${backgroundColor})`;
//     ctx.fillRect(0, 0, canvas.width, canvas.height);  // 배경을 그리기
// }

// // 애니메이션 루프
// function animate() {
//     // 배경색을 변경하면서 지우기
//     changeBackgroundColor();

//     // 도형들을 그리기
//     drawCircle();
//     drawRectangle();
//     drawTriangle();

//     // 네모 움직이기
//     moveRectangle();

//     // 애니메이션 프레임 요청
//     requestAnimationFrame(animate);
// }

// // 초기 설정 및 애니메이션 시작
// setup();
// animate();
})();

/******/ })()
;