import React, { useState } from "react";
import Layout from "../Layout/Layout";
import ShopBox from "../ShopBox/ShopBox";
import ShopNavigationItem from "../ShopNavigationItem/ShopNavigationItem";
import "./ClothingStore.scss";

const ClothingStore = () => {
  const [selectedNavigationItem, setSelectedNavigationItem] = useState("");
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  if (initialLoad) {
    EventManager.on("openShop", () => setIsShopOpen(true));

    EventManager.on("onMessage", ({ value }) => {
      setMessage(value);
    });

    EventManager.on("shopInventory", ({ value }) => {
      console.log("shopInventory", value);
    });

    EventManager.on("responsePreviewProduct", ({ success, errorMessage }) => {
      console.log("responsePreviewProduct", success, errorMessage);
    });

    EventManager.on("responseBuyProduct", ({ success, errorMessage }) => {
      console.log("responseBuyProduct", success, errorMessage);
    });

    setInitialLoad(false);
  }

  return (
    <Layout>
      <ShopBox
        closeShop={() => {
          setIsShopOpen(!isShopOpen);
          mp.trigger("toggleCursor");
        }}
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
