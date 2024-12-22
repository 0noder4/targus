import Image from "next/image";
import React from "react";

import "./QR.scss";

type Props = {
  src: string;
  alt: string;
  href: string;
  className?: string;
};

const QR: React.FC<Props> = ({ src, alt, href, className = "" }) => {
  return (
    <figure className={`itp-c-qr_container ${className}`.trim()}>
      <a href={href} target="_blank" rel="noopener">
        <Image
          className="itp-c-qr__image"
          src={src}
          alt={alt}
          width={0}
          height={0}
        />
      </a>
    </figure>
  );
};

export default QR;
