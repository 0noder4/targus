"use client";

import React, { useRef } from "react";
import { useCountdown } from "/hooks/useCountdown";

import HeroImage from "./components/HeroImage/HeroImage";
import Icon from "/components/global/Icon/Icon";
import "./Hero.scss";

import dynamic from "next/dynamic";
import type { HomeHero } from "/interfaces/sections/HomeSections";
import { getBackendImageUrl } from "/lib/api/navigateBackend";

const Countdown = dynamic(() => import("./components/Countdown/Countdown"), {
  ssr: false,
});

const DEFAULT_EVENT_DATE = "2026-03-10T08:00:00";

const Hero = (props?: HomeHero) => {
  const upperTop = props?.upperTop ?? "napędź swoją";
  const upperBottom = props?.upperBottom ?? "karierę";
  const lowerTop = props?.lowerTop ?? "inżynierskie";
  const lowerBottom = props?.lowerBottom ?? "targi pracy";
  const eventDate = props?.eventDate
    ? new Date(props.eventDate)
    : new Date(DEFAULT_EVENT_DATE);
  const iconSrc = props?.icon?.url
    ? getBackendImageUrl(props.icon.url)
    : "/icons/itp-icon--cog.svg";
  const iconAlt = props?.icon?.alternativeText ?? "cog";

  // Refs definitions used for hero image scaling
  const ParentRef = useRef<HTMLInputElement>(null); // Ref of HERO section
  const UTRef = useRef<HTMLInputElement>(null);
  const UBRef = useRef<HTMLInputElement>(null);
  const LTRef = useRef<HTMLInputElement>(null);
  const LBRef = useRef<HTMLInputElement>(null);

  const timeLeft = useCountdown(eventDate);

  return (
    <section className="itp-main_section--hero" ref={ParentRef}>
      <h2 className="itp-l-upper_text_container">
        <span className="itp-c-landing_text" id="upper-top" ref={UTRef}>
          {upperTop}
        </span>
        <span
          className="itp-c-landing_text itp-c-landing_icon"
          id="upper-bottom"
          ref={UBRef}
        >
          {upperBottom}
          <Icon
            src={iconSrc}
            alt={iconAlt}
            className="itp-c-landing_text__icon"
            size={256}
          />
        </span>
      </h2>
      <h1 className="itp-l-lower_text_container">
        <span className="itp-c-landing_text" id="lower-top" ref={LTRef}>
          {lowerTop}
        </span>
        <span className="itp-c-landing_text" id="lower-bottom" ref={LBRef}>
          {lowerBottom}
        </span>
      </h1>
      <HeroImage
        ParentRef={ParentRef}
        UTRef={UTRef}
        UBRef={UBRef}
        LTRef={LTRef}
        LBRef={LBRef}
        backgroundImageUrl={
          props?.backgroundImage?.url
            ? getBackendImageUrl(props.backgroundImage.url, true)
            : undefined
        }
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
