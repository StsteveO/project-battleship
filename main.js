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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nbody,\nhtml {\n  height: 100%;\n  margin: 0;\n  /* background-color: skyblue; */\n}\n:root {\n  /* --custom name: value; */\n  /* --light-green-bg: #476529; */\n  /* example, color: var(--navy-clr) */\n  --header-clr: rgb(90, 141, 161);\n  --nav-clr: #4C5958;\n  --main-clr: #BFBFBF;\n  --high-pri-clr: #DB2E1A;\n  --med-pri-clr: #D6AB0F;\n  --low-pri-clr: #10A11C;\n  --default-list-clr: #8AA6A3;\n}\n.header{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n    margin: 0rem;\n    border: .25rem solid black;\n    background-color: navy;\n    color: silver;\n    margin-bottom: 1rem;\n}\nfieldset{\n  display: flex;\n  flex-direction: column;\n}\n.form.player-name{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.submit-name-btn{\n  margin-top: 1rem;\n  padding: .5rem;\n}\n.name-plate, \n.boat-selection-title,\n.boat-orientation-title{\n  margin-bottom: 1rem;\n  font-size: 3rem;\n  font-weight: bold;\n}\ntable, th, td {\n  border: 1px solid black;\n}\n.grid,\n.boat-selection,\n.boat-orientation{\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.boat-selection-btns,\n.boat-orientation-btns{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: .25rem;\n}\n/* button:hover{\nbackground-color: darkgray;\n} */\nth, td{\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n  width: 2rem;\n}\n/* td:hover{\n  background-color: gray;\n} */\n\n.clicked{\n  background-color: orange;\n}\n\n.outside-grid{\n  cursor: not-allowed;\n}\n\n.outside-grid-error{\n  background-color: red;\n  animation-name: off-grid-error;\n  animation-duration: 400ms;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n}\n\n@keyframes off-grid-error{\n  from {background-color: red;}\n  to {background-color: white;}\n}\n\n.table-class{\n  position: relative;\n}\n\n.grid{\n  position: relative;\n}\n\n.click-btns-modal{\n  width: 40%;\n  height: auto;\n  /* margin: auto; */\n  background-color: rgb(194, 194, 194);\n  background-color: black;\n  color: whitesmoke;\n  border: 1px solid gray;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0%;\n  padding: 1rem;\n  transition-duration: 200ms;\n  transition-property: opacity;\n}\n\n.show{\n  opacity: 100%;\n}\n\n.phased-out{\n  opacity: 30%;\n}\n\n/* \n.no-btn-clicked-error{\n  background-color: orange;\n  animation-name: no-btn-clicked-error;\n  animation-duration: .4s;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n}\n\n@keyframes no-btn-clicked-error{\n  from {background-color: orange;}\n  to {background-color: white;}\n} */\n\n.selected{\n  background-color: black;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;AACxB;AACA;;EAEE,YAAY;EACZ,SAAS;EACT,+BAA+B;AACjC;AACA;EACE,0BAA0B;EAC1B,+BAA+B;EAC/B,oCAAoC;EACpC,+BAA+B;EAC/B,kBAAkB;EAClB,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;EACtB,sBAAsB;EACtB,2BAA2B;AAC7B;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,oBAAoB;IACpB,YAAY;IACZ,0BAA0B;IAC1B,sBAAsB;IACtB,aAAa;IACb,mBAAmB;AACvB;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,cAAc;AAChB;AACA;;;EAGE,mBAAmB;EACnB,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,uBAAuB;AACzB;AACA;;;EAGE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;;EAEE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,WAAW;AACb;AACA;;GAEG;AACH;EACE,mBAAmB;EACnB,sBAAsB;EACtB,WAAW;AACb;AACA;;GAEG;;AAEH;EACE,wBAAwB;AAC1B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,8BAA8B;EAC9B,yBAAyB;EACzB,mCAAmC;EACnC,8BAA8B;AAChC;;AAEA;EACE,MAAM,qBAAqB,CAAC;EAC5B,IAAI,uBAAuB,CAAC;AAC9B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,oCAAoC;EACpC,uBAAuB;EACvB,iBAAiB;EACjB,sBAAsB;EACtB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,WAAW;EACX,aAAa;EACb,0BAA0B;EAC1B,4BAA4B;AAC9B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;;;;;;;;;;;;GAYG;;AAEH;EACE,uBAAuB;AACzB","sourcesContent":["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nbody,\nhtml {\n  height: 100%;\n  margin: 0;\n  /* background-color: skyblue; */\n}\n:root {\n  /* --custom name: value; */\n  /* --light-green-bg: #476529; */\n  /* example, color: var(--navy-clr) */\n  --header-clr: rgb(90, 141, 161);\n  --nav-clr: #4C5958;\n  --main-clr: #BFBFBF;\n  --high-pri-clr: #DB2E1A;\n  --med-pri-clr: #D6AB0F;\n  --low-pri-clr: #10A11C;\n  --default-list-clr: #8AA6A3;\n}\n.header{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n    margin: 0rem;\n    border: .25rem solid black;\n    background-color: navy;\n    color: silver;\n    margin-bottom: 1rem;\n}\nfieldset{\n  display: flex;\n  flex-direction: column;\n}\n.form.player-name{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.submit-name-btn{\n  margin-top: 1rem;\n  padding: .5rem;\n}\n.name-plate, \n.boat-selection-title,\n.boat-orientation-title{\n  margin-bottom: 1rem;\n  font-size: 3rem;\n  font-weight: bold;\n}\ntable, th, td {\n  border: 1px solid black;\n}\n.grid,\n.boat-selection,\n.boat-orientation{\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.boat-selection-btns,\n.boat-orientation-btns{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: .25rem;\n}\n/* button:hover{\nbackground-color: darkgray;\n} */\nth, td{\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n  width: 2rem;\n}\n/* td:hover{\n  background-color: gray;\n} */\n\n.clicked{\n  background-color: orange;\n}\n\n.outside-grid{\n  cursor: not-allowed;\n}\n\n.outside-grid-error{\n  background-color: red;\n  animation-name: off-grid-error;\n  animation-duration: 400ms;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n}\n\n@keyframes off-grid-error{\n  from {background-color: red;}\n  to {background-color: white;}\n}\n\n.table-class{\n  position: relative;\n}\n\n.grid{\n  position: relative;\n}\n\n.click-btns-modal{\n  width: 40%;\n  height: auto;\n  /* margin: auto; */\n  background-color: rgb(194, 194, 194);\n  background-color: black;\n  color: whitesmoke;\n  border: 1px solid gray;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0%;\n  padding: 1rem;\n  transition-duration: 200ms;\n  transition-property: opacity;\n}\n\n.show{\n  opacity: 100%;\n}\n\n.phased-out{\n  opacity: 30%;\n}\n\n/* \n.no-btn-clicked-error{\n  background-color: orange;\n  animation-name: no-btn-clicked-error;\n  animation-duration: .4s;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n}\n\n@keyframes no-btn-clicked-error{\n  from {background-color: orange;}\n  to {background-color: white;}\n} */\n\n.selected{\n  background-color: black;\n}"],"sourceRoot":""}]);
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
const cells = document.querySelectorAll("td");
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
  }
}));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFFL0YsU0FBU0ssVUFBVUEsQ0FBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7RUFDcEIsT0FBT0QsQ0FBQyxHQUFDQyxDQUFDO0FBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQSxNQUFNUCxRQUFRLEdBQUlRLElBQUksSUFBS0EsSUFBSTtBQUUvQixNQUFNUCxVQUFVO0VBQ1pRLFdBQVdBLENBQUNDLE1BQU0sRUFBRUMsUUFBUSxFQUErQjtJQUFBLElBQTdCQyxXQUFXLEdBQUFDLFNBQUEsQ0FBQUgsTUFBQSxRQUFBRyxTQUFBLFFBQUFDLFNBQUEsR0FBQUQsU0FBQSxNQUFDLENBQUM7SUFBQSxJQUFFRSxPQUFPLEdBQUFGLFNBQUEsQ0FBQUgsTUFBQSxRQUFBRyxTQUFBLFFBQUFDLFNBQUEsR0FBQUQsU0FBQSxNQUFDLEtBQUs7SUFDdEQsSUFBSSxDQUFDSCxNQUFNLEdBQUVBLE1BQU07SUFDbkIsSUFBSSxDQUFDRSxXQUFXLEdBQUVBLFdBQVc7SUFDN0IsSUFBSSxDQUFDRyxPQUFPLEdBQUVBLE9BQU87SUFDckIsSUFBSSxDQUFDSixRQUFRLEdBQUNBLFFBQVE7RUFDMUI7QUFDSjtBQUFDO0FBRUQsTUFBTVQsR0FBRyxHQUFFUyxRQUFRLElBQUtBLFFBQVEsQ0FBQ0MsV0FBVyxFQUFFO0FBRTlDLE1BQU1ULE1BQU0sR0FBR1EsUUFBUSxJQUFLQSxRQUFRLENBQUNELE1BQU0sS0FBR0MsUUFBUSxDQUFDQyxXQUFXLEdBQUksSUFBSSxHQUFHLEtBQUs7QUFFbEYsTUFBTVIsU0FBUztFQUNYSyxXQUFXQSxDQUFBLEVBQUU7SUFDVCxJQUFJLENBQUNPLFdBQVcsR0FBRztJQUNqQjtJQUNBLENBQ0U7TUFBRUMsUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxDQUN0RztJQUNEO0lBQ0EsQ0FDRTtNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLENBQ3RHO0lBQ0Q7SUFDQSxDQUNFO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsQ0FDdEc7SUFDRDtJQUNBLENBQ0U7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxDQUN0RztJQUNEO0lBQ0EsQ0FDRTtNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLENBQ3RHO0lBQ0Q7SUFDQSxDQUNFO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsQ0FDdEc7SUFDRDtJQUNBLENBQ0U7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxDQUN0RztJQUNEO0lBQ0EsQ0FDRTtNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLENBQ3RHO0lBQ0Q7SUFDQSxDQUNFO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsQ0FDdEc7SUFDRDtJQUNBLENBQ0U7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVDLE1BQU0sRUFBRSxPQUFPO01BQUVSLFFBQVEsRUFBRSxNQUFNO01BQUVTLFdBQVcsRUFBRSxNQUFNO01BQUVDLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDckc7TUFBRUosUUFBUSxFQUFDLENBQUM7TUFBRUMsUUFBUSxFQUFFLENBQUM7TUFBRUMsTUFBTSxFQUFFLE9BQU87TUFBRVIsUUFBUSxFQUFFLE1BQU07TUFBRVMsV0FBVyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyRztNQUFFSixRQUFRLEVBQUMsQ0FBQztNQUFFQyxRQUFRLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsT0FBTztNQUFFUixRQUFRLEVBQUUsTUFBTTtNQUFFUyxXQUFXLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3JHO01BQUVKLFFBQVEsRUFBQyxDQUFDO01BQUVDLFFBQVEsRUFBRSxDQUFDO01BQUVD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QyxVQUFVLENBQUMsSUFDOUQsQ0FBQ1ksa0JBQWtCLENBQUNiLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUM5RCxDQUFDYSxrQkFBa0IsQ0FBQ2QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQzlELENBQUNjLGtCQUFrQixDQUFDZixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFDOUQ7TUFDQTFCLE9BQU8sQ0FBQ00sU0FBUyxDQUFDTSxNQUFNLENBQUMsU0FBUyxDQUFDO01BQ25DWixPQUFPLENBQUN5QyxRQUFRLEdBQUcsSUFBSTtNQUN2QlosSUFBSSxDQUFDdkIsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO01BQzlCOEIsa0JBQWtCLENBQUMvQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7TUFDNUMrQixrQkFBa0IsQ0FBQ2hDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztNQUM1Q2dDLGtCQUFrQixDQUFDakMsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO01BQzVDaUMsa0JBQWtCLENBQUNsQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFDOUM7RUFDRjtBQUNGLENBQUMsQ0FDSCxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvRE9NLWludGVyYWN0aW9ucy9ET00taW50ZXJhY3Rpb25zLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMgXyZfdGVzdHMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3JhYk5hbWUsIENyZWF0ZUJvYXQsIGhpdCwgaXNTdW5rLCBHYW1lYm9hcmQgfSBmcm9tIFwiLi4vZnVuY3Rpb25zIF8mX3Rlc3RzL2Z1bmN0aW9uc1wiO1xuXG5mdW5jdGlvbiBleGFtcGxlQWRkKGEsYil7XG4gICAgcmV0dXJuIGErYjtcbn1cblxuXG5leHBvcnR7IGV4YW1wbGVBZGQgfTsiLCJjb25zdCBncmFiTmFtZSA9IChuYW1lKSA9PiBuYW1lO1xuXG5jbGFzcyBDcmVhdGVCb2F0e1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCwgYm9hdE5hbWUsIG51bVRpbWVzSGl0PTAsIGhhc1N1bms9ZmFsc2Upe1xuICAgICAgICB0aGlzLmxlbmd0aD0gbGVuZ3RoO1xuICAgICAgICB0aGlzLm51bVRpbWVzSGl0PSBudW1UaW1lc0hpdDtcbiAgICAgICAgdGhpcy5oYXNTdW5rPSBoYXNTdW5rO1xuICAgICAgICB0aGlzLmJvYXROYW1lPWJvYXROYW1lO1xuICAgIH07XG59O1xuXG5jb25zdCBoaXQ9KGJvYXROYW1lKSA9PiBib2F0TmFtZS5udW1UaW1lc0hpdCsrO1xuXG5jb25zdCBpc1N1bms9IChib2F0TmFtZSk9PiAoYm9hdE5hbWUubGVuZ3RoPT09Ym9hdE5hbWUubnVtVGltZXNIaXQpID8gdHJ1ZSA6IGZhbHNlO1xuXG5jbGFzcyBHYW1lYm9hcmR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5jb29yZGluYXRlcyA9IFtcbiAgICAgICAgICAvLzBcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjAsIHlfbnVtYmVyOiAwLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MCwgeV9udW1iZXI6IDEsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjowLCB5X251bWJlcjogMiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjAsIHlfbnVtYmVyOiAzLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MCwgeV9udW1iZXI6IDQsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjowLCB5X251bWJlcjogNSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjAsIHlfbnVtYmVyOiA2LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MCwgeV9udW1iZXI6IDcsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjowLCB5X251bWJlcjogOCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjAsIHlfbnVtYmVyOiA5LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIC8vMVxuICAgICAgICAgIFtcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MSwgeV9udW1iZXI6IDAsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoxLCB5X251bWJlcjogMSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjEsIHlfbnVtYmVyOiAyLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MSwgeV9udW1iZXI6IDMsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoxLCB5X251bWJlcjogNCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjEsIHlfbnVtYmVyOiA1LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MSwgeV9udW1iZXI6IDYsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoxLCB5X251bWJlcjogNywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjEsIHlfbnVtYmVyOiA4LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MSwgeV9udW1iZXI6IDksIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgLy8yXG4gICAgICAgICAgW1xuICAgICAgICAgICAgeyB4X251bWJlcjoyLCB5X251bWJlcjogMCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjIsIHlfbnVtYmVyOiAxLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MiwgeV9udW1iZXI6IDIsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoyLCB5X251bWJlcjogMywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjIsIHlfbnVtYmVyOiA0LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MiwgeV9udW1iZXI6IDUsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoyLCB5X251bWJlcjogNiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjIsIHlfbnVtYmVyOiA3LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MiwgeV9udW1iZXI6IDgsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjoyLCB5X251bWJlcjogOSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICAvLzNcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjMsIHlfbnVtYmVyOiAwLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MywgeV9udW1iZXI6IDEsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjozLCB5X251bWJlcjogMiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjMsIHlfbnVtYmVyOiAzLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MywgeV9udW1iZXI6IDQsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjozLCB5X251bWJlcjogNSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjMsIHlfbnVtYmVyOiA2LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6MywgeV9udW1iZXI6IDcsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjozLCB5X251bWJlcjogOCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjMsIHlfbnVtYmVyOiA5LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIC8vNFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NCwgeV9udW1iZXI6IDAsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo0LCB5X251bWJlcjogMSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjQsIHlfbnVtYmVyOiAyLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NCwgeV9udW1iZXI6IDMsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo0LCB5X251bWJlcjogNCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjQsIHlfbnVtYmVyOiA1LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NCwgeV9udW1iZXI6IDYsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo0LCB5X251bWJlcjogNywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjQsIHlfbnVtYmVyOiA4LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NCwgeV9udW1iZXI6IDksIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgLy81XG4gICAgICAgICAgW1xuICAgICAgICAgICAgeyB4X251bWJlcjo1LCB5X251bWJlcjogMCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjUsIHlfbnVtYmVyOiAxLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NSwgeV9udW1iZXI6IDIsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo1LCB5X251bWJlcjogMywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjUsIHlfbnVtYmVyOiA0LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NSwgeV9udW1iZXI6IDUsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo1LCB5X251bWJlcjogNiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjUsIHlfbnVtYmVyOiA3LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NSwgeV9udW1iZXI6IDgsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo1LCB5X251bWJlcjogOSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICAvLzZcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjYsIHlfbnVtYmVyOiAwLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NiwgeV9udW1iZXI6IDEsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo2LCB5X251bWJlcjogMiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjYsIHlfbnVtYmVyOiAzLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NiwgeV9udW1iZXI6IDQsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo2LCB5X251bWJlcjogNSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjYsIHlfbnVtYmVyOiA2LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NiwgeV9udW1iZXI6IDcsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo2LCB5X251bWJlcjogOCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjYsIHlfbnVtYmVyOiA5LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIC8vN1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NywgeV9udW1iZXI6IDAsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo3LCB5X251bWJlcjogMSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjcsIHlfbnVtYmVyOiAyLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NywgeV9udW1iZXI6IDMsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo3LCB5X251bWJlcjogNCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjcsIHlfbnVtYmVyOiA1LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NywgeV9udW1iZXI6IDYsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo3LCB5X251bWJlcjogNywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjcsIHlfbnVtYmVyOiA4LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6NywgeV9udW1iZXI6IDksIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgLy84XG4gICAgICAgICAgW1xuICAgICAgICAgICAgeyB4X251bWJlcjo4LCB5X251bWJlcjogMCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjgsIHlfbnVtYmVyOiAxLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OCwgeV9udW1iZXI6IDIsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo4LCB5X251bWJlcjogMywgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjgsIHlfbnVtYmVyOiA0LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OCwgeV9udW1iZXI6IDUsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo4LCB5X251bWJlcjogNiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjgsIHlfbnVtYmVyOiA3LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OCwgeV9udW1iZXI6IDgsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo4LCB5X251bWJlcjogOSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICAvLzlcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjksIHlfbnVtYmVyOiAwLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OSwgeV9udW1iZXI6IDEsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo5LCB5X251bWJlcjogMiwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjksIHlfbnVtYmVyOiAzLCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OSwgeV9udW1iZXI6IDQsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo5LCB5X251bWJlcjogNSwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjksIHlfbnVtYmVyOiA2LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgeF9udW1iZXI6OSwgeV9udW1iZXI6IDcsIHN0YXR1czogXCJlbXB0eVwiLCBib2F0TmFtZTogXCJub25lXCIsIGJvYXROYW1lT2JqOiBcIm5vbmVcIiwgd2FzUGlja2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyB4X251bWJlcjo5LCB5X251bWJlcjogOCwgc3RhdHVzOiBcImVtcHR5XCIsIGJvYXROYW1lOiBcIm5vbmVcIiwgYm9hdE5hbWVPYmo6IFwibm9uZVwiLCB3YXNQaWNrZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHhfbnVtYmVyOjksIHlfbnVtYmVyOiA5LCBzdGF0dXM6IFwiZW1wdHlcIiwgYm9hdE5hbWU6IFwibm9uZVwiLCBib2F0TmFtZU9iajogXCJub25lXCIsIHdhc1BpY2tlZDogZmFsc2UgfSxcbiAgICAgICAgICBdXG4gICAgICAgIF07XG4gICAgfTtcblxuICAgIHBsYWNlKHNoaXBMZW5ndGgsIHZlcnRpY2FsT3JIb3Jpem9udGFsLCB4TnVtYmVyLCB5TnVtYmVyLCBib2F0TmFtZU9iaiwgYm9hdE5hbWUpe1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYoeE51bWJlcitpPDAgfHwgeE51bWJlcitpPjkgfHwgeU51bWJlci1pPDAgfHwgeU51bWJlci1pPjkpe1xuICAgICAgICAgIHJldHVybiBcIkludmFsaWQgZW50cnksIHNoaXAgaXMgbm90IHdpdGhpbiB0aGUgbGltaXRzIG9mIHRoZSBib2FyZC5UcnkgYWdhaW4uXCI7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh2ZXJ0aWNhbE9ySG9yaXpvbnRhbCA9PT0gXCJob3Jpem9udGFsXCIpe1xuICAgICAgICAgIHRoaXMuY29vcmRpbmF0ZXNbeE51bWJlciArIGldW3lOdW1iZXJdLnN0YXR1cyA9IFwiZmlsbGVkXCI7XG4gICAgICAgICAgdGhpcy5jb29yZGluYXRlc1t4TnVtYmVyICsgaV1beU51bWJlcl0uYm9hdE5hbWUgPSBib2F0TmFtZTtcbiAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW3hOdW1iZXIgKyBpXVt5TnVtYmVyXS5ib2F0TmFtZU9iaiA9IGJvYXROYW1lT2JqO1xuICAgICAgICB9O1xuICAgICAgICBpZiAodmVydGljYWxPckhvcml6b250YWwgPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgIHRoaXMuY29vcmRpbmF0ZXNbeE51bWJlcl1beU51bWJlciAtIGldLnN0YXR1cyA9IFwiZmlsbGVkXCI7XG4gICAgICAgICAgdGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyIC0gaV0uYm9hdE5hbWUgPSBib2F0TmFtZTtcbiAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW3hOdW1iZXJdW3lOdW1iZXIgLSBpXS5ib2F0TmFtZU9iaiA9IGJvYXROYW1lT2JqO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgcmVjZWl2ZUF0dGFjayh4TnVtYmVyLCB5TnVtYmVyKXtcbiAgICAgIGlmICh4TnVtYmVyIDwgMCB8fCB4TnVtYmVyID4gOSB8fCB5TnVtYmVyIDwgMCB8fCB5TnVtYmVyID4gOSkge1xuICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGVudHJ5LCBzaGlwIGlzIG5vdCB3aXRoaW4gdGhlIGxpbWl0cyBvZiB0aGUgYm9hcmQuVHJ5IGFnYWluLlwiO1xuICAgICAgfVxuICAgICAgaWYodGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyXS53YXNQaWNrZWQ9PT10cnVlKXtcbiAgICAgICAgcmV0dXJuIGBJbnZhbGlkIGVudHJ5LCBjb29yZGluYXRlcyAke3hOdW1iZXJ9LCR7eU51bWJlcn0gd2FzIGFscmVhZHkgYXR0YWNrZWQuVHJ5IGFnYWluLmA7XG4gICAgICB9O1xuICAgICAgaWYgKHRoaXMuY29vcmRpbmF0ZXNbeE51bWJlcl1beU51bWJlcl0uc3RhdHVzID09PSBcImVtcHR5XCIpIHtcbiAgICAgICAgLy9QTEFDRUhPTERFUjogd2hhdCB0byBkby9kaXNwbGF5IHdpdGggbWlzc2VkIGF0dGFja3NcbiAgICAgICAgdGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyXS53YXNQaWNrZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gYE1pc3NlZCEgTm8gaGl0IG9uIGNvb3JkaW5hdGVzICR7eE51bWJlcn0sJHt5TnVtYmVyfWA7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyXS5zdGF0dXMgPT09IFwiZmlsbGVkXCIpIHtcbiAgICAgICAgdGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyXS53YXNQaWNrZWQgPSB0cnVlO1xuICAgICAgICBoaXQodGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyXS5ib2F0TmFtZU9iaik7XG4gICAgICAgIGlmIChpc1N1bmsodGhpcy5jb29yZGluYXRlc1t4TnVtYmVyXVt5TnVtYmVyXS5ib2F0TmFtZU9iaik9PT10cnVlKSB7XG4gICAgICAgICAgcmV0dXJuIGBIaXQhIGArKHRoaXMuY29vcmRpbmF0ZXNbeE51bWJlcl1beU51bWJlcl0uYm9hdE5hbWUpK2AgaGFzIGJlZW4gaGl0IG9uIGNvb3JkaW5hdGVzICR7eE51bWJlcn0sJHt5TnVtYmVyfSwgYW5kIGhhcyBiZWVuIHN1bmshYDtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGBIaXQhIGArKHRoaXMuY29vcmRpbmF0ZXNbeE51bWJlcl1beU51bWJlcl0uYm9hdE5hbWUpK2AgaGFzIGJlZW4gaGl0IG9uIGNvb3JkaW5hdGVzICR7eE51bWJlcn0sJHt5TnVtYmVyfWA7XG4gICAgICB9XG4gICAgfTtcbn07XG5cblxuZXhwb3J0IHsgZ3JhYk5hbWUsIENyZWF0ZUJvYXQsIGhpdCwgaXNTdW5rLCBHYW1lYm9hcmQgfTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHksXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlOyAqL1xcbn1cXG46cm9vdCB7XFxuICAvKiAtLWN1c3RvbSBuYW1lOiB2YWx1ZTsgKi9cXG4gIC8qIC0tbGlnaHQtZ3JlZW4tYmc6ICM0NzY1Mjk7ICovXFxuICAvKiBleGFtcGxlLCBjb2xvcjogdmFyKC0tbmF2eS1jbHIpICovXFxuICAtLWhlYWRlci1jbHI6IHJnYig5MCwgMTQxLCAxNjEpO1xcbiAgLS1uYXYtY2xyOiAjNEM1OTU4O1xcbiAgLS1tYWluLWNscjogI0JGQkZCRjtcXG4gIC0taGlnaC1wcmktY2xyOiAjREIyRTFBO1xcbiAgLS1tZWQtcHJpLWNscjogI0Q2QUIwRjtcXG4gIC0tbG93LXByaS1jbHI6ICMxMEExMUM7XFxuICAtLWRlZmF1bHQtbGlzdC1jbHI6ICM4QUE2QTM7XFxufVxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICAgIG1hcmdpbjogMHJlbTtcXG4gICAgYm9yZGVyOiAuMjVyZW0gc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG5hdnk7XFxuICAgIGNvbG9yOiBzaWx2ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbmZpZWxkc2V0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5mb3JtLnBsYXllci1uYW1le1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zdWJtaXQtbmFtZS1idG57XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgcGFkZGluZzogLjVyZW07XFxufVxcbi5uYW1lLXBsYXRlLCBcXG4uYm9hdC1zZWxlY3Rpb24tdGl0bGUsXFxuLmJvYXQtb3JpZW50YXRpb24tdGl0bGV7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbnRhYmxlLCB0aCwgdGQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbi5ncmlkLFxcbi5ib2F0LXNlbGVjdGlvbixcXG4uYm9hdC1vcmllbnRhdGlvbntcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmJvYXQtc2VsZWN0aW9uLWJ0bnMsXFxuLmJvYXQtb3JpZW50YXRpb24tYnRuc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IC4yNXJlbTtcXG59XFxuLyogYnV0dG9uOmhvdmVye1xcbmJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcbn0gKi9cXG50aCwgdGR7XFxuICBwYWRkaW5nLXRvcDogLjI1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IC4yNXJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbn1cXG4vKiB0ZDpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufSAqL1xcblxcbi5jbGlja2Vke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4ub3V0c2lkZS1ncmlke1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLm91dHNpZGUtZ3JpZC1lcnJvcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBvZmYtZ3JpZC1lcnJvcjtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNDAwbXM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBvZmYtZ3JpZC1lcnJvcntcXG4gIGZyb20ge2JhY2tncm91bmQtY29sb3I6IHJlZDt9XFxuICB0byB7YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7fVxcbn1cXG5cXG4udGFibGUtY2xhc3N7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ncmlke1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY2xpY2stYnRucy1tb2RhbHtcXG4gIHdpZHRoOiA0MCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICAvKiBtYXJnaW46IGF1dG87ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxOTQsIDE5NCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBvcGFjaXR5OiAwJTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XFxufVxcblxcbi5zaG93e1xcbiAgb3BhY2l0eTogMTAwJTtcXG59XFxuXFxuLnBoYXNlZC1vdXR7XFxuICBvcGFjaXR5OiAzMCU7XFxufVxcblxcbi8qIFxcbi5uby1idG4tY2xpY2tlZC1lcnJvcntcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gIGFuaW1hdGlvbi1uYW1lOiBuby1idG4tY2xpY2tlZC1lcnJvcjtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogLjRzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgbm8tYnRuLWNsaWNrZWQtZXJyb3J7XFxuICBmcm9tIHtiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7fVxcbiAgdG8ge2JhY2tncm91bmQtY29sb3I6IHdoaXRlO31cXG59ICovXFxuXFxuLnNlbGVjdGVke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLHNCQUFzQjtBQUN4QjtBQUNBOztFQUVFLFlBQVk7RUFDWixTQUFTO0VBQ1QsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsK0JBQStCO0VBQy9CLG9DQUFvQztFQUNwQywrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjtBQUNBOzs7RUFHRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7OztFQUdFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTs7RUFFRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsV0FBVztBQUNiO0FBQ0E7O0dBRUc7QUFDSDtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsV0FBVztBQUNiO0FBQ0E7O0dBRUc7O0FBRUg7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixtQ0FBbUM7RUFDbkMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsTUFBTSxxQkFBcUIsQ0FBQztFQUM1QixJQUFJLHVCQUF1QixDQUFDO0FBQzlCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7Ozs7Ozs7Ozs7OztHQVlHOztBQUVIO0VBQ0UsdUJBQXVCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHksXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlOyAqL1xcbn1cXG46cm9vdCB7XFxuICAvKiAtLWN1c3RvbSBuYW1lOiB2YWx1ZTsgKi9cXG4gIC8qIC0tbGlnaHQtZ3JlZW4tYmc6ICM0NzY1Mjk7ICovXFxuICAvKiBleGFtcGxlLCBjb2xvcjogdmFyKC0tbmF2eS1jbHIpICovXFxuICAtLWhlYWRlci1jbHI6IHJnYig5MCwgMTQxLCAxNjEpO1xcbiAgLS1uYXYtY2xyOiAjNEM1OTU4O1xcbiAgLS1tYWluLWNscjogI0JGQkZCRjtcXG4gIC0taGlnaC1wcmktY2xyOiAjREIyRTFBO1xcbiAgLS1tZWQtcHJpLWNscjogI0Q2QUIwRjtcXG4gIC0tbG93LXByaS1jbHI6ICMxMEExMUM7XFxuICAtLWRlZmF1bHQtbGlzdC1jbHI6ICM4QUE2QTM7XFxufVxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICAgIG1hcmdpbjogMHJlbTtcXG4gICAgYm9yZGVyOiAuMjVyZW0gc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG5hdnk7XFxuICAgIGNvbG9yOiBzaWx2ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbmZpZWxkc2V0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5mb3JtLnBsYXllci1uYW1le1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zdWJtaXQtbmFtZS1idG57XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgcGFkZGluZzogLjVyZW07XFxufVxcbi5uYW1lLXBsYXRlLCBcXG4uYm9hdC1zZWxlY3Rpb24tdGl0bGUsXFxuLmJvYXQtb3JpZW50YXRpb24tdGl0bGV7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbnRhYmxlLCB0aCwgdGQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbi5ncmlkLFxcbi5ib2F0LXNlbGVjdGlvbixcXG4uYm9hdC1vcmllbnRhdGlvbntcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmJvYXQtc2VsZWN0aW9uLWJ0bnMsXFxuLmJvYXQtb3JpZW50YXRpb24tYnRuc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IC4yNXJlbTtcXG59XFxuLyogYnV0dG9uOmhvdmVye1xcbmJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcbn0gKi9cXG50aCwgdGR7XFxuICBwYWRkaW5nLXRvcDogLjI1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IC4yNXJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbn1cXG4vKiB0ZDpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufSAqL1xcblxcbi5jbGlja2Vke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4ub3V0c2lkZS1ncmlke1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLm91dHNpZGUtZ3JpZC1lcnJvcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBvZmYtZ3JpZC1lcnJvcjtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNDAwbXM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBvZmYtZ3JpZC1lcnJvcntcXG4gIGZyb20ge2JhY2tncm91bmQtY29sb3I6IHJlZDt9XFxuICB0byB7YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7fVxcbn1cXG5cXG4udGFibGUtY2xhc3N7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ncmlke1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY2xpY2stYnRucy1tb2RhbHtcXG4gIHdpZHRoOiA0MCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICAvKiBtYXJnaW46IGF1dG87ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxOTQsIDE5NCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBvcGFjaXR5OiAwJTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XFxufVxcblxcbi5zaG93e1xcbiAgb3BhY2l0eTogMTAwJTtcXG59XFxuXFxuLnBoYXNlZC1vdXR7XFxuICBvcGFjaXR5OiAzMCU7XFxufVxcblxcbi8qIFxcbi5uby1idG4tY2xpY2tlZC1lcnJvcntcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gIGFuaW1hdGlvbi1uYW1lOiBuby1idG4tY2xpY2tlZC1lcnJvcjtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogLjRzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgbm8tYnRuLWNsaWNrZWQtZXJyb3J7XFxuICBmcm9tIHtiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7fVxcbiAgdG8ge2JhY2tncm91bmQtY29sb3I6IHdoaXRlO31cXG59ICovXFxuXFxuLnNlbGVjdGVke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHtcbiAgZ3JhYk5hbWUsXG4gIENyZWF0ZUJvYXQsXG4gIGhpdCxcbiAgaXNTdW5rLFxuICBHYW1lYm9hcmQsXG59IGZyb20gXCIuLi9zcmMvZnVuY3Rpb25zIF8mX3Rlc3RzL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgZXhhbXBsZUFkZCB9IGZyb20gXCIuLi9zcmMvRE9NLWludGVyYWN0aW9ucy9ET00taW50ZXJhY3Rpb25zXCI7XG5cbmNvbnN0IG5hbWVQbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmFtZS1wbGF0ZVwiKTtcbmNvbnN0IG5hbWVTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0ucGxheWVyLW5hbWVcIik7XG5cbm5hbWVTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGxldCBuYW1lID0gZS5jb21wb3NlZFBhdGgoKVswXVsxXS52YWx1ZTtcbiAgbmFtZVBsYXRlLnRleHRDb250ZW50ID0gbmFtZTtcbn0pO1xuXG5jb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmlkXCIpO1xuXG5ncmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zdCB4VmFsdWUgPSBlLmNvbXBvc2VkUGF0aCgpWzBdLmRhdGFzZXQueFZhbHVlO1xuICBjb25zdCB5VmFsdWUgPSBlLmNvbXBvc2VkUGF0aCgpWzBdLmRhdGFzZXQueVZhbHVlO1xuXG4gIGlmICh4VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHhWYWx1ZSk7XG4gICAgLy8gY29uc29sZS5sb2coeVZhbHVlKTtcbiAgfVxufSk7XG5cbmNvbnN0IHBhdHJvbEJvYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhdHJvbC1ib2F0LWJ0blwiKTtcbmNvbnN0IHN1Ym1hcmluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWFyaW5lLWJ0blwiKTtcbmNvbnN0IGRlc3Ryb3llciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzdHJveWVyLWJ0blwiKTtcbmNvbnN0IGJhdHRsZXNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhdHRsZXNoaXAtYnRuXCIpO1xuY29uc3QgY2FycmllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fycmllci1idG5cIik7XG5jb25zdCBob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob3JpemFudGFsLWJ0blwiKTtcbmNvbnN0IHZlcnRpY2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52ZXJ0aWNhbC1idG5cIik7XG5cbmZ1bmN0aW9uIGJvYXRTZWxlY3Rpb25CdXR0b25GdW5jdGlvbihcbiAgYnRuQ2xpY2tlZCxcbiAgYnRuQXJyID0gW3BhdHJvbEJvYXQsIHN1Ym1hcmluZSwgZGVzdHJveWVyLCBiYXR0bGVzaGlwLCBjYXJyaWVyXVxuKSB7XG4gIGJ0bkNsaWNrZWQuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gIGxldCByZW1haW5pbmdCdG5zID0gYnRuQXJyLmZpbHRlcigoYnRuKSA9PiBidG4gIT09IGJ0bkNsaWNrZWQpO1xuICByZW1haW5pbmdCdG5zLmZvckVhY2goKGJ0bikgPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpKTtcbn1cblxuZnVuY3Rpb24gYm9hdE9yaWVudGF0aW9uQnV0dG9uRnVuY3Rpb24oXG4gIGJ0bkNsaWNrZWQsXG4gIGJ0bkFyciA9IFtob3JpemFudGFsLCB2ZXJ0aWNhbF1cbikge1xuICBidG5DbGlja2VkLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICBsZXQgcmVtYWluaW5nQnRucyA9IGJ0bkFyci5maWx0ZXIoKGJ0bikgPT4gYnRuICE9PSBidG5DbGlja2VkKTtcbiAgcmVtYWluaW5nQnRucy5mb3JFYWNoKChidG4pID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKSk7XG59XG5cbnBhdHJvbEJvYXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnNvbGUubG9nKGUucGF0aFswXS5kYXRhc2V0LnBhdHJvbEJvYXRTcGFjZXMpO1xuICBib2F0U2VsZWN0aW9uQnV0dG9uRnVuY3Rpb24ocGF0cm9sQm9hdCk7XG59KTtcblxuc3VibWFyaW5lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zb2xlLmxvZyhlLnBhdGhbMF0uZGF0YXNldC5zdWJtYXJpbmVTcGFjZXMpO1xuICBib2F0U2VsZWN0aW9uQnV0dG9uRnVuY3Rpb24oc3VibWFyaW5lKTtcbn0pO1xuXG5kZXN0cm95ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnNvbGUubG9nKGUucGF0aFswXS5kYXRhc2V0LmRlc3Ryb3llclNwYWNlcyk7XG4gIGJvYXRTZWxlY3Rpb25CdXR0b25GdW5jdGlvbihkZXN0cm95ZXIpO1xufSk7XG5cbmJhdHRsZXNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnNvbGUubG9nKGUucGF0aFswXS5kYXRhc2V0LmJhdHRsZXNoaXBTcGFjZXMpO1xuICBib2F0U2VsZWN0aW9uQnV0dG9uRnVuY3Rpb24oYmF0dGxlc2hpcCk7XG59KTtcblxuY2Fycmllci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc29sZS5sb2coZS5wYXRoWzBdLmRhdGFzZXQuY2FycmllclNwYWNlcyk7XG4gIGJvYXRTZWxlY3Rpb25CdXR0b25GdW5jdGlvbihjYXJyaWVyKTtcbn0pO1xuXG5ob3JpemFudGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zb2xlLmxvZyhlLnBhdGhbMF0uZGF0YXNldC5ib2F0T3JpZW50YXRpb24pO1xuICBib2F0T3JpZW50YXRpb25CdXR0b25GdW5jdGlvbihob3JpemFudGFsKTtcbn0pO1xuXG52ZXJ0aWNhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc29sZS5sb2coZS5wYXRoWzBdLmRhdGFzZXQuYm9hdE9yaWVudGF0aW9uKTtcbiAgYm9hdE9yaWVudGF0aW9uQnV0dG9uRnVuY3Rpb24odmVydGljYWwpO1xufSk7XG5cbi8vY2xpY2stYnRucy1tb2RhbFxuY29uc3QgY2xpY2tCdG5zTW9kYWw9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xpY2stYnRucy1tb2RhbFwiKTtcbmNvbnN0IHRhYmxlQ2xhc3M9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGUtY2xhc3NcIik7XG5cbnRhYmxlQ2xhc3MuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCk9PntcbiAgaWYgKFxuICAgICghcGF0cm9sQm9hdC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAhc3VibWFyaW5lLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICFkZXN0cm95ZXIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgIWJhdHRsZXNoaXAuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgIWNhcnJpZXIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpKSB8fFxuICAgICghaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAhdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpKVxuICApIHtcbiAgICBjb25zb2xlLmxvZyhcIk5vbmUgb2YgdGhlc2UgYnV0dG9ucyBhcmUgY2xpY2tlZFwiKTsgLy9USElTIFdPUktTISFcbiAgICAvLyBwYXRyb2xCb2F0LmNsYXNzTGlzdC5hZGQoXCJuby1idG4tY2xpY2tlZC1lcnJvclwiKTtcbiAgICBjbGlja0J0bnNNb2RhbC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgICB0YWJsZUNsYXNzLmNsYXNzTGlzdC5hZGQoXCJwaGFzZWQtb3V0XCIpO1xuICB9XG59KTtcblxuY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidGRcIik7XG5cbmNlbGxzLmZvckVhY2goKGNlbGwpID0+XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgY29uc3QgeE51bSA9IE51bWJlcihjZWxsLmRhdGFzZXQueFZhbHVlKTtcbiAgICBjb25zdCB5TnVtID0gTnVtYmVyKGNlbGwuZGF0YXNldC55VmFsdWUpO1xuXG4gICAgY29uc3QgbmV4dENlbGwyX2hvcml6YW50YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtICsgMX0ke3lOdW19XCJdYFxuICAgICk7XG4gICAgY29uc3QgbmV4dENlbGwzX2hvcml6YW50YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtICsgMn0ke3lOdW19XCJdYFxuICAgICk7XG4gICAgY29uc3QgbmV4dENlbGw0X2hvcml6YW50YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtICsgM30ke3lOdW19XCJdYFxuICAgICk7XG4gICAgY29uc3QgbmV4dENlbGw1X2hvcml6YW50YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtICsgNH0ke3lOdW19XCJdYFxuICAgICk7XG5cbiAgICBjb25zdCBuZXh0Q2VsbDJfdmVydGljYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtfSR7eU51bSArIDF9XCJdYFxuICAgICk7XG4gICAgY29uc3QgbmV4dENlbGwzX3ZlcnRpY2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bX0ke3lOdW0gKyAyfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsNF92ZXJ0aWNhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW19JHt5TnVtICsgM31cIl1gXG4gICAgKTtcbiAgICBjb25zdCBuZXh0Q2VsbDVfdmVydGljYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtfSR7eU51bSArIDR9XCJdYFxuICAgICk7XG5cbiAgICBpZiAoXG4gICAgICBwYXRyb2xCb2F0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIilcbiAgICApIHtcbiAgICAgIGlmIChuZXh0Q2VsbDJfaG9yaXphbnRhbCkge1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghbmV4dENlbGwyX2hvcml6YW50YWwpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDZWxsMl9ob3JpemFudGFsICYmIG5leHRDZWxsMl9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpe1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgcGF0cm9sQm9hdC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIHZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKG5leHRDZWxsMl92ZXJ0aWNhbCkge1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl92ZXJ0aWNhbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmIG5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKXtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBzdWJtYXJpbmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICBob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKG5leHRDZWxsMl9ob3JpemFudGFsICYmIG5leHRDZWxsM19ob3JpemFudGFsKSB7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJiAhbmV4dENlbGwzX2hvcml6YW50YWwpIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl9ob3JpemFudGFsICYmICFuZXh0Q2VsbDNfaG9yaXphbnRhbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGwyX2hvcml6YW50YWwgJiYgbmV4dENlbGwyX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSl7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJiBuZXh0Q2VsbDNfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKXtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHN1Ym1hcmluZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIHZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKG5leHRDZWxsMl92ZXJ0aWNhbCAmJiBuZXh0Q2VsbDNfdmVydGljYWwpIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDNfdmVydGljYWwpIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKCFuZXh0Q2VsbDJfdmVydGljYWwgJiYgIW5leHRDZWxsM192ZXJ0aWNhbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmIG5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKXtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDNfdmVydGljYWwgJiYgbmV4dENlbGwzX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpe1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGRlc3Ryb3llci5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIGhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX2hvcml6YW50YWwgJiYgbmV4dENlbGwzX2hvcml6YW50YWwpIHtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDZWxsMl9ob3JpemFudGFsICYmICFuZXh0Q2VsbDNfaG9yaXphbnRhbCkge1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghbmV4dENlbGwyX2hvcml6YW50YWwgJiYgIW5leHRDZWxsM19ob3JpemFudGFsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDZWxsMl9ob3JpemFudGFsICYmIG5leHRDZWxsMl9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpe1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGwzX2hvcml6YW50YWwgJiYgbmV4dENlbGwzX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSl7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBkZXN0cm95ZXIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICB2ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIilcbiAgICApIHtcbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgbmV4dENlbGwzX3ZlcnRpY2FsKSB7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDZWxsMl92ZXJ0aWNhbCAmJiAhbmV4dENlbGwzX3ZlcnRpY2FsKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghbmV4dENlbGwyX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDNfdmVydGljYWwpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDZWxsMl92ZXJ0aWNhbCAmJiBuZXh0Q2VsbDJfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSl7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGwzX3ZlcnRpY2FsICYmIG5leHRDZWxsM192ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKXtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBiYXR0bGVzaGlwLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIilcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAhbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJiBuZXh0Q2VsbDJfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKXtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDZWxsM19ob3JpemFudGFsICYmIG5leHRDZWxsM19ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpe1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGw0X2hvcml6YW50YWwgJiYgbmV4dENlbGw0X2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSl7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBiYXR0bGVzaGlwLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmIG5leHRDZWxsM192ZXJ0aWNhbCAmJiBuZXh0Q2VsbDRfdmVydGljYWwpIHtcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgbmV4dENlbGwzX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDRfdmVydGljYWwpIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgIW5leHRDZWxsM192ZXJ0aWNhbCAmJiAhbmV4dENlbGw0X3ZlcnRpY2FsKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghbmV4dENlbGwyX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDNfdmVydGljYWwgJiYgIW5leHRDZWxsNF92ZXJ0aWNhbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmIG5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKXtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDNfdmVydGljYWwgJiYgbmV4dENlbGwzX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpe1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDZWxsNF92ZXJ0aWNhbCAmJiBuZXh0Q2VsbDRfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSl7XG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY2Fycmllci5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIGhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsNV9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw1X2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDVfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgICFuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNF9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDVfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJiBuZXh0Q2VsbDJfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKXtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDZWxsM19ob3JpemFudGFsICYmIG5leHRDZWxsM19ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpe1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGw0X2hvcml6YW50YWwgJiYgbmV4dENlbGw0X2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSl7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDVfaG9yaXphbnRhbCAmJiBuZXh0Q2VsbDVfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKXtcbiAgICAgICAgbmV4dENlbGw1X2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGNhcnJpZXIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICB2ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIilcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGw1X3ZlcnRpY2FsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw1X3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGw1X3ZlcnRpY2FsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsNF92ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGw1X3ZlcnRpY2FsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDNfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsNF92ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGw1X3ZlcnRpY2FsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAhbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDNfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsNF92ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGw1X3ZlcnRpY2FsXG4gICAgICApIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmIG5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKXtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDNfdmVydGljYWwgJiYgbmV4dENlbGwzX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpe1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDZWxsNF92ZXJ0aWNhbCAmJiBuZXh0Q2VsbDRfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSl7XG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGw1X3ZlcnRpY2FsICYmIG5leHRDZWxsNV92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKXtcbiAgICAgICAgbmV4dENlbGw1X3ZlcnRpY2FsLmNsYXNzTGlzdC5hZGQoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pXG4pO1xuXG50YWJsZUNsYXNzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcbiAgaWYgKFxuICAgICghcGF0cm9sQm9hdC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFzdWJtYXJpbmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhZGVzdHJveWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIWJhdHRsZXNoaXAuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhY2Fycmllci5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikpIHx8XG4gICAgKCFob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIXZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSlcbiAgKSB7XG4gICAgY29uc29sZS5sb2coXCJOb25lIG9mIHRoZXNlIGJ1dHRvbnMgYXJlIGNsaWNrZWRcIik7IC8vVEhJUyBXT1JLUyEhXG4gICAgLy8gcGF0cm9sQm9hdC5jbGFzc0xpc3QucmVtb3ZlKFwibm8tYnRuLWNsaWNrZWQtZXJyb3JcIik7XG4gICAgY2xpY2tCdG5zTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgdGFibGVDbGFzcy5jbGFzc0xpc3QucmVtb3ZlKFwicGhhc2VkLW91dFwiKTtcbiAgfVxufSk7XG5cbmNlbGxzLmZvckVhY2goKGNlbGwpID0+XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICBjb25zdCB4TnVtID0gTnVtYmVyKGNlbGwuZGF0YXNldC54VmFsdWUpO1xuICAgIGNvbnN0IHlOdW0gPSBOdW1iZXIoY2VsbC5kYXRhc2V0LnlWYWx1ZSk7XG5cbiAgICBjb25zdCBuZXh0Q2VsbDJfaG9yaXphbnRhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW0gKyAxfSR7eU51bX1cIl1gXG4gICAgKTtcbiAgICBjb25zdCBuZXh0Q2VsbDNfaG9yaXphbnRhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW0gKyAyfSR7eU51bX1cIl1gXG4gICAgKTtcbiAgICBjb25zdCBuZXh0Q2VsbDRfaG9yaXphbnRhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW0gKyAzfSR7eU51bX1cIl1gXG4gICAgKTtcbiAgICBjb25zdCBuZXh0Q2VsbDVfaG9yaXphbnRhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW0gKyA0fSR7eU51bX1cIl1gXG4gICAgKTtcblxuICAgIGNvbnN0IG5leHRDZWxsMl92ZXJ0aWNhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW19JHt5TnVtICsgMX1cIl1gXG4gICAgKTtcbiAgICBjb25zdCBuZXh0Q2VsbDNfdmVydGljYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtfSR7eU51bSArIDJ9XCJdYFxuICAgICk7XG4gICAgY29uc3QgbmV4dENlbGw0X3ZlcnRpY2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bX0ke3lOdW0gKyAzfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsNV92ZXJ0aWNhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW19JHt5TnVtICsgNH1cIl1gXG4gICAgKTtcblxuICAgIGlmIChcbiAgICAgIHBhdHJvbEJvYXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICBob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKVxuICAgICkge1xuICAgICAgaWYgKG5leHRDZWxsMl9ob3JpemFudGFsKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKCFuZXh0Q2VsbDJfaG9yaXphbnRhbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGwyX2hvcml6YW50YWwgJiYgbmV4dENlbGwyX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSl7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBwYXRyb2xCb2F0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghbmV4dENlbGwyX3ZlcnRpY2FsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgbmV4dENlbGwyX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpe1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHN1Ym1hcmluZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIGhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX2hvcml6YW50YWwgJiYgbmV4dENlbGwzX2hvcml6YW50YWwpIHtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDZWxsMl9ob3JpemFudGFsICYmICFuZXh0Q2VsbDNfaG9yaXphbnRhbCkge1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghbmV4dENlbGwyX2hvcml6YW50YWwgJiYgIW5leHRDZWxsM19ob3JpemFudGFsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJiBuZXh0Q2VsbDJfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKXtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDZWxsM19ob3JpemFudGFsICYmIG5leHRDZWxsM19ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpe1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgc3VibWFyaW5lLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmIG5leHRDZWxsM192ZXJ0aWNhbCkge1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgIW5leHRDZWxsM192ZXJ0aWNhbCkge1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoIW5leHRDZWxsMl92ZXJ0aWNhbCAmJiAhbmV4dENlbGwzX3ZlcnRpY2FsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgbmV4dENlbGwyX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpe1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDZWxsM192ZXJ0aWNhbCAmJiBuZXh0Q2VsbDNfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSl7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgZGVzdHJveWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIilcbiAgICApIHtcbiAgICAgIGlmIChuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJiBuZXh0Q2VsbDNfaG9yaXphbnRhbCkge1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGwyX2hvcml6YW50YWwgJiYgIW5leHRDZWxsM19ob3JpemFudGFsKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKCFuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJiAhbmV4dENlbGwzX2hvcml6YW50YWwpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDZWxsMl9ob3JpemFudGFsICYmIG5leHRDZWxsMl9ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpe1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGwzX2hvcml6YW50YWwgJiYgbmV4dENlbGwzX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSl7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBkZXN0cm95ZXIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICB2ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIilcbiAgICApIHtcbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgbmV4dENlbGwzX3ZlcnRpY2FsKSB7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDZWxsMl92ZXJ0aWNhbCAmJiAhbmV4dENlbGwzX3ZlcnRpY2FsKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghbmV4dENlbGwyX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDNfdmVydGljYWwpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDZWxsMl92ZXJ0aWNhbCAmJiBuZXh0Q2VsbDJfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSl7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGwzX3ZlcnRpY2FsICYmIG5leHRDZWxsM192ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKXtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBiYXR0bGVzaGlwLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIilcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgbmV4dENlbGw0X2hvcml6YW50YWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDRfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWxcbiAgICAgICkge1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAhbmV4dENlbGwyX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDRfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJiBuZXh0Q2VsbDJfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKXtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDZWxsM19ob3JpemFudGFsICYmIG5leHRDZWxsM19ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpe1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGw0X2hvcml6YW50YWwgJiYgbmV4dENlbGw0X2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSl7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBiYXR0bGVzaGlwLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmIG5leHRDZWxsM192ZXJ0aWNhbCAmJiBuZXh0Q2VsbDRfdmVydGljYWwpIHtcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgbmV4dENlbGwzX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDRfdmVydGljYWwpIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfdmVydGljYWwgJiYgIW5leHRDZWxsM192ZXJ0aWNhbCAmJiAhbmV4dENlbGw0X3ZlcnRpY2FsKSB7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghbmV4dENlbGwyX3ZlcnRpY2FsICYmICFuZXh0Q2VsbDNfdmVydGljYWwgJiYgIW5leHRDZWxsNF92ZXJ0aWNhbCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGwyX3ZlcnRpY2FsICYmIG5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKXtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDNfdmVydGljYWwgJiYgbmV4dENlbGwzX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpe1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDZWxsNF92ZXJ0aWNhbCAmJiBuZXh0Q2VsbDRfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSl7XG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY2Fycmllci5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIGhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsNV9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw1X2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsICYmXG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDVfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsM19ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDNfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNV9ob3JpemFudGFsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgICFuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJlxuICAgICAgICAhbmV4dENlbGwzX2hvcml6YW50YWwgJiZcbiAgICAgICAgIW5leHRDZWxsNF9ob3JpemFudGFsICYmXG4gICAgICAgICFuZXh0Q2VsbDVfaG9yaXphbnRhbFxuICAgICAgKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDJfaG9yaXphbnRhbCAmJiBuZXh0Q2VsbDJfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKXtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDZWxsM19ob3JpemFudGFsICYmIG5leHRDZWxsM19ob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpe1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGw0X2hvcml6YW50YWwgJiYgbmV4dENlbGw0X2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSl7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDVfaG9yaXphbnRhbCAmJiBuZXh0Q2VsbDVfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKXtcbiAgICAgICAgbmV4dENlbGw1X2hvcml6YW50YWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGNhcnJpZXIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICB2ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIilcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGw1X3ZlcnRpY2FsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw1X3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwgJiZcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsICYmXG4gICAgICAgIG5leHRDZWxsNF92ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGw1X3ZlcnRpY2FsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGw0X3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsM192ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbCAmJlxuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsNF92ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGw1X3ZlcnRpY2FsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDNfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsNF92ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGw1X3ZlcnRpY2FsXG4gICAgICApIHtcbiAgICAgICAgbmV4dENlbGwyX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAhbmV4dENlbGwyX3ZlcnRpY2FsICYmXG4gICAgICAgICFuZXh0Q2VsbDNfdmVydGljYWwgJiZcbiAgICAgICAgIW5leHRDZWxsNF92ZXJ0aWNhbCAmJlxuICAgICAgICAhbmV4dENlbGw1X3ZlcnRpY2FsXG4gICAgICApIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDZWxsMl92ZXJ0aWNhbCAmJiBuZXh0Q2VsbDJfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSl7XG4gICAgICAgIG5leHRDZWxsMl92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAobmV4dENlbGwzX3ZlcnRpY2FsICYmIG5leHRDZWxsM192ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpKXtcbiAgICAgICAgbmV4dENlbGwzX3ZlcnRpY2FsLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWQtZXJyb3JcIik7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0Q2VsbDRfdmVydGljYWwgJiYgbmV4dENlbGw0X3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikpe1xuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwuY2xhc3NMaXN0LnJlbW92ZShcIm91dHNpZGUtZ3JpZC1lcnJvclwiKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRDZWxsNV92ZXJ0aWNhbCAmJiBuZXh0Q2VsbDVfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSl7XG4gICAgICAgIG5leHRDZWxsNV92ZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3V0c2lkZS1ncmlkLWVycm9yXCIpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRzaWRlLWdyaWRcIik7XG4gICAgICB9XG4gICAgfVxuICB9KVxuKTtcblxuXG5cblxuY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT5cbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHhOdW0gPSBOdW1iZXIoY2VsbC5kYXRhc2V0LnhWYWx1ZSk7XG4gICAgY29uc3QgeU51bSA9IE51bWJlcihjZWxsLmRhdGFzZXQueVZhbHVlKTtcblxuICAgIGNvbnN0IG5leHRDZWxsMl9ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDF9JHt5TnVtfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsM19ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDJ9JHt5TnVtfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsNF9ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDN9JHt5TnVtfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsNV9ob3JpemFudGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bSArIDR9JHt5TnVtfVwiXWBcbiAgICApO1xuXG4gICAgY29uc3QgbmV4dENlbGwyX3ZlcnRpY2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bX0ke3lOdW0gKyAxfVwiXWBcbiAgICApO1xuICAgIGNvbnN0IG5leHRDZWxsM192ZXJ0aWNhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY29kZT0gXCIke3hOdW19JHt5TnVtICsgMn1cIl1gXG4gICAgKTtcbiAgICBjb25zdCBuZXh0Q2VsbDRfdmVydGljYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvZGU9IFwiJHt4TnVtfSR7eU51bSArIDN9XCJdYFxuICAgICk7XG4gICAgY29uc3QgbmV4dENlbGw1X3ZlcnRpY2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jb2RlPSBcIiR7eE51bX0ke3lOdW0gKyA0fVwiXWBcbiAgICApO1xuXG4gICAgaWYgKFxuICAgICAgcGF0cm9sQm9hdC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIGhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhZ3JpZC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcIm91dHNpZGUtZ3JpZFwiKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICAhY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDJfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhdHJvbEJvYXQuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgICAgcGF0cm9sQm9hdC5kaXNhYmxlZD10cnVlO1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpOyAgXG4gICAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHBhdHJvbEJvYXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICB2ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFncmlkLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwib3V0c2lkZS1ncmlkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgICFjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgcGF0cm9sQm9hdC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgcGF0cm9sQm9hdC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHN1Ym1hcmluZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIGhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhZ3JpZC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcIm91dHNpZGUtZ3JpZFwiKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICAhY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDJfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDNfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgc3VibWFyaW5lLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBzdWJtYXJpbmUuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgc3VibWFyaW5lLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhZ3JpZC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcIm91dHNpZGUtZ3JpZFwiKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICAhY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDJfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwzX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIWdyaWQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJvdXRzaWRlLWdyaWRcIilcbiAgICAgICkge1xuICAgICAgICBzdWJtYXJpbmUuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIHN1Ym1hcmluZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGRlc3Ryb3llci5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgIGhvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhZ3JpZC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcIm91dHNpZGUtZ3JpZFwiKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICAhY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDJfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDNfaG9yaXphbnRhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgZGVzdHJveWVyLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICBkZXN0cm95ZXIuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgZGVzdHJveWVyLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhZ3JpZC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcIm91dHNpZGUtZ3JpZFwiKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICAhY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDJfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwzX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIilcbiAgICAgICkge1xuICAgICAgICBkZXN0cm95ZXIuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGRlc3Ryb3llci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGJhdHRsZXNoaXAuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICBob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIWdyaWQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJvdXRzaWRlLWdyaWRcIilcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgIWNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwyX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwzX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhZ3JpZC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcIm91dHNpZGUtZ3JpZFwiKVxuICAgICAgKSB7XG4gICAgICAgIGJhdHRsZXNoaXAuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGJhdHRsZXNoaXAuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBiYXR0bGVzaGlwLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICAhZ3JpZC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcIm91dHNpZGUtZ3JpZFwiKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICAhY2VsbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDJfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwzX3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsNF92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFncmlkLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwib3V0c2lkZS1ncmlkXCIpXG4gICAgICApIHtcbiAgICAgICAgYmF0dGxlc2hpcC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgYmF0dGxlc2hpcC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGNhcnJpZXIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICBob3JpemFudGFsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwiY2xpY2tlZFwiKSAmJlxuICAgICAgIWdyaWQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJvdXRzaWRlLWdyaWRcIilcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgIWNlbGwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwyX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGwzX2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGw0X2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGw1X2hvcml6YW50YWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKVxuICAgICAgKSB7XG4gICAgICAgIGNhcnJpZXIuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIGNhcnJpZXIuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGwyX2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfaG9yaXphbnRhbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIG5leHRDZWxsNF9ob3JpemFudGFsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbmV4dENlbGw1X2hvcml6YW50YWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGNhcnJpZXIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJjbGlja2VkXCIpICYmXG4gICAgICB2ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcImNsaWNrZWRcIikgJiZcbiAgICAgICFncmlkLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwib3V0c2lkZS1ncmlkXCIpXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgICFjZWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsMl92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpICYmXG4gICAgICAgICFuZXh0Q2VsbDNfdmVydGljYWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuaW5jbHVkZXMoXCJzZWxlY3RlZFwiKSAmJlxuICAgICAgICAhbmV4dENlbGw0X3ZlcnRpY2FsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLmluY2x1ZGVzKFwic2VsZWN0ZWRcIikgJiZcbiAgICAgICAgIW5leHRDZWxsNV92ZXJ0aWNhbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5pbmNsdWRlcyhcInNlbGVjdGVkXCIpXG4gICAgICApIHtcbiAgICAgICAgY2Fycmllci5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgY2Fycmllci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDJfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDNfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDRfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBuZXh0Q2VsbDVfdmVydGljYWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSlcbik7XG4iXSwibmFtZXMiOlsiZ3JhYk5hbWUiLCJDcmVhdGVCb2F0IiwiaGl0IiwiaXNTdW5rIiwiR2FtZWJvYXJkIiwiZXhhbXBsZUFkZCIsImEiLCJiIiwibmFtZSIsImNvbnN0cnVjdG9yIiwibGVuZ3RoIiwiYm9hdE5hbWUiLCJudW1UaW1lc0hpdCIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsImhhc1N1bmsiLCJjb29yZGluYXRlcyIsInhfbnVtYmVyIiwieV9udW1iZXIiLCJzdGF0dXMiLCJib2F0TmFtZU9iaiIsIndhc1BpY2tlZCIsInBsYWNlIiwic2hpcExlbmd0aCIsInZlcnRpY2FsT3JIb3Jpem9udGFsIiwieE51bWJlciIsInlOdW1iZXIiLCJpIiwicmVjZWl2ZUF0dGFjayIsIm5hbWVQbGF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5hbWVTdWJtaXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29tcG9zZWRQYXRoIiwidmFsdWUiLCJ0ZXh0Q29udGVudCIsImdyaWQiLCJ4VmFsdWUiLCJkYXRhc2V0IiwieVZhbHVlIiwicGF0cm9sQm9hdCIsInN1Ym1hcmluZSIsImRlc3Ryb3llciIsImJhdHRsZXNoaXAiLCJjYXJyaWVyIiwiaG9yaXphbnRhbCIsInZlcnRpY2FsIiwiYm9hdFNlbGVjdGlvbkJ1dHRvbkZ1bmN0aW9uIiwiYnRuQ2xpY2tlZCIsImJ0bkFyciIsImNsYXNzTGlzdCIsImFkZCIsInJlbWFpbmluZ0J0bnMiLCJmaWx0ZXIiLCJidG4iLCJmb3JFYWNoIiwicmVtb3ZlIiwiYm9hdE9yaWVudGF0aW9uQnV0dG9uRnVuY3Rpb24iLCJjb25zb2xlIiwibG9nIiwicGF0aCIsInBhdHJvbEJvYXRTcGFjZXMiLCJzdWJtYXJpbmVTcGFjZXMiLCJkZXN0cm95ZXJTcGFjZXMiLCJiYXR0bGVzaGlwU3BhY2VzIiwiY2FycmllclNwYWNlcyIsImJvYXRPcmllbnRhdGlvbiIsImNsaWNrQnRuc01vZGFsIiwidGFibGVDbGFzcyIsImdldEF0dHJpYnV0ZSIsImluY2x1ZGVzIiwiY2VsbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2VsbCIsInhOdW0iLCJOdW1iZXIiLCJ5TnVtIiwibmV4dENlbGwyX2hvcml6YW50YWwiLCJuZXh0Q2VsbDNfaG9yaXphbnRhbCIsIm5leHRDZWxsNF9ob3JpemFudGFsIiwibmV4dENlbGw1X2hvcml6YW50YWwiLCJuZXh0Q2VsbDJfdmVydGljYWwiLCJuZXh0Q2VsbDNfdmVydGljYWwiLCJuZXh0Q2VsbDRfdmVydGljYWwiLCJuZXh0Q2VsbDVfdmVydGljYWwiLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=