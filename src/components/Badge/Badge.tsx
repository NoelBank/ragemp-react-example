import classNames from "classnames";
import React from "react";
import "./Badge.scss";

interface BadgeInterface {
  text: string;
  className?: string;
}

const Badge: React.FC<BadgeInterface> = ({ text, className }) => {
  return <div className={classNames("badge", className)}>{text}</div>;
};

export default Badge;
