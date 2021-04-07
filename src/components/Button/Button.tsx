/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './Button.scss';

interface ButtonInterface {
  text: string;
  type: 'submit' | 'button' | 'reset';
  halfWidth?: boolean;
  variant?: 'small' | 'big';
  inverted?: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonInterface> = ({
  halfWidth = false,
  variant,
  text,
  type,
  inverted = false,
  onClick,
  ...props
}) => {
  console.log(props);

  return (
    <button
      className={`button ${type} ${halfWidth && 'half-width'} ${
        inverted && 'inverted'
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
