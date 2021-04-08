import React, { useState } from "react";
import useKeypress from "../hooks/useKeypress";
import "./global.scss";
import Layout from "./Layout/Layout";
import ShopBox from "./ShopBox/ShopBox";
import ShopNavigationItem from "./ShopNavigationItem/ShopNavigationItem";

const ClothingStore: React.FC = () => {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [selectedNavigationItem, setSelectedNavigationItem] = useState("");
  const [playerData, setPlayerData] = useState("test kappa");

  useKeypress("F3", () => {
    setIsShopOpen(!isShopOpen);
    setPlayerData(() => JSON.stringify((window as any).mp));

    if (typeof (window as any).mp !== "undefined") {
      mp.events.callRemote("triggerInteraction");
    }
  });

  return (
    <Layout>
      <div>{playerData}</div>
      <ShopBox
        closeShop={() => setIsShopOpen(false)}
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
