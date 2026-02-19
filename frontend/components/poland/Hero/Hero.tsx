import React from "react";
import { heroTitle } from "../../../constants/poland";
import "./Hero.scss";

const Hero = () => {
  const [line1, line2] = heroTitle.split("\n");

  return (
    <section className="poland-hero">
      <div className="poland-hero__container">
        <h1 className="poland-hero__title">
          {line1}
          <br />
          {line2}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
