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
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={`itp-c-qr_container ${className}`.trim()}
    >
      <Image className="itp-c-qr__image" src={src} alt={alt} />
    </a>
  );
};

export default QR;
