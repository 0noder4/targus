import React from "react";
import { ctaContent } from "../../../constants/poland";
import "./CTASection.scss";

const CTASection = () => {
  return (
    <section className="poland-cta">
      <div className="poland-cta__container">
        <div className="poland-cta__header">
          <h2 className="poland-cta__title">{ctaContent.title}</h2>
          {ctaContent.subtitles.map((subtitle, index) => (
            <p key={index} className="poland-cta__subtitle">
              {subtitle}
            </p>
          ))}
        </div>

        <div className="poland-cta__features">
          {ctaContent.features.map((feature) => (
            <div key={feature.title} className="poland-cta__feature">
              <h3 className="poland-cta__feature-title">{feature.title}</h3>
              <p className="poland-cta__feature-text">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
