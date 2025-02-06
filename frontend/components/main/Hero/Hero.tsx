"use client";

import React, { useRef } from "react";
import { useCountdown } from "/hooks/useCountdown";

import HeroImage from "./components/HeroImage/HeroImage";
import Icon from "/components/global/Icon/Icon";
import "./Hero.scss";

import dynamic from "next/dynamic";

const Countdown = dynamic(() => import("./components/Countdown/Countdown"), {
  ssr: false,
});

const Hero = () => {
  // Refs definitions used for hero image scaling
  const ParentRef = useRef<HTMLInputElement>(null); // Ref of HERO section
  const UTRef = useRef<HTMLInputElement>(null);
  const UBRef = useRef<HTMLInputElement>(null);
  const LTRef = useRef<HTMLInputElement>(null);
  const LBRef = useRef<HTMLInputElement>(null);

  // Countdown logic
  const eventDate: Date = new Date(2025, 3, 11, 8, 0, 0);
  const timeLeft = useCountdown(eventDate);

  return (
    <section className="itp-main_section--hero" ref={ParentRef}>
      <span className="itp-l-upper_text_container">
        <h1 className="itp-c-landing_text" id="upper-top" ref={UTRef}>
          napędź swoją
        </h1>
        <h1
          className="itp-c-landing_text itp-c-landing_icon"
          id="upper-bottom"
          ref={UBRef}
        >
          karierę
          <Icon
            src="/icons/itp-icon--cog.svg"
            alt="cog"
            className="itp-c-landing_text__icon"
          />
        </h1>
      </span>
      <span className="itp-l-lower_text_container">
        <h1 className="itp-c-landing_text" id="lower-top" ref={LTRef}>
          inżynierskie
        </h1>
        <h1 className="itp-c-landing_text" id="lower-bottom" ref={LBRef}>
          targi pracy
        </h1>
      </span>
      <HeroImage
        ParentRef={ParentRef}
        UTRef={UTRef}
        UBRef={UBRef}
        LTRef={LTRef}
        LBRef={LBRef}
      />
      <Countdown
        timeLeft={timeLeft}
        ParentRef={ParentRef}
        UTRef={UTRef}
        UBRef={UBRef}
      />
    </section>
  );
};

export default Hero;
