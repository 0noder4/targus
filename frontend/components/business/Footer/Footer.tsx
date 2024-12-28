import React from "react";

import "./Footer.scss";
import QR from "@/components/global/QR/QR";
import Link from "next/link";

import QR_LINKEDIN from "@/public/images/qr_codes/itp-qr_code--in--negative.svg";
import QR_FACEBOOK from "@/public/images/qr_codes/itp-qr_code--fb--negative.svg";
import QR_INSTAGRAM from "@/public/images/qr_codes/itp-qr_code--ig--negative.svg";

const Footer = () => {
  return (
    <footer className="itp-business-footer" id="contact">
      <div className="itp-c-footer__section itp-c-footer__section--nav">
        <h3 className="itp-c-footer__section__header">MENU</h3>
        <nav className="itp-c-footer__section__body">
          <ul>
            <li>
              <Link href="/#about">Informacje</Link>
            </li>
            <li>
              <Link href="/#pdi">Ankieta PDI</Link>
            </li>
            <li>
              <Link href="/business">Strefa Firm</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="itp-c-footer__section itp-c-footer__section--contact">
        <h3 className="itp-c-footer__section__header">Kontakt</h3>
        <div className="itp-c-footer__section__body">
          <ul>
            <li>+48 22 234 50 23</li>
            <li>
              <a href="mailto:best@best.warszawa.pl">best@best.warszawa.pl</a>
            </li>
            <li>Pl. Politechniki 1 pok. 142 00-661 Warszawa</li>
          </ul>
        </div>
      </div>
      <div className="itp-c-footer__section itp-c-footer__section--socials">
        <h3 className="itp-c-footer__section__header">Socials</h3>
        <div className="itp-c-footer__section__body">
          <ul>
            <li>
              <QR
                src={QR_FACEBOOK}
                href="https://www.facebook.com/InzynierskieTargiPracy"
                alt="Inżynierskie Targi Pracy: Facebook"
                className="itp-c-qr_code"
              />
            </li>
            <li>
              <QR
                src={QR_LINKEDIN}
                href="https://www.linkedin.com/company/engineeringjobfair"
                alt="Inżynierskie Targi Pracy: LinkedIn"
                className="itp-c-qr_code"
              />
            </li>
            <li>
              <QR
                src={QR_INSTAGRAM}
                href="https://www.instagram.com/inzynierskie_targi_pracy/"
                alt="Inżynierskie Targi Pracy: Instagram"
                className="itp-c-qr_code"
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
