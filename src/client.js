mp.gui.chat.push("react client started");

let browser;

mp.events.add({
  guiReady: () => {
    browser = mp.browsers.new("package://nbank/index.html");
  },
  shopInventory: (value) => {
    browser.execute(`trigger('shopInventory', '${value}')`);
  },
  responsePreviewProduct: (success, errorMessage) => {
    browser.execute(
      `trigger('responsePreviewProduct', '${(success, errorMessage)}')`
    );
  },
  responseBuyProduct: (success, errorMessage) => {
    browser.execute(
      `trigger('responseBuyProduct', '${(success, errorMessage)}')`
    );
  },
  playerChat: (text) => {
    browser.execute(`trigger('onMessage', '${text}')`);
    mp.gui.chat.push(`You wrote '${text}' in chat.`);
  },
  onMessageFromServer: (value) => {
    browser.execute(`trigger('onMessage', '${value}')`);
  },
});

mp.events.add("buyProduct", (item, paymentType) => {
  mp.events.callRemote("buyProduct", item.id, item.variation, paymentType);
});

mp.events.add("showUrl", (url) => {
  mp.gui.chat.push(url);
});

// F2 - trigger cursor
mp.keys.bind(0x71, true, () => {
  let state = !mp.gui.cursor.visible;
  mp.gui.cursor.show(state, state);
});

// F3 - open shop
mp.keys.bind(0x72, true, () => {
  browser.execute(`trigger('openShop')`);
  mp.console.logInfo("f3 triggered", true, true);
});

function myFunction() {
  alert("doing something!");
}
