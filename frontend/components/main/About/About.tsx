import React from "react";
import Banner from "./components/Banner/Banner";

import "./About.scss";
import Essentials from "./components/Essentials/Essentials";
import Offer from "./components/Offer/Offer";

const About = () => {
  return (
    <section className="itp-c-section--about">
      <Banner />
      <Essentials />
      <Offer />
    </section>
  );
};

export default About;
