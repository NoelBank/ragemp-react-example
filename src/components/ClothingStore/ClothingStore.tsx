import React, { useEffect, useState } from "react";
import useKeypress from "../../hooks/useKeypress";
import Layout from "../Layout/Layout";
import ShopBox from "../ShopBox/ShopBox";
import ShopNavigationItem from "../ShopNavigationItem/ShopNavigationItem";
import "./ClothingStore.scss";

const ClothingStore: React.FC = () => {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [selectedNavigationItem, setSelectedNavigationItem] = useState("");
  const [playerData, setPlayerData] = useState("test kappa");
  const [serverDate, setServerData] = useState();

  useKeypress("F3", () => {
    setIsShopOpen(!isShopOpen);
    setPlayerData(() => JSON.stringify((window as any).mp));

    if (typeof (window as any).mp !== "undefined") {
      mp.events.callRemote("triggerInteraction");
    }
  });

  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    addEventListener("shopState", (value: any) => {
      setServerData(value);
    });
  }, []);

  return (
    <Layout>
      <div>{playerData}</div>
      <div>{serverDate}</div>
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
