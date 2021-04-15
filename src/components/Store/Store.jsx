import React, { useState } from "react";
import Layout from "../Layout/Layout";
import ShopBox from "../ShopBox/ShopBox";
import ShopNavigationItem from "../ShopNavigationItem/ShopNavigationItem";
import shopResponseMock from "../../mocked_data/shopResponse";
import "./Store.scss";

const defaultDataByShop = {
  Kleidungsladen: {
    name: "Kleidungsladen",
    picture: "/assets/clothing.png",
  },
};

const Store = () => {
  const [selectedCategorie, setselectedCategorie] = useState("");
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const [shopData, setShopData] = useState(shopResponseMock);
  const [paymentType, setPaymentType] = useState("Bar");
  const [selectedItems, setSelectedItems] = useState([]);
  const shopCategories = [];

  const data = defaultDataByShop[shopData.Name];

  if (initialLoad) {
    setShopData(shopResponseMock);

    EventManager.on("openShop", () => setIsShopOpen(true));

    EventManager.on("shopInventory", (value) => {
      setShopData(value);
    });

    EventManager.on("responsePreviewProduct", ({ success, errorMessage }) => {
      console.log("responsePreviewProduct", success, errorMessage);
    });

    EventManager.on("responseBuyProduct", ({ success, errorMessage }) => {
      console.log("responseBuyProduct", success, errorMessage);
    });

    setInitialLoad(false);
  }

  if (shopData.Products) {
    console.log(shopData);
    shopData.Products.forEach((product) => {
      if (!shopCategories.includes(product.Type)) {
        shopCategories.push(product.Type);
      }
    });
  }

  return (
    <Layout>
      <ShopBox
        closeShop={() => {
          setIsShopOpen(!isShopOpen);
          mp.trigger("toggleCursor");
        }}
        title={data.name ?? "no name"}
        image={data.picture ?? "no image"}
        isShopOpen={isShopOpen}
        paymentType={paymentType}
        setPaymentType={setPaymentType}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        products={(shopData.Products || []).filter(
          (product) => product.Type === selectedCategorie
        )}
        price="1200"
      >
        <div className="nav-items">
          {shopCategories.map((categorie) => {
            return (
              <ShopNavigationItem
                iconVariant={categorie}
                isSelected={selectedCategorie === categorie}
                setSelected={setselectedCategorie}
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
