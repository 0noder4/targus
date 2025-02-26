import * as React from "react";
import styles from "./Card.module.scss";

type CardProps = {
  className?: string;
  type?: "light" | "dark";
  children?: React.ReactNode;
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", type = "dark", ...props }, ref) => (
    <div
      ref={ref}
      className={`${styles.card_container} ${styles[type]} ${className}`.trim()}
      {...props}
    />
  ),
);
Card.displayName = "Card";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className = "", ...props }, ref) => (
  <h3 ref={ref} className={`${styles.title} ${className}`.trim()} {...props} />
));
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`${styles.content} ${className}`.trim()}
    {...props}
  ></div>
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`${styles.footer} ${className}`.trim()}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardFooter, CardTitle, CardContent };
