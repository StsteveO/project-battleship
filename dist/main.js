/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM-interactions/DOM-interactions.js":
/*!**************************************************!*\
  !*** ./src/DOM-interactions/DOM-interactions.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exampleAdd: () => (/* binding */ exampleAdd)
/* harmony export */ });
/* harmony import */ var _functions_tests_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions _&_tests/functions */ "./src/functions _&_tests/functions.js");

function exampleAdd(a, b) {
  return a + b;
}


/***/ }),

/***/ "./src/functions _&_tests/functions.js":
/*!*********************************************!*\
  !*** ./src/functions _&_tests/functions.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateBoat: () => (/* binding */ CreateBoat),
/* harmony export */   Gameboard: () => (/* binding */ Gameboard),
/* harmony export */   grabName: () => (/* binding */ grabName),
/* harmony export */   hit: () => (/* binding */ hit),
/* harmony export */   isSunk: () => (/* binding */ isSunk)
/* harmony export */ });
const grabName = name => name;
class CreateBoat {
  constructor(length, boatName) {
    let numTimesHit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    let hasSunk = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    this.length = length;
    this.numTimesHit = numTimesHit;
    this.hasSunk = hasSunk;
    this.boatName = boatName;
  }
}
;
const hit = boatName => boatName.numTimesHit++;
const isSunk = boatName => boatName.length === boatName.numTimesHit ? true : false;
class Gameboard {
  constructor() {
    this.coordinates = [
    //0
    [{
      x_number: 0,
      y_number: 0,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 0,
      y_number: 1,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 0,
      y_number: 2,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 0,
      y_number: 3,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 0,
      y_number: 4,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 0,
      y_number: 5,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 0,
      y_number: 6,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 0,
      y_number: 7,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 0,
      y_number: 8,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 0,
      y_number: 9,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }],
    //1
    [{
      x_number: 1,
      y_number: 0,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 1,
      y_number: 1,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 1,
      y_number: 2,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 1,
      y_number: 3,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 1,
      y_number: 4,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 1,
      y_number: 5,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 1,
      y_number: 6,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 1,
      y_number: 7,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 1,
      y_number: 8,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 1,
      y_number: 9,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }],
    //2
    [{
      x_number: 2,
      y_number: 0,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 2,
      y_number: 1,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 2,
      y_number: 2,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 2,
      y_number: 3,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 2,
      y_number: 4,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 2,
      y_number: 5,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 2,
      y_number: 6,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 2,
      y_number: 7,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 2,
      y_number: 8,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 2,
      y_number: 9,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }],
    //3
    [{
      x_number: 3,
      y_number: 0,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 3,
      y_number: 1,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 3,
      y_number: 2,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 3,
      y_number: 3,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 3,
      y_number: 4,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 3,
      y_number: 5,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 3,
      y_number: 6,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 3,
      y_number: 7,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 3,
      y_number: 8,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 3,
      y_number: 9,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }],
    //4
    [{
      x_number: 4,
      y_number: 0,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 4,
      y_number: 1,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 4,
      y_number: 2,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 4,
      y_number: 3,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 4,
      y_number: 4,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 4,
      y_number: 5,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 4,
      y_number: 6,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 4,
      y_number: 7,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 4,
      y_number: 8,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 4,
      y_number: 9,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }],
    //5
    [{
      x_number: 5,
      y_number: 0,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 5,
      y_number: 1,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 5,
      y_number: 2,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 5,
      y_number: 3,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 5,
      y_number: 4,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 5,
      y_number: 5,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 5,
      y_number: 6,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 5,
      y_number: 7,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 5,
      y_number: 8,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 5,
      y_number: 9,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }],
    //6
    [{
      x_number: 6,
      y_number: 0,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 6,
      y_number: 1,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 6,
      y_number: 2,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 6,
      y_number: 3,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 6,
      y_number: 4,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 6,
      y_number: 5,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 6,
      y_number: 6,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 6,
      y_number: 7,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 6,
      y_number: 8,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 6,
      y_number: 9,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }],
    //7
    [{
      x_number: 7,
      y_number: 0,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 7,
      y_number: 1,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 7,
      y_number: 2,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 7,
      y_number: 3,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 7,
      y_number: 4,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 7,
      y_number: 5,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 7,
      y_number: 6,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 7,
      y_number: 7,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 7,
      y_number: 8,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 7,
      y_number: 9,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }],
    //8
    [{
      x_number: 8,
      y_number: 0,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 8,
      y_number: 1,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 8,
      y_number: 2,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 8,
      y_number: 3,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 8,
      y_number: 4,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 8,
      y_number: 5,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 8,
      y_number: 6,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 8,
      y_number: 7,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 8,
      y_number: 8,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 8,
      y_number: 9,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }],
    //9
    [{
      x_number: 9,
      y_number: 0,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 9,
      y_number: 1,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 9,
      y_number: 2,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 9,
      y_number: 3,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 9,
      y_number: 4,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 9,
      y_number: 5,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 9,
      y_number: 6,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 9,
      y_number: 7,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 9,
      y_number: 8,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }, {
      x_number: 9,
      y_number: 9,
      status: "empty",
      boatName: "none",
      boatNameObj: "none",
      wasPicked: false
    }]];
  }
  place(shipLength, verticalOrHorizontal, xNumber, yNumber, boatNameObj, boatName) {
    for (let i = 0; i < shipLength; i++) {
      if (xNumber + i < 0 || xNumber + i > 9 || yNumber - i < 0 || yNumber - i > 9) {
        return "Invalid entry, ship is not within the limits of the board.Try again.";
      }
      ;
      if (verticalOrHorizontal === "horizontal") {
        this.coordinates[xNumber + i][yNumber].status = "filled";
        this.coordinates[xNumber + i][yNumber].boatName = boatName;
        this.coordinates[xNumber + i][yNumber].boatNameObj = boatNameObj;
      }
      ;
      if (verticalOrHorizontal === "vertical") {
        this.coordinates[xNumber][yNumber - i].status = "filled";
        this.coordinates[xNumber][yNumber - i].boatName = boatName;
        this.coordinates[xNumber][yNumber - i].boatNameObj = boatNameObj;
      }
      ;
    }
    ;
  }
  receiveAttack(xNumber, yNumber) {
    if (xNumber < 0 || xNumber > 9 || yNumber < 0 || yNumber > 9) {
      return "Invalid entry, ship is not within the limits of the board.Try again.";
    }
    if (this.coordinates[xNumber][yNumber].wasPicked === true) {
      return `Invalid entry, coordinates ${xNumber},${yNumber} was already attacked.Try again.`;
    }
    ;
    if (this.coordinates[xNumber][yNumber].status === "empty") {
      //PLACEHOLDER: what to do/display with missed attacks
      this.coordinates[xNumber][yNumber].wasPicked = true;
      return `Missed! No hit on coordinates ${xNumber},${yNumber}`;
    }
    if (this.coordinates[xNumber][yNumber].status === "filled") {
      this.coordinates[xNumber][yNumber].wasPicked = true;
      hit(this.coordinates[xNumber][yNumber].boatNameObj);
      if (isSunk(this.coordinates[xNumber][yNumber].boatNameObj) === true) {
        return `Hit! ` + this.coordinates[xNumber][yNumber].boatName + ` has been hit on coordinates ${xNumber},${yNumber}, and has been sunk!`;
      }
      ;
      return `Hit! ` + this.coordinates[xNumber][yNumber].boatName + ` has been hit on coordinates ${xNumber},${yNumber}`;
    }
  }
}
;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nbody,\nhtml {\n  /* height: 100%; */\n  margin: 0;\n  /* background-color: skyblue; */\n  background-image: linear-gradient(to right bottom, #b4b5b5, #b2c0c4, #b2cad8, #bcd1ed, #d0d6ff);\n}\n:root {\n  /* --custom-name: value; */\n  /* --light-green-bg: #476529; */\n  /* example, color: var(--navy-clr) */\n  --primary-clr: #8AA6A3;\n  --secondary-clr: #8AA6A3;\n  --accent-clr: #8AA6A3;\n}\n\n/* .preloader{\n  background: black;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 100;\n} */\n\n/* .loader { */\n  /* width: 20%; control the size */\n  /* aspect-ratio: 8/5;\n  --_g: no-repeat radial-gradient(#000 68%,#0000 71%);\n  -webkit-mask: var(--_g),var(--_g),var(--_g);\n  -webkit-mask-size: 25% 40%;\n  background: black;\n  animation: load 2s infinite;\n  z-index: 10;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n}\n.loader-background{\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image: linear-gradient(to right bottom, #b4b5b5, #b2c0c4, #b2cad8, #bcd1ed, #d0d6ff);\n  pointer-events: none;\n  opacity: 100%;\n  z-index: 4;\n}\n\n@keyframes load {\n  0%    {-webkit-mask-position: 0% 0%  ,50% 0%  ,100% 0%  }\n  16.67%{-webkit-mask-position: 0% 100%,50% 0%  ,100% 0%  }\n  33.33%{-webkit-mask-position: 0% 100%,50% 100%,100% 0%  }\n  50%   {-webkit-mask-position: 0% 100%,50% 100%,100% 100%}\n  66.67%{-webkit-mask-position: 0% 0%  ,50% 100%,100% 100%}\n  83.33%{-webkit-mask-position: 0% 0%  ,50% 0%  ,100% 100%}\n  100%  {-webkit-mask-position: 0% 0%  ,50% 0%  ,100% 0%  }\n}\n\n.done-loading{\n  animation: loading-completed 2000ms;\n  animation-fill-mode: forwards;\n}\n\n@keyframes loading-completed{\n  100%{\n    opacity: 0%;\n    visibility: hidden;\n    pointer-events: none;\n  }\n} */\n\n.header{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n    margin: 0rem;\n    border: .25rem solid black;\n    background-color: navy;\n    color: silver;\n    margin-bottom: 0rem;\n}\nfieldset{\n  display: flex;\n  flex-direction: column;\n}\n.form.player-name{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.submit-name-btn{\n  margin-top: 1rem;\n  padding: .5rem;\n}\n.name-plate,\n.computer-name-plate, \n.boat-selection-title,\n.boat-orientation-title{\n  margin-bottom: 1rem;\n  font-size: 3rem;\n  font-weight: bold;\n}\ntable, th, td {\n  border: 1px solid black;\n}\n.grid,\n.computer-grid,\n.boat-selection,\n.boat-orientation{\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.boat-selection-btns,\n.boat-orientation-btns{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: .25rem;\n}\nth, td{\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n  width: 2rem;\n}\n.clicked{\n  background-color: orange;\n}\n.outside-grid{\n  cursor: not-allowed;\n}\n.outside-grid-error{\n  background-color: red;\n  animation-name: off-grid-error;\n  animation-duration: 400ms;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n}\n@keyframes off-grid-error{\n  from {background-color: red;}\n  to {background-color: white;}\n}\n.table-class,\n.computer-table-class{\n  position: relative;\n}\n.grid,\n.computer-grid{\n  position: relative;\n}\n.click-btns-modal{\n  width: 40%;\n  height: auto;\n  /* margin: auto; */\n  background-color: rgb(194, 194, 194);\n  background-color: black;\n  color: whitesmoke;\n  border: 1px solid gray;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0%;\n  padding: 1rem;\n  transition-duration: 200ms;\n  transition-property: opacity;\n}\n.show{\n  opacity: 100%;\n}\n.phased-out{\n  opacity: 30%;\n}\n.selected{\n  background-color: black;\n}\n.computer-selected{\n  /* background-color: white; */\n  opacity: 100%;\n}\n.computer-clicked{\n  background-color: orange;\n  cursor: pointer;\n}\n.computer-cell-targeted{\n  background-color: red;\n  animation-name: computer-cell-targeted;\n  animation-duration: 250ms;\n  animation-iteration-count: 8;\n  animation-direction: alternate;\n}\n@keyframes computer-cell-targeted{\n  from {background-color: orange;}\n  to {background-color: red;}\n}\n.player-cell-targeted{\n  background-color: red;\n  animation-name: computer-cell-targeted;\n  animation-duration: 250ms;\n  animation-iteration-count: 8;\n  animation-direction: alternate;\n}\n.hit{\n  background-color: red;\n  text-align: center;\n  /* transition-duration: 200ms; */\n  /* transition-delay: 1000ms; */\n}\n.missed{\n  background-color: gray;\n}\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  pointer-events: none;\n  opacity: 0;\n  transition: 200ms;\n}\n.overlay.show{\n  opacity: 1;\n  pointer-events: all;\n}\n.scoreboard-title{\n  margin-left: 1rem;\n  margin-right: .25rem;\n}\n.scoreboard-display{\n  display: flex;\n  justify-content: space-around;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  position: sticky;\n  top: 0rem;\n  background-color: red;\n  margin-bottom: 1rem;\n  /* From https://css.glass */\nbackground: rgba(245, 246, 255, 0.19);\n/* border-radius: 16px; */\nbox-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\nbackdrop-filter: blur(14.1px);\n-webkit-backdrop-filter: blur(14.1px);\nborder: 1px solid rgba(245, 246, 255, 0.17);\nz-index: 1;\n}\n/* .scoreboard-text{\n  transition-duration: 5000ms;\n} */\n.scoreboard-computer-text{\n  margin-left: 2rem;\n}\n.hide{\n  pointer-events: none;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  opacity: 0%;\n  transition: 250ms;\n  transition-property: opacity;\n}\n.inactive{\n  pointer-events: none;\n}\n\n.overlay-for-results{\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0,0,0,.5);\n  pointer-events: none;\n  opacity: 0;\n  transition: 200ms;\n}\n\n.overlay-for-results.active{\n  opacity: 1;\n  pointer-events: all;\n}\n\n.win-banner,\n.lose-banner{\n  position: fixed;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  height: auto;\n  padding: 1rem;\n  width: 90%;\n  border: 2px solid black;\n  border-radius: .5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.win-banner.active,\n.lose-banner.active{\n  transform: translate(-50%, -50%) scale(1);\n}\n\n.win-banner{\n  background-color: lightblue;\n}\n.lose-banner{\n  background-color: rgb(255, 86, 86);\n}\n.congrats,\n.you-lost{\n  font-size: 3rem;\n}\n.you-won, \n.better-luck{\n  font-size: 1rem;\n  padding-bottom: 1rem;\n}\nbutton{\n  padding: 1rem;\n  border-radius: 1rem;\n}\n.small{\n  transform: scale(0);\n  pointer-events: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nbody,\nhtml {\n  /* height: 100%; */\n  margin: 0;\n  /* background-color: skyblue; */\n  background-image: linear-gradient(to right bottom, #b4b5b5, #b2c0c4, #b2cad8, #bcd1ed, #d0d6ff);\n}\n:root {\n  /* --custom-name: value; */\n  /* --light-green-bg: #476529; */\n  /* example, color: var(--navy-clr) */\n  --primary-clr: #8AA6A3;\n  --secondary-clr: #8AA6A3;\n  --accent-clr: #8AA6A3;\n}\n\n/* .preloader{\n  background: black;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 100;\n} */\n\n/* .loader { */\n  /* width: 20%; control the size */\n  /* aspect-ratio: 8/5;\n  --_g: no-repeat radial-gradient(#000 68%,#0000 71%);\n  -webkit-mask: var(--_g),var(--_g),var(--_g);\n  -webkit-mask-size: 25% 40%;\n  background: black;\n  animation: load 2s infinite;\n  z-index: 10;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n}\n.loader-background{\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image: linear-gradient(to right bottom, #b4b5b5, #b2c0c4, #b2cad8, #bcd1ed, #d0d6ff);\n  pointer-events: none;\n  opacity: 100%;\n  z-index: 4;\n}\n\n@keyframes load {\n  0%    {-webkit-mask-position: 0% 0%  ,50% 0%  ,100% 0%  }\n  16.67%{-webkit-mask-position: 0% 100%,50% 0%  ,100% 0%  }\n  33.33%{-webkit-mask-position: 0% 100%,50% 100%,100% 0%  }\n  50%   {-webkit-mask-position: 0% 100%,50% 100%,100% 100%}\n  66.67%{-webkit-mask-position: 0% 0%  ,50% 100%,100% 100%}\n  83.33%{-webkit-mask-position: 0% 0%  ,50% 0%  ,100% 100%}\n  100%  {-webkit-mask-position: 0% 0%  ,50% 0%  ,100% 0%  }\n}\n\n.done-loading{\n  animation: loading-completed 2000ms;\n  animation-fill-mode: forwards;\n}\n\n@keyframes loading-completed{\n  100%{\n    opacity: 0%;\n    visibility: hidden;\n    pointer-events: none;\n  }\n} */\n\n.header{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n    margin: 0rem;\n    border: .25rem solid black;\n    background-color: navy;\n    color: silver;\n    margin-bottom: 0rem;\n}\nfieldset{\n  display: flex;\n  flex-direction: column;\n}\n.form.player-name{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.submit-name-btn{\n  margin-top: 1rem;\n  padding: .5rem;\n}\n.name-plate,\n.computer-name-plate, \n.boat-selection-title,\n.boat-orientation-title{\n  margin-bottom: 1rem;\n  font-size: 3rem;\n  font-weight: bold;\n}\ntable, th, td {\n  border: 1px solid black;\n}\n.grid,\n.computer-grid,\n.boat-selection,\n.boat-orientation{\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.boat-selection-btns,\n.boat-orientation-btns{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: .25rem;\n}\nth, td{\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n  width: 2rem;\n}\n.clicked{\n  background-color: orange;\n}\n.outside-grid{\n  cursor: not-allowed;\n}\n.outside-grid-error{\n  background-color: red;\n  animation-name: off-grid-error;\n  animation-duration: 400ms;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n}\n@keyframes off-grid-error{\n  from {background-color: red;}\n  to {background-color: white;}\n}\n.table-class,\n.computer-table-class{\n  position: relative;\n}\n.grid,\n.computer-grid{\n  position: relative;\n}\n.click-btns-modal{\n  width: 40%;\n  height: auto;\n  /* margin: auto; */\n  background-color: rgb(194, 194, 194);\n  background-color: black;\n  color: whitesmoke;\n  border: 1px solid gray;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0%;\n  padding: 1rem;\n  transition-duration: 200ms;\n  transition-property: opacity;\n}\n.show{\n  opacity: 100%;\n}\n.phased-out{\n  opacity: 30%;\n}\n.selected{\n  background-color: black;\n}\n.computer-selected{\n  /* background-color: white; */\n  opacity: 100%;\n}\n.computer-clicked{\n  background-color: orange;\n  cursor: pointer;\n}\n.computer-cell-targeted{\n  background-color: red;\n  animation-name: computer-cell-targeted;\n  animation-duration: 250ms;\n  animation-iteration-count: 8;\n  animation-direction: alternate;\n}\n@keyframes computer-cell-targeted{\n  from {background-color: orange;}\n  to {background-color: red;}\n}\n.player-cell-targeted{\n  background-color: red;\n  animation-name: computer-cell-targeted;\n  animation-duration: 250ms;\n  animation-iteration-count: 8;\n  animation-direction: alternate;\n}\n.hit{\n  background-color: red;\n  text-align: center;\n  /* transition-duration: 200ms; */\n  /* transition-delay: 1000ms; */\n}\n.missed{\n  background-color: gray;\n}\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  pointer-events: none;\n  opacity: 0;\n  transition: 200ms;\n}\n.overlay.show{\n  opacity: 1;\n  pointer-events: all;\n}\n.scoreboard-title{\n  margin-left: 1rem;\n  margin-right: .25rem;\n}\n.scoreboard-display{\n  display: flex;\n  justify-content: space-around;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  position: sticky;\n  top: 0rem;\n  background-color: red;\n  margin-bottom: 1rem;\n  /* From https://css.glass */\nbackground: rgba(245, 246, 255, 0.19);\n/* border-radius: 16px; */\nbox-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\nbackdrop-filter: blur(14.1px);\n-webkit-backdrop-filter: blur(14.1px);\nborder: 1px solid rgba(245, 246, 255, 0.17);\nz-index: 1;\n}\n/* .scoreboard-text{\n  transition-duration: 5000ms;\n} */\n.scoreboard-computer-text{\n  margin-left: 2rem;\n}\n.hide{\n  pointer-events: none;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  opacity: 0%;\n  transition: 250ms;\n  transition-property: opacity;\n}\n.inactive{\n  pointer-events: none;\n}\n\n.overlay-for-results{\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0,0,0,.5);\n  pointer-events: none;\n  opacity: 0;\n  transition: 200ms;\n}\n\n.overlay-for-results.active{\n  opacity: 1;\n  pointer-events: all;\n}\n\n.win-banner,\n.lose-banner{\n  position: fixed;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  height: auto;\n  padding: 1rem;\n  width: 90%;\n  border: 2px solid black;\n  border-radius: .5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.win-banner.active,\n.lose-banner.active{\n  transform: translate(-50%, -50%) scale(1);\n}\n\n.win-banner{\n  background-color: lightblue;\n}\n.lose-banner{\n  background-color: rgb(255, 86, 86);\n}\n.congrats,\n.you-lost{\n  font-size: 3rem;\n}\n.you-won, \n.better-luck{\n  font-size: 1rem;\n  padding-bottom: 1rem;\n}\nbutton{\n  padding: 1rem;\n  border-radius: 1rem;\n}\n.small{\n  transform: scale(0);\n  pointer-events: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _src_functions_tests_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/functions _&_tests/functions */ "./src/functions _&_tests/functions.js");
/* harmony import */ var _src_DOM_interactions_DOM_interactions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/DOM-interactions/DOM-interactions */ "./src/DOM-interactions/DOM-interactions.js");




// window.addEventListener("load", ()=>{
// const loader = document.querySelector(".loader");
// loader.classList.add("done-loading");
// });

let scoreboardText = document.querySelector(".scoreboard-text");
let scoreboardComputerText = document.querySelector(".scoreboard-computer-text");
const namePlate = document.querySelector(".name-plate");
const nameSubmit = document.querySelector(".form.player-name");
const boatSelectionSection = document.querySelector(".boat-selection");
const boatOrientationSection = document.querySelector(".boat-orientation");
const computerSection = document.querySelector(".computer-grid");
computerSection.classList.add("small");
const grid = document.querySelector(".grid");
nameSubmit.addEventListener("submit", e => {
  e.preventDefault();
  let name = e.composedPath()[0][1].value;
  namePlate.textContent = name;
  nameSubmit.classList.add("hide");
  boatSelectionSection.classList.remove("hide");
  boatOrientationSection.classList.remove("hide");
  grid.classList.remove("hide");
  scoreboardText.textContent = "Pick your boat, and boat orientation. Then place it on your grid.";
});
let overlayForResults = document.querySelector(".overlay-for-results");
let winBanner = document.querySelector(".win-banner");
let loseBanner = document.querySelector(".lose-banner");
function win() {
  overlayForResults.classList.add("active");
  winBanner.classList.add("active");
  return;
}
;
function lose() {
  overlayForResults.classList.add("active");
  loseBanner.classList.add("active");
  return;
}
;
grid.addEventListener("click", e => {
  const xValue = e.composedPath()[0].dataset.xValue;
  const yValue = e.composedPath()[0].dataset.yValue;
  if (xValue !== undefined) {
    // console.log(xValue);
    // console.log(yValue);
  }
});
const patrolBoat = document.querySelector(".patrol-boat-btn");
const submarine = document.querySelector(".submarine-btn");
const destroyer = document.querySelector(".destroyer-btn");
const battleship = document.querySelector(".battleship-btn");
const carrier = document.querySelector(".carrier-btn");
const horizantal = document.querySelector(".horizantal-btn");
const vertical = document.querySelector(".vertical-btn");
function boatSelectionButtonFunction(btnClicked) {
  let btnArr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [patrolBoat, submarine, destroyer, battleship, carrier];
  btnClicked.classList.add("clicked");
  let remainingBtns = btnArr.filter(btn => btn !== btnClicked);
  remainingBtns.forEach(btn => btn.classList.remove("clicked"));
}
function boatOrientationButtonFunction(btnClicked) {
  let btnArr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [horizantal, vertical];
  btnClicked.classList.add("clicked");
  let remainingBtns = btnArr.filter(btn => btn !== btnClicked);
  remainingBtns.forEach(btn => btn.classList.remove("clicked"));
}
patrolBoat.addEventListener("click", e => {
  console.log(e.composedPath()[0].dataset.patrolBoatSpaces);
  boatSelectionButtonFunction(patrolBoat);
});
submarine.addEventListener("click", e => {
  console.log(e.composedPath()[0].dataset.submarineSpaces);
  boatSelectionButtonFunction(submarine);
});
destroyer.addEventListener("click", e => {
  console.log(e.composedPath()[0].dataset.destroyerSpaces);
  boatSelectionButtonFunction(destroyer);
});
battleship.addEventListener("click", e => {
  console.log(e.composedPath()[0].dataset.battleshipSpaces);
  boatSelectionButtonFunction(battleship);
});
carrier.addEventListener("click", e => {
  console.log(e.composedPath()[0].dataset.carrierSpaces);
  boatSelectionButtonFunction(carrier);
});
horizantal.addEventListener("click", e => {
  console.log(e.composedPath()[0].dataset.boatOrientation);
  boatOrientationButtonFunction(horizantal);
});
vertical.addEventListener("click", e => {
  console.log(e.composedPath()[0].dataset.boatOrientation);
  boatOrientationButtonFunction(vertical);
});

//click-btns-modal
const clickBtnsModal = document.querySelector(".click-btns-modal");
const tableClass = document.querySelector(".table-class");
tableClass.addEventListener("mouseenter", () => {
  if (!patrolBoat.getAttribute("class").includes("clicked") && !submarine.getAttribute("class").includes("clicked") && !destroyer.getAttribute("class").includes("clicked") && !battleship.getAttribute("class").includes("clicked") && !carrier.getAttribute("class").includes("clicked") || !horizantal.getAttribute("class").includes("clicked") && !vertical.getAttribute("class").includes("clicked")) {
    // console.log("None of these buttons are clicked"); //THIS WORKS!!
    // patrolBoat.classList.add("no-btn-clicked-error");
    clickBtnsModal.classList.add("show");
    tableClass.classList.add("phased-out");
  }
});

// const cells = document.querySelectorAll("td");
const cells = document.querySelectorAll(".player-cell");
cells.forEach(cell => cell.addEventListener("mouseover", () => {
  const xNum = Number(cell.dataset.xValue);
  const yNum = Number(cell.dataset.yValue);
  const nextCell2_horizantal = document.querySelector(`[data-code= "${xNum + 1}${yNum}"]`);
  const nextCell3_horizantal = document.querySelector(`[data-code= "${xNum + 2}${yNum}"]`);
  const nextCell4_horizantal = document.querySelector(`[data-code= "${xNum + 3}${yNum}"]`);
  const nextCell5_horizantal = document.querySelector(`[data-code= "${xNum + 4}${yNum}"]`);
  const nextCell2_vertical = document.querySelector(`[data-code= "${xNum}${yNum + 1}"]`);
  const nextCell3_vertical = document.querySelector(`[data-code= "${xNum}${yNum + 2}"]`);
  const nextCell4_vertical = document.querySelector(`[data-code= "${xNum}${yNum + 3}"]`);
  const nextCell5_vertical = document.querySelector(`[data-code= "${xNum}${yNum + 4}"]`);
  if (patrolBoat.getAttribute("class").includes("clicked") && horizantal.getAttribute("class").includes("clicked")) {
    if (nextCell2_horizantal) {
      nextCell2_horizantal.classList.add("clicked");
      cell.classList.add("clicked");
    }
    if (!nextCell2_horizantal) {
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (cell.getAttribute("class").includes("selected")) {
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (nextCell2_horizantal && nextCell2_horizantal.getAttribute("class").includes("selected")) {
      nextCell2_horizantal.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
  }
  if (patrolBoat.getAttribute("class").includes("clicked") && vertical.getAttribute("class").includes("clicked")) {
    if (nextCell2_vertical) {
      nextCell2_vertical.classList.add("clicked");
      cell.classList.add("clicked");
    }
    if (!nextCell2_vertical) {
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (cell.getAttribute("class").includes("selected")) {
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (nextCell2_vertical && nextCell2_vertical.getAttribute("class").includes("selected")) {
      nextCell2_vertical.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
  }
  if (submarine.getAttribute("class").includes("clicked") && horizantal.getAttribute("class").includes("clicked")) {
    if (nextCell2_horizantal && nextCell3_horizantal) {
      nextCell3_horizantal.classList.add("clicked");
      nextCell2_horizantal.classList.add("clicked");
      cell.classList.add("clicked");
    }
    if (nextCell2_horizantal && !nextCell3_horizantal) {
      nextCell2_horizantal.classList.add("outside-grid-error");
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (!nextCell2_horizantal && !nextCell3_horizantal) {
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (cell.getAttribute("class").includes("selected")) {
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (nextCell2_horizantal && nextCell2_horizantal.getAttribute("class").includes("selected")) {
      nextCell2_horizantal.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (nextCell3_horizantal && nextCell3_horizantal.getAttribute("class").includes("selected")) {
      nextCell3_horizantal.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
  }
  if (submarine.getAttribute("class").includes("clicked") && vertical.getAttribute("class").includes("clicked")) {
    if (nextCell2_vertical && nextCell3_vertical) {
      nextCell3_vertical.classList.add("clicked");
      nextCell2_vertical.classList.add("clicked");
      cell.classList.add("clicked");
    }
    if (nextCell2_vertical && !nextCell3_vertical) {
      nextCell2_vertical.classList.add("outside-grid-error");
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (!nextCell2_vertical && !nextCell3_vertical) {
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (cell.getAttribute("class").includes("selected")) {
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (nextCell2_vertical && nextCell2_vertical.getAttribute("class").includes("selected")) {
      nextCell2_vertical.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (nextCell3_vertical && nextCell3_vertical.getAttribute("class").includes("selected")) {
      nextCell3_vertical.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
  }
  if (destroyer.getAttribute("class").includes("clicked") && horizantal.getAttribute("class").includes("clicked")) {
    if (nextCell2_horizantal && nextCell3_horizantal) {
      nextCell3_horizantal.classList.add("clicked");
      nextCell2_horizantal.classList.add("clicked");
      cell.classList.add("clicked");
    }
    if (nextCell2_horizantal && !nextCell3_horizantal) {
      nextCell2_horizantal.classList.add("outside-grid-error");
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (!nextCell2_horizantal && !nextCell3_horizantal) {
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (cell.getAttribute("class").includes("selected")) {
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (nextCell2_horizantal && nextCell2_horizantal.getAttribute("class").includes("selected")) {
      nextCell2_horizantal.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (nextCell3_horizantal && nextCell3_horizantal.getAttribute("class").includes("selected")) {
      nextCell3_horizantal.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
  }
  if (destroyer.getAttribute("class").includes("clicked") && vertical.getAttribute("class").includes("clicked")) {
    if (nextCell2_vertical && nextCell3_vertical) {
      nextCell3_vertical.classList.add("clicked");
      nextCell2_vertical.classList.add("clicked");
      cell.classList.add("clicked");
    }
    if (nextCell2_vertical && !nextCell3_vertical) {
      nextCell2_vertical.classList.add("outside-grid-error");
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (!nextCell2_vertical && !nextCell3_vertical) {
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (cell.getAttribute("class").includes("selected")) {
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (nextCell2_vertical && nextCell2_vertical.getAttribute("class").includes("selected")) {
      nextCell2_vertical.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (nextCell3_vertical && nextCell3_vertical.getAttribute("class").includes("selected")) {
      nextCell3_vertical.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
  }
  if (battleship.getAttribute("class").includes("clicked") && horizantal.getAttribute("class").includes("clicked")) {
    if (nextCell2_horizantal && nextCell3_horizantal && nextCell4_horizantal) {
      nextCell4_horizantal.classList.add("clicked");
      nextCell3_horizantal.classList.add("clicked");
      nextCell2_horizantal.classList.add("clicked");
      cell.classList.add("clicked");
    }
    if (nextCell2_horizantal && nextCell3_horizantal && !nextCell4_horizantal) {
      nextCell3_horizantal.classList.add("outside-grid-error");
      nextCell2_horizantal.classList.add("outside-grid-error");
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (nextCell2_horizantal && !nextCell3_horizantal && !nextCell4_horizantal) {
      nextCell2_horizantal.classList.add("outside-grid-error");
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (!nextCell2_horizantal && !nextCell3_horizantal && !nextCell4_horizantal) {
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (cell.getAttribute("class").includes("selected")) {
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (nextCell2_horizantal && nextCell2_horizantal.getAttribute("class").includes("selected")) {
      nextCell2_horizantal.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (nextCell3_horizantal && nextCell3_horizantal.getAttribute("class").includes("selected")) {
      nextCell3_horizantal.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (nextCell4_horizantal && nextCell4_horizantal.getAttribute("class").includes("selected")) {
      nextCell4_horizantal.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
  }
  if (battleship.getAttribute("class").includes("clicked") && vertical.getAttribute("class").includes("clicked")) {
    if (nextCell2_vertical && nextCell3_vertical && nextCell4_vertical) {
      nextCell4_vertical.classList.add("clicked");
      nextCell3_vertical.classList.add("clicked");
      nextCell2_vertical.classList.add("clicked");
      cell.classList.add("clicked");
    }
    if (nextCell2_vertical && nextCell3_vertical && !nextCell4_vertical) {
      nextCell3_vertical.classList.add("outside-grid-error");
      nextCell2_vertical.classList.add("outside-grid-error");
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (nextCell2_vertical && !nextCell3_vertical && !nextCell4_vertical) {
      nextCell2_vertical.classList.add("outside-grid-error");
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (!nextCell2_vertical && !nextCell3_vertical && !nextCell4_vertical) {
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (cell.getAttribute("class").includes("selected")) {
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (nextCell2_vertical && nextCell2_vertical.getAttribute("class").includes("selected")) {
      nextCell2_vertical.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (nextCell3_vertical && nextCell3_vertical.getAttribute("class").includes("selected")) {
      nextCell3_vertical.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (nextCell4_vertical && nextCell4_vertical.getAttribute("class").includes("selected")) {
      nextCell4_vertical.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
  }
  if (carrier.getAttribute("class").includes("clicked") && horizantal.getAttribute("class").includes("clicked")) {
    if (nextCell2_horizantal && nextCell3_horizantal && nextCell4_horizantal && nextCell5_horizantal) {
      nextCell5_horizantal.classList.add("clicked");
      nextCell4_horizantal.classList.add("clicked");
      nextCell3_horizantal.classList.add("clicked");
      nextCell2_horizantal.classList.add("clicked");
      cell.classList.add("clicked");
    }
    if (nextCell2_horizantal && nextCell3_horizantal && nextCell4_horizantal && !nextCell5_horizantal) {
      nextCell4_horizantal.classList.add("outside-grid-error");
      nextCell3_horizantal.classList.add("outside-grid-error");
      nextCell2_horizantal.classList.add("outside-grid-error");
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (nextCell2_horizantal && nextCell3_horizantal && !nextCell4_horizantal && !nextCell5_horizantal) {
      nextCell3_horizantal.classList.add("outside-grid-error");
      nextCell2_horizantal.classList.add("outside-grid-error");
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (nextCell2_horizantal && !nextCell3_horizantal && !nextCell4_horizantal && !nextCell5_horizantal) {
      nextCell2_horizantal.classList.add("outside-grid-error");
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (!nextCell2_horizantal && !nextCell3_horizantal && !nextCell4_horizantal && !nextCell5_horizantal) {
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (cell.getAttribute("class").includes("selected")) {
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (nextCell2_horizantal && nextCell2_horizantal.getAttribute("class").includes("selected")) {
      nextCell2_horizantal.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (nextCell3_horizantal && nextCell3_horizantal.getAttribute("class").includes("selected")) {
      nextCell3_horizantal.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (nextCell4_horizantal && nextCell4_horizantal.getAttribute("class").includes("selected")) {
      nextCell4_horizantal.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (nextCell5_horizantal && nextCell5_horizantal.getAttribute("class").includes("selected")) {
      nextCell5_horizantal.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
  }
  if (carrier.getAttribute("class").includes("clicked") && vertical.getAttribute("class").includes("clicked")) {
    if (nextCell2_vertical && nextCell3_vertical && nextCell4_vertical && nextCell5_vertical) {
      nextCell5_vertical.classList.add("clicked");
      nextCell4_vertical.classList.add("clicked");
      nextCell3_vertical.classList.add("clicked");
      nextCell2_vertical.classList.add("clicked");
      cell.classList.add("clicked");
    }
    if (nextCell2_vertical && nextCell3_vertical && nextCell4_vertical && !nextCell5_vertical) {
      nextCell4_vertical.classList.add("outside-grid-error");
      nextCell3_vertical.classList.add("outside-grid-error");
      nextCell2_vertical.classList.add("outside-grid-error");
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (nextCell2_vertical && nextCell3_vertical && !nextCell4_vertical && !nextCell5_vertical) {
      nextCell3_vertical.classList.add("outside-grid-error");
      nextCell2_vertical.classList.add("outside-grid-error");
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (nextCell2_vertical && !nextCell3_vertical && !nextCell4_vertical && !nextCell5_vertical) {
      nextCell2_vertical.classList.add("outside-grid-error");
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (!nextCell2_vertical && !nextCell3_vertical && !nextCell4_vertical && !nextCell5_vertical) {
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (cell.getAttribute("class").includes("selected")) {
      cell.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (nextCell2_vertical && nextCell2_vertical.getAttribute("class").includes("selected")) {
      nextCell2_vertical.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (nextCell3_vertical && nextCell3_vertical.getAttribute("class").includes("selected")) {
      nextCell3_vertical.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (nextCell4_vertical && nextCell4_vertical.getAttribute("class").includes("selected")) {
      nextCell4_vertical.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
    if (nextCell5_vertical && nextCell5_vertical.getAttribute("class").includes("selected")) {
      nextCell5_vertical.classList.add("outside-grid-error");
      grid.classList.add("outside-grid");
    }
  }
}));
tableClass.addEventListener("mouseleave", () => {
  if (!patrolBoat.getAttribute("class").includes("clicked") && !submarine.getAttribute("class").includes("clicked") && !destroyer.getAttribute("class").includes("clicked") && !battleship.getAttribute("class").includes("clicked") && !carrier.getAttribute("class").includes("clicked") || !horizantal.getAttribute("class").includes("clicked") && !vertical.getAttribute("class").includes("clicked")) {
    // console.log("None of these buttons are clicked"); //THIS WORKS!!
    // patrolBoat.classList.remove("no-btn-clicked-error");
    clickBtnsModal.classList.remove("show");
    tableClass.classList.remove("phased-out");
  }
});
cells.forEach(cell => cell.addEventListener("mouseout", () => {
  const xNum = Number(cell.dataset.xValue);
  const yNum = Number(cell.dataset.yValue);
  const nextCell2_horizantal = document.querySelector(`[data-code= "${xNum + 1}${yNum}"]`);
  const nextCell3_horizantal = document.querySelector(`[data-code= "${xNum + 2}${yNum}"]`);
  const nextCell4_horizantal = document.querySelector(`[data-code= "${xNum + 3}${yNum}"]`);
  const nextCell5_horizantal = document.querySelector(`[data-code= "${xNum + 4}${yNum}"]`);
  const nextCell2_vertical = document.querySelector(`[data-code= "${xNum}${yNum + 1}"]`);
  const nextCell3_vertical = document.querySelector(`[data-code= "${xNum}${yNum + 2}"]`);
  const nextCell4_vertical = document.querySelector(`[data-code= "${xNum}${yNum + 3}"]`);
  const nextCell5_vertical = document.querySelector(`[data-code= "${xNum}${yNum + 4}"]`);
  if (patrolBoat.getAttribute("class").includes("clicked") && horizantal.getAttribute("class").includes("clicked")) {
    if (nextCell2_horizantal) {
      nextCell2_horizantal.classList.remove("clicked");
      cell.classList.remove("clicked");
    }
    if (!nextCell2_horizantal) {
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (cell.getAttribute("class").includes("selected")) {
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (nextCell2_horizantal && nextCell2_horizantal.getAttribute("class").includes("selected")) {
      nextCell2_horizantal.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
  }
  if (patrolBoat.getAttribute("class").includes("clicked") && vertical.getAttribute("class").includes("clicked")) {
    if (nextCell2_vertical) {
      nextCell2_vertical.classList.remove("clicked");
      cell.classList.remove("clicked");
    }
    if (!nextCell2_vertical) {
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (cell.getAttribute("class").includes("selected")) {
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (nextCell2_vertical && nextCell2_vertical.getAttribute("class").includes("selected")) {
      nextCell2_vertical.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
  }
  if (submarine.getAttribute("class").includes("clicked") && horizantal.getAttribute("class").includes("clicked")) {
    if (nextCell2_horizantal && nextCell3_horizantal) {
      nextCell3_horizantal.classList.remove("clicked");
      nextCell2_horizantal.classList.remove("clicked");
      cell.classList.remove("clicked");
    }
    if (nextCell2_horizantal && !nextCell3_horizantal) {
      nextCell2_horizantal.classList.remove("outside-grid-error");
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (!nextCell2_horizantal && !nextCell3_horizantal) {
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (cell.getAttribute("class").includes("selected")) {
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (nextCell2_horizantal && nextCell2_horizantal.getAttribute("class").includes("selected")) {
      nextCell2_horizantal.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (nextCell3_horizantal && nextCell3_horizantal.getAttribute("class").includes("selected")) {
      nextCell3_horizantal.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
  }
  if (submarine.getAttribute("class").includes("clicked") && vertical.getAttribute("class").includes("clicked")) {
    if (nextCell2_vertical && nextCell3_vertical) {
      nextCell3_vertical.classList.remove("clicked");
      nextCell2_vertical.classList.remove("clicked");
      cell.classList.remove("clicked");
    }
    if (nextCell2_vertical && !nextCell3_vertical) {
      nextCell2_vertical.classList.remove("outside-grid-error");
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (!nextCell2_vertical && !nextCell3_vertical) {
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (cell.getAttribute("class").includes("selected")) {
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (nextCell2_vertical && nextCell2_vertical.getAttribute("class").includes("selected")) {
      nextCell2_vertical.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (nextCell3_vertical && nextCell3_vertical.getAttribute("class").includes("selected")) {
      nextCell3_vertical.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
  }
  if (destroyer.getAttribute("class").includes("clicked") && horizantal.getAttribute("class").includes("clicked")) {
    if (nextCell2_horizantal && nextCell3_horizantal) {
      nextCell3_horizantal.classList.remove("clicked");
      nextCell2_horizantal.classList.remove("clicked");
      cell.classList.remove("clicked");
    }
    if (nextCell2_horizantal && !nextCell3_horizantal) {
      nextCell2_horizantal.classList.remove("outside-grid-error");
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (!nextCell2_horizantal && !nextCell3_horizantal) {
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (cell.getAttribute("class").includes("selected")) {
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (nextCell2_horizantal && nextCell2_horizantal.getAttribute("class").includes("selected")) {
      nextCell2_horizantal.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (nextCell3_horizantal && nextCell3_horizantal.getAttribute("class").includes("selected")) {
      nextCell3_horizantal.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
  }
  if (destroyer.getAttribute("class").includes("clicked") && vertical.getAttribute("class").includes("clicked")) {
    if (nextCell2_vertical && nextCell3_vertical) {
      nextCell3_vertical.classList.remove("clicked");
      nextCell2_vertical.classList.remove("clicked");
      cell.classList.remove("clicked");
    }
    if (nextCell2_vertical && !nextCell3_vertical) {
      nextCell2_vertical.classList.remove("outside-grid-error");
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (!nextCell2_vertical && !nextCell3_vertical) {
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (cell.getAttribute("class").includes("selected")) {
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (nextCell2_vertical && nextCell2_vertical.getAttribute("class").includes("selected")) {
      nextCell2_vertical.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (nextCell3_vertical && nextCell3_vertical.getAttribute("class").includes("selected")) {
      nextCell3_vertical.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
  }
  if (battleship.getAttribute("class").includes("clicked") && horizantal.getAttribute("class").includes("clicked")) {
    if (nextCell2_horizantal && nextCell3_horizantal && nextCell4_horizantal) {
      nextCell4_horizantal.classList.remove("clicked");
      nextCell3_horizantal.classList.remove("clicked");
      nextCell2_horizantal.classList.remove("clicked");
      cell.classList.remove("clicked");
    }
    if (nextCell2_horizantal && nextCell3_horizantal && !nextCell4_horizantal) {
      nextCell3_horizantal.classList.remove("outside-grid-error");
      nextCell2_horizantal.classList.remove("outside-grid-error");
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (nextCell2_horizantal && !nextCell3_horizantal && !nextCell4_horizantal) {
      nextCell2_horizantal.classList.remove("outside-grid-error");
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (!nextCell2_horizantal && !nextCell3_horizantal && !nextCell4_horizantal) {
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (cell.getAttribute("class").includes("selected")) {
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (nextCell2_horizantal && nextCell2_horizantal.getAttribute("class").includes("selected")) {
      nextCell2_horizantal.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (nextCell3_horizantal && nextCell3_horizantal.getAttribute("class").includes("selected")) {
      nextCell3_horizantal.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (nextCell4_horizantal && nextCell4_horizantal.getAttribute("class").includes("selected")) {
      nextCell4_horizantal.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
  }
  if (battleship.getAttribute("class").includes("clicked") && vertical.getAttribute("class").includes("clicked")) {
    if (nextCell2_vertical && nextCell3_vertical && nextCell4_vertical) {
      nextCell4_vertical.classList.remove("clicked");
      nextCell3_vertical.classList.remove("clicked");
      nextCell2_vertical.classList.remove("clicked");
      cell.classList.remove("clicked");
    }
    if (nextCell2_vertical && nextCell3_vertical && !nextCell4_vertical) {
      nextCell3_vertical.classList.remove("outside-grid-error");
      nextCell2_vertical.classList.remove("outside-grid-error");
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (nextCell2_vertical && !nextCell3_vertical && !nextCell4_vertical) {
      nextCell2_vertical.classList.remove("outside-grid-error");
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (!nextCell2_vertical && !nextCell3_vertical && !nextCell4_vertical) {
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (cell.getAttribute("class").includes("selected")) {
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (nextCell2_vertical && nextCell2_vertical.getAttribute("class").includes("selected")) {
      nextCell2_vertical.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (nextCell3_vertical && nextCell3_vertical.getAttribute("class").includes("selected")) {
      nextCell3_vertical.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (nextCell4_vertical && nextCell4_vertical.getAttribute("class").includes("selected")) {
      nextCell4_vertical.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
  }
  if (carrier.getAttribute("class").includes("clicked") && horizantal.getAttribute("class").includes("clicked")) {
    if (nextCell2_horizantal && nextCell3_horizantal && nextCell4_horizantal && nextCell5_horizantal) {
      nextCell5_horizantal.classList.remove("clicked");
      nextCell4_horizantal.classList.remove("clicked");
      nextCell3_horizantal.classList.remove("clicked");
      nextCell2_horizantal.classList.remove("clicked");
      cell.classList.remove("clicked");
    }
    if (nextCell2_horizantal && nextCell3_horizantal && nextCell4_horizantal && !nextCell5_horizantal) {
      nextCell4_horizantal.classList.remove("outside-grid-error");
      nextCell3_horizantal.classList.remove("outside-grid-error");
      nextCell2_horizantal.classList.remove("outside-grid-error");
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (nextCell2_horizantal && nextCell3_horizantal && !nextCell4_horizantal && !nextCell5_horizantal) {
      nextCell3_horizantal.classList.remove("outside-grid-error");
      nextCell2_horizantal.classList.remove("outside-grid-error");
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (nextCell2_horizantal && !nextCell3_horizantal && !nextCell4_horizantal && !nextCell5_horizantal) {
      nextCell2_horizantal.classList.remove("outside-grid-error");
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (!nextCell2_horizantal && !nextCell3_horizantal && !nextCell4_horizantal && !nextCell5_horizantal) {
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (cell.getAttribute("class").includes("selected")) {
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (nextCell2_horizantal && nextCell2_horizantal.getAttribute("class").includes("selected")) {
      nextCell2_horizantal.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (nextCell3_horizantal && nextCell3_horizantal.getAttribute("class").includes("selected")) {
      nextCell3_horizantal.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (nextCell4_horizantal && nextCell4_horizantal.getAttribute("class").includes("selected")) {
      nextCell4_horizantal.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (nextCell5_horizantal && nextCell5_horizantal.getAttribute("class").includes("selected")) {
      nextCell5_horizantal.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
  }
  if (carrier.getAttribute("class").includes("clicked") && vertical.getAttribute("class").includes("clicked")) {
    if (nextCell2_vertical && nextCell3_vertical && nextCell4_vertical && nextCell5_vertical) {
      nextCell5_vertical.classList.remove("clicked");
      nextCell4_vertical.classList.remove("clicked");
      nextCell3_vertical.classList.remove("clicked");
      nextCell2_vertical.classList.remove("clicked");
      cell.classList.remove("clicked");
    }
    if (nextCell2_vertical && nextCell3_vertical && nextCell4_vertical && !nextCell5_vertical) {
      nextCell4_vertical.classList.remove("outside-grid-error");
      nextCell3_vertical.classList.remove("outside-grid-error");
      nextCell2_vertical.classList.remove("outside-grid-error");
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (nextCell2_vertical && nextCell3_vertical && !nextCell4_vertical && !nextCell5_vertical) {
      nextCell3_vertical.classList.remove("outside-grid-error");
      nextCell2_vertical.classList.remove("outside-grid-error");
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (nextCell2_vertical && !nextCell3_vertical && !nextCell4_vertical && !nextCell5_vertical) {
      nextCell2_vertical.classList.remove("outside-grid-error");
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (!nextCell2_vertical && !nextCell3_vertical && !nextCell4_vertical && !nextCell5_vertical) {
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (cell.getAttribute("class").includes("selected")) {
      cell.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (nextCell2_vertical && nextCell2_vertical.getAttribute("class").includes("selected")) {
      nextCell2_vertical.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (nextCell3_vertical && nextCell3_vertical.getAttribute("class").includes("selected")) {
      nextCell3_vertical.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (nextCell4_vertical && nextCell4_vertical.getAttribute("class").includes("selected")) {
      nextCell4_vertical.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
    if (nextCell5_vertical && nextCell5_vertical.getAttribute("class").includes("selected")) {
      nextCell5_vertical.classList.remove("outside-grid-error");
      grid.classList.remove("outside-grid");
    }
  }
}));
cells.forEach(cell => cell.addEventListener("click", () => {
  const xNum = Number(cell.dataset.xValue);
  const yNum = Number(cell.dataset.yValue);
  const nextCell2_horizantal = document.querySelector(`[data-code= "${xNum + 1}${yNum}"]`);
  const nextCell3_horizantal = document.querySelector(`[data-code= "${xNum + 2}${yNum}"]`);
  const nextCell4_horizantal = document.querySelector(`[data-code= "${xNum + 3}${yNum}"]`);
  const nextCell5_horizantal = document.querySelector(`[data-code= "${xNum + 4}${yNum}"]`);
  const nextCell2_vertical = document.querySelector(`[data-code= "${xNum}${yNum + 1}"]`);
  const nextCell3_vertical = document.querySelector(`[data-code= "${xNum}${yNum + 2}"]`);
  const nextCell4_vertical = document.querySelector(`[data-code= "${xNum}${yNum + 3}"]`);
  const nextCell5_vertical = document.querySelector(`[data-code= "${xNum}${yNum + 4}"]`);
  if (patrolBoat.getAttribute("class").includes("clicked") && horizantal.getAttribute("class").includes("clicked") && !grid.getAttribute("class").includes("outside-grid")) {
    if (!cell.getAttribute("class").includes("selected") && !nextCell2_horizantal.getAttribute("class").includes("selected")) {
      patrolBoat.classList.remove("clicked");
      patrolBoat.disabled = true;
      cell.classList.add("selected");
      cell.classList.add("player-patrol-boat");
      nextCell2_horizantal.classList.add("selected");
      nextCell2_horizantal.classList.add("player-patrol-boat");
    }
    if (patrolBoat.disabled === true && submarine.disabled === true && destroyer.disabled === true && battleship.disabled === true && carrier.disabled === true) {
      console.log("all buttons have been clicked");
      boatSelectionSection.classList.add("hide");
      boatOrientationSection.classList.add("hide");
      tableClass.classList.add("inactive");
      computerSection.classList.remove("small");
      scoreboardText.textContent = "ATTACK!";
    }
    ;
  }
  if (patrolBoat.getAttribute("class").includes("clicked") && vertical.getAttribute("class").includes("clicked") && !grid.getAttribute("class").includes("outside-grid")) {
    if (!cell.getAttribute("class").includes("selected") && !nextCell2_vertical.getAttribute("class").includes("selected")) {
      patrolBoat.classList.remove("clicked");
      patrolBoat.disabled = true;
      cell.classList.add("selected");
      cell.classList.add("player-patrol-boat");
      nextCell2_vertical.classList.add("selected");
      nextCell2_vertical.classList.add("player-patrol-boat");
    }
    if (patrolBoat.disabled === true && submarine.disabled === true && destroyer.disabled === true && battleship.disabled === true && carrier.disabled === true) {
      console.log("all buttons have been clicked");
      boatSelectionSection.classList.add("hide");
      boatOrientationSection.classList.add("hide");
      tableClass.classList.add("inactive");
      computerSection.classList.remove("small");
      scoreboardText.textContent = "ATTACK!";
    }
  }
  if (submarine.getAttribute("class").includes("clicked") && horizantal.getAttribute("class").includes("clicked") && !grid.getAttribute("class").includes("outside-grid")) {
    if (!cell.getAttribute("class").includes("selected") && !nextCell2_horizantal.getAttribute("class").includes("selected") && !nextCell3_horizantal.getAttribute("class").includes("selected")) {
      submarine.classList.remove("clicked");
      submarine.disabled = true;
      cell.classList.add("selected");
      cell.classList.add("player-submarine");
      nextCell2_horizantal.classList.add("selected");
      nextCell2_horizantal.classList.add("player-submarine");
      nextCell3_horizantal.classList.add("selected");
      nextCell3_horizantal.classList.add("player-submarine");
    }
    if (patrolBoat.disabled === true && submarine.disabled === true && destroyer.disabled === true && battleship.disabled === true && carrier.disabled === true) {
      console.log("all buttons have been clicked");
      boatSelectionSection.classList.add("hide");
      boatOrientationSection.classList.add("hide");
      tableClass.classList.add("inactive");
      computerSection.classList.remove("small");
      scoreboardText.textContent = "ATTACK!";
    }
  }
  if (submarine.getAttribute("class").includes("clicked") && vertical.getAttribute("class").includes("clicked") && !grid.getAttribute("class").includes("outside-grid")) {
    if (!cell.getAttribute("class").includes("selected") && !nextCell2_vertical.getAttribute("class").includes("selected") && !nextCell3_vertical.getAttribute("class").includes("selected") && !grid.getAttribute("class").includes("outside-grid")) {
      submarine.classList.remove("clicked");
      submarine.disabled = true;
      cell.classList.add("selected");
      cell.classList.add("player-submarine");
      nextCell2_vertical.classList.add("selected");
      nextCell2_vertical.classList.add("player-submarine");
      nextCell3_vertical.classList.add("selected");
      nextCell3_vertical.classList.add("player-submarine");
    }
    if (patrolBoat.disabled === true && submarine.disabled === true && destroyer.disabled === true && battleship.disabled === true && carrier.disabled === true) {
      console.log("all buttons have been clicked");
      boatSelectionSection.classList.add("hide");
      boatOrientationSection.classList.add("hide");
      tableClass.classList.add("inactive");
      computerSection.classList.remove("small");
      scoreboardText.textContent = "ATTACK!";
    }
  }
  if (destroyer.getAttribute("class").includes("clicked") && horizantal.getAttribute("class").includes("clicked") && !grid.getAttribute("class").includes("outside-grid")) {
    if (!cell.getAttribute("class").includes("selected") && !nextCell2_horizantal.getAttribute("class").includes("selected") && !nextCell3_horizantal.getAttribute("class").includes("selected")) {
      destroyer.classList.remove("clicked");
      destroyer.disabled = true;
      cell.classList.add("selected");
      cell.classList.add("player-destroyer");
      nextCell2_horizantal.classList.add("selected");
      nextCell2_horizantal.classList.add("player-destroyer");
      nextCell3_horizantal.classList.add("selected");
      nextCell3_horizantal.classList.add("player-destroyer");
    }
    if (patrolBoat.disabled === true && submarine.disabled === true && destroyer.disabled === true && battleship.disabled === true && carrier.disabled === true) {
      console.log("all buttons have been clicked");
      boatSelectionSection.classList.add("hide");
      boatOrientationSection.classList.add("hide");
      tableClass.classList.add("inactive");
      computerSection.classList.remove("small");
      scoreboardText.textContent = "ATTACK!";
    }
  }
  if (destroyer.getAttribute("class").includes("clicked") && vertical.getAttribute("class").includes("clicked") && !grid.getAttribute("class").includes("outside-grid")) {
    if (!cell.getAttribute("class").includes("selected") && !nextCell2_vertical.getAttribute("class").includes("selected") && !nextCell3_vertical.getAttribute("class").includes("selected")) {
      destroyer.classList.remove("clicked");
      destroyer.disabled = true;
      cell.classList.add("selected");
      cell.classList.add("player-destroyer");
      nextCell2_vertical.classList.add("selected");
      nextCell2_vertical.classList.add("player-destroyer");
      nextCell3_vertical.classList.add("selected");
      nextCell3_vertical.classList.add("player-destroyer");
    }
    if (patrolBoat.disabled === true && submarine.disabled === true && destroyer.disabled === true && battleship.disabled === true && carrier.disabled === true) {
      console.log("all buttons have been clicked");
      boatSelectionSection.classList.add("hide");
      boatOrientationSection.classList.add("hide");
      tableClass.classList.add("inactive");
      computerSection.classList.remove("small");
      scoreboardText.textContent = "ATTACK!";
    }
  }
  if (battleship.getAttribute("class").includes("clicked") && horizantal.getAttribute("class").includes("clicked") && !grid.getAttribute("class").includes("outside-grid")) {
    if (!cell.getAttribute("class").includes("selected") && !nextCell2_horizantal.getAttribute("class").includes("selected") && !nextCell3_horizantal.getAttribute("class").includes("selected") && !nextCell4_horizantal.getAttribute("class").includes("selected") && !grid.getAttribute("class").includes("outside-grid")) {
      battleship.classList.remove("clicked");
      battleship.disabled = true;
      cell.classList.add("selected");
      cell.classList.add("player-battleship");
      nextCell2_horizantal.classList.add("selected");
      nextCell2_horizantal.classList.add("player-battleship");
      nextCell3_horizantal.classList.add("selected");
      nextCell3_horizantal.classList.add("player-battleship");
      nextCell4_horizantal.classList.add("selected");
      nextCell4_horizantal.classList.add("player-battleship");
    }
    if (patrolBoat.disabled === true && submarine.disabled === true && destroyer.disabled === true && battleship.disabled === true && carrier.disabled === true) {
      console.log("all buttons have been clicked");
      boatSelectionSection.classList.add("hide");
      boatOrientationSection.classList.add("hide");
      tableClass.classList.add("inactive");
      computerSection.classList.remove("small");
      scoreboardText.textContent = "ATTACK!";
    }
  }
  if (battleship.getAttribute("class").includes("clicked") && vertical.getAttribute("class").includes("clicked") && !grid.getAttribute("class").includes("outside-grid")) {
    if (!cell.getAttribute("class").includes("selected") && !nextCell2_vertical.getAttribute("class").includes("selected") && !nextCell3_vertical.getAttribute("class").includes("selected") && !nextCell4_vertical.getAttribute("class").includes("selected") && !grid.getAttribute("class").includes("outside-grid")) {
      battleship.classList.remove("clicked");
      battleship.disabled = true;
      cell.classList.add("selected");
      cell.classList.add("player-battleship");
      nextCell2_vertical.classList.add("selected");
      nextCell2_vertical.classList.add("player-battleship");
      nextCell3_vertical.classList.add("selected");
      nextCell3_vertical.classList.add("player-battleship");
      nextCell4_vertical.classList.add("selected");
      nextCell4_vertical.classList.add("player-battleship");
    }
    if (patrolBoat.disabled === true && submarine.disabled === true && destroyer.disabled === true && battleship.disabled === true && carrier.disabled === true) {
      console.log("all buttons have been clicked");
      boatSelectionSection.classList.add("hide");
      boatOrientationSection.classList.add("hide");
      tableClass.classList.add("inactive");
      computerSection.classList.remove("small");
      scoreboardText.textContent = "ATTACK!";
    }
  }
  if (carrier.getAttribute("class").includes("clicked") && horizantal.getAttribute("class").includes("clicked") && !grid.getAttribute("class").includes("outside-grid")) {
    if (!cell.getAttribute("class").includes("selected") && !nextCell2_horizantal.getAttribute("class").includes("selected") && !nextCell3_horizantal.getAttribute("class").includes("selected") && !nextCell4_horizantal.getAttribute("class").includes("selected") && !nextCell5_horizantal.getAttribute("class").includes("selected")) {
      carrier.classList.remove("clicked");
      carrier.disabled = true;
      cell.classList.add("selected");
      cell.classList.add("player-carrier");
      nextCell2_horizantal.classList.add("selected");
      nextCell2_horizantal.classList.add("player-carrier");
      nextCell3_horizantal.classList.add("selected");
      nextCell3_horizantal.classList.add("player-carrier");
      nextCell4_horizantal.classList.add("selected");
      nextCell4_horizantal.classList.add("player-carrier");
      nextCell5_horizantal.classList.add("selected");
      nextCell5_horizantal.classList.add("player-carrier");
    }
    if (patrolBoat.disabled === true && submarine.disabled === true && destroyer.disabled === true && battleship.disabled === true && carrier.disabled === true) {
      console.log("all buttons have been clicked");
      boatSelectionSection.classList.add("hide");
      boatOrientationSection.classList.add("hide");
      tableClass.classList.add("inactive");
      computerSection.classList.remove("small");
      scoreboardText.textContent = "ATTACK!";
    }
  }
  if (carrier.getAttribute("class").includes("clicked") && vertical.getAttribute("class").includes("clicked") && !grid.getAttribute("class").includes("outside-grid")) {
    if (!cell.getAttribute("class").includes("selected") && !nextCell2_vertical.getAttribute("class").includes("selected") && !nextCell3_vertical.getAttribute("class").includes("selected") && !nextCell4_vertical.getAttribute("class").includes("selected") && !nextCell5_vertical.getAttribute("class").includes("selected")) {
      carrier.classList.remove("clicked");
      carrier.disabled = true;
      cell.classList.add("selected");
      cell.classList.add("player-carrier");
      nextCell2_vertical.classList.add("selected");
      nextCell2_vertical.classList.add("player-carrier");
      nextCell3_vertical.classList.add("selected");
      nextCell3_vertical.classList.add("player-carrier");
      nextCell4_vertical.classList.add("selected");
      nextCell4_vertical.classList.add("player-carrier");
      nextCell5_vertical.classList.add("selected");
      nextCell5_vertical.classList.add("player-carrier");
    }
    if (patrolBoat.disabled === true && submarine.disabled === true && destroyer.disabled === true && battleship.disabled === true && carrier.disabled === true) {
      console.log("all buttons have been clicked");
      boatSelectionSection.classList.add("hide");
      boatOrientationSection.classList.add("hide");
      tableClass.classList.add("inactive");
      computerSection.classList.remove("small");
      scoreboardText.textContent = "ATTACK!";
    }
    if (patrolBoat.disabled === true && submarine.disabled === true && destroyer.disabled === true && battleship.disabled === true && carrier.disabled === true) {
      console.log("All boats have been placed");
    }
  }
}));

//owkring on computer functionality
function randomNumBetween(min, max) {
  let num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}
function computerOrientation() {
  let computerOrientation = Math.floor(Math.random() * 2) + 1;
  if (computerOrientation === 1) {
    return "horizantal";
  }
  if (computerOrientation === 2) {
    return "vertical";
  }
}
console.log(computerOrientation());
let usedNumbers = [];
let usedNumbers2 = [];
class ComputerBoat {
  constructor(name, orientation
  // xValue,
  // yValue,
  // startingCell,
  // nextCell2,
  // nextCell3,
  // nextCell4,
  // nextCell5
  ) {
    this.name = name;
    this.orientation = orientation;
    // this.xValue = randomNumBetween(1, 9);
    // this.yValue = randomNumBetween(1, 10);
    // this.startingCell = document.querySelector(
    //   `[data-computer-code= "${this.xValue}${this.yValue}"]`
    // );
    // this.nextCell2 = document.querySelector(
    //   `[data-computer-code= "${this.xValue + 1}${this.yValue}"]`
    // );
    // this.nextCell3 = nextCell3;
    // this.nextCell4 = nextCell4;
    // this.nextCell5 = nextCell5;
  }

  computerCode() {
    if (this.name === "patrolBoat" && this.orientation === "horizantal") {
      let x = randomNumBetween(1, 9);
      let y = randomNumBetween(1, 10);
      let nextCell2 = x + 1;
      let xToString = x.toString();
      let yToString = y.toString();
      let nextCell2String = nextCell2.toString();
      let cellCode = xToString + yToString;
      let nextCell2Code = nextCell2String + yToString;
      if (usedNumbers.includes(cellCode) || usedNumbers.includes(nextCell2Code)) {
        this.computerCode();
      } else {
        let actualCell = document.querySelector(`[data-computer-code= "${cellCode}"]`);
        let actualNextCell2 = document.querySelector(`[data-computer-code= "${nextCell2Code}"]`);
        actualCell.classList.add("computer-selected");
        actualCell.classList.add("patrol-boat");
        // actualCell.textContent= "p";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell2.classList.add("patrol-boat");
        usedNumbers.push(cellCode);
        usedNumbers.push(nextCell2Code);
      }
    }
    if (this.name === "submarine" && this.orientation === "horizantal") {
      let x = randomNumBetween(1, 8);
      let y = randomNumBetween(1, 10);
      let nextCell2 = x + 1;
      let nextCell3 = x + 2;
      let xToString = x.toString();
      let yToString = y.toString();
      let nextCell2String = nextCell2.toString();
      let nextCell3String = nextCell3.toString();
      let cellCode = xToString + yToString;
      let nextCell2Code = nextCell2String + yToString;
      let nextCell3Code = nextCell3String + yToString;
      if (usedNumbers.includes(cellCode) || usedNumbers.includes(nextCell2Code) || usedNumbers.includes(nextCell3Code)) {
        this.computerCode();
      } else {
        let actualCell = document.querySelector(`[data-computer-code= "${cellCode}"]`);
        let actualNextCell2 = document.querySelector(`[data-computer-code= "${nextCell2Code}"]`);
        let actualNextCell3 = document.querySelector(`[data-computer-code= "${nextCell3Code}"]`);
        actualCell.classList.add("computer-selected");
        actualCell.classList.add("submarine");
        // actualCell.textContent= "s";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell2.classList.add("submarine");
        actualNextCell3.classList.add("computer-selected");
        actualNextCell3.classList.add("submarine");
        usedNumbers.push(cellCode);
        usedNumbers.push(nextCell2Code);
        usedNumbers.push(nextCell3Code);
      }
    }
    if (this.name === "destroyer" && this.orientation === "horizantal") {
      let x = randomNumBetween(1, 8);
      let y = randomNumBetween(1, 10);
      let nextCell2 = x + 1;
      let nextCell3 = x + 2;
      let xToString = x.toString();
      let yToString = y.toString();
      let nextCell2String = nextCell2.toString();
      let nextCell3String = nextCell3.toString();
      let cellCode = xToString + yToString;
      let nextCell2Code = nextCell2String + yToString;
      let nextCell3Code = nextCell3String + yToString;
      if (usedNumbers.includes(cellCode) || usedNumbers.includes(nextCell2Code) || usedNumbers.includes(nextCell3Code)) {
        this.computerCode();
      } else {
        let actualCell = document.querySelector(`[data-computer-code= "${cellCode}"]`);
        let actualNextCell2 = document.querySelector(`[data-computer-code= "${nextCell2Code}"]`);
        let actualNextCell3 = document.querySelector(`[data-computer-code= "${nextCell3Code}"]`);
        actualCell.classList.add("computer-selected");
        actualCell.classList.add("destroyer");
        // actualCell.textContent= "d";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell2.classList.add("destroyer");
        actualNextCell3.classList.add("computer-selected");
        actualNextCell3.classList.add("destroyer");
        usedNumbers.push(cellCode);
        usedNumbers.push(nextCell2Code);
        usedNumbers.push(nextCell3Code);
      }
    }
    if (this.name === "battleship" && this.orientation === "horizantal") {
      let x = randomNumBetween(1, 7);
      let y = randomNumBetween(1, 10);
      let nextCell2 = x + 1;
      let nextCell3 = x + 2;
      let nextCell4 = x + 3;
      let xToString = x.toString();
      let yToString = y.toString();
      let nextCell2String = nextCell2.toString();
      let nextCell3String = nextCell3.toString();
      let nextCell4String = nextCell4.toString();
      let cellCode = xToString + yToString;
      let nextCell2Code = nextCell2String + yToString;
      let nextCell3Code = nextCell3String + yToString;
      let nextCell4Code = nextCell4String + yToString;
      if (usedNumbers.includes(cellCode) || usedNumbers.includes(nextCell2Code) || usedNumbers.includes(nextCell3Code) || usedNumbers.includes(nextCell4Code)) {
        this.computerCode();
      } else {
        let actualCell = document.querySelector(`[data-computer-code= "${cellCode}"]`);
        let actualNextCell2 = document.querySelector(`[data-computer-code= "${nextCell2Code}"]`);
        let actualNextCell3 = document.querySelector(`[data-computer-code= "${nextCell3Code}"]`);
        let actualNextCell4 = document.querySelector(`[data-computer-code= "${nextCell4Code}"]`);
        actualCell.classList.add("computer-selected");
        actualCell.classList.add("battleship");
        // actualCell.textContent= "b";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell2.classList.add("battleship");
        actualNextCell3.classList.add("computer-selected");
        actualNextCell3.classList.add("battleship");
        actualNextCell4.classList.add("computer-selected");
        actualNextCell4.classList.add("battleship");
        usedNumbers.push(cellCode);
        usedNumbers.push(nextCell2Code);
        usedNumbers.push(nextCell3Code);
        usedNumbers.push(nextCell4Code);
      }
    }
    if (this.name === "carrier" && this.orientation === "horizantal") {
      let x = randomNumBetween(1, 6);
      let y = randomNumBetween(1, 10);
      let nextCell2 = x + 1;
      let nextCell3 = x + 2;
      let nextCell4 = x + 3;
      let nextCell5 = x + 4;
      let xToString = x.toString();
      let yToString = y.toString();
      let nextCell2String = nextCell2.toString();
      let nextCell3String = nextCell3.toString();
      let nextCell4String = nextCell4.toString();
      let nextCell5String = nextCell5.toString();
      let cellCode = xToString + yToString;
      let nextCell2Code = nextCell2String + yToString;
      let nextCell3Code = nextCell3String + yToString;
      let nextCell4Code = nextCell4String + yToString;
      let nextCell5Code = nextCell5String + yToString;
      if (usedNumbers.includes(cellCode) || usedNumbers.includes(nextCell2Code) || usedNumbers.includes(nextCell3Code) || usedNumbers.includes(nextCell4Code) || usedNumbers.includes(nextCell5Code)) {
        this.computerCode();
      } else {
        let actualCell = document.querySelector(`[data-computer-code= "${cellCode}"]`);
        let actualNextCell2 = document.querySelector(`[data-computer-code= "${nextCell2Code}"]`);
        let actualNextCell3 = document.querySelector(`[data-computer-code= "${nextCell3Code}"]`);
        let actualNextCell4 = document.querySelector(`[data-computer-code= "${nextCell4Code}"]`);
        let actualNextCell5 = document.querySelector(`[data-computer-code= "${nextCell5Code}"]`);
        actualCell.classList.add("computer-selected");
        actualCell.classList.add("carrier");
        // actualCell.textContent= "c";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell2.classList.add("carrier");
        actualNextCell3.classList.add("computer-selected");
        actualNextCell3.classList.add("carrier");
        actualNextCell4.classList.add("computer-selected");
        actualNextCell4.classList.add("carrier");
        actualNextCell5.classList.add("computer-selected");
        actualNextCell5.classList.add("carrier");
        usedNumbers.push(cellCode);
        usedNumbers.push(nextCell2Code);
        usedNumbers.push(nextCell3Code);
        usedNumbers.push(nextCell4Code);
        usedNumbers.push(nextCell5Code);
      }
    }
    if (this.name === "patrolBoat" && this.orientation === "vertical") {
      let x = randomNumBetween(1, 10);
      let y = randomNumBetween(1, 9);
      let nextCell2 = y + 1;
      let xToString = x.toString();
      let yToString = y.toString();
      let nextCell2String = nextCell2.toString();
      let cellCode = xToString + yToString;
      let nextCell2Code = xToString + nextCell2String;
      if (usedNumbers.includes(cellCode) || usedNumbers.includes(nextCell2Code)) {
        this.computerCode();
      } else {
        let actualCell = document.querySelector(`[data-computer-code= "${cellCode}"]`);
        let actualNextCell2 = document.querySelector(`[data-computer-code= "${nextCell2Code}"]`);
        actualCell.classList.add("computer-selected");
        actualCell.classList.add("patrol-boat");
        // actualCell.textContent= "p";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell2.classList.add("patrol-boat");
        usedNumbers.push(cellCode);
        usedNumbers.push(nextCell2Code);
      }
    }
    if (this.name === "submarine" && this.orientation === "vertical") {
      let x = randomNumBetween(1, 10);
      let y = randomNumBetween(1, 8);
      let nextCell2 = y + 1;
      let nextCell3 = y + 2;
      let xToString = x.toString();
      let yToString = y.toString();
      let nextCell2String = nextCell2.toString();
      let nextCell3String = nextCell3.toString();
      let cellCode = xToString + yToString;
      let nextCell2Code = xToString + nextCell2String;
      let nextCell3Code = xToString + nextCell3String;
      if (usedNumbers.includes(cellCode) || usedNumbers.includes(nextCell2Code) || usedNumbers.includes(nextCell3Code)) {
        this.computerCode();
      } else {
        let actualCell = document.querySelector(`[data-computer-code= "${cellCode}"]`);
        let actualNextCell2 = document.querySelector(`[data-computer-code= "${nextCell2Code}"]`);
        let actualNextCell3 = document.querySelector(`[data-computer-code= "${nextCell3Code}"]`);
        actualCell.classList.add("computer-selected");
        actualCell.classList.add("submarine");
        // actualCell.textContent= "s";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell2.classList.add("submarine");
        actualNextCell3.classList.add("computer-selected");
        actualNextCell3.classList.add("submarine");
        usedNumbers.push(cellCode);
        usedNumbers.push(nextCell2Code);
        usedNumbers.push(nextCell3Code);
      }
    }
    if (this.name === "destroyer" && this.orientation === "vertical") {
      let x = randomNumBetween(1, 10);
      let y = randomNumBetween(1, 8);
      let nextCell2 = y + 1;
      let nextCell3 = y + 2;
      let xToString = x.toString();
      let yToString = y.toString();
      let nextCell2String = nextCell2.toString();
      let nextCell3String = nextCell3.toString();
      let cellCode = xToString + yToString;
      let nextCell2Code = xToString + nextCell2String;
      let nextCell3Code = xToString + nextCell3String;
      if (usedNumbers.includes(cellCode) || usedNumbers.includes(nextCell2Code) || usedNumbers.includes(nextCell3Code)) {
        this.computerCode();
      } else {
        let actualCell = document.querySelector(`[data-computer-code= "${cellCode}"]`);
        let actualNextCell2 = document.querySelector(`[data-computer-code= "${nextCell2Code}"]`);
        let actualNextCell3 = document.querySelector(`[data-computer-code= "${nextCell3Code}"]`);
        actualCell.classList.add("computer-selected");
        actualCell.classList.add("destroyer");
        // actualCell.textContent= "d";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell2.classList.add("destroyer");
        actualNextCell3.classList.add("computer-selected");
        actualNextCell3.classList.add("destroyer");
        usedNumbers.push(cellCode);
        usedNumbers.push(nextCell2Code);
        usedNumbers.push(nextCell3Code);
      }
    }
    if (this.name === "battleship" && this.orientation === "vertical") {
      let x = randomNumBetween(1, 10);
      let y = randomNumBetween(1, 7);
      let nextCell2 = y + 1;
      let nextCell3 = y + 2;
      let nextCell4 = y + 3;
      let xToString = x.toString();
      let yToString = y.toString();
      let nextCell2String = nextCell2.toString();
      let nextCell3String = nextCell3.toString();
      let nextCell4String = nextCell4.toString();
      let cellCode = xToString + yToString;
      let nextCell2Code = xToString + nextCell2String;
      let nextCell3Code = xToString + nextCell3String;
      let nextCell4Code = xToString + nextCell4String;
      if (usedNumbers.includes(cellCode) || usedNumbers.includes(nextCell2Code) || usedNumbers.includes(nextCell3Code) || usedNumbers.includes(nextCell4Code)) {
        this.computerCode();
      } else {
        let actualCell = document.querySelector(`[data-computer-code= "${cellCode}"]`);
        let actualNextCell2 = document.querySelector(`[data-computer-code= "${nextCell2Code}"]`);
        let actualNextCell3 = document.querySelector(`[data-computer-code= "${nextCell3Code}"]`);
        let actualNextCell4 = document.querySelector(`[data-computer-code= "${nextCell4Code}"]`);
        actualCell.classList.add("computer-selected");
        actualCell.classList.add("battleship");
        // actualCell.textContent= "b";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell2.classList.add("battleship");
        actualNextCell3.classList.add("computer-selected");
        actualNextCell3.classList.add("battleship");
        actualNextCell4.classList.add("computer-selected");
        actualNextCell4.classList.add("battleship");
        usedNumbers.push(cellCode);
        usedNumbers.push(nextCell2Code);
        usedNumbers.push(nextCell3Code);
        usedNumbers.push(nextCell4Code);
      }
    }
    if (this.name === "carrier" && this.orientation === "vertical") {
      let x = randomNumBetween(1, 10);
      let y = randomNumBetween(1, 6);
      let nextCell2 = y + 1;
      let nextCell3 = y + 2;
      let nextCell4 = y + 3;
      let nextCell5 = y + 4;
      let xToString = x.toString();
      let yToString = y.toString();
      let nextCell2String = nextCell2.toString();
      let nextCell3String = nextCell3.toString();
      let nextCell4String = nextCell4.toString();
      let nextCell5String = nextCell5.toString();
      let cellCode = xToString + yToString;
      let nextCell2Code = xToString + nextCell2String;
      let nextCell3Code = xToString + nextCell3String;
      let nextCell4Code = xToString + nextCell4String;
      let nextCell5Code = xToString + nextCell5String;
      if (usedNumbers.includes(cellCode) || usedNumbers.includes(nextCell2Code) || usedNumbers.includes(nextCell3Code) || usedNumbers.includes(nextCell4Code) || usedNumbers.includes(nextCell5Code)) {
        this.computerCode();
      } else {
        let actualCell = document.querySelector(`[data-computer-code= "${cellCode}"]`);
        let actualNextCell2 = document.querySelector(`[data-computer-code= "${nextCell2Code}"]`);
        let actualNextCell3 = document.querySelector(`[data-computer-code= "${nextCell3Code}"]`);
        let actualNextCell4 = document.querySelector(`[data-computer-code= "${nextCell4Code}"]`);
        let actualNextCell5 = document.querySelector(`[data-computer-code= "${nextCell5Code}"]`);
        actualCell.classList.add("computer-selected");
        actualCell.classList.add("carrier");
        // actualCell.textContent= "c";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell2.classList.add("carrier");
        actualNextCell3.classList.add("computer-selected");
        actualNextCell3.classList.add("carrier");
        actualNextCell4.classList.add("computer-selected");
        actualNextCell4.classList.add("carrier");
        actualNextCell5.classList.add("computer-selected");
        actualNextCell5.classList.add("carrier");
        usedNumbers.push(cellCode);
        usedNumbers.push(nextCell2Code);
        usedNumbers.push(nextCell3Code);
        usedNumbers.push(nextCell4Code);
        usedNumbers.push(nextCell5Code);
      }
    }
  }
}
let patrolBoatComputer = new ComputerBoat("patrolBoat", computerOrientation());
let submarineComputer = new ComputerBoat("submarine", computerOrientation());
let destroyerComputer = new ComputerBoat("destroyer", computerOrientation());
let battleshipComputer = new ComputerBoat("battleship", computerOrientation());
let carrierComputer = new ComputerBoat("carrier", computerOrientation());
patrolBoatComputer.computerCode();
submarineComputer.computerCode();
destroyerComputer.computerCode();
battleshipComputer.computerCode();
carrierComputer.computerCode();
const computerCells = document.querySelectorAll(".computer-cell");
computerCells.forEach(computerCell => {
  computerCell.addEventListener("mouseover", () => {
    computerCell.classList.add("computer-clicked");
  });
});
computerCells.forEach(computerCell => {
  computerCell.addEventListener("mouseleave", () => {
    computerCell.classList.remove("computer-clicked");
  });
});
let computerTotalTally = 0;
let patrolBoatTally = 0;
let submarineTally = 0;
let destroyerTally = 0;
let battleshipTally = 0;
let carrierTally = 0;
let playerTotalTally = 0;
let playerPatrolBoatTally = 0;
let playerSubmarineTally = 0;
let playerDestroyerTally = 0;
let playerBattleshipTally = 0;
let playerCarrierTally = 0;
computerCells.forEach(computerCell => {
  computerCell.addEventListener("click", () => {
    computerCell.classList.add("computer-cell-targeted");
    if (computerCell.getAttribute("class").includes("computer-selected")) {
      computerCell.classList.add("hit");
      computerCell.classList.add("inactive");
      // computerCell.textContent = "X";
      setTimeout(() => {
        computerCell.textContent = "X";
      }, 2000);
      computerTotalTally++;
    } else {
      computerCell.classList.add("missed");
      computerCell.classList.add("inactive");
      setTimeout(() => {
        scoreboardText.textContent = "You missed! No ships hit.";
      }, 2000);
    }
    if (computerCell.getAttribute("class").includes("patrol-boat") && patrolBoatTally === 1) {
      // setTimeout((()=>{console.log("HIT! you sunk their Patrol Boat")}), 100);
      setTimeout(() => {
        scoreboardText.textContent = "HIT! you sank their Patrol Boat!";
      }, 2000);
    } else if (computerCell.getAttribute("class").includes("patrol-boat") && patrolBoatTally < 1) {
      setTimeout(() => {
        scoreboardText.textContent = "You hit their Patrol Boat!";
      }, 2000);
      patrolBoatTally++;
    }
    ;
    if (computerCell.getAttribute("class").includes("submarine") && submarineTally === 2) {
      // setTimeout((()=>{console.log("HIT! you sunk their Submarine")}), 100);
      setTimeout(() => {
        scoreboardText.textContent = "HIT! you sank their Submarine!";
      }, 2000);
    } else if (computerCell.getAttribute("class").includes("submarine") && submarineTally < 2) {
      setTimeout(() => {
        scoreboardText.textContent = "You hit their Submarine!";
      }, 2000);
      submarineTally++;
    }
    ;
    if (computerCell.getAttribute("class").includes("destroyer") && destroyerTally === 2) {
      // setTimeout((()=>{console.log("HIT! you sunk their Destroyer")}), 100);
      setTimeout(() => {
        scoreboardText.textContent = "HIT! you sank their Destroyer!";
      }, 2000);
    } else if (computerCell.getAttribute("class").includes("destroyer") && destroyerTally < 2) {
      setTimeout(() => {
        scoreboardText.textContent = "You hit their Destroyer!";
      }, 2000);
      destroyerTally++;
    }
    ;
    if (computerCell.getAttribute("class").includes("battleship") && battleshipTally === 3) {
      // setTimeout((()=>{console.log("HIT! you sunk their Battleship")}), 100);
      setTimeout(() => {
        scoreboardText.textContent = "HIT! YOU SANK THEIR BATTLESHIP!";
      }, 2000);
    } else if (computerCell.getAttribute("class").includes("battleship") && battleshipTally < 3) {
      setTimeout(() => {
        scoreboardText.textContent = "You hit their Battleship!";
      }, 2000);
      battleshipTally++;
    }
    ;
    if (computerCell.getAttribute("class").includes("carrier") && carrierTally === 4) {
      // setTimeout((()=>{console.log("HIT! you sunk their Carrier")}), 100);
      setTimeout(() => {
        scoreboardText.textContent = "HIT! you sank their Carrier!";
      }, 2000);
    } else if (computerCell.getAttribute("class").includes("carrier") && carrierTally < 4) {
      setTimeout(() => {
        scoreboardText.textContent = "You hit their Carrier!";
      }, 2000);
      carrierTally++;
    }
    ;
    if (computerTotalTally === 17) {
      setTimeout(() => {
        console.log("YOU WON!");
      }, 2000);
      setTimeout(win, 6000);
    }
    const overlay = document.querySelector(".overlay");
    overlay.classList.add("show");
    // setTimeout((()=>{overlay.classList.add("show");}), 100);

    // let playersXValue = randomNumBetween(1,10);
    // let playersYValue = randomNumBetween(1, 10);

    function randomPlayerCode() {
      let playersXValue = randomNumBetween(1, 10);
      // console.log("players x value num= "+ playersXValue);
      let playersYValue = randomNumBetween(1, 10);
      // console.log("players y value num= "+ playersYValue);
      let playersXValueString = playersXValue.toString();
      // console.log("players x value str= "+ playersXValueString);
      let playersYValueString = playersYValue.toString();
      // console.log("players y value str= "+ playersYValueString);
      let playerCodeValue = playersXValueString + playersYValueString;

      // console.log(usedNumbers2.length);

      if (usedNumbers2.length === 100) {
        console.log("No more player spaces");
        return 11;
      }
      if (!usedNumbers2.includes(playerCodeValue)) {
        usedNumbers2.push(playerCodeValue);
        // console.log("players code= " + playerCodeValue);
        return playerCodeValue;
      } else {
        // console.log("A coordinate has been repeated");
        return randomPlayerCode();
      }
      ;

      // if(usedNumbers2.includes(playerCodeValue)){
      //   console.log("retry")
      //   randomPlayerCode();
      // }else{
      //   usedNumbers2.push(playerCodeValue);
      //   console.log("players code= "+ playerCodeValue);
      //   return playerCodeValue;
      // }
    }
    ;
    let computerAttack = document.querySelector(`[data-code= "${randomPlayerCode()}"]`);
    console.log(computerAttack);

    // let scoreboardText= document.querySelector(".scoreboard-text");
    /////////////////////////////////////////////////
    if (computerAttack.getAttribute("class").includes("selected")) {
      // computerAttack.classList.add("hit");
      setTimeout(() => {
        computerAttack.classList.add("hit");
      }, 6000);
      // computerAttack.textContent = "X";
      setTimeout(() => {
        computerAttack.textContent = "X";
      }, 6000);
      playerTotalTally++;
    } else {
      // computerAttack.classList.add("missed");
      setTimeout(() => {
        computerAttack.classList.add("missed");
      }, 6000);
      // scoreboardText.textContent="Swing and a miss!";
      setTimeout(() => {
        scoreboardComputerText.textContent = "Computer attacked and missed!";
      }, 6000);
    }
    if (computerAttack.getAttribute("class").includes("player-patrol-boat") && playerPatrolBoatTally === 1) {
      // setTimeout((()=>{console.log("HIT! your Patrol Boat has been sank")}), 100);
      setTimeout(() => {
        scoreboardComputerText.textContent = "HIT! your Patrol Boat has been sank";
      }, 6000);
    } else if (computerAttack.getAttribute("class").includes("player-patrol-boat") && playerPatrolBoatTally < 1) {
      setTimeout(() => {
        scoreboardComputerText.textContent = "Your Patrol Boat has been HIT!";
      }, 6000);
      playerPatrolBoatTally++;
    }
    ;
    if (computerAttack.getAttribute("class").includes("player-submarine") && playerSubmarineTally === 2) {
      // setTimeout((()=>{console.log("HIT! your Submarine has been sank")}), 100);
      setTimeout(() => {
        scoreboardComputerText.textContent = "HIT! your Submarine has been sank";
      }, 6000);
    } else if (computerAttack.getAttribute("class").includes("player-submarine") && playerSubmarineTally < 2) {
      setTimeout(() => {
        scoreboardComputerText.textContent = "Your Submarine has been HIT!";
      }, 6000);
      playerSubmarineTally++;
    }
    ;
    if (computerAttack.getAttribute("class").includes("player-destroyer") && playerDestroyerTally === 2) {
      // setTimeout((()=>{console.log("HIT! your Destroyer has been sank")}), 100);
      setTimeout(() => {
        scoreboardComputerText.textContent = "HIT! your Destroyer has been sank";
      }, 6000);
    } else if (computerAttack.getAttribute("class").includes("player-destroyer") && playerDestroyerTally < 2) {
      setTimeout(() => {
        scoreboardComputerText.textContent = "Your Destroyer has been HIT!";
      }, 6000);
      playerDestroyerTally++;
    }
    ;
    if (computerAttack.getAttribute("class").includes("player-battleship") && playerBattleshipTally === 3) {
      // setTimeout((()=>{console.log("HIT! your Battleship has been sank")}), 100);
      setTimeout(() => {
        scoreboardComputerText.textContent = "HIT! the computer SUNK YOUR BATTLESHIP!";
      }, 6000);
    } else if (computerAttack.getAttribute("class").includes("player-battleship") && playerBattleshipTally < 3) {
      setTimeout(() => {
        scoreboardComputerText.textContent = "Your Battleship has been HIT!";
      }, 6000);
      playerBattleshipTally++;
    }
    ;
    if (computerAttack.getAttribute("class").includes("player-carrier") && playerCarrierTally === 4) {
      // setTimeout((()=>{console.log("HIT! your Carrier has been sank")}), 100);
      setTimeout(() => {
        scoreboardComputerText.textContent = "HIT! your Carrier has been sank";
      }, 6000);
    } else if (computerAttack.getAttribute("class").includes("player-carrier") && playerCarrierTally < 4) {
      setTimeout(() => {
        scoreboardComputerText.textContent = "Your Carrier has been HIT!";
      }, 6000);
      playerCarrierTally++;
    }
    ;
    if (playerTotalTally === 17) {
      setTimeout(() => {
        console.log("You Lost!");
      }, 6000);
      setTimeout(lose, 6000);
    }
    console.log("players Total tally= " + playerTotalTally);
    console.log("players patrol boat tally= " + playerPatrolBoatTally);
    console.log("players submarine tally= " + playerSubmarineTally);
    console.log("players destroyer tally= " + playerDestroyerTally);
    console.log("players battleship tally= " + playerBattleshipTally);
    console.log("players carrier tally= " + playerCarrierTally);

    /////////////////////////////////////////////////
    // computerAttack.classList.add("clicked");
    setTimeout(() => {
      computerAttack.classList.add("player-cell-targeted");
    }, 4000);
    setTimeout(() => {
      overlay.classList.remove("show");
    }, 6000);

    // overlayForResults.classList.add("active");
    // winBanner.classList.add("active");
    // return;

    // overlayForResults.classList.add("active");
    // loseBanner.classList.add("active");
    // return;
  });
});

console.log(patrolBoatComputer);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFFL0YsU0FBU0ssVUFBVUEsQ0FBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7RUFDcEIsT0FBT0QsQ0FBQyxHQUFDQyxDQUFDO0FBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQSxNQUFNUCxRQUFRLEdBQUlRLElBQUksSUFBS0EsSUFBSTtBQUUvQixNQUFNUCxVQUFVO0VBQ1pRLFdBQVdBLENBQUNDLE1BQU0sRUFBRUMsUUFBUSxFQUErQjtJQUFBLElBQTdCQyxXQUFXLEdBQUFDLFNBQUEsQ0FBQUgsTUFBQSxRQUFBRyxTQUFBLFFBQUFDLFNBQUEsR0FBQUQsU0FBQSxNQUFDLENBQUM7SUFBQSxJQUFFRSxPQUFPLEdBQUFGLFNBQUEsQ0FBQUgsTUFBQSxRQUFBRyxTQUFBLFFBQUFDLFNBQUEsR0FBQUQsU0FBQSxNQUFDLEtBQUs7SUFDdEQsSUFBSSxDQUFDSCxNQUFNLEdBQUVBLE1BQU07SUFDbkIsSUFBSSxDQUFDRSxXQUFXLEdBQUVBLFdBQVc7SUFDN0IsSUFBSSxDQUFDRyxPQUFPLEdBQUVBLE9BQU87SUFDckIsSUFBSSxDQUFDSixRQUFRLEdBQUNBLFFBQVE7RUFDMUI7QUFDSjtBQUFDO0FBRUQsTUFBTVQsR0FBRyxHQUFFUyxRQUFRLElBQUtBLFFBQVEsQ0FBQ0MsV0FBVyxFQUFFO0FBRTlDLE1BQU1ULE1BQU0sR0FBR1EsUUFBUSxJQUFLQSxRQUFRLENBQUNELE1BQU0sS0FBR0MsUUFBUSxDQUFDQyxXQUFXLEdBQUksSUFBSSxHQUFHLEtBQUs7QUFFbEYsTUFBTVIsU0FBUztFQUNYSyxXQUFXQSxDQUFBLEVBQUU7SUFDVCxJQUFJLENBQUNPLFdBQVcsR0FBRztJQUNqQjtJQUNBLENBQ0U7TUFBRUMsUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxDQUN0RztJQUNEO0lBQ0EsQ0FDRTtNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLENBQ3RHO0lBQ0Q7SUFDQSxDQUNFO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsQ0FDdEc7SUFDRDtJQUNBLENBQ0U7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxDQUN0RztJQUNEO0lBQ0EsQ0FDRTtNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLENBQ3RHO0lBQ0Q7SUFDQSxDQUNFO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsQ0FDdEc7SUFDRDtJQUNBLENBQ0U7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxDQUN0RztJQUNEO0lBQ0EsQ0FDRTtNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLENBQ3RHO0lBQ0Q7SUFDQSxDQUNFO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsQ0FDdEc7SUFDRDtJQUNBLENBQ0U7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVD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QWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFVBQVUsTUFBTSxVQUFVLFlBQVksbURBQW1ELE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLFFBQVEsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxRQUFRLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxzQkFBc0IsdUJBQXVCLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssc0JBQXNCLHVCQUF1QixNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsb0RBQW9ELDJCQUEyQixHQUFHLGVBQWUscUJBQXFCLGdCQUFnQixrQ0FBa0Msc0dBQXNHLEdBQUcsU0FBUyw2QkFBNkIsb0NBQW9DLHNFQUFzRSw2QkFBNkIsMEJBQTBCLEdBQUcsa0JBQWtCLHNCQUFzQixpQkFBaUIsZ0JBQWdCLG9CQUFvQixpQkFBaUIsSUFBSSxtQkFBbUIscUJBQXFCLDRDQUE0Qyx3REFBd0QsZ0RBQWdELCtCQUErQixzQkFBc0IsZ0NBQWdDLGdCQUFnQixvQkFBb0IsYUFBYSxjQUFjLHFDQUFxQyx5QkFBeUIsR0FBRyxxQkFBcUIsb0JBQW9CLFdBQVcsWUFBWSxhQUFhLGNBQWMsb0dBQW9HLHlCQUF5QixrQkFBa0IsZUFBZSxHQUFHLHFCQUFxQixXQUFXLGtEQUFrRCxXQUFXLGtEQUFrRCxXQUFXLGtEQUFrRCxXQUFXLGtEQUFrRCxXQUFXLGtEQUFrRCxXQUFXLGtEQUFrRCxXQUFXLGtEQUFrRCxHQUFHLGtCQUFrQix3Q0FBd0Msa0NBQWtDLEdBQUcsaUNBQWlDLFNBQVMsa0JBQWtCLHlCQUF5QiwyQkFBMkIsS0FBSyxJQUFJLGNBQWMsb0JBQW9CLDhCQUE4QiwwQkFBMEIsd0JBQXdCLDJCQUEyQixtQkFBbUIsaUNBQWlDLDZCQUE2QixvQkFBb0IsMEJBQTBCLEdBQUcsV0FBVyxrQkFBa0IsMkJBQTJCLEdBQUcsb0JBQW9CLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixHQUFHLG1CQUFtQixxQkFBcUIsbUJBQW1CLEdBQUcsd0ZBQXdGLHdCQUF3QixvQkFBb0Isc0JBQXNCLEdBQUcsaUJBQWlCLDRCQUE0QixHQUFHLCtEQUErRCxxQkFBcUIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLEdBQUcsZ0RBQWdELGtCQUFrQiw0QkFBNEIsd0JBQXdCLG9CQUFvQixnQkFBZ0IsR0FBRyxTQUFTLHdCQUF3QiwyQkFBMkIsZ0JBQWdCLEdBQUcsV0FBVyw2QkFBNkIsR0FBRyxnQkFBZ0Isd0JBQXdCLEdBQUcsc0JBQXNCLDBCQUEwQixtQ0FBbUMsOEJBQThCLHdDQUF3QyxtQ0FBbUMsR0FBRyw0QkFBNEIsVUFBVSx1QkFBdUIsUUFBUSx5QkFBeUIsR0FBRyx1Q0FBdUMsdUJBQXVCLEdBQUcseUJBQXlCLHVCQUF1QixHQUFHLG9CQUFvQixlQUFlLGlCQUFpQixxQkFBcUIsMkNBQTJDLDRCQUE0QixzQkFBc0IsMkJBQTJCLHVCQUF1QixhQUFhLGNBQWMscUNBQXFDLGdCQUFnQixrQkFBa0IsK0JBQStCLGlDQUFpQyxHQUFHLFFBQVEsa0JBQWtCLEdBQUcsY0FBYyxpQkFBaUIsR0FBRyxZQUFZLDRCQUE0QixHQUFHLHFCQUFxQixnQ0FBZ0Msb0JBQW9CLEdBQUcsb0JBQW9CLDZCQUE2QixvQkFBb0IsR0FBRywwQkFBMEIsMEJBQTBCLDJDQUEyQyw4QkFBOEIsaUNBQWlDLG1DQUFtQyxHQUFHLG9DQUFvQyxVQUFVLDBCQUEwQixRQUFRLHVCQUF1QixHQUFHLHdCQUF3QiwwQkFBMEIsMkNBQTJDLDhCQUE4QixpQ0FBaUMsbUNBQW1DLEdBQUcsT0FBTywwQkFBMEIsdUJBQXVCLG1DQUFtQyxtQ0FBbUMsS0FBSyxVQUFVLDJCQUEyQixHQUFHLFlBQVksb0JBQW9CLFdBQVcsWUFBWSxhQUFhLGNBQWMseUNBQXlDLHlCQUF5QixlQUFlLHNCQUFzQixHQUFHLGdCQUFnQixlQUFlLHdCQUF3QixHQUFHLG9CQUFvQixzQkFBc0IseUJBQXlCLEdBQUcsc0JBQXNCLGtCQUFrQixrQ0FBa0Msc0JBQXNCLHlCQUF5QixxQkFBcUIsY0FBYywwQkFBMEIsd0JBQXdCLHdFQUF3RSwwQkFBMEIsOENBQThDLGdDQUFnQyx3Q0FBd0MsOENBQThDLGFBQWEsR0FBRyxzQkFBc0IsZ0NBQWdDLElBQUksOEJBQThCLHNCQUFzQixHQUFHLFFBQVEseUJBQXlCLHVCQUF1QixjQUFjLGdDQUFnQyxnQkFBZ0Isc0JBQXNCLGlDQUFpQyxHQUFHLFlBQVkseUJBQXlCLEdBQUcseUJBQXlCLG9CQUFvQixXQUFXLFlBQVksYUFBYSxjQUFjLHFDQUFxQyx5QkFBeUIsZUFBZSxzQkFBc0IsR0FBRyxnQ0FBZ0MsZUFBZSx3QkFBd0IsR0FBRywrQkFBK0Isb0JBQW9CLGVBQWUsYUFBYSxjQUFjLDhDQUE4QyxpQkFBaUIsa0JBQWtCLGVBQWUsNEJBQTRCLHlCQUF5QixrQkFBa0IsMkJBQTJCLHdCQUF3QixrQ0FBa0MsR0FBRyw2Q0FBNkMsOENBQThDLEdBQUcsZ0JBQWdCLGdDQUFnQyxHQUFHLGVBQWUsdUNBQXVDLEdBQUcsd0JBQXdCLG9CQUFvQixHQUFHLDJCQUEyQixvQkFBb0IseUJBQXlCLEdBQUcsU0FBUyxrQkFBa0Isd0JBQXdCLEdBQUcsU0FBUyx3QkFBd0IseUJBQXlCLEdBQUcsbUJBQW1CO0FBQy83Z0I7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFPd0I7QUFDeUI7O0FBR3RFO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUlHLGNBQWMsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsa0JBQWtCLENBQUM7QUFDL0QsSUFBSUMsc0JBQXNCLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLDJCQUEyQixDQUFDO0FBRWhGLE1BQU1FLFNBQVMsR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDO0FBQ3ZELE1BQU1HLFVBQVUsR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsbUJBQW1CLENBQUM7QUFFOUQsTUFBTUksb0JBQW9CLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0FBQ3RFLE1BQU1LLHNCQUFzQixHQUFHTixRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztBQUMxRSxNQUFNTSxlQUFlLEdBQUdQLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBQ2hFTSxlQUFlLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztBQUN0QyxNQUFNQyxJQUFJLEdBQUdWLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztBQUc1Q0csVUFBVSxDQUFDTyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUdDLENBQUMsSUFBSztFQUMzQ0EsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUNsQixJQUFJbkMsSUFBSSxHQUFHa0MsQ0FBQyxDQUFDRSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxLQUFLO0VBQ3ZDWixTQUFTLENBQUNhLFdBQVcsR0FBR3RDLElBQUk7RUFDNUIwQixVQUFVLENBQUNJLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztFQUNoQ0osb0JBQW9CLENBQUNHLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLE1BQU0sQ0FBQztFQUM3Q1gsc0JBQXNCLENBQUNFLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLE1BQU0sQ0FBQztFQUMvQ1AsSUFBSSxDQUFDRixTQUFTLENBQUNTLE1BQU0sQ0FBQyxNQUFNLENBQUM7RUFDN0JsQixjQUFjLENBQUNpQixXQUFXLEdBQUMsbUVBQW1FO0FBQ2hHLENBQUMsQ0FBQztBQUlGLElBQUlFLGlCQUFpQixHQUFHbEIsUUFBUSxDQUFDQyxhQUFhLENBQUMsc0JBQXNCLENBQUM7QUFDdEUsSUFBSWtCLFNBQVMsR0FBR25CLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQztBQUNyRCxJQUFJbUIsVUFBVSxHQUFHcEIsUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDO0FBRXZELFNBQVNvQixHQUFHQSxDQUFBLEVBQUU7RUFDWkgsaUJBQWlCLENBQUNWLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztFQUN6Q1UsU0FBUyxDQUFDWCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7RUFDakM7QUFDRjtBQUFDO0FBRUQsU0FBU2EsSUFBSUEsQ0FBQSxFQUFFO0VBQ2JKLGlCQUFpQixDQUFDVixTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7RUFDekNXLFVBQVUsQ0FBQ1osU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0VBQ2xDO0FBQ0Y7QUFBQztBQUdEQyxJQUFJLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBR0MsQ0FBQyxJQUFLO0VBQ3BDLE1BQU1XLE1BQU0sR0FBR1gsQ0FBQyxDQUFDRSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDVSxPQUFPLENBQUNELE1BQU07RUFDakQsTUFBTUUsTUFBTSxHQUFHYixDQUFDLENBQUNFLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNVLE9BQU8sQ0FBQ0MsTUFBTTtFQUVqRCxJQUFJRixNQUFNLEtBQUt2QyxTQUFTLEVBQUU7SUFDeEI7SUFDQTtFQUFBO0FBRUosQ0FBQyxDQUFDO0FBRUYsTUFBTTBDLFVBQVUsR0FBRzFCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGtCQUFrQixDQUFDO0FBQzdELE1BQU0wQixTQUFTLEdBQUczQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztBQUMxRCxNQUFNMkIsU0FBUyxHQUFHNUIsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFDMUQsTUFBTTRCLFVBQVUsR0FBRzdCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0FBQzVELE1BQU02QixPQUFPLEdBQUc5QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7QUFDdEQsTUFBTThCLFVBQVUsR0FBRy9CLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0FBQzVELE1BQU0rQixRQUFRLEdBQUdoQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUM7QUFFeEQsU0FBU2dDLDJCQUEyQkEsQ0FDbENDLFVBQVUsRUFFVjtFQUFBLElBREFDLE1BQU0sR0FBQXBELFNBQUEsQ0FBQUgsTUFBQSxRQUFBRyxTQUFBLFFBQUFDLFNBQUEsR0FBQUQsU0FBQSxNQUFHLENBQUMyQyxVQUFVLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sQ0FBQztFQUVoRUksVUFBVSxDQUFDMUIsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO0VBQ25DLElBQUkyQixhQUFhLEdBQUdELE1BQU0sQ0FBQ0UsTUFBTSxDQUFFQyxHQUFHLElBQUtBLEdBQUcsS0FBS0osVUFBVSxDQUFDO0VBQzlERSxhQUFhLENBQUNHLE9BQU8sQ0FBRUQsR0FBRyxJQUFLQSxHQUFHLENBQUM5QixTQUFTLENBQUNTLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNqRTtBQUVBLFNBQVN1Qiw2QkFBNkJBLENBQ3BDTixVQUFVLEVBRVY7RUFBQSxJQURBQyxNQUFNLEdBQUFwRCxTQUFBLENBQUFILE1BQUEsUUFBQUcsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBRyxDQUFDZ0QsVUFBVSxFQUFFQyxRQUFRLENBQUM7RUFFL0JFLFVBQVUsQ0FBQzFCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztFQUNuQyxJQUFJMkIsYUFBYSxHQUFHRCxNQUFNLENBQUNFLE1BQU0sQ0FBRUMsR0FBRyxJQUFLQSxHQUFHLEtBQUtKLFVBQVUsQ0FBQztFQUM5REUsYUFBYSxDQUFDRyxPQUFPLENBQUVELEdBQUcsSUFBS0EsR0FBRyxDQUFDOUIsU0FBUyxDQUFDUyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakU7QUFFQVMsVUFBVSxDQUFDZixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLENBQUMsSUFBSztFQUMxQzZCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDOUIsQ0FBQyxDQUFDRSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDVSxPQUFPLENBQUNtQixnQkFBZ0IsQ0FBQztFQUN6RFYsMkJBQTJCLENBQUNQLFVBQVUsQ0FBQztBQUN6QyxDQUFDLENBQUM7QUFFRkMsU0FBUyxDQUFDaEIsZ0JBQWdCLENBQUMsT0FBTyxFQUFHQyxDQUFDLElBQUs7RUFDekM2QixPQUFPLENBQUNDLEdBQUcsQ0FBQzlCLENBQUMsQ0FBQ0UsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ1UsT0FBTyxDQUFDb0IsZUFBZSxDQUFDO0VBQ3hEWCwyQkFBMkIsQ0FBQ04sU0FBUyxDQUFDO0FBQ3hDLENBQUMsQ0FBQztBQUVGQyxTQUFTLENBQUNqQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLENBQUMsSUFBSztFQUN6QzZCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDOUIsQ0FBQyxDQUFDRSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDVSxPQUFPLENBQUNxQixlQUFlLENBQUM7RUFDeERaLDJCQUEyQixDQUFDTCxTQUFTLENBQUM7QUFDeEMsQ0FBQyxDQUFDO0FBRUZDLFVBQVUsQ0FBQ2xCLGdCQUFnQixDQUFDLE9BQU8sRUFBR0MsQ0FBQyxJQUFLO0VBQzFDNkIsT0FBTyxDQUFDQyxHQUFHLENBQUM5QixDQUFDLENBQUNFLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNVLE9BQU8sQ0FBQ3NCLGdCQUFnQixDQUFDO0VBQ3pEYiwyQkFBMkIsQ0FBQ0osVUFBVSxDQUFDO0FBQ3pDLENBQUMsQ0FBQztBQUVGQyxPQUFPLENBQUNuQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLENBQUMsSUFBSztFQUN2QzZCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDOUIsQ0FBQyxDQUFDRSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDVSxPQUFPLENBQUN1QixhQUFhLENBQUM7RUFDdERkLDJCQUEyQixDQUFDSCxPQUFPLENBQUM7QUFDdEMsQ0FBQyxDQUFDO0FBRUZDLFVBQVUsQ0FBQ3BCLGdCQUFnQixDQUFDLE9BQU8sRUFBR0MsQ0FBQyxJQUFLO0VBQzFDNkIsT0FBTyxDQUFDQyxHQUFHLENBQUM5QixDQUFDLENBQUNFLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNVLE9BQU8sQ0FBQ3dCLGVBQWUsQ0FBQztFQUN4RFIsNkJBQTZCLENBQUNULFVBQVUsQ0FBQztBQUMzQyxDQUFDLENBQUM7QUFFRkMsUUFBUSxDQUFDckIsZ0JBQWdCLENBQUMsT0FBTyxFQUFHQyxDQUFDLElBQUs7RUFDeEM2QixPQUFPLENBQUNDLEdBQUcsQ0FBQzlCLENBQUMsQ0FBQ0UsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ1UsT0FBTyxDQUFDd0IsZUFBZSxDQUFDO0VBQ3hEUiw2QkFBNkIsQ0FBQ1IsUUFBUSxDQUFDO0FBQ3pDLENBQUMsQ0FBQzs7QUFFRjtBQUNBLE1BQU1pQixjQUFjLEdBQUdqRCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztBQUNsRSxNQUFNaUQsVUFBVSxHQUFHbEQsUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDO0FBRXpEaUQsVUFBVSxDQUFDdkMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLE1BQU07RUFDOUMsSUFDRyxDQUFDZSxVQUFVLENBQUN5QixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFDcEQsQ0FBQ3pCLFNBQVMsQ0FBQ3dCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUNwRCxDQUFDeEIsU0FBUyxDQUFDdUIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQ3BELENBQUN2QixVQUFVLENBQUNzQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFDckQsQ0FBQ3RCLE9BQU8sQ0FBQ3FCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUNuRCxDQUFDckIsVUFBVSxDQUFDb0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQ3BELENBQUNwQixRQUFRLENBQUNtQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxTQUFTLENBQUUsRUFDdEQ7SUFDQTtJQUNBO0lBQ0FILGNBQWMsQ0FBQ3pDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNwQ3lDLFVBQVUsQ0FBQzFDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztFQUN4QztBQUNGLENBQUMsQ0FBQzs7QUFFRjtBQUNBLE1BQU00QyxLQUFLLEdBQUdyRCxRQUFRLENBQUNzRCxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7QUFFdkRELEtBQUssQ0FBQ2QsT0FBTyxDQUFFZ0IsSUFBSSxJQUNqQkEsSUFBSSxDQUFDNUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLE1BQU07RUFDdkMsTUFBTTZDLElBQUksR0FBR0MsTUFBTSxDQUFDRixJQUFJLENBQUMvQixPQUFPLENBQUNELE1BQU0sQ0FBQztFQUN4QyxNQUFNbUMsSUFBSSxHQUFHRCxNQUFNLENBQUNGLElBQUksQ0FBQy9CLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDO0VBRXhDLE1BQU1rQyxvQkFBb0IsR0FBRzNELFFBQVEsQ0FBQ0MsYUFBYSxDQUNoRCxnQkFBZXVELElBQUksR0FBRyxDQUFFLEdBQUVFLElBQUssSUFDbEMsQ0FBQztFQUNELE1BQU1FLG9CQUFvQixHQUFHNUQsUUFBUSxDQUFDQyxhQUFhLENBQ2hELGdCQUFldUQsSUFBSSxHQUFHLENBQUUsR0FBRUUsSUFBSyxJQUNsQyxDQUFDO0VBQ0QsTUFBTUcsb0JBQW9CLEdBQUc3RCxRQUFRLENBQUNDLGFBQWEsQ0FDaEQsZ0JBQWV1RCxJQUFJLEdBQUcsQ0FBRSxHQUFFRSxJQUFLLElBQ2xDLENBQUM7RUFDRCxNQUFNSSxvQkFBb0IsR0FBRzlELFFBQVEsQ0FBQ0MsYUFBYSxDQUNoRCxnQkFBZXVELElBQUksR0FBRyxDQUFFLEdBQUVFLElBQUssSUFDbEMsQ0FBQztFQUVELE1BQU1LLGtCQUFrQixHQUFHL0QsUUFBUSxDQUFDQyxhQUFhLENBQzlDLGdCQUFldUQsSUFBSyxHQUFFRSxJQUFJLEdBQUcsQ0FBRSxJQUNsQyxDQUFDO0VBQ0QsTUFBTU0sa0JBQWtCLEdBQUdoRSxRQUFRLENBQUNDLGFBQWEsQ0FDOUMsZ0JBQWV1RCxJQUFLLEdBQUVFLElBQUksR0FBRyxDQUFFLElBQ2xDLENBQUM7RUFDRCxNQUFNTyxrQkFBa0IsR0FBR2pFLFFBQVEsQ0FBQ0MsYUFBYSxDQUM5QyxnQkFBZXVELElBQUssR0FBRUUsSUFBSSxHQUFHLENBQUUsSUFDbEMsQ0FBQztFQUNELE1BQU1RLGtCQUFrQixHQUFHbEUsUUFBUSxDQUFDQyxhQUFhLENBQzlDLGdCQUFldUQsSUFBSyxHQUFFRSxJQUFJLEdBQUcsQ0FBRSxJQUNsQyxDQUFDO0VBRUQsSUFDRWhDLFVBQVUsQ0FBQ3lCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUNwRHJCLFVBQVUsQ0FBQ29CLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUNwRDtJQUNBLElBQUlPLG9CQUFvQixFQUFFO01BQ3hCQSxvQkFBb0IsQ0FBQ25ELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztNQUM3QzhDLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUMvQjtJQUNBLElBQUksQ0FBQ2tELG9CQUFvQixFQUFFO01BQ3pCSixJQUFJLENBQUMvQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztNQUN4Q0MsSUFBSSxDQUFDRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDcEM7SUFDQSxJQUFJOEMsSUFBSSxDQUFDSixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtNQUNuREcsSUFBSSxDQUFDL0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7TUFDeENDLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQ3BDO0lBQ0EsSUFDRWtELG9CQUFvQixJQUNwQkEsb0JBQW9CLENBQUNSLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUMvRDtNQUNBTyxvQkFBb0IsQ0FBQ25ELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3hEQyxJQUFJLENBQUNGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUNwQztFQUNGO0VBRUEsSUFDRWlCLFVBQVUsQ0FBQ3lCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUNwRHBCLFFBQVEsQ0FBQ21CLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUNsRDtJQUNBLElBQUlXLGtCQUFrQixFQUFFO01BQ3RCQSxrQkFBa0IsQ0FBQ3ZELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztNQUMzQzhDLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUMvQjtJQUNBLElBQUksQ0FBQ3NELGtCQUFrQixFQUFFO01BQ3ZCUixJQUFJLENBQUMvQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztNQUN4Q0MsSUFBSSxDQUFDRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDcEM7SUFDQSxJQUFJOEMsSUFBSSxDQUFDSixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtNQUNuREcsSUFBSSxDQUFDL0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7TUFDeENDLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQ3BDO0lBQ0EsSUFDRXNELGtCQUFrQixJQUNsQkEsa0JBQWtCLENBQUNaLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUM3RDtNQUNBVyxrQkFBa0IsQ0FBQ3ZELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3REQyxJQUFJLENBQUNGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUNwQztFQUNGO0VBRUEsSUFDRWtCLFNBQVMsQ0FBQ3dCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUNuRHJCLFVBQVUsQ0FBQ29CLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUNwRDtJQUNBLElBQUlPLG9CQUFvQixJQUFJQyxvQkFBb0IsRUFBRTtNQUNoREEsb0JBQW9CLENBQUNwRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7TUFDN0NrRCxvQkFBb0IsQ0FBQ25ELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztNQUM3QzhDLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUMvQjtJQUNBLElBQUlrRCxvQkFBb0IsSUFBSSxDQUFDQyxvQkFBb0IsRUFBRTtNQUNqREQsb0JBQW9CLENBQUNuRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztNQUN4RDhDLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3hDQyxJQUFJLENBQUNGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUNwQztJQUNBLElBQUksQ0FBQ2tELG9CQUFvQixJQUFJLENBQUNDLG9CQUFvQixFQUFFO01BQ2xETCxJQUFJLENBQUMvQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztNQUN4Q0MsSUFBSSxDQUFDRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDcEM7SUFDQSxJQUFJOEMsSUFBSSxDQUFDSixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtNQUNuREcsSUFBSSxDQUFDL0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7TUFDeENDLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQ3BDO0lBQ0EsSUFDRWtELG9CQUFvQixJQUNwQkEsb0JBQW9CLENBQUNSLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUMvRDtNQUNBTyxvQkFBb0IsQ0FBQ25ELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3hEQyxJQUFJLENBQUNGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUNwQztJQUNBLElBQ0VtRCxvQkFBb0IsSUFDcEJBLG9CQUFvQixDQUFDVCxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFDL0Q7TUFDQVEsb0JBQW9CLENBQUNwRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztNQUN4REMsSUFBSSxDQUFDRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDcEM7RUFDRjtFQUVBLElBQ0VrQixTQUFTLENBQUN3QixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFDbkRwQixRQUFRLENBQUNtQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFDbEQ7SUFDQSxJQUFJVyxrQkFBa0IsSUFBSUMsa0JBQWtCLEVBQUU7TUFDNUNBLGtCQUFrQixDQUFDeEQsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO01BQzNDc0Qsa0JBQWtCLENBQUN2RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7TUFDM0M4QyxJQUFJLENBQUMvQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFDL0I7SUFDQSxJQUFJc0Qsa0JBQWtCLElBQUksQ0FBQ0Msa0JBQWtCLEVBQUU7TUFDN0NELGtCQUFrQixDQUFDdkQsU0FBUyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7TUFDdEQ4QyxJQUFJLENBQUMvQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztNQUN4Q0MsSUFBSSxDQUFDRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDcEM7SUFDQSxJQUFJLENBQUNzRCxrQkFBa0IsSUFBSSxDQUFDQyxrQkFBa0IsRUFBRTtNQUM5Q1QsSUFBSSxDQUFDL0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7TUFDeENDLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQ3BDO0lBQ0EsSUFBSThDLElBQUksQ0FBQ0osWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7TUFDbkRHLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3hDQyxJQUFJLENBQUNGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUNwQztJQUNBLElBQ0VzRCxrQkFBa0IsSUFDbEJBLGtCQUFrQixDQUFDWixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFDN0Q7TUFDQVcsa0JBQWtCLENBQUN2RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztNQUN0REMsSUFBSSxDQUFDRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDcEM7SUFDQSxJQUNFdUQsa0JBQWtCLElBQ2xCQSxrQkFBa0IsQ0FBQ2IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQzdEO01BQ0FZLGtCQUFrQixDQUFDeEQsU0FBUyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7TUFDdERDLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQ3BDO0VBQ0Y7RUFFQSxJQUNFbUIsU0FBUyxDQUFDdUIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQ25EckIsVUFBVSxDQUFDb0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQ3BEO0lBQ0EsSUFBSU8sb0JBQW9CLElBQUlDLG9CQUFvQixFQUFFO01BQ2hEQSxvQkFBb0IsQ0FBQ3BELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztNQUM3Q2tELG9CQUFvQixDQUFDbkQsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO01BQzdDOEMsSUFBSSxDQUFDL0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBQy9CO0lBQ0EsSUFBSWtELG9CQUFvQixJQUFJLENBQUNDLG9CQUFvQixFQUFFO01BQ2pERCxvQkFBb0IsQ0FBQ25ELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3hEOEMsSUFBSSxDQUFDL0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7TUFDeENDLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQ3BDO0lBQ0EsSUFBSSxDQUFDa0Qsb0JBQW9CLElBQUksQ0FBQ0Msb0JBQW9CLEVBQUU7TUFDbERMLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3hDQyxJQUFJLENBQUNGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUNwQztJQUNBLElBQUk4QyxJQUFJLENBQUNKLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO01BQ25ERyxJQUFJLENBQUMvQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztNQUN4Q0MsSUFBSSxDQUFDRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDcEM7SUFDQSxJQUNFa0Qsb0JBQW9CLElBQ3BCQSxvQkFBb0IsQ0FBQ1IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQy9EO01BQ0FPLG9CQUFvQixDQUFDbkQsU0FBUyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7TUFDeERDLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQ3BDO0lBQ0EsSUFDRW1ELG9CQUFvQixJQUNwQkEsb0JBQW9CLENBQUNULFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUMvRDtNQUNBUSxvQkFBb0IsQ0FBQ3BELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3hEQyxJQUFJLENBQUNGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUNwQztFQUNGO0VBRUEsSUFDRW1CLFNBQVMsQ0FBQ3VCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUNuRHBCLFFBQVEsQ0FBQ21CLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUNsRDtJQUNBLElBQUlXLGtCQUFrQixJQUFJQyxrQkFBa0IsRUFBRTtNQUM1Q0Esa0JBQWtCLENBQUN4RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7TUFDM0NzRCxrQkFBa0IsQ0FBQ3ZELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztNQUMzQzhDLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUMvQjtJQUNBLElBQUlzRCxrQkFBa0IsSUFBSSxDQUFDQyxrQkFBa0IsRUFBRTtNQUM3Q0Qsa0JBQWtCLENBQUN2RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztNQUN0RDhDLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3hDQyxJQUFJLENBQUNGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUNwQztJQUNBLElBQUksQ0FBQ3NELGtCQUFrQixJQUFJLENBQUNDLGtCQUFrQixFQUFFO01BQzlDVCxJQUFJLENBQUMvQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztNQUN4Q0MsSUFBSSxDQUFDRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDcEM7SUFDQSxJQUFJOEMsSUFBSSxDQUFDSixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtNQUNuREcsSUFBSSxDQUFDL0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7TUFDeENDLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQ3BDO0lBQ0EsSUFDRXNELGtCQUFrQixJQUNsQkEsa0JBQWtCLENBQUNaLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUM3RDtNQUNBVyxrQkFBa0IsQ0FBQ3ZELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3REQyxJQUFJLENBQUNGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUNwQztJQUNBLElBQ0V1RCxrQkFBa0IsSUFDbEJBLGtCQUFrQixDQUFDYixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFDN0Q7TUFDQVksa0JBQWtCLENBQUN4RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztNQUN0REMsSUFBSSxDQUFDRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDcEM7RUFDRjtFQUVBLElBQ0VvQixVQUFVLENBQUNzQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFDcERyQixVQUFVLENBQUNvQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFDcEQ7SUFDQSxJQUNFTyxvQkFBb0IsSUFDcEJDLG9CQUFvQixJQUNwQkMsb0JBQW9CLEVBQ3BCO01BQ0FBLG9CQUFvQixDQUFDckQsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO01BQzdDbUQsb0JBQW9CLENBQUNwRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7TUFDN0NrRCxvQkFBb0IsQ0FBQ25ELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztNQUM3QzhDLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUMvQjtJQUNBLElBQ0VrRCxvQkFBb0IsSUFDcEJDLG9CQUFvQixJQUNwQixDQUFDQyxvQkFBb0IsRUFDckI7TUFDQUQsb0JBQW9CLENBQUNwRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztNQUN4RGtELG9CQUFvQixDQUFDbkQsU0FBUyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7TUFDeEQ4QyxJQUFJLENBQUMvQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztNQUN4Q0MsSUFBSSxDQUFDRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDcEM7SUFDQSxJQUNFa0Qsb0JBQW9CLElBQ3BCLENBQUNDLG9CQUFvQixJQUNyQixDQUFDQyxvQkFBb0IsRUFDckI7TUFDQUYsb0JBQW9CLENBQUNuRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztNQUN4RDhDLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3hDQyxJQUFJLENBQUNGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUNwQztJQUNBLElBQ0UsQ0FBQ2tELG9CQUFvQixJQUNyQixDQUFDQyxvQkFBb0IsSUFDckIsQ0FBQ0Msb0JBQW9CLEVBQ3JCO01BQ0FOLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3hDQyxJQUFJLENBQUNGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUNwQztJQUNBLElBQUk4QyxJQUFJLENBQUNKLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO01BQ25ERyxJQUFJLENBQUMvQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztNQUN4Q0MsSUFBSSxDQUFDRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDcEM7SUFDQSxJQUNFa0Qsb0JBQW9CLElBQ3BCQSxvQkFBb0IsQ0FBQ1IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQy9EO01BQ0FPLG9CQUFvQixDQUFDbkQsU0FBUyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7TUFDeERDLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQ3BDO0lBQ0EsSUFDRW1ELG9CQUFvQixJQUNwQkEsb0JBQW9CLENBQUNULFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUMvRDtNQUNBUSxvQkFBb0IsQ0FBQ3BELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3hEQyxJQUFJLENBQUNGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUNwQztJQUNBLElBQ0VvRCxvQkFBb0IsSUFDcEJBLG9CQUFvQixDQUFDVixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFDL0Q7TUFDQVMsb0JBQW9CLENBQUNyRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztNQUN4REMsSUFBSSxDQUFDRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDcEM7RUFDRjtFQUVBLElBQ0VvQixVQUFVLENBQUNzQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFDcERwQixRQUFRLENBQUNtQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFDbEQ7SUFDQSxJQUFJVyxrQkFBa0IsSUFBSUMsa0JBQWtCLElBQUlDLGtCQUFrQixFQUFFO01BQ2xFQSxrQkFBa0IsQ0FBQ3pELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztNQUMzQ3VELGtCQUFrQixDQUFDeEQsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO01BQzNDc0Qsa0JBQWtCLENBQUN2RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7TUFDM0M4QyxJQUFJLENBQUMvQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFDL0I7SUFDQSxJQUFJc0Qsa0JBQWtCLElBQUlDLGtCQUFrQixJQUFJLENBQUNDLGtCQUFrQixFQUFFO01BQ25FRCxrQkFBa0IsQ0FBQ3hELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3REc0Qsa0JBQWtCLENBQUN2RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztNQUN0RDhDLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3hDQyxJQUFJLENBQUNGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUNwQztJQUNBLElBQUlzRCxrQkFBa0IsSUFBSSxDQUFDQyxrQkFBa0IsSUFBSSxDQUFDQyxrQkFBa0IsRUFBRTtNQUNwRUYsa0JBQWtCLENBQUN2RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztNQUN0RDhDLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3hDQyxJQUFJLENBQUNGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUNwQztJQUNBLElBQUksQ0FBQ3NELGtCQUFrQixJQUFJLENBQUNDLGtCQUFrQixJQUFJLENBQUNDLGtCQUFrQixFQUFFO01BQ3JFVixJQUFJLENBQUMvQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztNQUN4Q0MsSUFBSSxDQUFDRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDcEM7SUFDQSxJQUFJOEMsSUFBSSxDQUFDSixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtNQUNuREcsSUFBSSxDQUFDL0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7TUFDeENDLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQ3BDO0lBQ0EsSUFDRXNELGtCQUFrQixJQUNsQkEsa0JBQWtCLENBQUNaLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUM3RDtNQUNBVyxrQkFBa0IsQ0FBQ3ZELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3REQyxJQUFJLENBQUNGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUNwQztJQUNBLElBQ0V1RCxrQkFBa0IsSUFDbEJBLGtCQUFrQixDQUFDYixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFDN0Q7TUFDQVksa0JBQWtCLENBQUN4RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztNQUN0REMsSUFBSSxDQUFDRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDcEM7SUFDQSxJQUNFd0Qsa0JBQWtCLElBQ2xCQSxrQkFBa0IsQ0FBQ2QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQzdEO01BQ0FhLGtCQUFrQixDQUFDekQsU0FBUyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7TUFDdERDLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQ3BDO0VBQ0Y7RUFFQSxJQUNFcUIsT0FBTyxDQUFDcUIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQ2pEckIsVUFBVSxDQUFDb0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQ3BEO0lBQ0EsSUFDRU8sb0JBQW9CLElBQ3BCQyxvQkFBb0IsSUFDcEJDLG9CQUFvQixJQUNwQkMsb0JBQW9CLEVBQ3BCO01BQ0FBLG9CQUFvQixDQUFDdEQsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO01BQzdDb0Qsb0JBQW9CLENBQUNyRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7TUFDN0NtRCxvQkFBb0IsQ0FBQ3BELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztNQUM3Q2tELG9CQUFvQixDQUFDbkQsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO01BQzdDOEMsSUFBSSxDQUFDL0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBQy9CO0lBQ0EsSUFDRWtELG9CQUFvQixJQUNwQkMsb0JBQW9CLElBQ3BCQyxvQkFBb0IsSUFDcEIsQ0FBQ0Msb0JBQW9CLEVBQ3JCO01BQ0FELG9CQUFvQixDQUFDckQsU0FBUyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7TUFDeERtRCxvQkFBb0IsQ0FBQ3BELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3hEa0Qsb0JBQW9CLENBQUNuRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztNQUN4RDhDLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3hDQyxJQUFJLENBQUNGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUNwQztJQUNBLElBQ0VrRCxvQkFBb0IsSUFDcEJDLG9CQUFvQixJQUNwQixDQUFDQyxvQkFBb0IsSUFDckIsQ0FBQ0Msb0JBQW9CLEVBQ3JCO01BQ0FGLG9CQUFvQixDQUFDcEQsU0FBUyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7TUFDeERrRCxvQkFBb0IsQ0FBQ25ELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3hEOEMsSUFBSSxDQUFDL0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7TUFDeENDLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQ3BDO0lBQ0EsSUFDRWtELG9CQUFvQixJQUNwQixDQUFDQyxvQkFBb0IsSUFDckIsQ0FBQ0Msb0JBQW9CLElBQ3JCLENBQUNDLG9CQUFvQixFQUNyQjtNQUNBSCxvQkFBb0IsQ0FBQ25ELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3hEOEMsSUFBSSxDQUFDL0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7TUFDeENDLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQ3BDO0lBQ0EsSUFDRSxDQUFDa0Qsb0JBQW9CLElBQ3JCLENBQUNDLG9CQUFvQixJQUNyQixDQUFDQyxvQkFBb0IsSUFDckIsQ0FBQ0Msb0JBQW9CLEVBQ3JCO01BQ0FQLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3hDQyxJQUFJLENBQUNGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUNwQztJQUNBLElBQUk4QyxJQUFJLENBQUNKLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO01BQ25ERyxJQUFJLENBQUMvQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztNQUN4Q0MsSUFBSSxDQUFDRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDcEM7SUFDQSxJQUNFa0Qsb0JBQW9CLElBQ3BCQSxvQkFBb0IsQ0FBQ1IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQy9EO01BQ0FPLG9CQUFvQixDQUFDbkQsU0FBUyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7TUFDeERDLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQ3BDO0lBQ0EsSUFDRW1ELG9CQUFvQixJQUNwQkEsb0JBQW9CLENBQUNULFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUMvRDtNQUNBUSxvQkFBb0IsQ0FBQ3BELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3hEQyxJQUFJLENBQUNGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUNwQztJQUNBLElBQ0VvRCxvQkFBb0IsSUFDcEJBLG9CQUFvQixDQUFDVixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFDL0Q7TUFDQVMsb0JBQW9CLENBQUNyRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztNQUN4REMsSUFBSSxDQUFDRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDcEM7SUFDQSxJQUNFcUQsb0JBQW9CLElBQ3BCQSxvQkFBb0IsQ0FBQ1gsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQy9EO01BQ0FVLG9CQUFvQixDQUFDdEQsU0FBUyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7TUFDeERDLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQ3BDO0VBQ0Y7RUFFQSxJQUNFcUIsT0FBTyxDQUFDcUIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQ2pEcEIsUUFBUSxDQUFDbUIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQ2xEO0lBQ0EsSUFDRVcsa0JBQWtCLElBQ2xCQyxrQkFBa0IsSUFDbEJDLGtCQUFrQixJQUNsQkMsa0JBQWtCLEVBQ2xCO01BQ0FBLGtCQUFrQixDQUFDMUQsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO01BQzNDd0Qsa0JBQWtCLENBQUN6RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7TUFDM0N1RCxrQkFBa0IsQ0FBQ3hELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztNQUMzQ3NELGtCQUFrQixDQUFDdkQsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO01BQzNDOEMsSUFBSSxDQUFDL0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBQy9CO0lBQ0EsSUFDRXNELGtCQUFrQixJQUNsQkMsa0JBQWtCLElBQ2xCQyxrQkFBa0IsSUFDbEIsQ0FBQ0Msa0JBQWtCLEVBQ25CO01BQ0FELGtCQUFrQixDQUFDekQsU0FBUyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7TUFDdER1RCxrQkFBa0IsQ0FBQ3hELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3REc0Qsa0JBQWtCLENBQUN2RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztNQUN0RDhDLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3hDQyxJQUFJLENBQUNGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUNwQztJQUNBLElBQ0VzRCxrQkFBa0IsSUFDbEJDLGtCQUFrQixJQUNsQixDQUFDQyxrQkFBa0IsSUFDbkIsQ0FBQ0Msa0JBQWtCLEVBQ25CO01BQ0FGLGtCQUFrQixDQUFDeEQsU0FBUyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7TUFDdERzRCxrQkFBa0IsQ0FBQ3ZELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3REOEMsSUFBSSxDQUFDL0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7TUFDeENDLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQ3BDO0lBQ0EsSUFDRXNELGtCQUFrQixJQUNsQixDQUFDQyxrQkFBa0IsSUFDbkIsQ0FBQ0Msa0JBQWtCLElBQ25CLENBQUNDLGtCQUFrQixFQUNuQjtNQUNBSCxrQkFBa0IsQ0FBQ3ZELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3REOEMsSUFBSSxDQUFDL0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7TUFDeENDLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQ3BDO0lBQ0EsSUFDRSxDQUFDc0Qsa0JBQWtCLElBQ25CLENBQUNDLGtCQUFrQixJQUNuQixDQUFDQyxrQkFBa0IsSUFDbkIsQ0FBQ0Msa0JBQWtCLEVBQ25CO01BQ0FYLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3hDQyxJQUFJLENBQUNGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUNwQztJQUNBLElBQUk4QyxJQUFJLENBQUNKLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO01BQ25ERyxJQUFJLENBQUMvQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztNQUN4Q0MsSUFBSSxDQUFDRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDcEM7SUFDQSxJQUNFc0Qsa0JBQWtCLElBQ2xCQSxrQkFBa0IsQ0FBQ1osWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQzdEO01BQ0FXLGtCQUFrQixDQUFDdkQsU0FBUyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7TUFDdERDLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQ3BDO0lBQ0EsSUFDRXVELGtCQUFrQixJQUNsQkEsa0JBQWtCLENBQUNiLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUM3RDtNQUNBWSxrQkFBa0IsQ0FBQ3hELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3REQyxJQUFJLENBQUNGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUNwQztJQUNBLElBQ0V3RCxrQkFBa0IsSUFDbEJBLGtCQUFrQixDQUFDZCxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFDN0Q7TUFDQWEsa0JBQWtCLENBQUN6RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztNQUN0REMsSUFBSSxDQUFDRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDcEM7SUFDQSxJQUNFeUQsa0JBQWtCLElBQ2xCQSxrQkFBa0IsQ0FBQ2YsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQzdEO01BQ0FjLGtCQUFrQixDQUFDMUQsU0FBUyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7TUFDdERDLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQ3BDO0VBQ0Y7QUFDRixDQUFDLENBQ0gsQ0FBQztBQUVEeUMsVUFBVSxDQUFDdkMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLE1BQU07RUFDOUMsSUFDRyxDQUFDZSxVQUFVLENBQUN5QixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFDcEQsQ0FBQ3pCLFNBQVMsQ0FBQ3dCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUNwRCxDQUFDeEIsU0FBUyxDQUFDdUIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQ3BELENBQUN2QixVQUFVLENBQUNzQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFDckQsQ0FBQ3RCLE9BQU8sQ0FBQ3FCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUNuRCxDQUFDckIsVUFBVSxDQUFDb0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQ3BELENBQUNwQixRQUFRLENBQUNtQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxTQUFTLENBQUUsRUFDdEQ7SUFDQTtJQUNBO0lBQ0FILGNBQWMsQ0FBQ3pDLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUN2Q2lDLFVBQVUsQ0FBQzFDLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLFlBQVksQ0FBQztFQUMzQztBQUNGLENBQUMsQ0FBQztBQUVGb0MsS0FBSyxDQUFDZCxPQUFPLENBQUVnQixJQUFJLElBQ2pCQSxJQUFJLENBQUM1QyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsTUFBTTtFQUN0QyxNQUFNNkMsSUFBSSxHQUFHQyxNQUFNLENBQUNGLElBQUksQ0FBQy9CLE9BQU8sQ0FBQ0QsTUFBTSxDQUFDO0VBQ3hDLE1BQU1tQyxJQUFJLEdBQUdELE1BQU0sQ0FBQ0YsSUFBSSxDQUFDL0IsT0FBTyxDQUFDQyxNQUFNLENBQUM7RUFFeEMsTUFBTWtDLG9CQUFvQixHQUFHM0QsUUFBUSxDQUFDQyxhQUFhLENBQ2hELGdCQUFldUQsSUFBSSxHQUFHLENBQUUsR0FBRUUsSUFBSyxJQUNsQyxDQUFDO0VBQ0QsTUFBTUUsb0JBQW9CLEdBQUc1RCxRQUFRLENBQUNDLGFBQWEsQ0FDaEQsZ0JBQWV1RCxJQUFJLEdBQUcsQ0FBRSxHQUFFRSxJQUFLLElBQ2xDLENBQUM7RUFDRCxNQUFNRyxvQkFBb0IsR0FBRzdELFFBQVEsQ0FBQ0MsYUFBYSxDQUNoRCxnQkFBZXVELElBQUksR0FBRyxDQUFFLEdBQUVFLElBQUssSUFDbEMsQ0FBQztFQUNELE1BQU1JLG9CQUFvQixHQUFHOUQsUUFBUSxDQUFDQyxhQUFhLENBQ2hELGdCQUFldUQsSUFBSSxHQUFHLENBQUUsR0FBRUUsSUFBSyxJQUNsQyxDQUFDO0VBRUQsTUFBTUssa0JBQWtCLEdBQUcvRCxRQUFRLENBQUNDLGFBQWEsQ0FDOUMsZ0JBQWV1RCxJQUFLLEdBQUVFLElBQUksR0FBRyxDQUFFLElBQ2xDLENBQUM7RUFDRCxNQUFNTSxrQkFBa0IsR0FBR2hFLFFBQVEsQ0FBQ0MsYUFBYSxDQUM5QyxnQkFBZXVELElBQUssR0FBRUUsSUFBSSxHQUFHLENBQUUsSUFDbEMsQ0FBQztFQUNELE1BQU1PLGtCQUFrQixHQUFHakUsUUFBUSxDQUFDQyxhQUFhLENBQzlDLGdCQUFldUQsSUFBSyxHQUFFRSxJQUFJLEdBQUcsQ0FBRSxJQUNsQyxDQUFDO0VBQ0QsTUFBTVEsa0JBQWtCLEdBQUdsRSxRQUFRLENBQUNDLGFBQWEsQ0FDOUMsZ0JBQWV1RCxJQUFLLEdBQUVFLElBQUksR0FBRyxDQUFFLElBQ2xDLENBQUM7RUFFRCxJQUNFaEMsVUFBVSxDQUFDeUIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQ3BEckIsVUFBVSxDQUFDb0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQ3BEO0lBQ0EsSUFBSU8sb0JBQW9CLEVBQUU7TUFDeEJBLG9CQUFvQixDQUFDbkQsU0FBUyxDQUFDUyxNQUFNLENBQUMsU0FBUyxDQUFDO01BQ2hEc0MsSUFBSSxDQUFDL0MsU0FBUyxDQUFDUyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ2xDO0lBQ0EsSUFBSSxDQUFDMEMsb0JBQW9CLEVBQUU7TUFDekJKLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLG9CQUFvQixDQUFDO01BQzNDUCxJQUFJLENBQUNGLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUN2QztJQUNBLElBQUlzQyxJQUFJLENBQUNKLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO01BQ25ERyxJQUFJLENBQUMvQyxTQUFTLENBQUNTLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztNQUMzQ1AsSUFBSSxDQUFDRixTQUFTLENBQUNTLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDdkM7SUFDQSxJQUNFMEMsb0JBQW9CLElBQ3BCQSxvQkFBb0IsQ0FBQ1IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQy9EO01BQ0FPLG9CQUFvQixDQUFDbkQsU0FBUyxDQUFDUyxNQUFNLENBQUMsb0JBQW9CLENBQUM7TUFDM0RQLElBQUksQ0FBQ0YsU0FBUyxDQUFDUyxNQUFNLENBQUMsY0FBYyxDQUFDO0lBQ3ZDO0VBQ0Y7RUFFQSxJQUNFUyxVQUFVLENBQUN5QixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFDcERwQixRQUFRLENBQUNtQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFDbEQ7SUFDQSxJQUFJVyxrQkFBa0IsRUFBRTtNQUN0QkEsa0JBQWtCLENBQUN2RCxTQUFTLENBQUNTLE1BQU0sQ0FBQyxTQUFTLENBQUM7TUFDOUNzQyxJQUFJLENBQUMvQyxTQUFTLENBQUNTLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDbEM7SUFDQSxJQUFJLENBQUM4QyxrQkFBa0IsRUFBRTtNQUN2QlIsSUFBSSxDQUFDL0MsU0FBUyxDQUFDUyxNQUFNLENBQUMsb0JBQW9CLENBQUM7TUFDM0NQLElBQUksQ0FBQ0YsU0FBUyxDQUFDUyxNQUFNLENBQUMsY0FBYyxDQUFDO0lBQ3ZDO0lBQ0EsSUFBSXNDLElBQUksQ0FBQ0osWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7TUFDbkRHLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLG9CQUFvQixDQUFDO01BQzNDUCxJQUFJLENBQUNGLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUN2QztJQUNBLElBQ0U4QyxrQkFBa0IsSUFDbEJBLGtCQUFrQixDQUFDWixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFDN0Q7TUFDQVcsa0JBQWtCLENBQUN2RCxTQUFTLENBQUNTLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztNQUN6RFAsSUFBSSxDQUFDRixTQUFTLENBQUNTLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDdkM7RUFDRjtFQUVBLElBQ0VVLFNBQVMsQ0FBQ3dCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUNuRHJCLFVBQVUsQ0FBQ29CLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUNwRDtJQUNBLElBQUlPLG9CQUFvQixJQUFJQyxvQkFBb0IsRUFBRTtNQUNoREEsb0JBQW9CLENBQUNwRCxTQUFTLENBQUNTLE1BQU0sQ0FBQyxTQUFTLENBQUM7TUFDaEQwQyxvQkFBb0IsQ0FBQ25ELFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLFNBQVMsQ0FBQztNQUNoRHNDLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNsQztJQUNBLElBQUkwQyxvQkFBb0IsSUFBSSxDQUFDQyxvQkFBb0IsRUFBRTtNQUNqREQsb0JBQW9CLENBQUNuRCxTQUFTLENBQUNTLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztNQUMzRHNDLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLG9CQUFvQixDQUFDO01BQzNDUCxJQUFJLENBQUNGLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUN2QztJQUNBLElBQUksQ0FBQzBDLG9CQUFvQixJQUFJLENBQUNDLG9CQUFvQixFQUFFO01BQ2xETCxJQUFJLENBQUMvQyxTQUFTLENBQUNTLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztNQUMzQ1AsSUFBSSxDQUFDRixTQUFTLENBQUNTLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDdkM7SUFDQSxJQUFJc0MsSUFBSSxDQUFDSixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtNQUNuREcsSUFBSSxDQUFDL0MsU0FBUyxDQUFDUyxNQUFNLENBQUMsb0JBQW9CLENBQUM7TUFDM0NQLElBQUksQ0FBQ0YsU0FBUyxDQUFDUyxNQUFNLENBQUMsY0FBYyxDQUFDO0lBQ3ZDO0lBQ0EsSUFDRTBDLG9CQUFvQixJQUNwQkEsb0JBQW9CLENBQUNSLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUMvRDtNQUNBTyxvQkFBb0IsQ0FBQ25ELFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLG9CQUFvQixDQUFDO01BQzNEUCxJQUFJLENBQUNGLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUN2QztJQUNBLElBQ0UyQyxvQkFBb0IsSUFDcEJBLG9CQUFvQixDQUFDVCxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFDL0Q7TUFDQVEsb0JBQW9CLENBQUNwRCxTQUFTLENBQUNTLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztNQUMzRFAsSUFBSSxDQUFDRixTQUFTLENBQUNTLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDdkM7RUFDRjtFQUVBLElBQ0VVLFNBQVMsQ0FBQ3dCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUNuRHBCLFFBQVEsQ0FBQ21CLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUNsRDtJQUNBLElBQUlXLGtCQUFrQixJQUFJQyxrQkFBa0IsRUFBRTtNQUM1Q0Esa0JBQWtCLENBQUN4RCxTQUFTLENBQUNTLE1BQU0sQ0FBQyxTQUFTLENBQUM7TUFDOUM4QyxrQkFBa0IsQ0FBQ3ZELFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLFNBQVMsQ0FBQztNQUM5Q3NDLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNsQztJQUNBLElBQUk4QyxrQkFBa0IsSUFBSSxDQUFDQyxrQkFBa0IsRUFBRTtNQUM3Q0Qsa0JBQWtCLENBQUN2RCxTQUFTLENBQUNTLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztNQUN6RHNDLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLG9CQUFvQixDQUFDO01BQzNDUCxJQUFJLENBQUNGLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUN2QztJQUNBLElBQUksQ0FBQzhDLGtCQUFrQixJQUFJLENBQUNDLGtCQUFrQixFQUFFO01BQzlDVCxJQUFJLENBQUMvQyxTQUFTLENBQUNTLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztNQUMzQ1AsSUFBSSxDQUFDRixTQUFTLENBQUNTLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDdkM7SUFDQSxJQUFJc0MsSUFBSSxDQUFDSixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtNQUNuREcsSUFBSSxDQUFDL0MsU0FBUyxDQUFDUyxNQUFNLENBQUMsb0JBQW9CLENBQUM7TUFDM0NQLElBQUksQ0FBQ0YsU0FBUyxDQUFDUyxNQUFNLENBQUMsY0FBYyxDQUFDO0lBQ3ZDO0lBQ0EsSUFDRThDLGtCQUFrQixJQUNsQkEsa0JBQWtCLENBQUNaLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUM3RDtNQUNBVyxrQkFBa0IsQ0FBQ3ZELFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLG9CQUFvQixDQUFDO01BQ3pEUCxJQUFJLENBQUNGLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUN2QztJQUNBLElBQ0UrQyxrQkFBa0IsSUFDbEJBLGtCQUFrQixDQUFDYixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFDN0Q7TUFDQVksa0JBQWtCLENBQUN4RCxTQUFTLENBQUNTLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztNQUN6RFAsSUFBSSxDQUFDRixTQUFTLENBQUNTLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDdkM7RUFDRjtFQUVBLElBQ0VXLFNBQVMsQ0FBQ3VCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUNuRHJCLFVBQVUsQ0FBQ29CLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUNwRDtJQUNBLElBQUlPLG9CQUFvQixJQUFJQyxvQkFBb0IsRUFBRTtNQUNoREEsb0JBQW9CLENBQUNwRCxTQUFTLENBQUNTLE1BQU0sQ0FBQyxTQUFTLENBQUM7TUFDaEQwQyxvQkFBb0IsQ0FBQ25ELFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLFNBQVMsQ0FBQztNQUNoRHNDLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNsQztJQUNBLElBQUkwQyxvQkFBb0IsSUFBSSxDQUFDQyxvQkFBb0IsRUFBRTtNQUNqREQsb0JBQW9CLENBQUNuRCxTQUFTLENBQUNTLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztNQUMzRHNDLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLG9CQUFvQixDQUFDO01BQzNDUCxJQUFJLENBQUNGLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUN2QztJQUNBLElBQUksQ0FBQzBDLG9CQUFvQixJQUFJLENBQUNDLG9CQUFvQixFQUFFO01BQ2xETCxJQUFJLENBQUMvQyxTQUFTLENBQUNTLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztNQUMzQ1AsSUFBSSxDQUFDRixTQUFTLENBQUNTLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDdkM7SUFDQSxJQUFJc0MsSUFBSSxDQUFDSixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtNQUNuREcsSUFBSSxDQUFDL0MsU0FBUyxDQUFDUyxNQUFNLENBQUMsb0JBQW9CLENBQUM7TUFDM0NQLElBQUksQ0FBQ0YsU0FBUyxDQUFDUyxNQUFNLENBQUMsY0FBYyxDQUFDO0lBQ3ZDO0lBQ0EsSUFDRTBDLG9CQUFvQixJQUNwQkEsb0JBQW9CLENBQUNSLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUMvRDtNQUNBTyxvQkFBb0IsQ0FBQ25ELFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLG9CQUFvQixDQUFDO01BQzNEUCxJQUFJLENBQUNGLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUN2QztJQUNBLElBQ0UyQyxvQkFBb0IsSUFDcEJBLG9CQUFvQixDQUFDVCxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFDL0Q7TUFDQVEsb0JBQW9CLENBQUNwRCxTQUFTLENBQUNTLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztNQUMzRFAsSUFBSSxDQUFDRixTQUFTLENBQUNTLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDdkM7RUFDRjtFQUVBLElBQ0VXLFNBQVMsQ0FBQ3VCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUNuRHBCLFFBQVEsQ0FBQ21CLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUNsRDtJQUNBLElBQUlXLGtCQUFrQixJQUFJQyxrQkFBa0IsRUFBRTtNQUM1Q0Esa0JBQWtCLENBQUN4RCxTQUFTLENBQUNTLE1BQU0sQ0FBQyxTQUFTLENBQUM7TUFDOUM4QyxrQkFBa0IsQ0FBQ3ZELFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLFNBQVMsQ0FBQztNQUM5Q3NDLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNsQztJQUNBLElBQUk4QyxrQkFBa0IsSUFBSSxDQUFDQyxrQkFBa0IsRUFBRTtNQUM3Q0Qsa0JBQWtCLENBQUN2RCxTQUFTLENBQUNTLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztNQUN6RHNDLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLG9CQUFvQixDQUFDO01BQzNDUCxJQUFJLENBQUNGLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUN2QztJQUNBLElBQUksQ0FBQzhDLGtCQUFrQixJQUFJLENBQUNDLGtCQUFrQixFQUFFO01BQzlDVCxJQUFJLENBQUMvQyxTQUFTLENBQUNTLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztNQUMzQ1AsSUFBSSxDQUFDRixTQUFTLENBQUNTLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDdkM7SUFDQSxJQUFJc0MsSUFBSSxDQUFDSixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtNQUNuREcsSUFBSSxDQUFDL0MsU0FBUyxDQUFDUyxNQUFNLENBQUMsb0JBQW9CLENBQUM7TUFDM0NQLElBQUksQ0FBQ0YsU0FBUyxDQUFDUyxNQUFNLENBQUMsY0FBYyxDQUFDO0lBQ3ZDO0lBQ0EsSUFDRThDLGtCQUFrQixJQUNsQkEsa0JBQWtCLENBQUNaLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUM3RDtNQUNBVyxrQkFBa0IsQ0FBQ3ZELFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLG9CQUFvQixDQUFDO01BQ3pEUCxJQUFJLENBQUNGLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUN2QztJQUNBLElBQ0UrQyxrQkFBa0IsSUFDbEJBLGtCQUFrQixDQUFDYixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFDN0Q7TUFDQVksa0JBQWtCLENBQUN4RCxTQUFTLENBQUNTLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztNQUN6RFAsSUFBSSxDQUFDRixTQUFTLENBQUNTLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDdkM7RUFDRjtFQUVBLElBQ0VZLFVBQVUsQ0FBQ3NCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUNwRHJCLFVBQVUsQ0FBQ29CLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUNwRDtJQUNBLElBQ0VPLG9CQUFvQixJQUNwQkMsb0JBQW9CLElBQ3BCQyxvQkFBb0IsRUFDcEI7TUFDQUEsb0JBQW9CLENBQUNyRCxTQUFTLENBQUNTLE1BQU0sQ0FBQyxTQUFTLENBQUM7TUFDaEQyQyxvQkFBb0IsQ0FBQ3BELFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLFNBQVMsQ0FBQztNQUNoRDBDLG9CQUFvQixDQUFDbkQsU0FBUyxDQUFDUyxNQUFNLENBQUMsU0FBUyxDQUFDO01BQ2hEc0MsSUFBSSxDQUFDL0MsU0FBUyxDQUFDUyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ2xDO0lBQ0EsSUFDRTBDLG9CQUFvQixJQUNwQkMsb0JBQW9CLElBQ3BCLENBQUNDLG9CQUFvQixFQUNyQjtNQUNBRCxvQkFBb0IsQ0FBQ3BELFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLG9CQUFvQixDQUFDO01BQzNEMEMsb0JBQW9CLENBQUNuRCxTQUFTLENBQUNTLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztNQUMzRHNDLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLG9CQUFvQixDQUFDO01BQzNDUCxJQUFJLENBQUNGLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUN2QztJQUNBLElBQ0UwQyxvQkFBb0IsSUFDcEIsQ0FBQ0Msb0JBQW9CLElBQ3JCLENBQUNDLG9CQUFvQixFQUNyQjtNQUNBRixvQkFBb0IsQ0FBQ25ELFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLG9CQUFvQixDQUFDO01BQzNEc0MsSUFBSSxDQUFDL0MsU0FBUyxDQUFDUyxNQUFNLENBQUMsb0JBQW9CLENBQUM7TUFDM0NQLElBQUksQ0FBQ0YsU0FBUyxDQUFDUyxNQUFNLENBQUMsY0FBYyxDQUFDO0lBQ3ZDO0lBQ0EsSUFDRSxDQUFDMEMsb0JBQW9CLElBQ3JCLENBQUNDLG9CQUFvQixJQUNyQixDQUFDQyxvQkFBb0IsRUFDckI7TUFDQU4sSUFBSSxDQUFDL0MsU0FBUyxDQUFDUyxNQUFNLENBQUMsb0JBQW9CLENBQUM7TUFDM0NQLElBQUksQ0FBQ0YsU0FBUyxDQUFDUyxNQUFNLENBQUMsY0FBYyxDQUFDO0lBQ3ZDO0lBQ0EsSUFBSXNDLElBQUksQ0FBQ0osWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7TUFDbkRHLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLG9CQUFvQixDQUFDO01BQzNDUCxJQUFJLENBQUNGLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUN2QztJQUNBLElBQ0UwQyxvQkFBb0IsSUFDcEJBLG9CQUFvQixDQUFDUixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFDL0Q7TUFDQU8sb0JBQW9CLENBQUNuRCxTQUFTLENBQUNTLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztNQUMzRFAsSUFBSSxDQUFDRixTQUFTLENBQUNTLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDdkM7SUFDQSxJQUNFMkMsb0JBQW9CLElBQ3BCQSxvQkFBb0IsQ0FBQ1QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQy9EO01BQ0FRLG9CQUFvQixDQUFDcEQsU0FBUyxDQUFDUyxNQUFNLENBQUMsb0JBQW9CLENBQUM7TUFDM0RQLElBQUksQ0FBQ0YsU0FBUyxDQUFDUyxNQUFNLENBQUMsY0FBYyxDQUFDO0lBQ3ZDO0lBQ0EsSUFDRTRDLG9CQUFvQixJQUNwQkEsb0JBQW9CLENBQUNWLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUMvRDtNQUNBUyxvQkFBb0IsQ0FBQ3JELFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLG9CQUFvQixDQUFDO01BQzNEUCxJQUFJLENBQUNGLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUN2QztFQUNGO0VBRUEsSUFDRVksVUFBVSxDQUFDc0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQ3BEcEIsUUFBUSxDQUFDbUIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQ2xEO0lBQ0EsSUFBSVcsa0JBQWtCLElBQUlDLGtCQUFrQixJQUFJQyxrQkFBa0IsRUFBRTtNQUNsRUEsa0JBQWtCLENBQUN6RCxTQUFTLENBQUNTLE1BQU0sQ0FBQyxTQUFTLENBQUM7TUFDOUMrQyxrQkFBa0IsQ0FBQ3hELFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLFNBQVMsQ0FBQztNQUM5QzhDLGtCQUFrQixDQUFDdkQsU0FBUyxDQUFDUyxNQUFNLENBQUMsU0FBUyxDQUFDO01BQzlDc0MsSUFBSSxDQUFDL0MsU0FBUyxDQUFDUyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ2xDO0lBQ0EsSUFBSThDLGtCQUFrQixJQUFJQyxrQkFBa0IsSUFBSSxDQUFDQyxrQkFBa0IsRUFBRTtNQUNuRUQsa0JBQWtCLENBQUN4RCxTQUFTLENBQUNTLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztNQUN6RDhDLGtCQUFrQixDQUFDdkQsU0FBUyxDQUFDUyxNQUFNLENBQUMsb0JBQW9CLENBQUM7TUFDekRzQyxJQUFJLENBQUMvQyxTQUFTLENBQUNTLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztNQUMzQ1AsSUFBSSxDQUFDRixTQUFTLENBQUNTLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDdkM7SUFDQSxJQUFJOEMsa0JBQWtCLElBQUksQ0FBQ0Msa0JBQWtCLElBQUksQ0FBQ0Msa0JBQWtCLEVBQUU7TUFDcEVGLGtCQUFrQixDQUFDdkQsU0FBUyxDQUFDUyxNQUFNLENBQUMsb0JBQW9CLENBQUM7TUFDekRzQyxJQUFJLENBQUMvQyxTQUFTLENBQUNTLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztNQUMzQ1AsSUFBSSxDQUFDRixTQUFTLENBQUNTLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDdkM7SUFDQSxJQUFJLENBQUM4QyxrQkFBa0IsSUFBSSxDQUFDQyxrQkFBa0IsSUFBSSxDQUFDQyxrQkFBa0IsRUFBRTtNQUNyRVYsSUFBSSxDQUFDL0MsU0FBUyxDQUFDUyxNQUFNLENBQUMsb0JBQW9CLENBQUM7TUFDM0NQLElBQUksQ0FBQ0YsU0FBUyxDQUFDUyxNQUFNLENBQUMsY0FBYyxDQUFDO0lBQ3ZDO0lBQ0EsSUFBSXNDLElBQUksQ0FBQ0osWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7TUFDbkRHLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLG9CQUFvQixDQUFDO01BQzNDUCxJQUFJLENBQUNGLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUN2QztJQUNBLElBQ0U4QyxrQkFBa0IsSUFDbEJBLGtCQUFrQixDQUFDWixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFDN0Q7TUFDQVcsa0JBQWtCLENBQUN2RCxTQUFTLENBQUNTLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztNQUN6RFAsSUFBSSxDQUFDRixTQUFTLENBQUNTLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDdkM7SUFDQSxJQUNFK0Msa0JBQWtCLElBQ2xCQSxrQkFBa0IsQ0FBQ2IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQzdEO01BQ0FZLGtCQUFrQixDQUFDeEQsU0FBUyxDQUFDUyxNQUFNLENBQUMsb0JBQW9CLENBQUM7TUFDekRQLElBQUksQ0FBQ0YsU0FBUyxDQUFDUyxNQUFNLENBQUMsY0FBYyxDQUFDO0lBQ3ZDO0lBQ0EsSUFDRWdELGtCQUFrQixJQUNsQkEsa0JBQWtCLENBQUNkLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUM3RDtNQUNBYSxrQkFBa0IsQ0FBQ3pELFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLG9CQUFvQixDQUFDO01BQ3pEUCxJQUFJLENBQUNGLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUN2QztFQUNGO0VBRUEsSUFDRWEsT0FBTyxDQUFDcUIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQ2pEckIsVUFBVSxDQUFDb0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQ3BEO0lBQ0EsSUFDRU8sb0JBQW9CLElBQ3BCQyxvQkFBb0IsSUFDcEJDLG9CQUFvQixJQUNwQkMsb0JBQW9CLEVBQ3BCO01BQ0FBLG9CQUFvQixDQUFDdEQsU0FBUyxDQUFDUyxNQUFNLENBQUMsU0FBUyxDQUFDO01BQ2hENEMsb0JBQW9CLENBQUNyRCxTQUFTLENBQUNTLE1BQU0sQ0FBQyxTQUFTLENBQUM7TUFDaEQyQyxvQkFBb0IsQ0FBQ3BELFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLFNBQVMsQ0FBQztNQUNoRDBDLG9CQUFvQixDQUFDbkQsU0FBUyxDQUFDUyxNQUFNLENBQUMsU0FBUyxDQUFDO01BQ2hEc0MsSUFBSSxDQUFDL0MsU0FBUyxDQUFDUyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ2xDO0lBQ0EsSUFDRTBDLG9CQUFvQixJQUNwQkMsb0JBQW9CLElBQ3BCQyxvQkFBb0IsSUFDcEIsQ0FBQ0Msb0JBQW9CLEVBQ3JCO01BQ0FELG9CQUFvQixDQUFDckQsU0FBUyxDQUFDUyxNQUFNLENBQUMsb0JBQW9CLENBQUM7TUFDM0QyQyxvQkFBb0IsQ0FBQ3BELFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLG9CQUFvQixDQUFDO01BQzNEMEMsb0JBQW9CLENBQUNuRCxTQUFTLENBQUNTLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztNQUMzRHNDLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLG9CQUFvQixDQUFDO01BQzNDUCxJQUFJLENBQUNGLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUN2QztJQUNBLElBQ0UwQyxvQkFBb0IsSUFDcEJDLG9CQUFvQixJQUNwQixDQUFDQyxvQkFBb0IsSUFDckIsQ0FBQ0Msb0JBQW9CLEVBQ3JCO01BQ0FGLG9CQUFvQixDQUFDcEQsU0FBUyxDQUFDUyxNQUFNLENBQUMsb0JBQW9CLENBQUM7TUFDM0QwQyxvQkFBb0IsQ0FBQ25ELFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLG9CQUFvQixDQUFDO01BQzNEc0MsSUFBSSxDQUFDL0MsU0FBUyxDQUFDUyxNQUFNLENBQUMsb0JBQW9CLENBQUM7TUFDM0NQLElBQUksQ0FBQ0YsU0FBUyxDQUFDUyxNQUFNLENBQUMsY0FBYyxDQUFDO0lBQ3ZDO0lBQ0EsSUFDRTBDLG9CQUFvQixJQUNwQixDQUFDQyxvQkFBb0IsSUFDckIsQ0FBQ0Msb0JBQW9CLElBQ3JCLENBQUNDLG9CQUFvQixFQUNyQjtNQUNBSCxvQkFBb0IsQ0FBQ25ELFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLG9CQUFvQixDQUFDO01BQzNEc0MsSUFBSSxDQUFDL0MsU0FBUyxDQUFDUyxNQUFNLENBQUMsb0JBQW9CLENBQUM7TUFDM0NQLElBQUksQ0FBQ0YsU0FBUyxDQUFDUyxNQUFNLENBQUMsY0FBYyxDQUFDO0lBQ3ZDO0lBQ0EsSUFDRSxDQUFDMEMsb0JBQW9CLElBQ3JCLENBQUNDLG9CQUFvQixJQUNyQixDQUFDQyxvQkFBb0IsSUFDckIsQ0FBQ0Msb0JBQW9CLEVBQ3JCO01BQ0FQLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLG9CQUFvQixDQUFDO01BQzNDUCxJQUFJLENBQUNGLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUN2QztJQUNBLElBQUlzQyxJQUFJLENBQUNKLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO01BQ25ERyxJQUFJLENBQUMvQyxTQUFTLENBQUNTLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztNQUMzQ1AsSUFBSSxDQUFDRixTQUFTLENBQUNTLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDdkM7SUFDQSxJQUNFMEMsb0JBQW9CLElBQ3BCQSxvQkFBb0IsQ0FBQ1IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQy9EO01BQ0FPLG9CQUFvQixDQUFDbkQsU0FBUyxDQUFDUyxNQUFNLENBQUMsb0JBQW9CLENBQUM7TUFDM0RQLElBQUksQ0FBQ0YsU0FBUyxDQUFDUyxNQUFNLENBQUMsY0FBYyxDQUFDO0lBQ3ZDO0lBQ0EsSUFDRTJDLG9CQUFvQixJQUNwQkEsb0JBQW9CLENBQUNULFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUMvRDtNQUNBUSxvQkFBb0IsQ0FBQ3BELFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLG9CQUFvQixDQUFDO01BQzNEUCxJQUFJLENBQUNGLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUN2QztJQUNBLElBQ0U0QyxvQkFBb0IsSUFDcEJBLG9CQUFvQixDQUFDVixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFDL0Q7TUFDQVMsb0JBQW9CLENBQUNyRCxTQUFTLENBQUNTLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztNQUMzRFAsSUFBSSxDQUFDRixTQUFTLENBQUNTLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDdkM7SUFDQSxJQUNFNkMsb0JBQW9CLElBQ3BCQSxvQkFBb0IsQ0FBQ1gsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQy9EO01BQ0FVLG9CQUFvQixDQUFDdEQsU0FBUyxDQUFDUyxNQUFNLENBQUMsb0JBQW9CLENBQUM7TUFDM0RQLElBQUksQ0FBQ0YsU0FBUyxDQUFDUyxNQUFNLENBQUMsY0FBYyxDQUFDO0lBQ3ZDO0VBQ0Y7RUFFQSxJQUNFYSxPQUFPLENBQUNxQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFDakRwQixRQUFRLENBQUNtQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFDbEQ7SUFDQSxJQUNFVyxrQkFBa0IsSUFDbEJDLGtCQUFrQixJQUNsQkMsa0JBQWtCLElBQ2xCQyxrQkFBa0IsRUFDbEI7TUFDQUEsa0JBQWtCLENBQUMxRCxTQUFTLENBQUNTLE1BQU0sQ0FBQyxTQUFTLENBQUM7TUFDOUNnRCxrQkFBa0IsQ0FBQ3pELFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLFNBQVMsQ0FBQztNQUM5QytDLGtCQUFrQixDQUFDeEQsU0FBUyxDQUFDUyxNQUFNLENBQUMsU0FBUyxDQUFDO01BQzlDOEMsa0JBQWtCLENBQUN2RCxTQUFTLENBQUNTLE1BQU0sQ0FBQyxTQUFTLENBQUM7TUFDOUNzQyxJQUFJLENBQUMvQyxTQUFTLENBQUNTLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDbEM7SUFDQSxJQUNFOEMsa0JBQWtCLElBQ2xCQyxrQkFBa0IsSUFDbEJDLGtCQUFrQixJQUNsQixDQUFDQyxrQkFBa0IsRUFDbkI7TUFDQUQsa0JBQWtCLENBQUN6RCxTQUFTLENBQUNTLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztNQUN6RCtDLGtCQUFrQixDQUFDeEQsU0FBUyxDQUFDUyxNQUFNLENBQUMsb0JBQW9CLENBQUM7TUFDekQ4QyxrQkFBa0IsQ0FBQ3ZELFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLG9CQUFvQixDQUFDO01BQ3pEc0MsSUFBSSxDQUFDL0MsU0FBUyxDQUFDUyxNQUFNLENBQUMsb0JBQW9CLENBQUM7TUFDM0NQLElBQUksQ0FBQ0YsU0FBUyxDQUFDUyxNQUFNLENBQUMsY0FBYyxDQUFDO0lBQ3ZDO0lBQ0EsSUFDRThDLGtCQUFrQixJQUNsQkMsa0JBQWtCLElBQ2xCLENBQUNDLGtCQUFrQixJQUNuQixDQUFDQyxrQkFBa0IsRUFDbkI7TUFDQUYsa0JBQWtCLENBQUN4RCxTQUFTLENBQUNTLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztNQUN6RDhDLGtCQUFrQixDQUFDdkQsU0FBUyxDQUFDUyxNQUFNLENBQUMsb0JBQW9CLENBQUM7TUFDekRzQyxJQUFJLENBQUMvQyxTQUFTLENBQUNTLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztNQUMzQ1AsSUFBSSxDQUFDRixTQUFTLENBQUNTLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDdkM7SUFDQSxJQUNFOEMsa0JBQWtCLElBQ2xCLENBQUNDLGtCQUFrQixJQUNuQixDQUFDQyxrQkFBa0IsSUFDbkIsQ0FBQ0Msa0JBQWtCLEVBQ25CO01BQ0FILGtCQUFrQixDQUFDdkQsU0FBUyxDQUFDUyxNQUFNLENBQUMsb0JBQW9CLENBQUM7TUFDekRzQyxJQUFJLENBQUMvQyxTQUFTLENBQUNTLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztNQUMzQ1AsSUFBSSxDQUFDRixTQUFTLENBQUNTLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDdkM7SUFDQSxJQUNFLENBQUM4QyxrQkFBa0IsSUFDbkIsQ0FBQ0Msa0JBQWtCLElBQ25CLENBQUNDLGtCQUFrQixJQUNuQixDQUFDQyxrQkFBa0IsRUFDbkI7TUFDQVgsSUFBSSxDQUFDL0MsU0FBUyxDQUFDUyxNQUFNLENBQUMsb0JBQW9CLENBQUM7TUFDM0NQLElBQUksQ0FBQ0YsU0FBUyxDQUFDUyxNQUFNLENBQUMsY0FBYyxDQUFDO0lBQ3ZDO0lBQ0EsSUFBSXNDLElBQUksQ0FBQ0osWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7TUFDbkRHLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLG9CQUFvQixDQUFDO01BQzNDUCxJQUFJLENBQUNGLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUN2QztJQUNBLElBQ0U4QyxrQkFBa0IsSUFDbEJBLGtCQUFrQixDQUFDWixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFDN0Q7TUFDQVcsa0JBQWtCLENBQUN2RCxTQUFTLENBQUNTLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztNQUN6RFAsSUFBSSxDQUFDRixTQUFTLENBQUNTLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDdkM7SUFDQSxJQUNFK0Msa0JBQWtCLElBQ2xCQSxrQkFBa0IsQ0FBQ2IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQzdEO01BQ0FZLGtCQUFrQixDQUFDeEQsU0FBUyxDQUFDUyxNQUFNLENBQUMsb0JBQW9CLENBQUM7TUFDekRQLElBQUksQ0FBQ0YsU0FBUyxDQUFDUyxNQUFNLENBQUMsY0FBYyxDQUFDO0lBQ3ZDO0lBQ0EsSUFDRWdELGtCQUFrQixJQUNsQkEsa0JBQWtCLENBQUNkLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUM3RDtNQUNBYSxrQkFBa0IsQ0FBQ3pELFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLG9CQUFvQixDQUFDO01BQ3pEUCxJQUFJLENBQUNGLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUN2QztJQUNBLElBQ0VpRCxrQkFBa0IsSUFDbEJBLGtCQUFrQixDQUFDZixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFDN0Q7TUFDQWMsa0JBQWtCLENBQUMxRCxTQUFTLENBQUNTLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztNQUN6RFAsSUFBSSxDQUFDRixTQUFTLENBQUNTLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDdkM7RUFDRjtBQUNGLENBQUMsQ0FDSCxDQUFDO0FBRURvQyxLQUFLLENBQUNkLE9BQU8sQ0FBRWdCLElBQUksSUFDakJBLElBQUksQ0FBQzVDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO0VBQ25DLE1BQU02QyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0YsSUFBSSxDQUFDL0IsT0FBTyxDQUFDRCxNQUFNLENBQUM7RUFDeEMsTUFBTW1DLElBQUksR0FBR0QsTUFBTSxDQUFDRixJQUFJLENBQUMvQixPQUFPLENBQUNDLE1BQU0sQ0FBQztFQUV4QyxNQUFNa0Msb0JBQW9CLEdBQUczRCxRQUFRLENBQUNDLGFBQWEsQ0FDaEQsZ0JBQWV1RCxJQUFJLEdBQUcsQ0FBRSxHQUFFRSxJQUFLLElBQ2xDLENBQUM7RUFDRCxNQUFNRSxvQkFBb0IsR0FBRzVELFFBQVEsQ0FBQ0MsYUFBYSxDQUNoRCxnQkFBZXVELElBQUksR0FBRyxDQUFFLEdBQUVFLElBQUssSUFDbEMsQ0FBQztFQUNELE1BQU1HLG9CQUFvQixHQUFHN0QsUUFBUSxDQUFDQyxhQUFhLENBQ2hELGdCQUFldUQsSUFBSSxHQUFHLENBQUUsR0FBRUUsSUFBSyxJQUNsQyxDQUFDO0VBQ0QsTUFBTUksb0JBQW9CLEdBQUc5RCxRQUFRLENBQUNDLGFBQWEsQ0FDaEQsZ0JBQWV1RCxJQUFJLEdBQUcsQ0FBRSxHQUFFRSxJQUFLLElBQ2xDLENBQUM7RUFFRCxNQUFNSyxrQkFBa0IsR0FBRy9ELFFBQVEsQ0FBQ0MsYUFBYSxDQUM5QyxnQkFBZXVELElBQUssR0FBRUUsSUFBSSxHQUFHLENBQUUsSUFDbEMsQ0FBQztFQUNELE1BQU1NLGtCQUFrQixHQUFHaEUsUUFBUSxDQUFDQyxhQUFhLENBQzlDLGdCQUFldUQsSUFBSyxHQUFFRSxJQUFJLEdBQUcsQ0FBRSxJQUNsQyxDQUFDO0VBQ0QsTUFBTU8sa0JBQWtCLEdBQUdqRSxRQUFRLENBQUNDLGFBQWEsQ0FDOUMsZ0JBQWV1RCxJQUFLLEdBQUVFLElBQUksR0FBRyxDQUFFLElBQ2xDLENBQUM7RUFDRCxNQUFNUSxrQkFBa0IsR0FBR2xFLFFBQVEsQ0FBQ0MsYUFBYSxDQUM5QyxnQkFBZXVELElBQUssR0FBRUUsSUFBSSxHQUFHLENBQUUsSUFDbEMsQ0FBQztFQUVELElBQ0VoQyxVQUFVLENBQUN5QixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFDcERyQixVQUFVLENBQUNvQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFDcEQsQ0FBQzFDLElBQUksQ0FBQ3lDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUNwRDtJQUNBLElBQ0UsQ0FBQ0csSUFBSSxDQUFDSixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFDaEQsQ0FBQ08sb0JBQW9CLENBQUNSLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUNoRTtNQUNBMUIsVUFBVSxDQUFDbEIsU0FBUyxDQUFDUyxNQUFNLENBQUMsU0FBUyxDQUFDO01BQ3RDUyxVQUFVLENBQUN5QyxRQUFRLEdBQUcsSUFBSTtNQUMxQlosSUFBSSxDQUFDL0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO01BQzlCOEMsSUFBSSxDQUFDL0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7TUFDeENrRCxvQkFBb0IsQ0FBQ25ELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztNQUM5Q2tELG9CQUFvQixDQUFDbkQsU0FBUyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7SUFDMUQ7SUFDQSxJQUFLaUIsVUFBVSxDQUFDeUMsUUFBUSxLQUFLLElBQUksSUFBSXhDLFNBQVMsQ0FBQ3dDLFFBQVEsS0FBSyxJQUFLLElBQUd2QyxTQUFTLENBQUN1QyxRQUFRLEtBQUssSUFBSyxJQUFHdEMsVUFBVSxDQUFDc0MsUUFBUSxLQUFLLElBQUssSUFBR3JDLE9BQU8sQ0FBQ3FDLFFBQVEsS0FBSyxJQUFLLEVBQUU7TUFDN0oxQixPQUFPLENBQUNDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQztNQUM1Q3JDLG9CQUFvQixDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDMUNILHNCQUFzQixDQUFDRSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDNUN5QyxVQUFVLENBQUMxQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7TUFDcENGLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDUyxNQUFNLENBQUMsT0FBTyxDQUFDO01BQ3pDbEIsY0FBYyxDQUFDaUIsV0FBVyxHQUFHLFNBQVM7SUFDeEM7SUFBQztFQUNIO0VBRUEsSUFDRVUsVUFBVSxDQUFDeUIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQ3BEcEIsUUFBUSxDQUFDbUIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQ2xELENBQUMxQyxJQUFJLENBQUN5QyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFDcEQ7SUFDQSxJQUNFLENBQUNHLElBQUksQ0FBQ0osWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQ2hELENBQUNXLGtCQUFrQixDQUFDWixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFDOUQ7TUFDQTFCLFVBQVUsQ0FBQ2xCLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLFNBQVMsQ0FBQztNQUN0Q1MsVUFBVSxDQUFDeUMsUUFBUSxHQUFHLElBQUk7TUFDMUJaLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztNQUM5QjhDLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3hDc0Qsa0JBQWtCLENBQUN2RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7TUFDNUNzRCxrQkFBa0IsQ0FBQ3ZELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO0lBQ3hEO0lBQ0EsSUFDRWlCLFVBQVUsQ0FBQ3lDLFFBQVEsS0FBSyxJQUFJLElBQzVCeEMsU0FBUyxDQUFDd0MsUUFBUSxLQUFLLElBQUksSUFDM0J2QyxTQUFTLENBQUN1QyxRQUFRLEtBQUssSUFBSSxJQUMzQnRDLFVBQVUsQ0FBQ3NDLFFBQVEsS0FBSyxJQUFJLElBQzVCckMsT0FBTyxDQUFDcUMsUUFBUSxLQUFLLElBQUksRUFDekI7TUFDQTFCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLCtCQUErQixDQUFDO01BQzVDckMsb0JBQW9CLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztNQUMxQ0gsc0JBQXNCLENBQUNFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztNQUM1Q3lDLFVBQVUsQ0FBQzFDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztNQUNwQ0YsZUFBZSxDQUFDQyxTQUFTLENBQUNTLE1BQU0sQ0FBQyxPQUFPLENBQUM7TUFDekNsQixjQUFjLENBQUNpQixXQUFXLEdBQUcsU0FBUztJQUN4QztFQUNGO0VBRUEsSUFDRVcsU0FBUyxDQUFDd0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQ25EckIsVUFBVSxDQUFDb0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQ3BELENBQUMxQyxJQUFJLENBQUN5QyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFDcEQ7SUFDQSxJQUNFLENBQUNHLElBQUksQ0FBQ0osWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQ2hELENBQUNPLG9CQUFvQixDQUFDUixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFDaEUsQ0FBQ1Esb0JBQW9CLENBQUNULFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUNoRTtNQUNBekIsU0FBUyxDQUFDbkIsU0FBUyxDQUFDUyxNQUFNLENBQUMsU0FBUyxDQUFDO01BQ3JDVSxTQUFTLENBQUN3QyxRQUFRLEdBQUcsSUFBSTtNQUN6QlosSUFBSSxDQUFDL0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO01BQzlCOEMsSUFBSSxDQUFDL0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7TUFDdENrRCxvQkFBb0IsQ0FBQ25ELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztNQUM5Q2tELG9CQUFvQixDQUFDbkQsU0FBUyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7TUFDdERtRCxvQkFBb0IsQ0FBQ3BELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztNQUM5Q21ELG9CQUFvQixDQUFDcEQsU0FBUyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7SUFDeEQ7SUFDQSxJQUNFaUIsVUFBVSxDQUFDeUMsUUFBUSxLQUFLLElBQUksSUFDNUJ4QyxTQUFTLENBQUN3QyxRQUFRLEtBQUssSUFBSSxJQUMzQnZDLFNBQVMsQ0FBQ3VDLFFBQVEsS0FBSyxJQUFJLElBQzNCdEMsVUFBVSxDQUFDc0MsUUFBUSxLQUFLLElBQUksSUFDNUJyQyxPQUFPLENBQUNxQyxRQUFRLEtBQUssSUFBSSxFQUN6QjtNQUNBMUIsT0FBTyxDQUFDQyxHQUFHLENBQUMsK0JBQStCLENBQUM7TUFDNUNyQyxvQkFBb0IsQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO01BQzFDSCxzQkFBc0IsQ0FBQ0UsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO01BQzVDeUMsVUFBVSxDQUFDMUMsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO01BQ3BDRixlQUFlLENBQUNDLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLE9BQU8sQ0FBQztNQUN6Q2xCLGNBQWMsQ0FBQ2lCLFdBQVcsR0FBRyxTQUFTO0lBQ3hDO0VBQ0Y7RUFFQSxJQUNFVyxTQUFTLENBQUN3QixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFDbkRwQixRQUFRLENBQUNtQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFDbEQsQ0FBQzFDLElBQUksQ0FBQ3lDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUNwRDtJQUNBLElBQ0UsQ0FBQ0csSUFBSSxDQUFDSixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFDaEQsQ0FBQ1csa0JBQWtCLENBQUNaLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUM5RCxDQUFDWSxrQkFBa0IsQ0FBQ2IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQzlELENBQUMxQyxJQUFJLENBQUN5QyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFDcEQ7TUFDQXpCLFNBQVMsQ0FBQ25CLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLFNBQVMsQ0FBQztNQUNyQ1UsU0FBUyxDQUFDd0MsUUFBUSxHQUFHLElBQUk7TUFDekJaLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztNQUM5QjhDLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO01BQ3RDc0Qsa0JBQWtCLENBQUN2RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7TUFDNUNzRCxrQkFBa0IsQ0FBQ3ZELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO01BQ3BEdUQsa0JBQWtCLENBQUN4RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7TUFDNUN1RCxrQkFBa0IsQ0FBQ3hELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO0lBQ3REO0lBQ0EsSUFDRWlCLFVBQVUsQ0FBQ3lDLFFBQVEsS0FBSyxJQUFJLElBQzVCeEMsU0FBUyxDQUFDd0MsUUFBUSxLQUFLLElBQUksSUFDM0J2QyxTQUFTLENBQUN1QyxRQUFRLEtBQUssSUFBSSxJQUMzQnRDLFVBQVUsQ0FBQ3NDLFFBQVEsS0FBSyxJQUFJLElBQzVCckMsT0FBTyxDQUFDcUMsUUFBUSxLQUFLLElBQUksRUFDekI7TUFDQTFCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLCtCQUErQixDQUFDO01BQzVDckMsb0JBQW9CLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztNQUMxQ0gsc0JBQXNCLENBQUNFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztNQUM1Q3lDLFVBQVUsQ0FBQzFDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztNQUNwQ0YsZUFBZSxDQUFDQyxTQUFTLENBQUNTLE1BQU0sQ0FBQyxPQUFPLENBQUM7TUFDekNsQixjQUFjLENBQUNpQixXQUFXLEdBQUcsU0FBUztJQUN4QztFQUNGO0VBRUEsSUFDRVksU0FBUyxDQUFDdUIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQ25EckIsVUFBVSxDQUFDb0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQ3BELENBQUMxQyxJQUFJLENBQUN5QyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFDcEQ7SUFDQSxJQUNFLENBQUNHLElBQUksQ0FBQ0osWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQ2hELENBQUNPLG9CQUFvQixDQUFDUixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFDaEUsQ0FBQ1Esb0JBQW9CLENBQUNULFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUNoRTtNQUNBeEIsU0FBUyxDQUFDcEIsU0FBUyxDQUFDUyxNQUFNLENBQUMsU0FBUyxDQUFDO01BQ3JDVyxTQUFTLENBQUN1QyxRQUFRLEdBQUcsSUFBSTtNQUN6QlosSUFBSSxDQUFDL0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO01BQzlCOEMsSUFBSSxDQUFDL0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7TUFDdENrRCxvQkFBb0IsQ0FBQ25ELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztNQUM5Q2tELG9CQUFvQixDQUFDbkQsU0FBUyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7TUFDdERtRCxvQkFBb0IsQ0FBQ3BELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztNQUM5Q21ELG9CQUFvQixDQUFDcEQsU0FBUyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7SUFDeEQ7SUFDQSxJQUNFaUIsVUFBVSxDQUFDeUMsUUFBUSxLQUFLLElBQUksSUFDNUJ4QyxTQUFTLENBQUN3QyxRQUFRLEtBQUssSUFBSSxJQUMzQnZDLFNBQVMsQ0FBQ3VDLFFBQVEsS0FBSyxJQUFJLElBQzNCdEMsVUFBVSxDQUFDc0MsUUFBUSxLQUFLLElBQUksSUFDNUJyQyxPQUFPLENBQUNxQyxRQUFRLEtBQUssSUFBSSxFQUN6QjtNQUNBMUIsT0FBTyxDQUFDQyxHQUFHLENBQUMsK0JBQStCLENBQUM7TUFDNUNyQyxvQkFBb0IsQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO01BQzFDSCxzQkFBc0IsQ0FBQ0UsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO01BQzVDeUMsVUFBVSxDQUFDMUMsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO01BQ3BDRixlQUFlLENBQUNDLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLE9BQU8sQ0FBQztNQUN6Q2xCLGNBQWMsQ0FBQ2lCLFdBQVcsR0FBRyxTQUFTO0lBQ3hDO0VBQ0Y7RUFFQSxJQUNFWSxTQUFTLENBQUN1QixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFDbkRwQixRQUFRLENBQUNtQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFDbEQsQ0FBQzFDLElBQUksQ0FBQ3lDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUNwRDtJQUNBLElBQ0UsQ0FBQ0csSUFBSSxDQUFDSixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFDaEQsQ0FBQ1csa0JBQWtCLENBQUNaLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUM5RCxDQUFDWSxrQkFBa0IsQ0FBQ2IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQzlEO01BQ0F4QixTQUFTLENBQUNwQixTQUFTLENBQUNTLE1BQU0sQ0FBQyxTQUFTLENBQUM7TUFDckNXLFNBQVMsQ0FBQ3VDLFFBQVEsR0FBRyxJQUFJO01BQ3pCWixJQUFJLENBQUMvQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7TUFDOUI4QyxJQUFJLENBQUMvQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztNQUN0Q3NELGtCQUFrQixDQUFDdkQsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO01BQzVDc0Qsa0JBQWtCLENBQUN2RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztNQUNwRHVELGtCQUFrQixDQUFDeEQsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO01BQzVDdUQsa0JBQWtCLENBQUN4RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztJQUN0RDtJQUNBLElBQ0VpQixVQUFVLENBQUN5QyxRQUFRLEtBQUssSUFBSSxJQUM1QnhDLFNBQVMsQ0FBQ3dDLFFBQVEsS0FBSyxJQUFJLElBQzNCdkMsU0FBUyxDQUFDdUMsUUFBUSxLQUFLLElBQUksSUFDM0J0QyxVQUFVLENBQUNzQyxRQUFRLEtBQUssSUFBSSxJQUM1QnJDLE9BQU8sQ0FBQ3FDLFFBQVEsS0FBSyxJQUFJLEVBQ3pCO01BQ0ExQixPQUFPLENBQUNDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQztNQUM1Q3JDLG9CQUFvQixDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDMUNILHNCQUFzQixDQUFDRSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDNUN5QyxVQUFVLENBQUMxQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7TUFDcENGLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDUyxNQUFNLENBQUMsT0FBTyxDQUFDO01BQ3pDbEIsY0FBYyxDQUFDaUIsV0FBVyxHQUFHLFNBQVM7SUFDeEM7RUFDRjtFQUVBLElBQ0VhLFVBQVUsQ0FBQ3NCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUNwRHJCLFVBQVUsQ0FBQ29CLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUNwRCxDQUFDMUMsSUFBSSxDQUFDeUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQ3BEO0lBQ0EsSUFDRSxDQUFDRyxJQUFJLENBQUNKLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUNoRCxDQUFDTyxvQkFBb0IsQ0FBQ1IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQ2hFLENBQUNRLG9CQUFvQixDQUFDVCxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFDaEUsQ0FBQ1Msb0JBQW9CLENBQUNWLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUNoRSxDQUFDMUMsSUFBSSxDQUFDeUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQ3BEO01BQ0F2QixVQUFVLENBQUNyQixTQUFTLENBQUNTLE1BQU0sQ0FBQyxTQUFTLENBQUM7TUFDdENZLFVBQVUsQ0FBQ3NDLFFBQVEsR0FBRyxJQUFJO01BQzFCWixJQUFJLENBQUMvQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7TUFDOUI4QyxJQUFJLENBQUMvQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztNQUN2Q2tELG9CQUFvQixDQUFDbkQsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO01BQzlDa0Qsb0JBQW9CLENBQUNuRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztNQUN2RG1ELG9CQUFvQixDQUFDcEQsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO01BQzlDbUQsb0JBQW9CLENBQUNwRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztNQUN2RG9ELG9CQUFvQixDQUFDckQsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO01BQzlDb0Qsb0JBQW9CLENBQUNyRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztJQUN6RDtJQUNBLElBQ0VpQixVQUFVLENBQUN5QyxRQUFRLEtBQUssSUFBSSxJQUM1QnhDLFNBQVMsQ0FBQ3dDLFFBQVEsS0FBSyxJQUFJLElBQzNCdkMsU0FBUyxDQUFDdUMsUUFBUSxLQUFLLElBQUksSUFDM0J0QyxVQUFVLENBQUNzQyxRQUFRLEtBQUssSUFBSSxJQUM1QnJDLE9BQU8sQ0FBQ3FDLFFBQVEsS0FBSyxJQUFJLEVBQ3pCO01BQ0ExQixPQUFPLENBQUNDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQztNQUM1Q3JDLG9CQUFvQixDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDMUNILHNCQUFzQixDQUFDRSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDNUN5QyxVQUFVLENBQUMxQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7TUFDcENGLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDUyxNQUFNLENBQUMsT0FBTyxDQUFDO01BQ3pDbEIsY0FBYyxDQUFDaUIsV0FBVyxHQUFHLFNBQVM7SUFDeEM7RUFDRjtFQUVBLElBQ0VhLFVBQVUsQ0FBQ3NCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUNwRHBCLFFBQVEsQ0FBQ21CLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUNsRCxDQUFDMUMsSUFBSSxDQUFDeUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQ3BEO0lBQ0EsSUFDRSxDQUFDRyxJQUFJLENBQUNKLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUNoRCxDQUFDVyxrQkFBa0IsQ0FBQ1osWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQzlELENBQUNZLGtCQUFrQixDQUFDYixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFDOUQsQ0FBQ2Esa0JBQWtCLENBQUNkLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUM5RCxDQUFDMUMsSUFBSSxDQUFDeUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQ3BEO01BQ0F2QixVQUFVLENBQUNyQixTQUFTLENBQUNTLE1BQU0sQ0FBQyxTQUFTLENBQUM7TUFDdENZLFVBQVUsQ0FBQ3NDLFFBQVEsR0FBRyxJQUFJO01BQzFCWixJQUFJLENBQUMvQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7TUFDOUI4QyxJQUFJLENBQUMvQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztNQUN2Q3NELGtCQUFrQixDQUFDdkQsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO01BQzVDc0Qsa0JBQWtCLENBQUN2RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztNQUNyRHVELGtCQUFrQixDQUFDeEQsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO01BQzVDdUQsa0JBQWtCLENBQUN4RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztNQUNyRHdELGtCQUFrQixDQUFDekQsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO01BQzVDd0Qsa0JBQWtCLENBQUN6RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztJQUN2RDtJQUNBLElBQ0VpQixVQUFVLENBQUN5QyxRQUFRLEtBQUssSUFBSSxJQUM1QnhDLFNBQVMsQ0FBQ3dDLFFBQVEsS0FBSyxJQUFJLElBQzNCdkMsU0FBUyxDQUFDdUMsUUFBUSxLQUFLLElBQUksSUFDM0J0QyxVQUFVLENBQUNzQyxRQUFRLEtBQUssSUFBSSxJQUM1QnJDLE9BQU8sQ0FBQ3FDLFFBQVEsS0FBSyxJQUFJLEVBQ3pCO01BQ0ExQixPQUFPLENBQUNDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQztNQUM1Q3JDLG9CQUFvQixDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDMUNILHNCQUFzQixDQUFDRSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDNUN5QyxVQUFVLENBQUMxQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7TUFDcENGLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDUyxNQUFNLENBQUMsT0FBTyxDQUFDO01BQ3pDbEIsY0FBYyxDQUFDaUIsV0FBVyxHQUFDLFNBQVM7SUFDdEM7RUFDRjtFQUVBLElBQ0VjLE9BQU8sQ0FBQ3FCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUNqRHJCLFVBQVUsQ0FBQ29CLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUNwRCxDQUFDMUMsSUFBSSxDQUFDeUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQ3BEO0lBQ0EsSUFDRSxDQUFDRyxJQUFJLENBQUNKLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUNoRCxDQUFDTyxvQkFBb0IsQ0FBQ1IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQ2hFLENBQUNRLG9CQUFvQixDQUFDVCxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFDaEUsQ0FBQ1Msb0JBQW9CLENBQUNWLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUNoRSxDQUFDVSxvQkFBb0IsQ0FBQ1gsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQ2hFO01BQ0F0QixPQUFPLENBQUN0QixTQUFTLENBQUNTLE1BQU0sQ0FBQyxTQUFTLENBQUM7TUFDbkNhLE9BQU8sQ0FBQ3FDLFFBQVEsR0FBRyxJQUFJO01BQ3ZCWixJQUFJLENBQUMvQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7TUFDOUI4QyxJQUFJLENBQUMvQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztNQUNwQ2tELG9CQUFvQixDQUFDbkQsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO01BQzlDa0Qsb0JBQW9CLENBQUNuRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztNQUNwRG1ELG9CQUFvQixDQUFDcEQsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO01BQzlDbUQsb0JBQW9CLENBQUNwRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztNQUNwRG9ELG9CQUFvQixDQUFDckQsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO01BQzlDb0Qsb0JBQW9CLENBQUNyRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztNQUNwRHFELG9CQUFvQixDQUFDdEQsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO01BQzlDcUQsb0JBQW9CLENBQUN0RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN0RDtJQUNBLElBQ0VpQixVQUFVLENBQUN5QyxRQUFRLEtBQUssSUFBSSxJQUM1QnhDLFNBQVMsQ0FBQ3dDLFFBQVEsS0FBSyxJQUFJLElBQzNCdkMsU0FBUyxDQUFDdUMsUUFBUSxLQUFLLElBQUksSUFDM0J0QyxVQUFVLENBQUNzQyxRQUFRLEtBQUssSUFBSSxJQUM1QnJDLE9BQU8sQ0FBQ3FDLFFBQVEsS0FBSyxJQUFJLEVBQ3pCO01BQ0ExQixPQUFPLENBQUNDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQztNQUM1Q3JDLG9CQUFvQixDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDMUNILHNCQUFzQixDQUFDRSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDNUN5QyxVQUFVLENBQUMxQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7TUFDcENGLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDUyxNQUFNLENBQUMsT0FBTyxDQUFDO01BQ3pDbEIsY0FBYyxDQUFDaUIsV0FBVyxHQUFHLFNBQVM7SUFDeEM7RUFDRjtFQUVBLElBQ0VjLE9BQU8sQ0FBQ3FCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUNqRHBCLFFBQVEsQ0FBQ21CLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUNsRCxDQUFDMUMsSUFBSSxDQUFDeUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQ3BEO0lBQ0EsSUFDRSxDQUFDRyxJQUFJLENBQUNKLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUNoRCxDQUFDVyxrQkFBa0IsQ0FBQ1osWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQzlELENBQUNZLGtCQUFrQixDQUFDYixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFDOUQsQ0FBQ2Esa0JBQWtCLENBQUNkLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUM5RCxDQUFDYyxrQkFBa0IsQ0FBQ2YsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQzlEO01BQ0F0QixPQUFPLENBQUN0QixTQUFTLENBQUNTLE1BQU0sQ0FBQyxTQUFTLENBQUM7TUFDbkNhLE9BQU8sQ0FBQ3FDLFFBQVEsR0FBRyxJQUFJO01BQ3ZCWixJQUFJLENBQUMvQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7TUFDOUI4QyxJQUFJLENBQUMvQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztNQUNwQ3NELGtCQUFrQixDQUFDdkQsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO01BQzVDc0Qsa0JBQWtCLENBQUN2RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztNQUNsRHVELGtCQUFrQixDQUFDeEQsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO01BQzVDdUQsa0JBQWtCLENBQUN4RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztNQUNsRHdELGtCQUFrQixDQUFDekQsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO01BQzVDd0Qsa0JBQWtCLENBQUN6RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztNQUNsRHlELGtCQUFrQixDQUFDMUQsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO01BQzVDeUQsa0JBQWtCLENBQUMxRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztJQUNwRDtJQUNBLElBQ0VpQixVQUFVLENBQUN5QyxRQUFRLEtBQUssSUFBSSxJQUM1QnhDLFNBQVMsQ0FBQ3dDLFFBQVEsS0FBSyxJQUFJLElBQzNCdkMsU0FBUyxDQUFDdUMsUUFBUSxLQUFLLElBQUksSUFDM0J0QyxVQUFVLENBQUNzQyxRQUFRLEtBQUssSUFBSSxJQUM1QnJDLE9BQU8sQ0FBQ3FDLFFBQVEsS0FBSyxJQUFJLEVBQ3pCO01BQ0ExQixPQUFPLENBQUNDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQztNQUM1Q3JDLG9CQUFvQixDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDMUNILHNCQUFzQixDQUFDRSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDNUN5QyxVQUFVLENBQUMxQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7TUFDcENGLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDUyxNQUFNLENBQUMsT0FBTyxDQUFDO01BQ3pDbEIsY0FBYyxDQUFDaUIsV0FBVyxHQUFHLFNBQVM7SUFDeEM7SUFFQSxJQUNFVSxVQUFVLENBQUN5QyxRQUFRLEtBQUssSUFBSSxJQUM1QnhDLFNBQVMsQ0FBQ3dDLFFBQVEsS0FBSyxJQUFJLElBQzNCdkMsU0FBUyxDQUFDdUMsUUFBUSxLQUFLLElBQUksSUFDM0J0QyxVQUFVLENBQUNzQyxRQUFRLEtBQUssSUFBSSxJQUM1QnJDLE9BQU8sQ0FBQ3FDLFFBQVEsS0FBSyxJQUFJLEVBQ3pCO01BQ0ExQixPQUFPLENBQUNDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQztJQUMzQztFQUNGO0FBQ0YsQ0FBQyxDQUNILENBQUM7O0FBRUQ7QUFDQSxTQUFTMEIsZ0JBQWdCQSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtFQUNsQyxJQUFJQyxHQUFHLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLElBQUlKLEdBQUcsR0FBR0QsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdBLEdBQUc7RUFDM0QsT0FBT0UsR0FBRztBQUNaO0FBRUEsU0FBU0ksbUJBQW1CQSxDQUFBLEVBQUc7RUFDN0IsSUFBSUEsbUJBQW1CLEdBQUdILElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztFQUMzRCxJQUFJQyxtQkFBbUIsS0FBSyxDQUFDLEVBQUU7SUFDN0IsT0FBTyxZQUFZO0VBQ3JCO0VBQ0EsSUFBSUEsbUJBQW1CLEtBQUssQ0FBQyxFQUFFO0lBQzdCLE9BQU8sVUFBVTtFQUNuQjtBQUNGO0FBRUFsQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ2lDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztBQUVsQyxJQUFJQyxXQUFXLEdBQUcsRUFBRTtBQUNwQixJQUFJQyxZQUFZLEdBQUcsRUFBRTtBQUVyQixNQUFNQyxZQUFZLENBQUM7RUFDakJuRyxXQUFXQSxDQUNURCxJQUFJLEVBQ0pxRztFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQUEsRUFDQTtJQUNBLElBQUksQ0FBQ3JHLElBQUksR0FBR0EsSUFBSTtJQUNoQixJQUFJLENBQUNxRyxXQUFXLEdBQUdBLFdBQVc7SUFDOUI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNGOztFQUNBQyxZQUFZQSxDQUFBLEVBQUc7SUFDYixJQUFJLElBQUksQ0FBQ3RHLElBQUksS0FBSyxZQUFZLElBQUksSUFBSSxDQUFDcUcsV0FBVyxLQUFLLFlBQVksRUFBRTtNQUNuRSxJQUFJRSxDQUFDLEdBQUdiLGdCQUFnQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7TUFDOUIsSUFBSWMsQ0FBQyxHQUFHZCxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO01BQy9CLElBQUllLFNBQVMsR0FBRUYsQ0FBQyxHQUFDLENBQUM7TUFDbEIsSUFBSUcsU0FBUyxHQUFFSCxDQUFDLENBQUNJLFFBQVEsQ0FBQyxDQUFDO01BQzNCLElBQUlDLFNBQVMsR0FBRUosQ0FBQyxDQUFDRyxRQUFRLENBQUMsQ0FBQztNQUMzQixJQUFJRSxlQUFlLEdBQUVKLFNBQVMsQ0FBQ0UsUUFBUSxDQUFDLENBQUM7TUFDekMsSUFBSUcsUUFBUSxHQUFFSixTQUFTLEdBQUdFLFNBQVM7TUFDbkMsSUFBSUcsYUFBYSxHQUFFRixlQUFlLEdBQUdELFNBQVM7TUFDOUMsSUFBR1YsV0FBVyxDQUFDeEIsUUFBUSxDQUFDb0MsUUFBUSxDQUFDLElBQUlaLFdBQVcsQ0FBQ3hCLFFBQVEsQ0FBQ3FDLGFBQWEsQ0FBQyxFQUFDO1FBQ3ZFLElBQUksQ0FBQ1QsWUFBWSxDQUFDLENBQUM7TUFDckIsQ0FBQyxNQUFJO1FBQ0gsSUFBSVUsVUFBVSxHQUFHMUYsUUFBUSxDQUFDQyxhQUFhLENBQUUseUJBQXdCdUYsUUFBUyxJQUFHLENBQUM7UUFDOUUsSUFBSUcsZUFBZSxHQUFHM0YsUUFBUSxDQUFDQyxhQUFhLENBQUUseUJBQXdCd0YsYUFBYyxJQUFHLENBQUM7UUFDeEZDLFVBQVUsQ0FBQ2xGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO1FBQzdDaUYsVUFBVSxDQUFDbEYsU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO1FBQ3ZDO1FBQ0FrRixlQUFlLENBQUNuRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztRQUNsRGtGLGVBQWUsQ0FBQ25GLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUM1Q21FLFdBQVcsQ0FBQ2dCLElBQUksQ0FBQ0osUUFBUSxDQUFDO1FBQzFCWixXQUFXLENBQUNnQixJQUFJLENBQUNILGFBQWEsQ0FBQztNQUNqQztJQUNGO0lBQ0EsSUFBSSxJQUFJLENBQUMvRyxJQUFJLEtBQUssV0FBVyxJQUFJLElBQUksQ0FBQ3FHLFdBQVcsS0FBSyxZQUFZLEVBQUU7TUFDbEUsSUFBSUUsQ0FBQyxHQUFHYixnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO01BQzlCLElBQUljLENBQUMsR0FBR2QsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztNQUMvQixJQUFJZSxTQUFTLEdBQUVGLENBQUMsR0FBQyxDQUFDO01BQ2xCLElBQUlZLFNBQVMsR0FBRVosQ0FBQyxHQUFDLENBQUM7TUFDbEIsSUFBSUcsU0FBUyxHQUFFSCxDQUFDLENBQUNJLFFBQVEsQ0FBQyxDQUFDO01BQzNCLElBQUlDLFNBQVMsR0FBRUosQ0FBQyxDQUFDRyxRQUFRLENBQUMsQ0FBQztNQUMzQixJQUFJRSxlQUFlLEdBQUVKLFNBQVMsQ0FBQ0UsUUFBUSxDQUFDLENBQUM7TUFDekMsSUFBSVMsZUFBZSxHQUFFRCxTQUFTLENBQUNSLFFBQVEsQ0FBQyxDQUFDO01BQ3pDLElBQUlHLFFBQVEsR0FBRUosU0FBUyxHQUFHRSxTQUFTO01BQ25DLElBQUlHLGFBQWEsR0FBRUYsZUFBZSxHQUFHRCxTQUFTO01BQzlDLElBQUlTLGFBQWEsR0FBRUQsZUFBZSxHQUFHUixTQUFTO01BQzlDLElBQUdWLFdBQVcsQ0FBQ3hCLFFBQVEsQ0FBQ29DLFFBQVEsQ0FBQyxJQUFJWixXQUFXLENBQUN4QixRQUFRLENBQUNxQyxhQUFhLENBQUMsSUFBSWIsV0FBVyxDQUFDeEIsUUFBUSxDQUFDMkMsYUFBYSxDQUFDLEVBQUM7UUFDOUcsSUFBSSxDQUFDZixZQUFZLENBQUMsQ0FBQztNQUNyQixDQUFDLE1BQUk7UUFDSCxJQUFJVSxVQUFVLEdBQUcxRixRQUFRLENBQUNDLGFBQWEsQ0FBRSx5QkFBd0J1RixRQUFTLElBQUcsQ0FBQztRQUM5RSxJQUFJRyxlQUFlLEdBQUczRixRQUFRLENBQUNDLGFBQWEsQ0FBRSx5QkFBd0J3RixhQUFjLElBQUcsQ0FBQztRQUN4RixJQUFJTyxlQUFlLEdBQUdoRyxRQUFRLENBQUNDLGFBQWEsQ0FBRSx5QkFBd0I4RixhQUFjLElBQUcsQ0FBQztRQUN4RkwsVUFBVSxDQUFDbEYsU0FBUyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7UUFDN0NpRixVQUFVLENBQUNsRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDckM7UUFDQWtGLGVBQWUsQ0FBQ25GLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO1FBQ2xEa0YsZUFBZSxDQUFDbkYsU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQzFDdUYsZUFBZSxDQUFDeEYsU0FBUyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7UUFDbER1RixlQUFlLENBQUN4RixTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDMUNtRSxXQUFXLENBQUNnQixJQUFJLENBQUNKLFFBQVEsQ0FBQztRQUMxQlosV0FBVyxDQUFDZ0IsSUFBSSxDQUFDSCxhQUFhLENBQUM7UUFDL0JiLFdBQVcsQ0FBQ2dCLElBQUksQ0FBQ0csYUFBYSxDQUFDO01BQ2pDO0lBQ0Y7SUFDQSxJQUFJLElBQUksQ0FBQ3JILElBQUksS0FBSyxXQUFXLElBQUksSUFBSSxDQUFDcUcsV0FBVyxLQUFLLFlBQVksRUFBRTtNQUNsRSxJQUFJRSxDQUFDLEdBQUdiLGdCQUFnQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7TUFDOUIsSUFBSWMsQ0FBQyxHQUFHZCxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO01BQy9CLElBQUllLFNBQVMsR0FBRUYsQ0FBQyxHQUFDLENBQUM7TUFDbEIsSUFBSVksU0FBUyxHQUFFWixDQUFDLEdBQUMsQ0FBQztNQUNsQixJQUFJRyxTQUFTLEdBQUVILENBQUMsQ0FBQ0ksUUFBUSxDQUFDLENBQUM7TUFDM0IsSUFBSUMsU0FBUyxHQUFFSixDQUFDLENBQUNHLFFBQVEsQ0FBQyxDQUFDO01BQzNCLElBQUlFLGVBQWUsR0FBRUosU0FBUyxDQUFDRSxRQUFRLENBQUMsQ0FBQztNQUN6QyxJQUFJUyxlQUFlLEdBQUVELFNBQVMsQ0FBQ1IsUUFBUSxDQUFDLENBQUM7TUFDekMsSUFBSUcsUUFBUSxHQUFFSixTQUFTLEdBQUdFLFNBQVM7TUFDbkMsSUFBSUcsYUFBYSxHQUFFRixlQUFlLEdBQUdELFNBQVM7TUFDOUMsSUFBSVMsYUFBYSxHQUFFRCxlQUFlLEdBQUdSLFNBQVM7TUFDOUMsSUFBR1YsV0FBVyxDQUFDeEIsUUFBUSxDQUFDb0MsUUFBUSxDQUFDLElBQUlaLFdBQVcsQ0FBQ3hCLFFBQVEsQ0FBQ3FDLGFBQWEsQ0FBQyxJQUFJYixXQUFXLENBQUN4QixRQUFRLENBQUMyQyxhQUFhLENBQUMsRUFBQztRQUM5RyxJQUFJLENBQUNmLFlBQVksQ0FBQyxDQUFDO01BQ3JCLENBQUMsTUFBSTtRQUNILElBQUlVLFVBQVUsR0FBRzFGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFFLHlCQUF3QnVGLFFBQVMsSUFBRyxDQUFDO1FBQzlFLElBQUlHLGVBQWUsR0FBRzNGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFFLHlCQUF3QndGLGFBQWMsSUFBRyxDQUFDO1FBQ3hGLElBQUlPLGVBQWUsR0FBR2hHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFFLHlCQUF3QjhGLGFBQWMsSUFBRyxDQUFDO1FBQ3hGTCxVQUFVLENBQUNsRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztRQUM3Q2lGLFVBQVUsQ0FBQ2xGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUNyQztRQUNBa0YsZUFBZSxDQUFDbkYsU0FBUyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7UUFDbERrRixlQUFlLENBQUNuRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDMUN1RixlQUFlLENBQUN4RixTQUFTLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztRQUNsRHVGLGVBQWUsQ0FBQ3hGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUMxQ21FLFdBQVcsQ0FBQ2dCLElBQUksQ0FBQ0osUUFBUSxDQUFDO1FBQzFCWixXQUFXLENBQUNnQixJQUFJLENBQUNILGFBQWEsQ0FBQztRQUMvQmIsV0FBVyxDQUFDZ0IsSUFBSSxDQUFDRyxhQUFhLENBQUM7TUFDakM7SUFDRjtJQUNBLElBQUksSUFBSSxDQUFDckgsSUFBSSxLQUFLLFlBQVksSUFBSSxJQUFJLENBQUNxRyxXQUFXLEtBQUssWUFBWSxFQUFFO01BQ25FLElBQUlFLENBQUMsR0FBR2IsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUM5QixJQUFJYyxDQUFDLEdBQUdkLGdCQUFnQixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7TUFDL0IsSUFBSWUsU0FBUyxHQUFFRixDQUFDLEdBQUMsQ0FBQztNQUNsQixJQUFJWSxTQUFTLEdBQUVaLENBQUMsR0FBQyxDQUFDO01BQ2xCLElBQUlnQixTQUFTLEdBQUVoQixDQUFDLEdBQUMsQ0FBQztNQUNsQixJQUFJRyxTQUFTLEdBQUVILENBQUMsQ0FBQ0ksUUFBUSxDQUFDLENBQUM7TUFDM0IsSUFBSUMsU0FBUyxHQUFFSixDQUFDLENBQUNHLFFBQVEsQ0FBQyxDQUFDO01BQzNCLElBQUlFLGVBQWUsR0FBRUosU0FBUyxDQUFDRSxRQUFRLENBQUMsQ0FBQztNQUN6QyxJQUFJUyxlQUFlLEdBQUVELFNBQVMsQ0FBQ1IsUUFBUSxDQUFDLENBQUM7TUFDekMsSUFBSWEsZUFBZSxHQUFFRCxTQUFTLENBQUNaLFFBQVEsQ0FBQyxDQUFDO01BQ3pDLElBQUlHLFFBQVEsR0FBRUosU0FBUyxHQUFHRSxTQUFTO01BQ25DLElBQUlHLGFBQWEsR0FBRUYsZUFBZSxHQUFHRCxTQUFTO01BQzlDLElBQUlTLGFBQWEsR0FBR0QsZUFBZSxHQUFHUixTQUFTO01BQy9DLElBQUlhLGFBQWEsR0FBR0QsZUFBZSxHQUFHWixTQUFTO01BQy9DLElBQUdWLFdBQVcsQ0FBQ3hCLFFBQVEsQ0FBQ29DLFFBQVEsQ0FBQyxJQUFJWixXQUFXLENBQUN4QixRQUFRLENBQUNxQyxhQUFhLENBQUMsSUFBSWIsV0FBVyxDQUFDeEIsUUFBUSxDQUFDMkMsYUFBYSxDQUFDLElBQUluQixXQUFXLENBQUN4QixRQUFRLENBQUMrQyxhQUFhLENBQUMsRUFBQztRQUNySixJQUFJLENBQUNuQixZQUFZLENBQUMsQ0FBQztNQUNyQixDQUFDLE1BQUk7UUFDSCxJQUFJVSxVQUFVLEdBQUcxRixRQUFRLENBQUNDLGFBQWEsQ0FBRSx5QkFBd0J1RixRQUFTLElBQUcsQ0FBQztRQUM5RSxJQUFJRyxlQUFlLEdBQUczRixRQUFRLENBQUNDLGFBQWEsQ0FBRSx5QkFBd0J3RixhQUFjLElBQUcsQ0FBQztRQUN4RixJQUFJTyxlQUFlLEdBQUdoRyxRQUFRLENBQUNDLGFBQWEsQ0FBRSx5QkFBd0I4RixhQUFjLElBQUcsQ0FBQztRQUN4RixJQUFJSyxlQUFlLEdBQUdwRyxRQUFRLENBQUNDLGFBQWEsQ0FBRSx5QkFBd0JrRyxhQUFjLElBQUcsQ0FBQztRQUN4RlQsVUFBVSxDQUFDbEYsU0FBUyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7UUFDN0NpRixVQUFVLENBQUNsRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7UUFDdEM7UUFDQWtGLGVBQWUsQ0FBQ25GLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO1FBQ2xEa0YsZUFBZSxDQUFDbkYsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO1FBQzNDdUYsZUFBZSxDQUFDeEYsU0FBUyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7UUFDbER1RixlQUFlLENBQUN4RixTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7UUFDM0MyRixlQUFlLENBQUM1RixTQUFTLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztRQUNsRDJGLGVBQWUsQ0FBQzVGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztRQUMzQ21FLFdBQVcsQ0FBQ2dCLElBQUksQ0FBQ0osUUFBUSxDQUFDO1FBQzFCWixXQUFXLENBQUNnQixJQUFJLENBQUNILGFBQWEsQ0FBQztRQUMvQmIsV0FBVyxDQUFDZ0IsSUFBSSxDQUFDRyxhQUFhLENBQUM7UUFDL0JuQixXQUFXLENBQUNnQixJQUFJLENBQUNPLGFBQWEsQ0FBQztNQUNqQztJQUNGO0lBQ0EsSUFBSSxJQUFJLENBQUN6SCxJQUFJLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQ3FHLFdBQVcsS0FBSyxZQUFZLEVBQUU7TUFDaEUsSUFBSUUsQ0FBQyxHQUFHYixnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO01BQzlCLElBQUljLENBQUMsR0FBR2QsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztNQUMvQixJQUFJZSxTQUFTLEdBQUVGLENBQUMsR0FBQyxDQUFDO01BQ2xCLElBQUlZLFNBQVMsR0FBRVosQ0FBQyxHQUFDLENBQUM7TUFDbEIsSUFBSWdCLFNBQVMsR0FBRWhCLENBQUMsR0FBQyxDQUFDO01BQ2xCLElBQUlvQixTQUFTLEdBQUVwQixDQUFDLEdBQUMsQ0FBQztNQUNsQixJQUFJRyxTQUFTLEdBQUVILENBQUMsQ0FBQ0ksUUFBUSxDQUFDLENBQUM7TUFDM0IsSUFBSUMsU0FBUyxHQUFFSixDQUFDLENBQUNHLFFBQVEsQ0FBQyxDQUFDO01BQzNCLElBQUlFLGVBQWUsR0FBRUosU0FBUyxDQUFDRSxRQUFRLENBQUMsQ0FBQztNQUN6QyxJQUFJUyxlQUFlLEdBQUVELFNBQVMsQ0FBQ1IsUUFBUSxDQUFDLENBQUM7TUFDekMsSUFBSWEsZUFBZSxHQUFFRCxTQUFTLENBQUNaLFFBQVEsQ0FBQyxDQUFDO01BQ3pDLElBQUlpQixlQUFlLEdBQUVELFNBQVMsQ0FBQ2hCLFFBQVEsQ0FBQyxDQUFDO01BQ3pDLElBQUlHLFFBQVEsR0FBRUosU0FBUyxHQUFHRSxTQUFTO01BQ25DLElBQUlHLGFBQWEsR0FBRUYsZUFBZSxHQUFHRCxTQUFTO01BQzlDLElBQUlTLGFBQWEsR0FBR0QsZUFBZSxHQUFHUixTQUFTO01BQy9DLElBQUlhLGFBQWEsR0FBR0QsZUFBZSxHQUFHWixTQUFTO01BQy9DLElBQUlpQixhQUFhLEdBQUdELGVBQWUsR0FBR2hCLFNBQVM7TUFDL0MsSUFBR1YsV0FBVyxDQUFDeEIsUUFBUSxDQUFDb0MsUUFBUSxDQUFDLElBQUlaLFdBQVcsQ0FBQ3hCLFFBQVEsQ0FBQ3FDLGFBQWEsQ0FBQyxJQUFJYixXQUFXLENBQUN4QixRQUFRLENBQUMyQyxhQUFhLENBQUMsSUFBSW5CLFdBQVcsQ0FBQ3hCLFFBQVEsQ0FBQytDLGFBQWEsQ0FBQyxJQUFJdkIsV0FBVyxDQUFDeEIsUUFBUSxDQUFDbUQsYUFBYSxDQUFDLEVBQUM7UUFDNUwsSUFBSSxDQUFDdkIsWUFBWSxDQUFDLENBQUM7TUFDckIsQ0FBQyxNQUFJO1FBQ0gsSUFBSVUsVUFBVSxHQUFHMUYsUUFBUSxDQUFDQyxhQUFhLENBQUUseUJBQXdCdUYsUUFBUyxJQUFHLENBQUM7UUFDOUUsSUFBSUcsZUFBZSxHQUFHM0YsUUFBUSxDQUFDQyxhQUFhLENBQUUseUJBQXdCd0YsYUFBYyxJQUFHLENBQUM7UUFDeEYsSUFBSU8sZUFBZSxHQUFHaEcsUUFBUSxDQUFDQyxhQUFhLENBQUUseUJBQXdCOEYsYUFBYyxJQUFHLENBQUM7UUFDeEYsSUFBSUssZUFBZSxHQUFHcEcsUUFBUSxDQUFDQyxhQUFhLENBQUUseUJBQXdCa0csYUFBYyxJQUFHLENBQUM7UUFDeEYsSUFBSUssZUFBZSxHQUFHeEcsUUFBUSxDQUFDQyxhQUFhLENBQUUseUJBQXdCc0csYUFBYyxJQUFHLENBQUM7UUFDeEZiLFVBQVUsQ0FBQ2xGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO1FBQzdDaUYsVUFBVSxDQUFDbEYsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ25DO1FBQ0FrRixlQUFlLENBQUNuRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztRQUNsRGtGLGVBQWUsQ0FBQ25GLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUN4Q3VGLGVBQWUsQ0FBQ3hGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO1FBQ2xEdUYsZUFBZSxDQUFDeEYsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ3hDMkYsZUFBZSxDQUFDNUYsU0FBUyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7UUFDbEQyRixlQUFlLENBQUM1RixTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDeEMrRixlQUFlLENBQUNoRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztRQUNsRCtGLGVBQWUsQ0FBQ2hHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUN4Q21FLFdBQVcsQ0FBQ2dCLElBQUksQ0FBQ0osUUFBUSxDQUFDO1FBQzFCWixXQUFXLENBQUNnQixJQUFJLENBQUNILGFBQWEsQ0FBQztRQUMvQmIsV0FBVyxDQUFDZ0IsSUFBSSxDQUFDRyxhQUFhLENBQUM7UUFDL0JuQixXQUFXLENBQUNnQixJQUFJLENBQUNPLGFBQWEsQ0FBQztRQUMvQnZCLFdBQVcsQ0FBQ2dCLElBQUksQ0FBQ1csYUFBYSxDQUFDO01BQ2pDO0lBQ0Y7SUFDQSxJQUFJLElBQUksQ0FBQzdILElBQUksS0FBSyxZQUFZLElBQUksSUFBSSxDQUFDcUcsV0FBVyxLQUFLLFVBQVUsRUFBRTtNQUNqRSxJQUFJRSxDQUFDLEdBQUdiLGdCQUFnQixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7TUFDL0IsSUFBSWMsQ0FBQyxHQUFHZCxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO01BQzlCLElBQUllLFNBQVMsR0FBR0QsQ0FBQyxHQUFHLENBQUM7TUFDckIsSUFBSUUsU0FBUyxHQUFHSCxDQUFDLENBQUNJLFFBQVEsQ0FBQyxDQUFDO01BQzVCLElBQUlDLFNBQVMsR0FBR0osQ0FBQyxDQUFDRyxRQUFRLENBQUMsQ0FBQztNQUM1QixJQUFJRSxlQUFlLEdBQUdKLFNBQVMsQ0FBQ0UsUUFBUSxDQUFDLENBQUM7TUFDMUMsSUFBSUcsUUFBUSxHQUFHSixTQUFTLEdBQUdFLFNBQVM7TUFDcEMsSUFBSUcsYUFBYSxHQUFHTCxTQUFTLEdBQUdHLGVBQWU7TUFDL0MsSUFBR1gsV0FBVyxDQUFDeEIsUUFBUSxDQUFDb0MsUUFBUSxDQUFDLElBQUlaLFdBQVcsQ0FBQ3hCLFFBQVEsQ0FBQ3FDLGFBQWEsQ0FBQyxFQUFDO1FBQ3ZFLElBQUksQ0FBQ1QsWUFBWSxDQUFDLENBQUM7TUFDckIsQ0FBQyxNQUFJO1FBQ0gsSUFBSVUsVUFBVSxHQUFHMUYsUUFBUSxDQUFDQyxhQUFhLENBQUUseUJBQXdCdUYsUUFBUyxJQUFHLENBQUM7UUFDOUUsSUFBSUcsZUFBZSxHQUFHM0YsUUFBUSxDQUFDQyxhQUFhLENBQUUseUJBQXdCd0YsYUFBYyxJQUFHLENBQUM7UUFDeEZDLFVBQVUsQ0FBQ2xGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO1FBQzdDaUYsVUFBVSxDQUFDbEYsU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO1FBQ3ZDO1FBQ0FrRixlQUFlLENBQUNuRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztRQUNsRGtGLGVBQWUsQ0FBQ25GLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUM1Q21FLFdBQVcsQ0FBQ2dCLElBQUksQ0FBQ0osUUFBUSxDQUFDO1FBQzFCWixXQUFXLENBQUNnQixJQUFJLENBQUNILGFBQWEsQ0FBQztNQUNqQztJQUNGO0lBQ0EsSUFBSSxJQUFJLENBQUMvRyxJQUFJLEtBQUssV0FBVyxJQUFJLElBQUksQ0FBQ3FHLFdBQVcsS0FBSyxVQUFVLEVBQUU7TUFDaEUsSUFBSUUsQ0FBQyxHQUFHYixnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO01BQy9CLElBQUljLENBQUMsR0FBR2QsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUM5QixJQUFJZSxTQUFTLEdBQUVELENBQUMsR0FBQyxDQUFDO01BQ2xCLElBQUlXLFNBQVMsR0FBRVgsQ0FBQyxHQUFDLENBQUM7TUFDbEIsSUFBSUUsU0FBUyxHQUFFSCxDQUFDLENBQUNJLFFBQVEsQ0FBQyxDQUFDO01BQzNCLElBQUlDLFNBQVMsR0FBRUosQ0FBQyxDQUFDRyxRQUFRLENBQUMsQ0FBQztNQUMzQixJQUFJRSxlQUFlLEdBQUVKLFNBQVMsQ0FBQ0UsUUFBUSxDQUFDLENBQUM7TUFDekMsSUFBSVMsZUFBZSxHQUFFRCxTQUFTLENBQUNSLFFBQVEsQ0FBQyxDQUFDO01BQ3pDLElBQUlHLFFBQVEsR0FBRUosU0FBUyxHQUFHRSxTQUFTO01BQ25DLElBQUlHLGFBQWEsR0FBRUwsU0FBUyxHQUFHRyxlQUFlO01BQzlDLElBQUlRLGFBQWEsR0FBRVgsU0FBUyxHQUFHVSxlQUFlO01BQzlDLElBQUdsQixXQUFXLENBQUN4QixRQUFRLENBQUNvQyxRQUFRLENBQUMsSUFBSVosV0FBVyxDQUFDeEIsUUFBUSxDQUFDcUMsYUFBYSxDQUFDLElBQUliLFdBQVcsQ0FBQ3hCLFFBQVEsQ0FBQzJDLGFBQWEsQ0FBQyxFQUFDO1FBQzlHLElBQUksQ0FBQ2YsWUFBWSxDQUFDLENBQUM7TUFDckIsQ0FBQyxNQUFJO1FBQ0gsSUFBSVUsVUFBVSxHQUFHMUYsUUFBUSxDQUFDQyxhQUFhLENBQUUseUJBQXdCdUYsUUFBUyxJQUFHLENBQUM7UUFDOUUsSUFBSUcsZUFBZSxHQUFHM0YsUUFBUSxDQUFDQyxhQUFhLENBQUUseUJBQXdCd0YsYUFBYyxJQUFHLENBQUM7UUFDeEYsSUFBSU8sZUFBZSxHQUFHaEcsUUFBUSxDQUFDQyxhQUFhLENBQUUseUJBQXdCOEYsYUFBYyxJQUFHLENBQUM7UUFDeEZMLFVBQVUsQ0FBQ2xGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO1FBQzdDaUYsVUFBVSxDQUFDbEYsU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQ3JDO1FBQ0FrRixlQUFlLENBQUNuRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztRQUNsRGtGLGVBQWUsQ0FBQ25GLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUMxQ3VGLGVBQWUsQ0FBQ3hGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO1FBQ2xEdUYsZUFBZSxDQUFDeEYsU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQzFDbUUsV0FBVyxDQUFDZ0IsSUFBSSxDQUFDSixRQUFRLENBQUM7UUFDMUJaLFdBQVcsQ0FBQ2dCLElBQUksQ0FBQ0gsYUFBYSxDQUFDO1FBQy9CYixXQUFXLENBQUNnQixJQUFJLENBQUNHLGFBQWEsQ0FBQztNQUNqQztJQUNGO0lBQ0EsSUFBSSxJQUFJLENBQUNySCxJQUFJLEtBQUssV0FBVyxJQUFJLElBQUksQ0FBQ3FHLFdBQVcsS0FBSyxVQUFVLEVBQUU7TUFDaEUsSUFBSUUsQ0FBQyxHQUFHYixnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO01BQy9CLElBQUljLENBQUMsR0FBR2QsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUM5QixJQUFJZSxTQUFTLEdBQUVELENBQUMsR0FBQyxDQUFDO01BQ2xCLElBQUlXLFNBQVMsR0FBRVgsQ0FBQyxHQUFDLENBQUM7TUFDbEIsSUFBSUUsU0FBUyxHQUFFSCxDQUFDLENBQUNJLFFBQVEsQ0FBQyxDQUFDO01BQzNCLElBQUlDLFNBQVMsR0FBRUosQ0FBQyxDQUFDRyxRQUFRLENBQUMsQ0FBQztNQUMzQixJQUFJRSxlQUFlLEdBQUVKLFNBQVMsQ0FBQ0UsUUFBUSxDQUFDLENBQUM7TUFDekMsSUFBSVMsZUFBZSxHQUFFRCxTQUFTLENBQUNSLFFBQVEsQ0FBQyxDQUFDO01BQ3pDLElBQUlHLFFBQVEsR0FBRUosU0FBUyxHQUFHRSxTQUFTO01BQ25DLElBQUlHLGFBQWEsR0FBRUwsU0FBUyxHQUFHRyxlQUFlO01BQzlDLElBQUlRLGFBQWEsR0FBRVgsU0FBUyxHQUFHVSxlQUFlO01BQzlDLElBQUdsQixXQUFXLENBQUN4QixRQUFRLENBQUNvQyxRQUFRLENBQUMsSUFBSVosV0FBVyxDQUFDeEIsUUFBUSxDQUFDcUMsYUFBYSxDQUFDLElBQUliLFdBQVcsQ0FBQ3hCLFFBQVEsQ0FBQzJDLGFBQWEsQ0FBQyxFQUFDO1FBQzlHLElBQUksQ0FBQ2YsWUFBWSxDQUFDLENBQUM7TUFDckIsQ0FBQyxNQUFJO1FBQ0gsSUFBSVUsVUFBVSxHQUFHMUYsUUFBUSxDQUFDQyxhQUFhLENBQUUseUJBQXdCdUYsUUFBUyxJQUFHLENBQUM7UUFDOUUsSUFBSUcsZUFBZSxHQUFHM0YsUUFBUSxDQUFDQyxhQUFhLENBQUUseUJBQXdCd0YsYUFBYyxJQUFHLENBQUM7UUFDeEYsSUFBSU8sZUFBZSxHQUFHaEcsUUFBUSxDQUFDQyxhQUFhLENBQUUseUJBQXdCOEYsYUFBYyxJQUFHLENBQUM7UUFDeEZMLFVBQVUsQ0FBQ2xGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO1FBQzdDaUYsVUFBVSxDQUFDbEYsU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQ3JDO1FBQ0FrRixlQUFlLENBQUNuRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztRQUNsRGtGLGVBQWUsQ0FBQ25GLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUMxQ3VGLGVBQWUsQ0FBQ3hGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO1FBQ2xEdUYsZUFBZSxDQUFDeEYsU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQzFDbUUsV0FBVyxDQUFDZ0IsSUFBSSxDQUFDSixRQUFRLENBQUM7UUFDMUJaLFdBQVcsQ0FBQ2dCLElBQUksQ0FBQ0gsYUFBYSxDQUFDO1FBQy9CYixXQUFXLENBQUNnQixJQUFJLENBQUNHLGFBQWEsQ0FBQztNQUNqQztJQUNGO0lBQ0EsSUFBSSxJQUFJLENBQUNySCxJQUFJLEtBQUssWUFBWSxJQUFJLElBQUksQ0FBQ3FHLFdBQVcsS0FBSyxVQUFVLEVBQUU7TUFDakUsSUFBSUUsQ0FBQyxHQUFHYixnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO01BQy9CLElBQUljLENBQUMsR0FBR2QsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUM5QixJQUFJZSxTQUFTLEdBQUVELENBQUMsR0FBQyxDQUFDO01BQ2xCLElBQUlXLFNBQVMsR0FBRVgsQ0FBQyxHQUFDLENBQUM7TUFDbEIsSUFBSWUsU0FBUyxHQUFFZixDQUFDLEdBQUMsQ0FBQztNQUNsQixJQUFJRSxTQUFTLEdBQUVILENBQUMsQ0FBQ0ksUUFBUSxDQUFDLENBQUM7TUFDM0IsSUFBSUMsU0FBUyxHQUFFSixDQUFDLENBQUNHLFFBQVEsQ0FBQyxDQUFDO01BQzNCLElBQUlFLGVBQWUsR0FBRUosU0FBUyxDQUFDRSxRQUFRLENBQUMsQ0FBQztNQUN6QyxJQUFJUyxlQUFlLEdBQUVELFNBQVMsQ0FBQ1IsUUFBUSxDQUFDLENBQUM7TUFDekMsSUFBSWEsZUFBZSxHQUFFRCxTQUFTLENBQUNaLFFBQVEsQ0FBQyxDQUFDO01BQ3pDLElBQUlHLFFBQVEsR0FBRUosU0FBUyxHQUFHRSxTQUFTO01BQ25DLElBQUlHLGFBQWEsR0FBR0wsU0FBUyxHQUFHRyxlQUFlO01BQy9DLElBQUlRLGFBQWEsR0FBR1gsU0FBUyxHQUFHVSxlQUFlO01BQy9DLElBQUlLLGFBQWEsR0FBR2YsU0FBUyxHQUFHYyxlQUFlO01BQy9DLElBQUd0QixXQUFXLENBQUN4QixRQUFRLENBQUNvQyxRQUFRLENBQUMsSUFBSVosV0FBVyxDQUFDeEIsUUFBUSxDQUFDcUMsYUFBYSxDQUFDLElBQUliLFdBQVcsQ0FBQ3hCLFFBQVEsQ0FBQzJDLGFBQWEsQ0FBQyxJQUFJbkIsV0FBVyxDQUFDeEIsUUFBUSxDQUFDK0MsYUFBYSxDQUFDLEVBQUM7UUFDckosSUFBSSxDQUFDbkIsWUFBWSxDQUFDLENBQUM7TUFDckIsQ0FBQyxNQUFJO1FBQ0gsSUFBSVUsVUFBVSxHQUFHMUYsUUFBUSxDQUFDQyxhQUFhLENBQUUseUJBQXdCdUYsUUFBUyxJQUFHLENBQUM7UUFDOUUsSUFBSUcsZUFBZSxHQUFHM0YsUUFBUSxDQUFDQyxhQUFhLENBQUUseUJBQXdCd0YsYUFBYyxJQUFHLENBQUM7UUFDeEYsSUFBSU8sZUFBZSxHQUFHaEcsUUFBUSxDQUFDQyxhQUFhLENBQUUseUJBQXdCOEYsYUFBYyxJQUFHLENBQUM7UUFDeEYsSUFBSUssZUFBZSxHQUFHcEcsUUFBUSxDQUFDQyxhQUFhLENBQUUseUJBQXdCa0csYUFBYyxJQUFHLENBQUM7UUFDeEZULFVBQVUsQ0FBQ2xGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO1FBQzdDaUYsVUFBVSxDQUFDbEYsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO1FBQ3RDO1FBQ0FrRixlQUFlLENBQUNuRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztRQUNsRGtGLGVBQWUsQ0FBQ25GLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztRQUMzQ3VGLGVBQWUsQ0FBQ3hGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO1FBQ2xEdUYsZUFBZSxDQUFDeEYsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO1FBQzNDMkYsZUFBZSxDQUFDNUYsU0FBUyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7UUFDbEQyRixlQUFlLENBQUM1RixTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7UUFDM0NtRSxXQUFXLENBQUNnQixJQUFJLENBQUNKLFFBQVEsQ0FBQztRQUMxQlosV0FBVyxDQUFDZ0IsSUFBSSxDQUFDSCxhQUFhLENBQUM7UUFDL0JiLFdBQVcsQ0FBQ2dCLElBQUksQ0FBQ0csYUFBYSxDQUFDO1FBQy9CbkIsV0FBVyxDQUFDZ0IsSUFBSSxDQUFDTyxhQUFhLENBQUM7TUFDakM7SUFDRjtJQUNBLElBQUksSUFBSSxDQUFDekgsSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUNxRyxXQUFXLEtBQUssVUFBVSxFQUFFO01BQzlELElBQUlFLENBQUMsR0FBR2IsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztNQUMvQixJQUFJYyxDQUFDLEdBQUdkLGdCQUFnQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7TUFDOUIsSUFBSWUsU0FBUyxHQUFFRCxDQUFDLEdBQUMsQ0FBQztNQUNsQixJQUFJVyxTQUFTLEdBQUVYLENBQUMsR0FBQyxDQUFDO01BQ2xCLElBQUllLFNBQVMsR0FBRWYsQ0FBQyxHQUFDLENBQUM7TUFDbEIsSUFBSW1CLFNBQVMsR0FBRW5CLENBQUMsR0FBQyxDQUFDO01BQ2xCLElBQUlFLFNBQVMsR0FBRUgsQ0FBQyxDQUFDSSxRQUFRLENBQUMsQ0FBQztNQUMzQixJQUFJQyxTQUFTLEdBQUVKLENBQUMsQ0FBQ0csUUFBUSxDQUFDLENBQUM7TUFDM0IsSUFBSUUsZUFBZSxHQUFFSixTQUFTLENBQUNFLFFBQVEsQ0FBQyxDQUFDO01BQ3pDLElBQUlTLGVBQWUsR0FBRUQsU0FBUyxDQUFDUixRQUFRLENBQUMsQ0FBQztNQUN6QyxJQUFJYSxlQUFlLEdBQUVELFNBQVMsQ0FBQ1osUUFBUSxDQUFDLENBQUM7TUFDekMsSUFBSWlCLGVBQWUsR0FBRUQsU0FBUyxDQUFDaEIsUUFBUSxDQUFDLENBQUM7TUFDekMsSUFBSUcsUUFBUSxHQUFFSixTQUFTLEdBQUdFLFNBQVM7TUFDbkMsSUFBSUcsYUFBYSxHQUFHTCxTQUFTLEdBQUdHLGVBQWU7TUFDL0MsSUFBSVEsYUFBYSxHQUFHWCxTQUFTLEdBQUdVLGVBQWU7TUFDL0MsSUFBSUssYUFBYSxHQUFHZixTQUFTLEdBQUdjLGVBQWU7TUFDL0MsSUFBSUssYUFBYSxHQUFHbkIsU0FBUyxHQUFHa0IsZUFBZTtNQUMvQyxJQUFHMUIsV0FBVyxDQUFDeEIsUUFBUSxDQUFDb0MsUUFBUSxDQUFDLElBQUlaLFdBQVcsQ0FBQ3hCLFFBQVEsQ0FBQ3FDLGFBQWEsQ0FBQyxJQUFJYixXQUFXLENBQUN4QixRQUFRLENBQUMyQyxhQUFhLENBQUMsSUFBSW5CLFdBQVcsQ0FBQ3hCLFFBQVEsQ0FBQytDLGFBQWEsQ0FBQyxJQUFJdkIsV0FBVyxDQUFDeEIsUUFBUSxDQUFDbUQsYUFBYSxDQUFDLEVBQUM7UUFDNUwsSUFBSSxDQUFDdkIsWUFBWSxDQUFDLENBQUM7TUFDckIsQ0FBQyxNQUFJO1FBQ0gsSUFBSVUsVUFBVSxHQUFHMUYsUUFBUSxDQUFDQyxhQUFhLENBQUUseUJBQXdCdUYsUUFBUyxJQUFHLENBQUM7UUFDOUUsSUFBSUcsZUFBZSxHQUFHM0YsUUFBUSxDQUFDQyxhQUFhLENBQUUseUJBQXdCd0YsYUFBYyxJQUFHLENBQUM7UUFDeEYsSUFBSU8sZUFBZSxHQUFHaEcsUUFBUSxDQUFDQyxhQUFhLENBQUUseUJBQXdCOEYsYUFBYyxJQUFHLENBQUM7UUFDeEYsSUFBSUssZUFBZSxHQUFHcEcsUUFBUSxDQUFDQyxhQUFhLENBQUUseUJBQXdCa0csYUFBYyxJQUFHLENBQUM7UUFDeEYsSUFBSUssZUFBZSxHQUFHeEcsUUFBUSxDQUFDQyxhQUFhLENBQUUseUJBQXdCc0csYUFBYyxJQUFHLENBQUM7UUFDeEZiLFVBQVUsQ0FBQ2xGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO1FBQzdDaUYsVUFBVSxDQUFDbEYsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ25DO1FBQ0FrRixlQUFlLENBQUNuRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztRQUNsRGtGLGVBQWUsQ0FBQ25GLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUN4Q3VGLGVBQWUsQ0FBQ3hGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO1FBQ2xEdUYsZUFBZSxDQUFDeEYsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ3hDMkYsZUFBZSxDQUFDNUYsU0FBUyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7UUFDbEQyRixlQUFlLENBQUM1RixTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDeEMrRixlQUFlLENBQUNoRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztRQUNsRCtGLGVBQWUsQ0FBQ2hHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUN4Q21FLFdBQVcsQ0FBQ2dCLElBQUksQ0FBQ0osUUFBUSxDQUFDO1FBQzFCWixXQUFXLENBQUNnQixJQUFJLENBQUNILGFBQWEsQ0FBQztRQUMvQmIsV0FBVyxDQUFDZ0IsSUFBSSxDQUFDRyxhQUFhLENBQUM7UUFDL0JuQixXQUFXLENBQUNnQixJQUFJLENBQUNPLGFBQWEsQ0FBQztRQUMvQnZCLFdBQVcsQ0FBQ2dCLElBQUksQ0FBQ1csYUFBYSxDQUFDO01BQ2pDO0lBQ0Y7RUFDRjtBQUNGO0FBRUEsSUFBSUUsa0JBQWtCLEdBQUcsSUFBSTNCLFlBQVksQ0FBQyxZQUFZLEVBQUVILG1CQUFtQixDQUFDLENBQUMsQ0FBQztBQUM5RSxJQUFJK0IsaUJBQWlCLEdBQUcsSUFBSTVCLFlBQVksQ0FBQyxXQUFXLEVBQUVILG1CQUFtQixDQUFDLENBQUMsQ0FBQztBQUM1RSxJQUFJZ0MsaUJBQWlCLEdBQUcsSUFBSTdCLFlBQVksQ0FBQyxXQUFXLEVBQUVILG1CQUFtQixDQUFDLENBQUMsQ0FBQztBQUM1RSxJQUFJaUMsa0JBQWtCLEdBQUcsSUFBSTlCLFlBQVksQ0FBQyxZQUFZLEVBQUVILG1CQUFtQixDQUFDLENBQUMsQ0FBQztBQUM5RSxJQUFJa0MsZUFBZSxHQUFHLElBQUkvQixZQUFZLENBQUMsU0FBUyxFQUFFSCxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7QUFFeEU4QixrQkFBa0IsQ0FBQ3pCLFlBQVksQ0FBQyxDQUFDO0FBQ2pDMEIsaUJBQWlCLENBQUMxQixZQUFZLENBQUMsQ0FBQztBQUNoQzJCLGlCQUFpQixDQUFDM0IsWUFBWSxDQUFDLENBQUM7QUFDaEM0QixrQkFBa0IsQ0FBQzVCLFlBQVksQ0FBQyxDQUFDO0FBQ2pDNkIsZUFBZSxDQUFDN0IsWUFBWSxDQUFDLENBQUM7QUFFOUIsTUFBTThCLGFBQWEsR0FBRzlHLFFBQVEsQ0FBQ3NELGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO0FBRWpFd0QsYUFBYSxDQUFDdkUsT0FBTyxDQUFFd0UsWUFBWSxJQUFHO0VBQ3BDQSxZQUFZLENBQUNwRyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsTUFBSTtJQUM3Q29HLFlBQVksQ0FBQ3ZHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO0VBQ2hELENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGcUcsYUFBYSxDQUFDdkUsT0FBTyxDQUFFd0UsWUFBWSxJQUFLO0VBQ3RDQSxZQUFZLENBQUNwRyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsTUFBTTtJQUNoRG9HLFlBQVksQ0FBQ3ZHLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLGtCQUFrQixDQUFDO0VBQ25ELENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLElBQUkrRixrQkFBa0IsR0FBRSxDQUFDO0FBQ3pCLElBQUlDLGVBQWUsR0FBQyxDQUFDO0FBQ3JCLElBQUlDLGNBQWMsR0FBQyxDQUFDO0FBQ3BCLElBQUlDLGNBQWMsR0FBQyxDQUFDO0FBQ3BCLElBQUlDLGVBQWUsR0FBQyxDQUFDO0FBQ3JCLElBQUlDLFlBQVksR0FBQyxDQUFDO0FBR2xCLElBQUlDLGdCQUFnQixHQUFHLENBQUM7QUFDeEIsSUFBSUMscUJBQXFCLEdBQUcsQ0FBQztBQUM3QixJQUFJQyxvQkFBb0IsR0FBRyxDQUFDO0FBQzVCLElBQUlDLG9CQUFvQixHQUFHLENBQUM7QUFDNUIsSUFBSUMscUJBQXFCLEdBQUcsQ0FBQztBQUM3QixJQUFJQyxrQkFBa0IsR0FBRyxDQUFDO0FBSTFCYixhQUFhLENBQUN2RSxPQUFPLENBQUV3RSxZQUFZLElBQUs7RUFDdENBLFlBQVksQ0FBQ3BHLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO0lBQzNDb0csWUFBWSxDQUFDdkcsU0FBUyxDQUFDQyxHQUFHLENBQUMsd0JBQXdCLENBQUM7SUFDcEQsSUFBSXNHLFlBQVksQ0FBQzVELFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7TUFDcEUyRCxZQUFZLENBQUN2RyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7TUFDakNzRyxZQUFZLENBQUN2RyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7TUFDdEM7TUFDQW1ILFVBQVUsQ0FBRSxNQUFJO1FBQUNiLFlBQVksQ0FBQy9GLFdBQVcsR0FBRyxHQUFHO01BQUEsQ0FBQyxFQUFHLElBQUksQ0FBQztNQUN4RGdHLGtCQUFrQixFQUFFO0lBQ3RCLENBQUMsTUFBSTtNQUNIRCxZQUFZLENBQUN2RyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7TUFDcENzRyxZQUFZLENBQUN2RyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7TUFDdENtSCxVQUFVLENBQUUsTUFBSTtRQUFDN0gsY0FBYyxDQUFDaUIsV0FBVyxHQUFDLDJCQUEyQjtNQUFBLENBQUMsRUFBRyxJQUFJLENBQUM7SUFDbEY7SUFFQSxJQUFHK0YsWUFBWSxDQUFDNUQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUk2RCxlQUFlLEtBQUcsQ0FBQyxFQUFDO01BQ25GO01BQ0FXLFVBQVUsQ0FBRSxNQUFJO1FBQUM3SCxjQUFjLENBQUNpQixXQUFXLEdBQUcsa0NBQWtDO01BQUMsQ0FBQyxFQUFHLElBQUksQ0FBQztJQUM1RixDQUFDLE1BQUssSUFBSStGLFlBQVksQ0FBQzVELFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJNkQsZUFBZSxHQUFHLENBQUMsRUFBQztNQUMxRlcsVUFBVSxDQUFFLE1BQUk7UUFBQzdILGNBQWMsQ0FBQ2lCLFdBQVcsR0FBQyw0QkFBNEI7TUFBQSxDQUFDLEVBQUcsSUFBSSxDQUFDO01BQ2pGaUcsZUFBZSxFQUFFO0lBQ25CO0lBQUM7SUFFRCxJQUFHRixZQUFZLENBQUM1RCxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSThELGNBQWMsS0FBRyxDQUFDLEVBQUM7TUFDaEY7TUFDQVUsVUFBVSxDQUFFLE1BQUk7UUFBQzdILGNBQWMsQ0FBQ2lCLFdBQVcsR0FBRyxnQ0FBZ0M7TUFBQyxDQUFDLEVBQUcsSUFBSSxDQUFDO0lBQzFGLENBQUMsTUFBSyxJQUFJK0YsWUFBWSxDQUFDNUQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUk4RCxjQUFjLEdBQUcsQ0FBQyxFQUFDO01BQ3ZGVSxVQUFVLENBQUUsTUFBSTtRQUFDN0gsY0FBYyxDQUFDaUIsV0FBVyxHQUFDLDBCQUEwQjtNQUFBLENBQUMsRUFBRyxJQUFJLENBQUM7TUFDL0VrRyxjQUFjLEVBQUU7SUFDbEI7SUFBQztJQUVELElBQUdILFlBQVksQ0FBQzVELFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJK0QsY0FBYyxLQUFHLENBQUMsRUFBQztNQUNoRjtNQUNBUyxVQUFVLENBQUUsTUFBSTtRQUFDN0gsY0FBYyxDQUFDaUIsV0FBVyxHQUFHLGdDQUFnQztNQUFDLENBQUMsRUFBRyxJQUFJLENBQUM7SUFDMUYsQ0FBQyxNQUFLLElBQUkrRixZQUFZLENBQUM1RCxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSStELGNBQWMsR0FBRyxDQUFDLEVBQUM7TUFDdkZTLFVBQVUsQ0FBRSxNQUFJO1FBQUM3SCxjQUFjLENBQUNpQixXQUFXLEdBQUMsMEJBQTBCO01BQUEsQ0FBQyxFQUFHLElBQUksQ0FBQztNQUMvRW1HLGNBQWMsRUFBRTtJQUNsQjtJQUFDO0lBRUQsSUFBR0osWUFBWSxDQUFDNUQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUlnRSxlQUFlLEtBQUcsQ0FBQyxFQUFDO01BQ2xGO01BQ0FRLFVBQVUsQ0FBRSxNQUFJO1FBQUM3SCxjQUFjLENBQUNpQixXQUFXLEdBQUcsaUNBQWlDO01BQUMsQ0FBQyxFQUFHLElBQUksQ0FBQztJQUMzRixDQUFDLE1BQUssSUFBSStGLFlBQVksQ0FBQzVELFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJZ0UsZUFBZSxHQUFHLENBQUMsRUFBQztNQUN6RlEsVUFBVSxDQUFFLE1BQUk7UUFBQzdILGNBQWMsQ0FBQ2lCLFdBQVcsR0FBQywyQkFBMkI7TUFBQSxDQUFDLEVBQUcsSUFBSSxDQUFDO01BQ2hGb0csZUFBZSxFQUFFO0lBQ25CO0lBQUM7SUFFRCxJQUFHTCxZQUFZLENBQUM1RCxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSWlFLFlBQVksS0FBRyxDQUFDLEVBQUM7TUFDNUU7TUFDQU8sVUFBVSxDQUFFLE1BQUk7UUFBQzdILGNBQWMsQ0FBQ2lCLFdBQVcsR0FBRyw4QkFBOEI7TUFBQyxDQUFDLEVBQUcsSUFBSSxDQUFDO0lBQ3hGLENBQUMsTUFBSyxJQUFJK0YsWUFBWSxDQUFDNUQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUlpRSxZQUFZLEdBQUcsQ0FBQyxFQUFDO01BQ25GTyxVQUFVLENBQUUsTUFBSTtRQUFDN0gsY0FBYyxDQUFDaUIsV0FBVyxHQUFDLHdCQUF3QjtNQUFBLENBQUMsRUFBRyxJQUFJLENBQUM7TUFDN0VxRyxZQUFZLEVBQUU7SUFDaEI7SUFBQztJQUVELElBQUdMLGtCQUFrQixLQUFHLEVBQUUsRUFBQztNQUN6QlksVUFBVSxDQUFFLE1BQUk7UUFBQ25GLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztNQUFBLENBQUMsRUFBRyxJQUFJLENBQUM7TUFDakRrRixVQUFVLENBQUN2RyxHQUFHLEVBQUUsSUFBSSxDQUFDO0lBQ3ZCO0lBSUEsTUFBTXdHLE9BQU8sR0FBRTdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFVBQVUsQ0FBQztJQUNqRDRILE9BQU8sQ0FBQ3JILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUM3Qjs7SUFHQTtJQUNBOztJQUVBLFNBQVNxSCxnQkFBZ0JBLENBQUEsRUFBRztNQUMxQixJQUFJQyxhQUFhLEdBQUczRCxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO01BQzNDO01BQ0EsSUFBSTRELGFBQWEsR0FBRzVELGdCQUFnQixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7TUFDM0M7TUFDQSxJQUFJNkQsbUJBQW1CLEdBQUVGLGFBQWEsQ0FBQzFDLFFBQVEsQ0FBQyxDQUFDO01BQ2pEO01BQ0EsSUFBSTZDLG1CQUFtQixHQUFFRixhQUFhLENBQUMzQyxRQUFRLENBQUMsQ0FBQztNQUNqRDtNQUNBLElBQUk4QyxlQUFlLEdBQUdGLG1CQUFtQixHQUFHQyxtQkFBbUI7O01BRS9EOztNQUVBLElBQUlyRCxZQUFZLENBQUNqRyxNQUFNLEtBQUcsR0FBRyxFQUFDO1FBQzVCNkQsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLENBQUM7UUFDcEMsT0FBTyxFQUFFO01BQ1g7TUFDQSxJQUFHLENBQUNtQyxZQUFZLENBQUN6QixRQUFRLENBQUMrRSxlQUFlLENBQUMsRUFBQztRQUN6Q3RELFlBQVksQ0FBQ2UsSUFBSSxDQUFDdUMsZUFBZSxDQUFDO1FBQ2xDO1FBQ0EsT0FBT0EsZUFBZTtNQUN4QixDQUFDLE1BQUk7UUFDSDtRQUNBLE9BQU9MLGdCQUFnQixDQUFDLENBQUM7TUFDM0I7TUFBQzs7TUFHRDtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7SUFBQztJQUlELElBQUlNLGNBQWMsR0FBRXBJLFFBQVEsQ0FBQ0MsYUFBYSxDQUFFLGdCQUFlNkgsZ0JBQWdCLENBQUMsQ0FBRSxJQUFHLENBQUM7SUFFbEZyRixPQUFPLENBQUNDLEdBQUcsQ0FBQzBGLGNBQWMsQ0FBQzs7SUFFM0I7SUFDSjtJQUNJLElBQUlBLGNBQWMsQ0FBQ2pGLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO01BQzdEO01BQ0F3RSxVQUFVLENBQUUsTUFBSTtRQUFDUSxjQUFjLENBQUM1SCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7TUFBQSxDQUFDLEVBQUcsSUFBSSxDQUFDO01BQzdEO01BQ0FtSCxVQUFVLENBQUUsTUFBSTtRQUFDUSxjQUFjLENBQUNwSCxXQUFXLEdBQUcsR0FBRztNQUFBLENBQUMsRUFBRyxJQUFJLENBQUM7TUFDMURzRyxnQkFBZ0IsRUFBRTtJQUNwQixDQUFDLE1BQUk7TUFDSDtNQUNBTSxVQUFVLENBQUUsTUFBSTtRQUFDUSxjQUFjLENBQUM1SCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7TUFBQyxDQUFDLEVBQUcsSUFBSSxDQUFDO01BQ2pFO01BQ0FtSCxVQUFVLENBQUUsTUFBSTtRQUFDMUgsc0JBQXNCLENBQUNjLFdBQVcsR0FBQywrQkFBK0I7TUFBQSxDQUFDLEVBQUcsSUFBSSxDQUFDO0lBQzlGO0lBRUEsSUFBR29ILGNBQWMsQ0FBQ2pGLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLG9CQUFvQixDQUFDLElBQUltRSxxQkFBcUIsS0FBRyxDQUFDLEVBQUM7TUFDbEc7TUFDQUssVUFBVSxDQUFFLE1BQUk7UUFBQzFILHNCQUFzQixDQUFDYyxXQUFXLEdBQUcscUNBQXFDO01BQUMsQ0FBQyxFQUFHLElBQUksQ0FBQztJQUN2RyxDQUFDLE1BQUssSUFBSW9ILGNBQWMsQ0FBQ2pGLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLG9CQUFvQixDQUFDLElBQUltRSxxQkFBcUIsR0FBRyxDQUFDLEVBQUM7TUFDekdLLFVBQVUsQ0FBRSxNQUFJO1FBQUMxSCxzQkFBc0IsQ0FBQ2MsV0FBVyxHQUFDLGdDQUFnQztNQUFBLENBQUMsRUFBRyxJQUFJLENBQUM7TUFDN0Z1RyxxQkFBcUIsRUFBRTtJQUN6QjtJQUFDO0lBRUQsSUFBR2EsY0FBYyxDQUFDakYsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSW9FLG9CQUFvQixLQUFHLENBQUMsRUFBQztNQUMvRjtNQUNBSSxVQUFVLENBQUUsTUFBSTtRQUFDMUgsc0JBQXNCLENBQUNjLFdBQVcsR0FBRyxtQ0FBbUM7TUFBQyxDQUFDLEVBQUcsSUFBSSxDQUFDO0lBQ3JHLENBQUMsTUFBSyxJQUFJb0gsY0FBYyxDQUFDakYsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSW9FLG9CQUFvQixHQUFHLENBQUMsRUFBQztNQUN0R0ksVUFBVSxDQUFFLE1BQUk7UUFBQzFILHNCQUFzQixDQUFDYyxXQUFXLEdBQUMsOEJBQThCO01BQUEsQ0FBQyxFQUFHLElBQUksQ0FBQztNQUMzRndHLG9CQUFvQixFQUFFO0lBQ3hCO0lBQUM7SUFFRCxJQUFHWSxjQUFjLENBQUNqRixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJcUUsb0JBQW9CLEtBQUcsQ0FBQyxFQUFDO01BQy9GO01BQ0FHLFVBQVUsQ0FBRSxNQUFJO1FBQUMxSCxzQkFBc0IsQ0FBQ2MsV0FBVyxHQUFHLG1DQUFtQztNQUFDLENBQUMsRUFBRyxJQUFJLENBQUM7SUFDckcsQ0FBQyxNQUFLLElBQUlvSCxjQUFjLENBQUNqRixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJcUUsb0JBQW9CLEdBQUcsQ0FBQyxFQUFDO01BQ3RHRyxVQUFVLENBQUUsTUFBSTtRQUFDMUgsc0JBQXNCLENBQUNjLFdBQVcsR0FBQyw4QkFBOEI7TUFBQSxDQUFDLEVBQUcsSUFBSSxDQUFDO01BQzNGeUcsb0JBQW9CLEVBQUU7SUFDeEI7SUFBQztJQUVELElBQUdXLGNBQWMsQ0FBQ2pGLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUlzRSxxQkFBcUIsS0FBRyxDQUFDLEVBQUM7TUFDakc7TUFDQUUsVUFBVSxDQUFFLE1BQUk7UUFBQzFILHNCQUFzQixDQUFDYyxXQUFXLEdBQUcseUNBQXlDO01BQUMsQ0FBQyxFQUFHLElBQUksQ0FBQztJQUMzRyxDQUFDLE1BQUssSUFBSW9ILGNBQWMsQ0FBQ2pGLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUlzRSxxQkFBcUIsR0FBRyxDQUFDLEVBQUU7TUFDekdFLFVBQVUsQ0FBRSxNQUFJO1FBQUMxSCxzQkFBc0IsQ0FBQ2MsV0FBVyxHQUFDLCtCQUErQjtNQUFBLENBQUMsRUFBRyxJQUFJLENBQUM7TUFDNUYwRyxxQkFBcUIsRUFBRTtJQUN6QjtJQUFDO0lBRUQsSUFBR1UsY0FBYyxDQUFDakYsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSXVFLGtCQUFrQixLQUFHLENBQUMsRUFBQztNQUMzRjtNQUNBQyxVQUFVLENBQUUsTUFBSTtRQUFDMUgsc0JBQXNCLENBQUNjLFdBQVcsR0FBRyxpQ0FBaUM7TUFBQyxDQUFDLEVBQUcsSUFBSSxDQUFDO0lBQ25HLENBQUMsTUFBSyxJQUFJb0gsY0FBYyxDQUFDakYsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSXVFLGtCQUFrQixHQUFHLENBQUMsRUFBRTtNQUNuR0MsVUFBVSxDQUFFLE1BQUk7UUFBQzFILHNCQUFzQixDQUFDYyxXQUFXLEdBQUMsNEJBQTRCO01BQUEsQ0FBQyxFQUFHLElBQUksQ0FBQztNQUN6RjJHLGtCQUFrQixFQUFFO0lBQ3RCO0lBQUM7SUFFRCxJQUFHTCxnQkFBZ0IsS0FBRyxFQUFFLEVBQUM7TUFDdkJNLFVBQVUsQ0FBRSxNQUFJO1FBQUNuRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7TUFBQSxDQUFDLEVBQUcsSUFBSSxDQUFDO01BQ2xEa0YsVUFBVSxDQUFDdEcsSUFBSSxFQUFFLElBQUksQ0FBQztJQUN4QjtJQUVBbUIsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLEdBQUU0RSxnQkFBZ0IsQ0FBQztJQUN0RDdFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDZCQUE2QixHQUFFNkUscUJBQXFCLENBQUM7SUFDakU5RSxPQUFPLENBQUNDLEdBQUcsQ0FBQywyQkFBMkIsR0FBRThFLG9CQUFvQixDQUFDO0lBQzlEL0UsT0FBTyxDQUFDQyxHQUFHLENBQUMsMkJBQTJCLEdBQUUrRSxvQkFBb0IsQ0FBQztJQUM5RGhGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDRCQUE0QixHQUFFZ0YscUJBQXFCLENBQUM7SUFDaEVqRixPQUFPLENBQUNDLEdBQUcsQ0FBQyx5QkFBeUIsR0FBRWlGLGtCQUFrQixDQUFDOztJQUs5RDtJQUNJO0lBQ0FDLFVBQVUsQ0FBRSxNQUFJO01BQUNRLGNBQWMsQ0FBQzVILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLHNCQUFzQixDQUFDO0lBQUMsQ0FBQyxFQUFHLElBQUksQ0FBQztJQUUvRW1ILFVBQVUsQ0FBRSxNQUFJO01BQUNDLE9BQU8sQ0FBQ3JILFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUFDLENBQUMsRUFBRyxJQUFJLENBQUM7O0lBUTNEO0lBQ0E7SUFDQTs7SUFFQTtJQUNBO0lBQ0E7RUFHRixDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7O0FBRUZ3QixPQUFPLENBQUNDLEdBQUcsQ0FBQytELGtCQUFrQixDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvRE9NLWludGVyYWN0aW9ucy9ET00taW50ZXJhY3Rpb25zLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMgXyZfdGVzdHMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3JhYk5hbWUsIENyZWF0ZUJvYXQsIGhpdCwgaXNTdW5rLCBHYW1lYm9hcmQgfSBmcm9tIFwiLi4vZnVuY3Rpb25zIF8mX3Rlc3RzL2Z1bmN0aW9uc1wiO1xuXG5mdW5jdGlvbiBleGFtcGxlQWRkKGEsYil7XG4gICAgcmV0dXJuIGErYjtcbn1cblxuXG5leHBvcnR7IGV4YW1wbGVBZGQgfTsiLCJjb25zdCBncmFiTmFtZSA9IChuYW1lKSA9PiBuYW1lO1xuXG5jbGFzcyBDcmVhdGVCb2F0e1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCwgYm9hdE5hbWUsIG51bVRpbWVzSGl0PTAsIGhhc1N1bms9ZmFsc2Upe1xuICAgICAgICB0aGlzLmxlbmd0aD0gbGVuZ3RoO1xuICAgICAgICB0aGlzLm51bVRpbWVzSGl0PSBudW1UaW1lc0hpdDtcbiAgICAgICAgdGhpcy5oYXNTdW5rPSBoYXNTdW5rO1xuICAgICAgICB0aGlzLmJvYXROYW1lPWJvYXROYW1lO1xuICAgIH07XG59O1xuXG5jb25zdCBoaXQ9KGJvYXROYW1lKSA9PiBib2F0TmFtZS5udW1UaW1lc0hpdCsrO1xuXG5jb25zdCBpc1N1bms9IChib2F0TmFtZSk9PiAoYm9hdE5hbWUubGVuZ3RoPT09Ym9hdE5hbWUubnVtVGltZXNIaXQpID8gdHJ1ZSA6IGZhbHNlO1xuXG5jbGFzcyBHYW1lYm9hcmR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5jb29yZGluYXRlcyA9IFtcbiAgICAgICAgICAvLzBcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjAsIHlfbnVtYmVyOiAwLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MCwgeV9udW1iZXI6IDEsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjowLCB5X251bWJlcjogMiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjAsIHlfbnVtYmVyOiAzLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MCwgeV9udW1iZXI6IDQsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjowLCB5X251bWJlcjogNSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjAsIHlfbnVtYmVyOiA2LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MCwgeV9udW1iZXI6IDcsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjowLCB5X251bWJlcjogOCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjAsIHlfbnVtYmVyOiA5LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIC8vMVxuICAgICAgICAgIFtcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MSwgeV9udW1iZXI6IDAsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoxLCB5X251bWJlcjogMSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjEsIHlfbnVtYmVyOiAyLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MSwgeV9udW1iZXI6IDMsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoxLCB5X251bWJlcjogNCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjEsIHlfbnVtYmVyOiA1LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MSwgeV9udW1iZXI6IDYsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoxLCB5X251bWJlcjogNywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjEsIHlfbnVtYmVyOiA4LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MSwgeV9udW1iZXI6IDksIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgLy8yXG4gICAgICAgICAgW1xuICAgICAgICAgICAgeyB4X251bWJlcjoyLCB5X251bWJlcjogMCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjIsIHlfbnVtYmVyOiAxLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MiwgeV9udW1iZXI6IDIsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoyLCB5X251bWJlcjogMywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjIsIHlfbnVtYmVyOiA0LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MiwgeV9udW1iZXI6IDUsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoyLCB5X251bWJlcjogNiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjIsIHlfbnVtYmVyOiA3LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MiwgeV9udW1iZXI6IDgsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoyLCB5X251bWJlcjogOSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICAvLzNcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjMsIHlfbnVtYmVyOiAwLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MywgeV9udW1iZXI6IDEsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjozLCB5X251bWJlcjogMiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjMsIHlfbnVtYmVyOiAzLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MywgeV9udW1iZXI6IDQsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjozLCB5X251bWJlcjogNSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjMsIHlfbnVtYmVyOiA2LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MywgeV9udW1iZXI6IDcsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjozLCB5X251bWJlcjogOCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjMsIHlfbnVtYmVyOiA5LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIC8vNFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NCwgeV9udW1iZXI6IDAsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo0LCB5X251bWJlcjogMSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjQsIHlfbnVtYmVyOiAyLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NCwgeV9udW1iZXI6IDMsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo0LCB5X251bWJlcjogNCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjQsIHlfbnVtYmVyOiA1LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NCwgeV9udW1iZXI6IDYsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo0LCB5X251bWJlcjogNywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjQsIHlfbnVtYmVyOiA4LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NCwgeV9udW1iZXI6IDksIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgLy81XG4gICAgICAgICAgW1xuICAgICAgICAgICAgeyB4X251bWJlcjo1LCB5X251bWJlcjogMCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjUsIHlfbnVtYmVyOiAxLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NSwgeV9udW1iZXI6IDIsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo1LCB5X251bWJlcjogMywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjUsIHlfbnVtYmVyOiA0LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NSwgeV9udW1iZXI6IDUsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo1LCB5X251bWJlcjogNiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjUsIHlfbnVtYmVyOiA3LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NSwgeV9udW1iZXI6IDgsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo1LCB5X251bWJlcjogOSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICAvLzZcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjYsIHlfbnVtYmVyOiAwLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NiwgeV9udW1iZXI6IDEsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo2LCB5X251bWJlcjogMiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjYsIHlfbnVtYmVyOiAzLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NiwgeV9udW1iZXI6IDQsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo2LCB5X251bWJlcjogNSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjYsIHlfbnVtYmVyOiA2LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NiwgeV9udW1iZXI6IDcsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo2LCB5X251bWJlcjogOCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjYsIHlfbnVtYmVyOiA5LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIC8vN1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NywgeV9udW1iZXI6IDAsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo3LCB5X251bWJlcjogMSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjcsIHlfbnVtYmVyOiAyLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NywgeV9udW1iZXI6IDMsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo3LCB5X251bWJlcjogNCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjcsIHlfbnVtYmVyOiA1LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NywgeV9udW1iZXI6IDYsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo3LCB5X251bWJlcjogNywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjcsIHlfbnVtYmVyOiA4LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NywgeV9udW1iZXI6IDksIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgLy84XG4gICAgICAgICAgW1xuICAgICAgICAgICAgeyB4X251bWJlcjo4LCB5X251bWJlcjogMCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjgsIHlfbnVtYmVyOiAxLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OCwgeV9udW1iZXI6IDIsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo4LCB5X251bWJlcjogMywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjgsIHlfbnVtYmVyOiA0LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OCwgeV9udW1iZXI6IDUsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo4LCB5X251bWJlcjogNiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjgsIHlfbnVtYmVyOiA3LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OCwgeV9udW1iZXI6IDgsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo4LCB5X251bWJlcjogOSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICAvLzlcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjksIHlfbnVtYmVyOiAwLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OSwgeV9udW1iZXI6IDEsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo5LCB5X251bWJlcjogMiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjksIHlfbnVtYmVyOiAzLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OSwgeV9udW1iZXI6IDQsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo5LCB5X251bWJlcjogNSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjksIHlfbnVtYmVyOiA2LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OSwgeV9udW1iZXI6IDcsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo5LCB5X251bWJlcjogOCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjksIHlfbnVtYmVyOiA5LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICBdXG4gICAgICAgIF07XG4gICAgfTtcblxuICAgIHBsYWNlKHNoaXBMZW5ndGgsIHZlcnRpY2FsT3JIb3Jpem9udGFsLCB4TnVtYmVyLCB5TnVtYmVyLCBib2F0TmFtZU9iaiwgYm9hdE5hbWUpe1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYoeE51bWJlcitpPDAgfHwgeE51bWJlcitpPjkgfHwgeU51bWJlci1pPDAgfHwgeU51bWJlci1pPjkpe1xuICAgICAgICAgIHJldHVybiBcIkludmFsaWQgZW50cnksIHNoaXAgaXMgbm90IHdpdGhpbiB0aGUgbGltaXRzIG9mIHRoZSBib2FyZC5UcnkgYWdhaW4uXCI7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh2ZXJ0aWNhbE9ySG9yaXpvbnRhbCA9PT0gXCJob3Jpem9udGFsXCIpe1xuICAgICAgICAgIHRoaXMuY29vcmRpbmF0ZXNbeE51bWJlciArIGldW3lOdW1iZXJdLnN0YXR1cyA9IFwiZmlsbGVkXCI7XG4gICAgICAgICAgdGhpcy5jb29yZGluYXRlc1t4TnVtYmVyICsgaV1beU51bWJlcl0uYm9hdE5hbWUgPSBib2F0TmFtZTtcbiAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW3hOdW1iZXIgKyBpXVt5TnVtYmVyXS5ib2F0TmFtZU9iaiA9IGJvYXROYW1lT2JqO1xuICAgICAgICB9O1xuICAgICAgICBpZiAodmVydGljYWxPckhvcml6b250YWwgPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgIHRoaXMuY29vcmRpbmF0ZXNbeE51bWJlcl1beU51bWJlciAtIGldLnN0YXR1cyA9IFwiZmlsbGVkXCI7XG4gICAgICAgICAgdGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyIC0gaV0uYm9hdE5hbWUgPSBib2F0TmFtZTtcbiAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW3hOdW1iZXJdW3lOdW1iZXIgLSBpXS5ib2F0TmFtZU9iaiA9IGJvYXROYW1lT2JqO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgcmVjZWl2ZUF0dGFjayh4TnVtYmVyLCB5TnVtYmVyKXtcbiAgICAgIGlmICh4TnVtYmVyIDwgMCB8fCB4TnVtYmVyID4gOSB8fCB5TnVtYmVyIDwgMCB8fCB5TnVtYmVyID4gOSkge1xuICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGVudHJ5LCBzaGlwIGlzIG5vdCB3aXRoaW4gdGhlIGxpbWl0cyBvZiB0aGUgYm9hcmQuVHJ5IGFnYWluLlwiO1xuICAgICAgfVxuICAgICAgaWYodGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyXS53YXNQaWNrZWQ9PT10cnVlKXtcbiAgICAgICAgcmV0dXJuIGBJbnZhbGlkIGVudHJ5LCBjb29yZGluYXRlcyAke3hOdW1iZXJ9LCR7eU51bWJlcn0gd2FzIGFscmVhZHkgYXR0YWNrZWQuVHJ5IGFnYWluLmA7XG4gICAgICB9O1xuICAgICAgaWYgKHRoaXMuY29vcmRpbmF0ZXNbeE51bWJlcl1beU51bWJlcl0uc3RhdHVzID09PSBcImVtcHR5XCIpIHtcbiAgICAgICAgLy9QTEFDRUhPTERFUjogd2hhdCB0byBkby9kaXNwbGF5IHdpdGggbWlzc2VkIGF0dGFja3NcbiAgICAgICAgdGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyXS53YXNQaWNrZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gYE1pc3NlZCEgTm8gaGl0IG9uIGNvb3JkaW5hdGVzICR7eE51bWJlcn0sJHt5TnVtYmVyfWA7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyXS5zdGF0dXMgPT09IFwiZmlsbGVkXCIpIHtcbiAgICAgICAgdGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyXS53YXNQaWNrZWQgPSB0cnVlO1xuICAgICAgICBoaXQodGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyXS5ib2F0TmFtZU9iaik7XG4gICAgICAgIGlmIChpc1N1bmsodGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyXS5ib2F0TmFtZU9iaik9PT10cnVlKSB7XG4gICAgICAgICAgcmV0dXJuIGBIaXQhIGArKHRoaXMuY29vcmRpbmF0ZXNbeE51bWJlcl1beU51bWJlcl0uYm9hdE5hbWUpK2AgaGFzIGJlZW4gaGl0IG9uIGNvb3JkaW5hdGVzICR7eE51bWJlcn0sJHt5TnVtYmVyfSwgYW5kIGhhcyBiZWVuIHN1bmshYDtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGBIaXQhIGArKHRoaXMuY29vcmRpbmF0ZXNbeE51bWJlcl1beU51bWJlcl0uYm9hdE5hbWUpK2AgaGFzIGJlZW4gaGl0IG9uIGNvb3JkaW5hdGVzICR7eE51bWJlcn0sJHt5TnVtYmVyfWA7XG4gICAgICB9XG4gICAgfTtcbn07XG5cblxuZXhwb3J0IHsgZ3JhYk5hbWUsIENyZWF0ZUJvYXQsIGhpdCwgaXNTdW5rLCBHYW1lYm9hcmQgfTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHksXFxuaHRtbCB7XFxuICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxuICBtYXJnaW46IDA7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlOyAqL1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgI2I0YjViNSwgI2IyYzBjNCwgI2IyY2FkOCwgI2JjZDFlZCwgI2QwZDZmZik7XFxufVxcbjpyb290IHtcXG4gIC8qIC0tY3VzdG9tLW5hbWU6IHZhbHVlOyAqL1xcbiAgLyogLS1saWdodC1ncmVlbi1iZzogIzQ3NjUyOTsgKi9cXG4gIC8qIGV4YW1wbGUsIGNvbG9yOiB2YXIoLS1uYXZ5LWNscikgKi9cXG4gIC0tcHJpbWFyeS1jbHI6ICM4QUE2QTM7XFxuICAtLXNlY29uZGFyeS1jbHI6ICM4QUE2QTM7XFxuICAtLWFjY2VudC1jbHI6ICM4QUE2QTM7XFxufVxcblxcbi8qIC5wcmVsb2FkZXJ7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTAwO1xcbn0gKi9cXG5cXG4vKiAubG9hZGVyIHsgKi9cXG4gIC8qIHdpZHRoOiAyMCU7IGNvbnRyb2wgdGhlIHNpemUgKi9cXG4gIC8qIGFzcGVjdC1yYXRpbzogOC81O1xcbiAgLS1fZzogbm8tcmVwZWF0IHJhZGlhbC1ncmFkaWVudCgjMDAwIDY4JSwjMDAwMCA3MSUpO1xcbiAgLXdlYmtpdC1tYXNrOiB2YXIoLS1fZyksdmFyKC0tX2cpLHZhcigtLV9nKTtcXG4gIC13ZWJraXQtbWFzay1zaXplOiAyNSUgNDAlO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBhbmltYXRpb246IGxvYWQgMnMgaW5maW5pdGU7XFxuICB6LWluZGV4OiAxMDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmxvYWRlci1iYWNrZ3JvdW5ke1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgI2I0YjViNSwgI2IyYzBjNCwgI2IyY2FkOCwgI2JjZDFlZCwgI2QwZDZmZik7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG9wYWNpdHk6IDEwMCU7XFxuICB6LWluZGV4OiA0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGxvYWQge1xcbiAgMCUgICAgey13ZWJraXQtbWFzay1wb3NpdGlvbjogMCUgMCUgICw1MCUgMCUgICwxMDAlIDAlICB9XFxuICAxNi42NyV7LXdlYmtpdC1tYXNrLXBvc2l0aW9uOiAwJSAxMDAlLDUwJSAwJSAgLDEwMCUgMCUgIH1cXG4gIDMzLjMzJXstd2Via2l0LW1hc2stcG9zaXRpb246IDAlIDEwMCUsNTAlIDEwMCUsMTAwJSAwJSAgfVxcbiAgNTAlICAgey13ZWJraXQtbWFzay1wb3NpdGlvbjogMCUgMTAwJSw1MCUgMTAwJSwxMDAlIDEwMCV9XFxuICA2Ni42NyV7LXdlYmtpdC1tYXNrLXBvc2l0aW9uOiAwJSAwJSAgLDUwJSAxMDAlLDEwMCUgMTAwJX1cXG4gIDgzLjMzJXstd2Via2l0LW1hc2stcG9zaXRpb246IDAlIDAlICAsNTAlIDAlICAsMTAwJSAxMDAlfVxcbiAgMTAwJSAgey13ZWJraXQtbWFzay1wb3NpdGlvbjogMCUgMCUgICw1MCUgMCUgICwxMDAlIDAlICB9XFxufVxcblxcbi5kb25lLWxvYWRpbmd7XFxuICBhbmltYXRpb246IGxvYWRpbmctY29tcGxldGVkIDIwMDBtcztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGxvYWRpbmctY29tcGxldGVke1xcbiAgMTAwJXtcXG4gICAgb3BhY2l0eTogMCU7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB9XFxufSAqL1xcblxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICAgIG1hcmdpbjogMHJlbTtcXG4gICAgYm9yZGVyOiAuMjVyZW0gc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG5hdnk7XFxuICAgIGNvbG9yOiBzaWx2ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDByZW07XFxufVxcbmZpZWxkc2V0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5mb3JtLnBsYXllci1uYW1le1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zdWJtaXQtbmFtZS1idG57XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgcGFkZGluZzogLjVyZW07XFxufVxcbi5uYW1lLXBsYXRlLFxcbi5jb21wdXRlci1uYW1lLXBsYXRlLCBcXG4uYm9hdC1zZWxlY3Rpb24tdGl0bGUsXFxuLmJvYXQtb3JpZW50YXRpb24tdGl0bGV7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbnRhYmxlLCB0aCwgdGQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbi5ncmlkLFxcbi5jb21wdXRlci1ncmlkLFxcbi5ib2F0LXNlbGVjdGlvbixcXG4uYm9hdC1vcmllbnRhdGlvbntcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmJvYXQtc2VsZWN0aW9uLWJ0bnMsXFxuLmJvYXQtb3JpZW50YXRpb24tYnRuc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IC4yNXJlbTtcXG59XFxudGgsIHRke1xcbiAgcGFkZGluZy10b3A6IC4yNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAuMjVyZW07XFxuICB3aWR0aDogMnJlbTtcXG59XFxuLmNsaWNrZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcbi5vdXRzaWRlLWdyaWR7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4ub3V0c2lkZS1ncmlkLWVycm9ye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYW5pbWF0aW9uLW5hbWU6IG9mZi1ncmlkLWVycm9yO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcbn1cXG5Aa2V5ZnJhbWVzIG9mZi1ncmlkLWVycm9ye1xcbiAgZnJvbSB7YmFja2dyb3VuZC1jb2xvcjogcmVkO31cXG4gIHRvIHtiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTt9XFxufVxcbi50YWJsZS1jbGFzcyxcXG4uY29tcHV0ZXItdGFibGUtY2xhc3N7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5ncmlkLFxcbi5jb21wdXRlci1ncmlke1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY2xpY2stYnRucy1tb2RhbHtcXG4gIHdpZHRoOiA0MCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICAvKiBtYXJnaW46IGF1dG87ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxOTQsIDE5NCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBvcGFjaXR5OiAwJTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XFxufVxcbi5zaG93e1xcbiAgb3BhY2l0eTogMTAwJTtcXG59XFxuLnBoYXNlZC1vdXR7XFxuICBvcGFjaXR5OiAzMCU7XFxufVxcbi5zZWxlY3RlZHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4uY29tcHV0ZXItc2VsZWN0ZWR7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cXG4gIG9wYWNpdHk6IDEwMCU7XFxufVxcbi5jb21wdXRlci1jbGlja2Vke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY29tcHV0ZXItY2VsbC10YXJnZXRlZHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBjb21wdXRlci1jZWxsLXRhcmdldGVkO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyNTBtcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDg7XFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxufVxcbkBrZXlmcmFtZXMgY29tcHV0ZXItY2VsbC10YXJnZXRlZHtcXG4gIGZyb20ge2JhY2tncm91bmQtY29sb3I6IG9yYW5nZTt9XFxuICB0byB7YmFja2dyb3VuZC1jb2xvcjogcmVkO31cXG59XFxuLnBsYXllci1jZWxsLXRhcmdldGVke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGNvbXB1dGVyLWNlbGwtdGFyZ2V0ZWQ7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDI1MG1zO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogODtcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG59XFxuLmhpdHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIC8qIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zOyAqL1xcbiAgLyogdHJhbnNpdGlvbi1kZWxheTogMTAwMG1zOyAqL1xcbn1cXG4ubWlzc2Vke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogMjAwbXM7XFxufVxcbi5vdmVybGF5LnNob3d7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuLnNjb3JlYm9hcmQtdGl0bGV7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIG1hcmdpbi1yaWdodDogLjI1cmVtO1xcbn1cXG4uc2NvcmVib2FyZC1kaXNwbGF5e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDByZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgLyogRnJvbSBodHRwczovL2Nzcy5nbGFzcyAqL1xcbmJhY2tncm91bmQ6IHJnYmEoMjQ1LCAyNDYsIDI1NSwgMC4xOSk7XFxuLyogYm9yZGVyLXJhZGl1czogMTZweDsgKi9cXG5ib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG5iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTQuMXB4KTtcXG4td2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNC4xcHgpO1xcbmJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjQ1LCAyNDYsIDI1NSwgMC4xNyk7XFxuei1pbmRleDogMTtcXG59XFxuLyogLnNjb3JlYm9hcmQtdGV4dHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMDBtcztcXG59ICovXFxuLnNjb3JlYm9hcmQtY29tcHV0ZXItdGV4dHtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbn1cXG4uaGlkZXtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgb3BhY2l0eTogMCU7XFxuICB0cmFuc2l0aW9uOiAyNTBtcztcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XFxufVxcbi5pbmFjdGl2ZXtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ub3ZlcmxheS1mb3ItcmVzdWx0c3tcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogMjAwbXM7XFxufVxcblxcbi5vdmVybGF5LWZvci1yZXN1bHRzLmFjdGl2ZXtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4ud2luLWJhbm5lcixcXG4ubG9zZS1iYW5uZXJ7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAyO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXG4gIGhlaWdodDogYXV0bztcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB3aWR0aDogOTAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ud2luLWJhbm5lci5hY3RpdmUsXFxuLmxvc2UtYmFubmVyLmFjdGl2ZXtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcbn1cXG5cXG4ud2luLWJhbm5lcntcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG59XFxuLmxvc2UtYmFubmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgODYsIDg2KTtcXG59XFxuLmNvbmdyYXRzLFxcbi55b3UtbG9zdHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuLnlvdS13b24sIFxcbi5iZXR0ZXItbHVja3tcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbn1cXG5idXR0b257XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuLnNtYWxse1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRSxzQkFBc0I7QUFDeEI7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULCtCQUErQjtFQUMvQiwrRkFBK0Y7QUFDakc7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQiwrQkFBK0I7RUFDL0Isb0NBQW9DO0VBQ3BDLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIscUJBQXFCO0FBQ3ZCOztBQUVBOzs7Ozs7R0FNRzs7QUFFSCxjQUFjO0VBQ1osaUNB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QUNBOztHQUVHO0FBQ0g7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGVBQWU7RUFDZixVQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVM7RUFDVCx5Q0FBeUM7RUFDekMsWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7O0VBRUUseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxrQ0FBa0M7QUFDcEM7QUFDQTs7RUFFRSxlQUFlO0FBQ2pCO0FBQ0E7O0VBRUUsZUFBZTtFQUNmLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5LFxcbmh0bWwge1xcbiAgLyogaGVpZ2h0OiAxMDAlOyAqL1xcbiAgbWFyZ2luOiAwO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTsgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICNiNGI1YjUsICNiMmMwYzQsICNiMmNhZDgsICNiY2QxZWQsICNkMGQ2ZmYpO1xcbn1cXG46cm9vdCB7XFxuICAvKiAtLWN1c3RvbS1uYW1lOiB2YWx1ZTsgKi9cXG4gIC8qIC0tbGlnaHQtZ3JlZW4tYmc6ICM0NzY1Mjk7ICovXFxuICAvKiBleGFtcGxlLCBjb2xvcjogdmFyKC0tbmF2eS1jbHIpICovXFxuICAtLXByaW1hcnktY2xyOiAjOEFBNkEzO1xcbiAgLS1zZWNvbmRhcnktY2xyOiAjOEFBNkEzO1xcbiAgLS1hY2NlbnQtY2xyOiAjOEFBNkEzO1xcbn1cXG5cXG4vKiAucHJlbG9hZGVye1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEwMDtcXG59ICovXFxuXFxuLyogLmxvYWRlciB7ICovXFxuICAvKiB3aWR0aDogMjAlOyBjb250cm9sIHRoZSBzaXplICovXFxuICAvKiBhc3BlY3QtcmF0aW86IDgvNTtcXG4gIC0tX2c6IG5vLXJlcGVhdCByYWRpYWwtZ3JhZGllbnQoIzAwMCA2OCUsIzAwMDAgNzElKTtcXG4gIC13ZWJraXQtbWFzazogdmFyKC0tX2cpLHZhcigtLV9nKSx2YXIoLS1fZyk7XFxuICAtd2Via2l0LW1hc2stc2l6ZTogMjUlIDQwJTtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgYW5pbWF0aW9uOiBsb2FkIDJzIGluZmluaXRlO1xcbiAgei1pbmRleDogMTA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5sb2FkZXItYmFja2dyb3VuZHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICNiNGI1YjUsICNiMmMwYzQsICNiMmNhZDgsICNiY2QxZWQsICNkMGQ2ZmYpO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAxMDAlO1xcbiAgei1pbmRleDogNDtcXG59XFxuXFxuQGtleWZyYW1lcyBsb2FkIHtcXG4gIDAlICAgIHstd2Via2l0LW1hc2stcG9zaXRpb246IDAlIDAlICAsNTAlIDAlICAsMTAwJSAwJSAgfVxcbiAgMTYuNjcley13ZWJraXQtbWFzay1wb3NpdGlvbjogMCUgMTAwJSw1MCUgMCUgICwxMDAlIDAlICB9XFxuICAzMy4zMyV7LXdlYmtpdC1tYXNrLXBvc2l0aW9uOiAwJSAxMDAlLDUwJSAxMDAlLDEwMCUgMCUgIH1cXG4gIDUwJSAgIHstd2Via2l0LW1hc2stcG9zaXRpb246IDAlIDEwMCUsNTAlIDEwMCUsMTAwJSAxMDAlfVxcbiAgNjYuNjcley13ZWJraXQtbWFzay1wb3NpdGlvbjogMCUgMCUgICw1MCUgMTAwJSwxMDAlIDEwMCV9XFxuICA4My4zMyV7LXdlYmtpdC1tYXNrLXBvc2l0aW9uOiAwJSAwJSAgLDUwJSAwJSAgLDEwMCUgMTAwJX1cXG4gIDEwMCUgIHstd2Via2l0LW1hc2stcG9zaXRpb246IDAlIDAlICAsNTAlIDAlICAsMTAwJSAwJSAgfVxcbn1cXG5cXG4uZG9uZS1sb2FkaW5ne1xcbiAgYW5pbWF0aW9uOiBsb2FkaW5nLWNvbXBsZXRlZCAyMDAwbXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBsb2FkaW5nLWNvbXBsZXRlZHtcXG4gIDEwMCV7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgfVxcbn0gKi9cXG5cXG4uaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgICBtYXJnaW46IDByZW07XFxuICAgIGJvcmRlcjogLjI1cmVtIHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZ5O1xcbiAgICBjb2xvcjogc2lsdmVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xcbn1cXG5maWVsZHNldHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uZm9ybS5wbGF5ZXItbmFtZXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc3VibWl0LW5hbWUtYnRue1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIHBhZGRpbmc6IC41cmVtO1xcbn1cXG4ubmFtZS1wbGF0ZSxcXG4uY29tcHV0ZXItbmFtZS1wbGF0ZSwgXFxuLmJvYXQtc2VsZWN0aW9uLXRpdGxlLFxcbi5ib2F0LW9yaWVudGF0aW9uLXRpdGxle1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG50YWJsZSwgdGgsIHRkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4uZ3JpZCxcXG4uY29tcHV0ZXItZ3JpZCxcXG4uYm9hdC1zZWxlY3Rpb24sXFxuLmJvYXQtb3JpZW50YXRpb257XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5ib2F0LXNlbGVjdGlvbi1idG5zLFxcbi5ib2F0LW9yaWVudGF0aW9uLWJ0bnN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAuMjVyZW07XFxufVxcbnRoLCB0ZHtcXG4gIHBhZGRpbmctdG9wOiAuMjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogLjI1cmVtO1xcbiAgd2lkdGg6IDJyZW07XFxufVxcbi5jbGlja2Vke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG4ub3V0c2lkZS1ncmlke1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLm91dHNpZGUtZ3JpZC1lcnJvcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBvZmYtZ3JpZC1lcnJvcjtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNDAwbXM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG59XFxuQGtleWZyYW1lcyBvZmYtZ3JpZC1lcnJvcntcXG4gIGZyb20ge2JhY2tncm91bmQtY29sb3I6IHJlZDt9XFxuICB0byB7YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7fVxcbn1cXG4udGFibGUtY2xhc3MsXFxuLmNvbXB1dGVyLXRhYmxlLWNsYXNze1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uZ3JpZCxcXG4uY29tcHV0ZXItZ3JpZHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNsaWNrLWJ0bnMtbW9kYWx7XFxuICB3aWR0aDogNDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgLyogbWFyZ2luOiBhdXRvOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTk0LCAxOTQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgb3BhY2l0eTogMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xcbn1cXG4uc2hvd3tcXG4gIG9wYWNpdHk6IDEwMCU7XFxufVxcbi5waGFzZWQtb3V0e1xcbiAgb3BhY2l0eTogMzAlO1xcbn1cXG4uc2VsZWN0ZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuLmNvbXB1dGVyLXNlbGVjdGVke1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXFxuICBvcGFjaXR5OiAxMDAlO1xcbn1cXG4uY29tcHV0ZXItY2xpY2tlZHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNvbXB1dGVyLWNlbGwtdGFyZ2V0ZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBhbmltYXRpb24tbmFtZTogY29tcHV0ZXItY2VsbC10YXJnZXRlZDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMjUwbXM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiA4O1xcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcbn1cXG5Aa2V5ZnJhbWVzIGNvbXB1dGVyLWNlbGwtdGFyZ2V0ZWR7XFxuICBmcm9tIHtiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7fVxcbiAgdG8ge2JhY2tncm91bmQtY29sb3I6IHJlZDt9XFxufVxcbi5wbGF5ZXItY2VsbC10YXJnZXRlZHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBjb21wdXRlci1jZWxsLXRhcmdldGVkO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyNTBtcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDg7XFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxufVxcbi5oaXR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAvKiB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtczsgKi9cXG4gIC8qIHRyYW5zaXRpb24tZGVsYXk6IDEwMDBtczsgKi9cXG59XFxuLm1pc3NlZHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcbi5vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IDIwMG1zO1xcbn1cXG4ub3ZlcmxheS5zaG93e1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcbi5zY29yZWJvYXJkLXRpdGxle1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBtYXJnaW4tcmlnaHQ6IC4yNXJlbTtcXG59XFxuLnNjb3JlYm9hcmQtZGlzcGxheXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIC8qIEZyb20gaHR0cHM6Ly9jc3MuZ2xhc3MgKi9cXG5iYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMjQ2LCAyNTUsIDAuMTkpO1xcbi8qIGJvcmRlci1yYWRpdXM6IDE2cHg7ICovXFxuYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE0LjFweCk7XFxuLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTQuMXB4KTtcXG5ib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI0NSwgMjQ2LCAyNTUsIDAuMTcpO1xcbnotaW5kZXg6IDE7XFxufVxcbi8qIC5zY29yZWJvYXJkLXRleHR7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDAwbXM7XFxufSAqL1xcbi5zY29yZWJvYXJkLWNvbXB1dGVyLXRleHR7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG59XFxuLmhpZGV7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIG9wYWNpdHk6IDAlO1xcbiAgdHJhbnNpdGlvbjogMjUwbXM7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xcbn1cXG4uaW5hY3RpdmV7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLm92ZXJsYXktZm9yLXJlc3VsdHN7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC41KTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IDIwMG1zO1xcbn1cXG5cXG4ub3ZlcmxheS1mb3ItcmVzdWx0cy5hY3RpdmV7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLndpbi1iYW5uZXIsXFxuLmxvc2UtYmFubmVye1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMjtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLndpbi1iYW5uZXIuYWN0aXZlLFxcbi5sb3NlLWJhbm5lci5hY3RpdmV7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXG59XFxuXFxuLndpbi1iYW5uZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxufVxcbi5sb3NlLWJhbm5lcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDg2LCA4Nik7XFxufVxcbi5jb25ncmF0cyxcXG4ueW91LWxvc3R7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcbi55b3Utd29uLCBcXG4uYmV0dGVyLWx1Y2t7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG59XFxuYnV0dG9ue1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcbi5zbWFsbHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQge1xuICBncmFiTmFtZSxcbiAgQ3JlYXRlQm9hdCxcbiAgaGl0LFxuICBpc1N1bmssXG4gIEdhbWVib2FyZCxcbn0gZnJvbSBcIi4uL3NyYy9mdW5jdGlvbnMgXyZfdGVzdHMvZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBleGFtcGxlQWRkIH0gZnJvbSBcIi4uL3NyYy9ET00taW50ZXJhY3Rpb25zL0RPTS1pbnRlcmFjdGlvbnNcIjtcblxuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCk9Pntcbi8vIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGVyXCIpO1xuLy8gbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJkb25lLWxvYWRpbmdcIik7XG4vLyB9KTtcblxubGV0IHNjb3JlYm9hcmRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY29yZWJvYXJkLXRleHRcIik7XG5sZXQgc2NvcmVib2FyZENvbXB1dGVyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NvcmVib2FyZC1jb21wdXRlci10ZXh0XCIpO1xuXG5jb25zdCBuYW1lUGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hbWUtcGxhdGVcIik7XG5jb25zdCBuYW1lU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLnBsYXllci1uYW1lXCIpO1xuXG5jb25zdCBib2F0U2VsZWN0aW9uU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hdC1zZWxlY3Rpb25cIik7XG5jb25zdCBib2F0T3JpZW50YXRpb25TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2F0LW9yaWVudGF0aW9uXCIpO1xuY29uc3QgY29tcHV0ZXJTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlci1ncmlkXCIpO1xuY29tcHV0ZXJTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJzbWFsbFwiKTtcbmNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyaWRcIik7XG5cblxubmFtZVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IG5hbWUgPSBlLmNvbXBvc2VkUGF0aCgpWzBdWzFdLnZhbHVlO1xuICBuYW1lUGxhdGUudGV4dENvbnRlbnQgPSBuYW1lO1xuICBuYW1lU3VibWl0LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICBib2F0U2VsZWN0aW9uU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgYm9hdE9yaWVudGF0aW9uU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgc2NvcmVib2FyZFRleHQudGV4dENvbnRlbnQ9XCJQaWNrIHlvdXIgYm9hdCwgYW5kIGJvYXQgb3JpZW50YXRpb24uIFRoZW4gcGxhY2UgaXQgb24geW91ciBncmlkLlwiXG59KTtcblxuXG5cbmxldCBvdmVybGF5Rm9yUmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheS1mb3ItcmVzdWx0c1wiKTtcbmxldCB3aW5CYW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbi1iYW5uZXJcIik7XG5sZXQgbG9zZUJhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9zZS1iYW5uZXJcIik7XG5cbmZ1bmN0aW9uIHdpbigpe1xuICBvdmVybGF5Rm9yUmVzdWx0cy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB3aW5CYW5uZXIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgcmV0dXJuO1xufTtcblxuZnVuY3Rpb24gbG9zZSgpe1xuICBvdmVybGF5Rm9yUmVzdWx0cy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBsb3NlQmFubmVyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIHJldHVybjtcbn07XG5cblxuZ3JpZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc3QgeFZhbHVlID0gZS5jb21wb3NlZFBhdGgoKVswXS5kYXRhc2V0LnhWYWx1ZTtcbiAgY29uc3QgeVZhbHVlID0gZS5jb21wb3NlZFBhdGgoKVswXS5kYXRhc2V0LnlWYWx1ZTtcblxuICBpZiAoeFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh4VmFsdWUpO1xuICAgIC8vIGNvbnNvbGUubG9nKHlWYWx1ZSk7XG4gIH1cbn0pO1xuXG5jb25zdCBwYXRyb2xCb2F0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXRyb2wtYm9hdC1idG5cIik7XG5jb25zdCBzdWJtYXJpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1hcmluZS1idG5cIik7XG5jb25zdCBkZXN0cm95ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc3Ryb3llci1idG5cIik7XG5jb25zdCBiYXR0bGVzaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXR0bGVzaGlwLWJ0blwiKTtcbmNvbnN0IGNhcnJpZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcnJpZXItYnRuXCIpO1xuY29uc3QgaG9yaXphbnRhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9yaXphbnRhbC1idG5cIik7XG5jb25zdCB2ZXJ0aWNhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmVydGljYWwtYnRuXCIpO1xuXG5mdW5jdGlvbiBib2F0U2VsZWN0aW9uQnV0dG9uRnVuY3Rpb24oXG4gIGJ0bkNsaWNrZWQsXG4gIGJ0bkFyciA9IFtwYXRyb2xCb2F0LCBzdWJtYXJpbmUsIGRlc3Ryb3llciwgYmF0dGxlc2hpcCwgY2Fycmllcl1cbikge1xuICBidG5DbGlja2VkLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICBsZXQgcmVtYWluaW5nQnRucyA9IGJ0bkFyci5maWx0ZXIoKGJ0bikgPT4gYnRuICE9PSBidG5DbGlja2VkKTtcbiAgcmVtYWluaW5nQnRucy5mb3JFYWNoKChidG4pID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKSk7XG59XG5cbmZ1bmN0aW9uIGJvYXRPcmllbnRhdGlvbkJ1dHRvbkZ1bmN0aW9uKFxuICBidG5DbGlja2VkLFxuICBidG5BcnIgPSBbaG9yaXphbnRhbCwgdmVydGljYWxdXG4pIHtcbiAgYnRuQ2xpY2tlZC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgbGV0IHJlbWFpbmluZ0J0bnMgPSBidG5BcnIuZmlsdGVyKChidG4pID0+IGJ0biAhPT0gYnRuQ2xpY2tlZCk7XG4gIHJlbWFpbmluZ0J0bnMuZm9yRWFjaCgoYnRuKSA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIikpO1xufVxuXG5wYXRyb2xCb2F0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zb2xlLmxvZyhlLmNvbXBvc2VkUGF0aCgpWzBdLmRhdGFzZXQucGF0cm9sQm9hdFNwYWNlcyk7XG4gIGJvYXRTZWxlY3Rpb25CdXR0b25GdW5jdGlvbihwYXRyb2xCb2F0KTtcbn0pO1xuXG5zdWJtYXJpbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnNvbGUubG9nKGUuY29tcG9zZWRQYXRoKClbMF0uZGF0YXNldC5zdWJtYXJpbmVTcGFjZXMpO1xuICBib2F0U2VsZWN0aW9uQnV0dG9uRnVuY3Rpb24oc3VibWFyaW5lKTtcbn0pO1xuXG5kZXN0cm95ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnNvbGUubG9nKGUuY29tcG9zZWRQYXRoKClbMF0uZGF0YXNldC5kZXN0cm95ZXJTcGFjZXMpO1xuICBib2F0U2VsZWN0aW9uQnV0dG9uRnVuY3Rpb24oZGVzdHJveWVyKTtcbn0pO1xuXG5iYXR0bGVzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zb2xlLmxvZyhlLmNvbXBvc2VkUGF0aCgpWzBdLmRhdGFzZXQuYmF0dGxlc2hpcFNwYWNlcyk7XG4gIGJvYXRTZWxlY3Rpb25CdXR0b25GdW5jdGlvbihiYXR0bGVzaGlwKTtcbn0pO1xuXG5jYXJyaWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zb2xlLmxvZyhlLmNvbXBvc2VkUGF0aCgpWzBdLmRhdGFzZXQuY2FycmllclNwYWNlcyk7XG4gIGJvYXRTZWxlY3Rpb25CdXR0b25GdW5jdGlvbihjYXJyaWVyKTtcbn0pO1xuXG5ob3JpemFudGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zb2xlLmxvZyhlLmNvbXBvc2VkUGF0aCgpWzBdLmRhdGFzZXQuYm9hdE9yaWVudGF0aW9uKTtcbiAgYm9hdE9yaWVudGF0aW9uQnV0dG9uRnVuY3Rpb24oaG9yaXphbnRhbCk7XG59KTtcblxudmVydGljYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnNvbGUubG9nKGUuY29tcG9zZWRQYXRoKClbMF0uZGF0YXNldC5ib2F0T3JpZW50YXRpb24pO1xuICBib2F0T3JpZW50YXRpb25CdXR0b25GdW5jdGlvbih2ZXJ0aWNhbCk7XG59KTtcblxuLy9jbGljay1idG5zLW1vZGFsXG5jb25zdCBjbGlja0J0bnNNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xpY2stYnRucy1tb2RhbFwiKTtcbmNvbnN0IHRhYmxlQ2xhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlLWNsYXNzXCIpO1xuXG50YWJsZUNsYXNzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgaWYgKFxuICAgICghcGF0cm9sQm9hdC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFzdWJtYXJpbmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhZGVzdHJveWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIWJhdHRsZXNoaXAuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhY2Fycmllci5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikpIHx8XG4gICAgKCFob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIXZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSlcbiAgKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJOb25lIG9mIHRoZXNlIGJ1dHRvbnMgYXJlIGNsaWNrZWRcIik7IC8vVEhJUyBXT1JLUyEhXG4gICAgLy8gcGF0cm9sQm9hdC5jbGFzc0xpc3QuYWRkKFwibm8tYnRuLWNsaWNrZWQtZXJyb3JcIik7XG4gICAgY2xpY2tCdG5zTW9kYWwuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgdGFibGVDbGFzcy5jbGFzc0xpc3QuYWRkKFwicGhhc2VkLW91dFwiKTtcbiAgfVxufSk7XG5cbi8vIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInRkXCIpO1xuY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllci1jZWxsXCIpO1xuXG5jZWxscy5mb3JFYWNoKChjZWxsKSA9PlxuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHhOdW0gPSBOdW1iZXIoY2VsbC5kYXRhc2V0LnhWYWx1ZSk7XG4gICAgY29uc3QgeU51bSA9IE51bWJlcihjZWxsLmRhdGFzZXQueVZhbHVlKTtcblxuICAgIGNvbnN0IG5leHRDZWxsMl9ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDF9JHt5TnVtfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsM19ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDJ9JHt5TnVtfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsNF9ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDN9JHt5TnVtfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsNV9ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDR9JHt5TnVtfVwiXWBcbiAgICApO1xuXG4gICAgY29uc3QgbmV4dENlbGwyX3ZlcnRpY2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bX0ke3lOdW0gKyAxfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsM192ZXJ0aWNhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW19JHt5TnVtICsgMn1cIl1gXG4gICAgKTtcbiAgICBjb25zdCBuZXh0Q2VsbDRfdmVydGljYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtfSR7eU51bSArIDN9XCJdYFxuICAgICk7XG4gICAgY29uc3QgbmV4dENlbGw1X3ZlcnRpY2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bX0ke3lOdW0gKyA0fVwiXWBcbiAgICApO1xuXG4gICAgaWYgKFxuICAgICAgcGF0cm9sQm9hdC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIGhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX2hvcml6YW50YWwpIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl9ob3JpemFudGFsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBwYXRyb2xCb2F0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghbmV4dENlbGwyX3ZlcnRpY2FsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBzdWJtYXJpbmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICBob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKG5leHRDZWxsMl9ob3JpemFudGFsICYmIG5leHRDZWxsM19ob3JpemFudGFsKSB7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJiAhbmV4dENlbGwzX2hvcml6YW50YWwpIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl9ob3JpemFudGFsICYmICFuZXh0Q2VsbDNfaG9yaXphbnRhbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgc3VibWFyaW5lLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmIG5leHRDZWxsM192ZXJ0aWNhbCkge1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgIW5leHRDZWxsM192ZXJ0aWNhbCkge1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl92ZXJ0aWNhbCAmJiAhbmV4dENlbGwzX3ZlcnRpY2FsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBkZXN0cm95ZXIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICBob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKG5leHRDZWxsMl9ob3JpemFudGFsICYmIG5leHRDZWxsM19ob3JpemFudGFsKSB7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJiAhbmV4dENlbGwzX2hvcml6YW50YWwpIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl9ob3JpemFudGFsICYmICFuZXh0Q2VsbDNfaG9yaXphbnRhbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgZGVzdHJveWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmIG5leHRDZWxsM192ZXJ0aWNhbCkge1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgIW5leHRDZWxsM192ZXJ0aWNhbCkge1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl92ZXJ0aWNhbCAmJiAhbmV4dENlbGwzX3ZlcnRpY2FsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBiYXR0bGVzaGlwLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIilcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAhbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBiYXR0bGVzaGlwLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmIG5leHRDZWxsM192ZXJ0aWNhbCAmJiBuZXh0Q2VsbDRfdmVydGljYWwpIHtcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgbmV4dENlbGwzX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDRfdmVydGljYWwpIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgIW5leHRDZWxsM192ZXJ0aWNhbCAmJiAhbmV4dENlbGw0X3ZlcnRpY2FsKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghbmV4dENlbGwyX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDNfdmVydGljYWwgJiYgIW5leHRDZWxsNF92ZXJ0aWNhbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY2Fycmllci5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIGhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsNV9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw1X2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDVfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgICFuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNF9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDVfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGw1X2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGw1X2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNV9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBjYXJyaWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsNV92ZXJ0aWNhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNV92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV92ZXJ0aWNhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV92ZXJ0aWNhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV92ZXJ0aWNhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgIW5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV92ZXJ0aWNhbFxuICAgICAgKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGw1X3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsNV92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw1X3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pXG4pO1xuXG50YWJsZUNsYXNzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcbiAgaWYgKFxuICAgICghcGF0cm9sQm9hdC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFzdWJtYXJpbmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhZGVzdHJveWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIWJhdHRsZXNoaXAuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhY2Fycmllci5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikpIHx8XG4gICAgKCFob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIXZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSlcbiAgKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJOb25lIG9mIHRoZXNlIGJ1dHRvbnMgYXJlIGNsaWNrZWRcIik7IC8vVEhJUyBXT1JLUyEhXG4gICAgLy8gcGF0cm9sQm9hdC5jbGFzc0xpc3QucmVtb3ZlKFwibm8tYnRuLWNsaWNrZWQtZXJyb3JcIik7XG4gICAgY2xpY2tCdG5zTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgdGFibGVDbGFzcy5jbGFzc0xpc3QucmVtb3ZlKFwicGhhc2VkLW91dFwiKTtcbiAgfVxufSk7XG5cbmNlbGxzLmZvckVhY2goKGNlbGwpID0+XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICBjb25zdCB4TnVtID0gTnVtYmVyKGNlbGwuZGF0YXNldC54VmFsdWUpO1xuICAgIGNvbnN0IHlOdW0gPSBOdW1iZXIoY2VsbC5kYXRhc2V0LnlWYWx1ZSk7XG5cbiAgICBjb25zdCBuZXh0Q2VsbDJfaG9yaXphbnRhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW0gKyAxfSR7eU51bX1cIl1gXG4gICAgKTtcbiAgICBjb25zdCBuZXh0Q2VsbDNfaG9yaXphbnRhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW0gKyAyfSR7eU51bX1cIl1gXG4gICAgKTtcbiAgICBjb25zdCBuZXh0Q2VsbDRfaG9yaXphbnRhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW0gKyAzfSR7eU51bX1cIl1gXG4gICAgKTtcbiAgICBjb25zdCBuZXh0Q2VsbDVfaG9yaXphbnRhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW0gKyA0fSR7eU51bX1cIl1gXG4gICAgKTtcblxuICAgIGNvbnN0IG5leHRDZWxsMl92ZXJ0aWNhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW19JHt5TnVtICsgMX1cIl1gXG4gICAgKTtcbiAgICBjb25zdCBuZXh0Q2VsbDNfdmVydGljYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtfSR7eU51bSArIDJ9XCJdYFxuICAgICk7XG4gICAgY29uc3QgbmV4dENlbGw0X3ZlcnRpY2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bX0ke3lOdW0gKyAzfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsNV92ZXJ0aWNhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW19JHt5TnVtICsgNH1cIl1gXG4gICAgKTtcblxuICAgIGlmIChcbiAgICAgIHBhdHJvbEJvYXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICBob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKG5leHRDZWxsMl9ob3JpemFudGFsKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKCFuZXh0Q2VsbDJfaG9yaXphbnRhbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgcGF0cm9sQm9hdC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIHZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKG5leHRDZWxsMl92ZXJ0aWNhbCkge1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl92ZXJ0aWNhbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgc3VibWFyaW5lLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIilcbiAgICApIHtcbiAgICAgIGlmIChuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJiBuZXh0Q2VsbDNfaG9yaXphbnRhbCkge1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGwyX2hvcml6YW50YWwgJiYgIW5leHRDZWxsM19ob3JpemFudGFsKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKCFuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJiAhbmV4dENlbGwzX2hvcml6YW50YWwpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHN1Ym1hcmluZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIHZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKG5leHRDZWxsMl92ZXJ0aWNhbCAmJiBuZXh0Q2VsbDNfdmVydGljYWwpIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDNfdmVydGljYWwpIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKCFuZXh0Q2VsbDJfdmVydGljYWwgJiYgIW5leHRDZWxsM192ZXJ0aWNhbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgZGVzdHJveWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIilcbiAgICApIHtcbiAgICAgIGlmIChuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJiBuZXh0Q2VsbDNfaG9yaXphbnRhbCkge1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGwyX2hvcml6YW50YWwgJiYgIW5leHRDZWxsM19ob3JpemFudGFsKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKCFuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJiAhbmV4dENlbGwzX2hvcml6YW50YWwpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGRlc3Ryb3llci5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIHZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKG5leHRDZWxsMl92ZXJ0aWNhbCAmJiBuZXh0Q2VsbDNfdmVydGljYWwpIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDNfdmVydGljYWwpIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKCFuZXh0Q2VsbDJfdmVydGljYWwgJiYgIW5leHRDZWxsM192ZXJ0aWNhbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgYmF0dGxlc2hpcC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIGhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNF9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgIW5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWxcbiAgICAgICkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgYmF0dGxlc2hpcC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIHZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKG5leHRDZWxsMl92ZXJ0aWNhbCAmJiBuZXh0Q2VsbDNfdmVydGljYWwgJiYgbmV4dENlbGw0X3ZlcnRpY2FsKSB7XG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmIG5leHRDZWxsM192ZXJ0aWNhbCAmJiAhbmV4dENlbGw0X3ZlcnRpY2FsKSB7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDNfdmVydGljYWwgJiYgIW5leHRDZWxsNF92ZXJ0aWNhbCkge1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl92ZXJ0aWNhbCAmJiAhbmV4dENlbGwzX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDRfdmVydGljYWwpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGNhcnJpZXIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICBob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDVfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNV9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw1X2hvcml6YW50YWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNF9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDVfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNF9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDVfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAhbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw1X2hvcml6YW50YWxcbiAgICAgICkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsNV9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsNV9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDVfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY2Fycmllci5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIHZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDVfdmVydGljYWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDVfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDVfdmVydGljYWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDVfdmVydGljYWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsM192ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDVfdmVydGljYWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgICFuZXh0Q2VsbDJfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsM192ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDVfdmVydGljYWxcbiAgICAgICkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsNV92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDVfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNV92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuICB9KVxuKTtcblxuY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT5cbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHhOdW0gPSBOdW1iZXIoY2VsbC5kYXRhc2V0LnhWYWx1ZSk7XG4gICAgY29uc3QgeU51bSA9IE51bWJlcihjZWxsLmRhdGFzZXQueVZhbHVlKTtcblxuICAgIGNvbnN0IG5leHRDZWxsMl9ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDF9JHt5TnVtfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsM19ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDJ9JHt5TnVtfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsNF9ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDN9JHt5TnVtfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsNV9ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDR9JHt5TnVtfVwiXWBcbiAgICApO1xuXG4gICAgY29uc3QgbmV4dENlbGwyX3ZlcnRpY2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bX0ke3lOdW0gKyAxfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsM192ZXJ0aWNhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW19JHt5TnVtICsgMn1cIl1gXG4gICAgKTtcbiAgICBjb25zdCBuZXh0Q2VsbDRfdmVydGljYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtfSR7eU51bSArIDN9XCJdYFxuICAgICk7XG4gICAgY29uc3QgbmV4dENlbGw1X3ZlcnRpY2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bX0ke3lOdW0gKyA0fVwiXWBcbiAgICApO1xuXG4gICAgaWYgKFxuICAgICAgcGF0cm9sQm9hdC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIGhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhZ3JpZC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcIm91dHNpZGUtZ3JpZFwiKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICAhY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDJfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgcGF0cm9sQm9hdC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgcGF0cm9sQm9hdC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItcGF0cm9sLWJvYXRcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1wYXRyb2wtYm9hdFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICgocGF0cm9sQm9hdC5kaXNhYmxlZCA9PT0gdHJ1ZSkmJihzdWJtYXJpbmUuZGlzYWJsZWQgPT09IHRydWUpJiYoZGVzdHJveWVyLmRpc2FibGVkID09PSB0cnVlKSYmKGJhdHRsZXNoaXAuZGlzYWJsZWQgPT09IHRydWUpJiYoY2Fycmllci5kaXNhYmxlZCA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJhbGwgYnV0dG9ucyBoYXZlIGJlZW4gY2xpY2tlZFwiKTtcbiAgICAgICAgYm9hdFNlbGVjdGlvblNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgIGJvYXRPcmllbnRhdGlvblNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgIHRhYmxlQ2xhc3MuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICAgICAgICBjb21wdXRlclNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZShcInNtYWxsXCIpO1xuICAgICAgICBzY29yZWJvYXJkVGV4dC50ZXh0Q29udGVudCA9IFwiQVRUQUNLIVwiO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBwYXRyb2xCb2F0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhZ3JpZC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcIm91dHNpZGUtZ3JpZFwiKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICAhY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDJfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIHBhdHJvbEJvYXQuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIHBhdHJvbEJvYXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLXBhdHJvbC1ib2F0XCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1wYXRyb2wtYm9hdFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgcGF0cm9sQm9hdC5kaXNhYmxlZCA9PT0gdHJ1ZSAmJlxuICAgICAgICBzdWJtYXJpbmUuZGlzYWJsZWQgPT09IHRydWUgJiZcbiAgICAgICAgZGVzdHJveWVyLmRpc2FibGVkID09PSB0cnVlICYmXG4gICAgICAgIGJhdHRsZXNoaXAuZGlzYWJsZWQgPT09IHRydWUgJiZcbiAgICAgICAgY2Fycmllci5kaXNhYmxlZCA9PT0gdHJ1ZVxuICAgICAgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWxsIGJ1dHRvbnMgaGF2ZSBiZWVuIGNsaWNrZWRcIik7XG4gICAgICAgIGJvYXRTZWxlY3Rpb25TZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICBib2F0T3JpZW50YXRpb25TZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICB0YWJsZUNsYXNzLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgICAgICAgY29tcHV0ZXJTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJzbWFsbFwiKTtcbiAgICAgICAgc2NvcmVib2FyZFRleHQudGV4dENvbnRlbnQgPSBcIkFUVEFDSyFcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBzdWJtYXJpbmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICBob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIWdyaWQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJvdXRzaWRlLWdyaWRcIilcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgIWNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwyX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwzX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIHN1Ym1hcmluZS5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgc3VibWFyaW5lLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInBsYXllci1zdWJtYXJpbmVcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1zdWJtYXJpbmVcIik7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1zdWJtYXJpbmVcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIHBhdHJvbEJvYXQuZGlzYWJsZWQgPT09IHRydWUgJiZcbiAgICAgICAgc3VibWFyaW5lLmRpc2FibGVkID09PSB0cnVlICYmXG4gICAgICAgIGRlc3Ryb3llci5kaXNhYmxlZCA9PT0gdHJ1ZSAmJlxuICAgICAgICBiYXR0bGVzaGlwLmRpc2FibGVkID09PSB0cnVlICYmXG4gICAgICAgIGNhcnJpZXIuZGlzYWJsZWQgPT09IHRydWVcbiAgICAgICkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImFsbCBidXR0b25zIGhhdmUgYmVlbiBjbGlja2VkXCIpO1xuICAgICAgICBib2F0U2VsZWN0aW9uU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgYm9hdE9yaWVudGF0aW9uU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgdGFibGVDbGFzcy5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gICAgICAgIGNvbXB1dGVyU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwic21hbGxcIik7XG4gICAgICAgIHNjb3JlYm9hcmRUZXh0LnRleHRDb250ZW50ID0gXCJBVFRBQ0shXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgc3VibWFyaW5lLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhZ3JpZC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcIm91dHNpZGUtZ3JpZFwiKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICAhY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDJfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwzX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIWdyaWQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJvdXRzaWRlLWdyaWRcIilcbiAgICAgICkge1xuICAgICAgICBzdWJtYXJpbmUuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIHN1Ym1hcmluZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItc3VibWFyaW5lXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1zdWJtYXJpbmVcIik7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLXN1Ym1hcmluZVwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgcGF0cm9sQm9hdC5kaXNhYmxlZCA9PT0gdHJ1ZSAmJlxuICAgICAgICBzdWJtYXJpbmUuZGlzYWJsZWQgPT09IHRydWUgJiZcbiAgICAgICAgZGVzdHJveWVyLmRpc2FibGVkID09PSB0cnVlICYmXG4gICAgICAgIGJhdHRsZXNoaXAuZGlzYWJsZWQgPT09IHRydWUgJiZcbiAgICAgICAgY2Fycmllci5kaXNhYmxlZCA9PT0gdHJ1ZVxuICAgICAgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWxsIGJ1dHRvbnMgaGF2ZSBiZWVuIGNsaWNrZWRcIik7XG4gICAgICAgIGJvYXRTZWxlY3Rpb25TZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICBib2F0T3JpZW50YXRpb25TZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICB0YWJsZUNsYXNzLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgICAgICAgY29tcHV0ZXJTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJzbWFsbFwiKTtcbiAgICAgICAgc2NvcmVib2FyZFRleHQudGV4dENvbnRlbnQgPSBcIkFUVEFDSyFcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBkZXN0cm95ZXIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICBob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIWdyaWQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJvdXRzaWRlLWdyaWRcIilcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgIWNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwyX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwzX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIGRlc3Ryb3llci5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgZGVzdHJveWVyLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInBsYXllci1kZXN0cm95ZXJcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1kZXN0cm95ZXJcIik7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1kZXN0cm95ZXJcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIHBhdHJvbEJvYXQuZGlzYWJsZWQgPT09IHRydWUgJiZcbiAgICAgICAgc3VibWFyaW5lLmRpc2FibGVkID09PSB0cnVlICYmXG4gICAgICAgIGRlc3Ryb3llci5kaXNhYmxlZCA9PT0gdHJ1ZSAmJlxuICAgICAgICBiYXR0bGVzaGlwLmRpc2FibGVkID09PSB0cnVlICYmXG4gICAgICAgIGNhcnJpZXIuZGlzYWJsZWQgPT09IHRydWVcbiAgICAgICkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImFsbCBidXR0b25zIGhhdmUgYmVlbiBjbGlja2VkXCIpO1xuICAgICAgICBib2F0U2VsZWN0aW9uU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgYm9hdE9yaWVudGF0aW9uU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgdGFibGVDbGFzcy5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gICAgICAgIGNvbXB1dGVyU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwic21hbGxcIik7XG4gICAgICAgIHNjb3JlYm9hcmRUZXh0LnRleHRDb250ZW50ID0gXCJBVFRBQ0shXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgZGVzdHJveWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhZ3JpZC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcIm91dHNpZGUtZ3JpZFwiKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICAhY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDJfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwzX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBkZXN0cm95ZXIuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGRlc3Ryb3llci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItZGVzdHJveWVyXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1kZXN0cm95ZXJcIik7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWRlc3Ryb3llclwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgcGF0cm9sQm9hdC5kaXNhYmxlZCA9PT0gdHJ1ZSAmJlxuICAgICAgICBzdWJtYXJpbmUuZGlzYWJsZWQgPT09IHRydWUgJiZcbiAgICAgICAgZGVzdHJveWVyLmRpc2FibGVkID09PSB0cnVlICYmXG4gICAgICAgIGJhdHRsZXNoaXAuZGlzYWJsZWQgPT09IHRydWUgJiZcbiAgICAgICAgY2Fycmllci5kaXNhYmxlZCA9PT0gdHJ1ZVxuICAgICAgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWxsIGJ1dHRvbnMgaGF2ZSBiZWVuIGNsaWNrZWRcIik7XG4gICAgICAgIGJvYXRTZWxlY3Rpb25TZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICBib2F0T3JpZW50YXRpb25TZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICB0YWJsZUNsYXNzLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgICAgICAgY29tcHV0ZXJTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJzbWFsbFwiKTtcbiAgICAgICAgc2NvcmVib2FyZFRleHQudGV4dENvbnRlbnQgPSBcIkFUVEFDSyFcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBiYXR0bGVzaGlwLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFncmlkLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwib3V0c2lkZS1ncmlkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgICFjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsMl9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsM19ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsNF9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIWdyaWQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJvdXRzaWRlLWdyaWRcIilcbiAgICAgICkge1xuICAgICAgICBiYXR0bGVzaGlwLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBiYXR0bGVzaGlwLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInBsYXllci1iYXR0bGVzaGlwXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItYmF0dGxlc2hpcFwiKTtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWJhdHRsZXNoaXBcIik7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1iYXR0bGVzaGlwXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBwYXRyb2xCb2F0LmRpc2FibGVkID09PSB0cnVlICYmXG4gICAgICAgIHN1Ym1hcmluZS5kaXNhYmxlZCA9PT0gdHJ1ZSAmJlxuICAgICAgICBkZXN0cm95ZXIuZGlzYWJsZWQgPT09IHRydWUgJiZcbiAgICAgICAgYmF0dGxlc2hpcC5kaXNhYmxlZCA9PT0gdHJ1ZSAmJlxuICAgICAgICBjYXJyaWVyLmRpc2FibGVkID09PSB0cnVlXG4gICAgICApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJhbGwgYnV0dG9ucyBoYXZlIGJlZW4gY2xpY2tlZFwiKTtcbiAgICAgICAgYm9hdFNlbGVjdGlvblNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgIGJvYXRPcmllbnRhdGlvblNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgIHRhYmxlQ2xhc3MuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICAgICAgICBjb21wdXRlclNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZShcInNtYWxsXCIpO1xuICAgICAgICBzY29yZWJvYXJkVGV4dC50ZXh0Q29udGVudCA9IFwiQVRUQUNLIVwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGJhdHRsZXNoaXAuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICB2ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFncmlkLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwib3V0c2lkZS1ncmlkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgICFjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDNfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGw0X3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIWdyaWQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJvdXRzaWRlLWdyaWRcIilcbiAgICAgICkge1xuICAgICAgICBiYXR0bGVzaGlwLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBiYXR0bGVzaGlwLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInBsYXllci1iYXR0bGVzaGlwXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1iYXR0bGVzaGlwXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1iYXR0bGVzaGlwXCIpO1xuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1iYXR0bGVzaGlwXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBwYXRyb2xCb2F0LmRpc2FibGVkID09PSB0cnVlICYmXG4gICAgICAgIHN1Ym1hcmluZS5kaXNhYmxlZCA9PT0gdHJ1ZSAmJlxuICAgICAgICBkZXN0cm95ZXIuZGlzYWJsZWQgPT09IHRydWUgJiZcbiAgICAgICAgYmF0dGxlc2hpcC5kaXNhYmxlZCA9PT0gdHJ1ZSAmJlxuICAgICAgICBjYXJyaWVyLmRpc2FibGVkID09PSB0cnVlXG4gICAgICApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJhbGwgYnV0dG9ucyBoYXZlIGJlZW4gY2xpY2tlZFwiKTtcbiAgICAgICAgYm9hdFNlbGVjdGlvblNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgIGJvYXRPcmllbnRhdGlvblNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgIHRhYmxlQ2xhc3MuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICAgICAgICBjb21wdXRlclNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZShcInNtYWxsXCIpO1xuICAgICAgICBzY29yZWJvYXJkVGV4dC50ZXh0Q29udGVudD1cIkFUVEFDSyFcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBjYXJyaWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFncmlkLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwib3V0c2lkZS1ncmlkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgICFjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsMl9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsM19ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsNF9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsNV9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBjYXJyaWVyLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBjYXJyaWVyLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInBsYXllci1jYXJyaWVyXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItY2FycmllclwiKTtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWNhcnJpZXJcIik7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1jYXJyaWVyXCIpO1xuICAgICAgICBuZXh0Q2VsbDVfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsNV9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItY2FycmllclwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgcGF0cm9sQm9hdC5kaXNhYmxlZCA9PT0gdHJ1ZSAmJlxuICAgICAgICBzdWJtYXJpbmUuZGlzYWJsZWQgPT09IHRydWUgJiZcbiAgICAgICAgZGVzdHJveWVyLmRpc2FibGVkID09PSB0cnVlICYmXG4gICAgICAgIGJhdHRsZXNoaXAuZGlzYWJsZWQgPT09IHRydWUgJiZcbiAgICAgICAgY2Fycmllci5kaXNhYmxlZCA9PT0gdHJ1ZVxuICAgICAgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWxsIGJ1dHRvbnMgaGF2ZSBiZWVuIGNsaWNrZWRcIik7XG4gICAgICAgIGJvYXRTZWxlY3Rpb25TZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICBib2F0T3JpZW50YXRpb25TZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICB0YWJsZUNsYXNzLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgICAgICAgY29tcHV0ZXJTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJzbWFsbFwiKTtcbiAgICAgICAgc2NvcmVib2FyZFRleHQudGV4dENvbnRlbnQgPSBcIkFUVEFDSyFcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBjYXJyaWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhZ3JpZC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcIm91dHNpZGUtZ3JpZFwiKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICAhY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDJfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwzX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsNF92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDVfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIGNhcnJpZXIuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGNhcnJpZXIuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWNhcnJpZXJcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWNhcnJpZXJcIik7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWNhcnJpZXJcIik7XG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWNhcnJpZXJcIik7XG4gICAgICAgIG5leHRDZWxsNV92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsNV92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWNhcnJpZXJcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIHBhdHJvbEJvYXQuZGlzYWJsZWQgPT09IHRydWUgJiZcbiAgICAgICAgc3VibWFyaW5lLmRpc2FibGVkID09PSB0cnVlICYmXG4gICAgICAgIGRlc3Ryb3llci5kaXNhYmxlZCA9PT0gdHJ1ZSAmJlxuICAgICAgICBiYXR0bGVzaGlwLmRpc2FibGVkID09PSB0cnVlICYmXG4gICAgICAgIGNhcnJpZXIuZGlzYWJsZWQgPT09IHRydWVcbiAgICAgICkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImFsbCBidXR0b25zIGhhdmUgYmVlbiBjbGlja2VkXCIpO1xuICAgICAgICBib2F0U2VsZWN0aW9uU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgYm9hdE9yaWVudGF0aW9uU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgdGFibGVDbGFzcy5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gICAgICAgIGNvbXB1dGVyU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwic21hbGxcIik7XG4gICAgICAgIHNjb3JlYm9hcmRUZXh0LnRleHRDb250ZW50ID0gXCJBVFRBQ0shXCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcGF0cm9sQm9hdC5kaXNhYmxlZCA9PT0gdHJ1ZSAmJlxuICAgICAgICBzdWJtYXJpbmUuZGlzYWJsZWQgPT09IHRydWUgJiZcbiAgICAgICAgZGVzdHJveWVyLmRpc2FibGVkID09PSB0cnVlICYmXG4gICAgICAgIGJhdHRsZXNoaXAuZGlzYWJsZWQgPT09IHRydWUgJiZcbiAgICAgICAgY2Fycmllci5kaXNhYmxlZCA9PT0gdHJ1ZVxuICAgICAgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWxsIGJvYXRzIGhhdmUgYmVlbiBwbGFjZWRcIik7XG4gICAgICB9XG4gICAgfVxuICB9KVxuKTtcblxuLy9vd2tyaW5nIG9uIGNvbXB1dGVyIGZ1bmN0aW9uYWxpdHlcbmZ1bmN0aW9uIHJhbmRvbU51bUJldHdlZW4obWluLCBtYXgpIHtcbiAgbGV0IG51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gIHJldHVybiBudW07XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVyT3JpZW50YXRpb24oKSB7XG4gIGxldCBjb21wdXRlck9yaWVudGF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgKyAxO1xuICBpZiAoY29tcHV0ZXJPcmllbnRhdGlvbiA9PT0gMSkge1xuICAgIHJldHVybiBcImhvcml6YW50YWxcIjtcbiAgfVxuICBpZiAoY29tcHV0ZXJPcmllbnRhdGlvbiA9PT0gMikge1xuICAgIHJldHVybiBcInZlcnRpY2FsXCI7XG4gIH1cbn1cblxuY29uc29sZS5sb2coY29tcHV0ZXJPcmllbnRhdGlvbigpKTtcblxubGV0IHVzZWROdW1iZXJzID0gW107XG5sZXQgdXNlZE51bWJlcnMyID0gW107XG5cbmNsYXNzIENvbXB1dGVyQm9hdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIG5hbWUsXG4gICAgb3JpZW50YXRpb25cbiAgICAvLyB4VmFsdWUsXG4gICAgLy8geVZhbHVlLFxuICAgIC8vIHN0YXJ0aW5nQ2VsbCxcbiAgICAvLyBuZXh0Q2VsbDIsXG4gICAgLy8gbmV4dENlbGwzLFxuICAgIC8vIG5leHRDZWxsNCxcbiAgICAvLyBuZXh0Q2VsbDVcbiAgKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm9yaWVudGF0aW9uID0gb3JpZW50YXRpb247XG4gICAgLy8gdGhpcy54VmFsdWUgPSByYW5kb21OdW1CZXR3ZWVuKDEsIDkpO1xuICAgIC8vIHRoaXMueVZhbHVlID0gcmFuZG9tTnVtQmV0d2VlbigxLCAxMCk7XG4gICAgLy8gdGhpcy5zdGFydGluZ0NlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIC8vICAgYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHt0aGlzLnhWYWx1ZX0ke3RoaXMueVZhbHVlfVwiXWBcbiAgICAvLyApO1xuICAgIC8vIHRoaXMubmV4dENlbGwyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAvLyAgIGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7dGhpcy54VmFsdWUgKyAxfSR7dGhpcy55VmFsdWV9XCJdYFxuICAgIC8vICk7XG4gICAgLy8gdGhpcy5uZXh0Q2VsbDMgPSBuZXh0Q2VsbDM7XG4gICAgLy8gdGhpcy5uZXh0Q2VsbDQgPSBuZXh0Q2VsbDQ7XG4gICAgLy8gdGhpcy5uZXh0Q2VsbDUgPSBuZXh0Q2VsbDU7XG4gIH1cbiAgY29tcHV0ZXJDb2RlKCkge1xuICAgIGlmICh0aGlzLm5hbWUgPT09IFwicGF0cm9sQm9hdFwiICYmIHRoaXMub3JpZW50YXRpb24gPT09IFwiaG9yaXphbnRhbFwiKSB7XG4gICAgICBsZXQgeCA9IHJhbmRvbU51bUJldHdlZW4oMSwgOSk7XG4gICAgICBsZXQgeSA9IHJhbmRvbU51bUJldHdlZW4oMSwgMTApO1xuICAgICAgbGV0IG5leHRDZWxsMj0geCsxO1xuICAgICAgbGV0IHhUb1N0cmluZz0geC50b1N0cmluZygpOyAgICAgIFxuICAgICAgbGV0IHlUb1N0cmluZz0geS50b1N0cmluZygpO1xuICAgICAgbGV0IG5leHRDZWxsMlN0cmluZz0gbmV4dENlbGwyLnRvU3RyaW5nKCk7ICAgICAgXG4gICAgICBsZXQgY2VsbENvZGU9IHhUb1N0cmluZyArIHlUb1N0cmluZzsgIFxuICAgICAgbGV0IG5leHRDZWxsMkNvZGU9IG5leHRDZWxsMlN0cmluZyArIHlUb1N0cmluZztcbiAgICAgIGlmKHVzZWROdW1iZXJzLmluY2x1ZGVzKGNlbGxDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDJDb2RlKSl7XG4gICAgICAgIHRoaXMuY29tcHV0ZXJDb2RlKCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgbGV0IGFjdHVhbENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7Y2VsbENvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGwyQ29kZX1cIl1gKTtcbiAgICAgICAgYWN0dWFsQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbENlbGwuY2xhc3NMaXN0LmFkZChcInBhdHJvbC1ib2F0XCIpO1xuICAgICAgICAvLyBhY3R1YWxDZWxsLnRleHRDb250ZW50PSBcInBcIjtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwyLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwyLmNsYXNzTGlzdC5hZGQoXCJwYXRyb2wtYm9hdFwiKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChjZWxsQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGwyQ29kZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLm5hbWUgPT09IFwic3VibWFyaW5lXCIgJiYgdGhpcy5vcmllbnRhdGlvbiA9PT0gXCJob3JpemFudGFsXCIpIHtcbiAgICAgIGxldCB4ID0gcmFuZG9tTnVtQmV0d2VlbigxLCA4KTtcbiAgICAgIGxldCB5ID0gcmFuZG9tTnVtQmV0d2VlbigxLCAxMCk7XG4gICAgICBsZXQgbmV4dENlbGwyPSB4KzE7XG4gICAgICBsZXQgbmV4dENlbGwzPSB4KzI7XG4gICAgICBsZXQgeFRvU3RyaW5nPSB4LnRvU3RyaW5nKCk7ICAgICAgXG4gICAgICBsZXQgeVRvU3RyaW5nPSB5LnRvU3RyaW5nKCk7XG4gICAgICBsZXQgbmV4dENlbGwyU3RyaW5nPSBuZXh0Q2VsbDIudG9TdHJpbmcoKTsgICAgICBcbiAgICAgIGxldCBuZXh0Q2VsbDNTdHJpbmc9IG5leHRDZWxsMy50b1N0cmluZygpOyAgICAgXG4gICAgICBsZXQgY2VsbENvZGU9IHhUb1N0cmluZyArIHlUb1N0cmluZzsgIFxuICAgICAgbGV0IG5leHRDZWxsMkNvZGU9IG5leHRDZWxsMlN0cmluZyArIHlUb1N0cmluZzsgXG4gICAgICBsZXQgbmV4dENlbGwzQ29kZT0gbmV4dENlbGwzU3RyaW5nICsgeVRvU3RyaW5nOyBcbiAgICAgIGlmKHVzZWROdW1iZXJzLmluY2x1ZGVzKGNlbGxDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDJDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDNDb2RlKSl7XG4gICAgICAgIHRoaXMuY29tcHV0ZXJDb2RlKCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgbGV0IGFjdHVhbENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7Y2VsbENvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGwyQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDNDb2RlfVwiXWApO1xuICAgICAgICBhY3R1YWxDZWxsLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsQ2VsbC5jbGFzc0xpc3QuYWRkKFwic3VibWFyaW5lXCIpO1xuICAgICAgICAvLyBhY3R1YWxDZWxsLnRleHRDb250ZW50PSBcInNcIjtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwyLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwyLmNsYXNzTGlzdC5hZGQoXCJzdWJtYXJpbmVcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMy5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMy5jbGFzc0xpc3QuYWRkKFwic3VibWFyaW5lXCIpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKGNlbGxDb2RlKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChuZXh0Q2VsbDJDb2RlKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChuZXh0Q2VsbDNDb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMubmFtZSA9PT0gXCJkZXN0cm95ZXJcIiAmJiB0aGlzLm9yaWVudGF0aW9uID09PSBcImhvcml6YW50YWxcIikge1xuICAgICAgbGV0IHggPSByYW5kb21OdW1CZXR3ZWVuKDEsIDgpO1xuICAgICAgbGV0IHkgPSByYW5kb21OdW1CZXR3ZWVuKDEsIDEwKTtcbiAgICAgIGxldCBuZXh0Q2VsbDI9IHgrMTtcbiAgICAgIGxldCBuZXh0Q2VsbDM9IHgrMjtcbiAgICAgIGxldCB4VG9TdHJpbmc9IHgudG9TdHJpbmcoKTsgICAgICBcbiAgICAgIGxldCB5VG9TdHJpbmc9IHkudG9TdHJpbmcoKTtcbiAgICAgIGxldCBuZXh0Q2VsbDJTdHJpbmc9IG5leHRDZWxsMi50b1N0cmluZygpOyAgICAgIFxuICAgICAgbGV0IG5leHRDZWxsM1N0cmluZz0gbmV4dENlbGwzLnRvU3RyaW5nKCk7ICAgICBcbiAgICAgIGxldCBjZWxsQ29kZT0geFRvU3RyaW5nICsgeVRvU3RyaW5nOyAgXG4gICAgICBsZXQgbmV4dENlbGwyQ29kZT0gbmV4dENlbGwyU3RyaW5nICsgeVRvU3RyaW5nOyBcbiAgICAgIGxldCBuZXh0Q2VsbDNDb2RlPSBuZXh0Q2VsbDNTdHJpbmcgKyB5VG9TdHJpbmc7IFxuICAgICAgaWYodXNlZE51bWJlcnMuaW5jbHVkZXMoY2VsbENvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsMkNvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsM0NvZGUpKXtcbiAgICAgICAgdGhpcy5jb21wdXRlckNvZGUoKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBsZXQgYWN0dWFsQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtjZWxsQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDJDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGwzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsM0NvZGV9XCJdYCk7XG4gICAgICAgIGFjdHVhbENlbGwuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxDZWxsLmNsYXNzTGlzdC5hZGQoXCJkZXN0cm95ZXJcIik7XG4gICAgICAgIC8vIGFjdHVhbENlbGwudGV4dENvbnRlbnQ9IFwiZFwiO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDIuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDIuY2xhc3NMaXN0LmFkZChcImRlc3Ryb3llclwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwzLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwzLmNsYXNzTGlzdC5hZGQoXCJkZXN0cm95ZXJcIik7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2goY2VsbENvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsMkNvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsM0NvZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5uYW1lID09PSBcImJhdHRsZXNoaXBcIiAmJiB0aGlzLm9yaWVudGF0aW9uID09PSBcImhvcml6YW50YWxcIikge1xuICAgICAgbGV0IHggPSByYW5kb21OdW1CZXR3ZWVuKDEsIDcpO1xuICAgICAgbGV0IHkgPSByYW5kb21OdW1CZXR3ZWVuKDEsIDEwKTtcbiAgICAgIGxldCBuZXh0Q2VsbDI9IHgrMTtcbiAgICAgIGxldCBuZXh0Q2VsbDM9IHgrMjtcbiAgICAgIGxldCBuZXh0Q2VsbDQ9IHgrMztcbiAgICAgIGxldCB4VG9TdHJpbmc9IHgudG9TdHJpbmcoKTsgICAgICBcbiAgICAgIGxldCB5VG9TdHJpbmc9IHkudG9TdHJpbmcoKTtcbiAgICAgIGxldCBuZXh0Q2VsbDJTdHJpbmc9IG5leHRDZWxsMi50b1N0cmluZygpOyAgICAgIFxuICAgICAgbGV0IG5leHRDZWxsM1N0cmluZz0gbmV4dENlbGwzLnRvU3RyaW5nKCk7ICAgICBcbiAgICAgIGxldCBuZXh0Q2VsbDRTdHJpbmc9IG5leHRDZWxsNC50b1N0cmluZygpOyAgICAgXG4gICAgICBsZXQgY2VsbENvZGU9IHhUb1N0cmluZyArIHlUb1N0cmluZzsgIFxuICAgICAgbGV0IG5leHRDZWxsMkNvZGU9IG5leHRDZWxsMlN0cmluZyArIHlUb1N0cmluZzsgXG4gICAgICBsZXQgbmV4dENlbGwzQ29kZSA9IG5leHRDZWxsM1N0cmluZyArIHlUb1N0cmluZztcbiAgICAgIGxldCBuZXh0Q2VsbDRDb2RlID0gbmV4dENlbGw0U3RyaW5nICsgeVRvU3RyaW5nOyBcbiAgICAgIGlmKHVzZWROdW1iZXJzLmluY2x1ZGVzKGNlbGxDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDJDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDNDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDRDb2RlKSl7XG4gICAgICAgIHRoaXMuY29tcHV0ZXJDb2RlKCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgbGV0IGFjdHVhbENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7Y2VsbENvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGwyQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDNDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGw0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsNENvZGV9XCJdYCk7XG4gICAgICAgIGFjdHVhbENlbGwuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxDZWxsLmNsYXNzTGlzdC5hZGQoXCJiYXR0bGVzaGlwXCIpO1xuICAgICAgICAvLyBhY3R1YWxDZWxsLnRleHRDb250ZW50PSBcImJcIjtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwyLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwyLmNsYXNzTGlzdC5hZGQoXCJiYXR0bGVzaGlwXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDMuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDMuY2xhc3NMaXN0LmFkZChcImJhdHRsZXNoaXBcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsNC5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsNC5jbGFzc0xpc3QuYWRkKFwiYmF0dGxlc2hpcFwiKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChjZWxsQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGwyQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGwzQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGw0Q29kZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLm5hbWUgPT09IFwiY2FycmllclwiICYmIHRoaXMub3JpZW50YXRpb24gPT09IFwiaG9yaXphbnRhbFwiKSB7XG4gICAgICBsZXQgeCA9IHJhbmRvbU51bUJldHdlZW4oMSwgNik7XG4gICAgICBsZXQgeSA9IHJhbmRvbU51bUJldHdlZW4oMSwgMTApO1xuICAgICAgbGV0IG5leHRDZWxsMj0geCsxO1xuICAgICAgbGV0IG5leHRDZWxsMz0geCsyO1xuICAgICAgbGV0IG5leHRDZWxsND0geCszO1xuICAgICAgbGV0IG5leHRDZWxsNT0geCs0O1xuICAgICAgbGV0IHhUb1N0cmluZz0geC50b1N0cmluZygpOyAgICAgIFxuICAgICAgbGV0IHlUb1N0cmluZz0geS50b1N0cmluZygpO1xuICAgICAgbGV0IG5leHRDZWxsMlN0cmluZz0gbmV4dENlbGwyLnRvU3RyaW5nKCk7ICAgICAgXG4gICAgICBsZXQgbmV4dENlbGwzU3RyaW5nPSBuZXh0Q2VsbDMudG9TdHJpbmcoKTsgICAgIFxuICAgICAgbGV0IG5leHRDZWxsNFN0cmluZz0gbmV4dENlbGw0LnRvU3RyaW5nKCk7ICAgICBcbiAgICAgIGxldCBuZXh0Q2VsbDVTdHJpbmc9IG5leHRDZWxsNS50b1N0cmluZygpOyAgICAgXG4gICAgICBsZXQgY2VsbENvZGU9IHhUb1N0cmluZyArIHlUb1N0cmluZzsgIFxuICAgICAgbGV0IG5leHRDZWxsMkNvZGU9IG5leHRDZWxsMlN0cmluZyArIHlUb1N0cmluZzsgXG4gICAgICBsZXQgbmV4dENlbGwzQ29kZSA9IG5leHRDZWxsM1N0cmluZyArIHlUb1N0cmluZztcbiAgICAgIGxldCBuZXh0Q2VsbDRDb2RlID0gbmV4dENlbGw0U3RyaW5nICsgeVRvU3RyaW5nO1xuICAgICAgbGV0IG5leHRDZWxsNUNvZGUgPSBuZXh0Q2VsbDVTdHJpbmcgKyB5VG9TdHJpbmc7IFxuICAgICAgaWYodXNlZE51bWJlcnMuaW5jbHVkZXMoY2VsbENvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsMkNvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsM0NvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsNENvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsNUNvZGUpKXtcbiAgICAgICAgdGhpcy5jb21wdXRlckNvZGUoKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBsZXQgYWN0dWFsQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtjZWxsQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDJDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGwzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsM0NvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGw0Q29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsNSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDVDb2RlfVwiXWApO1xuICAgICAgICBhY3R1YWxDZWxsLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY2FycmllclwiKTtcbiAgICAgICAgLy8gYWN0dWFsQ2VsbC50ZXh0Q29udGVudD0gXCJjXCI7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMi5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMi5jbGFzc0xpc3QuYWRkKFwiY2FycmllclwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwzLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwzLmNsYXNzTGlzdC5hZGQoXCJjYXJyaWVyXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDQuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDQuY2xhc3NMaXN0LmFkZChcImNhcnJpZXJcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsNS5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsNS5jbGFzc0xpc3QuYWRkKFwiY2FycmllclwiKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChjZWxsQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGwyQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGwzQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGw0Q29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGw1Q29kZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLm5hbWUgPT09IFwicGF0cm9sQm9hdFwiICYmIHRoaXMub3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgbGV0IHggPSByYW5kb21OdW1CZXR3ZWVuKDEsIDEwKTtcbiAgICAgIGxldCB5ID0gcmFuZG9tTnVtQmV0d2VlbigxLCA5KTtcbiAgICAgIGxldCBuZXh0Q2VsbDIgPSB5ICsgMTtcbiAgICAgIGxldCB4VG9TdHJpbmcgPSB4LnRvU3RyaW5nKCk7XG4gICAgICBsZXQgeVRvU3RyaW5nID0geS50b1N0cmluZygpO1xuICAgICAgbGV0IG5leHRDZWxsMlN0cmluZyA9IG5leHRDZWxsMi50b1N0cmluZygpO1xuICAgICAgbGV0IGNlbGxDb2RlID0geFRvU3RyaW5nICsgeVRvU3RyaW5nO1xuICAgICAgbGV0IG5leHRDZWxsMkNvZGUgPSB4VG9TdHJpbmcgKyBuZXh0Q2VsbDJTdHJpbmc7XG4gICAgICBpZih1c2VkTnVtYmVycy5pbmNsdWRlcyhjZWxsQ29kZSkgfHwgdXNlZE51bWJlcnMuaW5jbHVkZXMobmV4dENlbGwyQ29kZSkpe1xuICAgICAgICB0aGlzLmNvbXB1dGVyQ29kZSgpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGxldCBhY3R1YWxDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke2NlbGxDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGwyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsMkNvZGV9XCJdYCk7XG4gICAgICAgIGFjdHVhbENlbGwuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxDZWxsLmNsYXNzTGlzdC5hZGQoXCJwYXRyb2wtYm9hdFwiKTtcbiAgICAgICAgLy8gYWN0dWFsQ2VsbC50ZXh0Q29udGVudD0gXCJwXCI7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMi5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMi5jbGFzc0xpc3QuYWRkKFwicGF0cm9sLWJvYXRcIik7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2goY2VsbENvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsMkNvZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5uYW1lID09PSBcInN1Ym1hcmluZVwiICYmIHRoaXMub3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgbGV0IHggPSByYW5kb21OdW1CZXR3ZWVuKDEsIDEwKTtcbiAgICAgIGxldCB5ID0gcmFuZG9tTnVtQmV0d2VlbigxLCA4KTtcbiAgICAgIGxldCBuZXh0Q2VsbDI9IHkrMTtcbiAgICAgIGxldCBuZXh0Q2VsbDM9IHkrMjtcbiAgICAgIGxldCB4VG9TdHJpbmc9IHgudG9TdHJpbmcoKTsgICAgICBcbiAgICAgIGxldCB5VG9TdHJpbmc9IHkudG9TdHJpbmcoKTtcbiAgICAgIGxldCBuZXh0Q2VsbDJTdHJpbmc9IG5leHRDZWxsMi50b1N0cmluZygpOyAgICAgIFxuICAgICAgbGV0IG5leHRDZWxsM1N0cmluZz0gbmV4dENlbGwzLnRvU3RyaW5nKCk7ICAgICBcbiAgICAgIGxldCBjZWxsQ29kZT0geFRvU3RyaW5nICsgeVRvU3RyaW5nOyAgXG4gICAgICBsZXQgbmV4dENlbGwyQ29kZT0geFRvU3RyaW5nICsgbmV4dENlbGwyU3RyaW5nOyBcbiAgICAgIGxldCBuZXh0Q2VsbDNDb2RlPSB4VG9TdHJpbmcgKyBuZXh0Q2VsbDNTdHJpbmc7IFxuICAgICAgaWYodXNlZE51bWJlcnMuaW5jbHVkZXMoY2VsbENvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsMkNvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsM0NvZGUpKXtcbiAgICAgICAgdGhpcy5jb21wdXRlckNvZGUoKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBsZXQgYWN0dWFsQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtjZWxsQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDJDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGwzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsM0NvZGV9XCJdYCk7XG4gICAgICAgIGFjdHVhbENlbGwuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxDZWxsLmNsYXNzTGlzdC5hZGQoXCJzdWJtYXJpbmVcIik7XG4gICAgICAgIC8vIGFjdHVhbENlbGwudGV4dENvbnRlbnQ9IFwic1wiO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDIuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDIuY2xhc3NMaXN0LmFkZChcInN1Ym1hcmluZVwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwzLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwzLmNsYXNzTGlzdC5hZGQoXCJzdWJtYXJpbmVcIik7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2goY2VsbENvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsMkNvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsM0NvZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5uYW1lID09PSBcImRlc3Ryb3llclwiICYmIHRoaXMub3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgbGV0IHggPSByYW5kb21OdW1CZXR3ZWVuKDEsIDEwKTtcbiAgICAgIGxldCB5ID0gcmFuZG9tTnVtQmV0d2VlbigxLCA4KTtcbiAgICAgIGxldCBuZXh0Q2VsbDI9IHkrMTtcbiAgICAgIGxldCBuZXh0Q2VsbDM9IHkrMjtcbiAgICAgIGxldCB4VG9TdHJpbmc9IHgudG9TdHJpbmcoKTsgICAgICBcbiAgICAgIGxldCB5VG9TdHJpbmc9IHkudG9TdHJpbmcoKTtcbiAgICAgIGxldCBuZXh0Q2VsbDJTdHJpbmc9IG5leHRDZWxsMi50b1N0cmluZygpOyAgICAgIFxuICAgICAgbGV0IG5leHRDZWxsM1N0cmluZz0gbmV4dENlbGwzLnRvU3RyaW5nKCk7ICAgICBcbiAgICAgIGxldCBjZWxsQ29kZT0geFRvU3RyaW5nICsgeVRvU3RyaW5nOyAgXG4gICAgICBsZXQgbmV4dENlbGwyQ29kZT0geFRvU3RyaW5nICsgbmV4dENlbGwyU3RyaW5nOyBcbiAgICAgIGxldCBuZXh0Q2VsbDNDb2RlPSB4VG9TdHJpbmcgKyBuZXh0Q2VsbDNTdHJpbmc7IFxuICAgICAgaWYodXNlZE51bWJlcnMuaW5jbHVkZXMoY2VsbENvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsMkNvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsM0NvZGUpKXtcbiAgICAgICAgdGhpcy5jb21wdXRlckNvZGUoKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBsZXQgYWN0dWFsQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtjZWxsQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDJDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGwzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsM0NvZGV9XCJdYCk7XG4gICAgICAgIGFjdHVhbENlbGwuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxDZWxsLmNsYXNzTGlzdC5hZGQoXCJkZXN0cm95ZXJcIik7XG4gICAgICAgIC8vIGFjdHVhbENlbGwudGV4dENvbnRlbnQ9IFwiZFwiO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDIuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDIuY2xhc3NMaXN0LmFkZChcImRlc3Ryb3llclwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwzLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwzLmNsYXNzTGlzdC5hZGQoXCJkZXN0cm95ZXJcIik7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2goY2VsbENvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsMkNvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsM0NvZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5uYW1lID09PSBcImJhdHRsZXNoaXBcIiAmJiB0aGlzLm9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGxldCB4ID0gcmFuZG9tTnVtQmV0d2VlbigxLCAxMCk7XG4gICAgICBsZXQgeSA9IHJhbmRvbU51bUJldHdlZW4oMSwgNyk7XG4gICAgICBsZXQgbmV4dENlbGwyPSB5KzE7XG4gICAgICBsZXQgbmV4dENlbGwzPSB5KzI7XG4gICAgICBsZXQgbmV4dENlbGw0PSB5KzM7XG4gICAgICBsZXQgeFRvU3RyaW5nPSB4LnRvU3RyaW5nKCk7ICAgICAgXG4gICAgICBsZXQgeVRvU3RyaW5nPSB5LnRvU3RyaW5nKCk7XG4gICAgICBsZXQgbmV4dENlbGwyU3RyaW5nPSBuZXh0Q2VsbDIudG9TdHJpbmcoKTsgICAgICBcbiAgICAgIGxldCBuZXh0Q2VsbDNTdHJpbmc9IG5leHRDZWxsMy50b1N0cmluZygpOyAgICAgXG4gICAgICBsZXQgbmV4dENlbGw0U3RyaW5nPSBuZXh0Q2VsbDQudG9TdHJpbmcoKTsgICAgIFxuICAgICAgbGV0IGNlbGxDb2RlPSB4VG9TdHJpbmcgKyB5VG9TdHJpbmc7ICBcbiAgICAgIGxldCBuZXh0Q2VsbDJDb2RlID0geFRvU3RyaW5nICsgbmV4dENlbGwyU3RyaW5nOyBcbiAgICAgIGxldCBuZXh0Q2VsbDNDb2RlID0geFRvU3RyaW5nICsgbmV4dENlbGwzU3RyaW5nO1xuICAgICAgbGV0IG5leHRDZWxsNENvZGUgPSB4VG9TdHJpbmcgKyBuZXh0Q2VsbDRTdHJpbmc7IFxuICAgICAgaWYodXNlZE51bWJlcnMuaW5jbHVkZXMoY2VsbENvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsMkNvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsM0NvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsNENvZGUpKXtcbiAgICAgICAgdGhpcy5jb21wdXRlckNvZGUoKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBsZXQgYWN0dWFsQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtjZWxsQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDJDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGwzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsM0NvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGw0Q29kZX1cIl1gKTtcbiAgICAgICAgYWN0dWFsQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbENlbGwuY2xhc3NMaXN0LmFkZChcImJhdHRsZXNoaXBcIik7XG4gICAgICAgIC8vIGFjdHVhbENlbGwudGV4dENvbnRlbnQ9IFwiYlwiO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDIuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDIuY2xhc3NMaXN0LmFkZChcImJhdHRsZXNoaXBcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMy5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMy5jbGFzc0xpc3QuYWRkKFwiYmF0dGxlc2hpcFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGw0LmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGw0LmNsYXNzTGlzdC5hZGQoXCJiYXR0bGVzaGlwXCIpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKGNlbGxDb2RlKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChuZXh0Q2VsbDJDb2RlKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChuZXh0Q2VsbDNDb2RlKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChuZXh0Q2VsbDRDb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMubmFtZSA9PT0gXCJjYXJyaWVyXCIgJiYgdGhpcy5vcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBsZXQgeCA9IHJhbmRvbU51bUJldHdlZW4oMSwgMTApO1xuICAgICAgbGV0IHkgPSByYW5kb21OdW1CZXR3ZWVuKDEsIDYpO1xuICAgICAgbGV0IG5leHRDZWxsMj0geSsxO1xuICAgICAgbGV0IG5leHRDZWxsMz0geSsyO1xuICAgICAgbGV0IG5leHRDZWxsND0geSszO1xuICAgICAgbGV0IG5leHRDZWxsNT0geSs0O1xuICAgICAgbGV0IHhUb1N0cmluZz0geC50b1N0cmluZygpOyAgICAgIFxuICAgICAgbGV0IHlUb1N0cmluZz0geS50b1N0cmluZygpO1xuICAgICAgbGV0IG5leHRDZWxsMlN0cmluZz0gbmV4dENlbGwyLnRvU3RyaW5nKCk7ICAgICAgXG4gICAgICBsZXQgbmV4dENlbGwzU3RyaW5nPSBuZXh0Q2VsbDMudG9TdHJpbmcoKTsgICAgIFxuICAgICAgbGV0IG5leHRDZWxsNFN0cmluZz0gbmV4dENlbGw0LnRvU3RyaW5nKCk7ICAgICBcbiAgICAgIGxldCBuZXh0Q2VsbDVTdHJpbmc9IG5leHRDZWxsNS50b1N0cmluZygpOyAgICAgXG4gICAgICBsZXQgY2VsbENvZGU9IHhUb1N0cmluZyArIHlUb1N0cmluZzsgIFxuICAgICAgbGV0IG5leHRDZWxsMkNvZGUgPSB4VG9TdHJpbmcgKyBuZXh0Q2VsbDJTdHJpbmc7IFxuICAgICAgbGV0IG5leHRDZWxsM0NvZGUgPSB4VG9TdHJpbmcgKyBuZXh0Q2VsbDNTdHJpbmc7XG4gICAgICBsZXQgbmV4dENlbGw0Q29kZSA9IHhUb1N0cmluZyArIG5leHRDZWxsNFN0cmluZztcbiAgICAgIGxldCBuZXh0Q2VsbDVDb2RlID0geFRvU3RyaW5nICsgbmV4dENlbGw1U3RyaW5nOyBcbiAgICAgIGlmKHVzZWROdW1iZXJzLmluY2x1ZGVzKGNlbGxDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDJDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDNDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDRDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDVDb2RlKSl7XG4gICAgICAgIHRoaXMuY29tcHV0ZXJDb2RlKCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgbGV0IGFjdHVhbENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7Y2VsbENvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGwyQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDNDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGw0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsNENvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGw1Q29kZX1cIl1gKTtcbiAgICAgICAgYWN0dWFsQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbENlbGwuY2xhc3NMaXN0LmFkZChcImNhcnJpZXJcIik7XG4gICAgICAgIC8vIGFjdHVhbENlbGwudGV4dENvbnRlbnQ9IFwiY1wiO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDIuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDIuY2xhc3NMaXN0LmFkZChcImNhcnJpZXJcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMy5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMy5jbGFzc0xpc3QuYWRkKFwiY2FycmllclwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGw0LmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGw0LmNsYXNzTGlzdC5hZGQoXCJjYXJyaWVyXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDUuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDUuY2xhc3NMaXN0LmFkZChcImNhcnJpZXJcIik7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2goY2VsbENvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsMkNvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsM0NvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsNENvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsNUNvZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5sZXQgcGF0cm9sQm9hdENvbXB1dGVyID0gbmV3IENvbXB1dGVyQm9hdChcInBhdHJvbEJvYXRcIiwgY29tcHV0ZXJPcmllbnRhdGlvbigpKTtcbmxldCBzdWJtYXJpbmVDb21wdXRlciA9IG5ldyBDb21wdXRlckJvYXQoXCJzdWJtYXJpbmVcIiwgY29tcHV0ZXJPcmllbnRhdGlvbigpKTtcbmxldCBkZXN0cm95ZXJDb21wdXRlciA9IG5ldyBDb21wdXRlckJvYXQoXCJkZXN0cm95ZXJcIiwgY29tcHV0ZXJPcmllbnRhdGlvbigpKTtcbmxldCBiYXR0bGVzaGlwQ29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXJCb2F0KFwiYmF0dGxlc2hpcFwiLCBjb21wdXRlck9yaWVudGF0aW9uKCkpO1xubGV0IGNhcnJpZXJDb21wdXRlciA9IG5ldyBDb21wdXRlckJvYXQoXCJjYXJyaWVyXCIsIGNvbXB1dGVyT3JpZW50YXRpb24oKSk7XG5cbnBhdHJvbEJvYXRDb21wdXRlci5jb21wdXRlckNvZGUoKTtcbnN1Ym1hcmluZUNvbXB1dGVyLmNvbXB1dGVyQ29kZSgpO1xuZGVzdHJveWVyQ29tcHV0ZXIuY29tcHV0ZXJDb2RlKCk7XG5iYXR0bGVzaGlwQ29tcHV0ZXIuY29tcHV0ZXJDb2RlKCk7XG5jYXJyaWVyQ29tcHV0ZXIuY29tcHV0ZXJDb2RlKCk7XG5cbmNvbnN0IGNvbXB1dGVyQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbXB1dGVyLWNlbGxcIik7XG5cbmNvbXB1dGVyQ2VsbHMuZm9yRWFjaCgoY29tcHV0ZXJDZWxsKT0+e1xuICBjb21wdXRlckNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKT0+e1xuICAgIGNvbXB1dGVyQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItY2xpY2tlZFwiKTtcbiAgfSk7XG59KTtcblxuY29tcHV0ZXJDZWxscy5mb3JFYWNoKChjb21wdXRlckNlbGwpID0+IHtcbiAgY29tcHV0ZXJDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcbiAgICBjb21wdXRlckNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNvbXB1dGVyLWNsaWNrZWRcIik7XG4gIH0pO1xufSk7XG5cbmxldCBjb21wdXRlclRvdGFsVGFsbHk9IDA7XG5sZXQgcGF0cm9sQm9hdFRhbGx5PTA7XG5sZXQgc3VibWFyaW5lVGFsbHk9MDtcbmxldCBkZXN0cm95ZXJUYWxseT0wO1xubGV0IGJhdHRsZXNoaXBUYWxseT0wO1xubGV0IGNhcnJpZXJUYWxseT0wO1xuXG5cbmxldCBwbGF5ZXJUb3RhbFRhbGx5ID0gMDtcbmxldCBwbGF5ZXJQYXRyb2xCb2F0VGFsbHkgPSAwO1xubGV0IHBsYXllclN1Ym1hcmluZVRhbGx5ID0gMDtcbmxldCBwbGF5ZXJEZXN0cm95ZXJUYWxseSA9IDA7XG5sZXQgcGxheWVyQmF0dGxlc2hpcFRhbGx5ID0gMDtcbmxldCBwbGF5ZXJDYXJyaWVyVGFsbHkgPSAwO1xuXG5cblxuY29tcHV0ZXJDZWxscy5mb3JFYWNoKChjb21wdXRlckNlbGwpID0+IHtcbiAgY29tcHV0ZXJDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29tcHV0ZXJDZWxsLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1jZWxsLXRhcmdldGVkXCIpO1xuICAgIGlmIChjb21wdXRlckNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjb21wdXRlci1zZWxlY3RlZFwiKSkge1xuICAgICAgY29tcHV0ZXJDZWxsLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICBjb21wdXRlckNlbGwuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICAgICAgLy8gY29tcHV0ZXJDZWxsLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e2NvbXB1dGVyQ2VsbC50ZXh0Q29udGVudCA9IFwiWFwifSksIDIwMDApO1xuICAgICAgY29tcHV0ZXJUb3RhbFRhbGx5Kys7XG4gICAgfWVsc2V7XG4gICAgICBjb21wdXRlckNlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NlZFwiKTtcbiAgICAgIGNvbXB1dGVyQ2VsbC5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e3Njb3JlYm9hcmRUZXh0LnRleHRDb250ZW50PVwiWW91IG1pc3NlZCEgTm8gc2hpcHMgaGl0LlwifSksIDIwMDApO1xuICAgIH1cblxuICAgIGlmKGNvbXB1dGVyQ2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInBhdHJvbC1ib2F0XCIpICYmIHBhdHJvbEJvYXRUYWxseT09PTEpe1xuICAgICAgLy8gc2V0VGltZW91dCgoKCk9Pntjb25zb2xlLmxvZyhcIkhJVCEgeW91IHN1bmsgdGhlaXIgUGF0cm9sIEJvYXRcIil9KSwgMTAwKTtcbiAgICAgIHNldFRpbWVvdXQoKCgpPT57c2NvcmVib2FyZFRleHQudGV4dENvbnRlbnQgPSBcIkhJVCEgeW91IHNhbmsgdGhlaXIgUGF0cm9sIEJvYXQhXCI7fSksIDIwMDApO1xuICAgIH1lbHNlIGlmIChjb21wdXRlckNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJwYXRyb2wtYm9hdFwiKSAmJiBwYXRyb2xCb2F0VGFsbHkgPCAxKXtcbiAgICAgIHNldFRpbWVvdXQoKCgpPT57c2NvcmVib2FyZFRleHQudGV4dENvbnRlbnQ9XCJZb3UgaGl0IHRoZWlyIFBhdHJvbCBCb2F0IVwifSksIDIwMDApO1xuICAgICAgcGF0cm9sQm9hdFRhbGx5Kys7XG4gICAgfTtcblxuICAgIGlmKGNvbXB1dGVyQ2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInN1Ym1hcmluZVwiKSAmJiBzdWJtYXJpbmVUYWxseT09PTIpe1xuICAgICAgLy8gc2V0VGltZW91dCgoKCk9Pntjb25zb2xlLmxvZyhcIkhJVCEgeW91IHN1bmsgdGhlaXIgU3VibWFyaW5lXCIpfSksIDEwMCk7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e3Njb3JlYm9hcmRUZXh0LnRleHRDb250ZW50ID0gXCJISVQhIHlvdSBzYW5rIHRoZWlyIFN1Ym1hcmluZSFcIjt9KSwgMjAwMCk7XG4gICAgfWVsc2UgaWYgKGNvbXB1dGVyQ2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInN1Ym1hcmluZVwiKSAmJiBzdWJtYXJpbmVUYWxseSA8IDIpe1xuICAgICAgc2V0VGltZW91dCgoKCk9PntzY29yZWJvYXJkVGV4dC50ZXh0Q29udGVudD1cIllvdSBoaXQgdGhlaXIgU3VibWFyaW5lIVwifSksIDIwMDApO1xuICAgICAgc3VibWFyaW5lVGFsbHkrKztcbiAgICB9O1xuXG4gICAgaWYoY29tcHV0ZXJDZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiZGVzdHJveWVyXCIpICYmIGRlc3Ryb3llclRhbGx5PT09Mil7XG4gICAgICAvLyBzZXRUaW1lb3V0KCgoKT0+e2NvbnNvbGUubG9nKFwiSElUISB5b3Ugc3VuayB0aGVpciBEZXN0cm95ZXJcIil9KSwgMTAwKTtcbiAgICAgIHNldFRpbWVvdXQoKCgpPT57c2NvcmVib2FyZFRleHQudGV4dENvbnRlbnQgPSBcIkhJVCEgeW91IHNhbmsgdGhlaXIgRGVzdHJveWVyIVwiO30pLCAyMDAwKTtcbiAgICB9ZWxzZSBpZiAoY29tcHV0ZXJDZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiZGVzdHJveWVyXCIpICYmIGRlc3Ryb3llclRhbGx5IDwgMil7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e3Njb3JlYm9hcmRUZXh0LnRleHRDb250ZW50PVwiWW91IGhpdCB0aGVpciBEZXN0cm95ZXIhXCJ9KSwgMjAwMCk7XG4gICAgICBkZXN0cm95ZXJUYWxseSsrO1xuICAgIH07XG5cbiAgICBpZihjb21wdXRlckNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJiYXR0bGVzaGlwXCIpICYmIGJhdHRsZXNoaXBUYWxseT09PTMpe1xuICAgICAgLy8gc2V0VGltZW91dCgoKCk9Pntjb25zb2xlLmxvZyhcIkhJVCEgeW91IHN1bmsgdGhlaXIgQmF0dGxlc2hpcFwiKX0pLCAxMDApO1xuICAgICAgc2V0VGltZW91dCgoKCk9PntzY29yZWJvYXJkVGV4dC50ZXh0Q29udGVudCA9IFwiSElUISBZT1UgU0FOSyBUSEVJUiBCQVRUTEVTSElQIVwiO30pLCAyMDAwKTtcbiAgICB9ZWxzZSBpZiAoY29tcHV0ZXJDZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiYmF0dGxlc2hpcFwiKSAmJiBiYXR0bGVzaGlwVGFsbHkgPCAzKXtcbiAgICAgIHNldFRpbWVvdXQoKCgpPT57c2NvcmVib2FyZFRleHQudGV4dENvbnRlbnQ9XCJZb3UgaGl0IHRoZWlyIEJhdHRsZXNoaXAhXCJ9KSwgMjAwMCk7XG4gICAgICBiYXR0bGVzaGlwVGFsbHkrKztcbiAgICB9O1xuXG4gICAgaWYoY29tcHV0ZXJDZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2FycmllclwiKSAmJiBjYXJyaWVyVGFsbHk9PT00KXtcbiAgICAgIC8vIHNldFRpbWVvdXQoKCgpPT57Y29uc29sZS5sb2coXCJISVQhIHlvdSBzdW5rIHRoZWlyIENhcnJpZXJcIil9KSwgMTAwKTtcbiAgICAgIHNldFRpbWVvdXQoKCgpPT57c2NvcmVib2FyZFRleHQudGV4dENvbnRlbnQgPSBcIkhJVCEgeW91IHNhbmsgdGhlaXIgQ2FycmllciFcIjt9KSwgMjAwMCk7XG4gICAgfWVsc2UgaWYgKGNvbXB1dGVyQ2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNhcnJpZXJcIikgJiYgY2FycmllclRhbGx5IDwgNCl7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e3Njb3JlYm9hcmRUZXh0LnRleHRDb250ZW50PVwiWW91IGhpdCB0aGVpciBDYXJyaWVyIVwifSksIDIwMDApO1xuICAgICAgY2FycmllclRhbGx5Kys7XG4gICAgfTtcblxuICAgIGlmKGNvbXB1dGVyVG90YWxUYWxseT09PTE3KXtcbiAgICAgIHNldFRpbWVvdXQoKCgpPT57Y29uc29sZS5sb2coXCJZT1UgV09OIVwiKX0pLCAyMDAwKTtcbiAgICAgIHNldFRpbWVvdXQod2luLCA2MDAwKTtcbiAgICB9XG5cbiAgICBcblxuICAgIGNvbnN0IG92ZXJsYXk9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICAgIC8vIHNldFRpbWVvdXQoKCgpPT57b3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTt9KSwgMTAwKTtcblxuXG4gICAgLy8gbGV0IHBsYXllcnNYVmFsdWUgPSByYW5kb21OdW1CZXR3ZWVuKDEsMTApO1xuICAgIC8vIGxldCBwbGF5ZXJzWVZhbHVlID0gcmFuZG9tTnVtQmV0d2VlbigxLCAxMCk7XG5cbiAgICBmdW5jdGlvbiByYW5kb21QbGF5ZXJDb2RlKCkge1xuICAgICAgbGV0IHBsYXllcnNYVmFsdWUgPSByYW5kb21OdW1CZXR3ZWVuKDEsIDEwKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicGxheWVycyB4IHZhbHVlIG51bT0gXCIrIHBsYXllcnNYVmFsdWUpO1xuICAgICAgbGV0IHBsYXllcnNZVmFsdWUgPSByYW5kb21OdW1CZXR3ZWVuKDEsIDEwKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicGxheWVycyB5IHZhbHVlIG51bT0gXCIrIHBsYXllcnNZVmFsdWUpO1xuICAgICAgbGV0IHBsYXllcnNYVmFsdWVTdHJpbmc9IHBsYXllcnNYVmFsdWUudG9TdHJpbmcoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicGxheWVycyB4IHZhbHVlIHN0cj0gXCIrIHBsYXllcnNYVmFsdWVTdHJpbmcpO1xuICAgICAgbGV0IHBsYXllcnNZVmFsdWVTdHJpbmc9IHBsYXllcnNZVmFsdWUudG9TdHJpbmcoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicGxheWVycyB5IHZhbHVlIHN0cj0gXCIrIHBsYXllcnNZVmFsdWVTdHJpbmcpO1xuICAgICAgbGV0IHBsYXllckNvZGVWYWx1ZSA9IHBsYXllcnNYVmFsdWVTdHJpbmcgKyBwbGF5ZXJzWVZhbHVlU3RyaW5nO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyh1c2VkTnVtYmVyczIubGVuZ3RoKTtcblxuICAgICAgaWYgKHVzZWROdW1iZXJzMi5sZW5ndGg9PT0xMDApe1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIG1vcmUgcGxheWVyIHNwYWNlc1wiKTtcbiAgICAgICAgcmV0dXJuIDExO1xuICAgICAgfVxuICAgICAgaWYoIXVzZWROdW1iZXJzMi5pbmNsdWRlcyhwbGF5ZXJDb2RlVmFsdWUpKXtcbiAgICAgICAgdXNlZE51bWJlcnMyLnB1c2gocGxheWVyQ29kZVZhbHVlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJwbGF5ZXJzIGNvZGU9IFwiICsgcGxheWVyQ29kZVZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHBsYXllckNvZGVWYWx1ZTtcbiAgICAgIH1lbHNle1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkEgY29vcmRpbmF0ZSBoYXMgYmVlbiByZXBlYXRlZFwiKTtcbiAgICAgICAgcmV0dXJuIHJhbmRvbVBsYXllckNvZGUoKTtcbiAgICAgIH07XG5cblxuICAgICAgLy8gaWYodXNlZE51bWJlcnMyLmluY2x1ZGVzKHBsYXllckNvZGVWYWx1ZSkpe1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhcInJldHJ5XCIpXG4gICAgICAvLyAgIHJhbmRvbVBsYXllckNvZGUoKTtcbiAgICAgIC8vIH1lbHNle1xuICAgICAgLy8gICB1c2VkTnVtYmVyczIucHVzaChwbGF5ZXJDb2RlVmFsdWUpO1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhcInBsYXllcnMgY29kZT0gXCIrIHBsYXllckNvZGVWYWx1ZSk7XG4gICAgICAvLyAgIHJldHVybiBwbGF5ZXJDb2RlVmFsdWU7XG4gICAgICAvLyB9XG4gICAgfTtcblxuXG5cbiAgICBsZXQgY29tcHV0ZXJBdHRhY2s9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvZGU9IFwiJHtyYW5kb21QbGF5ZXJDb2RlKCl9XCJdYCk7XG4gICAgXG4gICAgY29uc29sZS5sb2coY29tcHV0ZXJBdHRhY2spO1xuXG4gICAgLy8gbGV0IHNjb3JlYm9hcmRUZXh0PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjb3JlYm9hcmQtdGV4dFwiKTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBpZiAoY29tcHV0ZXJBdHRhY2suZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgLy8gY29tcHV0ZXJBdHRhY2suY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgIHNldFRpbWVvdXQoKCgpPT57Y29tcHV0ZXJBdHRhY2suY2xhc3NMaXN0LmFkZChcImhpdFwiKX0pLCA2MDAwKTtcbiAgICAgIC8vIGNvbXB1dGVyQXR0YWNrLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e2NvbXB1dGVyQXR0YWNrLnRleHRDb250ZW50ID0gXCJYXCJ9KSwgNjAwMCk7XG4gICAgICBwbGF5ZXJUb3RhbFRhbGx5Kys7XG4gICAgfWVsc2V7XG4gICAgICAvLyBjb21wdXRlckF0dGFjay5jbGFzc0xpc3QuYWRkKFwibWlzc2VkXCIpO1xuICAgICAgc2V0VGltZW91dCgoKCk9Pntjb21wdXRlckF0dGFjay5jbGFzc0xpc3QuYWRkKFwibWlzc2VkXCIpO30pLCA2MDAwKTtcbiAgICAgIC8vIHNjb3JlYm9hcmRUZXh0LnRleHRDb250ZW50PVwiU3dpbmcgYW5kIGEgbWlzcyFcIjtcbiAgICAgIHNldFRpbWVvdXQoKCgpPT57c2NvcmVib2FyZENvbXB1dGVyVGV4dC50ZXh0Q29udGVudD1cIkNvbXB1dGVyIGF0dGFja2VkIGFuZCBtaXNzZWQhXCJ9KSwgNjAwMCk7XG4gICAgfVxuXG4gICAgaWYoY29tcHV0ZXJBdHRhY2suZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJwbGF5ZXItcGF0cm9sLWJvYXRcIikgJiYgcGxheWVyUGF0cm9sQm9hdFRhbGx5PT09MSl7XG4gICAgICAvLyBzZXRUaW1lb3V0KCgoKT0+e2NvbnNvbGUubG9nKFwiSElUISB5b3VyIFBhdHJvbCBCb2F0IGhhcyBiZWVuIHNhbmtcIil9KSwgMTAwKTtcbiAgICAgIHNldFRpbWVvdXQoKCgpPT57c2NvcmVib2FyZENvbXB1dGVyVGV4dC50ZXh0Q29udGVudCA9IFwiSElUISB5b3VyIFBhdHJvbCBCb2F0IGhhcyBiZWVuIHNhbmtcIjt9KSwgNjAwMCk7XG4gICAgfWVsc2UgaWYgKGNvbXB1dGVyQXR0YWNrLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwicGxheWVyLXBhdHJvbC1ib2F0XCIpICYmIHBsYXllclBhdHJvbEJvYXRUYWxseSA8IDEpe1xuICAgICAgc2V0VGltZW91dCgoKCk9PntzY29yZWJvYXJkQ29tcHV0ZXJUZXh0LnRleHRDb250ZW50PVwiWW91ciBQYXRyb2wgQm9hdCBoYXMgYmVlbiBISVQhXCJ9KSwgNjAwMCk7XG4gICAgICBwbGF5ZXJQYXRyb2xCb2F0VGFsbHkrKztcbiAgICB9O1xuXG4gICAgaWYoY29tcHV0ZXJBdHRhY2suZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJwbGF5ZXItc3VibWFyaW5lXCIpICYmIHBsYXllclN1Ym1hcmluZVRhbGx5PT09Mil7XG4gICAgICAvLyBzZXRUaW1lb3V0KCgoKT0+e2NvbnNvbGUubG9nKFwiSElUISB5b3VyIFN1Ym1hcmluZSBoYXMgYmVlbiBzYW5rXCIpfSksIDEwMCk7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e3Njb3JlYm9hcmRDb21wdXRlclRleHQudGV4dENvbnRlbnQgPSBcIkhJVCEgeW91ciBTdWJtYXJpbmUgaGFzIGJlZW4gc2Fua1wiO30pLCA2MDAwKTtcbiAgICB9ZWxzZSBpZiAoY29tcHV0ZXJBdHRhY2suZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJwbGF5ZXItc3VibWFyaW5lXCIpICYmIHBsYXllclN1Ym1hcmluZVRhbGx5IDwgMil7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e3Njb3JlYm9hcmRDb21wdXRlclRleHQudGV4dENvbnRlbnQ9XCJZb3VyIFN1Ym1hcmluZSBoYXMgYmVlbiBISVQhXCJ9KSwgNjAwMCk7XG4gICAgICBwbGF5ZXJTdWJtYXJpbmVUYWxseSsrO1xuICAgIH07XG5cbiAgICBpZihjb21wdXRlckF0dGFjay5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInBsYXllci1kZXN0cm95ZXJcIikgJiYgcGxheWVyRGVzdHJveWVyVGFsbHk9PT0yKXtcbiAgICAgIC8vIHNldFRpbWVvdXQoKCgpPT57Y29uc29sZS5sb2coXCJISVQhIHlvdXIgRGVzdHJveWVyIGhhcyBiZWVuIHNhbmtcIil9KSwgMTAwKTtcbiAgICAgIHNldFRpbWVvdXQoKCgpPT57c2NvcmVib2FyZENvbXB1dGVyVGV4dC50ZXh0Q29udGVudCA9IFwiSElUISB5b3VyIERlc3Ryb3llciBoYXMgYmVlbiBzYW5rXCI7fSksIDYwMDApO1xuICAgIH1lbHNlIGlmIChjb21wdXRlckF0dGFjay5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInBsYXllci1kZXN0cm95ZXJcIikgJiYgcGxheWVyRGVzdHJveWVyVGFsbHkgPCAyKXtcbiAgICAgIHNldFRpbWVvdXQoKCgpPT57c2NvcmVib2FyZENvbXB1dGVyVGV4dC50ZXh0Q29udGVudD1cIllvdXIgRGVzdHJveWVyIGhhcyBiZWVuIEhJVCFcIn0pLCA2MDAwKTtcbiAgICAgIHBsYXllckRlc3Ryb3llclRhbGx5Kys7XG4gICAgfTtcblxuICAgIGlmKGNvbXB1dGVyQXR0YWNrLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwicGxheWVyLWJhdHRsZXNoaXBcIikgJiYgcGxheWVyQmF0dGxlc2hpcFRhbGx5PT09Myl7XG4gICAgICAvLyBzZXRUaW1lb3V0KCgoKT0+e2NvbnNvbGUubG9nKFwiSElUISB5b3VyIEJhdHRsZXNoaXAgaGFzIGJlZW4gc2Fua1wiKX0pLCAxMDApO1xuICAgICAgc2V0VGltZW91dCgoKCk9PntzY29yZWJvYXJkQ29tcHV0ZXJUZXh0LnRleHRDb250ZW50ID0gXCJISVQhIHRoZSBjb21wdXRlciBTVU5LIFlPVVIgQkFUVExFU0hJUCFcIjt9KSwgNjAwMCk7XG4gICAgfWVsc2UgaWYgKGNvbXB1dGVyQXR0YWNrLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwicGxheWVyLWJhdHRsZXNoaXBcIikgJiYgcGxheWVyQmF0dGxlc2hpcFRhbGx5IDwgMykge1xuICAgICAgc2V0VGltZW91dCgoKCk9PntzY29yZWJvYXJkQ29tcHV0ZXJUZXh0LnRleHRDb250ZW50PVwiWW91ciBCYXR0bGVzaGlwIGhhcyBiZWVuIEhJVCFcIn0pLCA2MDAwKTtcbiAgICAgIHBsYXllckJhdHRsZXNoaXBUYWxseSsrO1xuICAgIH07XG5cbiAgICBpZihjb21wdXRlckF0dGFjay5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInBsYXllci1jYXJyaWVyXCIpICYmIHBsYXllckNhcnJpZXJUYWxseT09PTQpe1xuICAgICAgLy8gc2V0VGltZW91dCgoKCk9Pntjb25zb2xlLmxvZyhcIkhJVCEgeW91ciBDYXJyaWVyIGhhcyBiZWVuIHNhbmtcIil9KSwgMTAwKTtcbiAgICAgIHNldFRpbWVvdXQoKCgpPT57c2NvcmVib2FyZENvbXB1dGVyVGV4dC50ZXh0Q29udGVudCA9IFwiSElUISB5b3VyIENhcnJpZXIgaGFzIGJlZW4gc2Fua1wiO30pLCA2MDAwKTtcbiAgICB9ZWxzZSBpZiAoY29tcHV0ZXJBdHRhY2suZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJwbGF5ZXItY2FycmllclwiKSAmJiBwbGF5ZXJDYXJyaWVyVGFsbHkgPCA0KSB7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e3Njb3JlYm9hcmRDb21wdXRlclRleHQudGV4dENvbnRlbnQ9XCJZb3VyIENhcnJpZXIgaGFzIGJlZW4gSElUIVwifSksIDYwMDApO1xuICAgICAgcGxheWVyQ2FycmllclRhbGx5Kys7XG4gICAgfTtcblxuICAgIGlmKHBsYXllclRvdGFsVGFsbHk9PT0xNyl7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e2NvbnNvbGUubG9nKFwiWW91IExvc3QhXCIpfSksIDYwMDApO1xuICAgICAgc2V0VGltZW91dChsb3NlLCA2MDAwKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcInBsYXllcnMgVG90YWwgdGFsbHk9IFwiKyBwbGF5ZXJUb3RhbFRhbGx5KTtcbiAgICBjb25zb2xlLmxvZyhcInBsYXllcnMgcGF0cm9sIGJvYXQgdGFsbHk9IFwiKyBwbGF5ZXJQYXRyb2xCb2F0VGFsbHkpO1xuICAgIGNvbnNvbGUubG9nKFwicGxheWVycyBzdWJtYXJpbmUgdGFsbHk9IFwiKyBwbGF5ZXJTdWJtYXJpbmVUYWxseSk7XG4gICAgY29uc29sZS5sb2coXCJwbGF5ZXJzIGRlc3Ryb3llciB0YWxseT0gXCIrIHBsYXllckRlc3Ryb3llclRhbGx5KTtcbiAgICBjb25zb2xlLmxvZyhcInBsYXllcnMgYmF0dGxlc2hpcCB0YWxseT0gXCIrIHBsYXllckJhdHRsZXNoaXBUYWxseSk7XG4gICAgY29uc29sZS5sb2coXCJwbGF5ZXJzIGNhcnJpZXIgdGFsbHk9IFwiKyBwbGF5ZXJDYXJyaWVyVGFsbHkpO1xuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gY29tcHV0ZXJBdHRhY2suY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgc2V0VGltZW91dCgoKCk9Pntjb21wdXRlckF0dGFjay5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWNlbGwtdGFyZ2V0ZWRcIik7fSksIDQwMDApO1xuXG4gICAgc2V0VGltZW91dCgoKCk9PntvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO30pLCA2MDAwKTtcblxuXG5cblxuXG4gICBcblxuICAgIC8vIG92ZXJsYXlGb3JSZXN1bHRzLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgLy8gd2luQmFubmVyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgLy8gcmV0dXJuO1xuXG4gICAgLy8gb3ZlcmxheUZvclJlc3VsdHMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAvLyBsb3NlQmFubmVyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgLy8gcmV0dXJuO1xuXG5cbiAgfSk7XG59KTtcblxuY29uc29sZS5sb2cocGF0cm9sQm9hdENvbXB1dGVyKTsiXSwibmFtZXMiOlsiZ3JhYk5hbWUiLCJDcmVhdGVCb2F0IiwiaGl0IiwiaXNTdW5rIiwiR2FtZWJvYXJkIiwiZXhhbXBsZUFkZCIsImEiLCJiIiwibmFtZSIsImNvbnN0cnVjdG9yIiwibGVuZ3RoIiwiYm9hdE5hbWUiLCJudW1UaW1lc0hpdCIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsImhhc1N1bmsiLCJjb29yZGluYXRlcyIsInhfbnVtYmVyIiwieV9udW1iZXIiLCJzdGF0dXMiLCJib2F0TmFtZU9iaiIsIndhc1BpY2tlZCIsInBsYWNlIiwic2hpcExlbmd0aCIsInZlcnRpY2FsT3JIb3Jpem9udGFsIiwieE51bWJlciIsInlOdW1iZXIiLCJpIiwicmVjZWl2ZUF0dGFjayIsInNjb3JlYm9hcmRUZXh0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2NvcmVib2FyZENvbXB1dGVyVGV4dCIsIm5hbWVQbGF0ZSIsIm5hbWVTdWJtaXQiLCJib2F0U2VsZWN0aW9uU2VjdGlvbiIsImJvYXRPcmllbnRhdGlvblNlY3Rpb24iLCJjb21wdXRlclNlY3Rpb24iLCJjbGFzc0xpc3QiLCJhZGQiLCJncmlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbXBvc2VkUGF0aCIsInZhbHVlIiwidGV4dENvbnRlbnQiLCJyZW1vdmUiLCJvdmVybGF5Rm9yUmVzdWx0cyIsIndpbkJhbm5lciIsImxvc2VCYW5uZXIiLCJ3aW4iLCJsb3NlIiwieFZhbHVlIiwiZGF0YXNldCIsInlWYWx1ZSIsInBhdHJvbEJvYXQiLCJzdWJtYXJpbmUiLCJkZXN0cm95ZXIiLCJiYXR0bGVzaGlwIiwiY2FycmllciIsImhvcml6YW50YWwiLCJ2ZXJ0aWNhbCIsImJvYXRTZWxlY3Rpb25CdXR0b25GdW5jdGlvbiIsImJ0bkNsaWNrZWQiLCJidG5BcnIiLCJyZW1haW5pbmdCdG5zIiwiZmlsdGVyIiwiYnRuIiwiZm9yRWFjaCIsImJvYXRPcmllbnRhdGlvbkJ1dHRvbkZ1bmN0aW9uIiwiY29uc29sZSIsImxvZyIsInBhdHJvbEJvYXRTcGFjZXMiLCJzdWJtYXJpbmVTcGFjZXMiLCJkZXN0cm95ZXJTcGFjZXMiLCJiYXR0bGVzaGlwU3BhY2VzIiwiY2FycmllclNwYWNlcyIsImJvYXRPcmllbnRhdGlvbiIsImNsaWNrQnRuc01vZGFsIiwidGFibGVDbGFzcyIsImdldEF0dHJpYnV0ZSIsImluY2x1ZGVzIiwiY2VsbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2VsbCIsInhOdW0iLCJOdW1iZXIiLCJ5TnVtIiwibmV4dENlbGwyX2hvcml6YW50YWwiLCJuZXh0Q2VsbDNfaG9yaXphbnRhbCIsIm5leHRDZWxsNF9ob3JpemFudGFsIiwibmV4dENlbGw1X2hvcml6YW50YWwiLCJuZXh0Q2VsbDJfdmVydGljYWwiLCJuZXh0Q2VsbDNfdmVydGljYWwiLCJuZXh0Q2VsbDRfdmVydGljYWwiLCJuZXh0Q2VsbDVfdmVydGljYWwiLCJkaXNhYmxlZCIsInJhbmRvbU51bUJldHdlZW4iLCJtaW4iLCJtYXgiLCJudW0iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjb21wdXRlck9yaWVudGF0aW9uIiwidXNlZE51bWJlcnMiLCJ1c2VkTnVtYmVyczIiLCJDb21wdXRlckJvYXQiLCJvcmllbnRhdGlvbiIsImNvbXB1dGVyQ29kZSIsIngiLCJ5IiwibmV4dENlbGwyIiwieFRvU3RyaW5nIiwidG9TdHJpbmciLCJ5VG9TdHJpbmciLCJuZXh0Q2VsbDJTdHJpbmciLCJjZWxsQ29kZSIsIm5leHRDZWxsMkNvZGUiLCJhY3R1YWxDZWxsIiwiYWN0dWFsTmV4dENlbGwyIiwicHVzaCIsIm5leHRDZWxsMyIsIm5leHRDZWxsM1N0cmluZyIsIm5leHRDZWxsM0NvZGUiLCJhY3R1YWxOZXh0Q2VsbDMiLCJuZXh0Q2VsbDQiLCJuZXh0Q2VsbDRTdHJpbmciLCJuZXh0Q2VsbDRDb2RlIiwiYWN0dWFsTmV4dENlbGw0IiwibmV4dENlbGw1IiwibmV4dENlbGw1U3RyaW5nIiwibmV4dENlbGw1Q29kZSIsImFjdHVhbE5leHRDZWxsNSIsInBhdHJvbEJvYXRDb21wdXRlciIsInN1Ym1hcmluZUNvbXB1dGVyIiwiZGVzdHJveWVyQ29tcHV0ZXIiLCJiYXR0bGVzaGlwQ29tcHV0ZXIiLCJjYXJyaWVyQ29tcHV0ZXIiLCJjb21wdXRlckNlbGxzIiwiY29tcHV0ZXJDZWxsIiwiY29tcHV0ZXJUb3RhbFRhbGx5IiwicGF0cm9sQm9hdFRhbGx5Iiwic3VibWFyaW5lVGFsbHkiLCJkZXN0cm95ZXJUYWxseSIsImJhdHRsZXNoaXBUYWxseSIsImNhcnJpZXJUYWxseSIsInBsYXllclRvdGFsVGFsbHkiLCJwbGF5ZXJQYXRyb2xCb2F0VGFsbHkiLCJwbGF5ZXJTdWJtYXJpbmVUYWxseSIsInBsYXllckRlc3Ryb3llclRhbGx5IiwicGxheWVyQmF0dGxlc2hpcFRhbGx5IiwicGxheWVyQ2FycmllclRhbGx5Iiwic2V0VGltZW91dCIsIm92ZXJsYXkiLCJyYW5kb21QbGF5ZXJDb2RlIiwicGxheWVyc1hWYWx1ZSIsInBsYXllcnNZVmFsdWUiLCJwbGF5ZXJzWFZhbHVlU3RyaW5nIiwicGxheWVyc1lWYWx1ZVN0cmluZyIsInBsYXllckNvZGVWYWx1ZSIsImNvbXB1dGVyQXR0YWNrIl0sInNvdXJjZVJvb3QiOiIifQ==