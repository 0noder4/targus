import Icon from "/components/global/Icon/Icon";
import React from "react";

import "./Essentials.scss";

const Essentials = () => {
  return (
    <div className="itp-c-essentials">
      <div className="itp-c-catalouge_ref">
        <div className="itp-c-catalouge_ref__link">
          <a
            href="/docs/Katalog_Firm_30_ITP.pdf"
            target="_blank"
            rel="noreferrer"
          >
            zobacz katalog firm
          </a>
        </div>
      </div>
      <ul className="itp-c-time_and_date">
        <li className="itp-c-essential_info itp-c-essential_info--date">
          <Icon
            src="/icons/itp-icon--callendar.svg"
            alt="callendar"
            className="itp-c-essential_info__icon"
          />
          <label className="itp-c-essential_info__label">
            11-12 marca 2025
          </label>
        </li>
        <li className="itp-c-essential_info itp-c-essential_info--date">
          <Icon
            src="/icons/itp-icon--clock.svg"
            alt="clock"
            className="itp-c-essential_info__icon"
          />
          <label className="itp-c-essential_info__label">09:00 - 16:00</label>
        </li>
        <li className="itp-c-essential_info itp-c-essential_info--date">
          <Icon
            src="/icons/itp-icon--location.svg"
            alt="location"
            className="itp-c-essential_info__icon"
          />
          <label className="itp-c-essential_info__label">
            Gmach Główny Politechniki Warszawskiej
          </label>
        </li>
      </ul>
      <p className="itp-c-description">
        Już od ponad 30 lat Inżynierskie Targi Pracy dają studentkom i studentom
        szansę na znalezienie wymarzonej pracy. W dniach 11 i 12 marca 2025 roku
        w Gmachu Głównym Politechniki Warszawskiej tysiące przyszłych inżynierów
        będą miały okazję poznać oferty firm, skonsultować swoje CV oraz
        uczestniczyć w warsztatach przygotowanych przez naszych Partnerów. 
      </p>
    </div>
  );
};

export default Essentials;
