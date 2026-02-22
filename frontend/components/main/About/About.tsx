import React from "react";
import Banner from "./components/Banner/Banner";

import "./About.scss";
import Essentials from "./components/Essentials/Essentials";
import Offer from "./components/Offer/Offer";
import type {
  AboutBanner,
  AboutEssentials,
  AboutOffer,
} from "/interfaces/sections/HomeSections";

interface AboutProps {
  bannerProps?: AboutBanner;
  essentialsProps?: AboutEssentials;
  offerProps?: AboutOffer;
}

const About = ({ bannerProps, essentialsProps, offerProps }: AboutProps) => {
  return (
    <section className="itp-main_section--about" id="about">
      <Banner {...(bannerProps ?? {})} />
      <Essentials {...(essentialsProps ?? {})} />
      <Offer {...(offerProps ?? {})} />
    </section>
  );
};

export default About;
