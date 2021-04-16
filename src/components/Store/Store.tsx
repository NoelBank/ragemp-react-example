import React, { useEffect, useLayoutEffect, useState } from "react";
import Layout from "../Layout/Layout";
import ShopBox from "../ShopBox/ShopBox";
import ShopNavigationItem from "../ShopNavigationItem/ShopNavigationItem";
import { ShopResponse } from "../../mocked_data/shopResponse";
import "./Store.scss";

const defaultDataByShop = {
  Kleidungsladen: {
    name: "Kleidungsladen",
    image: "/assets/clothing.png",
  },
  Default: {
    name: "unbekannt",
    image: "https://source.unsplash.com/random/1080x720",
  },
};

const Store: React.FC = () => {
  const [selectedCategorie, setselectedCategorie] = useState("");
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const [shopData, setShopData] = useState<ShopResponse>();
  const [shopCategories, setshopCategories] = useState<string[]>();

  const { name, image } = defaultDataByShop[shopData?.Name ?? "Default"];

  useLayoutEffect(() => {
    EventManager.on("shopInventory", (value: string) => {
      setShopData(JSON.parse(value));
      console.log("load");

      setIsShopOpen(true);
    });

    EventManager.on("responsePreviewProduct", (response: string) => {
      console.log("responsePreviewProduct", response);
    });

    EventManager.on("responseBuyProduct", (response: string) => {
      console.log("responseBuyProduct", response);
    });

    setInitialLoad(false);
  }, []);

  useEffect(() => {
    (shopData?.Products ?? []).forEach((product) => {
      if (!shopCategories?.includes(product.Type)) {
        setshopCategories(() => [...(shopCategories ?? []), product.Type]);
      }
    });
  }, [shopData, shopCategories, setshopCategories]);

  return (
    <Layout>
      <ShopBox
        closeShop={() => {
          setIsShopOpen(!isShopOpen);
          mp.trigger("closeShop");
        }}
        title={name}
        image={image}
        isShopOpen={isShopOpen}
        products={shopData?.Products ?? []}
        productsByCategorie={(shopData?.Products ?? []).filter(
          (product) => product.Type === selectedCategorie
        )}
      >
        <div className="nav-items">
          {shopCategories?.map((categorie) => {
            return (
              <ShopNavigationItem
                iconVariant={categorie}
                isSelected={selectedCategorie === categorie}
                setSelected={() => setselectedCategorie(categorie)}
                name={categorie}
                key={categorie}
              />
            );
          })}
        </div>
      </ShopBox>
    </Layout>
  );
};
export default Store;
