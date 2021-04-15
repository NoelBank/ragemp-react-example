import React from "react";
import Button from "../Button/Button";
import ShopHeader from "../ShopHeader/ShopHeader";
import "./ShopBox.scss";

const ShopBox = ({
  closeShop,
  title,
  image,
  hasRobBadge,
  children,
  isShopOpen = false,
  products,
  paymentType,
  setPaymentType,
  selectedItems,
  setSelectedItems,
  price,
}) => {
  return (
    <div className={`shop-box-wrapper ${isShopOpen ? "shop-open" : ""}`}>
      <ShopHeader
        title={title}
        image={image}
        closeShop={closeShop}
        hasRobBadge={hasRobBadge}
      />
      <div className="shop-box">
        {children}

        <ul className="shop-box-item-list">
          {products.map((item) => {
            return (
              <li key={item.ID}>
                {item.Name} <br />
                <ul>
                  {item.Variants.map((variant) => {
                    return (
                      <li
                        key={variant}
                        style={{ backgroundColor: "greenyellow" }}
                        onClick={() => {
                          mp.trigger("logToChat", "hello world");

                          mp.trigger("previewProduct", item.ID, variant);
                        }}
                      >
                        {variant}
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>

        <div className="shop-box-footer">
          <div className="shop-box-payment">
            <div>
              <Button
                onClick={() => setPaymentType("Bar")}
                inverted={paymentType !== "Bar"}
                text="Bar"
                type="button"
                halfWidth
              />
              <Button
                onClick={() => setPaymentType("Karte")}
                inverted={paymentType !== "Karte"}
                text="Karte"
                type="button"
                halfWidth
              />
            </div>
            <Button
              onClick={() => {
                if (typeof window.mp !== "undefined") {
                  selectedItems.forEach((item) => {
                    mp.trigger("buyProduct", item, paymentType);
                  });
                }
              }}
              text="Bezahlen"
              type="submit"
              variant="big"
            />
            <Button
              onClick={() => setSelectedItems([])}
              variant="small"
              text="Warenkorb Leeren"
              type="reset"
            />
          </div>
          <div className="shop-box-order">
            <h4 className="shop-box-order-headline">Quittung</h4>
            <hr />
            <p className="shop-box-order-info">
              Zahlungsart: {paymentType} <br />
              Gesammt: ${price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopBox;
