/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ic_point@2x.png":
/*!*****************************!*\
  !*** ./src/ic_point@2x.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports="data:image/png;base64,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"

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ic_point_2x_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ic_point@2x.png */ "./src/ic_point@2x.png");
/* harmony import */ var _ic_point_2x_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ic_point_2x_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "./src/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);
/** '宏振  study 8888123'**/// console.log('hello!!!')
// class zhz{
//   constructor(){
//     this.name = 'zhz'
//   }
//   getName() {
//     return this.name
//   }
// }
// let zhzs = new zhz()
// zhzs.getName()
// console.log(zhzs.getName())


let img =document.createElement('img')
img.src = _ic_point_2x_png__WEBPACK_IMPORTED_MODULE_0___default.a;
document.body.appendChild(img)




/***/ }),

/***/ "./src/index.less":
/*!************************!*\
  !*** ./src/index.less ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {


  let style = document.createElement('style')
  style.innerHTML = "!!../loaders/css-loader.js!../loaders/less-loader.js!./index.less"
  document.head.appendChild(style)
  

/***/ })

/******/ });
//# sourceMappingURL=build.js.map