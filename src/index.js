import React from "react";
import ReactDOM from "react-dom";
import ClothingStore from "./components/ClothingStore/ClothingStore";
import EventManager from "./helpers/EventsManager";
import "./style.scss";

EventManager.addHandler("shopInventory", (value) => {
  console.log("shopInventory", value);
});

EventManager.addHandler("responsePreviewProduct", (success, errorMessage) => {
  console.log("responsePreviewProduct", success, errorMessage);
});

EventManager.addHandler("responseBuyProduct", (success, errorMessage) => {
  console.log("responseBuyProduct", success, errorMessage);
});

ReactDOM.render(<ClothingStore />, document.getElementById("app"));
