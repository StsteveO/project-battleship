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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nbody,\nhtml {\n  height: 100%;\n  margin: 0;\n  /* background-color: skyblue; */\n}\n:root {\n  /* --custom-name: value; */\n  /* --light-green-bg: #476529; */\n  /* example, color: var(--navy-clr) */\n  --primary-clr: #8AA6A3;\n  --secondary-clr: #8AA6A3;\n  --accent-clr: #8AA6A3;\n}\n.header{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n    margin: 0rem;\n    border: .25rem solid black;\n    background-color: navy;\n    color: silver;\n    margin-bottom: 1rem;\n}\nfieldset{\n  display: flex;\n  flex-direction: column;\n}\n.form.player-name{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.submit-name-btn{\n  margin-top: 1rem;\n  padding: .5rem;\n}\n.name-plate,\n.computer-name-plate, \n.boat-selection-title,\n.boat-orientation-title{\n  margin-bottom: 1rem;\n  font-size: 3rem;\n  font-weight: bold;\n}\ntable, th, td {\n  border: 1px solid black;\n}\n.grid,\n.computer-grid,\n.boat-selection,\n.boat-orientation{\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.boat-selection-btns,\n.boat-orientation-btns{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: .25rem;\n}\nth, td{\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n  width: 2rem;\n}\n.clicked{\n  background-color: orange;\n}\n.outside-grid{\n  cursor: not-allowed;\n}\n.outside-grid-error{\n  background-color: red;\n  animation-name: off-grid-error;\n  animation-duration: 400ms;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n}\n@keyframes off-grid-error{\n  from {background-color: red;}\n  to {background-color: white;}\n}\n.table-class,\n.computer-table-class{\n  position: relative;\n}\n.grid,\n.computer-grid{\n  position: relative;\n}\n.click-btns-modal{\n  width: 40%;\n  height: auto;\n  /* margin: auto; */\n  background-color: rgb(194, 194, 194);\n  background-color: black;\n  color: whitesmoke;\n  border: 1px solid gray;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0%;\n  padding: 1rem;\n  transition-duration: 200ms;\n  transition-property: opacity;\n}\n.show{\n  opacity: 100%;\n}\n.phased-out{\n  opacity: 30%;\n}\n.selected{\n  background-color: black;\n}\n.computer-selected{\n  background-color: black;\n  color: white;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;AACxB;AACA;;EAEE,YAAY;EACZ,SAAS;EACT,+BAA+B;AACjC;AACA;EACE,0BAA0B;EAC1B,+BAA+B;EAC/B,oCAAoC;EACpC,sBAAsB;EACtB,wBAAwB;EACxB,qBAAqB;AACvB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,oBAAoB;IACpB,YAAY;IACZ,0BAA0B;IAC1B,sBAAsB;IACtB,aAAa;IACb,mBAAmB;AACvB;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,cAAc;AAChB;AACA;;;;EAIE,mBAAmB;EACnB,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,uBAAuB;AACzB;AACA;;;;EAIE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;;EAEE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,WAAW;AACb;AACA;EACE,mBAAmB;EACnB,sBAAsB;EACtB,WAAW;AACb;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,mBAAmB;AACrB;AACA;EACE,qBAAqB;EACrB,8BAA8B;EAC9B,yBAAyB;EACzB,mCAAmC;EACnC,8BAA8B;AAChC;AACA;EACE,MAAM,qBAAqB,CAAC;EAC5B,IAAI,uBAAuB,CAAC;AAC9B;AACA;;EAEE,kBAAkB;AACpB;AACA;;EAEE,kBAAkB;AACpB;AACA;EACE,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,oCAAoC;EACpC,uBAAuB;EACvB,iBAAiB;EACjB,sBAAsB;EACtB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,WAAW;EACX,aAAa;EACb,0BAA0B;EAC1B,4BAA4B;AAC9B;AACA;EACE,aAAa;AACf;AACA;EACE,YAAY;AACd;AACA;EACE,uBAAuB;AACzB;AACA;EACE,uBAAuB;EACvB,YAAY;AACd","sourcesContent":["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nbody,\nhtml {\n  height: 100%;\n  margin: 0;\n  /* background-color: skyblue; */\n}\n:root {\n  /* --custom-name: value; */\n  /* --light-green-bg: #476529; */\n  /* example, color: var(--navy-clr) */\n  --primary-clr: #8AA6A3;\n  --secondary-clr: #8AA6A3;\n  --accent-clr: #8AA6A3;\n}\n.header{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n    margin: 0rem;\n    border: .25rem solid black;\n    background-color: navy;\n    color: silver;\n    margin-bottom: 1rem;\n}\nfieldset{\n  display: flex;\n  flex-direction: column;\n}\n.form.player-name{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.submit-name-btn{\n  margin-top: 1rem;\n  padding: .5rem;\n}\n.name-plate,\n.computer-name-plate, \n.boat-selection-title,\n.boat-orientation-title{\n  margin-bottom: 1rem;\n  font-size: 3rem;\n  font-weight: bold;\n}\ntable, th, td {\n  border: 1px solid black;\n}\n.grid,\n.computer-grid,\n.boat-selection,\n.boat-orientation{\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.boat-selection-btns,\n.boat-orientation-btns{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: .25rem;\n}\nth, td{\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n  width: 2rem;\n}\n.clicked{\n  background-color: orange;\n}\n.outside-grid{\n  cursor: not-allowed;\n}\n.outside-grid-error{\n  background-color: red;\n  animation-name: off-grid-error;\n  animation-duration: 400ms;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n}\n@keyframes off-grid-error{\n  from {background-color: red;}\n  to {background-color: white;}\n}\n.table-class,\n.computer-table-class{\n  position: relative;\n}\n.grid,\n.computer-grid{\n  position: relative;\n}\n.click-btns-modal{\n  width: 40%;\n  height: auto;\n  /* margin: auto; */\n  background-color: rgb(194, 194, 194);\n  background-color: black;\n  color: whitesmoke;\n  border: 1px solid gray;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0%;\n  padding: 1rem;\n  transition-duration: 200ms;\n  transition-property: opacity;\n}\n.show{\n  opacity: 100%;\n}\n.phased-out{\n  opacity: 30%;\n}\n.selected{\n  background-color: black;\n}\n.computer-selected{\n  background-color: black;\n  color: white;\n}"],"sourceRoot":""}]);
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
    console.log("None of these buttons are clicked"); //THIS WORKS!!
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
    console.log("None of these buttons are clicked"); //THIS WORKS!!
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
      nextCell2_horizantal.classList.add("selected");
    }
  }
  if (patrolBoat.getAttribute("class").includes("clicked") && vertical.getAttribute("class").includes("clicked") && !grid.getAttribute("class").includes("outside-grid")) {
    if (!cell.getAttribute("class").includes("selected") && !nextCell2_vertical.getAttribute("class").includes("selected")) {
      patrolBoat.classList.remove("clicked");
      patrolBoat.disabled = true;
      cell.classList.add("selected");
      nextCell2_vertical.classList.add("selected");
    }
  }
  if (submarine.getAttribute("class").includes("clicked") && horizantal.getAttribute("class").includes("clicked") && !grid.getAttribute("class").includes("outside-grid")) {
    if (!cell.getAttribute("class").includes("selected") && !nextCell2_horizantal.getAttribute("class").includes("selected") && !nextCell3_horizantal.getAttribute("class").includes("selected")) {
      submarine.classList.remove("clicked");
      submarine.disabled = true;
      cell.classList.add("selected");
      nextCell2_horizantal.classList.add("selected");
      nextCell3_horizantal.classList.add("selected");
    }
  }
  if (submarine.getAttribute("class").includes("clicked") && vertical.getAttribute("class").includes("clicked") && !grid.getAttribute("class").includes("outside-grid")) {
    if (!cell.getAttribute("class").includes("selected") && !nextCell2_vertical.getAttribute("class").includes("selected") && !nextCell3_vertical.getAttribute("class").includes("selected") && !grid.getAttribute("class").includes("outside-grid")) {
      submarine.classList.remove("clicked");
      submarine.disabled = true;
      cell.classList.add("selected");
      nextCell2_vertical.classList.add("selected");
      nextCell3_vertical.classList.add("selected");
    }
  }
  if (destroyer.getAttribute("class").includes("clicked") && horizantal.getAttribute("class").includes("clicked") && !grid.getAttribute("class").includes("outside-grid")) {
    if (!cell.getAttribute("class").includes("selected") && !nextCell2_horizantal.getAttribute("class").includes("selected") && !nextCell3_horizantal.getAttribute("class").includes("selected")) {
      destroyer.classList.remove("clicked");
      destroyer.disabled = true;
      cell.classList.add("selected");
      nextCell2_horizantal.classList.add("selected");
      nextCell3_horizantal.classList.add("selected");
    }
  }
  if (destroyer.getAttribute("class").includes("clicked") && vertical.getAttribute("class").includes("clicked") && !grid.getAttribute("class").includes("outside-grid")) {
    if (!cell.getAttribute("class").includes("selected") && !nextCell2_vertical.getAttribute("class").includes("selected") && !nextCell3_vertical.getAttribute("class").includes("selected")) {
      destroyer.classList.remove("clicked");
      destroyer.disabled = true;
      cell.classList.add("selected");
      nextCell2_vertical.classList.add("selected");
      nextCell3_vertical.classList.add("selected");
    }
  }
  if (battleship.getAttribute("class").includes("clicked") && horizantal.getAttribute("class").includes("clicked") && !grid.getAttribute("class").includes("outside-grid")) {
    if (!cell.getAttribute("class").includes("selected") && !nextCell2_horizantal.getAttribute("class").includes("selected") && !nextCell3_horizantal.getAttribute("class").includes("selected") && !nextCell4_horizantal.getAttribute("class").includes("selected") && !grid.getAttribute("class").includes("outside-grid")) {
      battleship.classList.remove("clicked");
      battleship.disabled = true;
      cell.classList.add("selected");
      nextCell2_horizantal.classList.add("selected");
      nextCell3_horizantal.classList.add("selected");
      nextCell4_horizantal.classList.add("selected");
    }
  }
  if (battleship.getAttribute("class").includes("clicked") && vertical.getAttribute("class").includes("clicked") && !grid.getAttribute("class").includes("outside-grid")) {
    if (!cell.getAttribute("class").includes("selected") && !nextCell2_vertical.getAttribute("class").includes("selected") && !nextCell3_vertical.getAttribute("class").includes("selected") && !nextCell4_vertical.getAttribute("class").includes("selected") && !grid.getAttribute("class").includes("outside-grid")) {
      battleship.classList.remove("clicked");
      battleship.disabled = true;
      cell.classList.add("selected");
      nextCell2_vertical.classList.add("selected");
      nextCell3_vertical.classList.add("selected");
      nextCell4_vertical.classList.add("selected");
    }
  }
  if (carrier.getAttribute("class").includes("clicked") && horizantal.getAttribute("class").includes("clicked") && !grid.getAttribute("class").includes("outside-grid")) {
    if (!cell.getAttribute("class").includes("selected") && !nextCell2_horizantal.getAttribute("class").includes("selected") && !nextCell3_horizantal.getAttribute("class").includes("selected") && !nextCell4_horizantal.getAttribute("class").includes("selected") && !nextCell5_horizantal.getAttribute("class").includes("selected")) {
      carrier.classList.remove("clicked");
      carrier.disabled = true;
      cell.classList.add("selected");
      nextCell2_horizantal.classList.add("selected");
      nextCell3_horizantal.classList.add("selected");
      nextCell4_horizantal.classList.add("selected");
      nextCell5_horizantal.classList.add("selected");
    }
  }
  if (carrier.getAttribute("class").includes("clicked") && vertical.getAttribute("class").includes("clicked") && !grid.getAttribute("class").includes("outside-grid")) {
    if (!cell.getAttribute("class").includes("selected") && !nextCell2_vertical.getAttribute("class").includes("selected") && !nextCell3_vertical.getAttribute("class").includes("selected") && !nextCell4_vertical.getAttribute("class").includes("selected") && !nextCell5_vertical.getAttribute("class").includes("selected")) {
      carrier.classList.remove("clicked");
      carrier.disabled = true;
      cell.classList.add("selected");
      nextCell2_vertical.classList.add("selected");
      nextCell3_vertical.classList.add("selected");
      nextCell4_vertical.classList.add("selected");
      nextCell5_vertical.classList.add("selected");
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
        actualCell.textContent = "1";
        actualNextCell2.classList.add("computer-selected");
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
        actualCell.textContent = "1";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell3.classList.add("computer-selected");
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
        actualCell.textContent = "1";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell3.classList.add("computer-selected");
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
        actualCell.textContent = "1";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell3.classList.add("computer-selected");
        actualNextCell4.classList.add("computer-selected");
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
        actualCell.textContent = "1";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell3.classList.add("computer-selected");
        actualNextCell4.classList.add("computer-selected");
        actualNextCell5.classList.add("computer-selected");
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
        actualCell.textContent = "1";
        actualNextCell2.classList.add("computer-selected");
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
        actualCell.textContent = "1";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell3.classList.add("computer-selected");
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
        actualCell.textContent = "1";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell3.classList.add("computer-selected");
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
        actualCell.textContent = "1";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell3.classList.add("computer-selected");
        actualNextCell4.classList.add("computer-selected");
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
        actualCell.textContent = "1";
        actualNextCell2.classList.add("computer-selected");
        actualNextCell3.classList.add("computer-selected");
        actualNextCell4.classList.add("computer-selected");
        actualNextCell5.classList.add("computer-selected");
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFFL0YsU0FBU0ssVUFBVUEsQ0FBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7RUFDcEIsT0FBT0QsQ0FBQyxHQUFDQyxDQUFDO0FBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQSxNQUFNUCxRQUFRLEdBQUlRLElBQUksSUFBS0EsSUFBSTtBQUUvQixNQUFNUCxVQUFVO0VBQ1pRLFdBQVdBLENBQUNDLE1BQU0sRUFBRUMsUUFBUSxFQUErQjtJQUFBLElBQTdCQyxXQUFXLEdBQUFDLFNBQUEsQ0FBQUgsTUFBQSxRQUFBRyxTQUFBLFFBQUFDLFNBQUEsR0FBQUQsU0FBQSxNQUFDLENBQUM7SUFBQSxJQUFFRSxPQUFPLEdBQUFGLFNBQUEsQ0FBQUgsTUFBQSxRQUFBRyxTQUFBLFFBQUFDLFNBQUEsR0FBQUQsU0FBQSxNQUFDLEtBQUs7SUFDdEQsSUFBSSxDQUFDSCxNQUFNLEdBQUVBLE1BQU07SUFDbkIsSUFBSSxDQUFDRSxXQUFXLEdBQUVBLFdBQVc7SUFDN0IsSUFBSSxDQUFDRyxPQUFPLEdBQUVBLE9BQU87SUFDckIsSUFBSSxDQUFDSixRQUFRLEdBQUNBLFFBQVE7RUFDMUI7QUFDSjtBQUFDO0FBRUQsTUFBTVQsR0FBRyxHQUFFUyxRQUFRLElBQUtBLFFBQVEsQ0FBQ0MsV0FBVyxFQUFFO0FBRTlDLE1BQU1ULE1BQU0sR0FBR1EsUUFBUSxJQUFLQSxRQUFRLENBQUNELE1BQU0sS0FBR0MsUUFBUSxDQUFDQyxXQUFXLEdBQUksSUFBSSxHQUFHLEtBQUs7QUFFbEYsTUFBTVIsU0FBUztFQUNYSyxXQUFXQSxDQUFBLEVBQUU7SUFDVCxJQUFJLENBQUNPLFdBQVcsR0FBRztJQUNqQjtJQUNBLENBQ0U7TUFBRUMsUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxDQUN0RztJQUNEO0lBQ0EsQ0FDRTtNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLENBQ3RHO0lBQ0Q7SUFDQSxDQUNFO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsQ0FDdEc7SUFDRDtJQUNBLENBQ0U7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxDQUN0RztJQUNEO0lBQ0EsQ0FDRTtNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLENBQ3RHO0lBQ0Q7SUFDQSxDQUNFO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsQ0FDdEc7SUFDRDtJQUNBLENBQ0U7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxDQUN0RztJQUNEO0lBQ0EsQ0FDRTtNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLENBQ3RHO0lBQ0Q7SUFDQSxDQUNFO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsQ0FDdEc7SUFDRDtJQUNBLENBQ0U7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVD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RyxDQUFDLG1CQUFtQixDQUFDO1FBQ2xEMkMsV0FBVyxDQUFDZSxJQUFJLENBQUNKLFFBQVEsQ0FBQztRQUMxQlgsV0FBVyxDQUFDZSxJQUFJLENBQUNILGFBQWEsQ0FBQztRQUMvQlosV0FBVyxDQUFDZSxJQUFJLENBQUNHLGFBQWEsQ0FBQztRQUMvQmxCLFdBQVcsQ0FBQ2UsSUFBSSxDQUFDTyxhQUFhLENBQUM7UUFDL0J0QixXQUFXLENBQUNlLElBQUksQ0FBQ1csYUFBYSxDQUFDO01BQ2pDO0lBQ0Y7RUFDRjtBQUNGO0FBRUEsSUFBSUUsa0JBQWtCLEdBQUcsSUFBSTNCLFlBQVksQ0FBQyxZQUFZLEVBQUVGLG1CQUFtQixDQUFDLENBQUMsQ0FBQztBQUM5RSxJQUFJOEIsaUJBQWlCLEdBQUcsSUFBSTVCLFlBQVksQ0FBQyxXQUFXLEVBQUVGLG1CQUFtQixDQUFDLENBQUMsQ0FBQztBQUM1RSxJQUFJK0IsaUJBQWlCLEdBQUcsSUFBSTdCLFlBQVksQ0FBQyxXQUFXLEVBQUVGLG1CQUFtQixDQUFDLENBQUMsQ0FBQztBQUM1RSxJQUFJZ0Msa0JBQWtCLEdBQUcsSUFBSTlCLFlBQVksQ0FBQyxZQUFZLEVBQUVGLG1CQUFtQixDQUFDLENBQUMsQ0FBQztBQUM5RSxJQUFJaUMsZUFBZSxHQUFHLElBQUkvQixZQUFZLENBQUMsU0FBUyxFQUFFRixtQkFBbUIsQ0FBQyxDQUFDLENBQUM7QUFFeEU2QixrQkFBa0IsQ0FBQ3pCLFlBQVksQ0FBQyxDQUFDO0FBQ2pDMEIsaUJBQWlCLENBQUMxQixZQUFZLENBQUMsQ0FBQztBQUNoQzJCLGlCQUFpQixDQUFDM0IsWUFBWSxDQUFDLENBQUM7QUFDaEM0QixrQkFBa0IsQ0FBQzVCLFlBQVksQ0FBQyxDQUFDO0FBQ2pDNkIsZUFBZSxDQUFDN0IsWUFBWSxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9ET00taW50ZXJhY3Rpb25zL0RPTS1pbnRlcmFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL2Z1bmN0aW9ucyBfJl90ZXN0cy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncmFiTmFtZSwgQ3JlYXRlQm9hdCwgaGl0LCBpc1N1bmssIEdhbWVib2FyZCB9IGZyb20gXCIuLi9mdW5jdGlvbnMgXyZfdGVzdHMvZnVuY3Rpb25zXCI7XG5cbmZ1bmN0aW9uIGV4YW1wbGVBZGQoYSxiKXtcbiAgICByZXR1cm4gYStiO1xufVxuXG5cbmV4cG9ydHsgZXhhbXBsZUFkZCB9OyIsImNvbnN0IGdyYWJOYW1lID0gKG5hbWUpID0+IG5hbWU7XG5cbmNsYXNzIENyZWF0ZUJvYXR7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoLCBib2F0TmFtZSwgbnVtVGltZXNIaXQ9MCwgaGFzU3Vuaz1mYWxzZSl7XG4gICAgICAgIHRoaXMubGVuZ3RoPSBsZW5ndGg7XG4gICAgICAgIHRoaXMubnVtVGltZXNIaXQ9IG51bVRpbWVzSGl0O1xuICAgICAgICB0aGlzLmhhc1N1bms9IGhhc1N1bms7XG4gICAgICAgIHRoaXMuYm9hdE5hbWU9Ym9hdE5hbWU7XG4gICAgfTtcbn07XG5cbmNvbnN0IGhpdD0oYm9hdE5hbWUpID0+IGJvYXROYW1lLm51bVRpbWVzSGl0Kys7XG5cbmNvbnN0IGlzU3Vuaz0gKGJvYXROYW1lKT0+IChib2F0TmFtZS5sZW5ndGg9PT1ib2F0TmFtZS5udW1UaW1lc0hpdCkgPyB0cnVlIDogZmFsc2U7XG5cbmNsYXNzIEdhbWVib2FyZHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmNvb3JkaW5hdGVzID0gW1xuICAgICAgICAgIC8vMFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MCwgeV9udW1iZXI6IDAsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjowLCB5X251bWJlcjogMSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjAsIHlfbnVtYmVyOiAyLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MCwgeV9udW1iZXI6IDMsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjowLCB5X251bWJlcjogNCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjAsIHlfbnVtYmVyOiA1LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MCwgeV9udW1iZXI6IDYsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjowLCB5X251bWJlcjogNywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjAsIHlfbnVtYmVyOiA4LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MCwgeV9udW1iZXI6IDksIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgLy8xXG4gICAgICAgICAgW1xuICAgICAgICAgICAgeyB4X251bWJlcjoxLCB5X251bWJlcjogMCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjEsIHlfbnVtYmVyOiAxLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MSwgeV9udW1iZXI6IDIsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoxLCB5X251bWJlcjogMywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjEsIHlfbnVtYmVyOiA0LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MSwgeV9udW1iZXI6IDUsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoxLCB5X251bWJlcjogNiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjEsIHlfbnVtYmVyOiA3LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MSwgeV9udW1iZXI6IDgsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoxLCB5X251bWJlcjogOSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICAvLzJcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjIsIHlfbnVtYmVyOiAwLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MiwgeV9udW1iZXI6IDEsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoyLCB5X251bWJlcjogMiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjIsIHlfbnVtYmVyOiAzLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MiwgeV9udW1iZXI6IDQsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoyLCB5X251bWJlcjogNSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjIsIHlfbnVtYmVyOiA2LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MiwgeV9udW1iZXI6IDcsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoyLCB5X251bWJlcjogOCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjIsIHlfbnVtYmVyOiA5LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIC8vM1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MywgeV9udW1iZXI6IDAsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjozLCB5X251bWJlcjogMSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjMsIHlfbnVtYmVyOiAyLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MywgeV9udW1iZXI6IDMsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjozLCB5X251bWJlcjogNCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjMsIHlfbnVtYmVyOiA1LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MywgeV9udW1iZXI6IDYsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjozLCB5X251bWJlcjogNywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjMsIHlfbnVtYmVyOiA4LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MywgeV9udW1iZXI6IDksIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgLy80XG4gICAgICAgICAgW1xuICAgICAgICAgICAgeyB4X251bWJlcjo0LCB5X251bWJlcjogMCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjQsIHlfbnVtYmVyOiAxLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NCwgeV9udW1iZXI6IDIsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo0LCB5X251bWJlcjogMywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjQsIHlfbnVtYmVyOiA0LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NCwgeV9udW1iZXI6IDUsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo0LCB5X251bWJlcjogNiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjQsIHlfbnVtYmVyOiA3LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NCwgeV9udW1iZXI6IDgsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo0LCB5X251bWJlcjogOSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICAvLzVcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjUsIHlfbnVtYmVyOiAwLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NSwgeV9udW1iZXI6IDEsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo1LCB5X251bWJlcjogMiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjUsIHlfbnVtYmVyOiAzLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NSwgeV9udW1iZXI6IDQsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo1LCB5X251bWJlcjogNSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjUsIHlfbnVtYmVyOiA2LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NSwgeV9udW1iZXI6IDcsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo1LCB5X251bWJlcjogOCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjUsIHlfbnVtYmVyOiA5LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIC8vNlxuICAgICAgICAgIFtcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NiwgeV9udW1iZXI6IDAsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo2LCB5X251bWJlcjogMSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjYsIHlfbnVtYmVyOiAyLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NiwgeV9udW1iZXI6IDMsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo2LCB5X251bWJlcjogNCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjYsIHlfbnVtYmVyOiA1LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NiwgeV9udW1iZXI6IDYsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo2LCB5X251bWJlcjogNywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjYsIHlfbnVtYmVyOiA4LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NiwgeV9udW1iZXI6IDksIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgLy83XG4gICAgICAgICAgW1xuICAgICAgICAgICAgeyB4X251bWJlcjo3LCB5X251bWJlcjogMCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjcsIHlfbnVtYmVyOiAxLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NywgeV9udW1iZXI6IDIsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo3LCB5X251bWJlcjogMywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjcsIHlfbnVtYmVyOiA0LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NywgeV9udW1iZXI6IDUsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo3LCB5X251bWJlcjogNiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjcsIHlfbnVtYmVyOiA3LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NywgeV9udW1iZXI6IDgsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo3LCB5X251bWJlcjogOSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICAvLzhcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjgsIHlfbnVtYmVyOiAwLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OCwgeV9udW1iZXI6IDEsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo4LCB5X251bWJlcjogMiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjgsIHlfbnVtYmVyOiAzLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OCwgeV9udW1iZXI6IDQsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo4LCB5X251bWJlcjogNSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjgsIHlfbnVtYmVyOiA2LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OCwgeV9udW1iZXI6IDcsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo4LCB5X251bWJlcjogOCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjgsIHlfbnVtYmVyOiA5LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIC8vOVxuICAgICAgICAgIFtcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OSwgeV9udW1iZXI6IDAsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo5LCB5X251bWJlcjogMSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjksIHlfbnVtYmVyOiAyLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OSwgeV9udW1iZXI6IDMsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo5LCB5X251bWJlcjogNCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjksIHlfbnVtYmVyOiA1LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OSwgeV9udW1iZXI6IDYsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo5LCB5X251bWJlcjogNywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjksIHlfbnVtYmVyOiA4LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OSwgeV9udW1iZXI6IDksIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgIF1cbiAgICAgICAgXTtcbiAgICB9O1xuXG4gICAgcGxhY2Uoc2hpcExlbmd0aCwgdmVydGljYWxPckhvcml6b250YWwsIHhOdW1iZXIsIHlOdW1iZXIsIGJvYXROYW1lT2JqLCBib2F0TmFtZSl7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICBpZih4TnVtYmVyK2k8MCB8fCB4TnVtYmVyK2k+OSB8fCB5TnVtYmVyLWk8MCB8fCB5TnVtYmVyLWk+OSl7XG4gICAgICAgICAgcmV0dXJuIFwiSW52YWxpZCBlbnRyeSwgc2hpcCBpcyBub3Qgd2l0aGluIHRoZSBsaW1pdHMgb2YgdGhlIGJvYXJkLlRyeSBhZ2Fpbi5cIjtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHZlcnRpY2FsT3JIb3Jpem9udGFsID09PSBcImhvcml6b250YWxcIil7XG4gICAgICAgICAgdGhpcy5jb29yZGluYXRlc1t4TnVtYmVyICsgaV1beU51bWJlcl0uc3RhdHVzID0gXCJmaWxsZWRcIjtcbiAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW3hOdW1iZXIgKyBpXVt5TnVtYmVyXS5ib2F0TmFtZSA9IGJvYXROYW1lO1xuICAgICAgICAgIHRoaXMuY29vcmRpbmF0ZXNbeE51bWJlciArIGldW3lOdW1iZXJdLmJvYXROYW1lT2JqID0gYm9hdE5hbWVPYmo7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh2ZXJ0aWNhbE9ySG9yaXpvbnRhbCA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgdGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyIC0gaV0uc3RhdHVzID0gXCJmaWxsZWRcIjtcbiAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW3hOdW1iZXJdW3lOdW1iZXIgLSBpXS5ib2F0TmFtZSA9IGJvYXROYW1lO1xuICAgICAgICAgIHRoaXMuY29vcmRpbmF0ZXNbeE51bWJlcl1beU51bWJlciAtIGldLmJvYXROYW1lT2JqID0gYm9hdE5hbWVPYmo7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH07XG5cbiAgICByZWNlaXZlQXR0YWNrKHhOdW1iZXIsIHlOdW1iZXIpe1xuICAgICAgaWYgKHhOdW1iZXIgPCAwIHx8IHhOdW1iZXIgPiA5IHx8IHlOdW1iZXIgPCAwIHx8IHlOdW1iZXIgPiA5KSB7XG4gICAgICAgIHJldHVybiBcIkludmFsaWQgZW50cnksIHNoaXAgaXMgbm90IHdpdGhpbiB0aGUgbGltaXRzIG9mIHRoZSBib2FyZC5UcnkgYWdhaW4uXCI7XG4gICAgICB9XG4gICAgICBpZih0aGlzLmNvb3JkaW5hdGVzW3hOdW1iZXJdW3lOdW1iZXJdLndhc1BpY2tlZD09PXRydWUpe1xuICAgICAgICByZXR1cm4gYEludmFsaWQgZW50cnksIGNvb3JkaW5hdGVzICR7eE51bWJlcn0sJHt5TnVtYmVyfSB3YXMgYWxyZWFkeSBhdHRhY2tlZC5UcnkgYWdhaW4uYDtcbiAgICAgIH07XG4gICAgICBpZiAodGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyXS5zdGF0dXMgPT09IFwiZW1wdHlcIikge1xuICAgICAgICAvL1BMQUNFSE9MREVSOiB3aGF0IHRvIGRvL2Rpc3BsYXkgd2l0aCBtaXNzZWQgYXR0YWNrc1xuICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW3hOdW1iZXJdW3lOdW1iZXJdLndhc1BpY2tlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBgTWlzc2VkISBObyBoaXQgb24gY29vcmRpbmF0ZXMgJHt4TnVtYmVyfSwke3lOdW1iZXJ9YDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNvb3JkaW5hdGVzW3hOdW1iZXJdW3lOdW1iZXJdLnN0YXR1cyA9PT0gXCJmaWxsZWRcIikge1xuICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW3hOdW1iZXJdW3lOdW1iZXJdLndhc1BpY2tlZCA9IHRydWU7XG4gICAgICAgIGhpdCh0aGlzLmNvb3JkaW5hdGVzW3hOdW1iZXJdW3lOdW1iZXJdLmJvYXROYW1lT2JqKTtcbiAgICAgICAgaWYgKGlzU3Vuayh0aGlzLmNvb3JkaW5hdGVzW3hOdW1iZXJdW3lOdW1iZXJdLmJvYXROYW1lT2JqKT09PXRydWUpIHtcbiAgICAgICAgICByZXR1cm4gYEhpdCEgYCsodGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyXS5ib2F0TmFtZSkrYCBoYXMgYmVlbiBoaXQgb24gY29vcmRpbmF0ZXMgJHt4TnVtYmVyfSwke3lOdW1iZXJ9LCBhbmQgaGFzIGJlZW4gc3VuayFgO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYEhpdCEgYCsodGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyXS5ib2F0TmFtZSkrYCBoYXMgYmVlbiBoaXQgb24gY29vcmRpbmF0ZXMgJHt4TnVtYmVyfSwke3lOdW1iZXJ9YDtcbiAgICAgIH1cbiAgICB9O1xufTtcblxuXG5leHBvcnQgeyBncmFiTmFtZSwgQ3JlYXRlQm9hdCwgaGl0LCBpc1N1bmssIEdhbWVib2FyZCB9OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSxcXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7ICovXFxufVxcbjpyb290IHtcXG4gIC8qIC0tY3VzdG9tLW5hbWU6IHZhbHVlOyAqL1xcbiAgLyogLS1saWdodC1ncmVlbi1iZzogIzQ3NjUyOTsgKi9cXG4gIC8qIGV4YW1wbGUsIGNvbG9yOiB2YXIoLS1uYXZ5LWNscikgKi9cXG4gIC0tcHJpbWFyeS1jbHI6ICM4QUE2QTM7XFxuICAtLXNlY29uZGFyeS1jbHI6ICM4QUE2QTM7XFxuICAtLWFjY2VudC1jbHI6ICM4QUE2QTM7XFxufVxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICAgIG1hcmdpbjogMHJlbTtcXG4gICAgYm9yZGVyOiAuMjVyZW0gc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG5hdnk7XFxuICAgIGNvbG9yOiBzaWx2ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbmZpZWxkc2V0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5mb3JtLnBsYXllci1uYW1le1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zdWJtaXQtbmFtZS1idG57XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgcGFkZGluZzogLjVyZW07XFxufVxcbi5uYW1lLXBsYXRlLFxcbi5jb21wdXRlci1uYW1lLXBsYXRlLCBcXG4uYm9hdC1zZWxlY3Rpb24tdGl0bGUsXFxuLmJvYXQtb3JpZW50YXRpb24tdGl0bGV7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbnRhYmxlLCB0aCwgdGQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbi5ncmlkLFxcbi5jb21wdXRlci1ncmlkLFxcbi5ib2F0LXNlbGVjdGlvbixcXG4uYm9hdC1vcmllbnRhdGlvbntcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmJvYXQtc2VsZWN0aW9uLWJ0bnMsXFxuLmJvYXQtb3JpZW50YXRpb24tYnRuc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IC4yNXJlbTtcXG59XFxudGgsIHRke1xcbiAgcGFkZGluZy10b3A6IC4yNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAuMjVyZW07XFxuICB3aWR0aDogMnJlbTtcXG59XFxuLmNsaWNrZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcbi5vdXRzaWRlLWdyaWR7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4ub3V0c2lkZS1ncmlkLWVycm9ye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYW5pbWF0aW9uLW5hbWU6IG9mZi1ncmlkLWVycm9yO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcbn1cXG5Aa2V5ZnJhbWVzIG9mZi1ncmlkLWVycm9ye1xcbiAgZnJvbSB7YmFja2dyb3VuZC1jb2xvcjogcmVkO31cXG4gIHRvIHtiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTt9XFxufVxcbi50YWJsZS1jbGFzcyxcXG4uY29tcHV0ZXItdGFibGUtY2xhc3N7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5ncmlkLFxcbi5jb21wdXRlci1ncmlke1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY2xpY2stYnRucy1tb2RhbHtcXG4gIHdpZHRoOiA0MCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICAvKiBtYXJnaW46IGF1dG87ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxOTQsIDE5NCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBvcGFjaXR5OiAwJTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XFxufVxcbi5zaG93e1xcbiAgb3BhY2l0eTogMTAwJTtcXG59XFxuLnBoYXNlZC1vdXR7XFxuICBvcGFjaXR5OiAzMCU7XFxufVxcbi5zZWxlY3RlZHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4uY29tcHV0ZXItc2VsZWN0ZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0Usc0JBQXNCO0FBQ3hCO0FBQ0E7O0VBRUUsWUFBWTtFQUNaLFNBQVM7RUFDVCwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQiwrQkFBK0I7RUFDL0Isb0NBQW9DO0VBQ3BDLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIscUJBQXFCO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTs7OztFQUlFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTs7OztFQUlFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTs7RUFFRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsV0FBVztBQUNiO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQiw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLG1DQUFtQztFQUNuQyw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLE1BQU0scUJBQXFCLENBQUM7RUFDNUIsSUFBSSx1QkFBdUIsQ0FBQztBQUM5QjtBQUNBOztFQUVFLGtCQUFrQjtBQUNwQjtBQUNBOztFQUVFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSxcXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7ICovXFxufVxcbjpyb290IHtcXG4gIC8qIC0tY3VzdG9tLW5hbWU6IHZhbHVlOyAqL1xcbiAgLyogLS1saWdodC1ncmVlbi1iZzogIzQ3NjUyOTsgKi9cXG4gIC8qIGV4YW1wbGUsIGNvbG9yOiB2YXIoLS1uYXZ5LWNscikgKi9cXG4gIC0tcHJpbWFyeS1jbHI6ICM4QUE2QTM7XFxuICAtLXNlY29uZGFyeS1jbHI6ICM4QUE2QTM7XFxuICAtLWFjY2VudC1jbHI6ICM4QUE2QTM7XFxufVxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICAgIG1hcmdpbjogMHJlbTtcXG4gICAgYm9yZGVyOiAuMjVyZW0gc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG5hdnk7XFxuICAgIGNvbG9yOiBzaWx2ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbmZpZWxkc2V0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5mb3JtLnBsYXllci1uYW1le1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zdWJtaXQtbmFtZS1idG57XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgcGFkZGluZzogLjVyZW07XFxufVxcbi5uYW1lLXBsYXRlLFxcbi5jb21wdXRlci1uYW1lLXBsYXRlLCBcXG4uYm9hdC1zZWxlY3Rpb24tdGl0bGUsXFxuLmJvYXQtb3JpZW50YXRpb24tdGl0bGV7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbnRhYmxlLCB0aCwgdGQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbi5ncmlkLFxcbi5jb21wdXRlci1ncmlkLFxcbi5ib2F0LXNlbGVjdGlvbixcXG4uYm9hdC1vcmllbnRhdGlvbntcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmJvYXQtc2VsZWN0aW9uLWJ0bnMsXFxuLmJvYXQtb3JpZW50YXRpb24tYnRuc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IC4yNXJlbTtcXG59XFxudGgsIHRke1xcbiAgcGFkZGluZy10b3A6IC4yNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAuMjVyZW07XFxuICB3aWR0aDogMnJlbTtcXG59XFxuLmNsaWNrZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcbi5vdXRzaWRlLWdyaWR7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4ub3V0c2lkZS1ncmlkLWVycm9ye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYW5pbWF0aW9uLW5hbWU6IG9mZi1ncmlkLWVycm9yO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcbn1cXG5Aa2V5ZnJhbWVzIG9mZi1ncmlkLWVycm9ye1xcbiAgZnJvbSB7YmFja2dyb3VuZC1jb2xvcjogcmVkO31cXG4gIHRvIHtiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTt9XFxufVxcbi50YWJsZS1jbGFzcyxcXG4uY29tcHV0ZXItdGFibGUtY2xhc3N7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5ncmlkLFxcbi5jb21wdXRlci1ncmlke1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY2xpY2stYnRucy1tb2RhbHtcXG4gIHdpZHRoOiA0MCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICAvKiBtYXJnaW46IGF1dG87ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxOTQsIDE5NCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBvcGFjaXR5OiAwJTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XFxufVxcbi5zaG93e1xcbiAgb3BhY2l0eTogMTAwJTtcXG59XFxuLnBoYXNlZC1vdXR7XFxuICBvcGFjaXR5OiAzMCU7XFxufVxcbi5zZWxlY3RlZHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4uY29tcHV0ZXItc2VsZWN0ZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQge1xuICBncmFiTmFtZSxcbiAgQ3JlYXRlQm9hdCxcbiAgaGl0LFxuICBpc1N1bmssXG4gIEdhbWVib2FyZCxcbn0gZnJvbSBcIi4uL3NyYy9mdW5jdGlvbnMgXyZfdGVzdHMvZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBleGFtcGxlQWRkIH0gZnJvbSBcIi4uL3NyYy9ET00taW50ZXJhY3Rpb25zL0RPTS1pbnRlcmFjdGlvbnNcIjtcblxuY29uc3QgbmFtZVBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYW1lLXBsYXRlXCIpO1xuY29uc3QgbmFtZVN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS5wbGF5ZXItbmFtZVwiKTtcblxubmFtZVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IG5hbWUgPSBlLmNvbXBvc2VkUGF0aCgpWzBdWzFdLnZhbHVlO1xuICBuYW1lUGxhdGUudGV4dENvbnRlbnQgPSBuYW1lO1xufSk7XG5cbmNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyaWRcIik7XG5cbmdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnN0IHhWYWx1ZSA9IGUuY29tcG9zZWRQYXRoKClbMF0uZGF0YXNldC54VmFsdWU7XG4gIGNvbnN0IHlWYWx1ZSA9IGUuY29tcG9zZWRQYXRoKClbMF0uZGF0YXNldC55VmFsdWU7XG5cbiAgaWYgKHhWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gY29uc29sZS5sb2coeFZhbHVlKTtcbiAgICAvLyBjb25zb2xlLmxvZyh5VmFsdWUpO1xuICB9XG59KTtcblxuY29uc3QgcGF0cm9sQm9hdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGF0cm9sLWJvYXQtYnRuXCIpO1xuY29uc3Qgc3VibWFyaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtYXJpbmUtYnRuXCIpO1xuY29uc3QgZGVzdHJveWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXN0cm95ZXItYnRuXCIpO1xuY29uc3QgYmF0dGxlc2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmF0dGxlc2hpcC1idG5cIik7XG5jb25zdCBjYXJyaWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJyaWVyLWJ0blwiKTtcbmNvbnN0IGhvcml6YW50YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvcml6YW50YWwtYnRuXCIpO1xuY29uc3QgdmVydGljYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZlcnRpY2FsLWJ0blwiKTtcblxuZnVuY3Rpb24gYm9hdFNlbGVjdGlvbkJ1dHRvbkZ1bmN0aW9uKFxuICBidG5DbGlja2VkLFxuICBidG5BcnIgPSBbcGF0cm9sQm9hdCwgc3VibWFyaW5lLCBkZXN0cm95ZXIsIGJhdHRsZXNoaXAsIGNhcnJpZXJdXG4pIHtcbiAgYnRuQ2xpY2tlZC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgbGV0IHJlbWFpbmluZ0J0bnMgPSBidG5BcnIuZmlsdGVyKChidG4pID0+IGJ0biAhPT0gYnRuQ2xpY2tlZCk7XG4gIHJlbWFpbmluZ0J0bnMuZm9yRWFjaCgoYnRuKSA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIikpO1xufVxuXG5mdW5jdGlvbiBib2F0T3JpZW50YXRpb25CdXR0b25GdW5jdGlvbihcbiAgYnRuQ2xpY2tlZCxcbiAgYnRuQXJyID0gW2hvcml6YW50YWwsIHZlcnRpY2FsXVxuKSB7XG4gIGJ0bkNsaWNrZWQuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gIGxldCByZW1haW5pbmdCdG5zID0gYnRuQXJyLmZpbHRlcigoYnRuKSA9PiBidG4gIT09IGJ0bkNsaWNrZWQpO1xuICByZW1haW5pbmdCdG5zLmZvckVhY2goKGJ0bikgPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpKTtcbn1cblxucGF0cm9sQm9hdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc29sZS5sb2coZS5wYXRoWzBdLmRhdGFzZXQucGF0cm9sQm9hdFNwYWNlcyk7XG4gIGJvYXRTZWxlY3Rpb25CdXR0b25GdW5jdGlvbihwYXRyb2xCb2F0KTtcbn0pO1xuXG5zdWJtYXJpbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnNvbGUubG9nKGUucGF0aFswXS5kYXRhc2V0LnN1Ym1hcmluZVNwYWNlcyk7XG4gIGJvYXRTZWxlY3Rpb25CdXR0b25GdW5jdGlvbihzdWJtYXJpbmUpO1xufSk7XG5cbmRlc3Ryb3llci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc29sZS5sb2coZS5wYXRoWzBdLmRhdGFzZXQuZGVzdHJveWVyU3BhY2VzKTtcbiAgYm9hdFNlbGVjdGlvbkJ1dHRvbkZ1bmN0aW9uKGRlc3Ryb3llcik7XG59KTtcblxuYmF0dGxlc2hpcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc29sZS5sb2coZS5wYXRoWzBdLmRhdGFzZXQuYmF0dGxlc2hpcFNwYWNlcyk7XG4gIGJvYXRTZWxlY3Rpb25CdXR0b25GdW5jdGlvbihiYXR0bGVzaGlwKTtcbn0pO1xuXG5jYXJyaWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zb2xlLmxvZyhlLnBhdGhbMF0uZGF0YXNldC5jYXJyaWVyU3BhY2VzKTtcbiAgYm9hdFNlbGVjdGlvbkJ1dHRvbkZ1bmN0aW9uKGNhcnJpZXIpO1xufSk7XG5cbmhvcml6YW50YWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnNvbGUubG9nKGUucGF0aFswXS5kYXRhc2V0LmJvYXRPcmllbnRhdGlvbik7XG4gIGJvYXRPcmllbnRhdGlvbkJ1dHRvbkZ1bmN0aW9uKGhvcml6YW50YWwpO1xufSk7XG5cbnZlcnRpY2FsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zb2xlLmxvZyhlLnBhdGhbMF0uZGF0YXNldC5ib2F0T3JpZW50YXRpb24pO1xuICBib2F0T3JpZW50YXRpb25CdXR0b25GdW5jdGlvbih2ZXJ0aWNhbCk7XG59KTtcblxuLy9jbGljay1idG5zLW1vZGFsXG5jb25zdCBjbGlja0J0bnNNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xpY2stYnRucy1tb2RhbFwiKTtcbmNvbnN0IHRhYmxlQ2xhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlLWNsYXNzXCIpO1xuXG50YWJsZUNsYXNzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgaWYgKFxuICAgICghcGF0cm9sQm9hdC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFzdWJtYXJpbmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhZGVzdHJveWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIWJhdHRsZXNoaXAuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhY2Fycmllci5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikpIHx8XG4gICAgKCFob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIXZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSlcbiAgKSB7XG4gICAgY29uc29sZS5sb2coXCJOb25lIG9mIHRoZXNlIGJ1dHRvbnMgYXJlIGNsaWNrZWRcIik7IC8vVEhJUyBXT1JLUyEhXG4gICAgLy8gcGF0cm9sQm9hdC5jbGFzc0xpc3QuYWRkKFwibm8tYnRuLWNsaWNrZWQtZXJyb3JcIik7XG4gICAgY2xpY2tCdG5zTW9kYWwuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgdGFibGVDbGFzcy5jbGFzc0xpc3QuYWRkKFwicGhhc2VkLW91dFwiKTtcbiAgfVxufSk7XG5cbi8vIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInRkXCIpO1xuY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllci1jZWxsXCIpO1xuXG5jZWxscy5mb3JFYWNoKChjZWxsKSA9PlxuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHhOdW0gPSBOdW1iZXIoY2VsbC5kYXRhc2V0LnhWYWx1ZSk7XG4gICAgY29uc3QgeU51bSA9IE51bWJlcihjZWxsLmRhdGFzZXQueVZhbHVlKTtcblxuICAgIGNvbnN0IG5leHRDZWxsMl9ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDF9JHt5TnVtfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsM19ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDJ9JHt5TnVtfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsNF9ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDN9JHt5TnVtfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsNV9ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDR9JHt5TnVtfVwiXWBcbiAgICApO1xuXG4gICAgY29uc3QgbmV4dENlbGwyX3ZlcnRpY2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bX0ke3lOdW0gKyAxfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsM192ZXJ0aWNhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW19JHt5TnVtICsgMn1cIl1gXG4gICAgKTtcbiAgICBjb25zdCBuZXh0Q2VsbDRfdmVydGljYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtfSR7eU51bSArIDN9XCJdYFxuICAgICk7XG4gICAgY29uc3QgbmV4dENlbGw1X3ZlcnRpY2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bX0ke3lOdW0gKyA0fVwiXWBcbiAgICApO1xuXG4gICAgaWYgKFxuICAgICAgcGF0cm9sQm9hdC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIGhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX2hvcml6YW50YWwpIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl9ob3JpemFudGFsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBwYXRyb2xCb2F0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghbmV4dENlbGwyX3ZlcnRpY2FsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBzdWJtYXJpbmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICBob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKG5leHRDZWxsMl9ob3JpemFudGFsICYmIG5leHRDZWxsM19ob3JpemFudGFsKSB7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJiAhbmV4dENlbGwzX2hvcml6YW50YWwpIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl9ob3JpemFudGFsICYmICFuZXh0Q2VsbDNfaG9yaXphbnRhbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgc3VibWFyaW5lLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmIG5leHRDZWxsM192ZXJ0aWNhbCkge1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgIW5leHRDZWxsM192ZXJ0aWNhbCkge1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl92ZXJ0aWNhbCAmJiAhbmV4dENlbGwzX3ZlcnRpY2FsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBkZXN0cm95ZXIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICBob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKG5leHRDZWxsMl9ob3JpemFudGFsICYmIG5leHRDZWxsM19ob3JpemFudGFsKSB7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJiAhbmV4dENlbGwzX2hvcml6YW50YWwpIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl9ob3JpemFudGFsICYmICFuZXh0Q2VsbDNfaG9yaXphbnRhbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgZGVzdHJveWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmIG5leHRDZWxsM192ZXJ0aWNhbCkge1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgIW5leHRDZWxsM192ZXJ0aWNhbCkge1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl92ZXJ0aWNhbCAmJiAhbmV4dENlbGwzX3ZlcnRpY2FsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBiYXR0bGVzaGlwLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIilcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAhbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBiYXR0bGVzaGlwLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmIG5leHRDZWxsM192ZXJ0aWNhbCAmJiBuZXh0Q2VsbDRfdmVydGljYWwpIHtcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgbmV4dENlbGwzX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDRfdmVydGljYWwpIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgIW5leHRDZWxsM192ZXJ0aWNhbCAmJiAhbmV4dENlbGw0X3ZlcnRpY2FsKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghbmV4dENlbGwyX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDNfdmVydGljYWwgJiYgIW5leHRDZWxsNF92ZXJ0aWNhbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY2Fycmllci5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIGhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsNV9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw1X2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDVfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgICFuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNF9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDVfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGw1X2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGw1X2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNV9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBjYXJyaWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsNV92ZXJ0aWNhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNV92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV92ZXJ0aWNhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV92ZXJ0aWNhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV92ZXJ0aWNhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgIW5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV92ZXJ0aWNhbFxuICAgICAgKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGw1X3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsNV92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw1X3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pXG4pO1xuXG50YWJsZUNsYXNzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcbiAgaWYgKFxuICAgICghcGF0cm9sQm9hdC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFzdWJtYXJpbmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhZGVzdHJveWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIWJhdHRsZXNoaXAuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhY2Fycmllci5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikpIHx8XG4gICAgKCFob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIXZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSlcbiAgKSB7XG4gICAgY29uc29sZS5sb2coXCJOb25lIG9mIHRoZXNlIGJ1dHRvbnMgYXJlIGNsaWNrZWRcIik7IC8vVEhJUyBXT1JLUyEhXG4gICAgLy8gcGF0cm9sQm9hdC5jbGFzc0xpc3QucmVtb3ZlKFwibm8tYnRuLWNsaWNrZWQtZXJyb3JcIik7XG4gICAgY2xpY2tCdG5zTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgdGFibGVDbGFzcy5jbGFzc0xpc3QucmVtb3ZlKFwicGhhc2VkLW91dFwiKTtcbiAgfVxufSk7XG5cbmNlbGxzLmZvckVhY2goKGNlbGwpID0+XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICBjb25zdCB4TnVtID0gTnVtYmVyKGNlbGwuZGF0YXNldC54VmFsdWUpO1xuICAgIGNvbnN0IHlOdW0gPSBOdW1iZXIoY2VsbC5kYXRhc2V0LnlWYWx1ZSk7XG5cbiAgICBjb25zdCBuZXh0Q2VsbDJfaG9yaXphbnRhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW0gKyAxfSR7eU51bX1cIl1gXG4gICAgKTtcbiAgICBjb25zdCBuZXh0Q2VsbDNfaG9yaXphbnRhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW0gKyAyfSR7eU51bX1cIl1gXG4gICAgKTtcbiAgICBjb25zdCBuZXh0Q2VsbDRfaG9yaXphbnRhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW0gKyAzfSR7eU51bX1cIl1gXG4gICAgKTtcbiAgICBjb25zdCBuZXh0Q2VsbDVfaG9yaXphbnRhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW0gKyA0fSR7eU51bX1cIl1gXG4gICAgKTtcblxuICAgIGNvbnN0IG5leHRDZWxsMl92ZXJ0aWNhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW19JHt5TnVtICsgMX1cIl1gXG4gICAgKTtcbiAgICBjb25zdCBuZXh0Q2VsbDNfdmVydGljYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtfSR7eU51bSArIDJ9XCJdYFxuICAgICk7XG4gICAgY29uc3QgbmV4dENlbGw0X3ZlcnRpY2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bX0ke3lOdW0gKyAzfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsNV92ZXJ0aWNhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW19JHt5TnVtICsgNH1cIl1gXG4gICAgKTtcblxuICAgIGlmIChcbiAgICAgIHBhdHJvbEJvYXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICBob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKG5leHRDZWxsMl9ob3JpemFudGFsKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKCFuZXh0Q2VsbDJfaG9yaXphbnRhbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgcGF0cm9sQm9hdC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIHZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKG5leHRDZWxsMl92ZXJ0aWNhbCkge1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl92ZXJ0aWNhbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgc3VibWFyaW5lLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIilcbiAgICApIHtcbiAgICAgIGlmIChuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJiBuZXh0Q2VsbDNfaG9yaXphbnRhbCkge1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGwyX2hvcml6YW50YWwgJiYgIW5leHRDZWxsM19ob3JpemFudGFsKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKCFuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJiAhbmV4dENlbGwzX2hvcml6YW50YWwpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHN1Ym1hcmluZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIHZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKG5leHRDZWxsMl92ZXJ0aWNhbCAmJiBuZXh0Q2VsbDNfdmVydGljYWwpIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDNfdmVydGljYWwpIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKCFuZXh0Q2VsbDJfdmVydGljYWwgJiYgIW5leHRDZWxsM192ZXJ0aWNhbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgZGVzdHJveWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIilcbiAgICApIHtcbiAgICAgIGlmIChuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJiBuZXh0Q2VsbDNfaG9yaXphbnRhbCkge1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGwyX2hvcml6YW50YWwgJiYgIW5leHRDZWxsM19ob3JpemFudGFsKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKCFuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJiAhbmV4dENlbGwzX2hvcml6YW50YWwpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGRlc3Ryb3llci5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIHZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKG5leHRDZWxsMl92ZXJ0aWNhbCAmJiBuZXh0Q2VsbDNfdmVydGljYWwpIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDNfdmVydGljYWwpIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKCFuZXh0Q2VsbDJfdmVydGljYWwgJiYgIW5leHRDZWxsM192ZXJ0aWNhbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgYmF0dGxlc2hpcC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIGhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNF9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgIW5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWxcbiAgICAgICkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgYmF0dGxlc2hpcC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIHZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKG5leHRDZWxsMl92ZXJ0aWNhbCAmJiBuZXh0Q2VsbDNfdmVydGljYWwgJiYgbmV4dENlbGw0X3ZlcnRpY2FsKSB7XG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmIG5leHRDZWxsM192ZXJ0aWNhbCAmJiAhbmV4dENlbGw0X3ZlcnRpY2FsKSB7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDNfdmVydGljYWwgJiYgIW5leHRDZWxsNF92ZXJ0aWNhbCkge1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl92ZXJ0aWNhbCAmJiAhbmV4dENlbGwzX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDRfdmVydGljYWwpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGNhcnJpZXIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICBob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDVfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNV9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw1X2hvcml6YW50YWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNF9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDVfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNF9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDVfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAhbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw1X2hvcml6YW50YWxcbiAgICAgICkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsNV9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsNV9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDVfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY2Fycmllci5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIHZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDVfdmVydGljYWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDVfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDVfdmVydGljYWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDVfdmVydGljYWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsM192ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDVfdmVydGljYWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgICFuZXh0Q2VsbDJfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsM192ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDVfdmVydGljYWxcbiAgICAgICkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsNV92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDVfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNV92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuICB9KVxuKTtcblxuY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT5cbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHhOdW0gPSBOdW1iZXIoY2VsbC5kYXRhc2V0LnhWYWx1ZSk7XG4gICAgY29uc3QgeU51bSA9IE51bWJlcihjZWxsLmRhdGFzZXQueVZhbHVlKTtcblxuICAgIGNvbnN0IG5leHRDZWxsMl9ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDF9JHt5TnVtfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsM19ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDJ9JHt5TnVtfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsNF9ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDN9JHt5TnVtfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsNV9ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDR9JHt5TnVtfVwiXWBcbiAgICApO1xuXG4gICAgY29uc3QgbmV4dENlbGwyX3ZlcnRpY2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bX0ke3lOdW0gKyAxfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsM192ZXJ0aWNhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW19JHt5TnVtICsgMn1cIl1gXG4gICAgKTtcbiAgICBjb25zdCBuZXh0Q2VsbDRfdmVydGljYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtfSR7eU51bSArIDN9XCJdYFxuICAgICk7XG4gICAgY29uc3QgbmV4dENlbGw1X3ZlcnRpY2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bX0ke3lOdW0gKyA0fVwiXWBcbiAgICApO1xuXG4gICAgaWYgKFxuICAgICAgcGF0cm9sQm9hdC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIGhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhZ3JpZC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcIm91dHNpZGUtZ3JpZFwiKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICAhY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDJfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgcGF0cm9sQm9hdC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgcGF0cm9sQm9hdC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgcGF0cm9sQm9hdC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIHZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIWdyaWQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJvdXRzaWRlLWdyaWRcIilcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgIWNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwyX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBwYXRyb2xCb2F0LmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBwYXRyb2xCb2F0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgc3VibWFyaW5lLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFncmlkLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwib3V0c2lkZS1ncmlkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgICFjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsMl9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsM19ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBzdWJtYXJpbmUuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIHN1Ym1hcmluZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBzdWJtYXJpbmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICB2ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFncmlkLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwib3V0c2lkZS1ncmlkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgICFjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDNfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhZ3JpZC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcIm91dHNpZGUtZ3JpZFwiKVxuICAgICAgKSB7XG4gICAgICAgIHN1Ym1hcmluZS5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgc3VibWFyaW5lLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgZGVzdHJveWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFncmlkLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwib3V0c2lkZS1ncmlkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgICFjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsMl9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsM19ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBkZXN0cm95ZXIuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGRlc3Ryb3llci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBkZXN0cm95ZXIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICB2ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFncmlkLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwib3V0c2lkZS1ncmlkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgICFjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDNfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIGRlc3Ryb3llci5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgZGVzdHJveWVyLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgYmF0dGxlc2hpcC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIGhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhZ3JpZC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcIm91dHNpZGUtZ3JpZFwiKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICAhY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDJfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDNfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDRfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFncmlkLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwib3V0c2lkZS1ncmlkXCIpXG4gICAgICApIHtcbiAgICAgICAgYmF0dGxlc2hpcC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgYmF0dGxlc2hpcC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGJhdHRsZXNoaXAuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICB2ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFncmlkLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwib3V0c2lkZS1ncmlkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgICFjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDNfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGw0X3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIWdyaWQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJvdXRzaWRlLWdyaWRcIilcbiAgICAgICkge1xuICAgICAgICBiYXR0bGVzaGlwLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBiYXR0bGVzaGlwLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY2Fycmllci5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIGhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhZ3JpZC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcIm91dHNpZGUtZ3JpZFwiKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICAhY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDJfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDNfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDRfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDVfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgY2Fycmllci5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2Fycmllci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDVfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY2Fycmllci5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIHZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIWdyaWQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJvdXRzaWRlLWdyaWRcIilcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgIWNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwyX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsM192ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDRfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGw1X3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBjYXJyaWVyLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBjYXJyaWVyLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsNV92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcGF0cm9sQm9hdC5kaXNhYmxlZCA9PT0gdHJ1ZSAmJlxuICAgICAgICBzdWJtYXJpbmUuZGlzYWJsZWQgPT09IHRydWUgJiZcbiAgICAgICAgZGVzdHJveWVyLmRpc2FibGVkID09PSB0cnVlICYmXG4gICAgICAgIGJhdHRsZXNoaXAuZGlzYWJsZWQgPT09IHRydWUgJiZcbiAgICAgICAgY2Fycmllci5kaXNhYmxlZCA9PT0gdHJ1ZVxuICAgICAgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWxsIGJvYXRzIGhhdmUgYmVlbiBwbGFjZWRcIik7XG4gICAgICB9XG4gICAgfVxuICB9KVxuKTtcblxuLy9vd2tyaW5nIG9uIGNvbXB1dGVyIGZ1bmN0aW9uYWxpdHlcbmZ1bmN0aW9uIHJhbmRvbU51bUJldHdlZW4obWluLCBtYXgpIHtcbiAgbGV0IG51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gIHJldHVybiBudW07XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVyT3JpZW50YXRpb24oKSB7XG4gIGxldCBjb21wdXRlck9yaWVudGF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgKyAxO1xuICBpZiAoY29tcHV0ZXJPcmllbnRhdGlvbiA9PT0gMSkge1xuICAgIHJldHVybiBcImhvcml6YW50YWxcIjtcbiAgfVxuICBpZiAoY29tcHV0ZXJPcmllbnRhdGlvbiA9PT0gMikge1xuICAgIHJldHVybiBcInZlcnRpY2FsXCI7XG4gIH1cbn1cblxuY29uc29sZS5sb2coY29tcHV0ZXJPcmllbnRhdGlvbigpKTtcblxubGV0IHVzZWROdW1iZXJzID0gW107XG5cbmNsYXNzIENvbXB1dGVyQm9hdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIG5hbWUsXG4gICAgb3JpZW50YXRpb25cbiAgICAvLyB4VmFsdWUsXG4gICAgLy8geVZhbHVlLFxuICAgIC8vIHN0YXJ0aW5nQ2VsbCxcbiAgICAvLyBuZXh0Q2VsbDIsXG4gICAgLy8gbmV4dENlbGwzLFxuICAgIC8vIG5leHRDZWxsNCxcbiAgICAvLyBuZXh0Q2VsbDVcbiAgKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm9yaWVudGF0aW9uID0gb3JpZW50YXRpb247XG4gICAgLy8gdGhpcy54VmFsdWUgPSByYW5kb21OdW1CZXR3ZWVuKDEsIDkpO1xuICAgIC8vIHRoaXMueVZhbHVlID0gcmFuZG9tTnVtQmV0d2VlbigxLCAxMCk7XG4gICAgLy8gdGhpcy5zdGFydGluZ0NlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIC8vICAgYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHt0aGlzLnhWYWx1ZX0ke3RoaXMueVZhbHVlfVwiXWBcbiAgICAvLyApO1xuICAgIC8vIHRoaXMubmV4dENlbGwyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAvLyAgIGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7dGhpcy54VmFsdWUgKyAxfSR7dGhpcy55VmFsdWV9XCJdYFxuICAgIC8vICk7XG4gICAgLy8gdGhpcy5uZXh0Q2VsbDMgPSBuZXh0Q2VsbDM7XG4gICAgLy8gdGhpcy5uZXh0Q2VsbDQgPSBuZXh0Q2VsbDQ7XG4gICAgLy8gdGhpcy5uZXh0Q2VsbDUgPSBuZXh0Q2VsbDU7XG4gIH1cbiAgY29tcHV0ZXJDb2RlKCkge1xuICAgIGlmICh0aGlzLm5hbWUgPT09IFwicGF0cm9sQm9hdFwiICYmIHRoaXMub3JpZW50YXRpb24gPT09IFwiaG9yaXphbnRhbFwiKSB7XG4gICAgICBsZXQgeCA9IHJhbmRvbU51bUJldHdlZW4oMSwgOSk7XG4gICAgICBsZXQgeSA9IHJhbmRvbU51bUJldHdlZW4oMSwgMTApO1xuICAgICAgbGV0IG5leHRDZWxsMj0geCsxO1xuICAgICAgbGV0IHhUb1N0cmluZz0geC50b1N0cmluZygpOyAgICAgIFxuICAgICAgbGV0IHlUb1N0cmluZz0geS50b1N0cmluZygpO1xuICAgICAgbGV0IG5leHRDZWxsMlN0cmluZz0gbmV4dENlbGwyLnRvU3RyaW5nKCk7ICAgICAgXG4gICAgICBsZXQgY2VsbENvZGU9IHhUb1N0cmluZyArIHlUb1N0cmluZzsgIFxuICAgICAgbGV0IG5leHRDZWxsMkNvZGU9IG5leHRDZWxsMlN0cmluZyArIHlUb1N0cmluZztcbiAgICAgIGlmKHVzZWROdW1iZXJzLmluY2x1ZGVzKGNlbGxDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDJDb2RlKSl7XG4gICAgICAgIHRoaXMuY29tcHV0ZXJDb2RlKCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgbGV0IGFjdHVhbENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7Y2VsbENvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGwyQ29kZX1cIl1gKTtcbiAgICAgICAgYWN0dWFsQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbENlbGwudGV4dENvbnRlbnQ9IFwiMVwiO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDIuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKGNlbGxDb2RlKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChuZXh0Q2VsbDJDb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMubmFtZSA9PT0gXCJzdWJtYXJpbmVcIiAmJiB0aGlzLm9yaWVudGF0aW9uID09PSBcImhvcml6YW50YWxcIikge1xuICAgICAgbGV0IHggPSByYW5kb21OdW1CZXR3ZWVuKDEsIDgpO1xuICAgICAgbGV0IHkgPSByYW5kb21OdW1CZXR3ZWVuKDEsIDEwKTtcbiAgICAgIGxldCBuZXh0Q2VsbDI9IHgrMTtcbiAgICAgIGxldCBuZXh0Q2VsbDM9IHgrMjtcbiAgICAgIGxldCB4VG9TdHJpbmc9IHgudG9TdHJpbmcoKTsgICAgICBcbiAgICAgIGxldCB5VG9TdHJpbmc9IHkudG9TdHJpbmcoKTtcbiAgICAgIGxldCBuZXh0Q2VsbDJTdHJpbmc9IG5leHRDZWxsMi50b1N0cmluZygpOyAgICAgIFxuICAgICAgbGV0IG5leHRDZWxsM1N0cmluZz0gbmV4dENlbGwzLnRvU3RyaW5nKCk7ICAgICBcbiAgICAgIGxldCBjZWxsQ29kZT0geFRvU3RyaW5nICsgeVRvU3RyaW5nOyAgXG4gICAgICBsZXQgbmV4dENlbGwyQ29kZT0gbmV4dENlbGwyU3RyaW5nICsgeVRvU3RyaW5nOyBcbiAgICAgIGxldCBuZXh0Q2VsbDNDb2RlPSBuZXh0Q2VsbDNTdHJpbmcgKyB5VG9TdHJpbmc7IFxuICAgICAgaWYodXNlZE51bWJlcnMuaW5jbHVkZXMoY2VsbENvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsMkNvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsM0NvZGUpKXtcbiAgICAgICAgdGhpcy5jb21wdXRlckNvZGUoKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBsZXQgYWN0dWFsQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtjZWxsQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDJDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGwzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsM0NvZGV9XCJdYCk7XG4gICAgICAgIGFjdHVhbENlbGwuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxDZWxsLnRleHRDb250ZW50PSBcIjFcIjtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwyLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwzLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChjZWxsQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGwyQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGwzQ29kZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLm5hbWUgPT09IFwiZGVzdHJveWVyXCIgJiYgdGhpcy5vcmllbnRhdGlvbiA9PT0gXCJob3JpemFudGFsXCIpIHtcbiAgICAgIGxldCB4ID0gcmFuZG9tTnVtQmV0d2VlbigxLCA4KTtcbiAgICAgIGxldCB5ID0gcmFuZG9tTnVtQmV0d2VlbigxLCAxMCk7XG4gICAgICBsZXQgbmV4dENlbGwyPSB4KzE7XG4gICAgICBsZXQgbmV4dENlbGwzPSB4KzI7XG4gICAgICBsZXQgeFRvU3RyaW5nPSB4LnRvU3RyaW5nKCk7ICAgICAgXG4gICAgICBsZXQgeVRvU3RyaW5nPSB5LnRvU3RyaW5nKCk7XG4gICAgICBsZXQgbmV4dENlbGwyU3RyaW5nPSBuZXh0Q2VsbDIudG9TdHJpbmcoKTsgICAgICBcbiAgICAgIGxldCBuZXh0Q2VsbDNTdHJpbmc9IG5leHRDZWxsMy50b1N0cmluZygpOyAgICAgXG4gICAgICBsZXQgY2VsbENvZGU9IHhUb1N0cmluZyArIHlUb1N0cmluZzsgIFxuICAgICAgbGV0IG5leHRDZWxsMkNvZGU9IG5leHRDZWxsMlN0cmluZyArIHlUb1N0cmluZzsgXG4gICAgICBsZXQgbmV4dENlbGwzQ29kZT0gbmV4dENlbGwzU3RyaW5nICsgeVRvU3RyaW5nOyBcbiAgICAgIGlmKHVzZWROdW1iZXJzLmluY2x1ZGVzKGNlbGxDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDJDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDNDb2RlKSl7XG4gICAgICAgIHRoaXMuY29tcHV0ZXJDb2RlKCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgbGV0IGFjdHVhbENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7Y2VsbENvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGwyQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDNDb2RlfVwiXWApO1xuICAgICAgICBhY3R1YWxDZWxsLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsQ2VsbC50ZXh0Q29udGVudD0gXCIxXCI7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMi5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMy5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2goY2VsbENvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsMkNvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsM0NvZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5uYW1lID09PSBcImJhdHRsZXNoaXBcIiAmJiB0aGlzLm9yaWVudGF0aW9uID09PSBcImhvcml6YW50YWxcIikge1xuICAgICAgbGV0IHggPSByYW5kb21OdW1CZXR3ZWVuKDEsIDcpO1xuICAgICAgbGV0IHkgPSByYW5kb21OdW1CZXR3ZWVuKDEsIDEwKTtcbiAgICAgIGxldCBuZXh0Q2VsbDI9IHgrMTtcbiAgICAgIGxldCBuZXh0Q2VsbDM9IHgrMjtcbiAgICAgIGxldCBuZXh0Q2VsbDQ9IHgrMztcbiAgICAgIGxldCB4VG9TdHJpbmc9IHgudG9TdHJpbmcoKTsgICAgICBcbiAgICAgIGxldCB5VG9TdHJpbmc9IHkudG9TdHJpbmcoKTtcbiAgICAgIGxldCBuZXh0Q2VsbDJTdHJpbmc9IG5leHRDZWxsMi50b1N0cmluZygpOyAgICAgIFxuICAgICAgbGV0IG5leHRDZWxsM1N0cmluZz0gbmV4dENlbGwzLnRvU3RyaW5nKCk7ICAgICBcbiAgICAgIGxldCBuZXh0Q2VsbDRTdHJpbmc9IG5leHRDZWxsNC50b1N0cmluZygpOyAgICAgXG4gICAgICBsZXQgY2VsbENvZGU9IHhUb1N0cmluZyArIHlUb1N0cmluZzsgIFxuICAgICAgbGV0IG5leHRDZWxsMkNvZGU9IG5leHRDZWxsMlN0cmluZyArIHlUb1N0cmluZzsgXG4gICAgICBsZXQgbmV4dENlbGwzQ29kZSA9IG5leHRDZWxsM1N0cmluZyArIHlUb1N0cmluZztcbiAgICAgIGxldCBuZXh0Q2VsbDRDb2RlID0gbmV4dENlbGw0U3RyaW5nICsgeVRvU3RyaW5nOyBcbiAgICAgIGlmKHVzZWROdW1iZXJzLmluY2x1ZGVzKGNlbGxDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDJDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDNDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDRDb2RlKSl7XG4gICAgICAgIHRoaXMuY29tcHV0ZXJDb2RlKCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgbGV0IGFjdHVhbENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7Y2VsbENvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGwyQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDNDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGw0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsNENvZGV9XCJdYCk7XG4gICAgICAgIGFjdHVhbENlbGwuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxDZWxsLnRleHRDb250ZW50PSBcIjFcIjtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwyLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwzLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGw0LmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChjZWxsQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGwyQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGwzQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGw0Q29kZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLm5hbWUgPT09IFwiY2FycmllclwiICYmIHRoaXMub3JpZW50YXRpb24gPT09IFwiaG9yaXphbnRhbFwiKSB7XG4gICAgICBsZXQgeCA9IHJhbmRvbU51bUJldHdlZW4oMSwgNik7XG4gICAgICBsZXQgeSA9IHJhbmRvbU51bUJldHdlZW4oMSwgMTApO1xuICAgICAgbGV0IG5leHRDZWxsMj0geCsxO1xuICAgICAgbGV0IG5leHRDZWxsMz0geCsyO1xuICAgICAgbGV0IG5leHRDZWxsND0geCszO1xuICAgICAgbGV0IG5leHRDZWxsNT0geCs0O1xuICAgICAgbGV0IHhUb1N0cmluZz0geC50b1N0cmluZygpOyAgICAgIFxuICAgICAgbGV0IHlUb1N0cmluZz0geS50b1N0cmluZygpO1xuICAgICAgbGV0IG5leHRDZWxsMlN0cmluZz0gbmV4dENlbGwyLnRvU3RyaW5nKCk7ICAgICAgXG4gICAgICBsZXQgbmV4dENlbGwzU3RyaW5nPSBuZXh0Q2VsbDMudG9TdHJpbmcoKTsgICAgIFxuICAgICAgbGV0IG5leHRDZWxsNFN0cmluZz0gbmV4dENlbGw0LnRvU3RyaW5nKCk7ICAgICBcbiAgICAgIGxldCBuZXh0Q2VsbDVTdHJpbmc9IG5leHRDZWxsNS50b1N0cmluZygpOyAgICAgXG4gICAgICBsZXQgY2VsbENvZGU9IHhUb1N0cmluZyArIHlUb1N0cmluZzsgIFxuICAgICAgbGV0IG5leHRDZWxsMkNvZGU9IG5leHRDZWxsMlN0cmluZyArIHlUb1N0cmluZzsgXG4gICAgICBsZXQgbmV4dENlbGwzQ29kZSA9IG5leHRDZWxsM1N0cmluZyArIHlUb1N0cmluZztcbiAgICAgIGxldCBuZXh0Q2VsbDRDb2RlID0gbmV4dENlbGw0U3RyaW5nICsgeVRvU3RyaW5nO1xuICAgICAgbGV0IG5leHRDZWxsNUNvZGUgPSBuZXh0Q2VsbDVTdHJpbmcgKyB5VG9TdHJpbmc7IFxuICAgICAgaWYodXNlZE51bWJlcnMuaW5jbHVkZXMoY2VsbENvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsMkNvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsM0NvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsNENvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsNUNvZGUpKXtcbiAgICAgICAgdGhpcy5jb21wdXRlckNvZGUoKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBsZXQgYWN0dWFsQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtjZWxsQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDJDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGwzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsM0NvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGw0Q29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsNSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDVDb2RlfVwiXWApO1xuICAgICAgICBhY3R1YWxDZWxsLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsQ2VsbC50ZXh0Q29udGVudD0gXCIxXCI7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMi5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMy5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsNC5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsNS5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2goY2VsbENvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsMkNvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsM0NvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsNENvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsNUNvZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5uYW1lID09PSBcInBhdHJvbEJvYXRcIiAmJiB0aGlzLm9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGxldCB4ID0gcmFuZG9tTnVtQmV0d2VlbigxLCAxMCk7XG4gICAgICBsZXQgeSA9IHJhbmRvbU51bUJldHdlZW4oMSwgOSk7XG4gICAgICBsZXQgbmV4dENlbGwyID0geSArIDE7XG4gICAgICBsZXQgeFRvU3RyaW5nID0geC50b1N0cmluZygpO1xuICAgICAgbGV0IHlUb1N0cmluZyA9IHkudG9TdHJpbmcoKTtcbiAgICAgIGxldCBuZXh0Q2VsbDJTdHJpbmcgPSBuZXh0Q2VsbDIudG9TdHJpbmcoKTtcbiAgICAgIGxldCBjZWxsQ29kZSA9IHhUb1N0cmluZyArIHlUb1N0cmluZztcbiAgICAgIGxldCBuZXh0Q2VsbDJDb2RlID0geFRvU3RyaW5nICsgbmV4dENlbGwyU3RyaW5nO1xuICAgICAgaWYodXNlZE51bWJlcnMuaW5jbHVkZXMoY2VsbENvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsMkNvZGUpKXtcbiAgICAgICAgdGhpcy5jb21wdXRlckNvZGUoKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBsZXQgYWN0dWFsQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtjZWxsQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDJDb2RlfVwiXWApO1xuICAgICAgICBhY3R1YWxDZWxsLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsQ2VsbC50ZXh0Q29udGVudD0gXCIxXCI7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMi5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2goY2VsbENvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsMkNvZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5uYW1lID09PSBcInN1Ym1hcmluZVwiICYmIHRoaXMub3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgbGV0IHggPSByYW5kb21OdW1CZXR3ZWVuKDEsIDEwKTtcbiAgICAgIGxldCB5ID0gcmFuZG9tTnVtQmV0d2VlbigxLCA4KTtcbiAgICAgIGxldCBuZXh0Q2VsbDI9IHkrMTtcbiAgICAgIGxldCBuZXh0Q2VsbDM9IHkrMjtcbiAgICAgIGxldCB4VG9TdHJpbmc9IHgudG9TdHJpbmcoKTsgICAgICBcbiAgICAgIGxldCB5VG9TdHJpbmc9IHkudG9TdHJpbmcoKTtcbiAgICAgIGxldCBuZXh0Q2VsbDJTdHJpbmc9IG5leHRDZWxsMi50b1N0cmluZygpOyAgICAgIFxuICAgICAgbGV0IG5leHRDZWxsM1N0cmluZz0gbmV4dENlbGwzLnRvU3RyaW5nKCk7ICAgICBcbiAgICAgIGxldCBjZWxsQ29kZT0geFRvU3RyaW5nICsgeVRvU3RyaW5nOyAgXG4gICAgICBsZXQgbmV4dENlbGwyQ29kZT0geFRvU3RyaW5nICsgbmV4dENlbGwyU3RyaW5nOyBcbiAgICAgIGxldCBuZXh0Q2VsbDNDb2RlPSB4VG9TdHJpbmcgKyBuZXh0Q2VsbDNTdHJpbmc7IFxuICAgICAgaWYodXNlZE51bWJlcnMuaW5jbHVkZXMoY2VsbENvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsMkNvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsM0NvZGUpKXtcbiAgICAgICAgdGhpcy5jb21wdXRlckNvZGUoKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBsZXQgYWN0dWFsQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtjZWxsQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDJDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGwzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsM0NvZGV9XCJdYCk7XG4gICAgICAgIGFjdHVhbENlbGwuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxDZWxsLnRleHRDb250ZW50PSBcIjFcIjtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwyLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwzLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChjZWxsQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGwyQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGwzQ29kZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLm5hbWUgPT09IFwiZGVzdHJveWVyXCIgJiYgdGhpcy5vcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBsZXQgeCA9IHJhbmRvbU51bUJldHdlZW4oMSwgMTApO1xuICAgICAgbGV0IHkgPSByYW5kb21OdW1CZXR3ZWVuKDEsIDgpO1xuICAgICAgbGV0IG5leHRDZWxsMj0geSsxO1xuICAgICAgbGV0IG5leHRDZWxsMz0geSsyO1xuICAgICAgbGV0IHhUb1N0cmluZz0geC50b1N0cmluZygpOyAgICAgIFxuICAgICAgbGV0IHlUb1N0cmluZz0geS50b1N0cmluZygpO1xuICAgICAgbGV0IG5leHRDZWxsMlN0cmluZz0gbmV4dENlbGwyLnRvU3RyaW5nKCk7ICAgICAgXG4gICAgICBsZXQgbmV4dENlbGwzU3RyaW5nPSBuZXh0Q2VsbDMudG9TdHJpbmcoKTsgICAgIFxuICAgICAgbGV0IGNlbGxDb2RlPSB4VG9TdHJpbmcgKyB5VG9TdHJpbmc7ICBcbiAgICAgIGxldCBuZXh0Q2VsbDJDb2RlPSB4VG9TdHJpbmcgKyBuZXh0Q2VsbDJTdHJpbmc7IFxuICAgICAgbGV0IG5leHRDZWxsM0NvZGU9IHhUb1N0cmluZyArIG5leHRDZWxsM1N0cmluZzsgXG4gICAgICBpZih1c2VkTnVtYmVycy5pbmNsdWRlcyhjZWxsQ29kZSkgfHwgdXNlZE51bWJlcnMuaW5jbHVkZXMobmV4dENlbGwyQ29kZSkgfHwgdXNlZE51bWJlcnMuaW5jbHVkZXMobmV4dENlbGwzQ29kZSkpe1xuICAgICAgICB0aGlzLmNvbXB1dGVyQ29kZSgpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGxldCBhY3R1YWxDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke2NlbGxDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGwyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsMkNvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGwzQ29kZX1cIl1gKTtcbiAgICAgICAgYWN0dWFsQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbENlbGwudGV4dENvbnRlbnQ9IFwiMVwiO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDIuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDMuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKGNlbGxDb2RlKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChuZXh0Q2VsbDJDb2RlKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChuZXh0Q2VsbDNDb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMubmFtZSA9PT0gXCJiYXR0bGVzaGlwXCIgJiYgdGhpcy5vcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBsZXQgeCA9IHJhbmRvbU51bUJldHdlZW4oMSwgMTApO1xuICAgICAgbGV0IHkgPSByYW5kb21OdW1CZXR3ZWVuKDEsIDcpO1xuICAgICAgbGV0IG5leHRDZWxsMj0geSsxO1xuICAgICAgbGV0IG5leHRDZWxsMz0geSsyO1xuICAgICAgbGV0IG5leHRDZWxsND0geSszO1xuICAgICAgbGV0IHhUb1N0cmluZz0geC50b1N0cmluZygpOyAgICAgIFxuICAgICAgbGV0IHlUb1N0cmluZz0geS50b1N0cmluZygpO1xuICAgICAgbGV0IG5leHRDZWxsMlN0cmluZz0gbmV4dENlbGwyLnRvU3RyaW5nKCk7ICAgICAgXG4gICAgICBsZXQgbmV4dENlbGwzU3RyaW5nPSBuZXh0Q2VsbDMudG9TdHJpbmcoKTsgICAgIFxuICAgICAgbGV0IG5leHRDZWxsNFN0cmluZz0gbmV4dENlbGw0LnRvU3RyaW5nKCk7ICAgICBcbiAgICAgIGxldCBjZWxsQ29kZT0geFRvU3RyaW5nICsgeVRvU3RyaW5nOyAgXG4gICAgICBsZXQgbmV4dENlbGwyQ29kZSA9IHhUb1N0cmluZyArIG5leHRDZWxsMlN0cmluZzsgXG4gICAgICBsZXQgbmV4dENlbGwzQ29kZSA9IHhUb1N0cmluZyArIG5leHRDZWxsM1N0cmluZztcbiAgICAgIGxldCBuZXh0Q2VsbDRDb2RlID0geFRvU3RyaW5nICsgbmV4dENlbGw0U3RyaW5nOyBcbiAgICAgIGlmKHVzZWROdW1iZXJzLmluY2x1ZGVzKGNlbGxDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDJDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDNDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDRDb2RlKSl7XG4gICAgICAgIHRoaXMuY29tcHV0ZXJDb2RlKCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgbGV0IGFjdHVhbENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7Y2VsbENvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGwyQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDNDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGw0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsNENvZGV9XCJdYCk7XG4gICAgICAgIGFjdHVhbENlbGwuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxDZWxsLnRleHRDb250ZW50PSBcIjFcIjtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwyLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwzLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGw0LmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChjZWxsQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGwyQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGwzQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGw0Q29kZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLm5hbWUgPT09IFwiY2FycmllclwiICYmIHRoaXMub3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgbGV0IHggPSByYW5kb21OdW1CZXR3ZWVuKDEsIDEwKTtcbiAgICAgIGxldCB5ID0gcmFuZG9tTnVtQmV0d2VlbigxLCA2KTtcbiAgICAgIGxldCBuZXh0Q2VsbDI9IHkrMTtcbiAgICAgIGxldCBuZXh0Q2VsbDM9IHkrMjtcbiAgICAgIGxldCBuZXh0Q2VsbDQ9IHkrMztcbiAgICAgIGxldCBuZXh0Q2VsbDU9IHkrNDtcbiAgICAgIGxldCB4VG9TdHJpbmc9IHgudG9TdHJpbmcoKTsgICAgICBcbiAgICAgIGxldCB5VG9TdHJpbmc9IHkudG9TdHJpbmcoKTtcbiAgICAgIGxldCBuZXh0Q2VsbDJTdHJpbmc9IG5leHRDZWxsMi50b1N0cmluZygpOyAgICAgIFxuICAgICAgbGV0IG5leHRDZWxsM1N0cmluZz0gbmV4dENlbGwzLnRvU3RyaW5nKCk7ICAgICBcbiAgICAgIGxldCBuZXh0Q2VsbDRTdHJpbmc9IG5leHRDZWxsNC50b1N0cmluZygpOyAgICAgXG4gICAgICBsZXQgbmV4dENlbGw1U3RyaW5nPSBuZXh0Q2VsbDUudG9TdHJpbmcoKTsgICAgIFxuICAgICAgbGV0IGNlbGxDb2RlPSB4VG9TdHJpbmcgKyB5VG9TdHJpbmc7ICBcbiAgICAgIGxldCBuZXh0Q2VsbDJDb2RlID0geFRvU3RyaW5nICsgbmV4dENlbGwyU3RyaW5nOyBcbiAgICAgIGxldCBuZXh0Q2VsbDNDb2RlID0geFRvU3RyaW5nICsgbmV4dENlbGwzU3RyaW5nO1xuICAgICAgbGV0IG5leHRDZWxsNENvZGUgPSB4VG9TdHJpbmcgKyBuZXh0Q2VsbDRTdHJpbmc7XG4gICAgICBsZXQgbmV4dENlbGw1Q29kZSA9IHhUb1N0cmluZyArIG5leHRDZWxsNVN0cmluZzsgXG4gICAgICBpZih1c2VkTnVtYmVycy5pbmNsdWRlcyhjZWxsQ29kZSkgfHwgdXNlZE51bWJlcnMuaW5jbHVkZXMobmV4dENlbGwyQ29kZSkgfHwgdXNlZE51bWJlcnMuaW5jbHVkZXMobmV4dENlbGwzQ29kZSkgfHwgdXNlZE51bWJlcnMuaW5jbHVkZXMobmV4dENlbGw0Q29kZSkgfHwgdXNlZE51bWJlcnMuaW5jbHVkZXMobmV4dENlbGw1Q29kZSkpe1xuICAgICAgICB0aGlzLmNvbXB1dGVyQ29kZSgpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGxldCBhY3R1YWxDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke2NlbGxDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGwyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsMkNvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGwzQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsNCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDRDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGw1ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsNUNvZGV9XCJdYCk7XG4gICAgICAgIGFjdHVhbENlbGwuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxDZWxsLnRleHRDb250ZW50PSBcIjFcIjtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwyLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwzLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGw0LmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGw1LmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChjZWxsQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGwyQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGwzQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGw0Q29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGw1Q29kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmxldCBwYXRyb2xCb2F0Q29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXJCb2F0KFwicGF0cm9sQm9hdFwiLCBjb21wdXRlck9yaWVudGF0aW9uKCkpO1xubGV0IHN1Ym1hcmluZUNvbXB1dGVyID0gbmV3IENvbXB1dGVyQm9hdChcInN1Ym1hcmluZVwiLCBjb21wdXRlck9yaWVudGF0aW9uKCkpO1xubGV0IGRlc3Ryb3llckNvbXB1dGVyID0gbmV3IENvbXB1dGVyQm9hdChcImRlc3Ryb3llclwiLCBjb21wdXRlck9yaWVudGF0aW9uKCkpO1xubGV0IGJhdHRsZXNoaXBDb21wdXRlciA9IG5ldyBDb21wdXRlckJvYXQoXCJiYXR0bGVzaGlwXCIsIGNvbXB1dGVyT3JpZW50YXRpb24oKSk7XG5sZXQgY2FycmllckNvbXB1dGVyID0gbmV3IENvbXB1dGVyQm9hdChcImNhcnJpZXJcIiwgY29tcHV0ZXJPcmllbnRhdGlvbigpKTtcblxucGF0cm9sQm9hdENvbXB1dGVyLmNvbXB1dGVyQ29kZSgpO1xuc3VibWFyaW5lQ29tcHV0ZXIuY29tcHV0ZXJDb2RlKCk7XG5kZXN0cm95ZXJDb21wdXRlci5jb21wdXRlckNvZGUoKTtcbmJhdHRsZXNoaXBDb21wdXRlci5jb21wdXRlckNvZGUoKTtcbmNhcnJpZXJDb21wdXRlci5jb21wdXRlckNvZGUoKTsiXSwibmFtZXMiOlsiZ3JhYk5hbWUiLCJDcmVhdGVCb2F0IiwiaGl0IiwiaXNTdW5rIiwiR2FtZWJvYXJkIiwiZXhhbXBsZUFkZCIsImEiLCJiIiwibmFtZSIsImNvbnN0cnVjdG9yIiwibGVuZ3RoIiwiYm9hdE5hbWUiLCJudW1UaW1lc0hpdCIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsImhhc1N1bmsiLCJjb29yZGluYXRlcyIsInhfbnVtYmVyIiwieV9udW1iZXIiLCJzdGF0dXMiLCJib2F0TmFtZU9iaiIsIndhc1BpY2tlZCIsInBsYWNlIiwic2hpcExlbmd0aCIsInZlcnRpY2FsT3JIb3Jpem9udGFsIiwieE51bWJlciIsInlOdW1iZXIiLCJpIiwicmVjZWl2ZUF0dGFjayIsIm5hbWVQbGF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5hbWVTdWJtaXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29tcG9zZWRQYXRoIiwidmFsdWUiLCJ0ZXh0Q29udGVudCIsImdyaWQiLCJ4VmFsdWUiLCJkYXRhc2V0IiwieVZhbHVlIiwicGF0cm9sQm9hdCIsInN1Ym1hcmluZSIsImRlc3Ryb3llciIsImJhdHRsZXNoaXAiLCJjYXJyaWVyIiwiaG9yaXphbnRhbCIsInZlcnRpY2FsIiwiYm9hdFNlbGVjdGlvbkJ1dHRvbkZ1bmN0aW9uIiwiYnRuQ2xpY2tlZCIsImJ0bkFyciIsImNsYXNzTGlzdCIsImFkZCIsInJlbWFpbmluZ0J0bnMiLCJmaWx0ZXIiLCJidG4iLCJmb3JFYWNoIiwicmVtb3ZlIiwiYm9hdE9yaWVudGF0aW9uQnV0dG9uRnVuY3Rpb24iLCJjb25zb2xlIiwibG9nIiwicGF0aCIsInBhdHJvbEJvYXRTcGFjZXMiLCJzdWJtYXJpbmVTcGFjZXMiLCJkZXN0cm95ZXJTcGFjZXMiLCJiYXR0bGVzaGlwU3BhY2VzIiwiY2FycmllclNwYWNlcyIsImJvYXRPcmllbnRhdGlvbiIsImNsaWNrQnRuc01vZGFsIiwidGFibGVDbGFzcyIsImdldEF0dHJpYnV0ZSIsImluY2x1ZGVzIiwiY2VsbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2VsbCIsInhOdW0iLCJOdW1iZXIiLCJ5TnVtIiwibmV4dENlbGwyX2hvcml6YW50YWwiLCJuZXh0Q2VsbDNfaG9yaXphbnRhbCIsIm5leHRDZWxsNF9ob3JpemFudGFsIiwibmV4dENlbGw1X2hvcml6YW50YWwiLCJuZXh0Q2VsbDJfdmVydGljYWwiLCJuZXh0Q2VsbDNfdmVydGljYWwiLCJuZXh0Q2VsbDRfdmVydGljYWwiLCJuZXh0Q2VsbDVfdmVydGljYWwiLCJkaXNhYmxlZCIsInJhbmRvbU51bUJldHdlZW4iLCJtaW4iLCJtYXgiLCJudW0iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjb21wdXRlck9yaWVudGF0aW9uIiwidXNlZE51bWJlcnMiLCJDb21wdXRlckJvYXQiLCJvcmllbnRhdGlvbiIsImNvbXB1dGVyQ29kZSIsIngiLCJ5IiwibmV4dENlbGwyIiwieFRvU3RyaW5nIiwidG9TdHJpbmciLCJ5VG9TdHJpbmciLCJuZXh0Q2VsbDJTdHJpbmciLCJjZWxsQ29kZSIsIm5leHRDZWxsMkNvZGUiLCJhY3R1YWxDZWxsIiwiYWN0dWFsTmV4dENlbGwyIiwicHVzaCIsIm5leHRDZWxsMyIsIm5leHRDZWxsM1N0cmluZyIsIm5leHRDZWxsM0NvZGUiLCJhY3R1YWxOZXh0Q2VsbDMiLCJuZXh0Q2VsbDQiLCJuZXh0Q2VsbDRTdHJpbmciLCJuZXh0Q2VsbDRDb2RlIiwiYWN0dWFsTmV4dENlbGw0IiwibmV4dENlbGw1IiwibmV4dENlbGw1U3RyaW5nIiwibmV4dENlbGw1Q29kZSIsImFjdHVhbE5leHRDZWxsNSIsInBhdHJvbEJvYXRDb21wdXRlciIsInN1Ym1hcmluZUNvbXB1dGVyIiwiZGVzdHJveWVyQ29tcHV0ZXIiLCJiYXR0bGVzaGlwQ29tcHV0ZXIiLCJjYXJyaWVyQ29tcHV0ZXIiXSwic291cmNlUm9vdCI6IiJ9