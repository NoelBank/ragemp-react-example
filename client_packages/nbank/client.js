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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/client.js":
/*!***********************!*\
  !*** ./src/client.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {mp.game.graphics.notify(\"Loaded nbank.shop\");\nmp.events.add({\n  guiReady: function guiReady() {\n    global.browser = mp.browsers[\"new\"](\"package://nbank/index.html\");\n    mp.gui.cursor.show(false, false);\n    mp.players.local.setArmour(100);\n  },\n  shopInventory: function shopInventory(value) {\n    global.browser.execute(\"trigger('shopInventory', '\".concat(value, \"')\"));\n  },\n  responsePreviewProduct: function responsePreviewProduct(success, errorMessage) {\n    global.browser.execute(\"trigger('responsePreviewProduct', '\".concat((success, errorMessage), \"')\"));\n  },\n  responseBuyProduct: function responseBuyProduct(success, errorMessage) {\n    global.browser.execute(\"trigger('responseBuyProduct', '\".concat((success, errorMessage), \"')\"));\n  },\n  playerChat: function playerChat(text) {\n    global.browser.execute(\"trigger('onMessage', '\".concat(text, \"')\"));\n    mp.gui.chat.push(\"You wrote '\".concat(text, \"' in chat.\"));\n  },\n  onMessageFromServer: function onMessageFromServer(value) {\n    global.browser.execute(\"trigger('onMessage', '\".concat(value, \"')\"));\n  },\n  playerSpawn: function playerSpawn(player) {\n    mp.gui.chat.push(\"Hey \" + player.name + \", you just spawned\");\n    mp.colshapes.newSphere(player.position.x, player.position.y, player.position.z, 25, 2);\n  }\n});\nmp.events.add(\"buyProduct\", function (item, paymentType) {\n  mp.events.callRemote(\"buyProduct\", item.ID, item.variant, paymentType);\n});\nmp.events.add(\"previewProduct\", function (item) {\n  mp.events.callRemote(\"previewProduct\", item.ID, item.variant);\n}); // F3 - open shop\n\nmp.keys.bind(0x72, true, function () {\n  var cursorState = !mp.gui.cursor.visible;\n  mp.gui.cursor.show(cursorState, cursorState);\n  global.browser.execute(\"trigger('openShop')\");\n  mp.events.callRemote(\"triggerInteraction\");\n}); // F2 - open shop\n\nmp.keys.bind(0x71, true, function () {\n  global.browser.reload();\n});\nmp.events.add(\"initialized\", function () {\n  mp.game.graphics.notify(\"The Framework was loaded\");\n});\nmp.events.add(\"logToChat\", function (value) {\n  mp.game.graphics.notify(value);\n});\nmp.events.add(\"toggleCursor\", function () {\n  var cursorState = !mp.gui.cursor.visible;\n  mp.gui.cursor.show(cursorState, cursorState);\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/client.js?");

/***/ })

/******/ });