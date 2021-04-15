import React, { useLayoutEffect, useState } from "react";
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
  const [isShopOpen, setIsShopOpen] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);
  const [shopData, setShopData] = useState(shopResponseMock);
  const [paymentType, setPaymentType] = useState("Bar");
  const [selectedItems, setSelectedItems] = useState([]);
  const [shopCategories, setshopCategories] = useState([]);

  const data = defaultDataByShop[shopData.Name];

  if (initialLoad) {
    setShopData(shopResponseMock);

    EventManager.on("openShop", () => setIsShopOpen(true));

    EventManager.on("shopInventory", (value) => {
      setShopData(JSON.parse(value));
      console.log("shop data", JSON.parse(value));
    });

    EventManager.on("responsePreviewProduct", ({ success, errorMessage }) => {
      console.log("responsePreviewProduct", success, errorMessage);
    });

    EventManager.on("responseBuyProduct", ({ success, errorMessage }) => {
      console.log("responseBuyProduct", success, errorMessage);
    });

    setInitialLoad(false);
  }

  useLayoutEffect(() => {
    shopData.Products.forEach((product) => {
      if (!shopCategories.includes(product.Type)) {
        setshopCategories([...shopCategories, product.Type]);
      }
    });
  }, [shopData.Products]);

  return (
    <Layout>
      <ShopBox
        closeShop={() => {
          setIsShopOpen(!isShopOpen);
          mp.trigger("toggleCursor");
        }}
        title={data ? data.name : "no name"}
        image={data ? data.picture : "no image"}
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
