import React from "react";

import "./Hero.scss";
import Aside from "./components/Aside/Aside";

import FOCUS from "/public/figures/itp-figure--business_focus.svg";
import BARCODE from "/public/figures/itp-figure--barcode.svg";
import Image from "next/image";
import Markdown from "react-markdown";
import type { BusinessHero } from "/interfaces/sections/BusinessSections";
import { getBackendImageUrl } from "/lib/api/navigateBackend";
import { formatRichText } from "/lib/formatRichText";

const DEFAULT_DATE = "10-11/03\n2026";
const DEFAULT_HEADING = "odkrywamy\nnowe talenty";

const Hero = (props?: BusinessHero) => {
  const date = props?.date ?? DEFAULT_DATE;
  const heading = props?.heading ?? DEFAULT_HEADING;
  const asideLetters = props?.asideLetters;
  const barcodeImage = props?.barcodeImage;
  const focusImage = props?.focusImage;
  const barcodeUrl = barcodeImage?.url;
  const focusUrl = focusImage?.url;

  const toImageSrc = (url: string) =>
    getBackendImageUrl(url.startsWith("http") ? new URL(url).pathname : url, true);

  const dateParts = date.split("\n");
  const barcodeSrc = barcodeUrl ? toImageSrc(barcodeUrl) : BARCODE;
  const focusSrc = focusUrl ? toImageSrc(focusUrl) : FOCUS;

  return (
    <section className="itp-business_section--hero">
      <Aside letters={asideLetters} />
      <div className="itp-c-hero__focus">
        <label className="itp-c-hero__focus__tl">
          <span>
            {dateParts[0]}
            {dateParts[1] && (
              <>
                <br />
                {dateParts[1]}
              </>
            )}
          </span>
          <Image
            src={barcodeSrc}
            alt={barcodeImage?.alternativeText ?? "Barcode"}
            {...(barcodeUrl && { unoptimized: true, width: 100, height: 100 })}
          />
        </label>
        <figure className="itp-c-hero__focus__figure">
          <Image
            src={focusSrc}
            alt={focusImage?.alternativeText ?? "Business focus"}
            {...(focusUrl && { unoptimized: true, width: 400, height: 400 })}
          />
        </figure>
        <h1 className="itp-c-hero__focus__br">
          <Markdown components={{ p: "span" }}>
            {formatRichText(heading)}
          </Markdown>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
