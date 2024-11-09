import React from "react";
import "./Button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`itp-c-button itp-c-button--${variant} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
};
Button.displayName = "Button";

export default Button;
