mp.game.graphics.notify("Loaded nbank.shop");

mp.events.add({
  guiReady: () => {
    global.browser = mp.browsers.new("package://nbank/index.html");
    mp.gui.cursor.show(false, false);
  },
  shopInventory: (value) => {
    global.browser.execute(`trigger('shopInventory', '${value}')`);
    mp.gui.cursor.show(true, true);
  },
  responsePreviewProduct: (success, errorMessage) => {
    global.browser.execute(
      `trigger('responsePreviewProduct', '${(success, errorMessage)}')`
    );
  },
  responseBuyProduct: (success, errorMessage) => {
    global.browser.execute(
      `trigger('responseBuyProduct', '${(success, errorMessage)}')`
    );
  },
  onMessageFromServer: (value) => {
    global.browser.execute(`trigger('onMessage', '${value}')`);
  },
});

mp.events.add("buyProduct", (item, variant, paymentType) => {
  mp.events.callRemote("buyProduct", item, variant, paymentType);
});

mp.events.add("previewProduct", (item, variant) => {
  mp.events.callRemote("previewProduct", item, variant);
});

mp.keys.bind("E", true, () => {
  mp.events.callRemote("triggerInteraction");
});

mp.events.add("initialized", () => {
  mp.game.graphics.notify(`The Framework was loaded`);
});

mp.events.add("logToChat", (value) => {
  mp.game.graphics.notify(value);
});

mp.events.add("toggleCursor", () => {
  let cursorState = !mp.gui.cursor.visible;
  mp.gui.cursor.show(cursorState, cursorState);
});
