"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Icon from "/components/global/Icon/Icon";

import "./Header.scss";

import MENU from "/public/icons/itp-icon--menu.svg";
import MENU_LIGHT from "/public/icons/itp-icon--menu--light.svg";
import type { Header } from "/interfaces/header";
import navigateBackend from "/lib/navigateBackend";

const Header = ({ internalName, logo, navigation }: Header) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <header className={`itp-header itp-header--${internalName}`.trim()}>
      <figure>
        <Link href="/">
          <Image
            src={navigateBackend(logo.url)}
            alt={logo.alternativeText}
            width={logo.width}
            height={logo.height}
            className="itp-header__logo"
          />
        </Link>
      </figure>
      <nav className="itp-header__navigation__container">
        <Icon
          src={internalName == "businessHeader" ? MENU_LIGHT : MENU}
          alt="menu"
          onClick={() => {
            setCollapsed(!collapsed);
          }}
          className="itp-header__navigation__mobile_dropdown"
        />
        <ul
          className={`itp-header__navigation ${collapsed ? "collapsed" : ""}`.trim()}
        >
          {navigation.navigationItems.map((item) => (
            <li
              key={item.link.url}
              className={`itp-c-link ${item.important ? "itp-c-link--main" : ""}`.trim()}
            >
              <Link href={item.link.url} target={`_${item.link.target}`}>
                {item.link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
