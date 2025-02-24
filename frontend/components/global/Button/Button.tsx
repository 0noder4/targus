import React from "react";
import "./Button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  type?: "submit";
  disabled?: boolean;
}

interface LinkButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  type?: "submit";
  disabled?: boolean;
  href?: string;
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

export const LinkButton: React.FC<LinkButtonProps> = ({
  variant,
  disabled,
  className = "",
  type,
  href,
  children,
  ...props
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`itp-c-link_button ${className}`.trim()}
    >
      <Button variant={variant} type={type} disabled={disabled} {...props}>
        {children}
      </Button>
    </a>
  );
};
LinkButton.displayName = "LinkButton";

export default Button;
