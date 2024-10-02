import Image from "next/image";
import Link from "next/link";
import React from "react";

import "./Header.scss";

const Header = () => {
  return (
    <header className="itp-c-header">
      <figure>
        <Image
          src="/images/logo_horizontal--dark.svg"
          alt="Logo Inżynierskich Targów Pracy"
          className="itp-c-header__logo"
          width={200}
          height={200}
        />
        <figcaption></figcaption>
      </figure>
      <nav>
        <ul className="itp-c-header__navigation">
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
            <Link href={"/#contact"} className="itp-c-link--main">
              Strefa Firm
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
