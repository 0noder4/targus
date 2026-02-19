import React from "react";
import PolandMap from "/components/poland/PolandMap/PolandMap";
import type { CityData } from "../../../interfaces/poland/CityData";
import "./CityDetail.scss";

interface CityDetailProps {
  city: CityData;
}

const CityDetail = ({ city }: CityDetailProps) => {
  return (
    <section className="city-detail">
      <div className="city-detail__container">
        <div className="city-detail__info">
          <h2 className="city-detail__title">{city.title}</h2>
          <div className="city-detail__content">
            <p className="city-detail__location">
              <span className="city-detail__location-label">Gdzie:</span>{" "}
              {city.location}
            </p>
            <p className="city-detail__description">{city.description}</p>
            <p className="city-detail__info-label">Więcej informacji:</p>
            <a
              href={city.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="city-detail__button"
            >
              STRONA WWW
            </a>
            <p className="city-detail__contact-text">
              <span className="city-detail__contact-label">
                Kontakt dla Wystawców:
              </span>{" "}
              {city.contactText}
            </p>
            <div className="city-detail__socials">
              <a
                href={city.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="city-detail__social-link"
              >
                <img
                  src="/icons/social-facebook.svg"
                  alt="Facebook"
                  className="city-detail__social-icon"
                />
                <span>Inżynierskie Targi Pracy {city.socialName}</span>
              </a>
              <a
                href={city.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="city-detail__social-link"
              >
                <img
                  src="/icons/social-instagram.svg"
                  alt="Instagram"
                  className="city-detail__social-icon"
                />
                <span>Inżynierskie Targi Pracy {city.socialName}</span>
              </a>
              <a
                href={city.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="city-detail__social-link"
              >
                <img
                  src="/icons/social-linkedin.svg"
                  alt="LinkedIn"
                  className="city-detail__social-icon"
                />
                <span>Inżynierskie Targi Pracy {city.socialName}</span>
              </a>
            </div>
          </div>
        </div>
        <div className="city-detail__map">
          <PolandMap activeCity={city.slug} />
        </div>
      </div>
    </section>
  );
};

export default CityDetail;
