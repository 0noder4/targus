import Image from "next/image";
import React from "react";

import "./Icon.scss";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

const Icon: React.FC<Props> = ({ src, alt, className = "" }) => {
  return (
    <figure className="itp-c-icon-container">
      <Image
        className={`itp-c-icon ${className}`.trim()}
        src={src}
        alt={alt}
        width={0}
        height={0}
      />
    </figure>
  );
};

export default Icon;
