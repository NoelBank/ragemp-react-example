import classNames from "classnames";
import React from "react";
import "./Button.scss";

interface ButtonInterface {
  variant?: ButtonVariant;
  text: string;
  type: Buttontype;
  onClick: () => void;
  inverted?: boolean;
  halfWidth?: boolean;
}

export type ButtonVariant = "big" | "small";
export type Buttontype = "button" | "reset" | "submit";

const Button: React.FC<ButtonInterface> = ({
  halfWidth = false,
  variant,
  text,
  type,
  inverted = false,
  onClick,
}) => {
  return (
    <button
      className={classNames("button", type, variant, {
        ["half-width"]: halfWidth,
        ["inverted"]: inverted,
      })}
      onClick={() => onClick()}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
