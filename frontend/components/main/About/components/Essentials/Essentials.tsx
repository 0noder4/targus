import Icon from "/components/global/Icon/Icon";
import React from "react";

import "./Essentials.scss";
import Link from "next/link";
import type { AboutEssentials } from "/interfaces/sections/HomeSections";

const DEFAULT_CATALOGUE_LABEL = "zobacz katalog firm";
const DEFAULT_DATE = "10-11 marca 2026";
const DEFAULT_TIME = "09:00 - 16:00";
const DEFAULT_LOCATION = "Gmach Główny Politechniki Warszawskiej";
const DEFAULT_DESCRIPTION =
  "Już od ponad 30 lat Inżynierskie Targi Pracy dają studentkom i studentom szansę na znalezienie wymarzonej pracy. W dniach 10 i 11 marca 2026 roku w Gmachu Głównym Politechniki Warszawskiej tysiące przyszłych inżynierów będą miały okazję poznać oferty firm, skonsultować swoje CV oraz uczestniczyć w warsztatach przygotowanych przez naszych Partnerów. ";

const Essentials = (props?: AboutEssentials) => {
  const catalogueLinkLabel =
    props?.catalogueLinkLabel ?? DEFAULT_CATALOGUE_LABEL;
  const date = props?.date ?? DEFAULT_DATE;
  const time = props?.time ?? DEFAULT_TIME;
  const location = props?.location ?? DEFAULT_LOCATION;
  const description = props?.description ?? DEFAULT_DESCRIPTION;

  return (
    <div className="itp-c-essentials">
      <div className="itp-c-catalouge_ref">
        <div className="itp-c-catalouge_ref__link">
          <Link href="/catalogue">{catalogueLinkLabel}</Link>
        </div>
      </div>
      <ul className="itp-c-time_and_date">
        <li className="itp-c-essential_info itp-c-essential_info--date">
          <Icon
            src="/icons/itp-icon--callendar.svg"
            alt="callendar"
            className="itp-c-essential_info__icon"
          />
          <h4 className="itp-c-essential_info__label">{date}</h4>
        </li>
        <li className="itp-c-essential_info itp-c-essential_info--date">
          <Icon
            src="/icons/itp-icon--clock.svg"
            alt="clock"
            className="itp-c-essential_info__icon"
          />
          <h4 className="itp-c-essential_info__label">{time}</h4>
        </li>
        <li className="itp-c-essential_info itp-c-essential_info--date">
          <Icon
            src="/icons/itp-icon--location.svg"
            alt="location"
            className="itp-c-essential_info__icon"
          />
          <h4 className="itp-c-essential_info__label">{location}</h4>
        </li>
      </ul>
      <p
        className="itp-c-description"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default Essentials;
