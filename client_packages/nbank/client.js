!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=33)}({33:function(e,n){var t;mp.game.graphics.notify("Loaded nbank.shop"),setInterval((function(){mp.game.invoke("0x9E4CFFF989258472"),mp.game.invoke("0xF4F2C0D4EE209E20")}),25e3),mp.events.add({guiReady:function(){t=mp.browsers.new("package://nbank/index.html"),mp.gui.cursor.show(!1,!1)},shopInventory:function(e){t.execute("trigger('shopInventory', '".concat(e,"')")),e&&mp.gui.cursor.show(!0,!0)},responsePreviewProduct:function(e,n){t.execute("trigger('responsePreviewProduct', ".concat(e,", '").concat(n,"')"))},responseBuyProduct:function(e,n){t.execute("trigger('responseBuyProduct', ".concat(e,", '").concat(n,"')"))},onMessageFromServer:function(e){t.execute("trigger('onMessage', '".concat(e,"')"))}}),mp.events.add("buyProduct",(function(e,n,t){mp.events.callRemote("buyProduct",e,n,t)})),mp.events.add("previewProduct",(function(e,n){mp.events.callRemote("previewProduct",e,n)})),mp.keys.bind(69,!0,(function(){mp.events.callRemote("triggerInteraction")})),mp.events.add("initialized",(function(){mp.game.graphics.notify("The Framework was loaded"),mp.gui.cursor.show(!1,!1)})),mp.events.add("logToChat",(function(e){mp.game.graphics.notify(e)})),mp.events.add("closeShop",(function(){mp.gui.cursor.show(!1,!1)}))}});