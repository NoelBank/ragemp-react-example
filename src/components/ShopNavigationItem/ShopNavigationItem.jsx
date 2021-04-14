/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import Icon from "../Icon/Icon";
import "./ShopNavigationItem.scss";

const ShopNavigationItem = ({ name, iconVariant, isSelected, setSelected }) => (
  <div
    className={`shop-navigation-item ${
      isSelected && "shop-navigation-item-selected"
    }`}
    data-name={name}
    onClick={() => setSelected(name)}
  >
    <Icon variant={iconVariant} />
  </div>
);

export default ShopNavigationItem;
