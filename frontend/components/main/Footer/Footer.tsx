import React from "react";

import "./Footer.scss";
import QR from "@/components/global/QR/QR";

const Footer = () => {
  return (
    <footer className="itp-c-footer">
      <div className="itp-c-footer-section itp-c-footer-nav">
        <h2 className="itp-c-footer-section__header">MENU</h2>
        <nav className="itp-c-footer-section__body">
          <ul>
            <li>
              <a>Informacje</a>
            </li>
            <li>
              <a>Ankieta PDI</a>
            </li>
            <li>
              <a>Strefa Firm</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="itp-c-footer-section itp-c-footer-contact">
        <h2 className="itp-c-footer-section__header">Kontakt</h2>
        <div className="itp-c-footer-section__body">
          <ul>
            <li>+48 22 234 50 23</li>
            <li>
              <a href="mailto:best@best.warszawa.pl">best@best.warszawa.pl</a>
            </li>
            <li>Pl. Politechniki 1 pok. 142 00-661 Warszawa</li>
          </ul>
        </div>
      </div>
      <div className="itp-c-footer-section itp-c-footer-socials">
        <h2 className="itp-c-footer-section__header">Socials</h2>
        <div className="itp-c-footer-section__body">
          <ul>
            <li>
              <QR
                src="/images/qr_codes/itp-qr_code--fb.svg"
                href="https://www.facebook.com/InzynierskieTargiPracy"
                alt="Inżynierskie Targi Pracy: Facebook"
                className="itp-c-qr_code"
              />
            </li>
            <li>
              <QR
                src="/images/qr_codes/itp-qr_code--in.svg"
                href="https://www.linkedin.com/company/engineeringjobfair"
                alt="Inżynierskie Targi Pracy: LinkedIn"
                className="itp-c-qr_code"
              />
            </li>
            <li>
              <QR
                src="/images/qr_codes/itp-qr_code--ig.svg"
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
