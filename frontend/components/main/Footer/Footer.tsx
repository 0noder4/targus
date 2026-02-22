import React from "react";

import "./Footer.scss";
import QR from "/components/global/QR/QR";
import Link from "next/link";

import QR_LINKEDIN from "/public/images/qr_codes/itp-qr_code--in.svg";
import QR_FACEBOOK from "/public/images/qr_codes/itp-qr_code--fb.svg";
import QR_INSTAGRAM from "/public/images/qr_codes/itp-qr_code--ig.svg";
import type { Footer } from "/interfaces/sections/Footer";
import { getBackendImageUrl } from "/lib/api/navigateBackend";

interface FooterProps {
  className?: string;
  navigation?: Footer["navigation"];
  contact?: Footer["contact"];
  socials?: Footer["socials"];
}

const Footer = ({ className, navigation, contact, socials }: FooterProps) => {
  const useCms =
    !!navigation?.navigationItems?.length && !!contact && !!socials?.length;

  return (
    <footer className={`itp-main-footer ${className ?? ""}`.trim()} id="contact">
      <div className="itp-c-footer__section itp-c-footer__section--nav">
        <h3 className="itp-c-footer__section__header">MENU</h3>
        <nav className="itp-c-footer__section__body">
          <ul>
            {useCms
              ? navigation!.navigationItems.map((item) => (
                  <li key={item.link.url}>
                    <Link href={item.link.url}>{item.link.label}</Link>
                  </li>
                ))
              : [
                  <li key="about">
                    <Link href="/#about">Informacje</Link>
                  </li>,
                  <li key="pdi">
                    <Link href="/#pdi">Ankieta PDI</Link>
                  </li>,
                  <li key="business">
                    <Link href="/business">Strefa Firm</Link>
                  </li>,
                ]}
          </ul>
        </nav>
      </div>
      <div className="itp-c-footer__section itp-c-footer__section--contact">
        <h3 className="itp-c-footer__section__header">Kontakt</h3>
        <div className="itp-c-footer__section__body">
          <ul>
            <li>{useCms ? contact!.phone : "+48 22 234 50 23"}</li>
            <li>
              <a
                href={`mailto:${useCms ? contact!.email : "best@best.warszawa.pl"}`}
              >
                {useCms ? contact!.email : "BEST@BEST.warszawa.pl"}
              </a>
            </li>
            <li>
              {useCms ? (
                contact!.adress
              ) : (
                <>
                  Pl. Politechniki 1 pok. <br /> 142 00-661 Warszawa
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="itp-c-footer__section itp-c-footer__section--socials">
        <h3 className="itp-c-footer__section__header">Socials</h3>
        <div className="itp-c-footer__section__body">
          <ul>
            {useCms
              ? socials!.map((social) => (
                  <li key={social.link.url}>
                    <QR
                      src={getBackendImageUrl(social.image.url)}
                      href={social.link.url}
                      alt={social.image.alternativeText ?? ""}
                      className="itp-c-qr_code"
                      width={social.image.width}
                      height={social.image.height}
                    />
                  </li>
                ))
              : [
                  <li key="fb">
                    <QR
                      src={QR_FACEBOOK}
                      href="https://www.facebook.com/InzynierskieTargiPracy"
                      alt="Inżynierskie Targi Pracy: Facebook"
                      className="itp-c-qr_code"
                    />
                  </li>,
                  <li key="in">
                    <QR
                      src={QR_LINKEDIN}
                      href="https://www.linkedin.com/company/engineeringjobfair-"
                      alt="Inżynierskie Targi Pracy: LinkedIn"
                      className="itp-c-qr_code"
                    />
                  </li>,
                  <li key="ig">
                    <QR
                      src={QR_INSTAGRAM}
                      href="https://www.instagram.com/inzynierskie_targi_pracy/"
                      alt="Inżynierskie Targi Pracy: Instagram"
                      className="itp-c-qr_code"
                    />
                  </li>,
                ]}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
