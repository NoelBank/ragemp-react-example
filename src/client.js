mp.game.graphics.notify("Loaded nbank.shop");

mp.events.add({
  guiReady: () => {
    global.browser = mp.browsers.new("package://nbank/index.html");
  },
  shopInventory: (value) => {
    global.browser.execute(`trigger('shopInventory', '${value}')`);
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
  playerChat: (text) => {
    global.browser.execute(`trigger('onMessage', '${text}')`);
    mp.gui.chat.push(`You wrote '${text}' in chat.`);
  },
  onMessageFromServer: (value) => {
    global.browser.execute(`trigger('onMessage', '${value}')`);
  },
});

mp.events.add("buyProduct", (item, paymentType) => {
  mp.events.callRemote("buyProduct", item.id, item.variation, paymentType);
});

// F2 - trigger cursor
mp.keys.bind(0x71, true, () => {
  let state = !mp.gui.cursor.visible;
  mp.gui.cursor.show(state, state);
});

// F3 - open shop
mp.keys.bind(0x72, true, () => {
  global.browser.execute(`trigger('openShop')`);
  mp.gui.chat.push("open shop");
});

// F5 - open shop
mp.keys.bind(0x74, true, () => {
  global.browser.reload(true);
});

mp.events.add("initialized", () => {
  mp.game.graphics.notify(`Shop loaded`);
});

mp.events.add("logToChat", (value) => {
  mp.game.graphics.notify(value);
});
