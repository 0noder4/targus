import * as React from "react";
import "./Card.scss";

// Helper function to combine classNames
const combineClassNames = (
  baseClass: string,
  additionalClass?: string,
): string => {
  return additionalClass ? `${baseClass} ${additionalClass}` : baseClass;
};

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={combineClassNames("itp-c-card", className)}
    {...props}
  />
));
Card.displayName = "Card";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={combineClassNames("itp-c-card__title", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={combineClassNames("itp-c-card__content", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={combineClassNames("itp-c-card__footer", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardFooter, CardTitle, CardContent };
