import React from "react";
import "./Button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  type?: "submit";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  disabled = false,
  className = "",
  type,
  children,
  ...props
}) => {
  return (
    <button
      className={`itp-c-button itp-c-button--${variant} ${className}`.trim()}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
Button.displayName = "Button";

export default Button;
