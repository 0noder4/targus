import * as React from "react";
import "./Card.scss";

type CardProps = {
  className?: string;
  type?: "default" | "no_outline";
  children?: React.ReactNode;
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", type = "default", ...props }, ref) => (
    <div
      ref={ref}
      className={`itp-c-card itp-c-card--${type} ${className}`.trim()}
      {...props}
    />
  ),
);
Card.displayName = "Card";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className = "", ...props }, ref) => (
  <h3
    ref={ref}
    className={`itp-c-card__title ${className}`.trim()}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`itp-c-card__content ${className}`.trim()}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`itp-c-card__footer ${className}`.trim()}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardFooter, CardTitle, CardContent };
