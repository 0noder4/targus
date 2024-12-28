import Image from "next/image";
import Link from "next/link";
import React from "react";

import "./Header.scss";

import LOGO from "@/public/images/brand/itp-logo--horizontal--dark.svg";

const Header = () => {
  return (
    <header className="itp-main-header">
      <figure>
        <Link href="/">
          <Image
            src={LOGO}
            alt="Logo Inżynierskich Targów Pracy"
            className="itp-main-header__logo"
          />
        </Link>
        <figcaption></figcaption>
      </figure>
      <nav>
        <ul className="itp-main-header__navigation">
          <li>
            <Link href={"/#about"} className="itp-c-link--secondary">
              Informacje
            </Link>
          </li>
          <li>
            <Link href={"/#pdi"} className="itp-c-link--secondary">
              Plebiscyt
            </Link>
          </li>
          <li>
            <Link href={"/#contact"} className="itp-c-link--secondary">
              Kontakt
            </Link>
          </li>
          <li>
            <Link href={"/business"} className="itp-c-link--main">
              Strefa Firm
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
