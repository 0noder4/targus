"use client";

import Image from "next/image";
import React from "react";

import "./Icon.scss";

type Props = {
  src: string;
  alt?: string;
  className?: string;
  onClick?: () => void;
  /** Pixel width (for square icons, use `size` instead) */
  width?: number;
  /** Pixel height (for square icons, use `size` instead) */
  height?: number;
  /** Shorthand for square icons: sets both width and height */
  size?: number;
};

const DEFAULT_SIZE = 32;

const Icon: React.FC<Props> = ({
  src,
  alt = "",
  className = "",
  onClick = () => {},
  width,
  height,
  size,
}) => {
  const w = width ?? size ?? DEFAULT_SIZE;
  const h = height ?? size ?? DEFAULT_SIZE;
  const srcStr = typeof src === "string" ? src : (src as { src?: string })?.src ?? "";
  const isSvg = srcStr.endsWith(".svg");

  return (
    <figure className="itp-c-icon-container">
      <Image
        className={`itp-c-icon ${className}`.trim()}
        src={src}
        alt={alt}
        width={w}
        height={h}
        unoptimized={isSvg}
        onClick={() => {
          onClick();
        }}
      />
    </figure>
  );
};

export default Icon;
