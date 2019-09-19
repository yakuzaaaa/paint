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

/***/ "./src/canvas/index.js":
/*!*****************************!*\
  !*** ./src/canvas/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  var DRAW_TOOL = 'draw';\n  var ERASE_TOOL = 'erase';\n  document.addEventListener('DOMContentLoaded', function () {\n    var canvas = document.querySelector('canvas');\n    var ctx = canvas.getContext('2d');\n    var config = {};\n\n    function init() {\n      resizeCanvas();\n      config.tool = DRAW_TOOL;\n      var tools = document.querySelectorAll('.tool');\n      tools.forEach(function (tool) {\n        tool.addEventListener('click', onToolClick);\n      });\n    }\n\n    function resizeCanvas() {\n      canvas.width = window.innerWidth;\n      canvas.height = window.innerHeight;\n    }\n\n    function onToolClick(e) {\n      var selectedTool = e.target.dataset.type;\n      config.tool = selectedTool;\n    }\n\n    function drawLine(e) {\n      var x = e.clientX,\n          y = e.clientY;\n      ctx.lineTo(x, y);\n      ctx.stroke();\n    }\n\n    function erase(e) {\n      var x = e.clientX,\n          y = e.clientY;\n      ctx.clearRect(x - 25, y - 25, 50, 50);\n    }\n\n    function onMouseMove(e) {\n      stickToolIcon(e);\n      performToolAction(e);\n    }\n\n    function stickToolIcon(e) {\n      switch (config.tool) {\n        case ERASE_TOOL:\n          break;\n      }\n    }\n\n    function performToolAction(e) {\n      switch (config.tool) {\n        case ERASE_TOOL:\n          erase(e);\n          break;\n\n        case DRAW_TOOL:\n        default:\n          drawLine(e);\n          break;\n      }\n    }\n\n    function onMouseUp(e) {\n      document.removeEventListener('mousemove', onMouseMove);\n    }\n\n    function onMouseDown() {\n      // Check if this can be placed in a better place\n      ctx.beginPath();\n      document.addEventListener('mousemove', onMouseMove);\n      document.addEventListener('mouseup', onMouseUp);\n    }\n\n    window.addEventListener('resize', resizeCanvas);\n    document.addEventListener('mousedown', onMouseDown);\n    init();\n  });\n})();\n\n//# sourceURL=webpack:///./src/canvas/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./canvas/index.js */ \"./src/canvas/index.js\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });