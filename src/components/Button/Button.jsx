/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import "./Button.scss";

const Button = ({
  halfWidth = false,
  variant,
  text,
  type,
  inverted = false,
  onClick,
  ...props
}) => {
  return (
    <button
      className={`button ${type} ${halfWidth && "half-width"} ${
        inverted && "inverted"
      } ${variant} `}
      onClick={() => onClick()}
      // eslint-disable-next-line react/button-has-type
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
