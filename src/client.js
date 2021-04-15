mp.game.graphics.notify("Loaded nbank.shop");

mp.events.add({
  guiReady: () => {
    global.browser = mp.browsers.new("package://nbank/index.html");
    mp.gui.cursor.show(false, false);
    mp.players.local.setArmour(100);
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
  playerSpawn: (player) => {
    mp.gui.chat.push("Hey " + player.name + ", you just spawned");
    mp.colshapes.newSphere(
      player.position.x,
      player.position.y,
      player.position.z,
      25,
      2
    );
  },
});

mp.events.add("buyProduct", (item, paymentType) => {
  mp.events.callRemote("buyProduct", item.ID, item.variant, paymentType);
});

mp.events.add("previewProduct", (item) => {
  mp.game.graphics.notify(item);

  mp.events.callRemote("previewProduct", item.ID, item.variant);
});

// F3 - open shop
mp.keys.bind(0x72, true, () => {
  let cursorState = !mp.gui.cursor.visible;
  mp.gui.cursor.show(cursorState, cursorState);
  global.browser.execute(`trigger('openShop')`);
  mp.events.callRemote("triggerInteraction");
});

// F2 - open shop
mp.keys.bind(0x71, true, () => {
  global.browser.reload();
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
