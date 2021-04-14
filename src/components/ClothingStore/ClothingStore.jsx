import React, { useState } from "react";
import Layout from "../Layout/Layout";
import ShopBox from "../ShopBox/ShopBox";
import ShopNavigationItem from "../ShopNavigationItem/ShopNavigationItem";
import EventManager from "../../helpers/EventsManager";
import "./ClothingStore.scss";

const ClothingStore = () => {
  const [selectedNavigationItem, setSelectedNavigationItem] = useState("");
  const [playerData, setPlayerData] = useState("test kappa");
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [message, setMessage] = useState("");

  EventManager.addHandler("openShop", () => {
    setIsShopOpen(!isShopOpen);
  });

  EventManager.addHandler("onMessage", (text) => {
    setMessage(text);
    setPlayerData("");
  });

  return (
    <Layout>
      <div>{playerData}</div>
      <div>{message}</div>
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
