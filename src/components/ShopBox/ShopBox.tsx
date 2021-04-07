import React from 'react';
import ShopHeader from '../ShopHeader/ShopHeader';
import './ShopBox.scss';

interface ShopBoxInterface {
  closeShop: () => void;
}

const ShopBox: React.FC<ShopBoxInterface> = ({ closeShop }) => (
  <div className="shop-box">
    <ShopHeader
      title="Kleidungsladen"
      image="https://i.ibb.co/3mZwRtJ/image-2.png"
      closeShop={closeShop}
    />
  </div>
);

export default ShopBox;
