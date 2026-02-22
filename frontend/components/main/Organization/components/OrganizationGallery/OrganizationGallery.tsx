"use client";

import React, { useState } from "react";

import { getBackendImageUrl } from "/lib/api/navigateBackend";
import type { Image as ImageType } from "/interfaces/Image";

import "./OrganizationGallery.scss";

const STACK_OFFSET_PX = 20;
const STACK_SCALE_DELTA = 0.02;

type Props = {
  images: ImageType[];
};

const getImageSrc = (url: string): string => {
  if (url.startsWith("http") || url.startsWith("/_next")) return url;
  return getBackendImageUrl(url, true);
};

const OrganizationGallery = ({ images }: Props) => {
  const [topIndex, setTopIndex] = useState(0);
  const n = images.length;

  const handleNext = () => {
    setTopIndex((prev) => (prev + 1) % n);
  };

  const topImage = images[topIndex];
  const caption = topImage?.alternativeText;

  return (
    <div
      className="itp-c-organization-gallery"
      onClick={n > 1 ? handleNext : undefined}
      onKeyDown={
        n > 1
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleNext();
              }
            }
          : undefined
      }
      role={n > 1 ? "button" : undefined}
      tabIndex={n > 1 ? 0 : undefined}
      aria-label={n > 1 ? "Next image" : undefined}
    >
      <div className="itp-c-organization-gallery__stack">
        {images.map((img, i) => {
          const stackPosition = (i - topIndex + n) % n;
          const translateX = STACK_OFFSET_PX * stackPosition;
          const scale = 1 - STACK_SCALE_DELTA * stackPosition;
          const isTop = stackPosition === 0;
          const src = getImageSrc(img.url);
          const zIndex = 10 + (n - 1 - stackPosition);

          return (
            <div
              key={img.url}
              className={`itp-c-organization-gallery__card ${
                isTop ? "" : "itp-c-organization-gallery__card--behind"
              }`}
              style={{
                transform: `translateX(${translateX}px) scale(${scale})`,
                zIndex,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={img.alternativeText ?? ""}
                className="itp-c-organization-gallery__image"
              />
            </div>
          );
        })}
      </div>
      <div className="itp-c-organization-gallery__overlay" aria-hidden="true" />
      {caption && (
        <p className="itp-c-organization-gallery__caption">{caption}</p>
      )}
      {n > 1 && (
        <span
          className="itp-c-organization-gallery__arrow"
          aria-hidden
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M9 18l6-6-6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </div>
  );
};

export default OrganizationGallery;
