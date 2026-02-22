import React from "react";
import { PartnerHero } from "../../../interfaces/sections/ParterSections";
import { LinkButton } from "/components/global/Button/Button";
import ReactMarkdown from "react-markdown";

import styles from "./Hero.module.scss";

const Hero = ({
  internalName,
  mainHeroText,
  secondaryHeroText,
  cta,
}: PartnerHero) => {
  const formattedText = mainHeroText.replace(/\n/g, "  \n");

  return (
    <div className={styles.section}>
      <div className={styles.container} id={internalName}>
        <div className={styles.main_text}>
          <h1>
            <ReactMarkdown>{formattedText}</ReactMarkdown>
          </h1>
        </div>
        <div className={styles.flex}>
          <div className={styles.secondary_text}>
            <h1>{secondaryHeroText}</h1>
          </div>
          <div className={styles.call_to_action}>
            <LinkButton
              variant={cta.type}
              href={cta.link.url}
              target={`_${cta.link.target}`}
              disabled={cta.disabled}
            >
              {cta.link.label}
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
