/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from "classnames";
import React from "react";
import Icon from "../Icon/Icon";
import "./ShopNavigationItem.scss";

interface ShopNavigationItemInterface {
  name: string;
  iconVariant: string;
  isSelected: boolean;
  setSelected: () => void;
}

const ShopNavigationItem: React.FC<ShopNavigationItemInterface> = ({
  name,
  iconVariant,
  isSelected,
  setSelected,
}) => (
  <div
    className={classNames("shop-navigation-item", {
      ["shop-navigation-item-selected"]: isSelected,
    })}
    onClick={() => setSelected()}
    data-name={name}
  >
    <Icon variant={iconVariant} />
  </div>
);

export default ShopNavigationItem;
