let browser;
let mp;

mp.events.add("guiReady", () => {
  browser = mp.browsers.new("package://build/index.html");
});

// Handle event from server and send data to react app
mp.events.add("shopInventory", (value) => {
  browser.execute(`trigger('shopState', '${value}')`);
});

// F12 - trigger cursor
mp.keys.bind(0x7b, true, () => {
  let state = !mp.gui.cursor.visible;
  mp.gui.cursor.show(state, state);
});
