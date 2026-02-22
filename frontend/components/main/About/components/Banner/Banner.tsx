import React from "react";
import Markdown from "react-markdown";

import "./Banner.scss";
import type { AboutBanner } from "/interfaces/sections/HomeSections";
import { formatRichText } from "/lib/formatRichText";

const DEFAULT_SCROLLING_LABEL = "welcome to the future";
const DEFAULT_LEFT_TEXT = "setki zdobytych\nstanowisk";
const DEFAULT_RIGHT_TEXT = "30 lat\nhistorii";

const Banner = (props?: AboutBanner) => {
  const scrollingLabel = props?.scrollingLabel ?? DEFAULT_SCROLLING_LABEL;
  const leftText = props?.leftText ?? DEFAULT_LEFT_TEXT;
  const rightText = props?.rightText ?? DEFAULT_RIGHT_TEXT;

  return (
    <div className="itp-c-banner_container">
      <div className="itp-c-banner_label">
        {[...Array(10)].map((_, i) => (
          <span key={i}>{scrollingLabel}</span>
        ))}
      </div>
      <div className="itp-c-banner">
        <h2 className="itp-c-banner_text itp-c-banner_text--left">
          <Markdown components={{ p: "span" }}>{formatRichText(leftText)}</Markdown>
        </h2>
        <h2 className="itp-c-banner_text itp-c-banner_text--right">
          <Markdown components={{ p: "span" }}>{formatRichText(rightText)}</Markdown>
        </h2>
      </div>
    </div>
  );
};

export default Banner;
