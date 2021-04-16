import React from "react";
import "./ShopHeader.scss";

interface ShopHeaderInterface {
  title: string;
  image: string;
  closeShop: () => void;
  hasRobBadge?: boolean;
}

const ShopHeader: React.FC<ShopHeaderInterface> = ({
  title,
  image,
  closeShop,
  hasRobBadge = false,
}) => {
  const imageStyles = {
    backgroundImage: `linear-gradient(180deg, rgba(27, 86, 92, 0) -8.9%, #1B565C 148.73%), url(${image})`,
  };

  return (
    <div className="shop-header" style={imageStyles}>
      <div onClick={closeShop} className="shop-header-close">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.5389 0.264034C1.18685 -0.0880113 0.616077 -0.0880113 0.264033 0.264034C-0.0880111 0.616079 -0.0880111 1.18686 0.264033 1.5389L6.81189 8.08678L0.437585 14.4611C0.0855412 14.8131 0.0855408 15.3839 0.437585 15.736C0.789629 16.088 1.36041 16.088 1.71245 15.736L8.08675 9.36165L14.2875 15.5625C14.6396 15.9145 15.2104 15.9145 15.5624 15.5625C15.9145 15.2104 15.9145 14.6396 15.5624 14.2876L9.36162 8.08678L15.736 1.71241C16.088 1.36037 16.088 0.78959 15.736 0.437545C15.3839 0.0854995 14.8131 0.0854995 14.4611 0.437545L8.08675 6.81191L1.5389 0.264034Z"
            fill="white"
          />
        </svg>
      </div>
      <h1 className="shop-header-title">{title}</h1>
      {hasRobBadge && (
        <div
          className="shop-header-rob"
          onClick={() => {
            closeShop();
          }}
        >
          AUSRAUBEN
        </div>
      )}
    </div>
  );
};

export default ShopHeader;
