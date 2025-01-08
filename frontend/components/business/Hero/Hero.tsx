import React from "react";

import "./Hero.scss";
import Aside from "./components/Aside/Aside";

import FOCUS from "/public/figures/itp-figure--business_focus.svg";
import BARCODE from "/public/figures/itp-figure--barcode.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="itp-business_section--hero">
      <Aside />
      <div className="itp-c-hero__focus">
        <label className="itp-c-hero__focus__tl">
          <span>
            11/13/
            <br />
            2025
          </span>
          <Image src={BARCODE} alt="Barcode" />
        </label>
        <figure className="itp-c-hero__focus__figure">
          <Image src={FOCUS} alt="Business focus" />
        </figure>
        <label className="itp-c-hero__focus__br">
          odkrywamy <br /> nowe talenty
        </label>
      </div>
    </section>
  );
};

export default Hero;
