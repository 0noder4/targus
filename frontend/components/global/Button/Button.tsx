import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "orange";
  type?: "submit";
  disabled?: boolean;
}

interface LinkButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  type?: "submit";
  disabled?: boolean;
  href?: string;
  target?: string;
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
      className={
        `${styles.button}` + ` ${styles[variant]}` + ` ${className}`.trim()
      }
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
  target = "_blank",
  ...props
}) => {
  return (
    <a
      href={href}
      target={target}
      rel="noreferrer"
      className={
        `${styles.link_button_container}` + " " + ` ${className}`.trim()
      }
    >
      <Button variant={variant} type={type} disabled={disabled} {...props}>
        {children}
      </Button>
    </a>
  );
};
LinkButton.displayName = "LinkButton";

export default Button;
