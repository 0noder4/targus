import React from "react";
import Link from "next/link";
import { cityPins } from "../../../constants/poland";
import "./PolandMap.scss";

interface PolandMapProps {
  activeCity: "gdansk" | "krakow" | "warszawa";
}

const PolandMap = ({ activeCity }: PolandMapProps) => {
  return (
    <div className="poland-map">
      <img
        src="/images/poland/map-outline.svg"
        alt="Mapa Polski"
        className="poland-map__image"
      />
      {cityPins.map((city) => (
        <Link
          key={city.slug}
          href={`/poland/${city.slug}`}
          className={`poland-map__pin ${activeCity === city.slug ? "poland-map__pin--active" : ""}`}
          style={{ top: city.top, left: city.left }}
        >
          <img
            src="/images/poland/pin-marker.svg"
            alt=""
            className="poland-map__pin-icon"
          />
          <span className="poland-map__pin-label">{city.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default PolandMap;
