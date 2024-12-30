import React from "react";
import "./Button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  type?: "submit";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  type,
  ...props
}) => {
  return (
    <button
      className={`itp-c-button itp-c-button--${variant} ${className}`.trim()}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};
Button.displayName = "Button";

export default Button;
