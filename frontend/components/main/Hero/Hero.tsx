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
  const eventDate: Date = new Date("2026-03-10T08:00:00");
  const timeLeft = useCountdown(eventDate);

  return (
    <section className="itp-main_section--hero" ref={ParentRef}>
      <h2 className="itp-l-upper_text_container">
        <span className="itp-c-landing_text" id="upper-top" ref={UTRef}>
          napędź swoją
        </span>
        <span
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
        </span>
      </h2>
      <h1 className="itp-l-lower_text_container">
        <span className="itp-c-landing_text" id="lower-top" ref={LTRef}>
          inżynierskie
        </span>
        <span className="itp-c-landing_text" id="lower-bottom" ref={LBRef}>
          targi pracy
        </span>
      </h1>
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
