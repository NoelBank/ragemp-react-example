import React, { useState } from "react";
import Layout from "../Layout/Layout";
import ShopBox from "../ShopBox/ShopBox";
import ShopNavigationItem from "../ShopNavigationItem/ShopNavigationItem";
import EventManager from "../../EventsManager";
import "./ClothingStore.scss";

const ClothingStore = () => {
  const [selectedNavigationItem, setSelectedNavigationItem] = useState("");
  const [playerData, setPlayerData] = useState("test kappa");
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [message, setMessage] = useState("");

  EventManager.on("openShop", () => {
    setIsShopOpen(!isShopOpen);
  });

  EventManager.on("onMessage", (value) => {
    alert("onMessage", value);
    setMessage(value);
  });

  return (
    <Layout>
      <div>{playerData}</div>
      <div>{message}</div>
      <button
        onClick={() => {
          let currentUrl = window.location.pathname;
          mp.trigger("showUrl", currentUrl);
        }}
      >
        KLICK HIER FÜR URL
      </button>
      <ShopBox
        closeShop={() => setIsShopOpen(!isShopOpen)}
        title="Kleidungsladen"
        image="/assets/clothing.png"
        isShopOpen={isShopOpen}
      >
        <div className="nav-items">
          <ShopNavigationItem
            iconVariant="hut"
            isSelected={selectedNavigationItem === "Hüte"}
            setSelected={setSelectedNavigationItem}
            name="Hüte"
          />
          <ShopNavigationItem
            iconVariant="shirt"
            name="T-Shirts"
            setSelected={setSelectedNavigationItem}
            isSelected={selectedNavigationItem === "T-Shirts"}
          />

          <ShopNavigationItem
            iconVariant="hose"
            name="Hose"
            setSelected={setSelectedNavigationItem}
            isSelected={selectedNavigationItem === "Hose"}
          />

          <ShopNavigationItem
            iconVariant="schuh"
            name="Schuhe"
            setSelected={setSelectedNavigationItem}
            isSelected={selectedNavigationItem === "Schuhe"}
          />

          <ShopNavigationItem
            iconVariant="tasche"
            name="Rücksäcke"
            setSelected={setSelectedNavigationItem}
            isSelected={selectedNavigationItem === "Rücksäcke"}
          />

          <ShopNavigationItem
            iconVariant="schmuck"
            name="Schmuck"
            setSelected={setSelectedNavigationItem}
            isSelected={selectedNavigationItem === "Schmuck"}
          />
        </div>
      </ShopBox>
    </Layout>
  );
};

export default ClothingStore;
