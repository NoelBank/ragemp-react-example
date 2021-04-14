import React from "react";
import ReactDOM from "react-dom";
import ClothingStore from "./components/ClothingStore/ClothingStore";
import EventManager from "./EventsManager";
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

ReactDOM.render(<ClothingStore />, document.getElementById("app"));
