import Image from "next/image";
import React from "react";

import "./QR.scss";

type Props = {
  src: string;
  alt: string;
  href: string;
  className?: string;
  width?: number;
  height?: number;
};

const QR: React.FC<Props> = ({
  src,
  alt,
  href,
  className = "",
  width,
  height,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={`itp-c-qr_container ${className}`.trim()}
    >
      <Image
        className="itp-c-qr__image"
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </a>
  );
};

export default QR;
