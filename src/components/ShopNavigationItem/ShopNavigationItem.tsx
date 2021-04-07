/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './ShopNavigationItem.scss';

interface ShopNavigationItemInterface {
  icon: React.ReactNode;
  name: string;
  isSelected: boolean;
  setSelected: (name: string) => void;
}

const ShopNavigationItem: React.FC<ShopNavigationItemInterface> = ({
  icon,
  name,
  isSelected,
  setSelected,
}) => (
  <div
    className={`shop-navigation-item ${
      isSelected && 'shop-navigation-item-selected'
    }`}
    data-name={name}
    onClick={() => setSelected(name)}
  >
    {icon}
  </div>
);

export default ShopNavigationItem;
