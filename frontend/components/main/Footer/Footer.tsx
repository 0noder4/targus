import React from "react";

import "./Footer.scss";

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
    </footer>
  );
};

export default Footer;
