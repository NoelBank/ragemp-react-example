import React from "react";
import ReactDOM from "react-dom";
import ClothingStore from "./components/ClothingStore/ClothingStore";
import "./style.scss";

EventManager.on("shopInventory", (value) => {
  console.log("shopInventory", value);
});

EventManager.on("responsePreviewProduct", (success, errorMessage) => {
  console.log("responsePreviewProduct", success, errorMessage);
});

EventManager.on("responseBuyProduct", (success, errorMessage) => {
  console.log("responseBuyProduct", success, errorMessage);
});

EventManager.on("onMessage", (value) => {
  alert("onMessage", value);
  mp.gui.chat.push(`browser got '${value}'.`);
});

ReactDOM.render(<ClothingStore />, document.getElementById("app"));
