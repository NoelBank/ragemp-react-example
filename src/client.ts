mp.game.graphics.notify("Loaded nbank.shop");
let browser: BrowserMp;

mp.events.add({
  guiReady: () => {
    browser = mp.browsers.new("package://nbank/index.html");
    mp.gui.cursor.show(false, false);
  },
  shopInventory: (value: string) => {
    browser.execute(`trigger('shopInventory', '${value}')`);
    mp.gui.cursor.show(true, true);
  },
  responsePreviewProduct: (success: boolean, errorMessage: string) => {
    browser.execute(
      `trigger('responsePreviewProduct', '${success}, ${errorMessage}')`
    );
  },
  responseBuyProduct: (success: boolean, errorMessage: string) => {
    browser.execute(
      `trigger('responseBuyProduct', '${success}, ${errorMessage})}')`
    );
  },
  onMessageFromServer: (value: string) => {
    browser.execute(`trigger('onMessage', '${value}')`);
  },
});

mp.events.add(
  "buyProduct",
  (item: number, variant: number, paymentType: string) => {
    mp.events.callRemote("buyProduct", item, variant, paymentType);
  }
);

mp.events.add("previewProduct", (item, variant) => {
  mp.events.callRemote("previewProduct", item, variant);
});

mp.keys.bind(69, true, () => {
  mp.events.callRemote("triggerInteraction");
});

mp.events.add("initialized", () => {
  mp.game.graphics.notify(`The Framework was loaded`);
});

mp.events.add("logToChat", (value) => {
  mp.game.graphics.notify(value);
});

mp.events.add("closeShop", () => {
  mp.gui.cursor.show(false, false);
});
