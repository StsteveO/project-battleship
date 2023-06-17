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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nbody,\nhtml {\n  height: 100%;\n  margin: 0;\n  /* background-color: skyblue; */\n}\n:root {\n  /* --custom-name: value; */\n  /* --light-green-bg: #476529; */\n  /* example, color: var(--navy-clr) */\n  --primary-clr: #8AA6A3;\n  --secondary-clr: #8AA6A3;\n  --accent-clr: #8AA6A3;\n}\n.header{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n    margin: 0rem;\n    border: .25rem solid black;\n    background-color: navy;\n    color: silver;\n    margin-bottom: 0rem;\n}\nfieldset{\n  display: flex;\n  flex-direction: column;\n}\n.form.player-name{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.submit-name-btn{\n  margin-top: 1rem;\n  padding: .5rem;\n}\n.name-plate,\n.computer-name-plate, \n.boat-selection-title,\n.boat-orientation-title{\n  margin-bottom: 1rem;\n  font-size: 3rem;\n  font-weight: bold;\n}\ntable, th, td {\n  border: 1px solid black;\n}\n.grid,\n.computer-grid,\n.boat-selection,\n.boat-orientation{\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.boat-selection-btns,\n.boat-orientation-btns{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: .25rem;\n}\nth, td{\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n  width: 2rem;\n}\n.clicked{\n  background-color: orange;\n}\n.outside-grid{\n  cursor: not-allowed;\n}\n.outside-grid-error{\n  background-color: red;\n  animation-name: off-grid-error;\n  animation-duration: 400ms;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n}\n@keyframes off-grid-error{\n  from {background-color: red;}\n  to {background-color: white;}\n}\n.table-class,\n.computer-table-class{\n  position: relative;\n}\n.grid,\n.computer-grid{\n  position: relative;\n}\n.click-btns-modal{\n  width: 40%;\n  height: auto;\n  /* margin: auto; */\n  background-color: rgb(194, 194, 194);\n  background-color: black;\n  color: whitesmoke;\n  border: 1px solid gray;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0%;\n  padding: 1rem;\n  transition-duration: 200ms;\n  transition-property: opacity;\n}\n.show{\n  opacity: 100%;\n}\n.phased-out{\n  opacity: 30%;\n}\n.selected{\n  background-color: black;\n}\n.computer-selected{\n  background-color: black;\n  color: white;\n  /* opacity: 30%; */\n}\n.computer-clicked{\n  background-color: orange;\n  cursor: pointer;\n}\n.computer-cell-targeted{\n  background-color: red;\n  animation-name: computer-cell-targeted;\n  animation-duration: 250ms;\n  animation-iteration-count: 8;\n  animation-direction: alternate;\n}\n@keyframes computer-cell-targeted{\n  from {background-color: orange;}\n  to {background-color: red;}\n}\n.player-cell-targeted{\n  background-color: red;\n  animation-name: computer-cell-targeted;\n  animation-duration: 250ms;\n  animation-iteration-count: 8;\n  animation-direction: alternate;\n}\n.hit{\n  background-color: red;\n  text-align: center;\n  /* transition-duration: 200ms; */\n  /* transition-delay: 1000ms; */\n}\n.missed{\n  background-color: gray;\n}\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.1);\n  pointer-events: none;\n  opacity: 0;\n  transition: 200ms;\n}\n.overlay.show{\n  opacity: 1;\n  pointer-events: all;\n}\n.scoreboard-title{\n  margin-left: 1rem;\n  margin-right: .25rem;\n}\n.scoreboard-display{\n  display: flex;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  position: sticky;\n  top: 0rem;\n  background-color: red;\n  margin-bottom: 1rem;\n  /* From https://css.glass */\nbackground: rgba(245, 246, 255, 0.19);\n/* border-radius: 16px; */\nbox-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\nbackdrop-filter: blur(14.1px);\n-webkit-backdrop-filter: blur(14.1px);\nborder: 1px solid rgba(245, 246, 255, 0.17);\nz-index: 1;\n}\n/* .scoreboard-text{\n  transition-duration: 5000ms;\n} */\n.scoreboard-computer-text{\n  margin-left: 2rem;\n}\n.hide{\n  pointer-events: none;\n  transform: scale(0);\n  transition: 100ms;\n  position: absolute;\n}\n.inactive{\n  pointer-events: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nbody,\nhtml {\n  height: 100%;\n  margin: 0;\n  /* background-color: skyblue; */\n}\n:root {\n  /* --custom-name: value; */\n  /* --light-green-bg: #476529; */\n  /* example, color: var(--navy-clr) */\n  --primary-clr: #8AA6A3;\n  --secondary-clr: #8AA6A3;\n  --accent-clr: #8AA6A3;\n}\n.header{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n    margin: 0rem;\n    border: .25rem solid black;\n    background-color: navy;\n    color: silver;\n    margin-bottom: 0rem;\n}\nfieldset{\n  display: flex;\n  flex-direction: column;\n}\n.form.player-name{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.submit-name-btn{\n  margin-top: 1rem;\n  padding: .5rem;\n}\n.name-plate,\n.computer-name-plate, \n.boat-selection-title,\n.boat-orientation-title{\n  margin-bottom: 1rem;\n  font-size: 3rem;\n  font-weight: bold;\n}\ntable, th, td {\n  border: 1px solid black;\n}\n.grid,\n.computer-grid,\n.boat-selection,\n.boat-orientation{\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.boat-selection-btns,\n.boat-orientation-btns{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: .25rem;\n}\nth, td{\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n  width: 2rem;\n}\n.clicked{\n  background-color: orange;\n}\n.outside-grid{\n  cursor: not-allowed;\n}\n.outside-grid-error{\n  background-color: red;\n  animation-name: off-grid-error;\n  animation-duration: 400ms;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n}\n@keyframes off-grid-error{\n  from {background-color: red;}\n  to {background-color: white;}\n}\n.table-class,\n.computer-table-class{\n  position: relative;\n}\n.grid,\n.computer-grid{\n  position: relative;\n}\n.click-btns-modal{\n  width: 40%;\n  height: auto;\n  /* margin: auto; */\n  background-color: rgb(194, 194, 194);\n  background-color: black;\n  color: whitesmoke;\n  border: 1px solid gray;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0%;\n  padding: 1rem;\n  transition-duration: 200ms;\n  transition-property: opacity;\n}\n.show{\n  opacity: 100%;\n}\n.phased-out{\n  opacity: 30%;\n}\n.selected{\n  background-color: black;\n}\n.computer-selected{\n  background-color: black;\n  color: white;\n  /* opacity: 30%; */\n}\n.computer-clicked{\n  background-color: orange;\n  cursor: pointer;\n}\n.computer-cell-targeted{\n  background-color: red;\n  animation-name: computer-cell-targeted;\n  animation-duration: 250ms;\n  animation-iteration-count: 8;\n  animation-direction: alternate;\n}\n@keyframes computer-cell-targeted{\n  from {background-color: orange;}\n  to {background-color: red;}\n}\n.player-cell-targeted{\n  background-color: red;\n  animation-name: computer-cell-targeted;\n  animation-duration: 250ms;\n  animation-iteration-count: 8;\n  animation-direction: alternate;\n}\n.hit{\n  background-color: red;\n  text-align: center;\n  /* transition-duration: 200ms; */\n  /* transition-delay: 1000ms; */\n}\n.missed{\n  background-color: gray;\n}\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.1);\n  pointer-events: none;\n  opacity: 0;\n  transition: 200ms;\n}\n.overlay.show{\n  opacity: 1;\n  pointer-events: all;\n}\n.scoreboard-title{\n  margin-left: 1rem;\n  margin-right: .25rem;\n}\n.scoreboard-display{\n  display: flex;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  position: sticky;\n  top: 0rem;\n  background-color: red;\n  margin-bottom: 1rem;\n  /* From https://css.glass */\nbackground: rgba(245, 246, 255, 0.19);\n/* border-radius: 16px; */\nbox-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\nbackdrop-filter: blur(14.1px);\n-webkit-backdrop-filter: blur(14.1px);\nborder: 1px solid rgba(245, 246, 255, 0.17);\nz-index: 1;\n}\n/* .scoreboard-text{\n  transition-duration: 5000ms;\n} */\n.scoreboard-computer-text{\n  margin-left: 2rem;\n}\n.hide{\n  pointer-events: none;\n  transform: scale(0);\n  transition: 100ms;\n  position: absolute;\n}\n.inactive{\n  pointer-events: none;\n}"],"sourceRoot":""}]);
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
let scoreboardComputerText = document.querySelector(".scoreboard-computer-text");
const namePlate = document.querySelector(".name-plate");
const nameSubmit = document.querySelector(".form.player-name");
nameSubmit.addEventListener("submit", e => {
  e.preventDefault();
  let name = e.composedPath()[0][1].value;
  namePlate.textContent = name;
  nameSubmit.classList.add("hide");
});
const boatSelectionSection = document.querySelector(".boat-selection");
const boatOrientationSection = document.querySelector(".boat-orientation");
const computerSection = document.querySelector(".computer-grid");
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
    if (patrolBoat.disabled === true && submarine.disabled === true && destroyer.disabled === true && battleship.disabled === true && carrier.disabled === true) {
      console.log("all buttons have been clicked");
      boatSelectionSection.classList.add("hide");
      boatOrientationSection.classList.add("hide");
      tableClass.classList.add("inactive");
      computerSection.classList.remove("hide");
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
      computerSection.classList.remove("hide");
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
      computerSection.classList.remove("hide");
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
      computerSection.classList.remove("hide");
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
      computerSection.classList.remove("hide");
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
      computerSection.classList.remove("hide");
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
      computerSection.classList.remove("hide");
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
      computerSection.classList.remove("hide");
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
      computerSection.classList.remove("hide");
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
      computerSection.classList.remove("hide");
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
      }, 2000);
      computerTotalTally++;
    } else {
      computerCell.classList.add("missed");
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
  });
});
console.log(patrolBoatComputer);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFFL0YsU0FBU0ssVUFBVUEsQ0FBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7RUFDcEIsT0FBT0QsQ0FBQyxHQUFDQyxDQUFDO0FBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQSxNQUFNUCxRQUFRLEdBQUlRLElBQUksSUFBS0EsSUFBSTtBQUUvQixNQUFNUCxVQUFVO0VBQ1pRLFdBQVdBLENBQUNDLE1BQU0sRUFBRUMsUUFBUSxFQUErQjtJQUFBLElBQTdCQyxXQUFXLEdBQUFDLFNBQUEsQ0FBQUgsTUFBQSxRQUFBRyxTQUFBLFFBQUFDLFNBQUEsR0FBQUQsU0FBQSxNQUFDLENBQUM7SUFBQSxJQUFFRSxPQUFPLEdBQUFGLFNBQUEsQ0FBQUgsTUFBQSxRQUFBRyxTQUFBLFFBQUFDLFNBQUEsR0FBQUQsU0FBQSxNQUFDLEtBQUs7SUFDdEQsSUFBSSxDQUFDSCxNQUFNLEdBQUVBLE1BQU07SUFDbkIsSUFBSSxDQUFDRSxXQUFXLEdBQUVBLFdBQVc7SUFDN0IsSUFBSSxDQUFDRyxPQUFPLEdBQUVBLE9BQU87SUFDckIsSUFBSSxDQUFDSixRQUFRLEdBQUNBLFFBQVE7RUFDMUI7QUFDSjtBQUFDO0FBRUQsTUFBTVQsR0FBRyxHQUFFUyxRQUFRLElBQUtBLFFBQVEsQ0FBQ0MsV0FBVyxFQUFFO0FBRTlDLE1BQU1ULE1BQU0sR0FBR1EsUUFBUSxJQUFLQSxRQUFRLENBQUNELE1BQU0sS0FBR0MsUUFBUSxDQUFDQyxXQUFXLEdBQUksSUFBSSxHQUFHLEtBQUs7QUFFbEYsTUFBTVIsU0FBUztFQUNYSyxXQUFXQSxDQUFBLEVBQUU7SUFDVCxJQUFJLENBQUNPLFdBQVcsR0FBRztJQUNqQjtJQUNBLENBQ0U7TUFBRUMsUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxDQUN0RztJQUNEO0lBQ0EsQ0FDRTtNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLENBQ3RHO0lBQ0Q7SUFDQSxDQUNFO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsQ0FDdEc7SUFDRDtJQUNBLENBQ0U7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxDQUN0RztJQUNEO0lBQ0EsQ0FDRTtNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLENBQ3RHO0lBQ0Q7SUFDQSxDQUNFO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsQ0FDdEc7SUFDRDtJQUNBLENBQ0U7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxDQUN0RztJQUNEO0lBQ0EsQ0FDRTtNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLENBQ3RHO0lBQ0Q7SUFDQSxDQUNFO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsQ0FDdEc7SUFDRDtJQUNBLENBQ0U7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVD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Q0FBQ0MsR0FBRyxDQUFDLHlCQUF5QixHQUFFa0Ysa0JBQWtCLENBQUM7O0lBSzlEO0lBQ0k7SUFDQUMsVUFBVSxDQUFFLE1BQUk7TUFBQ1EsY0FBYyxDQUFDckgsU0FBUyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7SUFBQyxDQUFDLEVBQUcsSUFBSSxDQUFDO0lBRS9FNEcsVUFBVSxDQUFFLE1BQUk7TUFBQ0MsT0FBTyxDQUFDOUcsU0FBUyxDQUFDdUIsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUFDLENBQUMsRUFBRyxJQUFJLENBQUM7RUFHN0QsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUZFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZ0Usa0JBQWtCLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9ET00taW50ZXJhY3Rpb25zL0RPTS1pbnRlcmFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL2Z1bmN0aW9ucyBfJl90ZXN0cy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncmFiTmFtZSwgQ3JlYXRlQm9hdCwgaGl0LCBpc1N1bmssIEdhbWVib2FyZCB9IGZyb20gXCIuLi9mdW5jdGlvbnMgXyZfdGVzdHMvZnVuY3Rpb25zXCI7XG5cbmZ1bmN0aW9uIGV4YW1wbGVBZGQoYSxiKXtcbiAgICByZXR1cm4gYStiO1xufVxuXG5cbmV4cG9ydHsgZXhhbXBsZUFkZCB9OyIsImNvbnN0IGdyYWJOYW1lID0gKG5hbWUpID0+IG5hbWU7XG5cbmNsYXNzIENyZWF0ZUJvYXR7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoLCBib2F0TmFtZSwgbnVtVGltZXNIaXQ9MCwgaGFzU3Vuaz1mYWxzZSl7XG4gICAgICAgIHRoaXMubGVuZ3RoPSBsZW5ndGg7XG4gICAgICAgIHRoaXMubnVtVGltZXNIaXQ9IG51bVRpbWVzSGl0O1xuICAgICAgICB0aGlzLmhhc1N1bms9IGhhc1N1bms7XG4gICAgICAgIHRoaXMuYm9hdE5hbWU9Ym9hdE5hbWU7XG4gICAgfTtcbn07XG5cbmNvbnN0IGhpdD0oYm9hdE5hbWUpID0+IGJvYXROYW1lLm51bVRpbWVzSGl0Kys7XG5cbmNvbnN0IGlzU3Vuaz0gKGJvYXROYW1lKT0+IChib2F0TmFtZS5sZW5ndGg9PT1ib2F0TmFtZS5udW1UaW1lc0hpdCkgPyB0cnVlIDogZmFsc2U7XG5cbmNsYXNzIEdhbWVib2FyZHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmNvb3JkaW5hdGVzID0gW1xuICAgICAgICAgIC8vMFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MCwgeV9udW1iZXI6IDAsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjowLCB5X251bWJlcjogMSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjAsIHlfbnVtYmVyOiAyLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MCwgeV9udW1iZXI6IDMsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjowLCB5X251bWJlcjogNCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjAsIHlfbnVtYmVyOiA1LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MCwgeV9udW1iZXI6IDYsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjowLCB5X251bWJlcjogNywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjAsIHlfbnVtYmVyOiA4LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MCwgeV9udW1iZXI6IDksIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgLy8xXG4gICAgICAgICAgW1xuICAgICAgICAgICAgeyB4X251bWJlcjoxLCB5X251bWJlcjogMCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjEsIHlfbnVtYmVyOiAxLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MSwgeV9udW1iZXI6IDIsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoxLCB5X251bWJlcjogMywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjEsIHlfbnVtYmVyOiA0LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MSwgeV9udW1iZXI6IDUsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoxLCB5X251bWJlcjogNiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjEsIHlfbnVtYmVyOiA3LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MSwgeV9udW1iZXI6IDgsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoxLCB5X251bWJlcjogOSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICAvLzJcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjIsIHlfbnVtYmVyOiAwLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MiwgeV9udW1iZXI6IDEsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoyLCB5X251bWJlcjogMiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjIsIHlfbnVtYmVyOiAzLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MiwgeV9udW1iZXI6IDQsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoyLCB5X251bWJlcjogNSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjIsIHlfbnVtYmVyOiA2LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MiwgeV9udW1iZXI6IDcsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoyLCB5X251bWJlcjogOCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjIsIHlfbnVtYmVyOiA5LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIC8vM1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MywgeV9udW1iZXI6IDAsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjozLCB5X251bWJlcjogMSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjMsIHlfbnVtYmVyOiAyLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MywgeV9udW1iZXI6IDMsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjozLCB5X251bWJlcjogNCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjMsIHlfbnVtYmVyOiA1LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MywgeV9udW1iZXI6IDYsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjozLCB5X251bWJlcjogNywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjMsIHlfbnVtYmVyOiA4LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MywgeV9udW1iZXI6IDksIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgLy80XG4gICAgICAgICAgW1xuICAgICAgICAgICAgeyB4X251bWJlcjo0LCB5X251bWJlcjogMCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjQsIHlfbnVtYmVyOiAxLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NCwgeV9udW1iZXI6IDIsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo0LCB5X251bWJlcjogMywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjQsIHlfbnVtYmVyOiA0LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NCwgeV9udW1iZXI6IDUsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo0LCB5X251bWJlcjogNiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjQsIHlfbnVtYmVyOiA3LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NCwgeV9udW1iZXI6IDgsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo0LCB5X251bWJlcjogOSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICAvLzVcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjUsIHlfbnVtYmVyOiAwLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NSwgeV9udW1iZXI6IDEsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo1LCB5X251bWJlcjogMiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjUsIHlfbnVtYmVyOiAzLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NSwgeV9udW1iZXI6IDQsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo1LCB5X251bWJlcjogNSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjUsIHlfbnVtYmVyOiA2LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NSwgeV9udW1iZXI6IDcsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo1LCB5X251bWJlcjogOCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjUsIHlfbnVtYmVyOiA5LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIC8vNlxuICAgICAgICAgIFtcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NiwgeV9udW1iZXI6IDAsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo2LCB5X251bWJlcjogMSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjYsIHlfbnVtYmVyOiAyLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NiwgeV9udW1iZXI6IDMsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo2LCB5X251bWJlcjogNCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjYsIHlfbnVtYmVyOiA1LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NiwgeV9udW1iZXI6IDYsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo2LCB5X251bWJlcjogNywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjYsIHlfbnVtYmVyOiA4LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NiwgeV9udW1iZXI6IDksIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgLy83XG4gICAgICAgICAgW1xuICAgICAgICAgICAgeyB4X251bWJlcjo3LCB5X251bWJlcjogMCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjcsIHlfbnVtYmVyOiAxLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NywgeV9udW1iZXI6IDIsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo3LCB5X251bWJlcjogMywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjcsIHlfbnVtYmVyOiA0LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NywgeV9udW1iZXI6IDUsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo3LCB5X251bWJlcjogNiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjcsIHlfbnVtYmVyOiA3LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NywgeV9udW1iZXI6IDgsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo3LCB5X251bWJlcjogOSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICAvLzhcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjgsIHlfbnVtYmVyOiAwLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OCwgeV9udW1iZXI6IDEsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo4LCB5X251bWJlcjogMiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjgsIHlfbnVtYmVyOiAzLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OCwgeV9udW1iZXI6IDQsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo4LCB5X251bWJlcjogNSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjgsIHlfbnVtYmVyOiA2LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OCwgeV9udW1iZXI6IDcsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo4LCB5X251bWJlcjogOCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjgsIHlfbnVtYmVyOiA5LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIC8vOVxuICAgICAgICAgIFtcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OSwgeV9udW1iZXI6IDAsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo5LCB5X251bWJlcjogMSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjksIHlfbnVtYmVyOiAyLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OSwgeV9udW1iZXI6IDMsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo5LCB5X251bWJlcjogNCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjksIHlfbnVtYmVyOiA1LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OSwgeV9udW1iZXI6IDYsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo5LCB5X251bWJlcjogNywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjksIHlfbnVtYmVyOiA4LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OSwgeV9udW1iZXI6IDksIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgIF1cbiAgICAgICAgXTtcbiAgICB9O1xuXG4gICAgcGxhY2Uoc2hpcExlbmd0aCwgdmVydGljYWxPckhvcml6b250YWwsIHhOdW1iZXIsIHlOdW1iZXIsIGJvYXROYW1lT2JqLCBib2F0TmFtZSl7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICBpZih4TnVtYmVyK2k8MCB8fCB4TnVtYmVyK2k+OSB8fCB5TnVtYmVyLWk8MCB8fCB5TnVtYmVyLWk+OSl7XG4gICAgICAgICAgcmV0dXJuIFwiSW52YWxpZCBlbnRyeSwgc2hpcCBpcyBub3Qgd2l0aGluIHRoZSBsaW1pdHMgb2YgdGhlIGJvYXJkLlRyeSBhZ2Fpbi5cIjtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHZlcnRpY2FsT3JIb3Jpem9udGFsID09PSBcImhvcml6b250YWxcIil7XG4gICAgICAgICAgdGhpcy5jb29yZGluYXRlc1t4TnVtYmVyICsgaV1beU51bWJlcl0uc3RhdHVzID0gXCJmaWxsZWRcIjtcbiAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW3hOdW1iZXIgKyBpXVt5TnVtYmVyXS5ib2F0TmFtZSA9IGJvYXROYW1lO1xuICAgICAgICAgIHRoaXMuY29vcmRpbmF0ZXNbeE51bWJlciArIGldW3lOdW1iZXJdLmJvYXROYW1lT2JqID0gYm9hdE5hbWVPYmo7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh2ZXJ0aWNhbE9ySG9yaXpvbnRhbCA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgdGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyIC0gaV0uc3RhdHVzID0gXCJmaWxsZWRcIjtcbiAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW3hOdW1iZXJdW3lOdW1iZXIgLSBpXS5ib2F0TmFtZSA9IGJvYXROYW1lO1xuICAgICAgICAgIHRoaXMuY29vcmRpbmF0ZXNbeE51bWJlcl1beU51bWJlciAtIGldLmJvYXROYW1lT2JqID0gYm9hdE5hbWVPYmo7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH07XG5cbiAgICByZWNlaXZlQXR0YWNrKHhOdW1iZXIsIHlOdW1iZXIpe1xuICAgICAgaWYgKHhOdW1iZXIgPCAwIHx8IHhOdW1iZXIgPiA5IHx8IHlOdW1iZXIgPCAwIHx8IHlOdW1iZXIgPiA5KSB7XG4gICAgICAgIHJldHVybiBcIkludmFsaWQgZW50cnksIHNoaXAgaXMgbm90IHdpdGhpbiB0aGUgbGltaXRzIG9mIHRoZSBib2FyZC5UcnkgYWdhaW4uXCI7XG4gICAgICB9XG4gICAgICBpZih0aGlzLmNvb3JkaW5hdGVzW3hOdW1iZXJdW3lOdW1iZXJdLndhc1BpY2tlZD09PXRydWUpe1xuICAgICAgICByZXR1cm4gYEludmFsaWQgZW50cnksIGNvb3JkaW5hdGVzICR7eE51bWJlcn0sJHt5TnVtYmVyfSB3YXMgYWxyZWFkeSBhdHRhY2tlZC5UcnkgYWdhaW4uYDtcbiAgICAgIH07XG4gICAgICBpZiAodGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyXS5zdGF0dXMgPT09IFwiZW1wdHlcIikge1xuICAgICAgICAvL1BMQUNFSE9MREVSOiB3aGF0IHRvIGRvL2Rpc3BsYXkgd2l0aCBtaXNzZWQgYXR0YWNrc1xuICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW3hOdW1iZXJdW3lOdW1iZXJdLndhc1BpY2tlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBgTWlzc2VkISBObyBoaXQgb24gY29vcmRpbmF0ZXMgJHt4TnVtYmVyfSwke3lOdW1iZXJ9YDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNvb3JkaW5hdGVzW3hOdW1iZXJdW3lOdW1iZXJdLnN0YXR1cyA9PT0gXCJmaWxsZWRcIikge1xuICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW3hOdW1iZXJdW3lOdW1iZXJdLndhc1BpY2tlZCA9IHRydWU7XG4gICAgICAgIGhpdCh0aGlzLmNvb3JkaW5hdGVzW3hOdW1iZXJdW3lOdW1iZXJdLmJvYXROYW1lT2JqKTtcbiAgICAgICAgaWYgKGlzU3Vuayh0aGlzLmNvb3JkaW5hdGVzW3hOdW1iZXJdW3lOdW1iZXJdLmJvYXROYW1lT2JqKT09PXRydWUpIHtcbiAgICAgICAgICByZXR1cm4gYEhpdCEgYCsodGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyXS5ib2F0TmFtZSkrYCBoYXMgYmVlbiBoaXQgb24gY29vcmRpbmF0ZXMgJHt4TnVtYmVyfSwke3lOdW1iZXJ9LCBhbmQgaGFzIGJlZW4gc3VuayFgO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYEhpdCEgYCsodGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyXS5ib2F0TmFtZSkrYCBoYXMgYmVlbiBoaXQgb24gY29vcmRpbmF0ZXMgJHt4TnVtYmVyfSwke3lOdW1iZXJ9YDtcbiAgICAgIH1cbiAgICB9O1xufTtcblxuXG5leHBvcnQgeyBncmFiTmFtZSwgQ3JlYXRlQm9hdCwgaGl0LCBpc1N1bmssIEdhbWVib2FyZCB9OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSxcXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7ICovXFxufVxcbjpyb290IHtcXG4gIC8qIC0tY3VzdG9tLW5hbWU6IHZhbHVlOyAqL1xcbiAgLyogLS1saWdodC1ncmVlbi1iZzogIzQ3NjUyOTsgKi9cXG4gIC8qIGV4YW1wbGUsIGNvbG9yOiB2YXIoLS1uYXZ5LWNscikgKi9cXG4gIC0tcHJpbWFyeS1jbHI6ICM4QUE2QTM7XFxuICAtLXNlY29uZGFyeS1jbHI6ICM4QUE2QTM7XFxuICAtLWFjY2VudC1jbHI6ICM4QUE2QTM7XFxufVxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICAgIG1hcmdpbjogMHJlbTtcXG4gICAgYm9yZGVyOiAuMjVyZW0gc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG5hdnk7XFxuICAgIGNvbG9yOiBzaWx2ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDByZW07XFxufVxcbmZpZWxkc2V0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5mb3JtLnBsYXllci1uYW1le1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zdWJtaXQtbmFtZS1idG57XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgcGFkZGluZzogLjVyZW07XFxufVxcbi5uYW1lLXBsYXRlLFxcbi5jb21wdXRlci1uYW1lLXBsYXRlLCBcXG4uYm9hdC1zZWxlY3Rpb24tdGl0bGUsXFxuLmJvYXQtb3JpZW50YXRpb24tdGl0bGV7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbnRhYmxlLCB0aCwgdGQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbi5ncmlkLFxcbi5jb21wdXRlci1ncmlkLFxcbi5ib2F0LXNlbGVjdGlvbixcXG4uYm9hdC1vcmllbnRhdGlvbntcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmJvYXQtc2VsZWN0aW9uLWJ0bnMsXFxuLmJvYXQtb3JpZW50YXRpb24tYnRuc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IC4yNXJlbTtcXG59XFxudGgsIHRke1xcbiAgcGFkZGluZy10b3A6IC4yNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAuMjVyZW07XFxuICB3aWR0aDogMnJlbTtcXG59XFxuLmNsaWNrZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcbi5vdXRzaWRlLWdyaWR7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4ub3V0c2lkZS1ncmlkLWVycm9ye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYW5pbWF0aW9uLW5hbWU6IG9mZi1ncmlkLWVycm9yO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcbn1cXG5Aa2V5ZnJhbWVzIG9mZi1ncmlkLWVycm9ye1xcbiAgZnJvbSB7YmFja2dyb3VuZC1jb2xvcjogcmVkO31cXG4gIHRvIHtiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTt9XFxufVxcbi50YWJsZS1jbGFzcyxcXG4uY29tcHV0ZXItdGFibGUtY2xhc3N7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5ncmlkLFxcbi5jb21wdXRlci1ncmlke1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY2xpY2stYnRucy1tb2RhbHtcXG4gIHdpZHRoOiA0MCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICAvKiBtYXJnaW46IGF1dG87ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxOTQsIDE5NCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBvcGFjaXR5OiAwJTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XFxufVxcbi5zaG93e1xcbiAgb3BhY2l0eTogMTAwJTtcXG59XFxuLnBoYXNlZC1vdXR7XFxuICBvcGFjaXR5OiAzMCU7XFxufVxcbi5zZWxlY3RlZHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4uY29tcHV0ZXItc2VsZWN0ZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIC8qIG9wYWNpdHk6IDMwJTsgKi9cXG59XFxuLmNvbXB1dGVyLWNsaWNrZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jb21wdXRlci1jZWxsLXRhcmdldGVke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGNvbXB1dGVyLWNlbGwtdGFyZ2V0ZWQ7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDI1MG1zO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogODtcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG59XFxuQGtleWZyYW1lcyBjb21wdXRlci1jZWxsLXRhcmdldGVke1xcbiAgZnJvbSB7YmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO31cXG4gIHRvIHtiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7fVxcbn1cXG4ucGxheWVyLWNlbGwtdGFyZ2V0ZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBhbmltYXRpb24tbmFtZTogY29tcHV0ZXItY2VsbC10YXJnZXRlZDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMjUwbXM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiA4O1xcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcbn1cXG4uaGl0e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgLyogdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7ICovXFxuICAvKiB0cmFuc2l0aW9uLWRlbGF5OiAxMDAwbXM7ICovXFxufVxcbi5taXNzZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiAyMDBtcztcXG59XFxuLm92ZXJsYXkuc2hvd3tcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG4uc2NvcmVib2FyZC10aXRsZXtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAuMjVyZW07XFxufVxcbi5zY29yZWJvYXJkLWRpc3BsYXl7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDByZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgLyogRnJvbSBodHRwczovL2Nzcy5nbGFzcyAqL1xcbmJhY2tncm91bmQ6IHJnYmEoMjQ1LCAyNDYsIDI1NSwgMC4xOSk7XFxuLyogYm9yZGVyLXJhZGl1czogMTZweDsgKi9cXG5ib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG5iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTQuMXB4KTtcXG4td2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNC4xcHgpO1xcbmJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjQ1LCAyNDYsIDI1NSwgMC4xNyk7XFxuei1pbmRleDogMTtcXG59XFxuLyogLnNjb3JlYm9hcmQtdGV4dHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMDBtcztcXG59ICovXFxuLnNjb3JlYm9hcmQtY29tcHV0ZXItdGV4dHtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbn1cXG4uaGlkZXtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDEwMG1zO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4uaW5hY3RpdmV7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0Usc0JBQXNCO0FBQ3hCO0FBQ0E7O0VBRUUsWUFBWTtFQUNaLFNBQVM7RUFDVCwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQiwrQkFBK0I7RUFDL0Isb0NBQW9DO0VBQ3BDLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIscUJBQXFCO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lB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ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSxcXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7ICovXFxufVxcbjpyb290IHtcXG4gIC8qIC0tY3VzdG9tLW5hbWU6IHZhbHVlOyAqL1xcbiAgLyogLS1saWdodC1ncmVlbi1iZzogIzQ3NjUyOTsgKi9cXG4gIC8qIGV4YW1wbGUsIGNvbG9yOiB2YXIoLS1uYXZ5LWNscikgKi9cXG4gIC0tcHJpbWFyeS1jbHI6ICM4QUE2QTM7XFxuICAtLXNlY29uZGFyeS1jbHI6ICM4QUE2QTM7XFxuICAtLWFjY2VudC1jbHI6ICM4QUE2QTM7XFxufVxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICAgIG1hcmdpbjogMHJlbTtcXG4gICAgYm9yZGVyOiAuMjVyZW0gc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG5hdnk7XFxuICAgIGNvbG9yOiBzaWx2ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDByZW07XFxufVxcbmZpZWxkc2V0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5mb3JtLnBsYXllci1uYW1le1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zdWJtaXQtbmFtZS1idG57XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgcGFkZGluZzogLjVyZW07XFxufVxcbi5uYW1lLXBsYXRlLFxcbi5jb21wdXRlci1uYW1lLXBsYXRlLCBcXG4uYm9hdC1zZWxlY3Rpb24tdGl0bGUsXFxuLmJvYXQtb3JpZW50YXRpb24tdGl0bGV7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbnRhYmxlLCB0aCwgdGQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbi5ncmlkLFxcbi5jb21wdXRlci1ncmlkLFxcbi5ib2F0LXNlbGVjdGlvbixcXG4uYm9hdC1vcmllbnRhdGlvbntcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmJvYXQtc2VsZWN0aW9uLWJ0bnMsXFxuLmJvYXQtb3JpZW50YXRpb24tYnRuc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IC4yNXJlbTtcXG59XFxudGgsIHRke1xcbiAgcGFkZGluZy10b3A6IC4yNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAuMjVyZW07XFxuICB3aWR0aDogMnJlbTtcXG59XFxuLmNsaWNrZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcbi5vdXRzaWRlLWdyaWR7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4ub3V0c2lkZS1ncmlkLWVycm9ye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYW5pbWF0aW9uLW5hbWU6IG9mZi1ncmlkLWVycm9yO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcbn1cXG5Aa2V5ZnJhbWVzIG9mZi1ncmlkLWVycm9ye1xcbiAgZnJvbSB7YmFja2dyb3VuZC1jb2xvcjogcmVkO31cXG4gIHRvIHtiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTt9XFxufVxcbi50YWJsZS1jbGFzcyxcXG4uY29tcHV0ZXItdGFibGUtY2xhc3N7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5ncmlkLFxcbi5jb21wdXRlci1ncmlke1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY2xpY2stYnRucy1tb2RhbHtcXG4gIHdpZHRoOiA0MCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICAvKiBtYXJnaW46IGF1dG87ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxOTQsIDE5NCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBvcGFjaXR5OiAwJTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XFxufVxcbi5zaG93e1xcbiAgb3BhY2l0eTogMTAwJTtcXG59XFxuLnBoYXNlZC1vdXR7XFxuICBvcGFjaXR5OiAzMCU7XFxufVxcbi5zZWxlY3RlZHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4uY29tcHV0ZXItc2VsZWN0ZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIC8qIG9wYWNpdHk6IDMwJTsgKi9cXG59XFxuLmNvbXB1dGVyLWNsaWNrZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jb21wdXRlci1jZWxsLXRhcmdldGVke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGNvbXB1dGVyLWNlbGwtdGFyZ2V0ZWQ7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDI1MG1zO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogODtcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG59XFxuQGtleWZyYW1lcyBjb21wdXRlci1jZWxsLXRhcmdldGVke1xcbiAgZnJvbSB7YmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO31cXG4gIHRvIHtiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7fVxcbn1cXG4ucGxheWVyLWNlbGwtdGFyZ2V0ZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBhbmltYXRpb24tbmFtZTogY29tcHV0ZXItY2VsbC10YXJnZXRlZDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMjUwbXM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiA4O1xcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcbn1cXG4uaGl0e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgLyogdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7ICovXFxuICAvKiB0cmFuc2l0aW9uLWRlbGF5OiAxMDAwbXM7ICovXFxufVxcbi5taXNzZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiAyMDBtcztcXG59XFxuLm92ZXJsYXkuc2hvd3tcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG4uc2NvcmVib2FyZC10aXRsZXtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAuMjVyZW07XFxufVxcbi5zY29yZWJvYXJkLWRpc3BsYXl7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDByZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgLyogRnJvbSBodHRwczovL2Nzcy5nbGFzcyAqL1xcbmJhY2tncm91bmQ6IHJnYmEoMjQ1LCAyNDYsIDI1NSwgMC4xOSk7XFxuLyogYm9yZGVyLXJhZGl1czogMTZweDsgKi9cXG5ib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG5iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTQuMXB4KTtcXG4td2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNC4xcHgpO1xcbmJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjQ1LCAyNDYsIDI1NSwgMC4xNyk7XFxuei1pbmRleDogMTtcXG59XFxuLyogLnNjb3JlYm9hcmQtdGV4dHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMDBtcztcXG59ICovXFxuLnNjb3JlYm9hcmQtY29tcHV0ZXItdGV4dHtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbn1cXG4uaGlkZXtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDEwMG1zO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4uaW5hY3RpdmV7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQge1xuICBncmFiTmFtZSxcbiAgQ3JlYXRlQm9hdCxcbiAgaGl0LFxuICBpc1N1bmssXG4gIEdhbWVib2FyZCxcbn0gZnJvbSBcIi4uL3NyYy9mdW5jdGlvbnMgXyZfdGVzdHMvZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBleGFtcGxlQWRkIH0gZnJvbSBcIi4uL3NyYy9ET00taW50ZXJhY3Rpb25zL0RPTS1pbnRlcmFjdGlvbnNcIjtcblxubGV0IHNjb3JlYm9hcmRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY29yZWJvYXJkLXRleHRcIik7XG5sZXQgc2NvcmVib2FyZENvbXB1dGVyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NvcmVib2FyZC1jb21wdXRlci10ZXh0XCIpO1xuXG5jb25zdCBuYW1lUGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hbWUtcGxhdGVcIik7XG5jb25zdCBuYW1lU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLnBsYXllci1uYW1lXCIpO1xuXG5uYW1lU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBsZXQgbmFtZSA9IGUuY29tcG9zZWRQYXRoKClbMF1bMV0udmFsdWU7XG4gIG5hbWVQbGF0ZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gIG5hbWVTdWJtaXQuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG59KTtcblxuY29uc3QgYm9hdFNlbGVjdGlvblNlY3Rpb249IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hdC1zZWxlY3Rpb25cIik7XG5jb25zdCBib2F0T3JpZW50YXRpb25TZWN0aW9uPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXQtb3JpZW50YXRpb25cIik7XG5cbmNvbnN0IGNvbXB1dGVyU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXItZ3JpZFwiKTtcblxuY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JpZFwiKTtcblxuZ3JpZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc3QgeFZhbHVlID0gZS5jb21wb3NlZFBhdGgoKVswXS5kYXRhc2V0LnhWYWx1ZTtcbiAgY29uc3QgeVZhbHVlID0gZS5jb21wb3NlZFBhdGgoKVswXS5kYXRhc2V0LnlWYWx1ZTtcblxuICBpZiAoeFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh4VmFsdWUpO1xuICAgIC8vIGNvbnNvbGUubG9nKHlWYWx1ZSk7XG4gIH1cbn0pO1xuXG5jb25zdCBwYXRyb2xCb2F0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXRyb2wtYm9hdC1idG5cIik7XG5jb25zdCBzdWJtYXJpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1hcmluZS1idG5cIik7XG5jb25zdCBkZXN0cm95ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc3Ryb3llci1idG5cIik7XG5jb25zdCBiYXR0bGVzaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXR0bGVzaGlwLWJ0blwiKTtcbmNvbnN0IGNhcnJpZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcnJpZXItYnRuXCIpO1xuY29uc3QgaG9yaXphbnRhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9yaXphbnRhbC1idG5cIik7XG5jb25zdCB2ZXJ0aWNhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmVydGljYWwtYnRuXCIpO1xuXG5mdW5jdGlvbiBib2F0U2VsZWN0aW9uQnV0dG9uRnVuY3Rpb24oXG4gIGJ0bkNsaWNrZWQsXG4gIGJ0bkFyciA9IFtwYXRyb2xCb2F0LCBzdWJtYXJpbmUsIGRlc3Ryb3llciwgYmF0dGxlc2hpcCwgY2Fycmllcl1cbikge1xuICBidG5DbGlja2VkLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICBsZXQgcmVtYWluaW5nQnRucyA9IGJ0bkFyci5maWx0ZXIoKGJ0bikgPT4gYnRuICE9PSBidG5DbGlja2VkKTtcbiAgcmVtYWluaW5nQnRucy5mb3JFYWNoKChidG4pID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKSk7XG59XG5cbmZ1bmN0aW9uIGJvYXRPcmllbnRhdGlvbkJ1dHRvbkZ1bmN0aW9uKFxuICBidG5DbGlja2VkLFxuICBidG5BcnIgPSBbaG9yaXphbnRhbCwgdmVydGljYWxdXG4pIHtcbiAgYnRuQ2xpY2tlZC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgbGV0IHJlbWFpbmluZ0J0bnMgPSBidG5BcnIuZmlsdGVyKChidG4pID0+IGJ0biAhPT0gYnRuQ2xpY2tlZCk7XG4gIHJlbWFpbmluZ0J0bnMuZm9yRWFjaCgoYnRuKSA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIikpO1xufVxuXG5wYXRyb2xCb2F0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zb2xlLmxvZyhlLnBhdGhbMF0uZGF0YXNldC5wYXRyb2xCb2F0U3BhY2VzKTtcbiAgYm9hdFNlbGVjdGlvbkJ1dHRvbkZ1bmN0aW9uKHBhdHJvbEJvYXQpO1xufSk7XG5cbnN1Ym1hcmluZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc29sZS5sb2coZS5wYXRoWzBdLmRhdGFzZXQuc3VibWFyaW5lU3BhY2VzKTtcbiAgYm9hdFNlbGVjdGlvbkJ1dHRvbkZ1bmN0aW9uKHN1Ym1hcmluZSk7XG59KTtcblxuZGVzdHJveWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zb2xlLmxvZyhlLnBhdGhbMF0uZGF0YXNldC5kZXN0cm95ZXJTcGFjZXMpO1xuICBib2F0U2VsZWN0aW9uQnV0dG9uRnVuY3Rpb24oZGVzdHJveWVyKTtcbn0pO1xuXG5iYXR0bGVzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zb2xlLmxvZyhlLnBhdGhbMF0uZGF0YXNldC5iYXR0bGVzaGlwU3BhY2VzKTtcbiAgYm9hdFNlbGVjdGlvbkJ1dHRvbkZ1bmN0aW9uKGJhdHRsZXNoaXApO1xufSk7XG5cbmNhcnJpZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnNvbGUubG9nKGUucGF0aFswXS5kYXRhc2V0LmNhcnJpZXJTcGFjZXMpO1xuICBib2F0U2VsZWN0aW9uQnV0dG9uRnVuY3Rpb24oY2Fycmllcik7XG59KTtcblxuaG9yaXphbnRhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc29sZS5sb2coZS5wYXRoWzBdLmRhdGFzZXQuYm9hdE9yaWVudGF0aW9uKTtcbiAgYm9hdE9yaWVudGF0aW9uQnV0dG9uRnVuY3Rpb24oaG9yaXphbnRhbCk7XG59KTtcblxudmVydGljYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnNvbGUubG9nKGUucGF0aFswXS5kYXRhc2V0LmJvYXRPcmllbnRhdGlvbik7XG4gIGJvYXRPcmllbnRhdGlvbkJ1dHRvbkZ1bmN0aW9uKHZlcnRpY2FsKTtcbn0pO1xuXG4vL2NsaWNrLWJ0bnMtbW9kYWxcbmNvbnN0IGNsaWNrQnRuc01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbGljay1idG5zLW1vZGFsXCIpO1xuY29uc3QgdGFibGVDbGFzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGUtY2xhc3NcIik7XG5cbnRhYmxlQ2xhc3MuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xuICBpZiAoXG4gICAgKCFwYXRyb2xCb2F0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIXN1Ym1hcmluZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFkZXN0cm95ZXIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhYmF0dGxlc2hpcC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFjYXJyaWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSkgfHxcbiAgICAoIWhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpKVxuICApIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIk5vbmUgb2YgdGhlc2UgYnV0dG9ucyBhcmUgY2xpY2tlZFwiKTsgLy9USElTIFdPUktTISFcbiAgICAvLyBwYXRyb2xCb2F0LmNsYXNzTGlzdC5hZGQoXCJuby1idG4tY2xpY2tlZC1lcnJvclwiKTtcbiAgICBjbGlja0J0bnNNb2RhbC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgICB0YWJsZUNsYXNzLmNsYXNzTGlzdC5hZGQoXCJwaGFzZWQtb3V0XCIpO1xuICB9XG59KTtcblxuLy8gY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidGRcIik7XG5jb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyLWNlbGxcIik7XG5cbmNlbGxzLmZvckVhY2goKGNlbGwpID0+XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgY29uc3QgeE51bSA9IE51bWJlcihjZWxsLmRhdGFzZXQueFZhbHVlKTtcbiAgICBjb25zdCB5TnVtID0gTnVtYmVyKGNlbGwuZGF0YXNldC55VmFsdWUpO1xuXG4gICAgY29uc3QgbmV4dENlbGwyX2hvcml6YW50YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtICsgMX0ke3lOdW19XCJdYFxuICAgICk7XG4gICAgY29uc3QgbmV4dENlbGwzX2hvcml6YW50YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtICsgMn0ke3lOdW19XCJdYFxuICAgICk7XG4gICAgY29uc3QgbmV4dENlbGw0X2hvcml6YW50YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtICsgM30ke3lOdW19XCJdYFxuICAgICk7XG4gICAgY29uc3QgbmV4dENlbGw1X2hvcml6YW50YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtICsgNH0ke3lOdW19XCJdYFxuICAgICk7XG5cbiAgICBjb25zdCBuZXh0Q2VsbDJfdmVydGljYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtfSR7eU51bSArIDF9XCJdYFxuICAgICk7XG4gICAgY29uc3QgbmV4dENlbGwzX3ZlcnRpY2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bX0ke3lOdW0gKyAyfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsNF92ZXJ0aWNhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW19JHt5TnVtICsgM31cIl1gXG4gICAgKTtcbiAgICBjb25zdCBuZXh0Q2VsbDVfdmVydGljYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtfSR7eU51bSArIDR9XCJdYFxuICAgICk7XG5cbiAgICBpZiAoXG4gICAgICBwYXRyb2xCb2F0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIilcbiAgICApIHtcbiAgICAgIGlmIChuZXh0Q2VsbDJfaG9yaXphbnRhbCkge1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghbmV4dENlbGwyX2hvcml6YW50YWwpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHBhdHJvbEJvYXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICB2ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIilcbiAgICApIHtcbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwpIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKCFuZXh0Q2VsbDJfdmVydGljYWwpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHN1Ym1hcmluZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIGhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX2hvcml6YW50YWwgJiYgbmV4dENlbGwzX2hvcml6YW50YWwpIHtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDZWxsMl9ob3JpemFudGFsICYmICFuZXh0Q2VsbDNfaG9yaXphbnRhbCkge1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghbmV4dENlbGwyX2hvcml6YW50YWwgJiYgIW5leHRDZWxsM19ob3JpemFudGFsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBzdWJtYXJpbmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICB2ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIilcbiAgICApIHtcbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgbmV4dENlbGwzX3ZlcnRpY2FsKSB7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDZWxsMl92ZXJ0aWNhbCAmJiAhbmV4dENlbGwzX3ZlcnRpY2FsKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghbmV4dENlbGwyX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDNfdmVydGljYWwpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGRlc3Ryb3llci5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIGhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX2hvcml6YW50YWwgJiYgbmV4dENlbGwzX2hvcml6YW50YWwpIHtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDZWxsMl9ob3JpemFudGFsICYmICFuZXh0Q2VsbDNfaG9yaXphbnRhbCkge1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghbmV4dENlbGwyX2hvcml6YW50YWwgJiYgIW5leHRDZWxsM19ob3JpemFudGFsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBkZXN0cm95ZXIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICB2ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIilcbiAgICApIHtcbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgbmV4dENlbGwzX3ZlcnRpY2FsKSB7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDZWxsMl92ZXJ0aWNhbCAmJiAhbmV4dENlbGwzX3ZlcnRpY2FsKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghbmV4dENlbGwyX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDNfdmVydGljYWwpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGJhdHRsZXNoaXAuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICBob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNF9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgICFuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNF9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGJhdHRsZXNoaXAuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICB2ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIilcbiAgICApIHtcbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgbmV4dENlbGwzX3ZlcnRpY2FsICYmIG5leHRDZWxsNF92ZXJ0aWNhbCkge1xuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDZWxsMl92ZXJ0aWNhbCAmJiBuZXh0Q2VsbDNfdmVydGljYWwgJiYgIW5leHRDZWxsNF92ZXJ0aWNhbCkge1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDZWxsMl92ZXJ0aWNhbCAmJiAhbmV4dENlbGwzX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDRfdmVydGljYWwpIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKCFuZXh0Q2VsbDJfdmVydGljYWwgJiYgIW5leHRDZWxsM192ZXJ0aWNhbCAmJiAhbmV4dENlbGw0X3ZlcnRpY2FsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBjYXJyaWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIilcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGw1X2hvcml6YW50YWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDVfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw1X2hvcml6YW50YWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw1X2hvcml6YW50YWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgIW5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDVfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDVfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw1X2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGNhcnJpZXIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICB2ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIilcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGw1X3ZlcnRpY2FsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw1X3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGw1X3ZlcnRpY2FsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsNF92ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGw1X3ZlcnRpY2FsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDNfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsNF92ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGw1X3ZlcnRpY2FsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAhbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDNfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsNF92ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGw1X3ZlcnRpY2FsXG4gICAgICApIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDVfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGw1X3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDVfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSlcbik7XG5cbnRhYmxlQ2xhc3MuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICBpZiAoXG4gICAgKCFwYXRyb2xCb2F0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIXN1Ym1hcmluZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFkZXN0cm95ZXIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhYmF0dGxlc2hpcC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFjYXJyaWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSkgfHxcbiAgICAoIWhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpKVxuICApIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIk5vbmUgb2YgdGhlc2UgYnV0dG9ucyBhcmUgY2xpY2tlZFwiKTsgLy9USElTIFdPUktTISFcbiAgICAvLyBwYXRyb2xCb2F0LmNsYXNzTGlzdC5yZW1vdmUoXCJuby1idG4tY2xpY2tlZC1lcnJvclwiKTtcbiAgICBjbGlja0J0bnNNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICB0YWJsZUNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoXCJwaGFzZWQtb3V0XCIpO1xuICB9XG59KTtcblxuY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT5cbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHhOdW0gPSBOdW1iZXIoY2VsbC5kYXRhc2V0LnhWYWx1ZSk7XG4gICAgY29uc3QgeU51bSA9IE51bWJlcihjZWxsLmRhdGFzZXQueVZhbHVlKTtcblxuICAgIGNvbnN0IG5leHRDZWxsMl9ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDF9JHt5TnVtfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsM19ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDJ9JHt5TnVtfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsNF9ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDN9JHt5TnVtfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsNV9ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDR9JHt5TnVtfVwiXWBcbiAgICApO1xuXG4gICAgY29uc3QgbmV4dENlbGwyX3ZlcnRpY2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bX0ke3lOdW0gKyAxfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsM192ZXJ0aWNhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW19JHt5TnVtICsgMn1cIl1gXG4gICAgKTtcbiAgICBjb25zdCBuZXh0Q2VsbDRfdmVydGljYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtfSR7eU51bSArIDN9XCJdYFxuICAgICk7XG4gICAgY29uc3QgbmV4dENlbGw1X3ZlcnRpY2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bX0ke3lOdW0gKyA0fVwiXWBcbiAgICApO1xuXG4gICAgaWYgKFxuICAgICAgcGF0cm9sQm9hdC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIGhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX2hvcml6YW50YWwpIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl9ob3JpemFudGFsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBwYXRyb2xCb2F0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghbmV4dENlbGwyX3ZlcnRpY2FsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBzdWJtYXJpbmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICBob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKG5leHRDZWxsMl9ob3JpemFudGFsICYmIG5leHRDZWxsM19ob3JpemFudGFsKSB7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJiAhbmV4dENlbGwzX2hvcml6YW50YWwpIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl9ob3JpemFudGFsICYmICFuZXh0Q2VsbDNfaG9yaXphbnRhbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgc3VibWFyaW5lLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmIG5leHRDZWxsM192ZXJ0aWNhbCkge1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgIW5leHRDZWxsM192ZXJ0aWNhbCkge1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl92ZXJ0aWNhbCAmJiAhbmV4dENlbGwzX3ZlcnRpY2FsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBkZXN0cm95ZXIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICBob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKG5leHRDZWxsMl9ob3JpemFudGFsICYmIG5leHRDZWxsM19ob3JpemFudGFsKSB7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJiAhbmV4dENlbGwzX2hvcml6YW50YWwpIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl9ob3JpemFudGFsICYmICFuZXh0Q2VsbDNfaG9yaXphbnRhbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgZGVzdHJveWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmIG5leHRDZWxsM192ZXJ0aWNhbCkge1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgIW5leHRDZWxsM192ZXJ0aWNhbCkge1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl92ZXJ0aWNhbCAmJiAhbmV4dENlbGwzX3ZlcnRpY2FsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBiYXR0bGVzaGlwLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIilcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAhbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBiYXR0bGVzaGlwLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmIG5leHRDZWxsM192ZXJ0aWNhbCAmJiBuZXh0Q2VsbDRfdmVydGljYWwpIHtcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgbmV4dENlbGwzX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDRfdmVydGljYWwpIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgIW5leHRDZWxsM192ZXJ0aWNhbCAmJiAhbmV4dENlbGw0X3ZlcnRpY2FsKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghbmV4dENlbGwyX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDNfdmVydGljYWwgJiYgIW5leHRDZWxsNF92ZXJ0aWNhbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY2Fycmllci5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIGhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsNV9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw1X2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDVfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgICFuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNF9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDVfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGw1X2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGw1X2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNV9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBjYXJyaWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsNV92ZXJ0aWNhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNV92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV92ZXJ0aWNhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV92ZXJ0aWNhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV92ZXJ0aWNhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgIW5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV92ZXJ0aWNhbFxuICAgICAgKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGw1X3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsNV92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw1X3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pXG4pO1xuXG5jZWxscy5mb3JFYWNoKChjZWxsKSA9PlxuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgeE51bSA9IE51bWJlcihjZWxsLmRhdGFzZXQueFZhbHVlKTtcbiAgICBjb25zdCB5TnVtID0gTnVtYmVyKGNlbGwuZGF0YXNldC55VmFsdWUpO1xuXG4gICAgY29uc3QgbmV4dENlbGwyX2hvcml6YW50YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtICsgMX0ke3lOdW19XCJdYFxuICAgICk7XG4gICAgY29uc3QgbmV4dENlbGwzX2hvcml6YW50YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtICsgMn0ke3lOdW19XCJdYFxuICAgICk7XG4gICAgY29uc3QgbmV4dENlbGw0X2hvcml6YW50YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtICsgM30ke3lOdW19XCJdYFxuICAgICk7XG4gICAgY29uc3QgbmV4dENlbGw1X2hvcml6YW50YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtICsgNH0ke3lOdW19XCJdYFxuICAgICk7XG5cbiAgICBjb25zdCBuZXh0Q2VsbDJfdmVydGljYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtfSR7eU51bSArIDF9XCJdYFxuICAgICk7XG4gICAgY29uc3QgbmV4dENlbGwzX3ZlcnRpY2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bX0ke3lOdW0gKyAyfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsNF92ZXJ0aWNhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW19JHt5TnVtICsgM31cIl1gXG4gICAgKTtcbiAgICBjb25zdCBuZXh0Q2VsbDVfdmVydGljYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtfSR7eU51bSArIDR9XCJdYFxuICAgICk7XG5cbiAgICBpZiAoXG4gICAgICBwYXRyb2xCb2F0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFncmlkLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwib3V0c2lkZS1ncmlkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgICFjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsMl9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBwYXRyb2xCb2F0LmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBwYXRyb2xCb2F0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInBsYXllci1wYXRyb2wtYm9hdFwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLXBhdHJvbC1ib2F0XCIpO1xuICAgICAgfVxuICAgICAgaWYgKChwYXRyb2xCb2F0LmRpc2FibGVkID09PSB0cnVlKSYmKHN1Ym1hcmluZS5kaXNhYmxlZCA9PT0gdHJ1ZSkmJihkZXN0cm95ZXIuZGlzYWJsZWQgPT09IHRydWUpJiYoYmF0dGxlc2hpcC5kaXNhYmxlZCA9PT0gdHJ1ZSkmJihjYXJyaWVyLmRpc2FibGVkID09PSB0cnVlKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImFsbCBidXR0b25zIGhhdmUgYmVlbiBjbGlja2VkXCIpO1xuICAgICAgICBib2F0U2VsZWN0aW9uU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgYm9hdE9yaWVudGF0aW9uU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgdGFibGVDbGFzcy5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gICAgICAgIGNvbXB1dGVyU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgcGF0cm9sQm9hdC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIHZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIWdyaWQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJvdXRzaWRlLWdyaWRcIilcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgIWNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwyX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBwYXRyb2xCb2F0LmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBwYXRyb2xCb2F0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInBsYXllci1wYXRyb2wtYm9hdFwiKTtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItcGF0cm9sLWJvYXRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIHBhdHJvbEJvYXQuZGlzYWJsZWQgPT09IHRydWUgJiZcbiAgICAgICAgc3VibWFyaW5lLmRpc2FibGVkID09PSB0cnVlICYmXG4gICAgICAgIGRlc3Ryb3llci5kaXNhYmxlZCA9PT0gdHJ1ZSAmJlxuICAgICAgICBiYXR0bGVzaGlwLmRpc2FibGVkID09PSB0cnVlICYmXG4gICAgICAgIGNhcnJpZXIuZGlzYWJsZWQgPT09IHRydWVcbiAgICAgICkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImFsbCBidXR0b25zIGhhdmUgYmVlbiBjbGlja2VkXCIpO1xuICAgICAgICBib2F0U2VsZWN0aW9uU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgYm9hdE9yaWVudGF0aW9uU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgdGFibGVDbGFzcy5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gICAgICAgIGNvbXB1dGVyU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBzdWJtYXJpbmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICBob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIWdyaWQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJvdXRzaWRlLWdyaWRcIilcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgIWNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwyX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwzX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIHN1Ym1hcmluZS5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgc3VibWFyaW5lLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInBsYXllci1zdWJtYXJpbmVcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1zdWJtYXJpbmVcIik7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1zdWJtYXJpbmVcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIHBhdHJvbEJvYXQuZGlzYWJsZWQgPT09IHRydWUgJiZcbiAgICAgICAgc3VibWFyaW5lLmRpc2FibGVkID09PSB0cnVlICYmXG4gICAgICAgIGRlc3Ryb3llci5kaXNhYmxlZCA9PT0gdHJ1ZSAmJlxuICAgICAgICBiYXR0bGVzaGlwLmRpc2FibGVkID09PSB0cnVlICYmXG4gICAgICAgIGNhcnJpZXIuZGlzYWJsZWQgPT09IHRydWVcbiAgICAgICkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImFsbCBidXR0b25zIGhhdmUgYmVlbiBjbGlja2VkXCIpO1xuICAgICAgICBib2F0U2VsZWN0aW9uU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgYm9hdE9yaWVudGF0aW9uU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgdGFibGVDbGFzcy5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gICAgICAgIGNvbXB1dGVyU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBzdWJtYXJpbmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICB2ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFncmlkLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwib3V0c2lkZS1ncmlkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgICFjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDNfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhZ3JpZC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcIm91dHNpZGUtZ3JpZFwiKVxuICAgICAgKSB7XG4gICAgICAgIHN1Ym1hcmluZS5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgc3VibWFyaW5lLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInBsYXllci1zdWJtYXJpbmVcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLXN1Ym1hcmluZVwiKTtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItc3VibWFyaW5lXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBwYXRyb2xCb2F0LmRpc2FibGVkID09PSB0cnVlICYmXG4gICAgICAgIHN1Ym1hcmluZS5kaXNhYmxlZCA9PT0gdHJ1ZSAmJlxuICAgICAgICBkZXN0cm95ZXIuZGlzYWJsZWQgPT09IHRydWUgJiZcbiAgICAgICAgYmF0dGxlc2hpcC5kaXNhYmxlZCA9PT0gdHJ1ZSAmJlxuICAgICAgICBjYXJyaWVyLmRpc2FibGVkID09PSB0cnVlXG4gICAgICApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJhbGwgYnV0dG9ucyBoYXZlIGJlZW4gY2xpY2tlZFwiKTtcbiAgICAgICAgYm9hdFNlbGVjdGlvblNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgIGJvYXRPcmllbnRhdGlvblNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgIHRhYmxlQ2xhc3MuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICAgICAgICBjb21wdXRlclNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgZGVzdHJveWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFncmlkLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwib3V0c2lkZS1ncmlkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgICFjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsMl9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsM19ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBkZXN0cm95ZXIuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGRlc3Ryb3llci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItZGVzdHJveWVyXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItZGVzdHJveWVyXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItZGVzdHJveWVyXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBwYXRyb2xCb2F0LmRpc2FibGVkID09PSB0cnVlICYmXG4gICAgICAgIHN1Ym1hcmluZS5kaXNhYmxlZCA9PT0gdHJ1ZSAmJlxuICAgICAgICBkZXN0cm95ZXIuZGlzYWJsZWQgPT09IHRydWUgJiZcbiAgICAgICAgYmF0dGxlc2hpcC5kaXNhYmxlZCA9PT0gdHJ1ZSAmJlxuICAgICAgICBjYXJyaWVyLmRpc2FibGVkID09PSB0cnVlXG4gICAgICApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJhbGwgYnV0dG9ucyBoYXZlIGJlZW4gY2xpY2tlZFwiKTtcbiAgICAgICAgYm9hdFNlbGVjdGlvblNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgIGJvYXRPcmllbnRhdGlvblNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgIHRhYmxlQ2xhc3MuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICAgICAgICBjb21wdXRlclNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgZGVzdHJveWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhZ3JpZC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcIm91dHNpZGUtZ3JpZFwiKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICAhY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDJfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwzX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBkZXN0cm95ZXIuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGRlc3Ryb3llci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItZGVzdHJveWVyXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1kZXN0cm95ZXJcIik7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWRlc3Ryb3llclwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgcGF0cm9sQm9hdC5kaXNhYmxlZCA9PT0gdHJ1ZSAmJlxuICAgICAgICBzdWJtYXJpbmUuZGlzYWJsZWQgPT09IHRydWUgJiZcbiAgICAgICAgZGVzdHJveWVyLmRpc2FibGVkID09PSB0cnVlICYmXG4gICAgICAgIGJhdHRsZXNoaXAuZGlzYWJsZWQgPT09IHRydWUgJiZcbiAgICAgICAgY2Fycmllci5kaXNhYmxlZCA9PT0gdHJ1ZVxuICAgICAgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWxsIGJ1dHRvbnMgaGF2ZSBiZWVuIGNsaWNrZWRcIik7XG4gICAgICAgIGJvYXRTZWxlY3Rpb25TZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICBib2F0T3JpZW50YXRpb25TZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICB0YWJsZUNsYXNzLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgICAgICAgY29tcHV0ZXJTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGJhdHRsZXNoaXAuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICBob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIWdyaWQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJvdXRzaWRlLWdyaWRcIilcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgIWNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwyX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwzX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhZ3JpZC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcIm91dHNpZGUtZ3JpZFwiKVxuICAgICAgKSB7XG4gICAgICAgIGJhdHRsZXNoaXAuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGJhdHRsZXNoaXAuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWJhdHRsZXNoaXBcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1iYXR0bGVzaGlwXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItYmF0dGxlc2hpcFwiKTtcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWJhdHRsZXNoaXBcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIHBhdHJvbEJvYXQuZGlzYWJsZWQgPT09IHRydWUgJiZcbiAgICAgICAgc3VibWFyaW5lLmRpc2FibGVkID09PSB0cnVlICYmXG4gICAgICAgIGRlc3Ryb3llci5kaXNhYmxlZCA9PT0gdHJ1ZSAmJlxuICAgICAgICBiYXR0bGVzaGlwLmRpc2FibGVkID09PSB0cnVlICYmXG4gICAgICAgIGNhcnJpZXIuZGlzYWJsZWQgPT09IHRydWVcbiAgICAgICkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImFsbCBidXR0b25zIGhhdmUgYmVlbiBjbGlja2VkXCIpO1xuICAgICAgICBib2F0U2VsZWN0aW9uU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgYm9hdE9yaWVudGF0aW9uU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgdGFibGVDbGFzcy5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gICAgICAgIGNvbXB1dGVyU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBiYXR0bGVzaGlwLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhZ3JpZC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcIm91dHNpZGUtZ3JpZFwiKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICAhY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDJfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwzX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsNF92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFncmlkLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwib3V0c2lkZS1ncmlkXCIpXG4gICAgICApIHtcbiAgICAgICAgYmF0dGxlc2hpcC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgYmF0dGxlc2hpcC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItYmF0dGxlc2hpcFwiKTtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItYmF0dGxlc2hpcFwiKTtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItYmF0dGxlc2hpcFwiKTtcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItYmF0dGxlc2hpcFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgcGF0cm9sQm9hdC5kaXNhYmxlZCA9PT0gdHJ1ZSAmJlxuICAgICAgICBzdWJtYXJpbmUuZGlzYWJsZWQgPT09IHRydWUgJiZcbiAgICAgICAgZGVzdHJveWVyLmRpc2FibGVkID09PSB0cnVlICYmXG4gICAgICAgIGJhdHRsZXNoaXAuZGlzYWJsZWQgPT09IHRydWUgJiZcbiAgICAgICAgY2Fycmllci5kaXNhYmxlZCA9PT0gdHJ1ZVxuICAgICAgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWxsIGJ1dHRvbnMgaGF2ZSBiZWVuIGNsaWNrZWRcIik7XG4gICAgICAgIGJvYXRTZWxlY3Rpb25TZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICBib2F0T3JpZW50YXRpb25TZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICB0YWJsZUNsYXNzLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgICAgICAgY29tcHV0ZXJTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGNhcnJpZXIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICBob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIWdyaWQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJvdXRzaWRlLWdyaWRcIilcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgIWNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwyX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwzX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGw1X2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIGNhcnJpZXIuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGNhcnJpZXIuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWNhcnJpZXJcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1jYXJyaWVyXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItY2FycmllclwiKTtcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWNhcnJpZXJcIik7XG4gICAgICAgIG5leHRDZWxsNV9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGw1X2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1jYXJyaWVyXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBwYXRyb2xCb2F0LmRpc2FibGVkID09PSB0cnVlICYmXG4gICAgICAgIHN1Ym1hcmluZS5kaXNhYmxlZCA9PT0gdHJ1ZSAmJlxuICAgICAgICBkZXN0cm95ZXIuZGlzYWJsZWQgPT09IHRydWUgJiZcbiAgICAgICAgYmF0dGxlc2hpcC5kaXNhYmxlZCA9PT0gdHJ1ZSAmJlxuICAgICAgICBjYXJyaWVyLmRpc2FibGVkID09PSB0cnVlXG4gICAgICApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJhbGwgYnV0dG9ucyBoYXZlIGJlZW4gY2xpY2tlZFwiKTtcbiAgICAgICAgYm9hdFNlbGVjdGlvblNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgIGJvYXRPcmllbnRhdGlvblNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgIHRhYmxlQ2xhc3MuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICAgICAgICBjb21wdXRlclNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY2Fycmllci5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIHZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIWdyaWQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJvdXRzaWRlLWdyaWRcIilcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgIWNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwyX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsM192ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDRfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGw1X3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBjYXJyaWVyLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBjYXJyaWVyLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInBsYXllci1jYXJyaWVyXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1jYXJyaWVyXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1jYXJyaWVyXCIpO1xuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1jYXJyaWVyXCIpO1xuICAgICAgICBuZXh0Q2VsbDVfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDVfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1jYXJyaWVyXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBwYXRyb2xCb2F0LmRpc2FibGVkID09PSB0cnVlICYmXG4gICAgICAgIHN1Ym1hcmluZS5kaXNhYmxlZCA9PT0gdHJ1ZSAmJlxuICAgICAgICBkZXN0cm95ZXIuZGlzYWJsZWQgPT09IHRydWUgJiZcbiAgICAgICAgYmF0dGxlc2hpcC5kaXNhYmxlZCA9PT0gdHJ1ZSAmJlxuICAgICAgICBjYXJyaWVyLmRpc2FibGVkID09PSB0cnVlXG4gICAgICApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJhbGwgYnV0dG9ucyBoYXZlIGJlZW4gY2xpY2tlZFwiKTtcbiAgICAgICAgYm9hdFNlbGVjdGlvblNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgIGJvYXRPcmllbnRhdGlvblNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgIHRhYmxlQ2xhc3MuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICAgICAgICBjb21wdXRlclNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcGF0cm9sQm9hdC5kaXNhYmxlZCA9PT0gdHJ1ZSAmJlxuICAgICAgICBzdWJtYXJpbmUuZGlzYWJsZWQgPT09IHRydWUgJiZcbiAgICAgICAgZGVzdHJveWVyLmRpc2FibGVkID09PSB0cnVlICYmXG4gICAgICAgIGJhdHRsZXNoaXAuZGlzYWJsZWQgPT09IHRydWUgJiZcbiAgICAgICAgY2Fycmllci5kaXNhYmxlZCA9PT0gdHJ1ZVxuICAgICAgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWxsIGJvYXRzIGhhdmUgYmVlbiBwbGFjZWRcIik7XG4gICAgICB9XG4gICAgfVxuICB9KVxuKTtcblxuLy9vd2tyaW5nIG9uIGNvbXB1dGVyIGZ1bmN0aW9uYWxpdHlcbmZ1bmN0aW9uIHJhbmRvbU51bUJldHdlZW4obWluLCBtYXgpIHtcbiAgbGV0IG51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gIHJldHVybiBudW07XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVyT3JpZW50YXRpb24oKSB7XG4gIGxldCBjb21wdXRlck9yaWVudGF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgKyAxO1xuICBpZiAoY29tcHV0ZXJPcmllbnRhdGlvbiA9PT0gMSkge1xuICAgIHJldHVybiBcImhvcml6YW50YWxcIjtcbiAgfVxuICBpZiAoY29tcHV0ZXJPcmllbnRhdGlvbiA9PT0gMikge1xuICAgIHJldHVybiBcInZlcnRpY2FsXCI7XG4gIH1cbn1cblxuY29uc29sZS5sb2coY29tcHV0ZXJPcmllbnRhdGlvbigpKTtcblxubGV0IHVzZWROdW1iZXJzID0gW107XG5sZXQgdXNlZE51bWJlcnMyID0gW107XG5cbmNsYXNzIENvbXB1dGVyQm9hdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIG5hbWUsXG4gICAgb3JpZW50YXRpb25cbiAgICAvLyB4VmFsdWUsXG4gICAgLy8geVZhbHVlLFxuICAgIC8vIHN0YXJ0aW5nQ2VsbCxcbiAgICAvLyBuZXh0Q2VsbDIsXG4gICAgLy8gbmV4dENlbGwzLFxuICAgIC8vIG5leHRDZWxsNCxcbiAgICAvLyBuZXh0Q2VsbDVcbiAgKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm9yaWVudGF0aW9uID0gb3JpZW50YXRpb247XG4gICAgLy8gdGhpcy54VmFsdWUgPSByYW5kb21OdW1CZXR3ZWVuKDEsIDkpO1xuICAgIC8vIHRoaXMueVZhbHVlID0gcmFuZG9tTnVtQmV0d2VlbigxLCAxMCk7XG4gICAgLy8gdGhpcy5zdGFydGluZ0NlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIC8vICAgYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHt0aGlzLnhWYWx1ZX0ke3RoaXMueVZhbHVlfVwiXWBcbiAgICAvLyApO1xuICAgIC8vIHRoaXMubmV4dENlbGwyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAvLyAgIGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7dGhpcy54VmFsdWUgKyAxfSR7dGhpcy55VmFsdWV9XCJdYFxuICAgIC8vICk7XG4gICAgLy8gdGhpcy5uZXh0Q2VsbDMgPSBuZXh0Q2VsbDM7XG4gICAgLy8gdGhpcy5uZXh0Q2VsbDQgPSBuZXh0Q2VsbDQ7XG4gICAgLy8gdGhpcy5uZXh0Q2VsbDUgPSBuZXh0Q2VsbDU7XG4gIH1cbiAgY29tcHV0ZXJDb2RlKCkge1xuICAgIGlmICh0aGlzLm5hbWUgPT09IFwicGF0cm9sQm9hdFwiICYmIHRoaXMub3JpZW50YXRpb24gPT09IFwiaG9yaXphbnRhbFwiKSB7XG4gICAgICBsZXQgeCA9IHJhbmRvbU51bUJldHdlZW4oMSwgOSk7XG4gICAgICBsZXQgeSA9IHJhbmRvbU51bUJldHdlZW4oMSwgMTApO1xuICAgICAgbGV0IG5leHRDZWxsMj0geCsxO1xuICAgICAgbGV0IHhUb1N0cmluZz0geC50b1N0cmluZygpOyAgICAgIFxuICAgICAgbGV0IHlUb1N0cmluZz0geS50b1N0cmluZygpO1xuICAgICAgbGV0IG5leHRDZWxsMlN0cmluZz0gbmV4dENlbGwyLnRvU3RyaW5nKCk7ICAgICAgXG4gICAgICBsZXQgY2VsbENvZGU9IHhUb1N0cmluZyArIHlUb1N0cmluZzsgIFxuICAgICAgbGV0IG5leHRDZWxsMkNvZGU9IG5leHRDZWxsMlN0cmluZyArIHlUb1N0cmluZztcbiAgICAgIGlmKHVzZWROdW1iZXJzLmluY2x1ZGVzKGNlbGxDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDJDb2RlKSl7XG4gICAgICAgIHRoaXMuY29tcHV0ZXJDb2RlKCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgbGV0IGFjdHVhbENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7Y2VsbENvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGwyQ29kZX1cIl1gKTtcbiAgICAgICAgYWN0dWFsQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbENlbGwuY2xhc3NMaXN0LmFkZChcInBhdHJvbC1ib2F0XCIpO1xuICAgICAgICBhY3R1YWxDZWxsLnRleHRDb250ZW50PSBcInBcIjtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwyLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwyLmNsYXNzTGlzdC5hZGQoXCJwYXRyb2wtYm9hdFwiKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChjZWxsQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGwyQ29kZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLm5hbWUgPT09IFwic3VibWFyaW5lXCIgJiYgdGhpcy5vcmllbnRhdGlvbiA9PT0gXCJob3JpemFudGFsXCIpIHtcbiAgICAgIGxldCB4ID0gcmFuZG9tTnVtQmV0d2VlbigxLCA4KTtcbiAgICAgIGxldCB5ID0gcmFuZG9tTnVtQmV0d2VlbigxLCAxMCk7XG4gICAgICBsZXQgbmV4dENlbGwyPSB4KzE7XG4gICAgICBsZXQgbmV4dENlbGwzPSB4KzI7XG4gICAgICBsZXQgeFRvU3RyaW5nPSB4LnRvU3RyaW5nKCk7ICAgICAgXG4gICAgICBsZXQgeVRvU3RyaW5nPSB5LnRvU3RyaW5nKCk7XG4gICAgICBsZXQgbmV4dENlbGwyU3RyaW5nPSBuZXh0Q2VsbDIudG9TdHJpbmcoKTsgICAgICBcbiAgICAgIGxldCBuZXh0Q2VsbDNTdHJpbmc9IG5leHRDZWxsMy50b1N0cmluZygpOyAgICAgXG4gICAgICBsZXQgY2VsbENvZGU9IHhUb1N0cmluZyArIHlUb1N0cmluZzsgIFxuICAgICAgbGV0IG5leHRDZWxsMkNvZGU9IG5leHRDZWxsMlN0cmluZyArIHlUb1N0cmluZzsgXG4gICAgICBsZXQgbmV4dENlbGwzQ29kZT0gbmV4dENlbGwzU3RyaW5nICsgeVRvU3RyaW5nOyBcbiAgICAgIGlmKHVzZWROdW1iZXJzLmluY2x1ZGVzKGNlbGxDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDJDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDNDb2RlKSl7XG4gICAgICAgIHRoaXMuY29tcHV0ZXJDb2RlKCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgbGV0IGFjdHVhbENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7Y2VsbENvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGwyQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDNDb2RlfVwiXWApO1xuICAgICAgICBhY3R1YWxDZWxsLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsQ2VsbC5jbGFzc0xpc3QuYWRkKFwic3VibWFyaW5lXCIpO1xuICAgICAgICBhY3R1YWxDZWxsLnRleHRDb250ZW50PSBcInNcIjtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwyLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwyLmNsYXNzTGlzdC5hZGQoXCJzdWJtYXJpbmVcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMy5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMy5jbGFzc0xpc3QuYWRkKFwic3VibWFyaW5lXCIpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKGNlbGxDb2RlKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChuZXh0Q2VsbDJDb2RlKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChuZXh0Q2VsbDNDb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMubmFtZSA9PT0gXCJkZXN0cm95ZXJcIiAmJiB0aGlzLm9yaWVudGF0aW9uID09PSBcImhvcml6YW50YWxcIikge1xuICAgICAgbGV0IHggPSByYW5kb21OdW1CZXR3ZWVuKDEsIDgpO1xuICAgICAgbGV0IHkgPSByYW5kb21OdW1CZXR3ZWVuKDEsIDEwKTtcbiAgICAgIGxldCBuZXh0Q2VsbDI9IHgrMTtcbiAgICAgIGxldCBuZXh0Q2VsbDM9IHgrMjtcbiAgICAgIGxldCB4VG9TdHJpbmc9IHgudG9TdHJpbmcoKTsgICAgICBcbiAgICAgIGxldCB5VG9TdHJpbmc9IHkudG9TdHJpbmcoKTtcbiAgICAgIGxldCBuZXh0Q2VsbDJTdHJpbmc9IG5leHRDZWxsMi50b1N0cmluZygpOyAgICAgIFxuICAgICAgbGV0IG5leHRDZWxsM1N0cmluZz0gbmV4dENlbGwzLnRvU3RyaW5nKCk7ICAgICBcbiAgICAgIGxldCBjZWxsQ29kZT0geFRvU3RyaW5nICsgeVRvU3RyaW5nOyAgXG4gICAgICBsZXQgbmV4dENlbGwyQ29kZT0gbmV4dENlbGwyU3RyaW5nICsgeVRvU3RyaW5nOyBcbiAgICAgIGxldCBuZXh0Q2VsbDNDb2RlPSBuZXh0Q2VsbDNTdHJpbmcgKyB5VG9TdHJpbmc7IFxuICAgICAgaWYodXNlZE51bWJlcnMuaW5jbHVkZXMoY2VsbENvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsMkNvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsM0NvZGUpKXtcbiAgICAgICAgdGhpcy5jb21wdXRlckNvZGUoKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBsZXQgYWN0dWFsQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtjZWxsQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDJDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGwzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsM0NvZGV9XCJdYCk7XG4gICAgICAgIGFjdHVhbENlbGwuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxDZWxsLmNsYXNzTGlzdC5hZGQoXCJkZXN0cm95ZXJcIik7XG4gICAgICAgIGFjdHVhbENlbGwudGV4dENvbnRlbnQ9IFwiZFwiO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDIuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDIuY2xhc3NMaXN0LmFkZChcImRlc3Ryb3llclwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwzLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwzLmNsYXNzTGlzdC5hZGQoXCJkZXN0cm95ZXJcIik7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2goY2VsbENvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsMkNvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsM0NvZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5uYW1lID09PSBcImJhdHRsZXNoaXBcIiAmJiB0aGlzLm9yaWVudGF0aW9uID09PSBcImhvcml6YW50YWxcIikge1xuICAgICAgbGV0IHggPSByYW5kb21OdW1CZXR3ZWVuKDEsIDcpO1xuICAgICAgbGV0IHkgPSByYW5kb21OdW1CZXR3ZWVuKDEsIDEwKTtcbiAgICAgIGxldCBuZXh0Q2VsbDI9IHgrMTtcbiAgICAgIGxldCBuZXh0Q2VsbDM9IHgrMjtcbiAgICAgIGxldCBuZXh0Q2VsbDQ9IHgrMztcbiAgICAgIGxldCB4VG9TdHJpbmc9IHgudG9TdHJpbmcoKTsgICAgICBcbiAgICAgIGxldCB5VG9TdHJpbmc9IHkudG9TdHJpbmcoKTtcbiAgICAgIGxldCBuZXh0Q2VsbDJTdHJpbmc9IG5leHRDZWxsMi50b1N0cmluZygpOyAgICAgIFxuICAgICAgbGV0IG5leHRDZWxsM1N0cmluZz0gbmV4dENlbGwzLnRvU3RyaW5nKCk7ICAgICBcbiAgICAgIGxldCBuZXh0Q2VsbDRTdHJpbmc9IG5leHRDZWxsNC50b1N0cmluZygpOyAgICAgXG4gICAgICBsZXQgY2VsbENvZGU9IHhUb1N0cmluZyArIHlUb1N0cmluZzsgIFxuICAgICAgbGV0IG5leHRDZWxsMkNvZGU9IG5leHRDZWxsMlN0cmluZyArIHlUb1N0cmluZzsgXG4gICAgICBsZXQgbmV4dENlbGwzQ29kZSA9IG5leHRDZWxsM1N0cmluZyArIHlUb1N0cmluZztcbiAgICAgIGxldCBuZXh0Q2VsbDRDb2RlID0gbmV4dENlbGw0U3RyaW5nICsgeVRvU3RyaW5nOyBcbiAgICAgIGlmKHVzZWROdW1iZXJzLmluY2x1ZGVzKGNlbGxDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDJDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDNDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDRDb2RlKSl7XG4gICAgICAgIHRoaXMuY29tcHV0ZXJDb2RlKCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgbGV0IGFjdHVhbENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7Y2VsbENvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGwyQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDNDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGw0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsNENvZGV9XCJdYCk7XG4gICAgICAgIGFjdHVhbENlbGwuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxDZWxsLmNsYXNzTGlzdC5hZGQoXCJiYXR0bGVzaGlwXCIpO1xuICAgICAgICBhY3R1YWxDZWxsLnRleHRDb250ZW50PSBcImJcIjtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwyLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwyLmNsYXNzTGlzdC5hZGQoXCJiYXR0bGVzaGlwXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDMuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDMuY2xhc3NMaXN0LmFkZChcImJhdHRsZXNoaXBcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsNC5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsNC5jbGFzc0xpc3QuYWRkKFwiYmF0dGxlc2hpcFwiKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChjZWxsQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGwyQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGwzQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGw0Q29kZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLm5hbWUgPT09IFwiY2FycmllclwiICYmIHRoaXMub3JpZW50YXRpb24gPT09IFwiaG9yaXphbnRhbFwiKSB7XG4gICAgICBsZXQgeCA9IHJhbmRvbU51bUJldHdlZW4oMSwgNik7XG4gICAgICBsZXQgeSA9IHJhbmRvbU51bUJldHdlZW4oMSwgMTApO1xuICAgICAgbGV0IG5leHRDZWxsMj0geCsxO1xuICAgICAgbGV0IG5leHRDZWxsMz0geCsyO1xuICAgICAgbGV0IG5leHRDZWxsND0geCszO1xuICAgICAgbGV0IG5leHRDZWxsNT0geCs0O1xuICAgICAgbGV0IHhUb1N0cmluZz0geC50b1N0cmluZygpOyAgICAgIFxuICAgICAgbGV0IHlUb1N0cmluZz0geS50b1N0cmluZygpO1xuICAgICAgbGV0IG5leHRDZWxsMlN0cmluZz0gbmV4dENlbGwyLnRvU3RyaW5nKCk7ICAgICAgXG4gICAgICBsZXQgbmV4dENlbGwzU3RyaW5nPSBuZXh0Q2VsbDMudG9TdHJpbmcoKTsgICAgIFxuICAgICAgbGV0IG5leHRDZWxsNFN0cmluZz0gbmV4dENlbGw0LnRvU3RyaW5nKCk7ICAgICBcbiAgICAgIGxldCBuZXh0Q2VsbDVTdHJpbmc9IG5leHRDZWxsNS50b1N0cmluZygpOyAgICAgXG4gICAgICBsZXQgY2VsbENvZGU9IHhUb1N0cmluZyArIHlUb1N0cmluZzsgIFxuICAgICAgbGV0IG5leHRDZWxsMkNvZGU9IG5leHRDZWxsMlN0cmluZyArIHlUb1N0cmluZzsgXG4gICAgICBsZXQgbmV4dENlbGwzQ29kZSA9IG5leHRDZWxsM1N0cmluZyArIHlUb1N0cmluZztcbiAgICAgIGxldCBuZXh0Q2VsbDRDb2RlID0gbmV4dENlbGw0U3RyaW5nICsgeVRvU3RyaW5nO1xuICAgICAgbGV0IG5leHRDZWxsNUNvZGUgPSBuZXh0Q2VsbDVTdHJpbmcgKyB5VG9TdHJpbmc7IFxuICAgICAgaWYodXNlZE51bWJlcnMuaW5jbHVkZXMoY2VsbENvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsMkNvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsM0NvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsNENvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsNUNvZGUpKXtcbiAgICAgICAgdGhpcy5jb21wdXRlckNvZGUoKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBsZXQgYWN0dWFsQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtjZWxsQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDJDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGwzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsM0NvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGw0Q29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsNSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDVDb2RlfVwiXWApO1xuICAgICAgICBhY3R1YWxDZWxsLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY2FycmllclwiKTtcbiAgICAgICAgYWN0dWFsQ2VsbC50ZXh0Q29udGVudD0gXCJjXCI7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMi5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMi5jbGFzc0xpc3QuYWRkKFwiY2FycmllclwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwzLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwzLmNsYXNzTGlzdC5hZGQoXCJjYXJyaWVyXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDQuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDQuY2xhc3NMaXN0LmFkZChcImNhcnJpZXJcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsNS5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsNS5jbGFzc0xpc3QuYWRkKFwiY2FycmllclwiKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChjZWxsQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGwyQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGwzQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGw0Q29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGw1Q29kZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLm5hbWUgPT09IFwicGF0cm9sQm9hdFwiICYmIHRoaXMub3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgbGV0IHggPSByYW5kb21OdW1CZXR3ZWVuKDEsIDEwKTtcbiAgICAgIGxldCB5ID0gcmFuZG9tTnVtQmV0d2VlbigxLCA5KTtcbiAgICAgIGxldCBuZXh0Q2VsbDIgPSB5ICsgMTtcbiAgICAgIGxldCB4VG9TdHJpbmcgPSB4LnRvU3RyaW5nKCk7XG4gICAgICBsZXQgeVRvU3RyaW5nID0geS50b1N0cmluZygpO1xuICAgICAgbGV0IG5leHRDZWxsMlN0cmluZyA9IG5leHRDZWxsMi50b1N0cmluZygpO1xuICAgICAgbGV0IGNlbGxDb2RlID0geFRvU3RyaW5nICsgeVRvU3RyaW5nO1xuICAgICAgbGV0IG5leHRDZWxsMkNvZGUgPSB4VG9TdHJpbmcgKyBuZXh0Q2VsbDJTdHJpbmc7XG4gICAgICBpZih1c2VkTnVtYmVycy5pbmNsdWRlcyhjZWxsQ29kZSkgfHwgdXNlZE51bWJlcnMuaW5jbHVkZXMobmV4dENlbGwyQ29kZSkpe1xuICAgICAgICB0aGlzLmNvbXB1dGVyQ29kZSgpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGxldCBhY3R1YWxDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke2NlbGxDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGwyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsMkNvZGV9XCJdYCk7XG4gICAgICAgIGFjdHVhbENlbGwuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxDZWxsLmNsYXNzTGlzdC5hZGQoXCJwYXRyb2wtYm9hdFwiKTtcbiAgICAgICAgYWN0dWFsQ2VsbC50ZXh0Q29udGVudD0gXCJwXCI7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMi5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMi5jbGFzc0xpc3QuYWRkKFwicGF0cm9sLWJvYXRcIik7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2goY2VsbENvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsMkNvZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5uYW1lID09PSBcInN1Ym1hcmluZVwiICYmIHRoaXMub3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgbGV0IHggPSByYW5kb21OdW1CZXR3ZWVuKDEsIDEwKTtcbiAgICAgIGxldCB5ID0gcmFuZG9tTnVtQmV0d2VlbigxLCA4KTtcbiAgICAgIGxldCBuZXh0Q2VsbDI9IHkrMTtcbiAgICAgIGxldCBuZXh0Q2VsbDM9IHkrMjtcbiAgICAgIGxldCB4VG9TdHJpbmc9IHgudG9TdHJpbmcoKTsgICAgICBcbiAgICAgIGxldCB5VG9TdHJpbmc9IHkudG9TdHJpbmcoKTtcbiAgICAgIGxldCBuZXh0Q2VsbDJTdHJpbmc9IG5leHRDZWxsMi50b1N0cmluZygpOyAgICAgIFxuICAgICAgbGV0IG5leHRDZWxsM1N0cmluZz0gbmV4dENlbGwzLnRvU3RyaW5nKCk7ICAgICBcbiAgICAgIGxldCBjZWxsQ29kZT0geFRvU3RyaW5nICsgeVRvU3RyaW5nOyAgXG4gICAgICBsZXQgbmV4dENlbGwyQ29kZT0geFRvU3RyaW5nICsgbmV4dENlbGwyU3RyaW5nOyBcbiAgICAgIGxldCBuZXh0Q2VsbDNDb2RlPSB4VG9TdHJpbmcgKyBuZXh0Q2VsbDNTdHJpbmc7IFxuICAgICAgaWYodXNlZE51bWJlcnMuaW5jbHVkZXMoY2VsbENvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsMkNvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsM0NvZGUpKXtcbiAgICAgICAgdGhpcy5jb21wdXRlckNvZGUoKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBsZXQgYWN0dWFsQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtjZWxsQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDJDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGwzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsM0NvZGV9XCJdYCk7XG4gICAgICAgIGFjdHVhbENlbGwuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxDZWxsLmNsYXNzTGlzdC5hZGQoXCJzdWJtYXJpbmVcIik7XG4gICAgICAgIGFjdHVhbENlbGwudGV4dENvbnRlbnQ9IFwic1wiO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDIuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDIuY2xhc3NMaXN0LmFkZChcInN1Ym1hcmluZVwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwzLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwzLmNsYXNzTGlzdC5hZGQoXCJzdWJtYXJpbmVcIik7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2goY2VsbENvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsMkNvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsM0NvZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5uYW1lID09PSBcImRlc3Ryb3llclwiICYmIHRoaXMub3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgbGV0IHggPSByYW5kb21OdW1CZXR3ZWVuKDEsIDEwKTtcbiAgICAgIGxldCB5ID0gcmFuZG9tTnVtQmV0d2VlbigxLCA4KTtcbiAgICAgIGxldCBuZXh0Q2VsbDI9IHkrMTtcbiAgICAgIGxldCBuZXh0Q2VsbDM9IHkrMjtcbiAgICAgIGxldCB4VG9TdHJpbmc9IHgudG9TdHJpbmcoKTsgICAgICBcbiAgICAgIGxldCB5VG9TdHJpbmc9IHkudG9TdHJpbmcoKTtcbiAgICAgIGxldCBuZXh0Q2VsbDJTdHJpbmc9IG5leHRDZWxsMi50b1N0cmluZygpOyAgICAgIFxuICAgICAgbGV0IG5leHRDZWxsM1N0cmluZz0gbmV4dENlbGwzLnRvU3RyaW5nKCk7ICAgICBcbiAgICAgIGxldCBjZWxsQ29kZT0geFRvU3RyaW5nICsgeVRvU3RyaW5nOyAgXG4gICAgICBsZXQgbmV4dENlbGwyQ29kZT0geFRvU3RyaW5nICsgbmV4dENlbGwyU3RyaW5nOyBcbiAgICAgIGxldCBuZXh0Q2VsbDNDb2RlPSB4VG9TdHJpbmcgKyBuZXh0Q2VsbDNTdHJpbmc7IFxuICAgICAgaWYodXNlZE51bWJlcnMuaW5jbHVkZXMoY2VsbENvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsMkNvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsM0NvZGUpKXtcbiAgICAgICAgdGhpcy5jb21wdXRlckNvZGUoKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBsZXQgYWN0dWFsQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtjZWxsQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDJDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGwzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsM0NvZGV9XCJdYCk7XG4gICAgICAgIGFjdHVhbENlbGwuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxDZWxsLmNsYXNzTGlzdC5hZGQoXCJkZXN0cm95ZXJcIik7XG4gICAgICAgIGFjdHVhbENlbGwudGV4dENvbnRlbnQ9IFwiZFwiO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDIuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDIuY2xhc3NMaXN0LmFkZChcImRlc3Ryb3llclwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwzLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwzLmNsYXNzTGlzdC5hZGQoXCJkZXN0cm95ZXJcIik7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2goY2VsbENvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsMkNvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsM0NvZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5uYW1lID09PSBcImJhdHRsZXNoaXBcIiAmJiB0aGlzLm9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGxldCB4ID0gcmFuZG9tTnVtQmV0d2VlbigxLCAxMCk7XG4gICAgICBsZXQgeSA9IHJhbmRvbU51bUJldHdlZW4oMSwgNyk7XG4gICAgICBsZXQgbmV4dENlbGwyPSB5KzE7XG4gICAgICBsZXQgbmV4dENlbGwzPSB5KzI7XG4gICAgICBsZXQgbmV4dENlbGw0PSB5KzM7XG4gICAgICBsZXQgeFRvU3RyaW5nPSB4LnRvU3RyaW5nKCk7ICAgICAgXG4gICAgICBsZXQgeVRvU3RyaW5nPSB5LnRvU3RyaW5nKCk7XG4gICAgICBsZXQgbmV4dENlbGwyU3RyaW5nPSBuZXh0Q2VsbDIudG9TdHJpbmcoKTsgICAgICBcbiAgICAgIGxldCBuZXh0Q2VsbDNTdHJpbmc9IG5leHRDZWxsMy50b1N0cmluZygpOyAgICAgXG4gICAgICBsZXQgbmV4dENlbGw0U3RyaW5nPSBuZXh0Q2VsbDQudG9TdHJpbmcoKTsgICAgIFxuICAgICAgbGV0IGNlbGxDb2RlPSB4VG9TdHJpbmcgKyB5VG9TdHJpbmc7ICBcbiAgICAgIGxldCBuZXh0Q2VsbDJDb2RlID0geFRvU3RyaW5nICsgbmV4dENlbGwyU3RyaW5nOyBcbiAgICAgIGxldCBuZXh0Q2VsbDNDb2RlID0geFRvU3RyaW5nICsgbmV4dENlbGwzU3RyaW5nO1xuICAgICAgbGV0IG5leHRDZWxsNENvZGUgPSB4VG9TdHJpbmcgKyBuZXh0Q2VsbDRTdHJpbmc7IFxuICAgICAgaWYodXNlZE51bWJlcnMuaW5jbHVkZXMoY2VsbENvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsMkNvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsM0NvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsNENvZGUpKXtcbiAgICAgICAgdGhpcy5jb21wdXRlckNvZGUoKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBsZXQgYWN0dWFsQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtjZWxsQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDJDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGwzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsM0NvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGw0Q29kZX1cIl1gKTtcbiAgICAgICAgYWN0dWFsQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbENlbGwuY2xhc3NMaXN0LmFkZChcImJhdHRsZXNoaXBcIik7XG4gICAgICAgIGFjdHVhbENlbGwudGV4dENvbnRlbnQ9IFwiYlwiO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDIuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDIuY2xhc3NMaXN0LmFkZChcImJhdHRsZXNoaXBcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMy5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMy5jbGFzc0xpc3QuYWRkKFwiYmF0dGxlc2hpcFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGw0LmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGw0LmNsYXNzTGlzdC5hZGQoXCJiYXR0bGVzaGlwXCIpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKGNlbGxDb2RlKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChuZXh0Q2VsbDJDb2RlKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChuZXh0Q2VsbDNDb2RlKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChuZXh0Q2VsbDRDb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMubmFtZSA9PT0gXCJjYXJyaWVyXCIgJiYgdGhpcy5vcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBsZXQgeCA9IHJhbmRvbU51bUJldHdlZW4oMSwgMTApO1xuICAgICAgbGV0IHkgPSByYW5kb21OdW1CZXR3ZWVuKDEsIDYpO1xuICAgICAgbGV0IG5leHRDZWxsMj0geSsxO1xuICAgICAgbGV0IG5leHRDZWxsMz0geSsyO1xuICAgICAgbGV0IG5leHRDZWxsND0geSszO1xuICAgICAgbGV0IG5leHRDZWxsNT0geSs0O1xuICAgICAgbGV0IHhUb1N0cmluZz0geC50b1N0cmluZygpOyAgICAgIFxuICAgICAgbGV0IHlUb1N0cmluZz0geS50b1N0cmluZygpO1xuICAgICAgbGV0IG5leHRDZWxsMlN0cmluZz0gbmV4dENlbGwyLnRvU3RyaW5nKCk7ICAgICAgXG4gICAgICBsZXQgbmV4dENlbGwzU3RyaW5nPSBuZXh0Q2VsbDMudG9TdHJpbmcoKTsgICAgIFxuICAgICAgbGV0IG5leHRDZWxsNFN0cmluZz0gbmV4dENlbGw0LnRvU3RyaW5nKCk7ICAgICBcbiAgICAgIGxldCBuZXh0Q2VsbDVTdHJpbmc9IG5leHRDZWxsNS50b1N0cmluZygpOyAgICAgXG4gICAgICBsZXQgY2VsbENvZGU9IHhUb1N0cmluZyArIHlUb1N0cmluZzsgIFxuICAgICAgbGV0IG5leHRDZWxsMkNvZGUgPSB4VG9TdHJpbmcgKyBuZXh0Q2VsbDJTdHJpbmc7IFxuICAgICAgbGV0IG5leHRDZWxsM0NvZGUgPSB4VG9TdHJpbmcgKyBuZXh0Q2VsbDNTdHJpbmc7XG4gICAgICBsZXQgbmV4dENlbGw0Q29kZSA9IHhUb1N0cmluZyArIG5leHRDZWxsNFN0cmluZztcbiAgICAgIGxldCBuZXh0Q2VsbDVDb2RlID0geFRvU3RyaW5nICsgbmV4dENlbGw1U3RyaW5nOyBcbiAgICAgIGlmKHVzZWROdW1iZXJzLmluY2x1ZGVzKGNlbGxDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDJDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDNDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDRDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDVDb2RlKSl7XG4gICAgICAgIHRoaXMuY29tcHV0ZXJDb2RlKCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgbGV0IGFjdHVhbENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7Y2VsbENvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGwyQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDNDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGw0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsNENvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGw1Q29kZX1cIl1gKTtcbiAgICAgICAgYWN0dWFsQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbENlbGwuY2xhc3NMaXN0LmFkZChcImNhcnJpZXJcIik7XG4gICAgICAgIGFjdHVhbENlbGwudGV4dENvbnRlbnQ9IFwiY1wiO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDIuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDIuY2xhc3NMaXN0LmFkZChcImNhcnJpZXJcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMy5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMy5jbGFzc0xpc3QuYWRkKFwiY2FycmllclwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGw0LmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGw0LmNsYXNzTGlzdC5hZGQoXCJjYXJyaWVyXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDUuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDUuY2xhc3NMaXN0LmFkZChcImNhcnJpZXJcIik7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2goY2VsbENvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsMkNvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsM0NvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsNENvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsNUNvZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5sZXQgcGF0cm9sQm9hdENvbXB1dGVyID0gbmV3IENvbXB1dGVyQm9hdChcInBhdHJvbEJvYXRcIiwgY29tcHV0ZXJPcmllbnRhdGlvbigpKTtcbmxldCBzdWJtYXJpbmVDb21wdXRlciA9IG5ldyBDb21wdXRlckJvYXQoXCJzdWJtYXJpbmVcIiwgY29tcHV0ZXJPcmllbnRhdGlvbigpKTtcbmxldCBkZXN0cm95ZXJDb21wdXRlciA9IG5ldyBDb21wdXRlckJvYXQoXCJkZXN0cm95ZXJcIiwgY29tcHV0ZXJPcmllbnRhdGlvbigpKTtcbmxldCBiYXR0bGVzaGlwQ29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXJCb2F0KFwiYmF0dGxlc2hpcFwiLCBjb21wdXRlck9yaWVudGF0aW9uKCkpO1xubGV0IGNhcnJpZXJDb21wdXRlciA9IG5ldyBDb21wdXRlckJvYXQoXCJjYXJyaWVyXCIsIGNvbXB1dGVyT3JpZW50YXRpb24oKSk7XG5cbnBhdHJvbEJvYXRDb21wdXRlci5jb21wdXRlckNvZGUoKTtcbnN1Ym1hcmluZUNvbXB1dGVyLmNvbXB1dGVyQ29kZSgpO1xuZGVzdHJveWVyQ29tcHV0ZXIuY29tcHV0ZXJDb2RlKCk7XG5iYXR0bGVzaGlwQ29tcHV0ZXIuY29tcHV0ZXJDb2RlKCk7XG5jYXJyaWVyQ29tcHV0ZXIuY29tcHV0ZXJDb2RlKCk7XG5cbmNvbnN0IGNvbXB1dGVyQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbXB1dGVyLWNlbGxcIik7XG5cbmNvbXB1dGVyQ2VsbHMuZm9yRWFjaCgoY29tcHV0ZXJDZWxsKT0+e1xuICBjb21wdXRlckNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKT0+e1xuICAgIGNvbXB1dGVyQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItY2xpY2tlZFwiKTtcbiAgfSk7XG59KTtcblxuY29tcHV0ZXJDZWxscy5mb3JFYWNoKChjb21wdXRlckNlbGwpID0+IHtcbiAgY29tcHV0ZXJDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcbiAgICBjb21wdXRlckNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNvbXB1dGVyLWNsaWNrZWRcIik7XG4gIH0pO1xufSk7XG5cbmxldCBjb21wdXRlclRvdGFsVGFsbHk9IDA7XG5sZXQgcGF0cm9sQm9hdFRhbGx5PTA7XG5sZXQgc3VibWFyaW5lVGFsbHk9MDtcbmxldCBkZXN0cm95ZXJUYWxseT0wO1xubGV0IGJhdHRsZXNoaXBUYWxseT0wO1xubGV0IGNhcnJpZXJUYWxseT0wO1xuXG5cbmxldCBwbGF5ZXJUb3RhbFRhbGx5ID0gMDtcbmxldCBwbGF5ZXJQYXRyb2xCb2F0VGFsbHkgPSAwO1xubGV0IHBsYXllclN1Ym1hcmluZVRhbGx5ID0gMDtcbmxldCBwbGF5ZXJEZXN0cm95ZXJUYWxseSA9IDA7XG5sZXQgcGxheWVyQmF0dGxlc2hpcFRhbGx5ID0gMDtcbmxldCBwbGF5ZXJDYXJyaWVyVGFsbHkgPSAwO1xuXG5cblxuY29tcHV0ZXJDZWxscy5mb3JFYWNoKChjb21wdXRlckNlbGwpID0+IHtcbiAgY29tcHV0ZXJDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29tcHV0ZXJDZWxsLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1jZWxsLXRhcmdldGVkXCIpO1xuICAgIGlmIChjb21wdXRlckNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjb21wdXRlci1zZWxlY3RlZFwiKSkge1xuICAgICAgY29tcHV0ZXJDZWxsLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICAvLyBjb21wdXRlckNlbGwudGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICAgIHNldFRpbWVvdXQoKCgpPT57Y29tcHV0ZXJDZWxsLnRleHRDb250ZW50ID0gXCJYXCJ9KSwgMjAwMCk7XG4gICAgICBjb21wdXRlclRvdGFsVGFsbHkrKztcbiAgICB9ZWxzZXtcbiAgICAgIGNvbXB1dGVyQ2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc2VkXCIpO1xuICAgICAgc2V0VGltZW91dCgoKCk9PntzY29yZWJvYXJkVGV4dC50ZXh0Q29udGVudD1cIllvdSBtaXNzZWQhIE5vIHNoaXBzIGhpdC5cIn0pLCAyMDAwKTtcbiAgICB9XG5cbiAgICBpZihjb21wdXRlckNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJwYXRyb2wtYm9hdFwiKSAmJiBwYXRyb2xCb2F0VGFsbHk9PT0xKXtcbiAgICAgIC8vIHNldFRpbWVvdXQoKCgpPT57Y29uc29sZS5sb2coXCJISVQhIHlvdSBzdW5rIHRoZWlyIFBhdHJvbCBCb2F0XCIpfSksIDEwMCk7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e3Njb3JlYm9hcmRUZXh0LnRleHRDb250ZW50ID0gXCJISVQhIHlvdSBzYW5rIHRoZWlyIFBhdHJvbCBCb2F0IVwiO30pLCAyMDAwKTtcbiAgICB9ZWxzZSBpZiAoY29tcHV0ZXJDZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwicGF0cm9sLWJvYXRcIikgJiYgcGF0cm9sQm9hdFRhbGx5IDwgMSl7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e3Njb3JlYm9hcmRUZXh0LnRleHRDb250ZW50PVwiWW91IGhpdCB0aGVpciBQYXRyb2wgQm9hdCFcIn0pLCAyMDAwKTtcbiAgICAgIHBhdHJvbEJvYXRUYWxseSsrO1xuICAgIH07XG5cbiAgICBpZihjb21wdXRlckNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzdWJtYXJpbmVcIikgJiYgc3VibWFyaW5lVGFsbHk9PT0yKXtcbiAgICAgIC8vIHNldFRpbWVvdXQoKCgpPT57Y29uc29sZS5sb2coXCJISVQhIHlvdSBzdW5rIHRoZWlyIFN1Ym1hcmluZVwiKX0pLCAxMDApO1xuICAgICAgc2V0VGltZW91dCgoKCk9PntzY29yZWJvYXJkVGV4dC50ZXh0Q29udGVudCA9IFwiSElUISB5b3Ugc2FuayB0aGVpciBTdWJtYXJpbmUhXCI7fSksIDIwMDApO1xuICAgIH1lbHNlIGlmIChjb21wdXRlckNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzdWJtYXJpbmVcIikgJiYgc3VibWFyaW5lVGFsbHkgPCAyKXtcbiAgICAgIHNldFRpbWVvdXQoKCgpPT57c2NvcmVib2FyZFRleHQudGV4dENvbnRlbnQ9XCJZb3UgaGl0IHRoZWlyIFN1Ym1hcmluZSFcIn0pLCAyMDAwKTtcbiAgICAgIHN1Ym1hcmluZVRhbGx5Kys7XG4gICAgfTtcblxuICAgIGlmKGNvbXB1dGVyQ2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImRlc3Ryb3llclwiKSAmJiBkZXN0cm95ZXJUYWxseT09PTIpe1xuICAgICAgLy8gc2V0VGltZW91dCgoKCk9Pntjb25zb2xlLmxvZyhcIkhJVCEgeW91IHN1bmsgdGhlaXIgRGVzdHJveWVyXCIpfSksIDEwMCk7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e3Njb3JlYm9hcmRUZXh0LnRleHRDb250ZW50ID0gXCJISVQhIHlvdSBzYW5rIHRoZWlyIERlc3Ryb3llciFcIjt9KSwgMjAwMCk7XG4gICAgfWVsc2UgaWYgKGNvbXB1dGVyQ2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImRlc3Ryb3llclwiKSAmJiBkZXN0cm95ZXJUYWxseSA8IDIpe1xuICAgICAgc2V0VGltZW91dCgoKCk9PntzY29yZWJvYXJkVGV4dC50ZXh0Q29udGVudD1cIllvdSBoaXQgdGhlaXIgRGVzdHJveWVyIVwifSksIDIwMDApO1xuICAgICAgZGVzdHJveWVyVGFsbHkrKztcbiAgICB9O1xuXG4gICAgaWYoY29tcHV0ZXJDZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiYmF0dGxlc2hpcFwiKSAmJiBiYXR0bGVzaGlwVGFsbHk9PT0zKXtcbiAgICAgIC8vIHNldFRpbWVvdXQoKCgpPT57Y29uc29sZS5sb2coXCJISVQhIHlvdSBzdW5rIHRoZWlyIEJhdHRsZXNoaXBcIil9KSwgMTAwKTtcbiAgICAgIHNldFRpbWVvdXQoKCgpPT57c2NvcmVib2FyZFRleHQudGV4dENvbnRlbnQgPSBcIkhJVCEgWU9VIFNBTksgVEhFSVIgQkFUVExFU0hJUCFcIjt9KSwgMjAwMCk7XG4gICAgfWVsc2UgaWYgKGNvbXB1dGVyQ2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImJhdHRsZXNoaXBcIikgJiYgYmF0dGxlc2hpcFRhbGx5IDwgMyl7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e3Njb3JlYm9hcmRUZXh0LnRleHRDb250ZW50PVwiWW91IGhpdCB0aGVpciBCYXR0bGVzaGlwIVwifSksIDIwMDApO1xuICAgICAgYmF0dGxlc2hpcFRhbGx5Kys7XG4gICAgfTtcblxuICAgIGlmKGNvbXB1dGVyQ2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNhcnJpZXJcIikgJiYgY2FycmllclRhbGx5PT09NCl7XG4gICAgICAvLyBzZXRUaW1lb3V0KCgoKT0+e2NvbnNvbGUubG9nKFwiSElUISB5b3Ugc3VuayB0aGVpciBDYXJyaWVyXCIpfSksIDEwMCk7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e3Njb3JlYm9hcmRUZXh0LnRleHRDb250ZW50ID0gXCJISVQhIHlvdSBzYW5rIHRoZWlyIENhcnJpZXIhXCI7fSksIDIwMDApO1xuICAgIH1lbHNlIGlmIChjb21wdXRlckNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjYXJyaWVyXCIpICYmIGNhcnJpZXJUYWxseSA8IDQpe1xuICAgICAgc2V0VGltZW91dCgoKCk9PntzY29yZWJvYXJkVGV4dC50ZXh0Q29udGVudD1cIllvdSBoaXQgdGhlaXIgQ2FycmllciFcIn0pLCAyMDAwKTtcbiAgICAgIGNhcnJpZXJUYWxseSsrO1xuICAgIH07XG5cbiAgICBpZihjb21wdXRlclRvdGFsVGFsbHk9PT0xNyl7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e2NvbnNvbGUubG9nKFwiWU9VIFdPTiFcIil9KSwgMjAwMCk7XG4gICAgfVxuXG4gICAgXG5cbiAgICBjb25zdCBvdmVybGF5PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgICAvLyBzZXRUaW1lb3V0KCgoKT0+e292ZXJsYXkuY2xhc3NMaXN0LmFkZChcInNob3dcIik7fSksIDEwMCk7XG5cblxuICAgIC8vIGxldCBwbGF5ZXJzWFZhbHVlID0gcmFuZG9tTnVtQmV0d2VlbigxLDEwKTtcbiAgICAvLyBsZXQgcGxheWVyc1lWYWx1ZSA9IHJhbmRvbU51bUJldHdlZW4oMSwgMTApO1xuXG4gICAgZnVuY3Rpb24gcmFuZG9tUGxheWVyQ29kZSgpIHtcbiAgICAgIGxldCBwbGF5ZXJzWFZhbHVlID0gcmFuZG9tTnVtQmV0d2VlbigxLCAxMCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcInBsYXllcnMgeCB2YWx1ZSBudW09IFwiKyBwbGF5ZXJzWFZhbHVlKTtcbiAgICAgIGxldCBwbGF5ZXJzWVZhbHVlID0gcmFuZG9tTnVtQmV0d2VlbigxLCAxMCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcInBsYXllcnMgeSB2YWx1ZSBudW09IFwiKyBwbGF5ZXJzWVZhbHVlKTtcbiAgICAgIGxldCBwbGF5ZXJzWFZhbHVlU3RyaW5nPSBwbGF5ZXJzWFZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcInBsYXllcnMgeCB2YWx1ZSBzdHI9IFwiKyBwbGF5ZXJzWFZhbHVlU3RyaW5nKTtcbiAgICAgIGxldCBwbGF5ZXJzWVZhbHVlU3RyaW5nPSBwbGF5ZXJzWVZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcInBsYXllcnMgeSB2YWx1ZSBzdHI9IFwiKyBwbGF5ZXJzWVZhbHVlU3RyaW5nKTtcbiAgICAgIGxldCBwbGF5ZXJDb2RlVmFsdWUgPSBwbGF5ZXJzWFZhbHVlU3RyaW5nICsgcGxheWVyc1lWYWx1ZVN0cmluZztcblxuICAgICAgLy8gY29uc29sZS5sb2codXNlZE51bWJlcnMyLmxlbmd0aCk7XG5cbiAgICAgIGlmICh1c2VkTnVtYmVyczIubGVuZ3RoPT09MTAwKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBtb3JlIHBsYXllciBzcGFjZXNcIik7XG4gICAgICAgIHJldHVybiAxMTtcbiAgICAgIH1cbiAgICAgIGlmKCF1c2VkTnVtYmVyczIuaW5jbHVkZXMocGxheWVyQ29kZVZhbHVlKSl7XG4gICAgICAgIHVzZWROdW1iZXJzMi5wdXNoKHBsYXllckNvZGVWYWx1ZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicGxheWVycyBjb2RlPSBcIiArIHBsYXllckNvZGVWYWx1ZSk7XG4gICAgICAgIHJldHVybiBwbGF5ZXJDb2RlVmFsdWU7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJBIGNvb3JkaW5hdGUgaGFzIGJlZW4gcmVwZWF0ZWRcIik7XG4gICAgICAgIHJldHVybiByYW5kb21QbGF5ZXJDb2RlKCk7XG4gICAgICB9O1xuXG5cbiAgICAgIC8vIGlmKHVzZWROdW1iZXJzMi5pbmNsdWRlcyhwbGF5ZXJDb2RlVmFsdWUpKXtcbiAgICAgIC8vICAgY29uc29sZS5sb2coXCJyZXRyeVwiKVxuICAgICAgLy8gICByYW5kb21QbGF5ZXJDb2RlKCk7XG4gICAgICAvLyB9ZWxzZXtcbiAgICAgIC8vICAgdXNlZE51bWJlcnMyLnB1c2gocGxheWVyQ29kZVZhbHVlKTtcbiAgICAgIC8vICAgY29uc29sZS5sb2coXCJwbGF5ZXJzIGNvZGU9IFwiKyBwbGF5ZXJDb2RlVmFsdWUpO1xuICAgICAgLy8gICByZXR1cm4gcGxheWVyQ29kZVZhbHVlO1xuICAgICAgLy8gfVxuICAgIH07XG5cblxuXG4gICAgbGV0IGNvbXB1dGVyQXR0YWNrPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb2RlPSBcIiR7cmFuZG9tUGxheWVyQ29kZSgpfVwiXWApO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyQXR0YWNrKTtcblxuICAgIC8vIGxldCBzY29yZWJvYXJkVGV4dD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY29yZWJvYXJkLXRleHRcIik7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgaWYgKGNvbXB1dGVyQXR0YWNrLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgIC8vIGNvbXB1dGVyQXR0YWNrLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e2NvbXB1dGVyQXR0YWNrLmNsYXNzTGlzdC5hZGQoXCJoaXRcIil9KSwgNjAwMCk7XG4gICAgICAvLyBjb21wdXRlckF0dGFjay50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgICAgc2V0VGltZW91dCgoKCk9Pntjb21wdXRlckF0dGFjay50ZXh0Q29udGVudCA9IFwiWFwifSksIDYwMDApO1xuICAgICAgcGxheWVyVG90YWxUYWxseSsrO1xuICAgIH1lbHNle1xuICAgICAgLy8gY29tcHV0ZXJBdHRhY2suY2xhc3NMaXN0LmFkZChcIm1pc3NlZFwiKTtcbiAgICAgIHNldFRpbWVvdXQoKCgpPT57Y29tcHV0ZXJBdHRhY2suY2xhc3NMaXN0LmFkZChcIm1pc3NlZFwiKTt9KSwgNjAwMCk7XG4gICAgICAvLyBzY29yZWJvYXJkVGV4dC50ZXh0Q29udGVudD1cIlN3aW5nIGFuZCBhIG1pc3MhXCI7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e3Njb3JlYm9hcmRDb21wdXRlclRleHQudGV4dENvbnRlbnQ9XCJDb21wdXRlciBhdHRhY2tlZCBhbmQgbWlzc2VkIVwifSksIDYwMDApO1xuICAgIH1cblxuICAgIGlmKGNvbXB1dGVyQXR0YWNrLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwicGxheWVyLXBhdHJvbC1ib2F0XCIpICYmIHBsYXllclBhdHJvbEJvYXRUYWxseT09PTEpe1xuICAgICAgLy8gc2V0VGltZW91dCgoKCk9Pntjb25zb2xlLmxvZyhcIkhJVCEgeW91ciBQYXRyb2wgQm9hdCBoYXMgYmVlbiBzYW5rXCIpfSksIDEwMCk7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e3Njb3JlYm9hcmRDb21wdXRlclRleHQudGV4dENvbnRlbnQgPSBcIkhJVCEgeW91ciBQYXRyb2wgQm9hdCBoYXMgYmVlbiBzYW5rXCI7fSksIDYwMDApO1xuICAgIH1lbHNlIGlmIChjb21wdXRlckF0dGFjay5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInBsYXllci1wYXRyb2wtYm9hdFwiKSAmJiBwbGF5ZXJQYXRyb2xCb2F0VGFsbHkgPCAxKXtcbiAgICAgIHNldFRpbWVvdXQoKCgpPT57c2NvcmVib2FyZENvbXB1dGVyVGV4dC50ZXh0Q29udGVudD1cIllvdXIgUGF0cm9sIEJvYXQgaGFzIGJlZW4gSElUIVwifSksIDYwMDApO1xuICAgICAgcGxheWVyUGF0cm9sQm9hdFRhbGx5Kys7XG4gICAgfTtcblxuICAgIGlmKGNvbXB1dGVyQXR0YWNrLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwicGxheWVyLXN1Ym1hcmluZVwiKSAmJiBwbGF5ZXJTdWJtYXJpbmVUYWxseT09PTIpe1xuICAgICAgLy8gc2V0VGltZW91dCgoKCk9Pntjb25zb2xlLmxvZyhcIkhJVCEgeW91ciBTdWJtYXJpbmUgaGFzIGJlZW4gc2Fua1wiKX0pLCAxMDApO1xuICAgICAgc2V0VGltZW91dCgoKCk9PntzY29yZWJvYXJkQ29tcHV0ZXJUZXh0LnRleHRDb250ZW50ID0gXCJISVQhIHlvdXIgU3VibWFyaW5lIGhhcyBiZWVuIHNhbmtcIjt9KSwgNjAwMCk7XG4gICAgfWVsc2UgaWYgKGNvbXB1dGVyQXR0YWNrLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwicGxheWVyLXN1Ym1hcmluZVwiKSAmJiBwbGF5ZXJTdWJtYXJpbmVUYWxseSA8IDIpe1xuICAgICAgc2V0VGltZW91dCgoKCk9PntzY29yZWJvYXJkQ29tcHV0ZXJUZXh0LnRleHRDb250ZW50PVwiWW91ciBTdWJtYXJpbmUgaGFzIGJlZW4gSElUIVwifSksIDYwMDApO1xuICAgICAgcGxheWVyU3VibWFyaW5lVGFsbHkrKztcbiAgICB9O1xuXG4gICAgaWYoY29tcHV0ZXJBdHRhY2suZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJwbGF5ZXItZGVzdHJveWVyXCIpICYmIHBsYXllckRlc3Ryb3llclRhbGx5PT09Mil7XG4gICAgICAvLyBzZXRUaW1lb3V0KCgoKT0+e2NvbnNvbGUubG9nKFwiSElUISB5b3VyIERlc3Ryb3llciBoYXMgYmVlbiBzYW5rXCIpfSksIDEwMCk7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e3Njb3JlYm9hcmRDb21wdXRlclRleHQudGV4dENvbnRlbnQgPSBcIkhJVCEgeW91ciBEZXN0cm95ZXIgaGFzIGJlZW4gc2Fua1wiO30pLCA2MDAwKTtcbiAgICB9ZWxzZSBpZiAoY29tcHV0ZXJBdHRhY2suZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJwbGF5ZXItZGVzdHJveWVyXCIpICYmIHBsYXllckRlc3Ryb3llclRhbGx5IDwgMil7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e3Njb3JlYm9hcmRDb21wdXRlclRleHQudGV4dENvbnRlbnQ9XCJZb3VyIERlc3Ryb3llciBoYXMgYmVlbiBISVQhXCJ9KSwgNjAwMCk7XG4gICAgICBwbGF5ZXJEZXN0cm95ZXJUYWxseSsrO1xuICAgIH07XG5cbiAgICBpZihjb21wdXRlckF0dGFjay5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInBsYXllci1iYXR0bGVzaGlwXCIpICYmIHBsYXllckJhdHRsZXNoaXBUYWxseT09PTMpe1xuICAgICAgLy8gc2V0VGltZW91dCgoKCk9Pntjb25zb2xlLmxvZyhcIkhJVCEgeW91ciBCYXR0bGVzaGlwIGhhcyBiZWVuIHNhbmtcIil9KSwgMTAwKTtcbiAgICAgIHNldFRpbWVvdXQoKCgpPT57c2NvcmVib2FyZENvbXB1dGVyVGV4dC50ZXh0Q29udGVudCA9IFwiSElUISB0aGUgY29tcHV0ZXIgU1VOSyBZT1VSIEJBVFRMRVNISVAhXCI7fSksIDYwMDApO1xuICAgIH1lbHNlIGlmIChjb21wdXRlckF0dGFjay5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInBsYXllci1iYXR0bGVzaGlwXCIpICYmIHBsYXllckJhdHRsZXNoaXBUYWxseSA8IDMpIHtcbiAgICAgIHNldFRpbWVvdXQoKCgpPT57c2NvcmVib2FyZENvbXB1dGVyVGV4dC50ZXh0Q29udGVudD1cIllvdXIgQmF0dGxlc2hpcCBoYXMgYmVlbiBISVQhXCJ9KSwgNjAwMCk7XG4gICAgICBwbGF5ZXJCYXR0bGVzaGlwVGFsbHkrKztcbiAgICB9O1xuXG4gICAgaWYoY29tcHV0ZXJBdHRhY2suZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJwbGF5ZXItY2FycmllclwiKSAmJiBwbGF5ZXJDYXJyaWVyVGFsbHk9PT00KXtcbiAgICAgIC8vIHNldFRpbWVvdXQoKCgpPT57Y29uc29sZS5sb2coXCJISVQhIHlvdXIgQ2FycmllciBoYXMgYmVlbiBzYW5rXCIpfSksIDEwMCk7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e3Njb3JlYm9hcmRDb21wdXRlclRleHQudGV4dENvbnRlbnQgPSBcIkhJVCEgeW91ciBDYXJyaWVyIGhhcyBiZWVuIHNhbmtcIjt9KSwgNjAwMCk7XG4gICAgfWVsc2UgaWYgKGNvbXB1dGVyQXR0YWNrLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwicGxheWVyLWNhcnJpZXJcIikgJiYgcGxheWVyQ2FycmllclRhbGx5IDwgNCkge1xuICAgICAgc2V0VGltZW91dCgoKCk9PntzY29yZWJvYXJkQ29tcHV0ZXJUZXh0LnRleHRDb250ZW50PVwiWW91ciBDYXJyaWVyIGhhcyBiZWVuIEhJVCFcIn0pLCA2MDAwKTtcbiAgICAgIHBsYXllckNhcnJpZXJUYWxseSsrO1xuICAgIH07XG5cbiAgICBpZihwbGF5ZXJUb3RhbFRhbGx5PT09MTcpe1xuICAgICAgc2V0VGltZW91dCgoKCk9Pntjb25zb2xlLmxvZyhcIllvdSBMb3N0IVwiKX0pLCA2MDAwKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcInBsYXllcnMgVG90YWwgdGFsbHk9IFwiKyBwbGF5ZXJUb3RhbFRhbGx5KTtcbiAgICBjb25zb2xlLmxvZyhcInBsYXllcnMgcGF0cm9sIGJvYXQgdGFsbHk9IFwiKyBwbGF5ZXJQYXRyb2xCb2F0VGFsbHkpO1xuICAgIGNvbnNvbGUubG9nKFwicGxheWVycyBzdWJtYXJpbmUgdGFsbHk9IFwiKyBwbGF5ZXJTdWJtYXJpbmVUYWxseSk7XG4gICAgY29uc29sZS5sb2coXCJwbGF5ZXJzIGRlc3Ryb3llciB0YWxseT0gXCIrIHBsYXllckRlc3Ryb3llclRhbGx5KTtcbiAgICBjb25zb2xlLmxvZyhcInBsYXllcnMgYmF0dGxlc2hpcCB0YWxseT0gXCIrIHBsYXllckJhdHRsZXNoaXBUYWxseSk7XG4gICAgY29uc29sZS5sb2coXCJwbGF5ZXJzIGNhcnJpZXIgdGFsbHk9IFwiKyBwbGF5ZXJDYXJyaWVyVGFsbHkpO1xuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gY29tcHV0ZXJBdHRhY2suY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgc2V0VGltZW91dCgoKCk9Pntjb21wdXRlckF0dGFjay5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWNlbGwtdGFyZ2V0ZWRcIik7fSksIDQwMDApO1xuXG4gICAgc2V0VGltZW91dCgoKCk9PntvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO30pLCA2MDAwKTtcblxuXG4gIH0pO1xufSk7XG5cbmNvbnNvbGUubG9nKHBhdHJvbEJvYXRDb21wdXRlcik7Il0sIm5hbWVzIjpbImdyYWJOYW1lIiwiQ3JlYXRlQm9hdCIsImhpdCIsImlzU3VuayIsIkdhbWVib2FyZCIsImV4YW1wbGVBZGQiLCJhIiwiYiIsIm5hbWUiLCJjb25zdHJ1Y3RvciIsImxlbmd0aCIsImJvYXROYW1lIiwibnVtVGltZXNIaXQiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJoYXNTdW5rIiwiY29vcmRpbmF0ZXMiLCJ4X251bWJlciIsInlfbnVtYmVyIiwic3RhdHVzIiwiYm9hdE5hbWVPYmoiLCJ3YXNQaWNrZWQiLCJwbGFjZSIsInNoaXBMZW5ndGgiLCJ2ZXJ0aWNhbE9ySG9yaXpvbnRhbCIsInhOdW1iZXIiLCJ5TnVtYmVyIiwiaSIsInJlY2VpdmVBdHRhY2siLCJzY29yZWJvYXJkVGV4dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjb3JlYm9hcmRDb21wdXRlclRleHQiLCJuYW1lUGxhdGUiLCJuYW1lU3VibWl0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbXBvc2VkUGF0aCIsInZhbHVlIiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2F0U2VsZWN0aW9uU2VjdGlvbiIsImJvYXRPcmllbnRhdGlvblNlY3Rpb24iLCJjb21wdXRlclNlY3Rpb24iLCJncmlkIiwieFZhbHVlIiwiZGF0YXNldCIsInlWYWx1ZSIsInBhdHJvbEJvYXQiLCJzdWJtYXJpbmUiLCJkZXN0cm95ZXIiLCJiYXR0bGVzaGlwIiwiY2FycmllciIsImhvcml6YW50YWwiLCJ2ZXJ0aWNhbCIsImJvYXRTZWxlY3Rpb25CdXR0b25GdW5jdGlvbiIsImJ0bkNsaWNrZWQiLCJidG5BcnIiLCJyZW1haW5pbmdCdG5zIiwiZmlsdGVyIiwiYnRuIiwiZm9yRWFjaCIsInJlbW92ZSIsImJvYXRPcmllbnRhdGlvbkJ1dHRvbkZ1bmN0aW9uIiwiY29uc29sZSIsImxvZyIsInBhdGgiLCJwYXRyb2xCb2F0U3BhY2VzIiwic3VibWFyaW5lU3BhY2VzIiwiZGVzdHJveWVyU3BhY2VzIiwiYmF0dGxlc2hpcFNwYWNlcyIsImNhcnJpZXJTcGFjZXMiLCJib2F0T3JpZW50YXRpb24iLCJjbGlja0J0bnNNb2RhbCIsInRhYmxlQ2xhc3MiLCJnZXRBdHRyaWJ1dGUiLCJpbmNsdWRlcyIsImNlbGxzIiwicXVlcnlTZWxlY3RvckFsbCIsImNlbGwiLCJ4TnVtIiwiTnVtYmVyIiwieU51bSIsIm5leHRDZWxsMl9ob3JpemFudGFsIiwibmV4dENlbGwzX2hvcml6YW50YWwiLCJuZXh0Q2VsbDRfaG9yaXphbnRhbCIsIm5leHRDZWxsNV9ob3JpemFudGFsIiwibmV4dENlbGwyX3ZlcnRpY2FsIiwibmV4dENlbGwzX3ZlcnRpY2FsIiwibmV4dENlbGw0X3ZlcnRpY2FsIiwibmV4dENlbGw1X3ZlcnRpY2FsIiwiZGlzYWJsZWQiLCJyYW5kb21OdW1CZXR3ZWVuIiwibWluIiwibWF4IiwibnVtIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY29tcHV0ZXJPcmllbnRhdGlvbiIsInVzZWROdW1iZXJzIiwidXNlZE51bWJlcnMyIiwiQ29tcHV0ZXJCb2F0Iiwib3JpZW50YXRpb24iLCJjb21wdXRlckNvZGUiLCJ4IiwieSIsIm5leHRDZWxsMiIsInhUb1N0cmluZyIsInRvU3RyaW5nIiwieVRvU3RyaW5nIiwibmV4dENlbGwyU3RyaW5nIiwiY2VsbENvZGUiLCJuZXh0Q2VsbDJDb2RlIiwiYWN0dWFsQ2VsbCIsImFjdHVhbE5leHRDZWxsMiIsInB1c2giLCJuZXh0Q2VsbDMiLCJuZXh0Q2VsbDNTdHJpbmciLCJuZXh0Q2VsbDNDb2RlIiwiYWN0dWFsTmV4dENlbGwzIiwibmV4dENlbGw0IiwibmV4dENlbGw0U3RyaW5nIiwibmV4dENlbGw0Q29kZSIsImFjdHVhbE5leHRDZWxsNCIsIm5leHRDZWxsNSIsIm5leHRDZWxsNVN0cmluZyIsIm5leHRDZWxsNUNvZGUiLCJhY3R1YWxOZXh0Q2VsbDUiLCJwYXRyb2xCb2F0Q29tcHV0ZXIiLCJzdWJtYXJpbmVDb21wdXRlciIsImRlc3Ryb3llckNvbXB1dGVyIiwiYmF0dGxlc2hpcENvbXB1dGVyIiwiY2FycmllckNvbXB1dGVyIiwiY29tcHV0ZXJDZWxscyIsImNvbXB1dGVyQ2VsbCIsImNvbXB1dGVyVG90YWxUYWxseSIsInBhdHJvbEJvYXRUYWxseSIsInN1Ym1hcmluZVRhbGx5IiwiZGVzdHJveWVyVGFsbHkiLCJiYXR0bGVzaGlwVGFsbHkiLCJjYXJyaWVyVGFsbHkiLCJwbGF5ZXJUb3RhbFRhbGx5IiwicGxheWVyUGF0cm9sQm9hdFRhbGx5IiwicGxheWVyU3VibWFyaW5lVGFsbHkiLCJwbGF5ZXJEZXN0cm95ZXJUYWxseSIsInBsYXllckJhdHRsZXNoaXBUYWxseSIsInBsYXllckNhcnJpZXJUYWxseSIsInNldFRpbWVvdXQiLCJvdmVybGF5IiwicmFuZG9tUGxheWVyQ29kZSIsInBsYXllcnNYVmFsdWUiLCJwbGF5ZXJzWVZhbHVlIiwicGxheWVyc1hWYWx1ZVN0cmluZyIsInBsYXllcnNZVmFsdWVTdHJpbmciLCJwbGF5ZXJDb2RlVmFsdWUiLCJjb21wdXRlckF0dGFjayJdLCJzb3VyY2VSb290IjoiIn0=