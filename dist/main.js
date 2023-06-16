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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nbody,\nhtml {\n  height: 100%;\n  margin: 0;\n  /* background-color: skyblue; */\n}\n:root {\n  /* --custom-name: value; */\n  /* --light-green-bg: #476529; */\n  /* example, color: var(--navy-clr) */\n  --primary-clr: #8AA6A3;\n  --secondary-clr: #8AA6A3;\n  --accent-clr: #8AA6A3;\n}\n.header{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n    margin: 0rem;\n    border: .25rem solid black;\n    background-color: navy;\n    color: silver;\n    margin-bottom: 0rem;\n}\nfieldset{\n  display: flex;\n  flex-direction: column;\n}\n.form.player-name{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.submit-name-btn{\n  margin-top: 1rem;\n  padding: .5rem;\n}\n.name-plate,\n.computer-name-plate, \n.boat-selection-title,\n.boat-orientation-title{\n  margin-bottom: 1rem;\n  font-size: 3rem;\n  font-weight: bold;\n}\ntable, th, td {\n  border: 1px solid black;\n}\n.grid,\n.computer-grid,\n.boat-selection,\n.boat-orientation{\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.boat-selection-btns,\n.boat-orientation-btns{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: .25rem;\n}\nth, td{\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n  width: 2rem;\n}\n.clicked{\n  background-color: orange;\n}\n.outside-grid{\n  cursor: not-allowed;\n}\n.outside-grid-error{\n  background-color: red;\n  animation-name: off-grid-error;\n  animation-duration: 400ms;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n}\n@keyframes off-grid-error{\n  from {background-color: red;}\n  to {background-color: white;}\n}\n.table-class,\n.computer-table-class{\n  position: relative;\n}\n.grid,\n.computer-grid{\n  position: relative;\n}\n.click-btns-modal{\n  width: 40%;\n  height: auto;\n  /* margin: auto; */\n  background-color: rgb(194, 194, 194);\n  background-color: black;\n  color: whitesmoke;\n  border: 1px solid gray;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0%;\n  padding: 1rem;\n  transition-duration: 200ms;\n  transition-property: opacity;\n}\n.show{\n  opacity: 100%;\n}\n.phased-out{\n  opacity: 30%;\n}\n.selected{\n  background-color: black;\n}\n.computer-selected{\n  background-color: black;\n  color: white;\n  /* opacity: 30%; */\n}\n.computer-clicked{\n  background-color: orange;\n  cursor: pointer;\n}\n.computer-cell-targeted{\n  background-color: red;\n  animation-name: computer-cell-targeted;\n  animation-duration: 250ms;\n  animation-iteration-count: 11;\n  animation-direction: alternate;\n}\n@keyframes computer-cell-targeted{\n  from {background-color: orange;}\n  to {background-color: red;}\n}\n.player-cell-targeted{\n  background-color: red;\n  animation-name: computer-cell-targeted;\n  animation-duration: 250ms;\n  animation-iteration-count: 11;\n  animation-direction: alternate;\n}\n.hit{\n  background-color: red;\n  text-align: center;\n  /* transition-duration: 200ms; */\n  transition-delay: 1000ms;\n}\n.missed{\n  background-color: gray;\n}\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.1);\n  pointer-events: none;\n  opacity: 0;\n  transition: 200ms;\n}\n.overlay.show{\n  opacity: 1;\n  pointer-events: all;\n}\n.scoreboard-title{\n  margin-left: 1rem;\n  margin-right: .25rem;\n}\n.scoreboard-display{\n  display: flex;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  position: sticky;\n  top: 0rem;\n  background-color: red;\n  margin-bottom: 1rem;\n  /* From https://css.glass */\nbackground: rgba(245, 246, 255, 0.19);\n/* border-radius: 16px; */\nbox-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\nbackdrop-filter: blur(14.1px);\n-webkit-backdrop-filter: blur(14.1px);\nborder: 1px solid rgba(245, 246, 255, 0.17);\nz-index: 1;\n}\n/* .scoreboard-text{\n  transition-duration: 5000ms;\n} */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;AACxB;AACA;;EAEE,YAAY;EACZ,SAAS;EACT,+BAA+B;AACjC;AACA;EACE,0BAA0B;EAC1B,+BAA+B;EAC/B,oCAAoC;EACpC,sBAAsB;EACtB,wBAAwB;EACxB,qBAAqB;AACvB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,oBAAoB;IACpB,YAAY;IACZ,0BAA0B;IAC1B,sBAAsB;IACtB,aAAa;IACb,mBAAmB;AACvB;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,cAAc;AAChB;AACA;;;;EAIE,mBAAmB;EACnB,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,uBAAuB;AACzB;AACA;;;;EAIE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;;EAEE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,WAAW;AACb;AACA;EACE,mBAAmB;EACnB,sBAAsB;EACtB,WAAW;AACb;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,mBAAmB;AACrB;AACA;EACE,qBAAqB;EACrB,8BAA8B;EAC9B,yBAAyB;EACzB,mCAAmC;EACnC,8BAA8B;AAChC;AACA;EACE,MAAM,qBAAqB,CAAC;EAC5B,IAAI,uBAAuB,CAAC;AAC9B;AACA;;EAEE,kBAAkB;AACpB;AACA;;EAEE,kBAAkB;AACpB;AACA;EACE,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,oCAAoC;EACpC,uBAAuB;EACvB,iBAAiB;EACjB,sBAAsB;EACtB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,WAAW;EACX,aAAa;EACb,0BAA0B;EAC1B,4BAA4B;AAC9B;AACA;EACE,aAAa;AACf;AACA;EACE,YAAY;AACd;AACA;EACE,uBAAuB;AACzB;AACA;EACE,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,eAAe;AACjB;AACA;EACE,qBAAqB;EACrB,sCAAsC;EACtC,yBAAyB;EACzB,6BAA6B;EAC7B,8BAA8B;AAChC;AACA;EACE,MAAM,wBAAwB,CAAC;EAC/B,IAAI,qBAAqB,CAAC;AAC5B;AACA;EACE,qBAAqB;EACrB,sCAAsC;EACtC,yBAAyB;EACzB,6BAA6B;EAC7B,8BAA8B;AAChC;AACA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,gCAAgC;EAChC,wBAAwB;AAC1B;AACA;EACE,sBAAsB;AACxB;AACA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,oCAAoC;EACpC,oBAAoB;EACpB,UAAU;EACV,iBAAiB;AACnB;AACA;EACE,UAAU;EACV,mBAAmB;AACrB;AACA;EACE,iBAAiB;EACjB,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,iBAAiB;EACjB,oBAAoB;EACpB,gBAAgB;EAChB,SAAS;EACT,qBAAqB;EACrB,mBAAmB;EACnB,2BAA2B;AAC7B,qCAAqC;AACrC,yBAAyB;AACzB,yCAAyC;AACzC,6BAA6B;AAC7B,qCAAqC;AACrC,2CAA2C;AAC3C,UAAU;AACV;AACA;;GAEG","sourcesContent":["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nbody,\nhtml {\n  height: 100%;\n  margin: 0;\n  /* background-color: skyblue; */\n}\n:root {\n  /* --custom-name: value; */\n  /* --light-green-bg: #476529; */\n  /* example, color: var(--navy-clr) */\n  --primary-clr: #8AA6A3;\n  --secondary-clr: #8AA6A3;\n  --accent-clr: #8AA6A3;\n}\n.header{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n    margin: 0rem;\n    border: .25rem solid black;\n    background-color: navy;\n    color: silver;\n    margin-bottom: 0rem;\n}\nfieldset{\n  display: flex;\n  flex-direction: column;\n}\n.form.player-name{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.submit-name-btn{\n  margin-top: 1rem;\n  padding: .5rem;\n}\n.name-plate,\n.computer-name-plate, \n.boat-selection-title,\n.boat-orientation-title{\n  margin-bottom: 1rem;\n  font-size: 3rem;\n  font-weight: bold;\n}\ntable, th, td {\n  border: 1px solid black;\n}\n.grid,\n.computer-grid,\n.boat-selection,\n.boat-orientation{\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.boat-selection-btns,\n.boat-orientation-btns{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: .25rem;\n}\nth, td{\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n  width: 2rem;\n}\n.clicked{\n  background-color: orange;\n}\n.outside-grid{\n  cursor: not-allowed;\n}\n.outside-grid-error{\n  background-color: red;\n  animation-name: off-grid-error;\n  animation-duration: 400ms;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n}\n@keyframes off-grid-error{\n  from {background-color: red;}\n  to {background-color: white;}\n}\n.table-class,\n.computer-table-class{\n  position: relative;\n}\n.grid,\n.computer-grid{\n  position: relative;\n}\n.click-btns-modal{\n  width: 40%;\n  height: auto;\n  /* margin: auto; */\n  background-color: rgb(194, 194, 194);\n  background-color: black;\n  color: whitesmoke;\n  border: 1px solid gray;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0%;\n  padding: 1rem;\n  transition-duration: 200ms;\n  transition-property: opacity;\n}\n.show{\n  opacity: 100%;\n}\n.phased-out{\n  opacity: 30%;\n}\n.selected{\n  background-color: black;\n}\n.computer-selected{\n  background-color: black;\n  color: white;\n  /* opacity: 30%; */\n}\n.computer-clicked{\n  background-color: orange;\n  cursor: pointer;\n}\n.computer-cell-targeted{\n  background-color: red;\n  animation-name: computer-cell-targeted;\n  animation-duration: 250ms;\n  animation-iteration-count: 11;\n  animation-direction: alternate;\n}\n@keyframes computer-cell-targeted{\n  from {background-color: orange;}\n  to {background-color: red;}\n}\n.player-cell-targeted{\n  background-color: red;\n  animation-name: computer-cell-targeted;\n  animation-duration: 250ms;\n  animation-iteration-count: 11;\n  animation-direction: alternate;\n}\n.hit{\n  background-color: red;\n  text-align: center;\n  /* transition-duration: 200ms; */\n  transition-delay: 1000ms;\n}\n.missed{\n  background-color: gray;\n}\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.1);\n  pointer-events: none;\n  opacity: 0;\n  transition: 200ms;\n}\n.overlay.show{\n  opacity: 1;\n  pointer-events: all;\n}\n.scoreboard-title{\n  margin-left: 1rem;\n  margin-right: .25rem;\n}\n.scoreboard-display{\n  display: flex;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  position: sticky;\n  top: 0rem;\n  background-color: red;\n  margin-bottom: 1rem;\n  /* From https://css.glass */\nbackground: rgba(245, 246, 255, 0.19);\n/* border-radius: 16px; */\nbox-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\nbackdrop-filter: blur(14.1px);\n-webkit-backdrop-filter: blur(14.1px);\nborder: 1px solid rgba(245, 246, 255, 0.17);\nz-index: 1;\n}\n/* .scoreboard-text{\n  transition-duration: 5000ms;\n} */"],"sourceRoot":""}]);
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



let scoreboardText = document.querySelector(".scoreboard-text");
const namePlate = document.querySelector(".name-plate");
const nameSubmit = document.querySelector(".form.player-name");
nameSubmit.addEventListener("submit", e => {
  e.preventDefault();
  let name = e.composedPath()[0][1].value;
  namePlate.textContent = name;
});
const grid = document.querySelector(".grid");
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
  console.log(e.path[0].dataset.patrolBoatSpaces);
  boatSelectionButtonFunction(patrolBoat);
});
submarine.addEventListener("click", e => {
  console.log(e.path[0].dataset.submarineSpaces);
  boatSelectionButtonFunction(submarine);
});
destroyer.addEventListener("click", e => {
  console.log(e.path[0].dataset.destroyerSpaces);
  boatSelectionButtonFunction(destroyer);
});
battleship.addEventListener("click", e => {
  console.log(e.path[0].dataset.battleshipSpaces);
  boatSelectionButtonFunction(battleship);
});
carrier.addEventListener("click", e => {
  console.log(e.path[0].dataset.carrierSpaces);
  boatSelectionButtonFunction(carrier);
});
horizantal.addEventListener("click", e => {
  console.log(e.path[0].dataset.boatOrientation);
  boatOrientationButtonFunction(horizantal);
});
vertical.addEventListener("click", e => {
  console.log(e.path[0].dataset.boatOrientation);
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
        actualCell.textContent = "p";
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
        actualCell.textContent = "s";
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
        actualCell.textContent = "d";
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
        actualCell.textContent = "b";
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
        actualCell.textContent = "c";
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
        actualCell.textContent = "p";
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
        actualCell.textContent = "s";
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
        actualCell.textContent = "d";
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
        actualCell.textContent = "b";
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
        actualCell.textContent = "c";
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
      // computerCell.textContent = "X";
      setTimeout(() => {
        computerCell.textContent = "X";
      }, 100);
      computerTotalTally++;
    } else {
      computerCell.classList.add("missed");
      setTimeout(() => {
        scoreboardText.textContent = "Missed! No ships hit.";
      }, 1000);
    }
    if (computerCell.getAttribute("class").includes("patrol-boat") && patrolBoatTally === 1) {
      // setTimeout((()=>{console.log("HIT! you sunk their Patrol Boat")}), 100);
      setTimeout(() => {
        scoreboardText.textContent = "HIT! you sank their Patrol Boat!";
      }, 1000);
    } else if (computerCell.getAttribute("class").includes("patrol-boat") && patrolBoatTally < 1) {
      setTimeout(() => {
        scoreboardText.textContent = "You hit their Patrol Boat!";
      }, 1000);
      patrolBoatTally++;
    }
    ;
    if (computerCell.getAttribute("class").includes("submarine") && submarineTally === 2) {
      // setTimeout((()=>{console.log("HIT! you sunk their Submarine")}), 100);
      setTimeout(() => {
        scoreboardText.textContent = "HIT! you sank their Submarine!";
      }, 1000);
    } else if (computerCell.getAttribute("class").includes("submarine") && submarineTally < 2) {
      setTimeout(() => {
        scoreboardText.textContent = "You hit their Submarine!";
      }, 1000);
      submarineTally++;
    }
    ;
    if (computerCell.getAttribute("class").includes("destroyer") && destroyerTally === 2) {
      // setTimeout((()=>{console.log("HIT! you sunk their Destroyer")}), 100);
      setTimeout(() => {
        scoreboardText.textContent = "HIT! you sank their Destroyer!";
      }, 1000);
    } else if (computerCell.getAttribute("class").includes("destroyer") && destroyerTally < 2) {
      setTimeout(() => {
        scoreboardText.textContent = "You hit their Destroyer!";
      }, 1000);
      destroyerTally++;
    }
    ;
    if (computerCell.getAttribute("class").includes("battleship") && battleshipTally === 3) {
      // setTimeout((()=>{console.log("HIT! you sunk their Battleship")}), 100);
      setTimeout(() => {
        scoreboardText.textContent = "HIT! YOU SANK THEIR BATTLESHIP!";
      }, 1000);
    } else if (computerCell.getAttribute("class").includes("battleship") && battleshipTally < 3) {
      setTimeout(() => {
        scoreboardText.textContent = "You hit their Battleship!";
      }, 1000);
      battleshipTally++;
    }
    ;
    if (computerCell.getAttribute("class").includes("carrier") && carrierTally === 4) {
      // setTimeout((()=>{console.log("HIT! you sunk their Carrier")}), 100);
      setTimeout(() => {
        scoreboardText.textContent = "HIT! you sank their Carrier!";
      }, 1000);
    } else if (computerCell.getAttribute("class").includes("carrier") && carrierTally < 4) {
      setTimeout(() => {
        scoreboardText.textContent = "You hit their Carrier!";
      }, 1000);
      carrierTally++;
    }
    ;
    if (computerTotalTally === 17) {
      setTimeout(() => {
        console.log("YOU WON!");
      }, 100);
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
      computerAttack.classList.add("hit");
      // computerAttack.textContent = "X";
      setTimeout(() => {
        computerAttack.textContent = "X";
      }, 100);
      playerTotalTally++;
    } else {
      computerAttack.classList.add("missed");
      // scoreboardText.textContent="Swing and a miss!";
      setTimeout(() => {
        scoreboardText.textContent = "Computer attacked and missed!";
      }, 3000);
    }
    if (computerAttack.getAttribute("class").includes("player-patrol-boat") && playerPatrolBoatTally === 1) {
      // setTimeout((()=>{console.log("HIT! your Patrol Boat has been sank")}), 100);
      setTimeout(() => {
        scoreboardText.textContent = "HIT! your Patrol Boat has been sank";
      }, 3000);
    } else if (computerAttack.getAttribute("class").includes("player-patrol-boat") && playerPatrolBoatTally < 1) {
      setTimeout(() => {
        scoreboardText.textContent = "Your Patrol Boat has been HIT!";
      }, 3000);
      playerPatrolBoatTally++;
    }
    ;
    if (computerAttack.getAttribute("class").includes("player-submarine") && playerSubmarineTally === 2) {
      // setTimeout((()=>{console.log("HIT! your Submarine has been sank")}), 100);
      setTimeout(() => {
        scoreboardText.textContent = "HIT! your Submarine has been sank";
      }, 3000);
    } else if (computerAttack.getAttribute("class").includes("player-submarine") && playerSubmarineTally < 2) {
      setTimeout(() => {
        scoreboardText.textContent = "Your Submarine has been HIT!";
      }, 3000);
      playerSubmarineTally++;
    }
    ;
    if (computerAttack.getAttribute("class").includes("player-destroyer") && playerDestroyerTally === 2) {
      // setTimeout((()=>{console.log("HIT! your Destroyer has been sank")}), 100);
      setTimeout(() => {
        scoreboardText.textContent = "HIT! your Destroyer has been sank";
      }, 3000);
    } else if (computerAttack.getAttribute("class").includes("player-destroyer") && playerDestroyerTally < 2) {
      setTimeout(() => {
        scoreboardText.textContent = "Your Destroyer has been HIT!";
      }, 3000);
      playerDestroyerTally++;
    }
    ;
    if (computerAttack.getAttribute("class").includes("player-battleship") && playerBattleshipTally === 3) {
      // setTimeout((()=>{console.log("HIT! your Battleship has been sank")}), 100);
      setTimeout(() => {
        scoreboardText.textContent = "HIT! the computer SUNK YOUR BATTLESHIP!";
      }, 3000);
    } else if (computerAttack.getAttribute("class").includes("player-battleship") && playerBattleshipTally < 3) {
      setTimeout(() => {
        scoreboardText.textContent = "Your Battleship has been HIT!";
      }, 3000);
      playerBattleshipTally++;
    }
    ;
    if (computerAttack.getAttribute("class").includes("player-carrier") && playerCarrierTally === 4) {
      // setTimeout((()=>{console.log("HIT! your Carrier has been sank")}), 100);
      setTimeout(() => {
        scoreboardText.textContent = "HIT! your Carrier has been sank";
      }, 3000);
    } else if (computerAttack.getAttribute("class").includes("player-carrier") && playerCarrierTally < 4) {
      setTimeout(() => {
        scoreboardText.textContent = "Your Carrier has been HIT!";
      }, 3000);
      playerCarrierTally++;
    }
    ;
    if (playerTotalTally === 17) {
      setTimeout(() => {
        console.log("You Lost!");
      }, 100);
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
    }, 100);
    setTimeout(() => {
      overlay.classList.remove("show");
    }, 100);
  });
});
console.log(patrolBoatComputer);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFFL0YsU0FBU0ssVUFBVUEsQ0FBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7RUFDcEIsT0FBT0QsQ0FBQyxHQUFDQyxDQUFDO0FBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQSxNQUFNUCxRQUFRLEdBQUlRLElBQUksSUFBS0EsSUFBSTtBQUUvQixNQUFNUCxVQUFVO0VBQ1pRLFdBQVdBLENBQUNDLE1BQU0sRUFBRUMsUUFBUSxFQUErQjtJQUFBLElBQTdCQyxXQUFXLEdBQUFDLFNBQUEsQ0FBQUgsTUFBQSxRQUFBRyxTQUFBLFFBQUFDLFNBQUEsR0FBQUQsU0FBQSxNQUFDLENBQUM7SUFBQSxJQUFFRSxPQUFPLEdBQUFGLFNBQUEsQ0FBQUgsTUFBQSxRQUFBRyxTQUFBLFFBQUFDLFNBQUEsR0FBQUQsU0FBQSxNQUFDLEtBQUs7SUFDdEQsSUFBSSxDQUFDSCxNQUFNLEdBQUVBLE1BQU07SUFDbkIsSUFBSSxDQUFDRSxXQUFXLEdBQUVBLFdBQVc7SUFDN0IsSUFBSSxDQUFDRyxPQUFPLEdBQUVBLE9BQU87SUFDckIsSUFBSSxDQUFDSixRQUFRLEdBQUNBLFFBQVE7RUFDMUI7QUFDSjtBQUFDO0FBRUQsTUFBTVQsR0FBRyxHQUFFUyxRQUFRLElBQUtBLFFBQVEsQ0FBQ0MsV0FBVyxFQUFFO0FBRTlDLE1BQU1ULE1BQU0sR0FBR1EsUUFBUSxJQUFLQSxRQUFRLENBQUNELE1BQU0sS0FBR0MsUUFBUSxDQUFDQyxXQUFXLEdBQUksSUFBSSxHQUFHLEtBQUs7QUFFbEYsTUFBTVIsU0FBUztFQUNYSyxXQUFXQSxDQUFBLEVBQUU7SUFDVCxJQUFJLENBQUNPLFdBQVcsR0FBRztJQUNqQjtJQUNBLENBQ0U7TUFBRUMsUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxDQUN0RztJQUNEO0lBQ0EsQ0FDRTtNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLENBQ3RHO0lBQ0Q7SUFDQSxDQUNFO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsQ0FDdEc7SUFDRDtJQUNBLENBQ0U7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxDQUN0RztJQUNEO0lBQ0EsQ0FDRTtNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLENBQ3RHO0lBQ0Q7SUFDQSxDQUNFO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsQ0FDdEc7SUFDRDtJQUNBLENBQ0U7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxDQUN0RztJQUNEO0lBQ0EsQ0FDRTtNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLENBQ3RHO0lBQ0Q7SUFDQSxDQUNFO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsQ0FDdEc7SUFDRDtJQUNBLENBQ0U7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVD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c0JBQXNCLGdDQUFnQyxJQUFJLFNBQVMsa0ZBQWtGLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxRQUFRLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sUUFBUSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssc0JBQXNCLHVCQUF1QixNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssc0JBQXNCLHVCQUF1QixNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxL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QUFFNkUsZ0JBQWdCLENBQUM7SUFDdEQ5RSxPQUFPLENBQUNDLEdBQUcsQ0FBQyw2QkFBNkIsR0FBRThFLHFCQUFxQixDQUFDO0lBQ2pFL0UsT0FBTyxDQUFDQyxHQUFHLENBQUMsMkJBQTJCLEdBQUUrRSxvQkFBb0IsQ0FBQztJQUM5RGhGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixHQUFFZ0Ysb0JBQW9CLENBQUM7SUFDOURqRixPQUFPLENBQUNDLEdBQUcsQ0FBQyw0QkFBNEIsR0FBRWlGLHFCQUFxQixDQUFDO0lBQ2hFbEYsT0FBTyxDQUFDQyxHQUFHLENBQUMseUJBQXlCLEdBQUVrRixrQkFBa0IsQ0FBQzs7SUFLOUQ7SUFDSTtJQUNBQyxVQUFVLENBQUUsTUFBSTtNQUFDUSxjQUFjLENBQUNwRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztJQUFDLENBQUMsRUFBRyxHQUFHLENBQUM7SUFFOUUyRixVQUFVLENBQUUsTUFBSTtNQUFDQyxPQUFPLENBQUM3RixTQUFTLENBQUNNLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFBQyxDQUFDLEVBQUcsR0FBRyxDQUFDO0VBRzVELENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ2dFLGtCQUFrQixDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvRE9NLWludGVyYWN0aW9ucy9ET00taW50ZXJhY3Rpb25zLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMgXyZfdGVzdHMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3JhYk5hbWUsIENyZWF0ZUJvYXQsIGhpdCwgaXNTdW5rLCBHYW1lYm9hcmQgfSBmcm9tIFwiLi4vZnVuY3Rpb25zIF8mX3Rlc3RzL2Z1bmN0aW9uc1wiO1xuXG5mdW5jdGlvbiBleGFtcGxlQWRkKGEsYil7XG4gICAgcmV0dXJuIGErYjtcbn1cblxuXG5leHBvcnR7IGV4YW1wbGVBZGQgfTsiLCJjb25zdCBncmFiTmFtZSA9IChuYW1lKSA9PiBuYW1lO1xuXG5jbGFzcyBDcmVhdGVCb2F0e1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCwgYm9hdE5hbWUsIG51bVRpbWVzSGl0PTAsIGhhc1N1bms9ZmFsc2Upe1xuICAgICAgICB0aGlzLmxlbmd0aD0gbGVuZ3RoO1xuICAgICAgICB0aGlzLm51bVRpbWVzSGl0PSBudW1UaW1lc0hpdDtcbiAgICAgICAgdGhpcy5oYXNTdW5rPSBoYXNTdW5rO1xuICAgICAgICB0aGlzLmJvYXROYW1lPWJvYXROYW1lO1xuICAgIH07XG59O1xuXG5jb25zdCBoaXQ9KGJvYXROYW1lKSA9PiBib2F0TmFtZS5udW1UaW1lc0hpdCsrO1xuXG5jb25zdCBpc1N1bms9IChib2F0TmFtZSk9PiAoYm9hdE5hbWUubGVuZ3RoPT09Ym9hdE5hbWUubnVtVGltZXNIaXQpID8gdHJ1ZSA6IGZhbHNlO1xuXG5jbGFzcyBHYW1lYm9hcmR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5jb29yZGluYXRlcyA9IFtcbiAgICAgICAgICAvLzBcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjAsIHlfbnVtYmVyOiAwLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MCwgeV9udW1iZXI6IDEsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjowLCB5X251bWJlcjogMiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjAsIHlfbnVtYmVyOiAzLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MCwgeV9udW1iZXI6IDQsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjowLCB5X251bWJlcjogNSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjAsIHlfbnVtYmVyOiA2LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MCwgeV9udW1iZXI6IDcsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjowLCB5X251bWJlcjogOCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjAsIHlfbnVtYmVyOiA5LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIC8vMVxuICAgICAgICAgIFtcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MSwgeV9udW1iZXI6IDAsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoxLCB5X251bWJlcjogMSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjEsIHlfbnVtYmVyOiAyLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MSwgeV9udW1iZXI6IDMsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoxLCB5X251bWJlcjogNCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjEsIHlfbnVtYmVyOiA1LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MSwgeV9udW1iZXI6IDYsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoxLCB5X251bWJlcjogNywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjEsIHlfbnVtYmVyOiA4LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MSwgeV9udW1iZXI6IDksIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgLy8yXG4gICAgICAgICAgW1xuICAgICAgICAgICAgeyB4X251bWJlcjoyLCB5X251bWJlcjogMCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjIsIHlfbnVtYmVyOiAxLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MiwgeV9udW1iZXI6IDIsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoyLCB5X251bWJlcjogMywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjIsIHlfbnVtYmVyOiA0LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MiwgeV9udW1iZXI6IDUsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoyLCB5X251bWJlcjogNiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjIsIHlfbnVtYmVyOiA3LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MiwgeV9udW1iZXI6IDgsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoyLCB5X251bWJlcjogOSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICAvLzNcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjMsIHlfbnVtYmVyOiAwLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MywgeV9udW1iZXI6IDEsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjozLCB5X251bWJlcjogMiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjMsIHlfbnVtYmVyOiAzLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MywgeV9udW1iZXI6IDQsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjozLCB5X251bWJlcjogNSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjMsIHlfbnVtYmVyOiA2LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MywgeV9udW1iZXI6IDcsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjozLCB5X251bWJlcjogOCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjMsIHlfbnVtYmVyOiA5LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIC8vNFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NCwgeV9udW1iZXI6IDAsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo0LCB5X251bWJlcjogMSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjQsIHlfbnVtYmVyOiAyLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NCwgeV9udW1iZXI6IDMsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo0LCB5X251bWJlcjogNCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjQsIHlfbnVtYmVyOiA1LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NCwgeV9udW1iZXI6IDYsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo0LCB5X251bWJlcjogNywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjQsIHlfbnVtYmVyOiA4LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NCwgeV9udW1iZXI6IDksIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgLy81XG4gICAgICAgICAgW1xuICAgICAgICAgICAgeyB4X251bWJlcjo1LCB5X251bWJlcjogMCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjUsIHlfbnVtYmVyOiAxLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NSwgeV9udW1iZXI6IDIsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo1LCB5X251bWJlcjogMywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjUsIHlfbnVtYmVyOiA0LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NSwgeV9udW1iZXI6IDUsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo1LCB5X251bWJlcjogNiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjUsIHlfbnVtYmVyOiA3LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NSwgeV9udW1iZXI6IDgsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo1LCB5X251bWJlcjogOSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICAvLzZcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjYsIHlfbnVtYmVyOiAwLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NiwgeV9udW1iZXI6IDEsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo2LCB5X251bWJlcjogMiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjYsIHlfbnVtYmVyOiAzLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NiwgeV9udW1iZXI6IDQsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo2LCB5X251bWJlcjogNSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjYsIHlfbnVtYmVyOiA2LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NiwgeV9udW1iZXI6IDcsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo2LCB5X251bWJlcjogOCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjYsIHlfbnVtYmVyOiA5LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIC8vN1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NywgeV9udW1iZXI6IDAsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo3LCB5X251bWJlcjogMSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjcsIHlfbnVtYmVyOiAyLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NywgeV9udW1iZXI6IDMsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo3LCB5X251bWJlcjogNCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjcsIHlfbnVtYmVyOiA1LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NywgeV9udW1iZXI6IDYsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo3LCB5X251bWJlcjogNywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjcsIHlfbnVtYmVyOiA4LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NywgeV9udW1iZXI6IDksIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgLy84XG4gICAgICAgICAgW1xuICAgICAgICAgICAgeyB4X251bWJlcjo4LCB5X251bWJlcjogMCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjgsIHlfbnVtYmVyOiAxLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OCwgeV9udW1iZXI6IDIsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo4LCB5X251bWJlcjogMywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjgsIHlfbnVtYmVyOiA0LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OCwgeV9udW1iZXI6IDUsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo4LCB5X251bWJlcjogNiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjgsIHlfbnVtYmVyOiA3LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OCwgeV9udW1iZXI6IDgsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo4LCB5X251bWJlcjogOSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICAvLzlcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjksIHlfbnVtYmVyOiAwLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OSwgeV9udW1iZXI6IDEsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo5LCB5X251bWJlcjogMiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjksIHlfbnVtYmVyOiAzLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OSwgeV9udW1iZXI6IDQsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo5LCB5X251bWJlcjogNSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjksIHlfbnVtYmVyOiA2LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OSwgeV9udW1iZXI6IDcsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo5LCB5X251bWJlcjogOCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjksIHlfbnVtYmVyOiA5LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICBdXG4gICAgICAgIF07XG4gICAgfTtcblxuICAgIHBsYWNlKHNoaXBMZW5ndGgsIHZlcnRpY2FsT3JIb3Jpem9udGFsLCB4TnVtYmVyLCB5TnVtYmVyLCBib2F0TmFtZU9iaiwgYm9hdE5hbWUpe1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYoeE51bWJlcitpPDAgfHwgeE51bWJlcitpPjkgfHwgeU51bWJlci1pPDAgfHwgeU51bWJlci1pPjkpe1xuICAgICAgICAgIHJldHVybiBcIkludmFsaWQgZW50cnksIHNoaXAgaXMgbm90IHdpdGhpbiB0aGUgbGltaXRzIG9mIHRoZSBib2FyZC5UcnkgYWdhaW4uXCI7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh2ZXJ0aWNhbE9ySG9yaXpvbnRhbCA9PT0gXCJob3Jpem9udGFsXCIpe1xuICAgICAgICAgIHRoaXMuY29vcmRpbmF0ZXNbeE51bWJlciArIGldW3lOdW1iZXJdLnN0YXR1cyA9IFwiZmlsbGVkXCI7XG4gICAgICAgICAgdGhpcy5jb29yZGluYXRlc1t4TnVtYmVyICsgaV1beU51bWJlcl0uYm9hdE5hbWUgPSBib2F0TmFtZTtcbiAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW3hOdW1iZXIgKyBpXVt5TnVtYmVyXS5ib2F0TmFtZU9iaiA9IGJvYXROYW1lT2JqO1xuICAgICAgICB9O1xuICAgICAgICBpZiAodmVydGljYWxPckhvcml6b250YWwgPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgIHRoaXMuY29vcmRpbmF0ZXNbeE51bWJlcl1beU51bWJlciAtIGldLnN0YXR1cyA9IFwiZmlsbGVkXCI7XG4gICAgICAgICAgdGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyIC0gaV0uYm9hdE5hbWUgPSBib2F0TmFtZTtcbiAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW3hOdW1iZXJdW3lOdW1iZXIgLSBpXS5ib2F0TmFtZU9iaiA9IGJvYXROYW1lT2JqO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgcmVjZWl2ZUF0dGFjayh4TnVtYmVyLCB5TnVtYmVyKXtcbiAgICAgIGlmICh4TnVtYmVyIDwgMCB8fCB4TnVtYmVyID4gOSB8fCB5TnVtYmVyIDwgMCB8fCB5TnVtYmVyID4gOSkge1xuICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGVudHJ5LCBzaGlwIGlzIG5vdCB3aXRoaW4gdGhlIGxpbWl0cyBvZiB0aGUgYm9hcmQuVHJ5IGFnYWluLlwiO1xuICAgICAgfVxuICAgICAgaWYodGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyXS53YXNQaWNrZWQ9PT10cnVlKXtcbiAgICAgICAgcmV0dXJuIGBJbnZhbGlkIGVudHJ5LCBjb29yZGluYXRlcyAke3hOdW1iZXJ9LCR7eU51bWJlcn0gd2FzIGFscmVhZHkgYXR0YWNrZWQuVHJ5IGFnYWluLmA7XG4gICAgICB9O1xuICAgICAgaWYgKHRoaXMuY29vcmRpbmF0ZXNbeE51bWJlcl1beU51bWJlcl0uc3RhdHVzID09PSBcImVtcHR5XCIpIHtcbiAgICAgICAgLy9QTEFDRUhPTERFUjogd2hhdCB0byBkby9kaXNwbGF5IHdpdGggbWlzc2VkIGF0dGFja3NcbiAgICAgICAgdGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyXS53YXNQaWNrZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gYE1pc3NlZCEgTm8gaGl0IG9uIGNvb3JkaW5hdGVzICR7eE51bWJlcn0sJHt5TnVtYmVyfWA7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyXS5zdGF0dXMgPT09IFwiZmlsbGVkXCIpIHtcbiAgICAgICAgdGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyXS53YXNQaWNrZWQgPSB0cnVlO1xuICAgICAgICBoaXQodGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyXS5ib2F0TmFtZU9iaik7XG4gICAgICAgIGlmIChpc1N1bmsodGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyXS5ib2F0TmFtZU9iaik9PT10cnVlKSB7XG4gICAgICAgICAgcmV0dXJuIGBIaXQhIGArKHRoaXMuY29vcmRpbmF0ZXNbeE51bWJlcl1beU51bWJlcl0uYm9hdE5hbWUpK2AgaGFzIGJlZW4gaGl0IG9uIGNvb3JkaW5hdGVzICR7eE51bWJlcn0sJHt5TnVtYmVyfSwgYW5kIGhhcyBiZWVuIHN1bmshYDtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGBIaXQhIGArKHRoaXMuY29vcmRpbmF0ZXNbeE51bWJlcl1beU51bWJlcl0uYm9hdE5hbWUpK2AgaGFzIGJlZW4gaGl0IG9uIGNvb3JkaW5hdGVzICR7eE51bWJlcn0sJHt5TnVtYmVyfWA7XG4gICAgICB9XG4gICAgfTtcbn07XG5cblxuZXhwb3J0IHsgZ3JhYk5hbWUsIENyZWF0ZUJvYXQsIGhpdCwgaXNTdW5rLCBHYW1lYm9hcmQgfTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHksXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlOyAqL1xcbn1cXG46cm9vdCB7XFxuICAvKiAtLWN1c3RvbS1uYW1lOiB2YWx1ZTsgKi9cXG4gIC8qIC0tbGlnaHQtZ3JlZW4tYmc6ICM0NzY1Mjk7ICovXFxuICAvKiBleGFtcGxlLCBjb2xvcjogdmFyKC0tbmF2eS1jbHIpICovXFxuICAtLXByaW1hcnktY2xyOiAjOEFBNkEzO1xcbiAgLS1zZWNvbmRhcnktY2xyOiAjOEFBNkEzO1xcbiAgLS1hY2NlbnQtY2xyOiAjOEFBNkEzO1xcbn1cXG4uaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgICBtYXJnaW46IDByZW07XFxuICAgIGJvcmRlcjogLjI1cmVtIHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZ5O1xcbiAgICBjb2xvcjogc2lsdmVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xcbn1cXG5maWVsZHNldHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uZm9ybS5wbGF5ZXItbmFtZXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc3VibWl0LW5hbWUtYnRue1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIHBhZGRpbmc6IC41cmVtO1xcbn1cXG4ubmFtZS1wbGF0ZSxcXG4uY29tcHV0ZXItbmFtZS1wbGF0ZSwgXFxuLmJvYXQtc2VsZWN0aW9uLXRpdGxlLFxcbi5ib2F0LW9yaWVudGF0aW9uLXRpdGxle1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG50YWJsZSwgdGgsIHRkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4uZ3JpZCxcXG4uY29tcHV0ZXItZ3JpZCxcXG4uYm9hdC1zZWxlY3Rpb24sXFxuLmJvYXQtb3JpZW50YXRpb257XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5ib2F0LXNlbGVjdGlvbi1idG5zLFxcbi5ib2F0LW9yaWVudGF0aW9uLWJ0bnN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAuMjVyZW07XFxufVxcbnRoLCB0ZHtcXG4gIHBhZGRpbmctdG9wOiAuMjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogLjI1cmVtO1xcbiAgd2lkdGg6IDJyZW07XFxufVxcbi5jbGlja2Vke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG4ub3V0c2lkZS1ncmlke1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLm91dHNpZGUtZ3JpZC1lcnJvcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBvZmYtZ3JpZC1lcnJvcjtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNDAwbXM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG59XFxuQGtleWZyYW1lcyBvZmYtZ3JpZC1lcnJvcntcXG4gIGZyb20ge2JhY2tncm91bmQtY29sb3I6IHJlZDt9XFxuICB0byB7YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7fVxcbn1cXG4udGFibGUtY2xhc3MsXFxuLmNvbXB1dGVyLXRhYmxlLWNsYXNze1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uZ3JpZCxcXG4uY29tcHV0ZXItZ3JpZHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNsaWNrLWJ0bnMtbW9kYWx7XFxuICB3aWR0aDogNDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgLyogbWFyZ2luOiBhdXRvOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTk0LCAxOTQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgb3BhY2l0eTogMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xcbn1cXG4uc2hvd3tcXG4gIG9wYWNpdHk6IDEwMCU7XFxufVxcbi5waGFzZWQtb3V0e1xcbiAgb3BhY2l0eTogMzAlO1xcbn1cXG4uc2VsZWN0ZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuLmNvbXB1dGVyLXNlbGVjdGVke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICAvKiBvcGFjaXR5OiAzMCU7ICovXFxufVxcbi5jb21wdXRlci1jbGlja2Vke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY29tcHV0ZXItY2VsbC10YXJnZXRlZHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBjb21wdXRlci1jZWxsLXRhcmdldGVkO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyNTBtcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDExO1xcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcbn1cXG5Aa2V5ZnJhbWVzIGNvbXB1dGVyLWNlbGwtdGFyZ2V0ZWR7XFxuICBmcm9tIHtiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7fVxcbiAgdG8ge2JhY2tncm91bmQtY29sb3I6IHJlZDt9XFxufVxcbi5wbGF5ZXItY2VsbC10YXJnZXRlZHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBjb21wdXRlci1jZWxsLXRhcmdldGVkO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyNTBtcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDExO1xcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcbn1cXG4uaGl0e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgLyogdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7ICovXFxuICB0cmFuc2l0aW9uLWRlbGF5OiAxMDAwbXM7XFxufVxcbi5taXNzZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiAyMDBtcztcXG59XFxuLm92ZXJsYXkuc2hvd3tcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG4uc2NvcmVib2FyZC10aXRsZXtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAuMjVyZW07XFxufVxcbi5zY29yZWJvYXJkLWRpc3BsYXl7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDByZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgLyogRnJvbSBodHRwczovL2Nzcy5nbGFzcyAqL1xcbmJhY2tncm91bmQ6IHJnYmEoMjQ1LCAyNDYsIDI1NSwgMC4xOSk7XFxuLyogYm9yZGVyLXJhZGl1czogMTZweDsgKi9cXG5ib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG5iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTQuMXB4KTtcXG4td2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNC4xcHgpO1xcbmJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjQ1LCAyNDYsIDI1NSwgMC4xNyk7XFxuei1pbmRleDogMTtcXG59XFxuLyogLnNjb3JlYm9hcmQtdGV4dHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMDBtcztcXG59ICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0Usc0JBQXNCO0FBQ3hCO0FBQ0E7O0VBRUUsWUFBWTtFQUNaLFNBQVM7RUFDVCwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQiwrQkFBK0I7RUFDL0Isb0NBQW9DO0VBQ3BDLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIscUJBQXFCO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTs7OztFQUlFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTs7OztFQUlFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTs7RUFFRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsV0FBVztBQUNiO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQiw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLG1DQUFtQztFQUNuQyw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLE1BQU0scUJBQXFCLENBQUM7RUFDNUIsSUFBSSx1QkFBdUIsQ0FBQztBQUM5QjtBQUNBOztFQUVFLGtCQUFrQjtBQUNwQjtBQUNBOztFQUVFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLHNDQUFzQztFQUN0Qyx5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsTUFBTSx3QkFBd0IsQ0FBQztFQUMvQixJQUFJLHFCQUFxQixDQUFDO0FBQzVCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsc0NBQXNDO0VBQ3RDLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxvQ0FBb0M7RUFDcEMsb0JBQW9CO0VBQ3BCLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFDN0IscUNBQXFDO0FBQ3JDLHlCQUF5QjtBQUN6Qix5Q0FBeUM7QUFDekMsNkJBQTZCO0FBQzdCLHFDQUFxQztBQUNyQywyQ0FBMkM7QUFDM0MsVUFBVTtBQUNWO0FBQ0E7O0dBRUdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSxcXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7ICovXFxufVxcbjpyb290IHtcXG4gIC8qIC0tY3VzdG9tLW5hbWU6IHZhbHVlOyAqL1xcbiAgLyogLS1saWdodC1ncmVlbi1iZzogIzQ3NjUyOTsgKi9cXG4gIC8qIGV4YW1wbGUsIGNvbG9yOiB2YXIoLS1uYXZ5LWNscikgKi9cXG4gIC0tcHJpbWFyeS1jbHI6ICM4QUE2QTM7XFxuICAtLXNlY29uZGFyeS1jbHI6ICM4QUE2QTM7XFxuICAtLWFjY2VudC1jbHI6ICM4QUE2QTM7XFxufVxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICAgIG1hcmdpbjogMHJlbTtcXG4gICAgYm9yZGVyOiAuMjVyZW0gc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG5hdnk7XFxuICAgIGNvbG9yOiBzaWx2ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDByZW07XFxufVxcbmZpZWxkc2V0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5mb3JtLnBsYXllci1uYW1le1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zdWJtaXQtbmFtZS1idG57XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgcGFkZGluZzogLjVyZW07XFxufVxcbi5uYW1lLXBsYXRlLFxcbi5jb21wdXRlci1uYW1lLXBsYXRlLCBcXG4uYm9hdC1zZWxlY3Rpb24tdGl0bGUsXFxuLmJvYXQtb3JpZW50YXRpb24tdGl0bGV7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbnRhYmxlLCB0aCwgdGQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbi5ncmlkLFxcbi5jb21wdXRlci1ncmlkLFxcbi5ib2F0LXNlbGVjdGlvbixcXG4uYm9hdC1vcmllbnRhdGlvbntcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmJvYXQtc2VsZWN0aW9uLWJ0bnMsXFxuLmJvYXQtb3JpZW50YXRpb24tYnRuc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IC4yNXJlbTtcXG59XFxudGgsIHRke1xcbiAgcGFkZGluZy10b3A6IC4yNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAuMjVyZW07XFxuICB3aWR0aDogMnJlbTtcXG59XFxuLmNsaWNrZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcbi5vdXRzaWRlLWdyaWR7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4ub3V0c2lkZS1ncmlkLWVycm9ye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYW5pbWF0aW9uLW5hbWU6IG9mZi1ncmlkLWVycm9yO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcbn1cXG5Aa2V5ZnJhbWVzIG9mZi1ncmlkLWVycm9ye1xcbiAgZnJvbSB7YmFja2dyb3VuZC1jb2xvcjogcmVkO31cXG4gIHRvIHtiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTt9XFxufVxcbi50YWJsZS1jbGFzcyxcXG4uY29tcHV0ZXItdGFibGUtY2xhc3N7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5ncmlkLFxcbi5jb21wdXRlci1ncmlke1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY2xpY2stYnRucy1tb2RhbHtcXG4gIHdpZHRoOiA0MCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICAvKiBtYXJnaW46IGF1dG87ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxOTQsIDE5NCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBvcGFjaXR5OiAwJTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XFxufVxcbi5zaG93e1xcbiAgb3BhY2l0eTogMTAwJTtcXG59XFxuLnBoYXNlZC1vdXR7XFxuICBvcGFjaXR5OiAzMCU7XFxufVxcbi5zZWxlY3RlZHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4uY29tcHV0ZXItc2VsZWN0ZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIC8qIG9wYWNpdHk6IDMwJTsgKi9cXG59XFxuLmNvbXB1dGVyLWNsaWNrZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jb21wdXRlci1jZWxsLXRhcmdldGVke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGNvbXB1dGVyLWNlbGwtdGFyZ2V0ZWQ7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDI1MG1zO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTE7XFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxufVxcbkBrZXlmcmFtZXMgY29tcHV0ZXItY2VsbC10YXJnZXRlZHtcXG4gIGZyb20ge2JhY2tncm91bmQtY29sb3I6IG9yYW5nZTt9XFxuICB0byB7YmFja2dyb3VuZC1jb2xvcjogcmVkO31cXG59XFxuLnBsYXllci1jZWxsLXRhcmdldGVke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGNvbXB1dGVyLWNlbGwtdGFyZ2V0ZWQ7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDI1MG1zO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTE7XFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxufVxcbi5oaXR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAvKiB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtczsgKi9cXG4gIHRyYW5zaXRpb24tZGVsYXk6IDEwMDBtcztcXG59XFxuLm1pc3NlZHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcbi5vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IDIwMG1zO1xcbn1cXG4ub3ZlcmxheS5zaG93e1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcbi5zY29yZWJvYXJkLXRpdGxle1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBtYXJnaW4tcmlnaHQ6IC4yNXJlbTtcXG59XFxuLnNjb3JlYm9hcmQtZGlzcGxheXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAvKiBGcm9tIGh0dHBzOi8vY3NzLmdsYXNzICovXFxuYmFja2dyb3VuZDogcmdiYSgyNDUsIDI0NiwgMjU1LCAwLjE5KTtcXG4vKiBib3JkZXItcmFkaXVzOiAxNnB4OyAqL1xcbmJveC1zaGFkb3c6IDAgNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbmJhY2tkcm9wLWZpbHRlcjogYmx1cigxNC4xcHgpO1xcbi13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE0LjFweCk7XFxuYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDUsIDI0NiwgMjU1LCAwLjE3KTtcXG56LWluZGV4OiAxO1xcbn1cXG4vKiAuc2NvcmVib2FyZC10ZXh0e1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwMG1zO1xcbn0gKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7XG4gIGdyYWJOYW1lLFxuICBDcmVhdGVCb2F0LFxuICBoaXQsXG4gIGlzU3VuayxcbiAgR2FtZWJvYXJkLFxufSBmcm9tIFwiLi4vc3JjL2Z1bmN0aW9ucyBfJl90ZXN0cy9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IGV4YW1wbGVBZGQgfSBmcm9tIFwiLi4vc3JjL0RPTS1pbnRlcmFjdGlvbnMvRE9NLWludGVyYWN0aW9uc1wiO1xuXG5sZXQgc2NvcmVib2FyZFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjb3JlYm9hcmQtdGV4dFwiKTtcblxuY29uc3QgbmFtZVBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYW1lLXBsYXRlXCIpO1xuY29uc3QgbmFtZVN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS5wbGF5ZXItbmFtZVwiKTtcblxubmFtZVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IG5hbWUgPSBlLmNvbXBvc2VkUGF0aCgpWzBdWzFdLnZhbHVlO1xuICBuYW1lUGxhdGUudGV4dENvbnRlbnQgPSBuYW1lO1xufSk7XG5cbmNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyaWRcIik7XG5cbmdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnN0IHhWYWx1ZSA9IGUuY29tcG9zZWRQYXRoKClbMF0uZGF0YXNldC54VmFsdWU7XG4gIGNvbnN0IHlWYWx1ZSA9IGUuY29tcG9zZWRQYXRoKClbMF0uZGF0YXNldC55VmFsdWU7XG5cbiAgaWYgKHhWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gY29uc29sZS5sb2coeFZhbHVlKTtcbiAgICAvLyBjb25zb2xlLmxvZyh5VmFsdWUpO1xuICB9XG59KTtcblxuY29uc3QgcGF0cm9sQm9hdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGF0cm9sLWJvYXQtYnRuXCIpO1xuY29uc3Qgc3VibWFyaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtYXJpbmUtYnRuXCIpO1xuY29uc3QgZGVzdHJveWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXN0cm95ZXItYnRuXCIpO1xuY29uc3QgYmF0dGxlc2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmF0dGxlc2hpcC1idG5cIik7XG5jb25zdCBjYXJyaWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJyaWVyLWJ0blwiKTtcbmNvbnN0IGhvcml6YW50YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvcml6YW50YWwtYnRuXCIpO1xuY29uc3QgdmVydGljYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZlcnRpY2FsLWJ0blwiKTtcblxuZnVuY3Rpb24gYm9hdFNlbGVjdGlvbkJ1dHRvbkZ1bmN0aW9uKFxuICBidG5DbGlja2VkLFxuICBidG5BcnIgPSBbcGF0cm9sQm9hdCwgc3VibWFyaW5lLCBkZXN0cm95ZXIsIGJhdHRsZXNoaXAsIGNhcnJpZXJdXG4pIHtcbiAgYnRuQ2xpY2tlZC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgbGV0IHJlbWFpbmluZ0J0bnMgPSBidG5BcnIuZmlsdGVyKChidG4pID0+IGJ0biAhPT0gYnRuQ2xpY2tlZCk7XG4gIHJlbWFpbmluZ0J0bnMuZm9yRWFjaCgoYnRuKSA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIikpO1xufVxuXG5mdW5jdGlvbiBib2F0T3JpZW50YXRpb25CdXR0b25GdW5jdGlvbihcbiAgYnRuQ2xpY2tlZCxcbiAgYnRuQXJyID0gW2hvcml6YW50YWwsIHZlcnRpY2FsXVxuKSB7XG4gIGJ0bkNsaWNrZWQuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gIGxldCByZW1haW5pbmdCdG5zID0gYnRuQXJyLmZpbHRlcigoYnRuKSA9PiBidG4gIT09IGJ0bkNsaWNrZWQpO1xuICByZW1haW5pbmdCdG5zLmZvckVhY2goKGJ0bikgPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpKTtcbn1cblxucGF0cm9sQm9hdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc29sZS5sb2coZS5wYXRoWzBdLmRhdGFzZXQucGF0cm9sQm9hdFNwYWNlcyk7XG4gIGJvYXRTZWxlY3Rpb25CdXR0b25GdW5jdGlvbihwYXRyb2xCb2F0KTtcbn0pO1xuXG5zdWJtYXJpbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnNvbGUubG9nKGUucGF0aFswXS5kYXRhc2V0LnN1Ym1hcmluZVNwYWNlcyk7XG4gIGJvYXRTZWxlY3Rpb25CdXR0b25GdW5jdGlvbihzdWJtYXJpbmUpO1xufSk7XG5cbmRlc3Ryb3llci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc29sZS5sb2coZS5wYXRoWzBdLmRhdGFzZXQuZGVzdHJveWVyU3BhY2VzKTtcbiAgYm9hdFNlbGVjdGlvbkJ1dHRvbkZ1bmN0aW9uKGRlc3Ryb3llcik7XG59KTtcblxuYmF0dGxlc2hpcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc29sZS5sb2coZS5wYXRoWzBdLmRhdGFzZXQuYmF0dGxlc2hpcFNwYWNlcyk7XG4gIGJvYXRTZWxlY3Rpb25CdXR0b25GdW5jdGlvbihiYXR0bGVzaGlwKTtcbn0pO1xuXG5jYXJyaWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zb2xlLmxvZyhlLnBhdGhbMF0uZGF0YXNldC5jYXJyaWVyU3BhY2VzKTtcbiAgYm9hdFNlbGVjdGlvbkJ1dHRvbkZ1bmN0aW9uKGNhcnJpZXIpO1xufSk7XG5cbmhvcml6YW50YWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnNvbGUubG9nKGUucGF0aFswXS5kYXRhc2V0LmJvYXRPcmllbnRhdGlvbik7XG4gIGJvYXRPcmllbnRhdGlvbkJ1dHRvbkZ1bmN0aW9uKGhvcml6YW50YWwpO1xufSk7XG5cbnZlcnRpY2FsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zb2xlLmxvZyhlLnBhdGhbMF0uZGF0YXNldC5ib2F0T3JpZW50YXRpb24pO1xuICBib2F0T3JpZW50YXRpb25CdXR0b25GdW5jdGlvbih2ZXJ0aWNhbCk7XG59KTtcblxuLy9jbGljay1idG5zLW1vZGFsXG5jb25zdCBjbGlja0J0bnNNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xpY2stYnRucy1tb2RhbFwiKTtcbmNvbnN0IHRhYmxlQ2xhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlLWNsYXNzXCIpO1xuXG50YWJsZUNsYXNzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgaWYgKFxuICAgICghcGF0cm9sQm9hdC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFzdWJtYXJpbmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhZGVzdHJveWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIWJhdHRsZXNoaXAuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhY2Fycmllci5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikpIHx8XG4gICAgKCFob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIXZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSlcbiAgKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJOb25lIG9mIHRoZXNlIGJ1dHRvbnMgYXJlIGNsaWNrZWRcIik7IC8vVEhJUyBXT1JLUyEhXG4gICAgLy8gcGF0cm9sQm9hdC5jbGFzc0xpc3QuYWRkKFwibm8tYnRuLWNsaWNrZWQtZXJyb3JcIik7XG4gICAgY2xpY2tCdG5zTW9kYWwuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgdGFibGVDbGFzcy5jbGFzc0xpc3QuYWRkKFwicGhhc2VkLW91dFwiKTtcbiAgfVxufSk7XG5cbi8vIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInRkXCIpO1xuY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllci1jZWxsXCIpO1xuXG5jZWxscy5mb3JFYWNoKChjZWxsKSA9PlxuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHhOdW0gPSBOdW1iZXIoY2VsbC5kYXRhc2V0LnhWYWx1ZSk7XG4gICAgY29uc3QgeU51bSA9IE51bWJlcihjZWxsLmRhdGFzZXQueVZhbHVlKTtcblxuICAgIGNvbnN0IG5leHRDZWxsMl9ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDF9JHt5TnVtfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsM19ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDJ9JHt5TnVtfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsNF9ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDN9JHt5TnVtfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsNV9ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDR9JHt5TnVtfVwiXWBcbiAgICApO1xuXG4gICAgY29uc3QgbmV4dENlbGwyX3ZlcnRpY2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bX0ke3lOdW0gKyAxfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsM192ZXJ0aWNhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW19JHt5TnVtICsgMn1cIl1gXG4gICAgKTtcbiAgICBjb25zdCBuZXh0Q2VsbDRfdmVydGljYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtfSR7eU51bSArIDN9XCJdYFxuICAgICk7XG4gICAgY29uc3QgbmV4dENlbGw1X3ZlcnRpY2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bX0ke3lOdW0gKyA0fVwiXWBcbiAgICApO1xuXG4gICAgaWYgKFxuICAgICAgcGF0cm9sQm9hdC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIGhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX2hvcml6YW50YWwpIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl9ob3JpemFudGFsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBwYXRyb2xCb2F0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghbmV4dENlbGwyX3ZlcnRpY2FsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBzdWJtYXJpbmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICBob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKG5leHRDZWxsMl9ob3JpemFudGFsICYmIG5leHRDZWxsM19ob3JpemFudGFsKSB7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJiAhbmV4dENlbGwzX2hvcml6YW50YWwpIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl9ob3JpemFudGFsICYmICFuZXh0Q2VsbDNfaG9yaXphbnRhbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgc3VibWFyaW5lLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmIG5leHRDZWxsM192ZXJ0aWNhbCkge1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgIW5leHRDZWxsM192ZXJ0aWNhbCkge1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl92ZXJ0aWNhbCAmJiAhbmV4dENlbGwzX3ZlcnRpY2FsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBkZXN0cm95ZXIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICBob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKG5leHRDZWxsMl9ob3JpemFudGFsICYmIG5leHRDZWxsM19ob3JpemFudGFsKSB7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJiAhbmV4dENlbGwzX2hvcml6YW50YWwpIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl9ob3JpemFudGFsICYmICFuZXh0Q2VsbDNfaG9yaXphbnRhbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgZGVzdHJveWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmIG5leHRDZWxsM192ZXJ0aWNhbCkge1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgIW5leHRDZWxsM192ZXJ0aWNhbCkge1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl92ZXJ0aWNhbCAmJiAhbmV4dENlbGwzX3ZlcnRpY2FsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBiYXR0bGVzaGlwLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIilcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAhbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBiYXR0bGVzaGlwLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmIG5leHRDZWxsM192ZXJ0aWNhbCAmJiBuZXh0Q2VsbDRfdmVydGljYWwpIHtcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgbmV4dENlbGwzX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDRfdmVydGljYWwpIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgIW5leHRDZWxsM192ZXJ0aWNhbCAmJiAhbmV4dENlbGw0X3ZlcnRpY2FsKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghbmV4dENlbGwyX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDNfdmVydGljYWwgJiYgIW5leHRDZWxsNF92ZXJ0aWNhbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY2Fycmllci5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIGhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsNV9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw1X2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDVfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgICFuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNF9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDVfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGw1X2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGw1X2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNV9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBjYXJyaWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsNV92ZXJ0aWNhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNV92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV92ZXJ0aWNhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV92ZXJ0aWNhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV92ZXJ0aWNhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgIW5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV92ZXJ0aWNhbFxuICAgICAgKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGw1X3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsNV92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw1X3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pXG4pO1xuXG50YWJsZUNsYXNzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcbiAgaWYgKFxuICAgICghcGF0cm9sQm9hdC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFzdWJtYXJpbmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhZGVzdHJveWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIWJhdHRsZXNoaXAuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhY2Fycmllci5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikpIHx8XG4gICAgKCFob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIXZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSlcbiAgKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJOb25lIG9mIHRoZXNlIGJ1dHRvbnMgYXJlIGNsaWNrZWRcIik7IC8vVEhJUyBXT1JLUyEhXG4gICAgLy8gcGF0cm9sQm9hdC5jbGFzc0xpc3QucmVtb3ZlKFwibm8tYnRuLWNsaWNrZWQtZXJyb3JcIik7XG4gICAgY2xpY2tCdG5zTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgdGFibGVDbGFzcy5jbGFzc0xpc3QucmVtb3ZlKFwicGhhc2VkLW91dFwiKTtcbiAgfVxufSk7XG5cbmNlbGxzLmZvckVhY2goKGNlbGwpID0+XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICBjb25zdCB4TnVtID0gTnVtYmVyKGNlbGwuZGF0YXNldC54VmFsdWUpO1xuICAgIGNvbnN0IHlOdW0gPSBOdW1iZXIoY2VsbC5kYXRhc2V0LnlWYWx1ZSk7XG5cbiAgICBjb25zdCBuZXh0Q2VsbDJfaG9yaXphbnRhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW0gKyAxfSR7eU51bX1cIl1gXG4gICAgKTtcbiAgICBjb25zdCBuZXh0Q2VsbDNfaG9yaXphbnRhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW0gKyAyfSR7eU51bX1cIl1gXG4gICAgKTtcbiAgICBjb25zdCBuZXh0Q2VsbDRfaG9yaXphbnRhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW0gKyAzfSR7eU51bX1cIl1gXG4gICAgKTtcbiAgICBjb25zdCBuZXh0Q2VsbDVfaG9yaXphbnRhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW0gKyA0fSR7eU51bX1cIl1gXG4gICAgKTtcblxuICAgIGNvbnN0IG5leHRDZWxsMl92ZXJ0aWNhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW19JHt5TnVtICsgMX1cIl1gXG4gICAgKTtcbiAgICBjb25zdCBuZXh0Q2VsbDNfdmVydGljYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtfSR7eU51bSArIDJ9XCJdYFxuICAgICk7XG4gICAgY29uc3QgbmV4dENlbGw0X3ZlcnRpY2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bX0ke3lOdW0gKyAzfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsNV92ZXJ0aWNhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW19JHt5TnVtICsgNH1cIl1gXG4gICAgKTtcblxuICAgIGlmIChcbiAgICAgIHBhdHJvbEJvYXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICBob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKG5leHRDZWxsMl9ob3JpemFudGFsKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKCFuZXh0Q2VsbDJfaG9yaXphbnRhbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgcGF0cm9sQm9hdC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIHZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKG5leHRDZWxsMl92ZXJ0aWNhbCkge1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl92ZXJ0aWNhbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgc3VibWFyaW5lLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIilcbiAgICApIHtcbiAgICAgIGlmIChuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJiBuZXh0Q2VsbDNfaG9yaXphbnRhbCkge1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGwyX2hvcml6YW50YWwgJiYgIW5leHRDZWxsM19ob3JpemFudGFsKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKCFuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJiAhbmV4dENlbGwzX2hvcml6YW50YWwpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHN1Ym1hcmluZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIHZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKG5leHRDZWxsMl92ZXJ0aWNhbCAmJiBuZXh0Q2VsbDNfdmVydGljYWwpIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDNfdmVydGljYWwpIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKCFuZXh0Q2VsbDJfdmVydGljYWwgJiYgIW5leHRDZWxsM192ZXJ0aWNhbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgZGVzdHJveWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIilcbiAgICApIHtcbiAgICAgIGlmIChuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJiBuZXh0Q2VsbDNfaG9yaXphbnRhbCkge1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGwyX2hvcml6YW50YWwgJiYgIW5leHRDZWxsM19ob3JpemFudGFsKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKCFuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJiAhbmV4dENlbGwzX2hvcml6YW50YWwpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGRlc3Ryb3llci5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIHZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKG5leHRDZWxsMl92ZXJ0aWNhbCAmJiBuZXh0Q2VsbDNfdmVydGljYWwpIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDNfdmVydGljYWwpIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKCFuZXh0Q2VsbDJfdmVydGljYWwgJiYgIW5leHRDZWxsM192ZXJ0aWNhbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgYmF0dGxlc2hpcC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIGhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNF9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgIW5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWxcbiAgICAgICkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgYmF0dGxlc2hpcC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIHZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKG5leHRDZWxsMl92ZXJ0aWNhbCAmJiBuZXh0Q2VsbDNfdmVydGljYWwgJiYgbmV4dENlbGw0X3ZlcnRpY2FsKSB7XG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmIG5leHRDZWxsM192ZXJ0aWNhbCAmJiAhbmV4dENlbGw0X3ZlcnRpY2FsKSB7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDNfdmVydGljYWwgJiYgIW5leHRDZWxsNF92ZXJ0aWNhbCkge1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl92ZXJ0aWNhbCAmJiAhbmV4dENlbGwzX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDRfdmVydGljYWwpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGNhcnJpZXIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICBob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDVfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNV9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw1X2hvcml6YW50YWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNF9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDVfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNF9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDVfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAhbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw1X2hvcml6YW50YWxcbiAgICAgICkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsNV9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsNV9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDVfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY2Fycmllci5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIHZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDVfdmVydGljYWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDVfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDVfdmVydGljYWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDVfdmVydGljYWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsM192ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDVfdmVydGljYWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgICFuZXh0Q2VsbDJfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsM192ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDVfdmVydGljYWxcbiAgICAgICkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsNV92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDVfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNV92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuICB9KVxuKTtcblxuY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT5cbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHhOdW0gPSBOdW1iZXIoY2VsbC5kYXRhc2V0LnhWYWx1ZSk7XG4gICAgY29uc3QgeU51bSA9IE51bWJlcihjZWxsLmRhdGFzZXQueVZhbHVlKTtcblxuICAgIGNvbnN0IG5leHRDZWxsMl9ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDF9JHt5TnVtfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsM19ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDJ9JHt5TnVtfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsNF9ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDN9JHt5TnVtfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsNV9ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDR9JHt5TnVtfVwiXWBcbiAgICApO1xuXG4gICAgY29uc3QgbmV4dENlbGwyX3ZlcnRpY2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bX0ke3lOdW0gKyAxfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsM192ZXJ0aWNhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW19JHt5TnVtICsgMn1cIl1gXG4gICAgKTtcbiAgICBjb25zdCBuZXh0Q2VsbDRfdmVydGljYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtfSR7eU51bSArIDN9XCJdYFxuICAgICk7XG4gICAgY29uc3QgbmV4dENlbGw1X3ZlcnRpY2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bX0ke3lOdW0gKyA0fVwiXWBcbiAgICApO1xuXG4gICAgaWYgKFxuICAgICAgcGF0cm9sQm9hdC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIGhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhZ3JpZC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcIm91dHNpZGUtZ3JpZFwiKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICAhY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDJfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgcGF0cm9sQm9hdC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgcGF0cm9sQm9hdC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItcGF0cm9sLWJvYXRcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1wYXRyb2wtYm9hdFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBwYXRyb2xCb2F0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhZ3JpZC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcIm91dHNpZGUtZ3JpZFwiKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICAhY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDJfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIHBhdHJvbEJvYXQuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIHBhdHJvbEJvYXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLXBhdHJvbC1ib2F0XCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1wYXRyb2wtYm9hdFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBzdWJtYXJpbmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICBob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIWdyaWQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJvdXRzaWRlLWdyaWRcIilcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgIWNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwyX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwzX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIHN1Ym1hcmluZS5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgc3VibWFyaW5lLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInBsYXllci1zdWJtYXJpbmVcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1zdWJtYXJpbmVcIik7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1zdWJtYXJpbmVcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgc3VibWFyaW5lLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhZ3JpZC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcIm91dHNpZGUtZ3JpZFwiKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICAhY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDJfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwzX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIWdyaWQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJvdXRzaWRlLWdyaWRcIilcbiAgICAgICkge1xuICAgICAgICBzdWJtYXJpbmUuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIHN1Ym1hcmluZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItc3VibWFyaW5lXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1zdWJtYXJpbmVcIik7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLXN1Ym1hcmluZVwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBkZXN0cm95ZXIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICBob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIWdyaWQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJvdXRzaWRlLWdyaWRcIilcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgIWNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwyX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwzX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIGRlc3Ryb3llci5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgZGVzdHJveWVyLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInBsYXllci1kZXN0cm95ZXJcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1kZXN0cm95ZXJcIik7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1kZXN0cm95ZXJcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgZGVzdHJveWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhZ3JpZC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcIm91dHNpZGUtZ3JpZFwiKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICAhY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDJfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwzX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBkZXN0cm95ZXIuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGRlc3Ryb3llci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItZGVzdHJveWVyXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1kZXN0cm95ZXJcIik7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWRlc3Ryb3llclwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBiYXR0bGVzaGlwLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFncmlkLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwib3V0c2lkZS1ncmlkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgICFjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsMl9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsM19ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsNF9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIWdyaWQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJvdXRzaWRlLWdyaWRcIilcbiAgICAgICkge1xuICAgICAgICBiYXR0bGVzaGlwLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBiYXR0bGVzaGlwLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInBsYXllci1iYXR0bGVzaGlwXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItYmF0dGxlc2hpcFwiKTtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWJhdHRsZXNoaXBcIik7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1iYXR0bGVzaGlwXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGJhdHRsZXNoaXAuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICB2ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFncmlkLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwib3V0c2lkZS1ncmlkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgICFjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDNfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGw0X3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIWdyaWQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJvdXRzaWRlLWdyaWRcIilcbiAgICAgICkge1xuICAgICAgICBiYXR0bGVzaGlwLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBiYXR0bGVzaGlwLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInBsYXllci1iYXR0bGVzaGlwXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1iYXR0bGVzaGlwXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1iYXR0bGVzaGlwXCIpO1xuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1iYXR0bGVzaGlwXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGNhcnJpZXIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICBob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIWdyaWQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJvdXRzaWRlLWdyaWRcIilcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgIWNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwyX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwzX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGw1X2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIGNhcnJpZXIuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGNhcnJpZXIuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWNhcnJpZXJcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1jYXJyaWVyXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItY2FycmllclwiKTtcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWNhcnJpZXJcIik7XG4gICAgICAgIG5leHRDZWxsNV9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGw1X2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1jYXJyaWVyXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGNhcnJpZXIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICB2ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFncmlkLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwib3V0c2lkZS1ncmlkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgICFjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDNfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGw0X3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsNV92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgY2Fycmllci5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2Fycmllci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItY2FycmllclwiKTtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItY2FycmllclwiKTtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItY2FycmllclwiKTtcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItY2FycmllclwiKTtcbiAgICAgICAgbmV4dENlbGw1X3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGw1X3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItY2FycmllclwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBwYXRyb2xCb2F0LmRpc2FibGVkID09PSB0cnVlICYmXG4gICAgICAgIHN1Ym1hcmluZS5kaXNhYmxlZCA9PT0gdHJ1ZSAmJlxuICAgICAgICBkZXN0cm95ZXIuZGlzYWJsZWQgPT09IHRydWUgJiZcbiAgICAgICAgYmF0dGxlc2hpcC5kaXNhYmxlZCA9PT0gdHJ1ZSAmJlxuICAgICAgICBjYXJyaWVyLmRpc2FibGVkID09PSB0cnVlXG4gICAgICApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJBbGwgYm9hdHMgaGF2ZSBiZWVuIHBsYWNlZFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pXG4pO1xuXG4vL293a3Jpbmcgb24gY29tcHV0ZXIgZnVuY3Rpb25hbGl0eVxuZnVuY3Rpb24gcmFuZG9tTnVtQmV0d2VlbihtaW4sIG1heCkge1xuICBsZXQgbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgcmV0dXJuIG51bTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZXJPcmllbnRhdGlvbigpIHtcbiAgbGV0IGNvbXB1dGVyT3JpZW50YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSArIDE7XG4gIGlmIChjb21wdXRlck9yaWVudGF0aW9uID09PSAxKSB7XG4gICAgcmV0dXJuIFwiaG9yaXphbnRhbFwiO1xuICB9XG4gIGlmIChjb21wdXRlck9yaWVudGF0aW9uID09PSAyKSB7XG4gICAgcmV0dXJuIFwidmVydGljYWxcIjtcbiAgfVxufVxuXG5jb25zb2xlLmxvZyhjb21wdXRlck9yaWVudGF0aW9uKCkpO1xuXG5sZXQgdXNlZE51bWJlcnMgPSBbXTtcbmxldCB1c2VkTnVtYmVyczIgPSBbXTtcblxuY2xhc3MgQ29tcHV0ZXJCb2F0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgbmFtZSxcbiAgICBvcmllbnRhdGlvblxuICAgIC8vIHhWYWx1ZSxcbiAgICAvLyB5VmFsdWUsXG4gICAgLy8gc3RhcnRpbmdDZWxsLFxuICAgIC8vIG5leHRDZWxsMixcbiAgICAvLyBuZXh0Q2VsbDMsXG4gICAgLy8gbmV4dENlbGw0LFxuICAgIC8vIG5leHRDZWxsNVxuICApIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMub3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjtcbiAgICAvLyB0aGlzLnhWYWx1ZSA9IHJhbmRvbU51bUJldHdlZW4oMSwgOSk7XG4gICAgLy8gdGhpcy55VmFsdWUgPSByYW5kb21OdW1CZXR3ZWVuKDEsIDEwKTtcbiAgICAvLyB0aGlzLnN0YXJ0aW5nQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgLy8gICBgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke3RoaXMueFZhbHVlfSR7dGhpcy55VmFsdWV9XCJdYFxuICAgIC8vICk7XG4gICAgLy8gdGhpcy5uZXh0Q2VsbDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIC8vICAgYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHt0aGlzLnhWYWx1ZSArIDF9JHt0aGlzLnlWYWx1ZX1cIl1gXG4gICAgLy8gKTtcbiAgICAvLyB0aGlzLm5leHRDZWxsMyA9IG5leHRDZWxsMztcbiAgICAvLyB0aGlzLm5leHRDZWxsNCA9IG5leHRDZWxsNDtcbiAgICAvLyB0aGlzLm5leHRDZWxsNSA9IG5leHRDZWxsNTtcbiAgfVxuICBjb21wdXRlckNvZGUoKSB7XG4gICAgaWYgKHRoaXMubmFtZSA9PT0gXCJwYXRyb2xCb2F0XCIgJiYgdGhpcy5vcmllbnRhdGlvbiA9PT0gXCJob3JpemFudGFsXCIpIHtcbiAgICAgIGxldCB4ID0gcmFuZG9tTnVtQmV0d2VlbigxLCA5KTtcbiAgICAgIGxldCB5ID0gcmFuZG9tTnVtQmV0d2VlbigxLCAxMCk7XG4gICAgICBsZXQgbmV4dENlbGwyPSB4KzE7XG4gICAgICBsZXQgeFRvU3RyaW5nPSB4LnRvU3RyaW5nKCk7ICAgICAgXG4gICAgICBsZXQgeVRvU3RyaW5nPSB5LnRvU3RyaW5nKCk7XG4gICAgICBsZXQgbmV4dENlbGwyU3RyaW5nPSBuZXh0Q2VsbDIudG9TdHJpbmcoKTsgICAgICBcbiAgICAgIGxldCBjZWxsQ29kZT0geFRvU3RyaW5nICsgeVRvU3RyaW5nOyAgXG4gICAgICBsZXQgbmV4dENlbGwyQ29kZT0gbmV4dENlbGwyU3RyaW5nICsgeVRvU3RyaW5nO1xuICAgICAgaWYodXNlZE51bWJlcnMuaW5jbHVkZXMoY2VsbENvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsMkNvZGUpKXtcbiAgICAgICAgdGhpcy5jb21wdXRlckNvZGUoKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBsZXQgYWN0dWFsQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtjZWxsQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDJDb2RlfVwiXWApO1xuICAgICAgICBhY3R1YWxDZWxsLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsQ2VsbC5jbGFzc0xpc3QuYWRkKFwicGF0cm9sLWJvYXRcIik7XG4gICAgICAgIGFjdHVhbENlbGwudGV4dENvbnRlbnQ9IFwicFwiO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDIuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDIuY2xhc3NMaXN0LmFkZChcInBhdHJvbC1ib2F0XCIpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKGNlbGxDb2RlKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChuZXh0Q2VsbDJDb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMubmFtZSA9PT0gXCJzdWJtYXJpbmVcIiAmJiB0aGlzLm9yaWVudGF0aW9uID09PSBcImhvcml6YW50YWxcIikge1xuICAgICAgbGV0IHggPSByYW5kb21OdW1CZXR3ZWVuKDEsIDgpO1xuICAgICAgbGV0IHkgPSByYW5kb21OdW1CZXR3ZWVuKDEsIDEwKTtcbiAgICAgIGxldCBuZXh0Q2VsbDI9IHgrMTtcbiAgICAgIGxldCBuZXh0Q2VsbDM9IHgrMjtcbiAgICAgIGxldCB4VG9TdHJpbmc9IHgudG9TdHJpbmcoKTsgICAgICBcbiAgICAgIGxldCB5VG9TdHJpbmc9IHkudG9TdHJpbmcoKTtcbiAgICAgIGxldCBuZXh0Q2VsbDJTdHJpbmc9IG5leHRDZWxsMi50b1N0cmluZygpOyAgICAgIFxuICAgICAgbGV0IG5leHRDZWxsM1N0cmluZz0gbmV4dENlbGwzLnRvU3RyaW5nKCk7ICAgICBcbiAgICAgIGxldCBjZWxsQ29kZT0geFRvU3RyaW5nICsgeVRvU3RyaW5nOyAgXG4gICAgICBsZXQgbmV4dENlbGwyQ29kZT0gbmV4dENlbGwyU3RyaW5nICsgeVRvU3RyaW5nOyBcbiAgICAgIGxldCBuZXh0Q2VsbDNDb2RlPSBuZXh0Q2VsbDNTdHJpbmcgKyB5VG9TdHJpbmc7IFxuICAgICAgaWYodXNlZE51bWJlcnMuaW5jbHVkZXMoY2VsbENvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsMkNvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsM0NvZGUpKXtcbiAgICAgICAgdGhpcy5jb21wdXRlckNvZGUoKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBsZXQgYWN0dWFsQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtjZWxsQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDJDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGwzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsM0NvZGV9XCJdYCk7XG4gICAgICAgIGFjdHVhbENlbGwuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxDZWxsLmNsYXNzTGlzdC5hZGQoXCJzdWJtYXJpbmVcIik7XG4gICAgICAgIGFjdHVhbENlbGwudGV4dENvbnRlbnQ9IFwic1wiO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDIuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDIuY2xhc3NMaXN0LmFkZChcInN1Ym1hcmluZVwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwzLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwzLmNsYXNzTGlzdC5hZGQoXCJzdWJtYXJpbmVcIik7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2goY2VsbENvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsMkNvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsM0NvZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5uYW1lID09PSBcImRlc3Ryb3llclwiICYmIHRoaXMub3JpZW50YXRpb24gPT09IFwiaG9yaXphbnRhbFwiKSB7XG4gICAgICBsZXQgeCA9IHJhbmRvbU51bUJldHdlZW4oMSwgOCk7XG4gICAgICBsZXQgeSA9IHJhbmRvbU51bUJldHdlZW4oMSwgMTApO1xuICAgICAgbGV0IG5leHRDZWxsMj0geCsxO1xuICAgICAgbGV0IG5leHRDZWxsMz0geCsyO1xuICAgICAgbGV0IHhUb1N0cmluZz0geC50b1N0cmluZygpOyAgICAgIFxuICAgICAgbGV0IHlUb1N0cmluZz0geS50b1N0cmluZygpO1xuICAgICAgbGV0IG5leHRDZWxsMlN0cmluZz0gbmV4dENlbGwyLnRvU3RyaW5nKCk7ICAgICAgXG4gICAgICBsZXQgbmV4dENlbGwzU3RyaW5nPSBuZXh0Q2VsbDMudG9TdHJpbmcoKTsgICAgIFxuICAgICAgbGV0IGNlbGxDb2RlPSB4VG9TdHJpbmcgKyB5VG9TdHJpbmc7ICBcbiAgICAgIGxldCBuZXh0Q2VsbDJDb2RlPSBuZXh0Q2VsbDJTdHJpbmcgKyB5VG9TdHJpbmc7IFxuICAgICAgbGV0IG5leHRDZWxsM0NvZGU9IG5leHRDZWxsM1N0cmluZyArIHlUb1N0cmluZzsgXG4gICAgICBpZih1c2VkTnVtYmVycy5pbmNsdWRlcyhjZWxsQ29kZSkgfHwgdXNlZE51bWJlcnMuaW5jbHVkZXMobmV4dENlbGwyQ29kZSkgfHwgdXNlZE51bWJlcnMuaW5jbHVkZXMobmV4dENlbGwzQ29kZSkpe1xuICAgICAgICB0aGlzLmNvbXB1dGVyQ29kZSgpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGxldCBhY3R1YWxDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke2NlbGxDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGwyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsMkNvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGwzQ29kZX1cIl1gKTtcbiAgICAgICAgYWN0dWFsQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbENlbGwuY2xhc3NMaXN0LmFkZChcImRlc3Ryb3llclwiKTtcbiAgICAgICAgYWN0dWFsQ2VsbC50ZXh0Q29udGVudD0gXCJkXCI7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMi5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMi5jbGFzc0xpc3QuYWRkKFwiZGVzdHJveWVyXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDMuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDMuY2xhc3NMaXN0LmFkZChcImRlc3Ryb3llclwiKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChjZWxsQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGwyQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGwzQ29kZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLm5hbWUgPT09IFwiYmF0dGxlc2hpcFwiICYmIHRoaXMub3JpZW50YXRpb24gPT09IFwiaG9yaXphbnRhbFwiKSB7XG4gICAgICBsZXQgeCA9IHJhbmRvbU51bUJldHdlZW4oMSwgNyk7XG4gICAgICBsZXQgeSA9IHJhbmRvbU51bUJldHdlZW4oMSwgMTApO1xuICAgICAgbGV0IG5leHRDZWxsMj0geCsxO1xuICAgICAgbGV0IG5leHRDZWxsMz0geCsyO1xuICAgICAgbGV0IG5leHRDZWxsND0geCszO1xuICAgICAgbGV0IHhUb1N0cmluZz0geC50b1N0cmluZygpOyAgICAgIFxuICAgICAgbGV0IHlUb1N0cmluZz0geS50b1N0cmluZygpO1xuICAgICAgbGV0IG5leHRDZWxsMlN0cmluZz0gbmV4dENlbGwyLnRvU3RyaW5nKCk7ICAgICAgXG4gICAgICBsZXQgbmV4dENlbGwzU3RyaW5nPSBuZXh0Q2VsbDMudG9TdHJpbmcoKTsgICAgIFxuICAgICAgbGV0IG5leHRDZWxsNFN0cmluZz0gbmV4dENlbGw0LnRvU3RyaW5nKCk7ICAgICBcbiAgICAgIGxldCBjZWxsQ29kZT0geFRvU3RyaW5nICsgeVRvU3RyaW5nOyAgXG4gICAgICBsZXQgbmV4dENlbGwyQ29kZT0gbmV4dENlbGwyU3RyaW5nICsgeVRvU3RyaW5nOyBcbiAgICAgIGxldCBuZXh0Q2VsbDNDb2RlID0gbmV4dENlbGwzU3RyaW5nICsgeVRvU3RyaW5nO1xuICAgICAgbGV0IG5leHRDZWxsNENvZGUgPSBuZXh0Q2VsbDRTdHJpbmcgKyB5VG9TdHJpbmc7IFxuICAgICAgaWYodXNlZE51bWJlcnMuaW5jbHVkZXMoY2VsbENvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsMkNvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsM0NvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsNENvZGUpKXtcbiAgICAgICAgdGhpcy5jb21wdXRlckNvZGUoKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBsZXQgYWN0dWFsQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtjZWxsQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDJDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGwzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsM0NvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGw0Q29kZX1cIl1gKTtcbiAgICAgICAgYWN0dWFsQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbENlbGwuY2xhc3NMaXN0LmFkZChcImJhdHRsZXNoaXBcIik7XG4gICAgICAgIGFjdHVhbENlbGwudGV4dENvbnRlbnQ9IFwiYlwiO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDIuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDIuY2xhc3NMaXN0LmFkZChcImJhdHRsZXNoaXBcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMy5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMy5jbGFzc0xpc3QuYWRkKFwiYmF0dGxlc2hpcFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGw0LmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGw0LmNsYXNzTGlzdC5hZGQoXCJiYXR0bGVzaGlwXCIpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKGNlbGxDb2RlKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChuZXh0Q2VsbDJDb2RlKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChuZXh0Q2VsbDNDb2RlKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChuZXh0Q2VsbDRDb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMubmFtZSA9PT0gXCJjYXJyaWVyXCIgJiYgdGhpcy5vcmllbnRhdGlvbiA9PT0gXCJob3JpemFudGFsXCIpIHtcbiAgICAgIGxldCB4ID0gcmFuZG9tTnVtQmV0d2VlbigxLCA2KTtcbiAgICAgIGxldCB5ID0gcmFuZG9tTnVtQmV0d2VlbigxLCAxMCk7XG4gICAgICBsZXQgbmV4dENlbGwyPSB4KzE7XG4gICAgICBsZXQgbmV4dENlbGwzPSB4KzI7XG4gICAgICBsZXQgbmV4dENlbGw0PSB4KzM7XG4gICAgICBsZXQgbmV4dENlbGw1PSB4KzQ7XG4gICAgICBsZXQgeFRvU3RyaW5nPSB4LnRvU3RyaW5nKCk7ICAgICAgXG4gICAgICBsZXQgeVRvU3RyaW5nPSB5LnRvU3RyaW5nKCk7XG4gICAgICBsZXQgbmV4dENlbGwyU3RyaW5nPSBuZXh0Q2VsbDIudG9TdHJpbmcoKTsgICAgICBcbiAgICAgIGxldCBuZXh0Q2VsbDNTdHJpbmc9IG5leHRDZWxsMy50b1N0cmluZygpOyAgICAgXG4gICAgICBsZXQgbmV4dENlbGw0U3RyaW5nPSBuZXh0Q2VsbDQudG9TdHJpbmcoKTsgICAgIFxuICAgICAgbGV0IG5leHRDZWxsNVN0cmluZz0gbmV4dENlbGw1LnRvU3RyaW5nKCk7ICAgICBcbiAgICAgIGxldCBjZWxsQ29kZT0geFRvU3RyaW5nICsgeVRvU3RyaW5nOyAgXG4gICAgICBsZXQgbmV4dENlbGwyQ29kZT0gbmV4dENlbGwyU3RyaW5nICsgeVRvU3RyaW5nOyBcbiAgICAgIGxldCBuZXh0Q2VsbDNDb2RlID0gbmV4dENlbGwzU3RyaW5nICsgeVRvU3RyaW5nO1xuICAgICAgbGV0IG5leHRDZWxsNENvZGUgPSBuZXh0Q2VsbDRTdHJpbmcgKyB5VG9TdHJpbmc7XG4gICAgICBsZXQgbmV4dENlbGw1Q29kZSA9IG5leHRDZWxsNVN0cmluZyArIHlUb1N0cmluZzsgXG4gICAgICBpZih1c2VkTnVtYmVycy5pbmNsdWRlcyhjZWxsQ29kZSkgfHwgdXNlZE51bWJlcnMuaW5jbHVkZXMobmV4dENlbGwyQ29kZSkgfHwgdXNlZE51bWJlcnMuaW5jbHVkZXMobmV4dENlbGwzQ29kZSkgfHwgdXNlZE51bWJlcnMuaW5jbHVkZXMobmV4dENlbGw0Q29kZSkgfHwgdXNlZE51bWJlcnMuaW5jbHVkZXMobmV4dENlbGw1Q29kZSkpe1xuICAgICAgICB0aGlzLmNvbXB1dGVyQ29kZSgpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGxldCBhY3R1YWxDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke2NlbGxDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGwyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsMkNvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGwzQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsNCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDRDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGw1ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsNUNvZGV9XCJdYCk7XG4gICAgICAgIGFjdHVhbENlbGwuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxDZWxsLmNsYXNzTGlzdC5hZGQoXCJjYXJyaWVyXCIpO1xuICAgICAgICBhY3R1YWxDZWxsLnRleHRDb250ZW50PSBcImNcIjtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwyLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwyLmNsYXNzTGlzdC5hZGQoXCJjYXJyaWVyXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDMuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDMuY2xhc3NMaXN0LmFkZChcImNhcnJpZXJcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsNC5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsNC5jbGFzc0xpc3QuYWRkKFwiY2FycmllclwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGw1LmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGw1LmNsYXNzTGlzdC5hZGQoXCJjYXJyaWVyXCIpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKGNlbGxDb2RlKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChuZXh0Q2VsbDJDb2RlKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChuZXh0Q2VsbDNDb2RlKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChuZXh0Q2VsbDRDb2RlKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChuZXh0Q2VsbDVDb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMubmFtZSA9PT0gXCJwYXRyb2xCb2F0XCIgJiYgdGhpcy5vcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBsZXQgeCA9IHJhbmRvbU51bUJldHdlZW4oMSwgMTApO1xuICAgICAgbGV0IHkgPSByYW5kb21OdW1CZXR3ZWVuKDEsIDkpO1xuICAgICAgbGV0IG5leHRDZWxsMiA9IHkgKyAxO1xuICAgICAgbGV0IHhUb1N0cmluZyA9IHgudG9TdHJpbmcoKTtcbiAgICAgIGxldCB5VG9TdHJpbmcgPSB5LnRvU3RyaW5nKCk7XG4gICAgICBsZXQgbmV4dENlbGwyU3RyaW5nID0gbmV4dENlbGwyLnRvU3RyaW5nKCk7XG4gICAgICBsZXQgY2VsbENvZGUgPSB4VG9TdHJpbmcgKyB5VG9TdHJpbmc7XG4gICAgICBsZXQgbmV4dENlbGwyQ29kZSA9IHhUb1N0cmluZyArIG5leHRDZWxsMlN0cmluZztcbiAgICAgIGlmKHVzZWROdW1iZXJzLmluY2x1ZGVzKGNlbGxDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDJDb2RlKSl7XG4gICAgICAgIHRoaXMuY29tcHV0ZXJDb2RlKCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgbGV0IGFjdHVhbENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7Y2VsbENvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGwyQ29kZX1cIl1gKTtcbiAgICAgICAgYWN0dWFsQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbENlbGwuY2xhc3NMaXN0LmFkZChcInBhdHJvbC1ib2F0XCIpO1xuICAgICAgICBhY3R1YWxDZWxsLnRleHRDb250ZW50PSBcInBcIjtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwyLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwyLmNsYXNzTGlzdC5hZGQoXCJwYXRyb2wtYm9hdFwiKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChjZWxsQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGwyQ29kZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLm5hbWUgPT09IFwic3VibWFyaW5lXCIgJiYgdGhpcy5vcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBsZXQgeCA9IHJhbmRvbU51bUJldHdlZW4oMSwgMTApO1xuICAgICAgbGV0IHkgPSByYW5kb21OdW1CZXR3ZWVuKDEsIDgpO1xuICAgICAgbGV0IG5leHRDZWxsMj0geSsxO1xuICAgICAgbGV0IG5leHRDZWxsMz0geSsyO1xuICAgICAgbGV0IHhUb1N0cmluZz0geC50b1N0cmluZygpOyAgICAgIFxuICAgICAgbGV0IHlUb1N0cmluZz0geS50b1N0cmluZygpO1xuICAgICAgbGV0IG5leHRDZWxsMlN0cmluZz0gbmV4dENlbGwyLnRvU3RyaW5nKCk7ICAgICAgXG4gICAgICBsZXQgbmV4dENlbGwzU3RyaW5nPSBuZXh0Q2VsbDMudG9TdHJpbmcoKTsgICAgIFxuICAgICAgbGV0IGNlbGxDb2RlPSB4VG9TdHJpbmcgKyB5VG9TdHJpbmc7ICBcbiAgICAgIGxldCBuZXh0Q2VsbDJDb2RlPSB4VG9TdHJpbmcgKyBuZXh0Q2VsbDJTdHJpbmc7IFxuICAgICAgbGV0IG5leHRDZWxsM0NvZGU9IHhUb1N0cmluZyArIG5leHRDZWxsM1N0cmluZzsgXG4gICAgICBpZih1c2VkTnVtYmVycy5pbmNsdWRlcyhjZWxsQ29kZSkgfHwgdXNlZE51bWJlcnMuaW5jbHVkZXMobmV4dENlbGwyQ29kZSkgfHwgdXNlZE51bWJlcnMuaW5jbHVkZXMobmV4dENlbGwzQ29kZSkpe1xuICAgICAgICB0aGlzLmNvbXB1dGVyQ29kZSgpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGxldCBhY3R1YWxDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke2NlbGxDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGwyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsMkNvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGwzQ29kZX1cIl1gKTtcbiAgICAgICAgYWN0dWFsQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbENlbGwuY2xhc3NMaXN0LmFkZChcInN1Ym1hcmluZVwiKTtcbiAgICAgICAgYWN0dWFsQ2VsbC50ZXh0Q29udGVudD0gXCJzXCI7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMi5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMi5jbGFzc0xpc3QuYWRkKFwic3VibWFyaW5lXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDMuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDMuY2xhc3NMaXN0LmFkZChcInN1Ym1hcmluZVwiKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChjZWxsQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGwyQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGwzQ29kZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLm5hbWUgPT09IFwiZGVzdHJveWVyXCIgJiYgdGhpcy5vcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBsZXQgeCA9IHJhbmRvbU51bUJldHdlZW4oMSwgMTApO1xuICAgICAgbGV0IHkgPSByYW5kb21OdW1CZXR3ZWVuKDEsIDgpO1xuICAgICAgbGV0IG5leHRDZWxsMj0geSsxO1xuICAgICAgbGV0IG5leHRDZWxsMz0geSsyO1xuICAgICAgbGV0IHhUb1N0cmluZz0geC50b1N0cmluZygpOyAgICAgIFxuICAgICAgbGV0IHlUb1N0cmluZz0geS50b1N0cmluZygpO1xuICAgICAgbGV0IG5leHRDZWxsMlN0cmluZz0gbmV4dENlbGwyLnRvU3RyaW5nKCk7ICAgICAgXG4gICAgICBsZXQgbmV4dENlbGwzU3RyaW5nPSBuZXh0Q2VsbDMudG9TdHJpbmcoKTsgICAgIFxuICAgICAgbGV0IGNlbGxDb2RlPSB4VG9TdHJpbmcgKyB5VG9TdHJpbmc7ICBcbiAgICAgIGxldCBuZXh0Q2VsbDJDb2RlPSB4VG9TdHJpbmcgKyBuZXh0Q2VsbDJTdHJpbmc7IFxuICAgICAgbGV0IG5leHRDZWxsM0NvZGU9IHhUb1N0cmluZyArIG5leHRDZWxsM1N0cmluZzsgXG4gICAgICBpZih1c2VkTnVtYmVycy5pbmNsdWRlcyhjZWxsQ29kZSkgfHwgdXNlZE51bWJlcnMuaW5jbHVkZXMobmV4dENlbGwyQ29kZSkgfHwgdXNlZE51bWJlcnMuaW5jbHVkZXMobmV4dENlbGwzQ29kZSkpe1xuICAgICAgICB0aGlzLmNvbXB1dGVyQ29kZSgpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGxldCBhY3R1YWxDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke2NlbGxDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGwyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsMkNvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGwzQ29kZX1cIl1gKTtcbiAgICAgICAgYWN0dWFsQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbENlbGwuY2xhc3NMaXN0LmFkZChcImRlc3Ryb3llclwiKTtcbiAgICAgICAgYWN0dWFsQ2VsbC50ZXh0Q29udGVudD0gXCJkXCI7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMi5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMi5jbGFzc0xpc3QuYWRkKFwiZGVzdHJveWVyXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDMuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDMuY2xhc3NMaXN0LmFkZChcImRlc3Ryb3llclwiKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChjZWxsQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGwyQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGwzQ29kZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLm5hbWUgPT09IFwiYmF0dGxlc2hpcFwiICYmIHRoaXMub3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgbGV0IHggPSByYW5kb21OdW1CZXR3ZWVuKDEsIDEwKTtcbiAgICAgIGxldCB5ID0gcmFuZG9tTnVtQmV0d2VlbigxLCA3KTtcbiAgICAgIGxldCBuZXh0Q2VsbDI9IHkrMTtcbiAgICAgIGxldCBuZXh0Q2VsbDM9IHkrMjtcbiAgICAgIGxldCBuZXh0Q2VsbDQ9IHkrMztcbiAgICAgIGxldCB4VG9TdHJpbmc9IHgudG9TdHJpbmcoKTsgICAgICBcbiAgICAgIGxldCB5VG9TdHJpbmc9IHkudG9TdHJpbmcoKTtcbiAgICAgIGxldCBuZXh0Q2VsbDJTdHJpbmc9IG5leHRDZWxsMi50b1N0cmluZygpOyAgICAgIFxuICAgICAgbGV0IG5leHRDZWxsM1N0cmluZz0gbmV4dENlbGwzLnRvU3RyaW5nKCk7ICAgICBcbiAgICAgIGxldCBuZXh0Q2VsbDRTdHJpbmc9IG5leHRDZWxsNC50b1N0cmluZygpOyAgICAgXG4gICAgICBsZXQgY2VsbENvZGU9IHhUb1N0cmluZyArIHlUb1N0cmluZzsgIFxuICAgICAgbGV0IG5leHRDZWxsMkNvZGUgPSB4VG9TdHJpbmcgKyBuZXh0Q2VsbDJTdHJpbmc7IFxuICAgICAgbGV0IG5leHRDZWxsM0NvZGUgPSB4VG9TdHJpbmcgKyBuZXh0Q2VsbDNTdHJpbmc7XG4gICAgICBsZXQgbmV4dENlbGw0Q29kZSA9IHhUb1N0cmluZyArIG5leHRDZWxsNFN0cmluZzsgXG4gICAgICBpZih1c2VkTnVtYmVycy5pbmNsdWRlcyhjZWxsQ29kZSkgfHwgdXNlZE51bWJlcnMuaW5jbHVkZXMobmV4dENlbGwyQ29kZSkgfHwgdXNlZE51bWJlcnMuaW5jbHVkZXMobmV4dENlbGwzQ29kZSkgfHwgdXNlZE51bWJlcnMuaW5jbHVkZXMobmV4dENlbGw0Q29kZSkpe1xuICAgICAgICB0aGlzLmNvbXB1dGVyQ29kZSgpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGxldCBhY3R1YWxDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke2NlbGxDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGwyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsMkNvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGwzQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsNCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDRDb2RlfVwiXWApO1xuICAgICAgICBhY3R1YWxDZWxsLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsQ2VsbC5jbGFzc0xpc3QuYWRkKFwiYmF0dGxlc2hpcFwiKTtcbiAgICAgICAgYWN0dWFsQ2VsbC50ZXh0Q29udGVudD0gXCJiXCI7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMi5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMi5jbGFzc0xpc3QuYWRkKFwiYmF0dGxlc2hpcFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwzLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwzLmNsYXNzTGlzdC5hZGQoXCJiYXR0bGVzaGlwXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDQuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDQuY2xhc3NMaXN0LmFkZChcImJhdHRsZXNoaXBcIik7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2goY2VsbENvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsMkNvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsM0NvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsNENvZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5uYW1lID09PSBcImNhcnJpZXJcIiAmJiB0aGlzLm9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGxldCB4ID0gcmFuZG9tTnVtQmV0d2VlbigxLCAxMCk7XG4gICAgICBsZXQgeSA9IHJhbmRvbU51bUJldHdlZW4oMSwgNik7XG4gICAgICBsZXQgbmV4dENlbGwyPSB5KzE7XG4gICAgICBsZXQgbmV4dENlbGwzPSB5KzI7XG4gICAgICBsZXQgbmV4dENlbGw0PSB5KzM7XG4gICAgICBsZXQgbmV4dENlbGw1PSB5KzQ7XG4gICAgICBsZXQgeFRvU3RyaW5nPSB4LnRvU3RyaW5nKCk7ICAgICAgXG4gICAgICBsZXQgeVRvU3RyaW5nPSB5LnRvU3RyaW5nKCk7XG4gICAgICBsZXQgbmV4dENlbGwyU3RyaW5nPSBuZXh0Q2VsbDIudG9TdHJpbmcoKTsgICAgICBcbiAgICAgIGxldCBuZXh0Q2VsbDNTdHJpbmc9IG5leHRDZWxsMy50b1N0cmluZygpOyAgICAgXG4gICAgICBsZXQgbmV4dENlbGw0U3RyaW5nPSBuZXh0Q2VsbDQudG9TdHJpbmcoKTsgICAgIFxuICAgICAgbGV0IG5leHRDZWxsNVN0cmluZz0gbmV4dENlbGw1LnRvU3RyaW5nKCk7ICAgICBcbiAgICAgIGxldCBjZWxsQ29kZT0geFRvU3RyaW5nICsgeVRvU3RyaW5nOyAgXG4gICAgICBsZXQgbmV4dENlbGwyQ29kZSA9IHhUb1N0cmluZyArIG5leHRDZWxsMlN0cmluZzsgXG4gICAgICBsZXQgbmV4dENlbGwzQ29kZSA9IHhUb1N0cmluZyArIG5leHRDZWxsM1N0cmluZztcbiAgICAgIGxldCBuZXh0Q2VsbDRDb2RlID0geFRvU3RyaW5nICsgbmV4dENlbGw0U3RyaW5nO1xuICAgICAgbGV0IG5leHRDZWxsNUNvZGUgPSB4VG9TdHJpbmcgKyBuZXh0Q2VsbDVTdHJpbmc7IFxuICAgICAgaWYodXNlZE51bWJlcnMuaW5jbHVkZXMoY2VsbENvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsMkNvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsM0NvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsNENvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsNUNvZGUpKXtcbiAgICAgICAgdGhpcy5jb21wdXRlckNvZGUoKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBsZXQgYWN0dWFsQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtjZWxsQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDJDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGwzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsM0NvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGw0Q29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsNSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDVDb2RlfVwiXWApO1xuICAgICAgICBhY3R1YWxDZWxsLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY2FycmllclwiKTtcbiAgICAgICAgYWN0dWFsQ2VsbC50ZXh0Q29udGVudD0gXCJjXCI7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMi5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMi5jbGFzc0xpc3QuYWRkKFwiY2FycmllclwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwzLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwzLmNsYXNzTGlzdC5hZGQoXCJjYXJyaWVyXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDQuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDQuY2xhc3NMaXN0LmFkZChcImNhcnJpZXJcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsNS5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsNS5jbGFzc0xpc3QuYWRkKFwiY2FycmllclwiKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChjZWxsQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGwyQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGwzQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGw0Q29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGw1Q29kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmxldCBwYXRyb2xCb2F0Q29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXJCb2F0KFwicGF0cm9sQm9hdFwiLCBjb21wdXRlck9yaWVudGF0aW9uKCkpO1xubGV0IHN1Ym1hcmluZUNvbXB1dGVyID0gbmV3IENvbXB1dGVyQm9hdChcInN1Ym1hcmluZVwiLCBjb21wdXRlck9yaWVudGF0aW9uKCkpO1xubGV0IGRlc3Ryb3llckNvbXB1dGVyID0gbmV3IENvbXB1dGVyQm9hdChcImRlc3Ryb3llclwiLCBjb21wdXRlck9yaWVudGF0aW9uKCkpO1xubGV0IGJhdHRsZXNoaXBDb21wdXRlciA9IG5ldyBDb21wdXRlckJvYXQoXCJiYXR0bGVzaGlwXCIsIGNvbXB1dGVyT3JpZW50YXRpb24oKSk7XG5sZXQgY2FycmllckNvbXB1dGVyID0gbmV3IENvbXB1dGVyQm9hdChcImNhcnJpZXJcIiwgY29tcHV0ZXJPcmllbnRhdGlvbigpKTtcblxucGF0cm9sQm9hdENvbXB1dGVyLmNvbXB1dGVyQ29kZSgpO1xuc3VibWFyaW5lQ29tcHV0ZXIuY29tcHV0ZXJDb2RlKCk7XG5kZXN0cm95ZXJDb21wdXRlci5jb21wdXRlckNvZGUoKTtcbmJhdHRsZXNoaXBDb21wdXRlci5jb21wdXRlckNvZGUoKTtcbmNhcnJpZXJDb21wdXRlci5jb21wdXRlckNvZGUoKTtcblxuY29uc3QgY29tcHV0ZXJDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29tcHV0ZXItY2VsbFwiKTtcblxuY29tcHV0ZXJDZWxscy5mb3JFYWNoKChjb21wdXRlckNlbGwpPT57XG4gIGNvbXB1dGVyQ2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpPT57XG4gICAgY29tcHV0ZXJDZWxsLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1jbGlja2VkXCIpO1xuICB9KTtcbn0pO1xuXG5jb21wdXRlckNlbGxzLmZvckVhY2goKGNvbXB1dGVyQ2VsbCkgPT4ge1xuICBjb21wdXRlckNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICAgIGNvbXB1dGVyQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcHV0ZXItY2xpY2tlZFwiKTtcbiAgfSk7XG59KTtcblxubGV0IGNvbXB1dGVyVG90YWxUYWxseT0gMDtcbmxldCBwYXRyb2xCb2F0VGFsbHk9MDtcbmxldCBzdWJtYXJpbmVUYWxseT0wO1xubGV0IGRlc3Ryb3llclRhbGx5PTA7XG5sZXQgYmF0dGxlc2hpcFRhbGx5PTA7XG5sZXQgY2FycmllclRhbGx5PTA7XG5cblxubGV0IHBsYXllclRvdGFsVGFsbHkgPSAwO1xubGV0IHBsYXllclBhdHJvbEJvYXRUYWxseSA9IDA7XG5sZXQgcGxheWVyU3VibWFyaW5lVGFsbHkgPSAwO1xubGV0IHBsYXllckRlc3Ryb3llclRhbGx5ID0gMDtcbmxldCBwbGF5ZXJCYXR0bGVzaGlwVGFsbHkgPSAwO1xubGV0IHBsYXllckNhcnJpZXJUYWxseSA9IDA7XG5cblxuXG5jb21wdXRlckNlbGxzLmZvckVhY2goKGNvbXB1dGVyQ2VsbCkgPT4ge1xuICBjb21wdXRlckNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb21wdXRlckNlbGwuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLWNlbGwtdGFyZ2V0ZWRcIik7XG4gICAgaWYgKGNvbXB1dGVyQ2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNvbXB1dGVyLXNlbGVjdGVkXCIpKSB7XG4gICAgICBjb21wdXRlckNlbGwuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgIC8vIGNvbXB1dGVyQ2VsbC50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgICAgc2V0VGltZW91dCgoKCk9Pntjb21wdXRlckNlbGwudGV4dENvbnRlbnQgPSBcIlhcIn0pLCAxMDApO1xuICAgICAgY29tcHV0ZXJUb3RhbFRhbGx5Kys7XG4gICAgfWVsc2V7XG4gICAgICBjb21wdXRlckNlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NlZFwiKTtcbiAgICAgIHNldFRpbWVvdXQoKCgpPT57c2NvcmVib2FyZFRleHQudGV4dENvbnRlbnQ9XCJNaXNzZWQhIE5vIHNoaXBzIGhpdC5cIn0pLCAxMDAwKTtcbiAgICB9XG5cbiAgICBpZihjb21wdXRlckNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJwYXRyb2wtYm9hdFwiKSAmJiBwYXRyb2xCb2F0VGFsbHk9PT0xKXtcbiAgICAgIC8vIHNldFRpbWVvdXQoKCgpPT57Y29uc29sZS5sb2coXCJISVQhIHlvdSBzdW5rIHRoZWlyIFBhdHJvbCBCb2F0XCIpfSksIDEwMCk7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e3Njb3JlYm9hcmRUZXh0LnRleHRDb250ZW50ID0gXCJISVQhIHlvdSBzYW5rIHRoZWlyIFBhdHJvbCBCb2F0IVwiO30pLCAxMDAwKTtcbiAgICB9ZWxzZSBpZiAoY29tcHV0ZXJDZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwicGF0cm9sLWJvYXRcIikgJiYgcGF0cm9sQm9hdFRhbGx5IDwgMSl7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e3Njb3JlYm9hcmRUZXh0LnRleHRDb250ZW50PVwiWW91IGhpdCB0aGVpciBQYXRyb2wgQm9hdCFcIn0pLCAxMDAwKTtcbiAgICAgIHBhdHJvbEJvYXRUYWxseSsrO1xuICAgIH07XG5cbiAgICBpZihjb21wdXRlckNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzdWJtYXJpbmVcIikgJiYgc3VibWFyaW5lVGFsbHk9PT0yKXtcbiAgICAgIC8vIHNldFRpbWVvdXQoKCgpPT57Y29uc29sZS5sb2coXCJISVQhIHlvdSBzdW5rIHRoZWlyIFN1Ym1hcmluZVwiKX0pLCAxMDApO1xuICAgICAgc2V0VGltZW91dCgoKCk9PntzY29yZWJvYXJkVGV4dC50ZXh0Q29udGVudCA9IFwiSElUISB5b3Ugc2FuayB0aGVpciBTdWJtYXJpbmUhXCI7fSksIDEwMDApO1xuICAgIH1lbHNlIGlmIChjb21wdXRlckNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzdWJtYXJpbmVcIikgJiYgc3VibWFyaW5lVGFsbHkgPCAyKXtcbiAgICAgIHNldFRpbWVvdXQoKCgpPT57c2NvcmVib2FyZFRleHQudGV4dENvbnRlbnQ9XCJZb3UgaGl0IHRoZWlyIFN1Ym1hcmluZSFcIn0pLCAxMDAwKTtcbiAgICAgIHN1Ym1hcmluZVRhbGx5Kys7XG4gICAgfTtcblxuICAgIGlmKGNvbXB1dGVyQ2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImRlc3Ryb3llclwiKSAmJiBkZXN0cm95ZXJUYWxseT09PTIpe1xuICAgICAgLy8gc2V0VGltZW91dCgoKCk9Pntjb25zb2xlLmxvZyhcIkhJVCEgeW91IHN1bmsgdGhlaXIgRGVzdHJveWVyXCIpfSksIDEwMCk7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e3Njb3JlYm9hcmRUZXh0LnRleHRDb250ZW50ID0gXCJISVQhIHlvdSBzYW5rIHRoZWlyIERlc3Ryb3llciFcIjt9KSwgMTAwMCk7XG4gICAgfWVsc2UgaWYgKGNvbXB1dGVyQ2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImRlc3Ryb3llclwiKSAmJiBkZXN0cm95ZXJUYWxseSA8IDIpe1xuICAgICAgc2V0VGltZW91dCgoKCk9PntzY29yZWJvYXJkVGV4dC50ZXh0Q29udGVudD1cIllvdSBoaXQgdGhlaXIgRGVzdHJveWVyIVwifSksIDEwMDApO1xuICAgICAgZGVzdHJveWVyVGFsbHkrKztcbiAgICB9O1xuXG4gICAgaWYoY29tcHV0ZXJDZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiYmF0dGxlc2hpcFwiKSAmJiBiYXR0bGVzaGlwVGFsbHk9PT0zKXtcbiAgICAgIC8vIHNldFRpbWVvdXQoKCgpPT57Y29uc29sZS5sb2coXCJISVQhIHlvdSBzdW5rIHRoZWlyIEJhdHRsZXNoaXBcIil9KSwgMTAwKTtcbiAgICAgIHNldFRpbWVvdXQoKCgpPT57c2NvcmVib2FyZFRleHQudGV4dENvbnRlbnQgPSBcIkhJVCEgWU9VIFNBTksgVEhFSVIgQkFUVExFU0hJUCFcIjt9KSwgMTAwMCk7XG4gICAgfWVsc2UgaWYgKGNvbXB1dGVyQ2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImJhdHRsZXNoaXBcIikgJiYgYmF0dGxlc2hpcFRhbGx5IDwgMyl7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e3Njb3JlYm9hcmRUZXh0LnRleHRDb250ZW50PVwiWW91IGhpdCB0aGVpciBCYXR0bGVzaGlwIVwifSksIDEwMDApO1xuICAgICAgYmF0dGxlc2hpcFRhbGx5Kys7XG4gICAgfTtcblxuICAgIGlmKGNvbXB1dGVyQ2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNhcnJpZXJcIikgJiYgY2FycmllclRhbGx5PT09NCl7XG4gICAgICAvLyBzZXRUaW1lb3V0KCgoKT0+e2NvbnNvbGUubG9nKFwiSElUISB5b3Ugc3VuayB0aGVpciBDYXJyaWVyXCIpfSksIDEwMCk7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e3Njb3JlYm9hcmRUZXh0LnRleHRDb250ZW50ID0gXCJISVQhIHlvdSBzYW5rIHRoZWlyIENhcnJpZXIhXCI7fSksIDEwMDApO1xuICAgIH1lbHNlIGlmIChjb21wdXRlckNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjYXJyaWVyXCIpICYmIGNhcnJpZXJUYWxseSA8IDQpe1xuICAgICAgc2V0VGltZW91dCgoKCk9PntzY29yZWJvYXJkVGV4dC50ZXh0Q29udGVudD1cIllvdSBoaXQgdGhlaXIgQ2FycmllciFcIn0pLCAxMDAwKTtcbiAgICAgIGNhcnJpZXJUYWxseSsrO1xuICAgIH07XG5cbiAgICBpZihjb21wdXRlclRvdGFsVGFsbHk9PT0xNyl7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e2NvbnNvbGUubG9nKFwiWU9VIFdPTiFcIil9KSwgMTAwKTtcbiAgICB9XG5cbiAgICBcblxuICAgIGNvbnN0IG92ZXJsYXk9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICAgIC8vIHNldFRpbWVvdXQoKCgpPT57b3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTt9KSwgMTAwKTtcblxuXG4gICAgLy8gbGV0IHBsYXllcnNYVmFsdWUgPSByYW5kb21OdW1CZXR3ZWVuKDEsMTApO1xuICAgIC8vIGxldCBwbGF5ZXJzWVZhbHVlID0gcmFuZG9tTnVtQmV0d2VlbigxLCAxMCk7XG5cbiAgICBmdW5jdGlvbiByYW5kb21QbGF5ZXJDb2RlKCkge1xuICAgICAgbGV0IHBsYXllcnNYVmFsdWUgPSByYW5kb21OdW1CZXR3ZWVuKDEsIDEwKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicGxheWVycyB4IHZhbHVlIG51bT0gXCIrIHBsYXllcnNYVmFsdWUpO1xuICAgICAgbGV0IHBsYXllcnNZVmFsdWUgPSByYW5kb21OdW1CZXR3ZWVuKDEsIDEwKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicGxheWVycyB5IHZhbHVlIG51bT0gXCIrIHBsYXllcnNZVmFsdWUpO1xuICAgICAgbGV0IHBsYXllcnNYVmFsdWVTdHJpbmc9IHBsYXllcnNYVmFsdWUudG9TdHJpbmcoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicGxheWVycyB4IHZhbHVlIHN0cj0gXCIrIHBsYXllcnNYVmFsdWVTdHJpbmcpO1xuICAgICAgbGV0IHBsYXllcnNZVmFsdWVTdHJpbmc9IHBsYXllcnNZVmFsdWUudG9TdHJpbmcoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicGxheWVycyB5IHZhbHVlIHN0cj0gXCIrIHBsYXllcnNZVmFsdWVTdHJpbmcpO1xuICAgICAgbGV0IHBsYXllckNvZGVWYWx1ZSA9IHBsYXllcnNYVmFsdWVTdHJpbmcgKyBwbGF5ZXJzWVZhbHVlU3RyaW5nO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyh1c2VkTnVtYmVyczIubGVuZ3RoKTtcblxuICAgICAgaWYgKHVzZWROdW1iZXJzMi5sZW5ndGg9PT0xMDApe1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIG1vcmUgcGxheWVyIHNwYWNlc1wiKTtcbiAgICAgICAgcmV0dXJuIDExO1xuICAgICAgfVxuICAgICAgaWYoIXVzZWROdW1iZXJzMi5pbmNsdWRlcyhwbGF5ZXJDb2RlVmFsdWUpKXtcbiAgICAgICAgdXNlZE51bWJlcnMyLnB1c2gocGxheWVyQ29kZVZhbHVlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJwbGF5ZXJzIGNvZGU9IFwiICsgcGxheWVyQ29kZVZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHBsYXllckNvZGVWYWx1ZTtcbiAgICAgIH1lbHNle1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkEgY29vcmRpbmF0ZSBoYXMgYmVlbiByZXBlYXRlZFwiKTtcbiAgICAgICAgcmV0dXJuIHJhbmRvbVBsYXllckNvZGUoKTtcbiAgICAgIH07XG5cblxuICAgICAgLy8gaWYodXNlZE51bWJlcnMyLmluY2x1ZGVzKHBsYXllckNvZGVWYWx1ZSkpe1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhcInJldHJ5XCIpXG4gICAgICAvLyAgIHJhbmRvbVBsYXllckNvZGUoKTtcbiAgICAgIC8vIH1lbHNle1xuICAgICAgLy8gICB1c2VkTnVtYmVyczIucHVzaChwbGF5ZXJDb2RlVmFsdWUpO1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhcInBsYXllcnMgY29kZT0gXCIrIHBsYXllckNvZGVWYWx1ZSk7XG4gICAgICAvLyAgIHJldHVybiBwbGF5ZXJDb2RlVmFsdWU7XG4gICAgICAvLyB9XG4gICAgfTtcblxuXG5cbiAgICBsZXQgY29tcHV0ZXJBdHRhY2s9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvZGU9IFwiJHtyYW5kb21QbGF5ZXJDb2RlKCl9XCJdYCk7XG4gICAgXG4gICAgY29uc29sZS5sb2coY29tcHV0ZXJBdHRhY2spO1xuXG4gICAgLy8gbGV0IHNjb3JlYm9hcmRUZXh0PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjb3JlYm9hcmQtdGV4dFwiKTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBpZiAoY29tcHV0ZXJBdHRhY2suZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgY29tcHV0ZXJBdHRhY2suY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgIC8vIGNvbXB1dGVyQXR0YWNrLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e2NvbXB1dGVyQXR0YWNrLnRleHRDb250ZW50ID0gXCJYXCJ9KSwgMTAwKTtcbiAgICAgIHBsYXllclRvdGFsVGFsbHkrKztcbiAgICB9ZWxzZXtcbiAgICAgIGNvbXB1dGVyQXR0YWNrLmNsYXNzTGlzdC5hZGQoXCJtaXNzZWRcIik7XG4gICAgICAvLyBzY29yZWJvYXJkVGV4dC50ZXh0Q29udGVudD1cIlN3aW5nIGFuZCBhIG1pc3MhXCI7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e3Njb3JlYm9hcmRUZXh0LnRleHRDb250ZW50PVwiQ29tcHV0ZXIgYXR0YWNrZWQgYW5kIG1pc3NlZCFcIn0pLCAzMDAwKTtcbiAgICB9XG5cbiAgICBpZihjb21wdXRlckF0dGFjay5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInBsYXllci1wYXRyb2wtYm9hdFwiKSAmJiBwbGF5ZXJQYXRyb2xCb2F0VGFsbHk9PT0xKXtcbiAgICAgIC8vIHNldFRpbWVvdXQoKCgpPT57Y29uc29sZS5sb2coXCJISVQhIHlvdXIgUGF0cm9sIEJvYXQgaGFzIGJlZW4gc2Fua1wiKX0pLCAxMDApO1xuICAgICAgc2V0VGltZW91dCgoKCk9PntzY29yZWJvYXJkVGV4dC50ZXh0Q29udGVudCA9IFwiSElUISB5b3VyIFBhdHJvbCBCb2F0IGhhcyBiZWVuIHNhbmtcIjt9KSwgMzAwMCk7XG4gICAgfWVsc2UgaWYgKGNvbXB1dGVyQXR0YWNrLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwicGxheWVyLXBhdHJvbC1ib2F0XCIpICYmIHBsYXllclBhdHJvbEJvYXRUYWxseSA8IDEpe1xuICAgICAgc2V0VGltZW91dCgoKCk9PntzY29yZWJvYXJkVGV4dC50ZXh0Q29udGVudD1cIllvdXIgUGF0cm9sIEJvYXQgaGFzIGJlZW4gSElUIVwifSksIDMwMDApO1xuICAgICAgcGxheWVyUGF0cm9sQm9hdFRhbGx5Kys7XG4gICAgfTtcblxuICAgIGlmKGNvbXB1dGVyQXR0YWNrLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwicGxheWVyLXN1Ym1hcmluZVwiKSAmJiBwbGF5ZXJTdWJtYXJpbmVUYWxseT09PTIpe1xuICAgICAgLy8gc2V0VGltZW91dCgoKCk9Pntjb25zb2xlLmxvZyhcIkhJVCEgeW91ciBTdWJtYXJpbmUgaGFzIGJlZW4gc2Fua1wiKX0pLCAxMDApO1xuICAgICAgc2V0VGltZW91dCgoKCk9PntzY29yZWJvYXJkVGV4dC50ZXh0Q29udGVudCA9IFwiSElUISB5b3VyIFN1Ym1hcmluZSBoYXMgYmVlbiBzYW5rXCI7fSksIDMwMDApO1xuICAgIH1lbHNlIGlmIChjb21wdXRlckF0dGFjay5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInBsYXllci1zdWJtYXJpbmVcIikgJiYgcGxheWVyU3VibWFyaW5lVGFsbHkgPCAyKXtcbiAgICAgIHNldFRpbWVvdXQoKCgpPT57c2NvcmVib2FyZFRleHQudGV4dENvbnRlbnQ9XCJZb3VyIFN1Ym1hcmluZSBoYXMgYmVlbiBISVQhXCJ9KSwgMzAwMCk7XG4gICAgICBwbGF5ZXJTdWJtYXJpbmVUYWxseSsrO1xuICAgIH07XG5cbiAgICBpZihjb21wdXRlckF0dGFjay5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInBsYXllci1kZXN0cm95ZXJcIikgJiYgcGxheWVyRGVzdHJveWVyVGFsbHk9PT0yKXtcbiAgICAgIC8vIHNldFRpbWVvdXQoKCgpPT57Y29uc29sZS5sb2coXCJISVQhIHlvdXIgRGVzdHJveWVyIGhhcyBiZWVuIHNhbmtcIil9KSwgMTAwKTtcbiAgICAgIHNldFRpbWVvdXQoKCgpPT57c2NvcmVib2FyZFRleHQudGV4dENvbnRlbnQgPSBcIkhJVCEgeW91ciBEZXN0cm95ZXIgaGFzIGJlZW4gc2Fua1wiO30pLCAzMDAwKTtcbiAgICB9ZWxzZSBpZiAoY29tcHV0ZXJBdHRhY2suZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJwbGF5ZXItZGVzdHJveWVyXCIpICYmIHBsYXllckRlc3Ryb3llclRhbGx5IDwgMil7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e3Njb3JlYm9hcmRUZXh0LnRleHRDb250ZW50PVwiWW91ciBEZXN0cm95ZXIgaGFzIGJlZW4gSElUIVwifSksIDMwMDApO1xuICAgICAgcGxheWVyRGVzdHJveWVyVGFsbHkrKztcbiAgICB9O1xuXG4gICAgaWYoY29tcHV0ZXJBdHRhY2suZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJwbGF5ZXItYmF0dGxlc2hpcFwiKSAmJiBwbGF5ZXJCYXR0bGVzaGlwVGFsbHk9PT0zKXtcbiAgICAgIC8vIHNldFRpbWVvdXQoKCgpPT57Y29uc29sZS5sb2coXCJISVQhIHlvdXIgQmF0dGxlc2hpcCBoYXMgYmVlbiBzYW5rXCIpfSksIDEwMCk7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e3Njb3JlYm9hcmRUZXh0LnRleHRDb250ZW50ID0gXCJISVQhIHRoZSBjb21wdXRlciBTVU5LIFlPVVIgQkFUVExFU0hJUCFcIjt9KSwgMzAwMCk7XG4gICAgfWVsc2UgaWYgKGNvbXB1dGVyQXR0YWNrLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwicGxheWVyLWJhdHRsZXNoaXBcIikgJiYgcGxheWVyQmF0dGxlc2hpcFRhbGx5IDwgMykge1xuICAgICAgc2V0VGltZW91dCgoKCk9PntzY29yZWJvYXJkVGV4dC50ZXh0Q29udGVudD1cIllvdXIgQmF0dGxlc2hpcCBoYXMgYmVlbiBISVQhXCJ9KSwgMzAwMCk7XG4gICAgICBwbGF5ZXJCYXR0bGVzaGlwVGFsbHkrKztcbiAgICB9O1xuXG4gICAgaWYoY29tcHV0ZXJBdHRhY2suZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJwbGF5ZXItY2FycmllclwiKSAmJiBwbGF5ZXJDYXJyaWVyVGFsbHk9PT00KXtcbiAgICAgIC8vIHNldFRpbWVvdXQoKCgpPT57Y29uc29sZS5sb2coXCJISVQhIHlvdXIgQ2FycmllciBoYXMgYmVlbiBzYW5rXCIpfSksIDEwMCk7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e3Njb3JlYm9hcmRUZXh0LnRleHRDb250ZW50ID0gXCJISVQhIHlvdXIgQ2FycmllciBoYXMgYmVlbiBzYW5rXCI7fSksIDMwMDApO1xuICAgIH1lbHNlIGlmIChjb21wdXRlckF0dGFjay5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInBsYXllci1jYXJyaWVyXCIpICYmIHBsYXllckNhcnJpZXJUYWxseSA8IDQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCgpPT57c2NvcmVib2FyZFRleHQudGV4dENvbnRlbnQ9XCJZb3VyIENhcnJpZXIgaGFzIGJlZW4gSElUIVwifSksIDMwMDApO1xuICAgICAgcGxheWVyQ2FycmllclRhbGx5Kys7XG4gICAgfTtcblxuICAgIGlmKHBsYXllclRvdGFsVGFsbHk9PT0xNyl7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e2NvbnNvbGUubG9nKFwiWW91IExvc3QhXCIpfSksIDEwMCk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJwbGF5ZXJzIFRvdGFsIHRhbGx5PSBcIisgcGxheWVyVG90YWxUYWxseSk7XG4gICAgY29uc29sZS5sb2coXCJwbGF5ZXJzIHBhdHJvbCBib2F0IHRhbGx5PSBcIisgcGxheWVyUGF0cm9sQm9hdFRhbGx5KTtcbiAgICBjb25zb2xlLmxvZyhcInBsYXllcnMgc3VibWFyaW5lIHRhbGx5PSBcIisgcGxheWVyU3VibWFyaW5lVGFsbHkpO1xuICAgIGNvbnNvbGUubG9nKFwicGxheWVycyBkZXN0cm95ZXIgdGFsbHk9IFwiKyBwbGF5ZXJEZXN0cm95ZXJUYWxseSk7XG4gICAgY29uc29sZS5sb2coXCJwbGF5ZXJzIGJhdHRsZXNoaXAgdGFsbHk9IFwiKyBwbGF5ZXJCYXR0bGVzaGlwVGFsbHkpO1xuICAgIGNvbnNvbGUubG9nKFwicGxheWVycyBjYXJyaWVyIHRhbGx5PSBcIisgcGxheWVyQ2FycmllclRhbGx5KTtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGNvbXB1dGVyQXR0YWNrLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgIHNldFRpbWVvdXQoKCgpPT57Y29tcHV0ZXJBdHRhY2suY2xhc3NMaXN0LmFkZChcInBsYXllci1jZWxsLXRhcmdldGVkXCIpO30pLCAxMDApO1xuXG4gICAgc2V0VGltZW91dCgoKCk9PntvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO30pLCAxMDApO1xuXG5cbiAgfSk7XG59KTtcblxuY29uc29sZS5sb2cocGF0cm9sQm9hdENvbXB1dGVyKTsiXSwibmFtZXMiOlsiZ3JhYk5hbWUiLCJDcmVhdGVCb2F0IiwiaGl0IiwiaXNTdW5rIiwiR2FtZWJvYXJkIiwiZXhhbXBsZUFkZCIsImEiLCJiIiwibmFtZSIsImNvbnN0cnVjdG9yIiwibGVuZ3RoIiwiYm9hdE5hbWUiLCJudW1UaW1lc0hpdCIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsImhhc1N1bmsiLCJjb29yZGluYXRlcyIsInhfbnVtYmVyIiwieV9udW1iZXIiLCJzdGF0dXMiLCJib2F0TmFtZU9iaiIsIndhc1BpY2tlZCIsInBsYWNlIiwic2hpcExlbmd0aCIsInZlcnRpY2FsT3JIb3Jpem9udGFsIiwieE51bWJlciIsInlOdW1iZXIiLCJpIiwicmVjZWl2ZUF0dGFjayIsInNjb3JlYm9hcmRUZXh0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmFtZVBsYXRlIiwibmFtZVN1Ym1pdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb21wb3NlZFBhdGgiLCJ2YWx1ZSIsInRleHRDb250ZW50IiwiZ3JpZCIsInhWYWx1ZSIsImRhdGFzZXQiLCJ5VmFsdWUiLCJwYXRyb2xCb2F0Iiwic3VibWFyaW5lIiwiZGVzdHJveWVyIiwiYmF0dGxlc2hpcCIsImNhcnJpZXIiLCJob3JpemFudGFsIiwidmVydGljYWwiLCJib2F0U2VsZWN0aW9uQnV0dG9uRnVuY3Rpb24iLCJidG5DbGlja2VkIiwiYnRuQXJyIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtYWluaW5nQnRucyIsImZpbHRlciIsImJ0biIsImZvckVhY2giLCJyZW1vdmUiLCJib2F0T3JpZW50YXRpb25CdXR0b25GdW5jdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJwYXRoIiwicGF0cm9sQm9hdFNwYWNlcyIsInN1Ym1hcmluZVNwYWNlcyIsImRlc3Ryb3llclNwYWNlcyIsImJhdHRsZXNoaXBTcGFjZXMiLCJjYXJyaWVyU3BhY2VzIiwiYm9hdE9yaWVudGF0aW9uIiwiY2xpY2tCdG5zTW9kYWwiLCJ0YWJsZUNsYXNzIiwiZ2V0QXR0cmlidXRlIiwiaW5jbHVkZXMiLCJjZWxscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjZWxsIiwieE51bSIsIk51bWJlciIsInlOdW0iLCJuZXh0Q2VsbDJfaG9yaXphbnRhbCIsIm5leHRDZWxsM19ob3JpemFudGFsIiwibmV4dENlbGw0X2hvcml6YW50YWwiLCJuZXh0Q2VsbDVfaG9yaXphbnRhbCIsIm5leHRDZWxsMl92ZXJ0aWNhbCIsIm5leHRDZWxsM192ZXJ0aWNhbCIsIm5leHRDZWxsNF92ZXJ0aWNhbCIsIm5leHRDZWxsNV92ZXJ0aWNhbCIsImRpc2FibGVkIiwicmFuZG9tTnVtQmV0d2VlbiIsIm1pbiIsIm1heCIsIm51bSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvbXB1dGVyT3JpZW50YXRpb24iLCJ1c2VkTnVtYmVycyIsInVzZWROdW1iZXJzMiIsIkNvbXB1dGVyQm9hdCIsIm9yaWVudGF0aW9uIiwiY29tcHV0ZXJDb2RlIiwieCIsInkiLCJuZXh0Q2VsbDIiLCJ4VG9TdHJpbmciLCJ0b1N0cmluZyIsInlUb1N0cmluZyIsIm5leHRDZWxsMlN0cmluZyIsImNlbGxDb2RlIiwibmV4dENlbGwyQ29kZSIsImFjdHVhbENlbGwiLCJhY3R1YWxOZXh0Q2VsbDIiLCJwdXNoIiwibmV4dENlbGwzIiwibmV4dENlbGwzU3RyaW5nIiwibmV4dENlbGwzQ29kZSIsImFjdHVhbE5leHRDZWxsMyIsIm5leHRDZWxsNCIsIm5leHRDZWxsNFN0cmluZyIsIm5leHRDZWxsNENvZGUiLCJhY3R1YWxOZXh0Q2VsbDQiLCJuZXh0Q2VsbDUiLCJuZXh0Q2VsbDVTdHJpbmciLCJuZXh0Q2VsbDVDb2RlIiwiYWN0dWFsTmV4dENlbGw1IiwicGF0cm9sQm9hdENvbXB1dGVyIiwic3VibWFyaW5lQ29tcHV0ZXIiLCJkZXN0cm95ZXJDb21wdXRlciIsImJhdHRsZXNoaXBDb21wdXRlciIsImNhcnJpZXJDb21wdXRlciIsImNvbXB1dGVyQ2VsbHMiLCJjb21wdXRlckNlbGwiLCJjb21wdXRlclRvdGFsVGFsbHkiLCJwYXRyb2xCb2F0VGFsbHkiLCJzdWJtYXJpbmVUYWxseSIsImRlc3Ryb3llclRhbGx5IiwiYmF0dGxlc2hpcFRhbGx5IiwiY2FycmllclRhbGx5IiwicGxheWVyVG90YWxUYWxseSIsInBsYXllclBhdHJvbEJvYXRUYWxseSIsInBsYXllclN1Ym1hcmluZVRhbGx5IiwicGxheWVyRGVzdHJveWVyVGFsbHkiLCJwbGF5ZXJCYXR0bGVzaGlwVGFsbHkiLCJwbGF5ZXJDYXJyaWVyVGFsbHkiLCJzZXRUaW1lb3V0Iiwib3ZlcmxheSIsInJhbmRvbVBsYXllckNvZGUiLCJwbGF5ZXJzWFZhbHVlIiwicGxheWVyc1lWYWx1ZSIsInBsYXllcnNYVmFsdWVTdHJpbmciLCJwbGF5ZXJzWVZhbHVlU3RyaW5nIiwicGxheWVyQ29kZVZhbHVlIiwiY29tcHV0ZXJBdHRhY2siXSwic291cmNlUm9vdCI6IiJ9