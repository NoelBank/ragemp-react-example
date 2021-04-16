import React, { useState } from "react";
import { ProductsEntity } from "src/mocked_data/shopResponse";
import Badge from "../Badge/Badge";
import { SelectedItem } from "../ShopBox/ShopBox";
import "./ShopItem.scss";

interface ShopItemInterface {
  item: ProductsEntity;
  addItemToCart: (item: SelectedItem) => void;
  removeItemFromCart: (item: SelectedItem) => void;
  previousVariant: (
    item: ProductsEntity,
    currentVariantIndex: number
  ) => number;
  nextVariant: (item: ProductsEntity, currentVariantIndex: number) => number;
}

const ShopItem: React.FC<ShopItemInterface> = ({
  item,
  previousVariant,
  nextVariant,
  removeItemFromCart,
  addItemToCart,
}) => {
  const [currentVariantIndex, setCurrentVariantIndex] = useState(0);
  const [currentVariant, setCurrentVariant] = useState(0);

  const updateVariantIndex = (byNumber: number) => {
    if (item.Variants) {
      setCurrentVariantIndex(byNumber);
      const variant = item.Variants[byNumber];
      setCurrentVariant(variant);

      mp.trigger("previewProduct", item.ID, variant);
    }
  };

  return (
    <tr className={"shop-item"}>
      <td>{item.Name}</td>
      {item.Variants && (
        <td>
          <div className="shop-item-variant-selector">
            <div
              onClick={() =>
                updateVariantIndex(previousVariant(item, currentVariantIndex))
              }
            >
              {"<-"}
            </div>
            <div>Variante {currentVariant.toString()}</div>
            <div
              onClick={() =>
                updateVariantIndex(nextVariant(item, currentVariantIndex))
              }
            >
              {"->"}
            </div>
          </div>
        </td>
      )}
      <td>
        <div className="shop-item-badge">
          <Badge text={`$ ${item.Price}`} />
        </div>
      </td>
      <td>
        <div className="shop-item-cart-info">
          <div
            onClick={() => addItemToCart({ ...item, variant: currentVariant })}
          >
            (+)
          </div>
          <div
            onClick={() =>
              removeItemFromCart({ ...item, variant: currentVariant })
            }
          >
            (-)
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ShopItem;
