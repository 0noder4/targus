import React from "react";
import Image, { StaticImageData } from "next/image";

import "./Partner.scss";

type Props = {
  logo: StaticImageData;
  description: string;
  type?: string;
};

const Partner = ({ logo, description, type = "default" }: Props) => {
  return (
    <div className={`itp-c-partner-container itp-c-partner--${type}`}>
      <figure>
        <Image src={logo} alt={description} className="itp-c-partner__logo" />
      </figure>
    </div>
  );
};

export default Partner;
