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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nbody,\nhtml {\n  height: 100%;\n  margin: 0;\n  /* background-color: skyblue; */\n}\n:root {\n  /* --custom-name: value; */\n  /* --light-green-bg: #476529; */\n  /* example, color: var(--navy-clr) */\n  --primary-clr: #8AA6A3;\n  --secondary-clr: #8AA6A3;\n  --accent-clr: #8AA6A3;\n}\n.header{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n    margin: 0rem;\n    border: .25rem solid black;\n    background-color: navy;\n    color: silver;\n    margin-bottom: 1rem;\n}\nfieldset{\n  display: flex;\n  flex-direction: column;\n}\n.form.player-name{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.submit-name-btn{\n  margin-top: 1rem;\n  padding: .5rem;\n}\n.name-plate,\n.computer-name-plate, \n.boat-selection-title,\n.boat-orientation-title{\n  margin-bottom: 1rem;\n  font-size: 3rem;\n  font-weight: bold;\n}\ntable, th, td {\n  border: 1px solid black;\n}\n.grid,\n.computer-grid,\n.boat-selection,\n.boat-orientation{\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.boat-selection-btns,\n.boat-orientation-btns{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: .25rem;\n}\nth, td{\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n  width: 2rem;\n}\n.clicked{\n  background-color: orange;\n}\n.outside-grid{\n  cursor: not-allowed;\n}\n.outside-grid-error{\n  background-color: red;\n  animation-name: off-grid-error;\n  animation-duration: 400ms;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n}\n@keyframes off-grid-error{\n  from {background-color: red;}\n  to {background-color: white;}\n}\n.table-class,\n.computer-table-class{\n  position: relative;\n}\n.grid,\n.computer-grid{\n  position: relative;\n}\n.click-btns-modal{\n  width: 40%;\n  height: auto;\n  /* margin: auto; */\n  background-color: rgb(194, 194, 194);\n  background-color: black;\n  color: whitesmoke;\n  border: 1px solid gray;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0%;\n  padding: 1rem;\n  transition-duration: 200ms;\n  transition-property: opacity;\n}\n.show{\n  opacity: 100%;\n}\n.phased-out{\n  opacity: 30%;\n}\n.selected{\n  background-color: black;\n}\n.computer-selected{\n  background-color: black;\n  color: white;\n  /* opacity: 30%; */\n}\n.computer-clicked{\n  background-color: orange;\n  cursor: pointer;\n}\n.computer-cell-targeted{\n  background-color: red;\n  animation-name: computer-cell-targeted;\n  animation-duration: 200ms;\n  animation-iteration-count: 11;\n  animation-direction: alternate;\n}\n@keyframes computer-cell-targeted{\n  from {background-color: orange;}\n  to {background-color: red;}\n}\n.player-cell-targeted{\n  background-color: red;\n  animation-name: computer-cell-targeted;\n  animation-duration: 200ms;\n  animation-iteration-count: 11;\n  animation-direction: alternate;\n}\n.hit{\n  background-color: red;\n  text-align: center;\n  transition-duration: 200ms;\n}\n.missed{\n  background-color: gray;\n}\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.1);\n  pointer-events: none;\n  opacity: 0;\n  transition: 200ms;\n}\n.overlay.show{\n  opacity: 1;\n  pointer-events: all;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;AACxB;AACA;;EAEE,YAAY;EACZ,SAAS;EACT,+BAA+B;AACjC;AACA;EACE,0BAA0B;EAC1B,+BAA+B;EAC/B,oCAAoC;EACpC,sBAAsB;EACtB,wBAAwB;EACxB,qBAAqB;AACvB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,oBAAoB;IACpB,YAAY;IACZ,0BAA0B;IAC1B,sBAAsB;IACtB,aAAa;IACb,mBAAmB;AACvB;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,cAAc;AAChB;AACA;;;;EAIE,mBAAmB;EACnB,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,uBAAuB;AACzB;AACA;;;;EAIE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;;EAEE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,WAAW;AACb;AACA;EACE,mBAAmB;EACnB,sBAAsB;EACtB,WAAW;AACb;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,mBAAmB;AACrB;AACA;EACE,qBAAqB;EACrB,8BAA8B;EAC9B,yBAAyB;EACzB,mCAAmC;EACnC,8BAA8B;AAChC;AACA;EACE,MAAM,qBAAqB,CAAC;EAC5B,IAAI,uBAAuB,CAAC;AAC9B;AACA;;EAEE,kBAAkB;AACpB;AACA;;EAEE,kBAAkB;AACpB;AACA;EACE,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,oCAAoC;EACpC,uBAAuB;EACvB,iBAAiB;EACjB,sBAAsB;EACtB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,WAAW;EACX,aAAa;EACb,0BAA0B;EAC1B,4BAA4B;AAC9B;AACA;EACE,aAAa;AACf;AACA;EACE,YAAY;AACd;AACA;EACE,uBAAuB;AACzB;AACA;EACE,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,eAAe;AACjB;AACA;EACE,qBAAqB;EACrB,sCAAsC;EACtC,yBAAyB;EACzB,6BAA6B;EAC7B,8BAA8B;AAChC;AACA;EACE,MAAM,wBAAwB,CAAC;EAC/B,IAAI,qBAAqB,CAAC;AAC5B;AACA;EACE,qBAAqB;EACrB,sCAAsC;EACtC,yBAAyB;EACzB,6BAA6B;EAC7B,8BAA8B;AAChC;AACA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,0BAA0B;AAC5B;AACA;EACE,sBAAsB;AACxB;AACA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,oCAAoC;EACpC,oBAAoB;EACpB,UAAU;EACV,iBAAiB;AACnB;AACA;EACE,UAAU;EACV,mBAAmB;AACrB","sourcesContent":["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nbody,\nhtml {\n  height: 100%;\n  margin: 0;\n  /* background-color: skyblue; */\n}\n:root {\n  /* --custom-name: value; */\n  /* --light-green-bg: #476529; */\n  /* example, color: var(--navy-clr) */\n  --primary-clr: #8AA6A3;\n  --secondary-clr: #8AA6A3;\n  --accent-clr: #8AA6A3;\n}\n.header{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n    margin: 0rem;\n    border: .25rem solid black;\n    background-color: navy;\n    color: silver;\n    margin-bottom: 1rem;\n}\nfieldset{\n  display: flex;\n  flex-direction: column;\n}\n.form.player-name{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.submit-name-btn{\n  margin-top: 1rem;\n  padding: .5rem;\n}\n.name-plate,\n.computer-name-plate, \n.boat-selection-title,\n.boat-orientation-title{\n  margin-bottom: 1rem;\n  font-size: 3rem;\n  font-weight: bold;\n}\ntable, th, td {\n  border: 1px solid black;\n}\n.grid,\n.computer-grid,\n.boat-selection,\n.boat-orientation{\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.boat-selection-btns,\n.boat-orientation-btns{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: .25rem;\n}\nth, td{\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n  width: 2rem;\n}\n.clicked{\n  background-color: orange;\n}\n.outside-grid{\n  cursor: not-allowed;\n}\n.outside-grid-error{\n  background-color: red;\n  animation-name: off-grid-error;\n  animation-duration: 400ms;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n}\n@keyframes off-grid-error{\n  from {background-color: red;}\n  to {background-color: white;}\n}\n.table-class,\n.computer-table-class{\n  position: relative;\n}\n.grid,\n.computer-grid{\n  position: relative;\n}\n.click-btns-modal{\n  width: 40%;\n  height: auto;\n  /* margin: auto; */\n  background-color: rgb(194, 194, 194);\n  background-color: black;\n  color: whitesmoke;\n  border: 1px solid gray;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0%;\n  padding: 1rem;\n  transition-duration: 200ms;\n  transition-property: opacity;\n}\n.show{\n  opacity: 100%;\n}\n.phased-out{\n  opacity: 30%;\n}\n.selected{\n  background-color: black;\n}\n.computer-selected{\n  background-color: black;\n  color: white;\n  /* opacity: 30%; */\n}\n.computer-clicked{\n  background-color: orange;\n  cursor: pointer;\n}\n.computer-cell-targeted{\n  background-color: red;\n  animation-name: computer-cell-targeted;\n  animation-duration: 200ms;\n  animation-iteration-count: 11;\n  animation-direction: alternate;\n}\n@keyframes computer-cell-targeted{\n  from {background-color: orange;}\n  to {background-color: red;}\n}\n.player-cell-targeted{\n  background-color: red;\n  animation-name: computer-cell-targeted;\n  animation-duration: 200ms;\n  animation-iteration-count: 11;\n  animation-direction: alternate;\n}\n.hit{\n  background-color: red;\n  text-align: center;\n  transition-duration: 200ms;\n}\n.missed{\n  background-color: gray;\n}\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.1);\n  pointer-events: none;\n  opacity: 0;\n  transition: 200ms;\n}\n.overlay.show{\n  opacity: 1;\n  pointer-events: all;\n}"],"sourceRoot":""}]);
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
    }
    if (computerCell.getAttribute("class").includes("patrol-boat") && patrolBoatTally === 1) {
      setTimeout(() => {
        console.log("HIT! you sunk their Patrol Boat");
      }, 100);
    } else if (computerCell.getAttribute("class").includes("patrol-boat")) {
      patrolBoatTally++;
    }
    ;
    if (computerCell.getAttribute("class").includes("submarine") && submarineTally === 2) {
      setTimeout(() => {
        console.log("HIT! you sunk their Submarine");
      }, 100);
    } else if (computerCell.getAttribute("class").includes("submarine")) {
      submarineTally++;
    }
    ;
    if (computerCell.getAttribute("class").includes("destroyer") && destroyerTally === 2) {
      setTimeout(() => {
        console.log("HIT! you sunk their Destroyer");
      }, 100);
    } else if (computerCell.getAttribute("class").includes("destroyer")) {
      destroyerTally++;
    }
    ;
    if (computerCell.getAttribute("class").includes("battleship") && battleshipTally === 3) {
      setTimeout(() => {
        console.log("HIT! you sunk their Battleship");
      }, 100);
    } else if (computerCell.getAttribute("class").includes("battleship")) {
      battleshipTally++;
    }
    ;
    if (computerCell.getAttribute("class").includes("carrier") && carrierTally === 4) {
      setTimeout(() => {
        console.log("HIT! you sunk their Carrier");
      }, 100);
    } else if (computerCell.getAttribute("class").includes("carrier")) {
      carrierTally++;
    }
    ;
    if (computerTotalTally === 17) {
      setTimeout(() => {
        console.log("YOU WON!");
      }, 100);
    }
    let playerTotalTally = 0;
    let playerPatrolBoatTally = 0;
    let playerSubmarineTally = 0;
    let playerDestroyerTally = 0;
    let playerBattleshipTally = 0;
    let playerCarrierTally = 0;
    const overlay = document.querySelector(".overlay");
    overlay.classList.add("show");
    // setTimeout((()=>{overlay.classList.add("show");}), 100);

    // let playersXValue = randomNumBetween(1,10);
    // let playersYValue = randomNumBetween(1, 10);

    function randomPlayerCode() {
      let playersXValue = randomNumBetween(1, 10);
      console.log("players x value num= " + playersXValue);
      let playersYValue = randomNumBetween(1, 10);
      console.log("players y value num= " + playersYValue);
      let playersXValueString = playersXValue.toString();
      console.log("players x value str= " + playersXValueString);
      let playersYValueString = playersYValue.toString();
      console.log("players y value str= " + playersYValueString);
      let playerCodeValue = playersXValueString + playersYValueString;
      console.log(usedNumbers2.length);
      if (usedNumbers2.length === 100) {
        console.log("No more player spaces");
        return 11;
      }
      if (!usedNumbers2.includes(playerCodeValue)) {
        usedNumbers2.push(playerCodeValue);
        console.log("players code= " + playerCodeValue);
        return playerCodeValue;
      } else {
        console.log("A coordinate has been repeated");
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
    if (randomPlayerCode === null || randomPlayerCode === undefined) {
      console.log("getting closer to your bug");
      console.log(randomPlayerCode());
    }
    let computerAttack = document.querySelector(`[data-code= "${randomPlayerCode()}"]`);
    console.log(computerAttack);
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
    }
    if (computerAttack.getAttribute("class").includes("player-patrol-boat") && playerPatrolBoatTally === 1) {
      setTimeout(() => {
        console.log("HIT! your Patrol Boat has been sank");
      }, 100);
    } else if (computerAttack.getAttribute("class").includes("player-patrol-boat")) {
      playerPatrolBoatTally++;
    }
    ;
    if (computerAttack.getAttribute("class").includes("player-submarine") && playerSubmarineTally === 2) {
      setTimeout(() => {
        console.log("HIT! your Submarine has been sank");
      }, 100);
    } else if (computerAttack.getAttribute("class").includes("player-submarine")) {
      playerSubmarineTally++;
    }
    ;
    if (computerAttack.getAttribute("class").includes("player-destroyer") && playerDestroyerTally === 2) {
      setTimeout(() => {
        console.log("HIT! your Destroyer has been sank");
      }, 100);
    } else if (computerAttack.getAttribute("class").includes("player-destroyer")) {
      playerDestroyerTally++;
    }
    ;
    if (computerAttack.getAttribute("class").includes("player-battleship") && playerBattleshipTally === 3) {
      setTimeout(() => {
        console.log("HIT! your Battleship has been sank");
      }, 100);
    } else if (computerAttack.getAttribute("class").includes("player-battleship")) {
      playerBattleshipTally++;
    }
    ;
    if (computerAttack.getAttribute("class").includes("player-carrier") && playerCarrierTally === 4) {
      setTimeout(() => {
        console.log("HIT! your Carrier has been sank");
      }, 100);
    } else if (computerAttack.getAttribute("class").includes("player-carrier")) {
      playerCarrierTally++;
    }
    ;
    if (playerTotalTally === 17) {
      setTimeout(() => {
        console.log("You Lost!");
      }, 100);
    }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFFL0YsU0FBU0ssVUFBVUEsQ0FBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7RUFDcEIsT0FBT0QsQ0FBQyxHQUFDQyxDQUFDO0FBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQSxNQUFNUCxRQUFRLEdBQUlRLElBQUksSUFBS0EsSUFBSTtBQUUvQixNQUFNUCxVQUFVO0VBQ1pRLFdBQVdBLENBQUNDLE1BQU0sRUFBRUMsUUFBUSxFQUErQjtJQUFBLElBQTdCQyxXQUFXLEdBQUFDLFNBQUEsQ0FBQUgsTUFBQSxRQUFBRyxTQUFBLFFBQUFDLFNBQUEsR0FBQUQsU0FBQSxNQUFDLENBQUM7SUFBQSxJQUFFRSxPQUFPLEdBQUFGLFNBQUEsQ0FBQUgsTUFBQSxRQUFBRyxTQUFBLFFBQUFDLFNBQUEsR0FBQUQsU0FBQSxNQUFDLEtBQUs7SUFDdEQsSUFBSSxDQUFDSCxNQUFNLEdBQUVBLE1BQU07SUFDbkIsSUFBSSxDQUFDRSxXQUFXLEdBQUVBLFdBQVc7SUFDN0IsSUFBSSxDQUFDRyxPQUFPLEdBQUVBLE9BQU87SUFDckIsSUFBSSxDQUFDSixRQUFRLEdBQUNBLFFBQVE7RUFDMUI7QUFDSjtBQUFDO0FBRUQsTUFBTVQsR0FBRyxHQUFFUyxRQUFRLElBQUtBLFFBQVEsQ0FBQ0MsV0FBVyxFQUFFO0FBRTlDLE1BQU1ULE1BQU0sR0FBR1EsUUFBUSxJQUFLQSxRQUFRLENBQUNELE1BQU0sS0FBR0MsUUFBUSxDQUFDQyxXQUFXLEdBQUksSUFBSSxHQUFHLEtBQUs7QUFFbEYsTUFBTVIsU0FBUztFQUNYSyxXQUFXQSxDQUFBLEVBQUU7SUFDVCxJQUFJLENBQUNPLFdBQVcsR0FBRztJQUNqQjtJQUNBLENBQ0U7TUFBRUMsUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxDQUN0RztJQUNEO0lBQ0EsQ0FDRTtNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLENBQ3RHO0lBQ0Q7SUFDQSxDQUNFO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsQ0FDdEc7SUFDRDtJQUNBLENBQ0U7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxDQUN0RztJQUNEO0lBQ0EsQ0FDRTtNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLENBQ3RHO0lBQ0Q7SUFDQSxDQUNFO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsQ0FDdEc7SUFDRDtJQUNBLENBQ0U7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxDQUN0RztJQUNEO0lBQ0EsQ0FDRTtNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLENBQ3RHO0lBQ0Q7SUFDQSxDQUNFO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsQ0FDdEc7SUFDRDtJQUNBLENBQ0U7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVD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QWMsQ0FBQ2pGLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7TUFDNUV1RSxxQkFBcUIsRUFBRTtJQUN6QjtJQUFDO0lBRUQsSUFBR1MsY0FBYyxDQUFDakYsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSXdFLGtCQUFrQixLQUFHLENBQUMsRUFBQztNQUMzRk4sVUFBVSxDQUFFLE1BQUk7UUFBQzlFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlDQUFpQyxDQUFDO01BQUEsQ0FBQyxFQUFHLEdBQUcsQ0FBQztJQUN6RSxDQUFDLE1BQUssSUFBSTJGLGNBQWMsQ0FBQ2pGLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7TUFDekV3RSxrQkFBa0IsRUFBRTtJQUN0QjtJQUFDO0lBRUQsSUFBR0wsZ0JBQWdCLEtBQUcsRUFBRSxFQUFDO01BQ3ZCRCxVQUFVLENBQUUsTUFBSTtRQUFDOUUsT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO01BQUEsQ0FBQyxFQUFHLEdBQUcsQ0FBQztJQUNuRDs7SUFLSjtJQUNJO0lBQ0E2RSxVQUFVLENBQUUsTUFBSTtNQUFDYyxjQUFjLENBQUNwRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztJQUFDLENBQUMsRUFBRyxHQUFHLENBQUM7SUFFOUVxRixVQUFVLENBQUUsTUFBSTtNQUFDTyxPQUFPLENBQUM3RixTQUFTLENBQUNNLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFBQyxDQUFDLEVBQUcsR0FBRyxDQUFDO0VBRzVELENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ2dFLGtCQUFrQixDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvRE9NLWludGVyYWN0aW9ucy9ET00taW50ZXJhY3Rpb25zLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMgXyZfdGVzdHMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3JhYk5hbWUsIENyZWF0ZUJvYXQsIGhpdCwgaXNTdW5rLCBHYW1lYm9hcmQgfSBmcm9tIFwiLi4vZnVuY3Rpb25zIF8mX3Rlc3RzL2Z1bmN0aW9uc1wiO1xuXG5mdW5jdGlvbiBleGFtcGxlQWRkKGEsYil7XG4gICAgcmV0dXJuIGErYjtcbn1cblxuXG5leHBvcnR7IGV4YW1wbGVBZGQgfTsiLCJjb25zdCBncmFiTmFtZSA9IChuYW1lKSA9PiBuYW1lO1xuXG5jbGFzcyBDcmVhdGVCb2F0e1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCwgYm9hdE5hbWUsIG51bVRpbWVzSGl0PTAsIGhhc1N1bms9ZmFsc2Upe1xuICAgICAgICB0aGlzLmxlbmd0aD0gbGVuZ3RoO1xuICAgICAgICB0aGlzLm51bVRpbWVzSGl0PSBudW1UaW1lc0hpdDtcbiAgICAgICAgdGhpcy5oYXNTdW5rPSBoYXNTdW5rO1xuICAgICAgICB0aGlzLmJvYXROYW1lPWJvYXROYW1lO1xuICAgIH07XG59O1xuXG5jb25zdCBoaXQ9KGJvYXROYW1lKSA9PiBib2F0TmFtZS5udW1UaW1lc0hpdCsrO1xuXG5jb25zdCBpc1N1bms9IChib2F0TmFtZSk9PiAoYm9hdE5hbWUubGVuZ3RoPT09Ym9hdE5hbWUubnVtVGltZXNIaXQpID8gdHJ1ZSA6IGZhbHNlO1xuXG5jbGFzcyBHYW1lYm9hcmR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5jb29yZGluYXRlcyA9IFtcbiAgICAgICAgICAvLzBcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjAsIHlfbnVtYmVyOiAwLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MCwgeV9udW1iZXI6IDEsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjowLCB5X251bWJlcjogMiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjAsIHlfbnVtYmVyOiAzLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MCwgeV9udW1iZXI6IDQsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjowLCB5X251bWJlcjogNSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjAsIHlfbnVtYmVyOiA2LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MCwgeV9udW1iZXI6IDcsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjowLCB5X251bWJlcjogOCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjAsIHlfbnVtYmVyOiA5LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIC8vMVxuICAgICAgICAgIFtcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MSwgeV9udW1iZXI6IDAsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoxLCB5X251bWJlcjogMSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjEsIHlfbnVtYmVyOiAyLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MSwgeV9udW1iZXI6IDMsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoxLCB5X251bWJlcjogNCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjEsIHlfbnVtYmVyOiA1LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MSwgeV9udW1iZXI6IDYsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoxLCB5X251bWJlcjogNywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjEsIHlfbnVtYmVyOiA4LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MSwgeV9udW1iZXI6IDksIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgLy8yXG4gICAgICAgICAgW1xuICAgICAgICAgICAgeyB4X251bWJlcjoyLCB5X251bWJlcjogMCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjIsIHlfbnVtYmVyOiAxLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MiwgeV9udW1iZXI6IDIsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoyLCB5X251bWJlcjogMywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjIsIHlfbnVtYmVyOiA0LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MiwgeV9udW1iZXI6IDUsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoyLCB5X251bWJlcjogNiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjIsIHlfbnVtYmVyOiA3LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MiwgeV9udW1iZXI6IDgsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoyLCB5X251bWJlcjogOSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICAvLzNcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjMsIHlfbnVtYmVyOiAwLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MywgeV9udW1iZXI6IDEsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjozLCB5X251bWJlcjogMiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjMsIHlfbnVtYmVyOiAzLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MywgeV9udW1iZXI6IDQsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjozLCB5X251bWJlcjogNSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjMsIHlfbnVtYmVyOiA2LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MywgeV9udW1iZXI6IDcsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjozLCB5X251bWJlcjogOCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjMsIHlfbnVtYmVyOiA5LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIC8vNFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NCwgeV9udW1iZXI6IDAsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo0LCB5X251bWJlcjogMSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjQsIHlfbnVtYmVyOiAyLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NCwgeV9udW1iZXI6IDMsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo0LCB5X251bWJlcjogNCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjQsIHlfbnVtYmVyOiA1LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NCwgeV9udW1iZXI6IDYsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo0LCB5X251bWJlcjogNywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjQsIHlfbnVtYmVyOiA4LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NCwgeV9udW1iZXI6IDksIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgLy81XG4gICAgICAgICAgW1xuICAgICAgICAgICAgeyB4X251bWJlcjo1LCB5X251bWJlcjogMCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjUsIHlfbnVtYmVyOiAxLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NSwgeV9udW1iZXI6IDIsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo1LCB5X251bWJlcjogMywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjUsIHlfbnVtYmVyOiA0LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NSwgeV9udW1iZXI6IDUsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo1LCB5X251bWJlcjogNiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjUsIHlfbnVtYmVyOiA3LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NSwgeV9udW1iZXI6IDgsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo1LCB5X251bWJlcjogOSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICAvLzZcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjYsIHlfbnVtYmVyOiAwLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NiwgeV9udW1iZXI6IDEsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo2LCB5X251bWJlcjogMiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjYsIHlfbnVtYmVyOiAzLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NiwgeV9udW1iZXI6IDQsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo2LCB5X251bWJlcjogNSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjYsIHlfbnVtYmVyOiA2LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NiwgeV9udW1iZXI6IDcsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo2LCB5X251bWJlcjogOCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjYsIHlfbnVtYmVyOiA5LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIC8vN1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NywgeV9udW1iZXI6IDAsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo3LCB5X251bWJlcjogMSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjcsIHlfbnVtYmVyOiAyLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NywgeV9udW1iZXI6IDMsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo3LCB5X251bWJlcjogNCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjcsIHlfbnVtYmVyOiA1LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NywgeV9udW1iZXI6IDYsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo3LCB5X251bWJlcjogNywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjcsIHlfbnVtYmVyOiA4LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NywgeV9udW1iZXI6IDksIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgLy84XG4gICAgICAgICAgW1xuICAgICAgICAgICAgeyB4X251bWJlcjo4LCB5X251bWJlcjogMCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjgsIHlfbnVtYmVyOiAxLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OCwgeV9udW1iZXI6IDIsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo4LCB5X251bWJlcjogMywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjgsIHlfbnVtYmVyOiA0LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OCwgeV9udW1iZXI6IDUsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo4LCB5X251bWJlcjogNiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjgsIHlfbnVtYmVyOiA3LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OCwgeV9udW1iZXI6IDgsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo4LCB5X251bWJlcjogOSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICAvLzlcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjksIHlfbnVtYmVyOiAwLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OSwgeV9udW1iZXI6IDEsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo5LCB5X251bWJlcjogMiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjksIHlfbnVtYmVyOiAzLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OSwgeV9udW1iZXI6IDQsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo5LCB5X251bWJlcjogNSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjksIHlfbnVtYmVyOiA2LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OSwgeV9udW1iZXI6IDcsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo5LCB5X251bWJlcjogOCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjksIHlfbnVtYmVyOiA5LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICBdXG4gICAgICAgIF07XG4gICAgfTtcblxuICAgIHBsYWNlKHNoaXBMZW5ndGgsIHZlcnRpY2FsT3JIb3Jpem9udGFsLCB4TnVtYmVyLCB5TnVtYmVyLCBib2F0TmFtZU9iaiwgYm9hdE5hbWUpe1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYoeE51bWJlcitpPDAgfHwgeE51bWJlcitpPjkgfHwgeU51bWJlci1pPDAgfHwgeU51bWJlci1pPjkpe1xuICAgICAgICAgIHJldHVybiBcIkludmFsaWQgZW50cnksIHNoaXAgaXMgbm90IHdpdGhpbiB0aGUgbGltaXRzIG9mIHRoZSBib2FyZC5UcnkgYWdhaW4uXCI7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh2ZXJ0aWNhbE9ySG9yaXpvbnRhbCA9PT0gXCJob3Jpem9udGFsXCIpe1xuICAgICAgICAgIHRoaXMuY29vcmRpbmF0ZXNbeE51bWJlciArIGldW3lOdW1iZXJdLnN0YXR1cyA9IFwiZmlsbGVkXCI7XG4gICAgICAgICAgdGhpcy5jb29yZGluYXRlc1t4TnVtYmVyICsgaV1beU51bWJlcl0uYm9hdE5hbWUgPSBib2F0TmFtZTtcbiAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW3hOdW1iZXIgKyBpXVt5TnVtYmVyXS5ib2F0TmFtZU9iaiA9IGJvYXROYW1lT2JqO1xuICAgICAgICB9O1xuICAgICAgICBpZiAodmVydGljYWxPckhvcml6b250YWwgPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgIHRoaXMuY29vcmRpbmF0ZXNbeE51bWJlcl1beU51bWJlciAtIGldLnN0YXR1cyA9IFwiZmlsbGVkXCI7XG4gICAgICAgICAgdGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyIC0gaV0uYm9hdE5hbWUgPSBib2F0TmFtZTtcbiAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW3hOdW1iZXJdW3lOdW1iZXIgLSBpXS5ib2F0TmFtZU9iaiA9IGJvYXROYW1lT2JqO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgcmVjZWl2ZUF0dGFjayh4TnVtYmVyLCB5TnVtYmVyKXtcbiAgICAgIGlmICh4TnVtYmVyIDwgMCB8fCB4TnVtYmVyID4gOSB8fCB5TnVtYmVyIDwgMCB8fCB5TnVtYmVyID4gOSkge1xuICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGVudHJ5LCBzaGlwIGlzIG5vdCB3aXRoaW4gdGhlIGxpbWl0cyBvZiB0aGUgYm9hcmQuVHJ5IGFnYWluLlwiO1xuICAgICAgfVxuICAgICAgaWYodGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyXS53YXNQaWNrZWQ9PT10cnVlKXtcbiAgICAgICAgcmV0dXJuIGBJbnZhbGlkIGVudHJ5LCBjb29yZGluYXRlcyAke3hOdW1iZXJ9LCR7eU51bWJlcn0gd2FzIGFscmVhZHkgYXR0YWNrZWQuVHJ5IGFnYWluLmA7XG4gICAgICB9O1xuICAgICAgaWYgKHRoaXMuY29vcmRpbmF0ZXNbeE51bWJlcl1beU51bWJlcl0uc3RhdHVzID09PSBcImVtcHR5XCIpIHtcbiAgICAgICAgLy9QTEFDRUhPTERFUjogd2hhdCB0byBkby9kaXNwbGF5IHdpdGggbWlzc2VkIGF0dGFja3NcbiAgICAgICAgdGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyXS53YXNQaWNrZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gYE1pc3NlZCEgTm8gaGl0IG9uIGNvb3JkaW5hdGVzICR7eE51bWJlcn0sJHt5TnVtYmVyfWA7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyXS5zdGF0dXMgPT09IFwiZmlsbGVkXCIpIHtcbiAgICAgICAgdGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyXS53YXNQaWNrZWQgPSB0cnVlO1xuICAgICAgICBoaXQodGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyXS5ib2F0TmFtZU9iaik7XG4gICAgICAgIGlmIChpc1N1bmsodGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyXS5ib2F0TmFtZU9iaik9PT10cnVlKSB7XG4gICAgICAgICAgcmV0dXJuIGBIaXQhIGArKHRoaXMuY29vcmRpbmF0ZXNbeE51bWJlcl1beU51bWJlcl0uYm9hdE5hbWUpK2AgaGFzIGJlZW4gaGl0IG9uIGNvb3JkaW5hdGVzICR7eE51bWJlcn0sJHt5TnVtYmVyfSwgYW5kIGhhcyBiZWVuIHN1bmshYDtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGBIaXQhIGArKHRoaXMuY29vcmRpbmF0ZXNbeE51bWJlcl1beU51bWJlcl0uYm9hdE5hbWUpK2AgaGFzIGJlZW4gaGl0IG9uIGNvb3JkaW5hdGVzICR7eE51bWJlcn0sJHt5TnVtYmVyfWA7XG4gICAgICB9XG4gICAgfTtcbn07XG5cblxuZXhwb3J0IHsgZ3JhYk5hbWUsIENyZWF0ZUJvYXQsIGhpdCwgaXNTdW5rLCBHYW1lYm9hcmQgfTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHksXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlOyAqL1xcbn1cXG46cm9vdCB7XFxuICAvKiAtLWN1c3RvbS1uYW1lOiB2YWx1ZTsgKi9cXG4gIC8qIC0tbGlnaHQtZ3JlZW4tYmc6ICM0NzY1Mjk7ICovXFxuICAvKiBleGFtcGxlLCBjb2xvcjogdmFyKC0tbmF2eS1jbHIpICovXFxuICAtLXByaW1hcnktY2xyOiAjOEFBNkEzO1xcbiAgLS1zZWNvbmRhcnktY2xyOiAjOEFBNkEzO1xcbiAgLS1hY2NlbnQtY2xyOiAjOEFBNkEzO1xcbn1cXG4uaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgICBtYXJnaW46IDByZW07XFxuICAgIGJvcmRlcjogLjI1cmVtIHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZ5O1xcbiAgICBjb2xvcjogc2lsdmVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5maWVsZHNldHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uZm9ybS5wbGF5ZXItbmFtZXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc3VibWl0LW5hbWUtYnRue1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIHBhZGRpbmc6IC41cmVtO1xcbn1cXG4ubmFtZS1wbGF0ZSxcXG4uY29tcHV0ZXItbmFtZS1wbGF0ZSwgXFxuLmJvYXQtc2VsZWN0aW9uLXRpdGxlLFxcbi5ib2F0LW9yaWVudGF0aW9uLXRpdGxle1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG50YWJsZSwgdGgsIHRkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4uZ3JpZCxcXG4uY29tcHV0ZXItZ3JpZCxcXG4uYm9hdC1zZWxlY3Rpb24sXFxuLmJvYXQtb3JpZW50YXRpb257XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5ib2F0LXNlbGVjdGlvbi1idG5zLFxcbi5ib2F0LW9yaWVudGF0aW9uLWJ0bnN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAuMjVyZW07XFxufVxcbnRoLCB0ZHtcXG4gIHBhZGRpbmctdG9wOiAuMjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogLjI1cmVtO1xcbiAgd2lkdGg6IDJyZW07XFxufVxcbi5jbGlja2Vke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG4ub3V0c2lkZS1ncmlke1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLm91dHNpZGUtZ3JpZC1lcnJvcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBvZmYtZ3JpZC1lcnJvcjtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNDAwbXM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG59XFxuQGtleWZyYW1lcyBvZmYtZ3JpZC1lcnJvcntcXG4gIGZyb20ge2JhY2tncm91bmQtY29sb3I6IHJlZDt9XFxuICB0byB7YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7fVxcbn1cXG4udGFibGUtY2xhc3MsXFxuLmNvbXB1dGVyLXRhYmxlLWNsYXNze1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uZ3JpZCxcXG4uY29tcHV0ZXItZ3JpZHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNsaWNrLWJ0bnMtbW9kYWx7XFxuICB3aWR0aDogNDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgLyogbWFyZ2luOiBhdXRvOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTk0LCAxOTQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgb3BhY2l0eTogMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xcbn1cXG4uc2hvd3tcXG4gIG9wYWNpdHk6IDEwMCU7XFxufVxcbi5waGFzZWQtb3V0e1xcbiAgb3BhY2l0eTogMzAlO1xcbn1cXG4uc2VsZWN0ZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuLmNvbXB1dGVyLXNlbGVjdGVke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICAvKiBvcGFjaXR5OiAzMCU7ICovXFxufVxcbi5jb21wdXRlci1jbGlja2Vke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY29tcHV0ZXItY2VsbC10YXJnZXRlZHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBjb21wdXRlci1jZWxsLXRhcmdldGVkO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMDBtcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDExO1xcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcbn1cXG5Aa2V5ZnJhbWVzIGNvbXB1dGVyLWNlbGwtdGFyZ2V0ZWR7XFxuICBmcm9tIHtiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7fVxcbiAgdG8ge2JhY2tncm91bmQtY29sb3I6IHJlZDt9XFxufVxcbi5wbGF5ZXItY2VsbC10YXJnZXRlZHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBjb21wdXRlci1jZWxsLXRhcmdldGVkO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMDBtcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDExO1xcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcbn1cXG4uaGl0e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XFxufVxcbi5taXNzZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiAyMDBtcztcXG59XFxuLm92ZXJsYXkuc2hvd3tcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRSxzQkFBc0I7QUFDeEI7QUFDQTs7RUFFRSxZQUFZO0VBQ1osU0FBUztFQUNULCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLCtCQUErQjtFQUMvQixvQ0FBb0M7RUFDcEMsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixxQkFBcUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjtBQUNBOzs7O0VBSUUsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBOzs7O0VBSUUsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBOztFQUVFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0FBQ2I7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsV0FBVztBQUNiO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsbUNBQW1DO0VBQ25DLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsTUFBTSxxQkFBcUIsQ0FBQztFQUM1QixJQUFJLHVCQUF1QixDQUFDO0FBQzlCO0FBQ0E7O0VBRUUsa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUUsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsc0NBQXNDO0VBQ3RDLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxNQUFNLHdCQUF3QixDQUFDO0VBQy9CLElBQUkscUJBQXFCLENBQUM7QUFDNUI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixzQ0FBc0M7RUFDdEMseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3Qiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsb0NBQW9DO0VBQ3BDLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHksXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlOyAqL1xcbn1cXG46cm9vdCB7XFxuICAvKiAtLWN1c3RvbS1uYW1lOiB2YWx1ZTsgKi9cXG4gIC8qIC0tbGlnaHQtZ3JlZW4tYmc6ICM0NzY1Mjk7ICovXFxuICAvKiBleGFtcGxlLCBjb2xvcjogdmFyKC0tbmF2eS1jbHIpICovXFxuICAtLXByaW1hcnktY2xyOiAjOEFBNkEzO1xcbiAgLS1zZWNvbmRhcnktY2xyOiAjOEFBNkEzO1xcbiAgLS1hY2NlbnQtY2xyOiAjOEFBNkEzO1xcbn1cXG4uaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgICBtYXJnaW46IDByZW07XFxuICAgIGJvcmRlcjogLjI1cmVtIHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZ5O1xcbiAgICBjb2xvcjogc2lsdmVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5maWVsZHNldHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uZm9ybS5wbGF5ZXItbmFtZXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc3VibWl0LW5hbWUtYnRue1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIHBhZGRpbmc6IC41cmVtO1xcbn1cXG4ubmFtZS1wbGF0ZSxcXG4uY29tcHV0ZXItbmFtZS1wbGF0ZSwgXFxuLmJvYXQtc2VsZWN0aW9uLXRpdGxlLFxcbi5ib2F0LW9yaWVudGF0aW9uLXRpdGxle1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG50YWJsZSwgdGgsIHRkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4uZ3JpZCxcXG4uY29tcHV0ZXItZ3JpZCxcXG4uYm9hdC1zZWxlY3Rpb24sXFxuLmJvYXQtb3JpZW50YXRpb257XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5ib2F0LXNlbGVjdGlvbi1idG5zLFxcbi5ib2F0LW9yaWVudGF0aW9uLWJ0bnN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAuMjVyZW07XFxufVxcbnRoLCB0ZHtcXG4gIHBhZGRpbmctdG9wOiAuMjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogLjI1cmVtO1xcbiAgd2lkdGg6IDJyZW07XFxufVxcbi5jbGlja2Vke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG4ub3V0c2lkZS1ncmlke1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLm91dHNpZGUtZ3JpZC1lcnJvcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBvZmYtZ3JpZC1lcnJvcjtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNDAwbXM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG59XFxuQGtleWZyYW1lcyBvZmYtZ3JpZC1lcnJvcntcXG4gIGZyb20ge2JhY2tncm91bmQtY29sb3I6IHJlZDt9XFxuICB0byB7YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7fVxcbn1cXG4udGFibGUtY2xhc3MsXFxuLmNvbXB1dGVyLXRhYmxlLWNsYXNze1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uZ3JpZCxcXG4uY29tcHV0ZXItZ3JpZHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNsaWNrLWJ0bnMtbW9kYWx7XFxuICB3aWR0aDogNDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgLyogbWFyZ2luOiBhdXRvOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTk0LCAxOTQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgb3BhY2l0eTogMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xcbn1cXG4uc2hvd3tcXG4gIG9wYWNpdHk6IDEwMCU7XFxufVxcbi5waGFzZWQtb3V0e1xcbiAgb3BhY2l0eTogMzAlO1xcbn1cXG4uc2VsZWN0ZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuLmNvbXB1dGVyLXNlbGVjdGVke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICAvKiBvcGFjaXR5OiAzMCU7ICovXFxufVxcbi5jb21wdXRlci1jbGlja2Vke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY29tcHV0ZXItY2VsbC10YXJnZXRlZHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBjb21wdXRlci1jZWxsLXRhcmdldGVkO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMDBtcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDExO1xcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcbn1cXG5Aa2V5ZnJhbWVzIGNvbXB1dGVyLWNlbGwtdGFyZ2V0ZWR7XFxuICBmcm9tIHtiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7fVxcbiAgdG8ge2JhY2tncm91bmQtY29sb3I6IHJlZDt9XFxufVxcbi5wbGF5ZXItY2VsbC10YXJnZXRlZHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBjb21wdXRlci1jZWxsLXRhcmdldGVkO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMDBtcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDExO1xcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcbn1cXG4uaGl0e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XFxufVxcbi5taXNzZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiAyMDBtcztcXG59XFxuLm92ZXJsYXkuc2hvd3tcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7XG4gIGdyYWJOYW1lLFxuICBDcmVhdGVCb2F0LFxuICBoaXQsXG4gIGlzU3VuayxcbiAgR2FtZWJvYXJkLFxufSBmcm9tIFwiLi4vc3JjL2Z1bmN0aW9ucyBfJl90ZXN0cy9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IGV4YW1wbGVBZGQgfSBmcm9tIFwiLi4vc3JjL0RPTS1pbnRlcmFjdGlvbnMvRE9NLWludGVyYWN0aW9uc1wiO1xuXG5jb25zdCBuYW1lUGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hbWUtcGxhdGVcIik7XG5jb25zdCBuYW1lU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLnBsYXllci1uYW1lXCIpO1xuXG5uYW1lU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBsZXQgbmFtZSA9IGUuY29tcG9zZWRQYXRoKClbMF1bMV0udmFsdWU7XG4gIG5hbWVQbGF0ZS50ZXh0Q29udGVudCA9IG5hbWU7XG59KTtcblxuY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JpZFwiKTtcblxuZ3JpZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc3QgeFZhbHVlID0gZS5jb21wb3NlZFBhdGgoKVswXS5kYXRhc2V0LnhWYWx1ZTtcbiAgY29uc3QgeVZhbHVlID0gZS5jb21wb3NlZFBhdGgoKVswXS5kYXRhc2V0LnlWYWx1ZTtcblxuICBpZiAoeFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh4VmFsdWUpO1xuICAgIC8vIGNvbnNvbGUubG9nKHlWYWx1ZSk7XG4gIH1cbn0pO1xuXG5jb25zdCBwYXRyb2xCb2F0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXRyb2wtYm9hdC1idG5cIik7XG5jb25zdCBzdWJtYXJpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1hcmluZS1idG5cIik7XG5jb25zdCBkZXN0cm95ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc3Ryb3llci1idG5cIik7XG5jb25zdCBiYXR0bGVzaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXR0bGVzaGlwLWJ0blwiKTtcbmNvbnN0IGNhcnJpZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcnJpZXItYnRuXCIpO1xuY29uc3QgaG9yaXphbnRhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9yaXphbnRhbC1idG5cIik7XG5jb25zdCB2ZXJ0aWNhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmVydGljYWwtYnRuXCIpO1xuXG5mdW5jdGlvbiBib2F0U2VsZWN0aW9uQnV0dG9uRnVuY3Rpb24oXG4gIGJ0bkNsaWNrZWQsXG4gIGJ0bkFyciA9IFtwYXRyb2xCb2F0LCBzdWJtYXJpbmUsIGRlc3Ryb3llciwgYmF0dGxlc2hpcCwgY2Fycmllcl1cbikge1xuICBidG5DbGlja2VkLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICBsZXQgcmVtYWluaW5nQnRucyA9IGJ0bkFyci5maWx0ZXIoKGJ0bikgPT4gYnRuICE9PSBidG5DbGlja2VkKTtcbiAgcmVtYWluaW5nQnRucy5mb3JFYWNoKChidG4pID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKSk7XG59XG5cbmZ1bmN0aW9uIGJvYXRPcmllbnRhdGlvbkJ1dHRvbkZ1bmN0aW9uKFxuICBidG5DbGlja2VkLFxuICBidG5BcnIgPSBbaG9yaXphbnRhbCwgdmVydGljYWxdXG4pIHtcbiAgYnRuQ2xpY2tlZC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgbGV0IHJlbWFpbmluZ0J0bnMgPSBidG5BcnIuZmlsdGVyKChidG4pID0+IGJ0biAhPT0gYnRuQ2xpY2tlZCk7XG4gIHJlbWFpbmluZ0J0bnMuZm9yRWFjaCgoYnRuKSA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIikpO1xufVxuXG5wYXRyb2xCb2F0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zb2xlLmxvZyhlLnBhdGhbMF0uZGF0YXNldC5wYXRyb2xCb2F0U3BhY2VzKTtcbiAgYm9hdFNlbGVjdGlvbkJ1dHRvbkZ1bmN0aW9uKHBhdHJvbEJvYXQpO1xufSk7XG5cbnN1Ym1hcmluZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc29sZS5sb2coZS5wYXRoWzBdLmRhdGFzZXQuc3VibWFyaW5lU3BhY2VzKTtcbiAgYm9hdFNlbGVjdGlvbkJ1dHRvbkZ1bmN0aW9uKHN1Ym1hcmluZSk7XG59KTtcblxuZGVzdHJveWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zb2xlLmxvZyhlLnBhdGhbMF0uZGF0YXNldC5kZXN0cm95ZXJTcGFjZXMpO1xuICBib2F0U2VsZWN0aW9uQnV0dG9uRnVuY3Rpb24oZGVzdHJveWVyKTtcbn0pO1xuXG5iYXR0bGVzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zb2xlLmxvZyhlLnBhdGhbMF0uZGF0YXNldC5iYXR0bGVzaGlwU3BhY2VzKTtcbiAgYm9hdFNlbGVjdGlvbkJ1dHRvbkZ1bmN0aW9uKGJhdHRsZXNoaXApO1xufSk7XG5cbmNhcnJpZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnNvbGUubG9nKGUucGF0aFswXS5kYXRhc2V0LmNhcnJpZXJTcGFjZXMpO1xuICBib2F0U2VsZWN0aW9uQnV0dG9uRnVuY3Rpb24oY2Fycmllcik7XG59KTtcblxuaG9yaXphbnRhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc29sZS5sb2coZS5wYXRoWzBdLmRhdGFzZXQuYm9hdE9yaWVudGF0aW9uKTtcbiAgYm9hdE9yaWVudGF0aW9uQnV0dG9uRnVuY3Rpb24oaG9yaXphbnRhbCk7XG59KTtcblxudmVydGljYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnNvbGUubG9nKGUucGF0aFswXS5kYXRhc2V0LmJvYXRPcmllbnRhdGlvbik7XG4gIGJvYXRPcmllbnRhdGlvbkJ1dHRvbkZ1bmN0aW9uKHZlcnRpY2FsKTtcbn0pO1xuXG4vL2NsaWNrLWJ0bnMtbW9kYWxcbmNvbnN0IGNsaWNrQnRuc01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbGljay1idG5zLW1vZGFsXCIpO1xuY29uc3QgdGFibGVDbGFzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGUtY2xhc3NcIik7XG5cbnRhYmxlQ2xhc3MuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xuICBpZiAoXG4gICAgKCFwYXRyb2xCb2F0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIXN1Ym1hcmluZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFkZXN0cm95ZXIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhYmF0dGxlc2hpcC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFjYXJyaWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSkgfHxcbiAgICAoIWhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpKVxuICApIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIk5vbmUgb2YgdGhlc2UgYnV0dG9ucyBhcmUgY2xpY2tlZFwiKTsgLy9USElTIFdPUktTISFcbiAgICAvLyBwYXRyb2xCb2F0LmNsYXNzTGlzdC5hZGQoXCJuby1idG4tY2xpY2tlZC1lcnJvclwiKTtcbiAgICBjbGlja0J0bnNNb2RhbC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgICB0YWJsZUNsYXNzLmNsYXNzTGlzdC5hZGQoXCJwaGFzZWQtb3V0XCIpO1xuICB9XG59KTtcblxuLy8gY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidGRcIik7XG5jb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyLWNlbGxcIik7XG5cbmNlbGxzLmZvckVhY2goKGNlbGwpID0+XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgY29uc3QgeE51bSA9IE51bWJlcihjZWxsLmRhdGFzZXQueFZhbHVlKTtcbiAgICBjb25zdCB5TnVtID0gTnVtYmVyKGNlbGwuZGF0YXNldC55VmFsdWUpO1xuXG4gICAgY29uc3QgbmV4dENlbGwyX2hvcml6YW50YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtICsgMX0ke3lOdW19XCJdYFxuICAgICk7XG4gICAgY29uc3QgbmV4dENlbGwzX2hvcml6YW50YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtICsgMn0ke3lOdW19XCJdYFxuICAgICk7XG4gICAgY29uc3QgbmV4dENlbGw0X2hvcml6YW50YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtICsgM30ke3lOdW19XCJdYFxuICAgICk7XG4gICAgY29uc3QgbmV4dENlbGw1X2hvcml6YW50YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtICsgNH0ke3lOdW19XCJdYFxuICAgICk7XG5cbiAgICBjb25zdCBuZXh0Q2VsbDJfdmVydGljYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtfSR7eU51bSArIDF9XCJdYFxuICAgICk7XG4gICAgY29uc3QgbmV4dENlbGwzX3ZlcnRpY2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bX0ke3lOdW0gKyAyfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsNF92ZXJ0aWNhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW19JHt5TnVtICsgM31cIl1gXG4gICAgKTtcbiAgICBjb25zdCBuZXh0Q2VsbDVfdmVydGljYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtfSR7eU51bSArIDR9XCJdYFxuICAgICk7XG5cbiAgICBpZiAoXG4gICAgICBwYXRyb2xCb2F0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIilcbiAgICApIHtcbiAgICAgIGlmIChuZXh0Q2VsbDJfaG9yaXphbnRhbCkge1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghbmV4dENlbGwyX2hvcml6YW50YWwpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHBhdHJvbEJvYXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICB2ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIilcbiAgICApIHtcbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwpIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKCFuZXh0Q2VsbDJfdmVydGljYWwpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHN1Ym1hcmluZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIGhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX2hvcml6YW50YWwgJiYgbmV4dENlbGwzX2hvcml6YW50YWwpIHtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDZWxsMl9ob3JpemFudGFsICYmICFuZXh0Q2VsbDNfaG9yaXphbnRhbCkge1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghbmV4dENlbGwyX2hvcml6YW50YWwgJiYgIW5leHRDZWxsM19ob3JpemFudGFsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBzdWJtYXJpbmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICB2ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIilcbiAgICApIHtcbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgbmV4dENlbGwzX3ZlcnRpY2FsKSB7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDZWxsMl92ZXJ0aWNhbCAmJiAhbmV4dENlbGwzX3ZlcnRpY2FsKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghbmV4dENlbGwyX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDNfdmVydGljYWwpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGRlc3Ryb3llci5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIGhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX2hvcml6YW50YWwgJiYgbmV4dENlbGwzX2hvcml6YW50YWwpIHtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDZWxsMl9ob3JpemFudGFsICYmICFuZXh0Q2VsbDNfaG9yaXphbnRhbCkge1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghbmV4dENlbGwyX2hvcml6YW50YWwgJiYgIW5leHRDZWxsM19ob3JpemFudGFsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBkZXN0cm95ZXIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICB2ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIilcbiAgICApIHtcbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgbmV4dENlbGwzX3ZlcnRpY2FsKSB7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDZWxsMl92ZXJ0aWNhbCAmJiAhbmV4dENlbGwzX3ZlcnRpY2FsKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghbmV4dENlbGwyX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDNfdmVydGljYWwpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGJhdHRsZXNoaXAuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICBob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNF9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgICFuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNF9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGJhdHRsZXNoaXAuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICB2ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIilcbiAgICApIHtcbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgbmV4dENlbGwzX3ZlcnRpY2FsICYmIG5leHRDZWxsNF92ZXJ0aWNhbCkge1xuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDZWxsMl92ZXJ0aWNhbCAmJiBuZXh0Q2VsbDNfdmVydGljYWwgJiYgIW5leHRDZWxsNF92ZXJ0aWNhbCkge1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDZWxsMl92ZXJ0aWNhbCAmJiAhbmV4dENlbGwzX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDRfdmVydGljYWwpIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKCFuZXh0Q2VsbDJfdmVydGljYWwgJiYgIW5leHRDZWxsM192ZXJ0aWNhbCAmJiAhbmV4dENlbGw0X3ZlcnRpY2FsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBjYXJyaWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIilcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGw1X2hvcml6YW50YWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDVfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw1X2hvcml6YW50YWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw1X2hvcml6YW50YWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgIW5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDVfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDVfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw1X2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGNhcnJpZXIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICB2ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIilcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGw1X3ZlcnRpY2FsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw1X3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGw1X3ZlcnRpY2FsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsNF92ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGw1X3ZlcnRpY2FsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDNfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsNF92ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGw1X3ZlcnRpY2FsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAhbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDNfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsNF92ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGw1X3ZlcnRpY2FsXG4gICAgICApIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDVfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGw1X3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDVfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSlcbik7XG5cbnRhYmxlQ2xhc3MuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICBpZiAoXG4gICAgKCFwYXRyb2xCb2F0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIXN1Ym1hcmluZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFkZXN0cm95ZXIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhYmF0dGxlc2hpcC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFjYXJyaWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSkgfHxcbiAgICAoIWhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpKVxuICApIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIk5vbmUgb2YgdGhlc2UgYnV0dG9ucyBhcmUgY2xpY2tlZFwiKTsgLy9USElTIFdPUktTISFcbiAgICAvLyBwYXRyb2xCb2F0LmNsYXNzTGlzdC5yZW1vdmUoXCJuby1idG4tY2xpY2tlZC1lcnJvclwiKTtcbiAgICBjbGlja0J0bnNNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICB0YWJsZUNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoXCJwaGFzZWQtb3V0XCIpO1xuICB9XG59KTtcblxuY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT5cbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHhOdW0gPSBOdW1iZXIoY2VsbC5kYXRhc2V0LnhWYWx1ZSk7XG4gICAgY29uc3QgeU51bSA9IE51bWJlcihjZWxsLmRhdGFzZXQueVZhbHVlKTtcblxuICAgIGNvbnN0IG5leHRDZWxsMl9ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDF9JHt5TnVtfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsM19ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDJ9JHt5TnVtfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsNF9ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDN9JHt5TnVtfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsNV9ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDR9JHt5TnVtfVwiXWBcbiAgICApO1xuXG4gICAgY29uc3QgbmV4dENlbGwyX3ZlcnRpY2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bX0ke3lOdW0gKyAxfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsM192ZXJ0aWNhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW19JHt5TnVtICsgMn1cIl1gXG4gICAgKTtcbiAgICBjb25zdCBuZXh0Q2VsbDRfdmVydGljYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtfSR7eU51bSArIDN9XCJdYFxuICAgICk7XG4gICAgY29uc3QgbmV4dENlbGw1X3ZlcnRpY2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bX0ke3lOdW0gKyA0fVwiXWBcbiAgICApO1xuXG4gICAgaWYgKFxuICAgICAgcGF0cm9sQm9hdC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIGhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX2hvcml6YW50YWwpIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl9ob3JpemFudGFsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBwYXRyb2xCb2F0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghbmV4dENlbGwyX3ZlcnRpY2FsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBzdWJtYXJpbmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICBob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKG5leHRDZWxsMl9ob3JpemFudGFsICYmIG5leHRDZWxsM19ob3JpemFudGFsKSB7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJiAhbmV4dENlbGwzX2hvcml6YW50YWwpIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl9ob3JpemFudGFsICYmICFuZXh0Q2VsbDNfaG9yaXphbnRhbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgc3VibWFyaW5lLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmIG5leHRDZWxsM192ZXJ0aWNhbCkge1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgIW5leHRDZWxsM192ZXJ0aWNhbCkge1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl92ZXJ0aWNhbCAmJiAhbmV4dENlbGwzX3ZlcnRpY2FsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBkZXN0cm95ZXIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICBob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKG5leHRDZWxsMl9ob3JpemFudGFsICYmIG5leHRDZWxsM19ob3JpemFudGFsKSB7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJiAhbmV4dENlbGwzX2hvcml6YW50YWwpIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl9ob3JpemFudGFsICYmICFuZXh0Q2VsbDNfaG9yaXphbnRhbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgZGVzdHJveWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmIG5leHRDZWxsM192ZXJ0aWNhbCkge1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgIW5leHRDZWxsM192ZXJ0aWNhbCkge1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl92ZXJ0aWNhbCAmJiAhbmV4dENlbGwzX3ZlcnRpY2FsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBiYXR0bGVzaGlwLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIilcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAhbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBiYXR0bGVzaGlwLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmIG5leHRDZWxsM192ZXJ0aWNhbCAmJiBuZXh0Q2VsbDRfdmVydGljYWwpIHtcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgbmV4dENlbGwzX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDRfdmVydGljYWwpIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgIW5leHRDZWxsM192ZXJ0aWNhbCAmJiAhbmV4dENlbGw0X3ZlcnRpY2FsKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghbmV4dENlbGwyX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDNfdmVydGljYWwgJiYgIW5leHRDZWxsNF92ZXJ0aWNhbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY2Fycmllci5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIGhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsNV9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw1X2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDVfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgICFuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNF9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDVfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGw1X2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGw1X2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNV9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBjYXJyaWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsNV92ZXJ0aWNhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNV92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV92ZXJ0aWNhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV92ZXJ0aWNhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV92ZXJ0aWNhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgIW5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV92ZXJ0aWNhbFxuICAgICAgKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGw1X3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsNV92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw1X3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pXG4pO1xuXG5jZWxscy5mb3JFYWNoKChjZWxsKSA9PlxuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgeE51bSA9IE51bWJlcihjZWxsLmRhdGFzZXQueFZhbHVlKTtcbiAgICBjb25zdCB5TnVtID0gTnVtYmVyKGNlbGwuZGF0YXNldC55VmFsdWUpO1xuXG4gICAgY29uc3QgbmV4dENlbGwyX2hvcml6YW50YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtICsgMX0ke3lOdW19XCJdYFxuICAgICk7XG4gICAgY29uc3QgbmV4dENlbGwzX2hvcml6YW50YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtICsgMn0ke3lOdW19XCJdYFxuICAgICk7XG4gICAgY29uc3QgbmV4dENlbGw0X2hvcml6YW50YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtICsgM30ke3lOdW19XCJdYFxuICAgICk7XG4gICAgY29uc3QgbmV4dENlbGw1X2hvcml6YW50YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtICsgNH0ke3lOdW19XCJdYFxuICAgICk7XG5cbiAgICBjb25zdCBuZXh0Q2VsbDJfdmVydGljYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtfSR7eU51bSArIDF9XCJdYFxuICAgICk7XG4gICAgY29uc3QgbmV4dENlbGwzX3ZlcnRpY2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bX0ke3lOdW0gKyAyfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsNF92ZXJ0aWNhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW19JHt5TnVtICsgM31cIl1gXG4gICAgKTtcbiAgICBjb25zdCBuZXh0Q2VsbDVfdmVydGljYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtfSR7eU51bSArIDR9XCJdYFxuICAgICk7XG5cbiAgICBpZiAoXG4gICAgICBwYXRyb2xCb2F0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFncmlkLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwib3V0c2lkZS1ncmlkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgICFjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsMl9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBwYXRyb2xCb2F0LmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBwYXRyb2xCb2F0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInBsYXllci1wYXRyb2wtYm9hdFwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLXBhdHJvbC1ib2F0XCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHBhdHJvbEJvYXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICB2ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFncmlkLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwib3V0c2lkZS1ncmlkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgICFjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgcGF0cm9sQm9hdC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgcGF0cm9sQm9hdC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItcGF0cm9sLWJvYXRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLXBhdHJvbC1ib2F0XCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHN1Ym1hcmluZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIGhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhZ3JpZC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcIm91dHNpZGUtZ3JpZFwiKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICAhY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDJfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDNfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgc3VibWFyaW5lLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBzdWJtYXJpbmUuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLXN1Ym1hcmluZVwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLXN1Ym1hcmluZVwiKTtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLXN1Ym1hcmluZVwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBzdWJtYXJpbmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICB2ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFncmlkLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwib3V0c2lkZS1ncmlkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgICFjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDNfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhZ3JpZC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcIm91dHNpZGUtZ3JpZFwiKVxuICAgICAgKSB7XG4gICAgICAgIHN1Ym1hcmluZS5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgc3VibWFyaW5lLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInBsYXllci1zdWJtYXJpbmVcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLXN1Ym1hcmluZVwiKTtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItc3VibWFyaW5lXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGRlc3Ryb3llci5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIGhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhZ3JpZC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcIm91dHNpZGUtZ3JpZFwiKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICAhY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDJfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDNfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgZGVzdHJveWVyLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBkZXN0cm95ZXIuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWRlc3Ryb3llclwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWRlc3Ryb3llclwiKTtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWRlc3Ryb3llclwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBkZXN0cm95ZXIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICB2ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFncmlkLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwib3V0c2lkZS1ncmlkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgICFjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDNfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIGRlc3Ryb3llci5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgZGVzdHJveWVyLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInBsYXllci1kZXN0cm95ZXJcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWRlc3Ryb3llclwiKTtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItZGVzdHJveWVyXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGJhdHRsZXNoaXAuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICBob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIWdyaWQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJvdXRzaWRlLWdyaWRcIilcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgIWNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwyX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwzX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhZ3JpZC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcIm91dHNpZGUtZ3JpZFwiKVxuICAgICAgKSB7XG4gICAgICAgIGJhdHRsZXNoaXAuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGJhdHRsZXNoaXAuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWJhdHRsZXNoaXBcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1iYXR0bGVzaGlwXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItYmF0dGxlc2hpcFwiKTtcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWJhdHRsZXNoaXBcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgYmF0dGxlc2hpcC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIHZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIWdyaWQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJvdXRzaWRlLWdyaWRcIilcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgIWNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwyX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsM192ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDRfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhZ3JpZC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcIm91dHNpZGUtZ3JpZFwiKVxuICAgICAgKSB7XG4gICAgICAgIGJhdHRsZXNoaXAuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGJhdHRsZXNoaXAuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWJhdHRsZXNoaXBcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWJhdHRsZXNoaXBcIik7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWJhdHRsZXNoaXBcIik7XG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWJhdHRsZXNoaXBcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY2Fycmllci5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIGhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhZ3JpZC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcIm91dHNpZGUtZ3JpZFwiKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICAhY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDJfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDNfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDRfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDVfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgY2Fycmllci5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2Fycmllci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItY2FycmllclwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWNhcnJpZXJcIik7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1jYXJyaWVyXCIpO1xuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItY2FycmllclwiKTtcbiAgICAgICAgbmV4dENlbGw1X2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDVfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWNhcnJpZXJcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY2Fycmllci5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIHZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIWdyaWQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJvdXRzaWRlLWdyaWRcIilcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgIWNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwyX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsM192ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDRfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGw1X3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBjYXJyaWVyLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBjYXJyaWVyLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInBsYXllci1jYXJyaWVyXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1jYXJyaWVyXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1jYXJyaWVyXCIpO1xuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1jYXJyaWVyXCIpO1xuICAgICAgICBuZXh0Q2VsbDVfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDVfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInBsYXllci1jYXJyaWVyXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHBhdHJvbEJvYXQuZGlzYWJsZWQgPT09IHRydWUgJiZcbiAgICAgICAgc3VibWFyaW5lLmRpc2FibGVkID09PSB0cnVlICYmXG4gICAgICAgIGRlc3Ryb3llci5kaXNhYmxlZCA9PT0gdHJ1ZSAmJlxuICAgICAgICBiYXR0bGVzaGlwLmRpc2FibGVkID09PSB0cnVlICYmXG4gICAgICAgIGNhcnJpZXIuZGlzYWJsZWQgPT09IHRydWVcbiAgICAgICkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkFsbCBib2F0cyBoYXZlIGJlZW4gcGxhY2VkXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSlcbik7XG5cbi8vb3drcmluZyBvbiBjb21wdXRlciBmdW5jdGlvbmFsaXR5XG5mdW5jdGlvbiByYW5kb21OdW1CZXR3ZWVuKG1pbiwgbWF4KSB7XG4gIGxldCBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuICByZXR1cm4gbnVtO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlck9yaWVudGF0aW9uKCkge1xuICBsZXQgY29tcHV0ZXJPcmllbnRhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpICsgMTtcbiAgaWYgKGNvbXB1dGVyT3JpZW50YXRpb24gPT09IDEpIHtcbiAgICByZXR1cm4gXCJob3JpemFudGFsXCI7XG4gIH1cbiAgaWYgKGNvbXB1dGVyT3JpZW50YXRpb24gPT09IDIpIHtcbiAgICByZXR1cm4gXCJ2ZXJ0aWNhbFwiO1xuICB9XG59XG5cbmNvbnNvbGUubG9nKGNvbXB1dGVyT3JpZW50YXRpb24oKSk7XG5cbmxldCB1c2VkTnVtYmVycyA9IFtdO1xubGV0IHVzZWROdW1iZXJzMiA9IFtdO1xuXG5jbGFzcyBDb21wdXRlckJvYXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBuYW1lLFxuICAgIG9yaWVudGF0aW9uXG4gICAgLy8geFZhbHVlLFxuICAgIC8vIHlWYWx1ZSxcbiAgICAvLyBzdGFydGluZ0NlbGwsXG4gICAgLy8gbmV4dENlbGwyLFxuICAgIC8vIG5leHRDZWxsMyxcbiAgICAvLyBuZXh0Q2VsbDQsXG4gICAgLy8gbmV4dENlbGw1XG4gICkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5vcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uO1xuICAgIC8vIHRoaXMueFZhbHVlID0gcmFuZG9tTnVtQmV0d2VlbigxLCA5KTtcbiAgICAvLyB0aGlzLnlWYWx1ZSA9IHJhbmRvbU51bUJldHdlZW4oMSwgMTApO1xuICAgIC8vIHRoaXMuc3RhcnRpbmdDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAvLyAgIGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7dGhpcy54VmFsdWV9JHt0aGlzLnlWYWx1ZX1cIl1gXG4gICAgLy8gKTtcbiAgICAvLyB0aGlzLm5leHRDZWxsMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgLy8gICBgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke3RoaXMueFZhbHVlICsgMX0ke3RoaXMueVZhbHVlfVwiXWBcbiAgICAvLyApO1xuICAgIC8vIHRoaXMubmV4dENlbGwzID0gbmV4dENlbGwzO1xuICAgIC8vIHRoaXMubmV4dENlbGw0ID0gbmV4dENlbGw0O1xuICAgIC8vIHRoaXMubmV4dENlbGw1ID0gbmV4dENlbGw1O1xuICB9XG4gIGNvbXB1dGVyQ29kZSgpIHtcbiAgICBpZiAodGhpcy5uYW1lID09PSBcInBhdHJvbEJvYXRcIiAmJiB0aGlzLm9yaWVudGF0aW9uID09PSBcImhvcml6YW50YWxcIikge1xuICAgICAgbGV0IHggPSByYW5kb21OdW1CZXR3ZWVuKDEsIDkpO1xuICAgICAgbGV0IHkgPSByYW5kb21OdW1CZXR3ZWVuKDEsIDEwKTtcbiAgICAgIGxldCBuZXh0Q2VsbDI9IHgrMTtcbiAgICAgIGxldCB4VG9TdHJpbmc9IHgudG9TdHJpbmcoKTsgICAgICBcbiAgICAgIGxldCB5VG9TdHJpbmc9IHkudG9TdHJpbmcoKTtcbiAgICAgIGxldCBuZXh0Q2VsbDJTdHJpbmc9IG5leHRDZWxsMi50b1N0cmluZygpOyAgICAgIFxuICAgICAgbGV0IGNlbGxDb2RlPSB4VG9TdHJpbmcgKyB5VG9TdHJpbmc7ICBcbiAgICAgIGxldCBuZXh0Q2VsbDJDb2RlPSBuZXh0Q2VsbDJTdHJpbmcgKyB5VG9TdHJpbmc7XG4gICAgICBpZih1c2VkTnVtYmVycy5pbmNsdWRlcyhjZWxsQ29kZSkgfHwgdXNlZE51bWJlcnMuaW5jbHVkZXMobmV4dENlbGwyQ29kZSkpe1xuICAgICAgICB0aGlzLmNvbXB1dGVyQ29kZSgpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGxldCBhY3R1YWxDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke2NlbGxDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGwyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsMkNvZGV9XCJdYCk7XG4gICAgICAgIGFjdHVhbENlbGwuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxDZWxsLmNsYXNzTGlzdC5hZGQoXCJwYXRyb2wtYm9hdFwiKTtcbiAgICAgICAgYWN0dWFsQ2VsbC50ZXh0Q29udGVudD0gXCJwXCI7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMi5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMi5jbGFzc0xpc3QuYWRkKFwicGF0cm9sLWJvYXRcIik7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2goY2VsbENvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsMkNvZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5uYW1lID09PSBcInN1Ym1hcmluZVwiICYmIHRoaXMub3JpZW50YXRpb24gPT09IFwiaG9yaXphbnRhbFwiKSB7XG4gICAgICBsZXQgeCA9IHJhbmRvbU51bUJldHdlZW4oMSwgOCk7XG4gICAgICBsZXQgeSA9IHJhbmRvbU51bUJldHdlZW4oMSwgMTApO1xuICAgICAgbGV0IG5leHRDZWxsMj0geCsxO1xuICAgICAgbGV0IG5leHRDZWxsMz0geCsyO1xuICAgICAgbGV0IHhUb1N0cmluZz0geC50b1N0cmluZygpOyAgICAgIFxuICAgICAgbGV0IHlUb1N0cmluZz0geS50b1N0cmluZygpO1xuICAgICAgbGV0IG5leHRDZWxsMlN0cmluZz0gbmV4dENlbGwyLnRvU3RyaW5nKCk7ICAgICAgXG4gICAgICBsZXQgbmV4dENlbGwzU3RyaW5nPSBuZXh0Q2VsbDMudG9TdHJpbmcoKTsgICAgIFxuICAgICAgbGV0IGNlbGxDb2RlPSB4VG9TdHJpbmcgKyB5VG9TdHJpbmc7ICBcbiAgICAgIGxldCBuZXh0Q2VsbDJDb2RlPSBuZXh0Q2VsbDJTdHJpbmcgKyB5VG9TdHJpbmc7IFxuICAgICAgbGV0IG5leHRDZWxsM0NvZGU9IG5leHRDZWxsM1N0cmluZyArIHlUb1N0cmluZzsgXG4gICAgICBpZih1c2VkTnVtYmVycy5pbmNsdWRlcyhjZWxsQ29kZSkgfHwgdXNlZE51bWJlcnMuaW5jbHVkZXMobmV4dENlbGwyQ29kZSkgfHwgdXNlZE51bWJlcnMuaW5jbHVkZXMobmV4dENlbGwzQ29kZSkpe1xuICAgICAgICB0aGlzLmNvbXB1dGVyQ29kZSgpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGxldCBhY3R1YWxDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke2NlbGxDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGwyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsMkNvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGwzQ29kZX1cIl1gKTtcbiAgICAgICAgYWN0dWFsQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbENlbGwuY2xhc3NMaXN0LmFkZChcInN1Ym1hcmluZVwiKTtcbiAgICAgICAgYWN0dWFsQ2VsbC50ZXh0Q29udGVudD0gXCJzXCI7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMi5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMi5jbGFzc0xpc3QuYWRkKFwic3VibWFyaW5lXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDMuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDMuY2xhc3NMaXN0LmFkZChcInN1Ym1hcmluZVwiKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChjZWxsQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGwyQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGwzQ29kZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLm5hbWUgPT09IFwiZGVzdHJveWVyXCIgJiYgdGhpcy5vcmllbnRhdGlvbiA9PT0gXCJob3JpemFudGFsXCIpIHtcbiAgICAgIGxldCB4ID0gcmFuZG9tTnVtQmV0d2VlbigxLCA4KTtcbiAgICAgIGxldCB5ID0gcmFuZG9tTnVtQmV0d2VlbigxLCAxMCk7XG4gICAgICBsZXQgbmV4dENlbGwyPSB4KzE7XG4gICAgICBsZXQgbmV4dENlbGwzPSB4KzI7XG4gICAgICBsZXQgeFRvU3RyaW5nPSB4LnRvU3RyaW5nKCk7ICAgICAgXG4gICAgICBsZXQgeVRvU3RyaW5nPSB5LnRvU3RyaW5nKCk7XG4gICAgICBsZXQgbmV4dENlbGwyU3RyaW5nPSBuZXh0Q2VsbDIudG9TdHJpbmcoKTsgICAgICBcbiAgICAgIGxldCBuZXh0Q2VsbDNTdHJpbmc9IG5leHRDZWxsMy50b1N0cmluZygpOyAgICAgXG4gICAgICBsZXQgY2VsbENvZGU9IHhUb1N0cmluZyArIHlUb1N0cmluZzsgIFxuICAgICAgbGV0IG5leHRDZWxsMkNvZGU9IG5leHRDZWxsMlN0cmluZyArIHlUb1N0cmluZzsgXG4gICAgICBsZXQgbmV4dENlbGwzQ29kZT0gbmV4dENlbGwzU3RyaW5nICsgeVRvU3RyaW5nOyBcbiAgICAgIGlmKHVzZWROdW1iZXJzLmluY2x1ZGVzKGNlbGxDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDJDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDNDb2RlKSl7XG4gICAgICAgIHRoaXMuY29tcHV0ZXJDb2RlKCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgbGV0IGFjdHVhbENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7Y2VsbENvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGwyQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDNDb2RlfVwiXWApO1xuICAgICAgICBhY3R1YWxDZWxsLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsQ2VsbC5jbGFzc0xpc3QuYWRkKFwiZGVzdHJveWVyXCIpO1xuICAgICAgICBhY3R1YWxDZWxsLnRleHRDb250ZW50PSBcImRcIjtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwyLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwyLmNsYXNzTGlzdC5hZGQoXCJkZXN0cm95ZXJcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMy5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMy5jbGFzc0xpc3QuYWRkKFwiZGVzdHJveWVyXCIpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKGNlbGxDb2RlKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChuZXh0Q2VsbDJDb2RlKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChuZXh0Q2VsbDNDb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMubmFtZSA9PT0gXCJiYXR0bGVzaGlwXCIgJiYgdGhpcy5vcmllbnRhdGlvbiA9PT0gXCJob3JpemFudGFsXCIpIHtcbiAgICAgIGxldCB4ID0gcmFuZG9tTnVtQmV0d2VlbigxLCA3KTtcbiAgICAgIGxldCB5ID0gcmFuZG9tTnVtQmV0d2VlbigxLCAxMCk7XG4gICAgICBsZXQgbmV4dENlbGwyPSB4KzE7XG4gICAgICBsZXQgbmV4dENlbGwzPSB4KzI7XG4gICAgICBsZXQgbmV4dENlbGw0PSB4KzM7XG4gICAgICBsZXQgeFRvU3RyaW5nPSB4LnRvU3RyaW5nKCk7ICAgICAgXG4gICAgICBsZXQgeVRvU3RyaW5nPSB5LnRvU3RyaW5nKCk7XG4gICAgICBsZXQgbmV4dENlbGwyU3RyaW5nPSBuZXh0Q2VsbDIudG9TdHJpbmcoKTsgICAgICBcbiAgICAgIGxldCBuZXh0Q2VsbDNTdHJpbmc9IG5leHRDZWxsMy50b1N0cmluZygpOyAgICAgXG4gICAgICBsZXQgbmV4dENlbGw0U3RyaW5nPSBuZXh0Q2VsbDQudG9TdHJpbmcoKTsgICAgIFxuICAgICAgbGV0IGNlbGxDb2RlPSB4VG9TdHJpbmcgKyB5VG9TdHJpbmc7ICBcbiAgICAgIGxldCBuZXh0Q2VsbDJDb2RlPSBuZXh0Q2VsbDJTdHJpbmcgKyB5VG9TdHJpbmc7IFxuICAgICAgbGV0IG5leHRDZWxsM0NvZGUgPSBuZXh0Q2VsbDNTdHJpbmcgKyB5VG9TdHJpbmc7XG4gICAgICBsZXQgbmV4dENlbGw0Q29kZSA9IG5leHRDZWxsNFN0cmluZyArIHlUb1N0cmluZzsgXG4gICAgICBpZih1c2VkTnVtYmVycy5pbmNsdWRlcyhjZWxsQ29kZSkgfHwgdXNlZE51bWJlcnMuaW5jbHVkZXMobmV4dENlbGwyQ29kZSkgfHwgdXNlZE51bWJlcnMuaW5jbHVkZXMobmV4dENlbGwzQ29kZSkgfHwgdXNlZE51bWJlcnMuaW5jbHVkZXMobmV4dENlbGw0Q29kZSkpe1xuICAgICAgICB0aGlzLmNvbXB1dGVyQ29kZSgpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGxldCBhY3R1YWxDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke2NlbGxDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGwyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsMkNvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGwzQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsNCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDRDb2RlfVwiXWApO1xuICAgICAgICBhY3R1YWxDZWxsLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsQ2VsbC5jbGFzc0xpc3QuYWRkKFwiYmF0dGxlc2hpcFwiKTtcbiAgICAgICAgYWN0dWFsQ2VsbC50ZXh0Q29udGVudD0gXCJiXCI7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMi5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMi5jbGFzc0xpc3QuYWRkKFwiYmF0dGxlc2hpcFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwzLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwzLmNsYXNzTGlzdC5hZGQoXCJiYXR0bGVzaGlwXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDQuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDQuY2xhc3NMaXN0LmFkZChcImJhdHRsZXNoaXBcIik7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2goY2VsbENvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsMkNvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsM0NvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsNENvZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5uYW1lID09PSBcImNhcnJpZXJcIiAmJiB0aGlzLm9yaWVudGF0aW9uID09PSBcImhvcml6YW50YWxcIikge1xuICAgICAgbGV0IHggPSByYW5kb21OdW1CZXR3ZWVuKDEsIDYpO1xuICAgICAgbGV0IHkgPSByYW5kb21OdW1CZXR3ZWVuKDEsIDEwKTtcbiAgICAgIGxldCBuZXh0Q2VsbDI9IHgrMTtcbiAgICAgIGxldCBuZXh0Q2VsbDM9IHgrMjtcbiAgICAgIGxldCBuZXh0Q2VsbDQ9IHgrMztcbiAgICAgIGxldCBuZXh0Q2VsbDU9IHgrNDtcbiAgICAgIGxldCB4VG9TdHJpbmc9IHgudG9TdHJpbmcoKTsgICAgICBcbiAgICAgIGxldCB5VG9TdHJpbmc9IHkudG9TdHJpbmcoKTtcbiAgICAgIGxldCBuZXh0Q2VsbDJTdHJpbmc9IG5leHRDZWxsMi50b1N0cmluZygpOyAgICAgIFxuICAgICAgbGV0IG5leHRDZWxsM1N0cmluZz0gbmV4dENlbGwzLnRvU3RyaW5nKCk7ICAgICBcbiAgICAgIGxldCBuZXh0Q2VsbDRTdHJpbmc9IG5leHRDZWxsNC50b1N0cmluZygpOyAgICAgXG4gICAgICBsZXQgbmV4dENlbGw1U3RyaW5nPSBuZXh0Q2VsbDUudG9TdHJpbmcoKTsgICAgIFxuICAgICAgbGV0IGNlbGxDb2RlPSB4VG9TdHJpbmcgKyB5VG9TdHJpbmc7ICBcbiAgICAgIGxldCBuZXh0Q2VsbDJDb2RlPSBuZXh0Q2VsbDJTdHJpbmcgKyB5VG9TdHJpbmc7IFxuICAgICAgbGV0IG5leHRDZWxsM0NvZGUgPSBuZXh0Q2VsbDNTdHJpbmcgKyB5VG9TdHJpbmc7XG4gICAgICBsZXQgbmV4dENlbGw0Q29kZSA9IG5leHRDZWxsNFN0cmluZyArIHlUb1N0cmluZztcbiAgICAgIGxldCBuZXh0Q2VsbDVDb2RlID0gbmV4dENlbGw1U3RyaW5nICsgeVRvU3RyaW5nOyBcbiAgICAgIGlmKHVzZWROdW1iZXJzLmluY2x1ZGVzKGNlbGxDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDJDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDNDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDRDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDVDb2RlKSl7XG4gICAgICAgIHRoaXMuY29tcHV0ZXJDb2RlKCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgbGV0IGFjdHVhbENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7Y2VsbENvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGwyQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDNDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGw0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsNENvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGw1Q29kZX1cIl1gKTtcbiAgICAgICAgYWN0dWFsQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbENlbGwuY2xhc3NMaXN0LmFkZChcImNhcnJpZXJcIik7XG4gICAgICAgIGFjdHVhbENlbGwudGV4dENvbnRlbnQ9IFwiY1wiO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDIuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDIuY2xhc3NMaXN0LmFkZChcImNhcnJpZXJcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMy5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMy5jbGFzc0xpc3QuYWRkKFwiY2FycmllclwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGw0LmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGw0LmNsYXNzTGlzdC5hZGQoXCJjYXJyaWVyXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDUuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDUuY2xhc3NMaXN0LmFkZChcImNhcnJpZXJcIik7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2goY2VsbENvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsMkNvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsM0NvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsNENvZGUpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKG5leHRDZWxsNUNvZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5uYW1lID09PSBcInBhdHJvbEJvYXRcIiAmJiB0aGlzLm9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGxldCB4ID0gcmFuZG9tTnVtQmV0d2VlbigxLCAxMCk7XG4gICAgICBsZXQgeSA9IHJhbmRvbU51bUJldHdlZW4oMSwgOSk7XG4gICAgICBsZXQgbmV4dENlbGwyID0geSArIDE7XG4gICAgICBsZXQgeFRvU3RyaW5nID0geC50b1N0cmluZygpO1xuICAgICAgbGV0IHlUb1N0cmluZyA9IHkudG9TdHJpbmcoKTtcbiAgICAgIGxldCBuZXh0Q2VsbDJTdHJpbmcgPSBuZXh0Q2VsbDIudG9TdHJpbmcoKTtcbiAgICAgIGxldCBjZWxsQ29kZSA9IHhUb1N0cmluZyArIHlUb1N0cmluZztcbiAgICAgIGxldCBuZXh0Q2VsbDJDb2RlID0geFRvU3RyaW5nICsgbmV4dENlbGwyU3RyaW5nO1xuICAgICAgaWYodXNlZE51bWJlcnMuaW5jbHVkZXMoY2VsbENvZGUpIHx8IHVzZWROdW1iZXJzLmluY2x1ZGVzKG5leHRDZWxsMkNvZGUpKXtcbiAgICAgICAgdGhpcy5jb21wdXRlckNvZGUoKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBsZXQgYWN0dWFsQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtjZWxsQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDJDb2RlfVwiXWApO1xuICAgICAgICBhY3R1YWxDZWxsLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsQ2VsbC5jbGFzc0xpc3QuYWRkKFwicGF0cm9sLWJvYXRcIik7XG4gICAgICAgIGFjdHVhbENlbGwudGV4dENvbnRlbnQ9IFwicFwiO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDIuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDIuY2xhc3NMaXN0LmFkZChcInBhdHJvbC1ib2F0XCIpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKGNlbGxDb2RlKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChuZXh0Q2VsbDJDb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMubmFtZSA9PT0gXCJzdWJtYXJpbmVcIiAmJiB0aGlzLm9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGxldCB4ID0gcmFuZG9tTnVtQmV0d2VlbigxLCAxMCk7XG4gICAgICBsZXQgeSA9IHJhbmRvbU51bUJldHdlZW4oMSwgOCk7XG4gICAgICBsZXQgbmV4dENlbGwyPSB5KzE7XG4gICAgICBsZXQgbmV4dENlbGwzPSB5KzI7XG4gICAgICBsZXQgeFRvU3RyaW5nPSB4LnRvU3RyaW5nKCk7ICAgICAgXG4gICAgICBsZXQgeVRvU3RyaW5nPSB5LnRvU3RyaW5nKCk7XG4gICAgICBsZXQgbmV4dENlbGwyU3RyaW5nPSBuZXh0Q2VsbDIudG9TdHJpbmcoKTsgICAgICBcbiAgICAgIGxldCBuZXh0Q2VsbDNTdHJpbmc9IG5leHRDZWxsMy50b1N0cmluZygpOyAgICAgXG4gICAgICBsZXQgY2VsbENvZGU9IHhUb1N0cmluZyArIHlUb1N0cmluZzsgIFxuICAgICAgbGV0IG5leHRDZWxsMkNvZGU9IHhUb1N0cmluZyArIG5leHRDZWxsMlN0cmluZzsgXG4gICAgICBsZXQgbmV4dENlbGwzQ29kZT0geFRvU3RyaW5nICsgbmV4dENlbGwzU3RyaW5nOyBcbiAgICAgIGlmKHVzZWROdW1iZXJzLmluY2x1ZGVzKGNlbGxDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDJDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDNDb2RlKSl7XG4gICAgICAgIHRoaXMuY29tcHV0ZXJDb2RlKCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgbGV0IGFjdHVhbENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7Y2VsbENvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGwyQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDNDb2RlfVwiXWApO1xuICAgICAgICBhY3R1YWxDZWxsLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsQ2VsbC5jbGFzc0xpc3QuYWRkKFwic3VibWFyaW5lXCIpO1xuICAgICAgICBhY3R1YWxDZWxsLnRleHRDb250ZW50PSBcInNcIjtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwyLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwyLmNsYXNzTGlzdC5hZGQoXCJzdWJtYXJpbmVcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMy5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMy5jbGFzc0xpc3QuYWRkKFwic3VibWFyaW5lXCIpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKGNlbGxDb2RlKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChuZXh0Q2VsbDJDb2RlKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChuZXh0Q2VsbDNDb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMubmFtZSA9PT0gXCJkZXN0cm95ZXJcIiAmJiB0aGlzLm9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGxldCB4ID0gcmFuZG9tTnVtQmV0d2VlbigxLCAxMCk7XG4gICAgICBsZXQgeSA9IHJhbmRvbU51bUJldHdlZW4oMSwgOCk7XG4gICAgICBsZXQgbmV4dENlbGwyPSB5KzE7XG4gICAgICBsZXQgbmV4dENlbGwzPSB5KzI7XG4gICAgICBsZXQgeFRvU3RyaW5nPSB4LnRvU3RyaW5nKCk7ICAgICAgXG4gICAgICBsZXQgeVRvU3RyaW5nPSB5LnRvU3RyaW5nKCk7XG4gICAgICBsZXQgbmV4dENlbGwyU3RyaW5nPSBuZXh0Q2VsbDIudG9TdHJpbmcoKTsgICAgICBcbiAgICAgIGxldCBuZXh0Q2VsbDNTdHJpbmc9IG5leHRDZWxsMy50b1N0cmluZygpOyAgICAgXG4gICAgICBsZXQgY2VsbENvZGU9IHhUb1N0cmluZyArIHlUb1N0cmluZzsgIFxuICAgICAgbGV0IG5leHRDZWxsMkNvZGU9IHhUb1N0cmluZyArIG5leHRDZWxsMlN0cmluZzsgXG4gICAgICBsZXQgbmV4dENlbGwzQ29kZT0geFRvU3RyaW5nICsgbmV4dENlbGwzU3RyaW5nOyBcbiAgICAgIGlmKHVzZWROdW1iZXJzLmluY2x1ZGVzKGNlbGxDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDJDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDNDb2RlKSl7XG4gICAgICAgIHRoaXMuY29tcHV0ZXJDb2RlKCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgbGV0IGFjdHVhbENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7Y2VsbENvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGwyQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDNDb2RlfVwiXWApO1xuICAgICAgICBhY3R1YWxDZWxsLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsQ2VsbC5jbGFzc0xpc3QuYWRkKFwiZGVzdHJveWVyXCIpO1xuICAgICAgICBhY3R1YWxDZWxsLnRleHRDb250ZW50PSBcImRcIjtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwyLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwyLmNsYXNzTGlzdC5hZGQoXCJkZXN0cm95ZXJcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMy5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsMy5jbGFzc0xpc3QuYWRkKFwiZGVzdHJveWVyXCIpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKGNlbGxDb2RlKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChuZXh0Q2VsbDJDb2RlKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChuZXh0Q2VsbDNDb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMubmFtZSA9PT0gXCJiYXR0bGVzaGlwXCIgJiYgdGhpcy5vcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBsZXQgeCA9IHJhbmRvbU51bUJldHdlZW4oMSwgMTApO1xuICAgICAgbGV0IHkgPSByYW5kb21OdW1CZXR3ZWVuKDEsIDcpO1xuICAgICAgbGV0IG5leHRDZWxsMj0geSsxO1xuICAgICAgbGV0IG5leHRDZWxsMz0geSsyO1xuICAgICAgbGV0IG5leHRDZWxsND0geSszO1xuICAgICAgbGV0IHhUb1N0cmluZz0geC50b1N0cmluZygpOyAgICAgIFxuICAgICAgbGV0IHlUb1N0cmluZz0geS50b1N0cmluZygpO1xuICAgICAgbGV0IG5leHRDZWxsMlN0cmluZz0gbmV4dENlbGwyLnRvU3RyaW5nKCk7ICAgICAgXG4gICAgICBsZXQgbmV4dENlbGwzU3RyaW5nPSBuZXh0Q2VsbDMudG9TdHJpbmcoKTsgICAgIFxuICAgICAgbGV0IG5leHRDZWxsNFN0cmluZz0gbmV4dENlbGw0LnRvU3RyaW5nKCk7ICAgICBcbiAgICAgIGxldCBjZWxsQ29kZT0geFRvU3RyaW5nICsgeVRvU3RyaW5nOyAgXG4gICAgICBsZXQgbmV4dENlbGwyQ29kZSA9IHhUb1N0cmluZyArIG5leHRDZWxsMlN0cmluZzsgXG4gICAgICBsZXQgbmV4dENlbGwzQ29kZSA9IHhUb1N0cmluZyArIG5leHRDZWxsM1N0cmluZztcbiAgICAgIGxldCBuZXh0Q2VsbDRDb2RlID0geFRvU3RyaW5nICsgbmV4dENlbGw0U3RyaW5nOyBcbiAgICAgIGlmKHVzZWROdW1iZXJzLmluY2x1ZGVzKGNlbGxDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDJDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDNDb2RlKSB8fCB1c2VkTnVtYmVycy5pbmNsdWRlcyhuZXh0Q2VsbDRDb2RlKSl7XG4gICAgICAgIHRoaXMuY29tcHV0ZXJDb2RlKCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgbGV0IGFjdHVhbENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7Y2VsbENvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGwyQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDNDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGw0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsNENvZGV9XCJdYCk7XG4gICAgICAgIGFjdHVhbENlbGwuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxDZWxsLmNsYXNzTGlzdC5hZGQoXCJiYXR0bGVzaGlwXCIpO1xuICAgICAgICBhY3R1YWxDZWxsLnRleHRDb250ZW50PSBcImJcIjtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwyLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwyLmNsYXNzTGlzdC5hZGQoXCJiYXR0bGVzaGlwXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDMuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDMuY2xhc3NMaXN0LmFkZChcImJhdHRsZXNoaXBcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsNC5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsNC5jbGFzc0xpc3QuYWRkKFwiYmF0dGxlc2hpcFwiKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChjZWxsQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGwyQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGwzQ29kZSk7XG4gICAgICAgIHVzZWROdW1iZXJzLnB1c2gobmV4dENlbGw0Q29kZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLm5hbWUgPT09IFwiY2FycmllclwiICYmIHRoaXMub3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgbGV0IHggPSByYW5kb21OdW1CZXR3ZWVuKDEsIDEwKTtcbiAgICAgIGxldCB5ID0gcmFuZG9tTnVtQmV0d2VlbigxLCA2KTtcbiAgICAgIGxldCBuZXh0Q2VsbDI9IHkrMTtcbiAgICAgIGxldCBuZXh0Q2VsbDM9IHkrMjtcbiAgICAgIGxldCBuZXh0Q2VsbDQ9IHkrMztcbiAgICAgIGxldCBuZXh0Q2VsbDU9IHkrNDtcbiAgICAgIGxldCB4VG9TdHJpbmc9IHgudG9TdHJpbmcoKTsgICAgICBcbiAgICAgIGxldCB5VG9TdHJpbmc9IHkudG9TdHJpbmcoKTtcbiAgICAgIGxldCBuZXh0Q2VsbDJTdHJpbmc9IG5leHRDZWxsMi50b1N0cmluZygpOyAgICAgIFxuICAgICAgbGV0IG5leHRDZWxsM1N0cmluZz0gbmV4dENlbGwzLnRvU3RyaW5nKCk7ICAgICBcbiAgICAgIGxldCBuZXh0Q2VsbDRTdHJpbmc9IG5leHRDZWxsNC50b1N0cmluZygpOyAgICAgXG4gICAgICBsZXQgbmV4dENlbGw1U3RyaW5nPSBuZXh0Q2VsbDUudG9TdHJpbmcoKTsgICAgIFxuICAgICAgbGV0IGNlbGxDb2RlPSB4VG9TdHJpbmcgKyB5VG9TdHJpbmc7ICBcbiAgICAgIGxldCBuZXh0Q2VsbDJDb2RlID0geFRvU3RyaW5nICsgbmV4dENlbGwyU3RyaW5nOyBcbiAgICAgIGxldCBuZXh0Q2VsbDNDb2RlID0geFRvU3RyaW5nICsgbmV4dENlbGwzU3RyaW5nO1xuICAgICAgbGV0IG5leHRDZWxsNENvZGUgPSB4VG9TdHJpbmcgKyBuZXh0Q2VsbDRTdHJpbmc7XG4gICAgICBsZXQgbmV4dENlbGw1Q29kZSA9IHhUb1N0cmluZyArIG5leHRDZWxsNVN0cmluZzsgXG4gICAgICBpZih1c2VkTnVtYmVycy5pbmNsdWRlcyhjZWxsQ29kZSkgfHwgdXNlZE51bWJlcnMuaW5jbHVkZXMobmV4dENlbGwyQ29kZSkgfHwgdXNlZE51bWJlcnMuaW5jbHVkZXMobmV4dENlbGwzQ29kZSkgfHwgdXNlZE51bWJlcnMuaW5jbHVkZXMobmV4dENlbGw0Q29kZSkgfHwgdXNlZE51bWJlcnMuaW5jbHVkZXMobmV4dENlbGw1Q29kZSkpe1xuICAgICAgICB0aGlzLmNvbXB1dGVyQ29kZSgpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGxldCBhY3R1YWxDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke2NlbGxDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGwyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsMkNvZGV9XCJdYCk7XG4gICAgICAgIGxldCBhY3R1YWxOZXh0Q2VsbDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wdXRlci1jb2RlPSBcIiR7bmV4dENlbGwzQ29kZX1cIl1gKTtcbiAgICAgICAgbGV0IGFjdHVhbE5leHRDZWxsNCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXB1dGVyLWNvZGU9IFwiJHtuZXh0Q2VsbDRDb2RlfVwiXWApO1xuICAgICAgICBsZXQgYWN0dWFsTmV4dENlbGw1ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHV0ZXItY29kZT0gXCIke25leHRDZWxsNUNvZGV9XCJdYCk7XG4gICAgICAgIGFjdHVhbENlbGwuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxDZWxsLmNsYXNzTGlzdC5hZGQoXCJjYXJyaWVyXCIpO1xuICAgICAgICBhY3R1YWxDZWxsLnRleHRDb250ZW50PSBcImNcIjtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwyLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGwyLmNsYXNzTGlzdC5hZGQoXCJjYXJyaWVyXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDMuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLXNlbGVjdGVkXCIpO1xuICAgICAgICBhY3R1YWxOZXh0Q2VsbDMuY2xhc3NMaXN0LmFkZChcImNhcnJpZXJcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsNC5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItc2VsZWN0ZWRcIik7XG4gICAgICAgIGFjdHVhbE5leHRDZWxsNC5jbGFzc0xpc3QuYWRkKFwiY2FycmllclwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGw1LmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1zZWxlY3RlZFwiKTtcbiAgICAgICAgYWN0dWFsTmV4dENlbGw1LmNsYXNzTGlzdC5hZGQoXCJjYXJyaWVyXCIpO1xuICAgICAgICB1c2VkTnVtYmVycy5wdXNoKGNlbGxDb2RlKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChuZXh0Q2VsbDJDb2RlKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChuZXh0Q2VsbDNDb2RlKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChuZXh0Q2VsbDRDb2RlKTtcbiAgICAgICAgdXNlZE51bWJlcnMucHVzaChuZXh0Q2VsbDVDb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubGV0IHBhdHJvbEJvYXRDb21wdXRlciA9IG5ldyBDb21wdXRlckJvYXQoXCJwYXRyb2xCb2F0XCIsIGNvbXB1dGVyT3JpZW50YXRpb24oKSk7XG5sZXQgc3VibWFyaW5lQ29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXJCb2F0KFwic3VibWFyaW5lXCIsIGNvbXB1dGVyT3JpZW50YXRpb24oKSk7XG5sZXQgZGVzdHJveWVyQ29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXJCb2F0KFwiZGVzdHJveWVyXCIsIGNvbXB1dGVyT3JpZW50YXRpb24oKSk7XG5sZXQgYmF0dGxlc2hpcENvbXB1dGVyID0gbmV3IENvbXB1dGVyQm9hdChcImJhdHRsZXNoaXBcIiwgY29tcHV0ZXJPcmllbnRhdGlvbigpKTtcbmxldCBjYXJyaWVyQ29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXJCb2F0KFwiY2FycmllclwiLCBjb21wdXRlck9yaWVudGF0aW9uKCkpO1xuXG5wYXRyb2xCb2F0Q29tcHV0ZXIuY29tcHV0ZXJDb2RlKCk7XG5zdWJtYXJpbmVDb21wdXRlci5jb21wdXRlckNvZGUoKTtcbmRlc3Ryb3llckNvbXB1dGVyLmNvbXB1dGVyQ29kZSgpO1xuYmF0dGxlc2hpcENvbXB1dGVyLmNvbXB1dGVyQ29kZSgpO1xuY2FycmllckNvbXB1dGVyLmNvbXB1dGVyQ29kZSgpO1xuXG5jb25zdCBjb21wdXRlckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb21wdXRlci1jZWxsXCIpO1xuXG5jb21wdXRlckNlbGxzLmZvckVhY2goKGNvbXB1dGVyQ2VsbCk9PntcbiAgY29tcHV0ZXJDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCk9PntcbiAgICBjb21wdXRlckNlbGwuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLWNsaWNrZWRcIik7XG4gIH0pO1xufSk7XG5cbmNvbXB1dGVyQ2VsbHMuZm9yRWFjaCgoY29tcHV0ZXJDZWxsKSA9PiB7XG4gIGNvbXB1dGVyQ2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG4gICAgY29tcHV0ZXJDZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJjb21wdXRlci1jbGlja2VkXCIpO1xuICB9KTtcbn0pO1xuXG5sZXQgY29tcHV0ZXJUb3RhbFRhbGx5PSAwO1xubGV0IHBhdHJvbEJvYXRUYWxseT0wO1xubGV0IHN1Ym1hcmluZVRhbGx5PTA7XG5sZXQgZGVzdHJveWVyVGFsbHk9MDtcbmxldCBiYXR0bGVzaGlwVGFsbHk9MDtcbmxldCBjYXJyaWVyVGFsbHk9MDtcblxuY29tcHV0ZXJDZWxscy5mb3JFYWNoKChjb21wdXRlckNlbGwpID0+IHtcbiAgY29tcHV0ZXJDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29tcHV0ZXJDZWxsLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1jZWxsLXRhcmdldGVkXCIpO1xuICAgIGlmIChjb21wdXRlckNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjb21wdXRlci1zZWxlY3RlZFwiKSkge1xuICAgICAgY29tcHV0ZXJDZWxsLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICAvLyBjb21wdXRlckNlbGwudGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICAgIHNldFRpbWVvdXQoKCgpPT57Y29tcHV0ZXJDZWxsLnRleHRDb250ZW50ID0gXCJYXCJ9KSwgMTAwKTtcbiAgICAgIGNvbXB1dGVyVG90YWxUYWxseSsrO1xuICAgIH1lbHNle1xuICAgICAgY29tcHV0ZXJDZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzZWRcIik7XG4gICAgfVxuXG4gICAgaWYoY29tcHV0ZXJDZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwicGF0cm9sLWJvYXRcIikgJiYgcGF0cm9sQm9hdFRhbGx5PT09MSl7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e2NvbnNvbGUubG9nKFwiSElUISB5b3Ugc3VuayB0aGVpciBQYXRyb2wgQm9hdFwiKX0pLCAxMDApO1xuICAgIH1lbHNlIGlmIChjb21wdXRlckNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJwYXRyb2wtYm9hdFwiKSl7XG4gICAgICBwYXRyb2xCb2F0VGFsbHkrKztcbiAgICB9O1xuXG4gICAgaWYoY29tcHV0ZXJDZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic3VibWFyaW5lXCIpICYmIHN1Ym1hcmluZVRhbGx5PT09Mil7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e2NvbnNvbGUubG9nKFwiSElUISB5b3Ugc3VuayB0aGVpciBTdWJtYXJpbmVcIil9KSwgMTAwKTtcbiAgICB9ZWxzZSBpZiAoY29tcHV0ZXJDZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic3VibWFyaW5lXCIpKXtcbiAgICAgIHN1Ym1hcmluZVRhbGx5Kys7XG4gICAgfTtcblxuICAgIGlmKGNvbXB1dGVyQ2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImRlc3Ryb3llclwiKSAmJiBkZXN0cm95ZXJUYWxseT09PTIpe1xuICAgICAgc2V0VGltZW91dCgoKCk9Pntjb25zb2xlLmxvZyhcIkhJVCEgeW91IHN1bmsgdGhlaXIgRGVzdHJveWVyXCIpfSksIDEwMCk7XG4gICAgfWVsc2UgaWYgKGNvbXB1dGVyQ2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImRlc3Ryb3llclwiKSl7XG4gICAgICBkZXN0cm95ZXJUYWxseSsrO1xuICAgIH07XG5cbiAgICBpZihjb21wdXRlckNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJiYXR0bGVzaGlwXCIpICYmIGJhdHRsZXNoaXBUYWxseT09PTMpe1xuICAgICAgc2V0VGltZW91dCgoKCk9Pntjb25zb2xlLmxvZyhcIkhJVCEgeW91IHN1bmsgdGhlaXIgQmF0dGxlc2hpcFwiKX0pLCAxMDApO1xuICAgIH1lbHNlIGlmIChjb21wdXRlckNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJiYXR0bGVzaGlwXCIpKXtcbiAgICAgIGJhdHRsZXNoaXBUYWxseSsrO1xuICAgIH07XG5cbiAgICBpZihjb21wdXRlckNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjYXJyaWVyXCIpICYmIGNhcnJpZXJUYWxseT09PTQpe1xuICAgICAgc2V0VGltZW91dCgoKCk9Pntjb25zb2xlLmxvZyhcIkhJVCEgeW91IHN1bmsgdGhlaXIgQ2FycmllclwiKX0pLCAxMDApO1xuICAgIH1lbHNlIGlmIChjb21wdXRlckNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjYXJyaWVyXCIpKXtcbiAgICAgIGNhcnJpZXJUYWxseSsrO1xuICAgIH07XG5cbiAgICBpZihjb21wdXRlclRvdGFsVGFsbHk9PT0xNyl7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e2NvbnNvbGUubG9nKFwiWU9VIFdPTiFcIil9KSwgMTAwKTtcbiAgICB9XG5cbiAgICBsZXQgcGxheWVyVG90YWxUYWxseSA9IDA7XG4gICAgbGV0IHBsYXllclBhdHJvbEJvYXRUYWxseSA9IDA7XG4gICAgbGV0IHBsYXllclN1Ym1hcmluZVRhbGx5ID0gMDtcbiAgICBsZXQgcGxheWVyRGVzdHJveWVyVGFsbHkgPSAwO1xuICAgIGxldCBwbGF5ZXJCYXR0bGVzaGlwVGFsbHkgPSAwO1xuICAgIGxldCBwbGF5ZXJDYXJyaWVyVGFsbHkgPSAwO1xuXG4gICAgY29uc3Qgb3ZlcmxheT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgLy8gc2V0VGltZW91dCgoKCk9PntvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO30pLCAxMDApO1xuXG5cbiAgICAvLyBsZXQgcGxheWVyc1hWYWx1ZSA9IHJhbmRvbU51bUJldHdlZW4oMSwxMCk7XG4gICAgLy8gbGV0IHBsYXllcnNZVmFsdWUgPSByYW5kb21OdW1CZXR3ZWVuKDEsIDEwKTtcblxuICAgIGZ1bmN0aW9uIHJhbmRvbVBsYXllckNvZGUoKSB7XG4gICAgICBsZXQgcGxheWVyc1hWYWx1ZSA9IHJhbmRvbU51bUJldHdlZW4oMSwgMTApO1xuICAgICAgY29uc29sZS5sb2coXCJwbGF5ZXJzIHggdmFsdWUgbnVtPSBcIisgcGxheWVyc1hWYWx1ZSk7XG4gICAgICBsZXQgcGxheWVyc1lWYWx1ZSA9IHJhbmRvbU51bUJldHdlZW4oMSwgMTApO1xuICAgICAgY29uc29sZS5sb2coXCJwbGF5ZXJzIHkgdmFsdWUgbnVtPSBcIisgcGxheWVyc1lWYWx1ZSk7XG4gICAgICBsZXQgcGxheWVyc1hWYWx1ZVN0cmluZz0gcGxheWVyc1hWYWx1ZS50b1N0cmluZygpO1xuICAgICAgY29uc29sZS5sb2coXCJwbGF5ZXJzIHggdmFsdWUgc3RyPSBcIisgcGxheWVyc1hWYWx1ZVN0cmluZyk7XG4gICAgICBsZXQgcGxheWVyc1lWYWx1ZVN0cmluZz0gcGxheWVyc1lWYWx1ZS50b1N0cmluZygpO1xuICAgICAgY29uc29sZS5sb2coXCJwbGF5ZXJzIHkgdmFsdWUgc3RyPSBcIisgcGxheWVyc1lWYWx1ZVN0cmluZyk7XG4gICAgICBsZXQgcGxheWVyQ29kZVZhbHVlID0gcGxheWVyc1hWYWx1ZVN0cmluZyArIHBsYXllcnNZVmFsdWVTdHJpbmc7XG5cbiAgICAgIGNvbnNvbGUubG9nKHVzZWROdW1iZXJzMi5sZW5ndGgpO1xuXG4gICAgICBpZiAodXNlZE51bWJlcnMyLmxlbmd0aD09PTEwMCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm8gbW9yZSBwbGF5ZXIgc3BhY2VzXCIpO1xuICAgICAgICByZXR1cm4gMTE7XG4gICAgICB9XG4gICAgICBpZighdXNlZE51bWJlcnMyLmluY2x1ZGVzKHBsYXllckNvZGVWYWx1ZSkpe1xuICAgICAgICB1c2VkTnVtYmVyczIucHVzaChwbGF5ZXJDb2RlVmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInBsYXllcnMgY29kZT0gXCIgKyBwbGF5ZXJDb2RlVmFsdWUpO1xuICAgICAgICByZXR1cm4gcGxheWVyQ29kZVZhbHVlO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQSBjb29yZGluYXRlIGhhcyBiZWVuIHJlcGVhdGVkXCIpO1xuICAgICAgICByZXR1cm4gcmFuZG9tUGxheWVyQ29kZSgpO1xuICAgICAgfTtcblxuXG4gICAgICAvLyBpZih1c2VkTnVtYmVyczIuaW5jbHVkZXMocGxheWVyQ29kZVZhbHVlKSl7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKFwicmV0cnlcIilcbiAgICAgIC8vICAgcmFuZG9tUGxheWVyQ29kZSgpO1xuICAgICAgLy8gfWVsc2V7XG4gICAgICAvLyAgIHVzZWROdW1iZXJzMi5wdXNoKHBsYXllckNvZGVWYWx1ZSk7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKFwicGxheWVycyBjb2RlPSBcIisgcGxheWVyQ29kZVZhbHVlKTtcbiAgICAgIC8vICAgcmV0dXJuIHBsYXllckNvZGVWYWx1ZTtcbiAgICAgIC8vIH1cbiAgICB9O1xuXG5cbiAgICBpZihyYW5kb21QbGF5ZXJDb2RlPT09bnVsbCB8fCByYW5kb21QbGF5ZXJDb2RlPT09dW5kZWZpbmVkKXtcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2V0dGluZyBjbG9zZXIgdG8geW91ciBidWdcIik7XG4gICAgICBjb25zb2xlLmxvZyhyYW5kb21QbGF5ZXJDb2RlKCkpO1xuICAgIH1cblxuXG4gICAgbGV0IGNvbXB1dGVyQXR0YWNrPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb2RlPSBcIiR7cmFuZG9tUGxheWVyQ29kZSgpfVwiXWApO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyQXR0YWNrKTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBpZiAoY29tcHV0ZXJBdHRhY2suZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgY29tcHV0ZXJBdHRhY2suY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgIC8vIGNvbXB1dGVyQXR0YWNrLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e2NvbXB1dGVyQXR0YWNrLnRleHRDb250ZW50ID0gXCJYXCJ9KSwgMTAwKTtcbiAgICAgIHBsYXllclRvdGFsVGFsbHkrKztcbiAgICB9ZWxzZXtcbiAgICAgIGNvbXB1dGVyQXR0YWNrLmNsYXNzTGlzdC5hZGQoXCJtaXNzZWRcIik7XG4gICAgfVxuXG4gICAgaWYoY29tcHV0ZXJBdHRhY2suZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJwbGF5ZXItcGF0cm9sLWJvYXRcIikgJiYgcGxheWVyUGF0cm9sQm9hdFRhbGx5PT09MSl7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e2NvbnNvbGUubG9nKFwiSElUISB5b3VyIFBhdHJvbCBCb2F0IGhhcyBiZWVuIHNhbmtcIil9KSwgMTAwKTtcbiAgICB9ZWxzZSBpZiAoY29tcHV0ZXJBdHRhY2suZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJwbGF5ZXItcGF0cm9sLWJvYXRcIikpe1xuICAgICAgcGxheWVyUGF0cm9sQm9hdFRhbGx5Kys7XG4gICAgfTtcblxuICAgIGlmKGNvbXB1dGVyQXR0YWNrLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwicGxheWVyLXN1Ym1hcmluZVwiKSAmJiBwbGF5ZXJTdWJtYXJpbmVUYWxseT09PTIpe1xuICAgICAgc2V0VGltZW91dCgoKCk9Pntjb25zb2xlLmxvZyhcIkhJVCEgeW91ciBTdWJtYXJpbmUgaGFzIGJlZW4gc2Fua1wiKX0pLCAxMDApO1xuICAgIH1lbHNlIGlmIChjb21wdXRlckF0dGFjay5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInBsYXllci1zdWJtYXJpbmVcIikpe1xuICAgICAgcGxheWVyU3VibWFyaW5lVGFsbHkrKztcbiAgICB9O1xuXG4gICAgaWYoY29tcHV0ZXJBdHRhY2suZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJwbGF5ZXItZGVzdHJveWVyXCIpICYmIHBsYXllckRlc3Ryb3llclRhbGx5PT09Mil7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e2NvbnNvbGUubG9nKFwiSElUISB5b3VyIERlc3Ryb3llciBoYXMgYmVlbiBzYW5rXCIpfSksIDEwMCk7XG4gICAgfWVsc2UgaWYgKGNvbXB1dGVyQXR0YWNrLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwicGxheWVyLWRlc3Ryb3llclwiKSl7XG4gICAgICBwbGF5ZXJEZXN0cm95ZXJUYWxseSsrO1xuICAgIH07XG5cbiAgICBpZihjb21wdXRlckF0dGFjay5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInBsYXllci1iYXR0bGVzaGlwXCIpICYmIHBsYXllckJhdHRsZXNoaXBUYWxseT09PTMpe1xuICAgICAgc2V0VGltZW91dCgoKCk9Pntjb25zb2xlLmxvZyhcIkhJVCEgeW91ciBCYXR0bGVzaGlwIGhhcyBiZWVuIHNhbmtcIil9KSwgMTAwKTtcbiAgICB9ZWxzZSBpZiAoY29tcHV0ZXJBdHRhY2suZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJwbGF5ZXItYmF0dGxlc2hpcFwiKSkge1xuICAgICAgcGxheWVyQmF0dGxlc2hpcFRhbGx5Kys7XG4gICAgfTtcblxuICAgIGlmKGNvbXB1dGVyQXR0YWNrLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwicGxheWVyLWNhcnJpZXJcIikgJiYgcGxheWVyQ2FycmllclRhbGx5PT09NCl7XG4gICAgICBzZXRUaW1lb3V0KCgoKT0+e2NvbnNvbGUubG9nKFwiSElUISB5b3VyIENhcnJpZXIgaGFzIGJlZW4gc2Fua1wiKX0pLCAxMDApO1xuICAgIH1lbHNlIGlmIChjb21wdXRlckF0dGFjay5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInBsYXllci1jYXJyaWVyXCIpKSB7XG4gICAgICBwbGF5ZXJDYXJyaWVyVGFsbHkrKztcbiAgICB9O1xuXG4gICAgaWYocGxheWVyVG90YWxUYWxseT09PTE3KXtcbiAgICAgIHNldFRpbWVvdXQoKCgpPT57Y29uc29sZS5sb2coXCJZb3UgTG9zdCFcIil9KSwgMTAwKTtcbiAgICB9XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBjb21wdXRlckF0dGFjay5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICBzZXRUaW1lb3V0KCgoKT0+e2NvbXB1dGVyQXR0YWNrLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItY2VsbC10YXJnZXRlZFwiKTt9KSwgMTAwKTtcblxuICAgIHNldFRpbWVvdXQoKCgpPT57b3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTt9KSwgMTAwKTtcblxuXG4gIH0pO1xufSk7XG5cbmNvbnNvbGUubG9nKHBhdHJvbEJvYXRDb21wdXRlcik7Il0sIm5hbWVzIjpbImdyYWJOYW1lIiwiQ3JlYXRlQm9hdCIsImhpdCIsImlzU3VuayIsIkdhbWVib2FyZCIsImV4YW1wbGVBZGQiLCJhIiwiYiIsIm5hbWUiLCJjb25zdHJ1Y3RvciIsImxlbmd0aCIsImJvYXROYW1lIiwibnVtVGltZXNIaXQiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJoYXNTdW5rIiwiY29vcmRpbmF0ZXMiLCJ4X251bWJlciIsInlfbnVtYmVyIiwic3RhdHVzIiwiYm9hdE5hbWVPYmoiLCJ3YXNQaWNrZWQiLCJwbGFjZSIsInNoaXBMZW5ndGgiLCJ2ZXJ0aWNhbE9ySG9yaXpvbnRhbCIsInhOdW1iZXIiLCJ5TnVtYmVyIiwiaSIsInJlY2VpdmVBdHRhY2siLCJuYW1lUGxhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJuYW1lU3VibWl0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbXBvc2VkUGF0aCIsInZhbHVlIiwidGV4dENvbnRlbnQiLCJncmlkIiwieFZhbHVlIiwiZGF0YXNldCIsInlWYWx1ZSIsInBhdHJvbEJvYXQiLCJzdWJtYXJpbmUiLCJkZXN0cm95ZXIiLCJiYXR0bGVzaGlwIiwiY2FycmllciIsImhvcml6YW50YWwiLCJ2ZXJ0aWNhbCIsImJvYXRTZWxlY3Rpb25CdXR0b25GdW5jdGlvbiIsImJ0bkNsaWNrZWQiLCJidG5BcnIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1haW5pbmdCdG5zIiwiZmlsdGVyIiwiYnRuIiwiZm9yRWFjaCIsInJlbW92ZSIsImJvYXRPcmllbnRhdGlvbkJ1dHRvbkZ1bmN0aW9uIiwiY29uc29sZSIsImxvZyIsInBhdGgiLCJwYXRyb2xCb2F0U3BhY2VzIiwic3VibWFyaW5lU3BhY2VzIiwiZGVzdHJveWVyU3BhY2VzIiwiYmF0dGxlc2hpcFNwYWNlcyIsImNhcnJpZXJTcGFjZXMiLCJib2F0T3JpZW50YXRpb24iLCJjbGlja0J0bnNNb2RhbCIsInRhYmxlQ2xhc3MiLCJnZXRBdHRyaWJ1dGUiLCJpbmNsdWRlcyIsImNlbGxzIiwicXVlcnlTZWxlY3RvckFsbCIsImNlbGwiLCJ4TnVtIiwiTnVtYmVyIiwieU51bSIsIm5leHRDZWxsMl9ob3JpemFudGFsIiwibmV4dENlbGwzX2hvcml6YW50YWwiLCJuZXh0Q2VsbDRfaG9yaXphbnRhbCIsIm5leHRDZWxsNV9ob3JpemFudGFsIiwibmV4dENlbGwyX3ZlcnRpY2FsIiwibmV4dENlbGwzX3ZlcnRpY2FsIiwibmV4dENlbGw0X3ZlcnRpY2FsIiwibmV4dENlbGw1X3ZlcnRpY2FsIiwiZGlzYWJsZWQiLCJyYW5kb21OdW1CZXR3ZWVuIiwibWluIiwibWF4IiwibnVtIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY29tcHV0ZXJPcmllbnRhdGlvbiIsInVzZWROdW1iZXJzIiwidXNlZE51bWJlcnMyIiwiQ29tcHV0ZXJCb2F0Iiwib3JpZW50YXRpb24iLCJjb21wdXRlckNvZGUiLCJ4IiwieSIsIm5leHRDZWxsMiIsInhUb1N0cmluZyIsInRvU3RyaW5nIiwieVRvU3RyaW5nIiwibmV4dENlbGwyU3RyaW5nIiwiY2VsbENvZGUiLCJuZXh0Q2VsbDJDb2RlIiwiYWN0dWFsQ2VsbCIsImFjdHVhbE5leHRDZWxsMiIsInB1c2giLCJuZXh0Q2VsbDMiLCJuZXh0Q2VsbDNTdHJpbmciLCJuZXh0Q2VsbDNDb2RlIiwiYWN0dWFsTmV4dENlbGwzIiwibmV4dENlbGw0IiwibmV4dENlbGw0U3RyaW5nIiwibmV4dENlbGw0Q29kZSIsImFjdHVhbE5leHRDZWxsNCIsIm5leHRDZWxsNSIsIm5leHRDZWxsNVN0cmluZyIsIm5leHRDZWxsNUNvZGUiLCJhY3R1YWxOZXh0Q2VsbDUiLCJwYXRyb2xCb2F0Q29tcHV0ZXIiLCJzdWJtYXJpbmVDb21wdXRlciIsImRlc3Ryb3llckNvbXB1dGVyIiwiYmF0dGxlc2hpcENvbXB1dGVyIiwiY2FycmllckNvbXB1dGVyIiwiY29tcHV0ZXJDZWxscyIsImNvbXB1dGVyQ2VsbCIsImNvbXB1dGVyVG90YWxUYWxseSIsInBhdHJvbEJvYXRUYWxseSIsInN1Ym1hcmluZVRhbGx5IiwiZGVzdHJveWVyVGFsbHkiLCJiYXR0bGVzaGlwVGFsbHkiLCJjYXJyaWVyVGFsbHkiLCJzZXRUaW1lb3V0IiwicGxheWVyVG90YWxUYWxseSIsInBsYXllclBhdHJvbEJvYXRUYWxseSIsInBsYXllclN1Ym1hcmluZVRhbGx5IiwicGxheWVyRGVzdHJveWVyVGFsbHkiLCJwbGF5ZXJCYXR0bGVzaGlwVGFsbHkiLCJwbGF5ZXJDYXJyaWVyVGFsbHkiLCJvdmVybGF5IiwicmFuZG9tUGxheWVyQ29kZSIsInBsYXllcnNYVmFsdWUiLCJwbGF5ZXJzWVZhbHVlIiwicGxheWVyc1hWYWx1ZVN0cmluZyIsInBsYXllcnNZVmFsdWVTdHJpbmciLCJwbGF5ZXJDb2RlVmFsdWUiLCJjb21wdXRlckF0dGFjayJdLCJzb3VyY2VSb290IjoiIn0=