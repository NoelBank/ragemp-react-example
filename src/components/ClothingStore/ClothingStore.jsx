import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import ShopBox from "../ShopBox/ShopBox";
import ShopNavigationItem from "../ShopNavigationItem/ShopNavigationItem";
import "./ClothingStore.scss";

const ClothingStore = () => {
  const [selectedNavigationItem, setSelectedNavigationItem] = useState("");
  const [playerData, setPlayerData] = useState("player fallback");
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [message, setMessage] = useState("message fallback");
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    window.EventManager.on("openShop", () => {
      setIsShopOpen(!isShopOpen);
    });

    window.EventManager.on("onMessage", ({ value }) => {
      setMessage(value);
    });

    // EventManager.on("shopInventory", ({ value }) => {
    //   console.log("shopInventory", value);
    // });

    // EventManager.on("responsePreviewProduct", ({ success, errorMessage }) => {
    //   console.log("responsePreviewProduct", success, errorMessage);
    // });

    // EventManager.on("responseBuyProduct", ({ success, errorMessage }) => {
    //   console.log("responseBuyProduct", success, errorMessage);
    // });
    setMessage("has initial loaded!");

    setInitialLoad(false);
  }, []);

  return (
    <Layout>
      <div>{playerData}</div>
      <br />
      <div>{message}</div>
      <br />
      <div>loaded events {initialLoad}</div>
      <br />

      <button
        onClick={() => {
          let currentUrl = window.location.pathname;
          mp.trigger("showUrl", currentUrl);
          mp.trigger("logToChat", "click works");
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
