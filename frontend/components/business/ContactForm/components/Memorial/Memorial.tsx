import React from "react";
import "./Memorial.scss";

const Memorial = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`itp-c-memorial ${className}`.trim()} {...props} />
));
Memorial.displayName = "Memorial";

const MemorialContent = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className = "", ...props }, ref) => (
  <h3
    ref={ref}
    className={`itp-c-memorial__content ${className}`.trim()}
    {...props}
  />
));
MemorialContent.displayName = "MemorialContent";

const MemorialAuthor = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className = "", ...props }, ref) => (
  <h3
    ref={ref}
    className={`itp-c-memorial__author ${className}`.trim()}
    {...props}
  />
));
MemorialAuthor.displayName = "MemorialAuthor";

export { Memorial, MemorialContent, MemorialAuthor };
