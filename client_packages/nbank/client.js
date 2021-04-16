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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client.ts":
/*!***********************!*\
  !*** ./src/client.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("mp.game.graphics.notify(\"Loaded nbank.shop\");\nvar browser;\nmp.events.add({\n  guiReady: function guiReady() {\n    browser = mp.browsers[\"new\"](\"package://nbank/index.html\");\n    mp.gui.cursor.show(false, false);\n  },\n  shopInventory: function shopInventory(value) {\n    browser.execute(\"trigger('shopInventory', '\".concat(value, \"')\"));\n    mp.gui.cursor.show(true, true);\n  },\n  responsePreviewProduct: function responsePreviewProduct(success, errorMessage) {\n    browser.execute(\"trigger('responsePreviewProduct', '\".concat(success, \", \").concat(errorMessage, \"')\"));\n  },\n  responseBuyProduct: function responseBuyProduct(success, errorMessage) {\n    browser.execute(\"trigger('responseBuyProduct', '\".concat(success, \", \").concat(errorMessage, \")}')\"));\n  },\n  onMessageFromServer: function onMessageFromServer(value) {\n    browser.execute(\"trigger('onMessage', '\".concat(value, \"')\"));\n  }\n});\nmp.events.add(\"buyProduct\", function (item, variant, paymentType) {\n  mp.events.callRemote(\"buyProduct\", item, variant, paymentType);\n});\nmp.events.add(\"previewProduct\", function (item, variant) {\n  mp.events.callRemote(\"previewProduct\", item, variant);\n});\nmp.keys.bind(69, true, function () {\n  mp.events.callRemote(\"triggerInteraction\");\n});\nmp.events.add(\"initialized\", function () {\n  mp.game.graphics.notify(\"The Framework was loaded\");\n});\nmp.events.add(\"logToChat\", function (value) {\n  mp.game.graphics.notify(value);\n});\nmp.events.add(\"closeShop\", function () {\n  mp.gui.cursor.show(false, false);\n});\n\n//# sourceURL=webpack:///./src/client.ts?");

/***/ })

/******/ });