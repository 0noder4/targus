"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Icon from "/components/global/Icon/Icon";

import "./Header.scss";

import LOGO from "/public/images/brand/itp-logo--horizontal--dark.svg";
import MENU from "/public/icons/itp-icon--menu.svg";

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

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
      <nav className="itp-main-header__navigation__container">
        <Icon
          src={MENU}
          alt="menu"
          onClick={() => {
            setCollapsed(!collapsed);
          }}
          className="itp-main-header__navigation__mobile_dropdown"
        />
        <ul
          className={`itp-main-header__navigation ${collapsed ? "collapsed" : ""}`.trim()}
        >
          <li className="itp-c-link itp-c-link--secondary">
            <Link href={"/#about"}>Informacje</Link>
          </li>
          <li className="itp-c-link itp-c-link--secondary">
            <Link href={"/#pdi"}>Plebiscyt</Link>
          </li>
          <li className="itp-c-link itp-c-link--secondary">
            <Link href={"/#contact"}>Kontakt</Link>
          </li>
          <li className="itp-c-link itp-c-link--main">
            <Link href={"/business"}>Strefa Firm</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
