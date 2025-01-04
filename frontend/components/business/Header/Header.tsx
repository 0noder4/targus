import Image from "next/image";
import Link from "next/link";
import React from "react";

import "./Header.scss";

import LOGO from "@/public/images/brand/itp-logo--horizontal--light.svg";

const Header = () => {
  return (
    <header className="itp-business-header">
      <nav>
        <ul className="itp-business-header__navigation">
          <li>
            <Link href={"/business/#stats"} className="itp-c-link--secondary">
              Liczby
            </Link>
          </li>
          <li>
            <Link href={"/#pdi"} className="itp-c-link--secondary">
              Plebiscyt PDI
            </Link>
          </li>
          <li>
            <Link href={"/business/#contact"} className="itp-c-link--main">
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
      <figure>
        <Link href="/">
          <Image
            src={LOGO}
            alt="Logo Inżynierskich Targów Pracy"
            className="itp-business-header__logo"
          />
        </Link>
        <figcaption></figcaption>
      </figure>
    </header>
  );
};

export default Header;
