import React, { useState } from "react";
import Button from "../Button/Button";
import ShopHeader, { ShopHeaderInterface } from "../ShopHeader/ShopHeader";
import "./ShopBox.scss";

interface ShopBoxInterface extends ShopHeaderInterface {
  items?: any[];
  isShopOpen?: boolean;
}

const ShopBox: React.FC<ShopBoxInterface> = ({
  closeShop,
  title,
  image,
  hasRobBadge,
  children,
  isShopOpen = false,
}) => {
  const [paymentType, setPaymentType] = useState("Bar");
  const [selectedItems, setSelectedItems] = useState([]);

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

        <div className="shop-box-item-list">
          LISTE aller Jacken in Kategorien
        </div>

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
                if (typeof (window as any).mp !== "undefined") {
                  // should buy via map?
                  (selectedItems || []).forEach((item) => {
                    mp.events.call("buyProduct", item);
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
              Gesammt: $1200
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopBox;