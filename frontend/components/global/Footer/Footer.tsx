import React from "react";

import "./Footer.scss";
import QR from "/components/global/QR/QR";
import Link from "next/link";

import type { Footer } from "/interfaces/sections/Footer";
import navigateBackend from "../../../lib/api/navigateBackend";

const Footer = ({ navigation, contact, socials }: Footer) => {
  return (
    <footer className="itp-main-footer" id="contact">
      <div className="itp-c-footer__section itp-c-footer__section--nav">
        <h3 className="itp-c-footer__section__header">MENU</h3>
        <nav className="itp-c-footer__section__body">
          <ul>
            {navigation.navigationItems.map((navigationItem) => (
              <li key={navigationItem.link.internalName}>
                <Link href={navigationItem.link.url}>
                  {navigationItem.link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="itp-c-footer__section itp-c-footer__section--contact">
        <h3 className="itp-c-footer__section__header">Kontakt</h3>
        <div className="itp-c-footer__section__body">
          <ul>
            <li>{contact.phone}</li>
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>{contact.adress}</li>
          </ul>
        </div>
      </div>
      <div className="itp-c-footer__section itp-c-footer__section--socials">
        <h3 className="itp-c-footer__section__header">Socials</h3>
        <div className="itp-c-footer__section__body">
          <ul>
            {socials.map((social) => (
              <li key={social.link.internalName}>
                <QR
                  src={navigateBackend(social.image.url)}
                  href={social.link.url}
                  alt={social.image.alternativeText}
                  className="itp-c-qr_code"
                  width={social.image.width}
                  height={social.image.height}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
