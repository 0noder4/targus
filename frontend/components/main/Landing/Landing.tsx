"use client";

import React, { useRef } from "react";

import "./Landing.scss";
import Mask from "./components/Mask";
import Icon from "@/components/global/Icon/Icon";

const Landing = () => {
  const ParentRef = useRef<HTMLInputElement>(null);
  const UTRef = useRef<HTMLInputElement>(null); // upper top reference etc.
  const UBRef = useRef<HTMLInputElement>(null);
  const LTRef = useRef<HTMLInputElement>(null);
  const LBRef = useRef<HTMLInputElement>(null);

  return (
    <section className="itp-l-landing" ref={ParentRef}>
      <span className="itp-l-upper_text_container">
        <div className="itp-c-landing_text" id="upper-top" ref={UTRef}>
          napędź swoją
        </div>
        <div className="itp-c-landing_text" id="upper-bottom" ref={UBRef}>
          karierę
          <Icon
            src="/images/icon_cog.svg"
            alt="cog"
            className="itp-c-landing_text__icon"
          />
        </div>
      </span>
      <span className="itp-l-lower_text_container">
        <div className="itp-c-landing_text" id="lower-top" ref={LTRef}>
          inżynierskie
        </div>
        <div className="itp-c-landing_text" id="lower-bottom" ref={LBRef}>
          targi pracy
        </div>
      </span>
      <Mask
        ParentRef={ParentRef}
        UTRef={UTRef}
        UBRef={UBRef}
        LTRef={LTRef}
        LBRef={LBRef}
      />
    </section>
  );
};

export default Landing;
