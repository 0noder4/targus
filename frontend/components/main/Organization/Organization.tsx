import React from "react";
import Markdown from "react-markdown";

import { LinkButton } from "/components/global/Button/Button";
import OrganizationGallery from "./components/OrganizationGallery/OrganizationGallery";

import "./Organization.scss";
import GROUP_IMAGE from "/public/images/itp-image--31_group.png";
import type { OrganizationSection } from "/interfaces/sections/HomeSections";
import type { Image as ImageType } from "/interfaces/Image";
import { formatRichText } from "/lib/formatRichText";

const DEFAULT_TITLE = "Kim jesteśmy?";
const DEFAULT_PARAGRAPHS = `Board of European Students of Technology (BEST) jest międzynarodową organizacją studencką skupiającą 84 grup lokalnych w 30 krajach Europy. W Polsce istnieje 6 takich grup – jedna z nich działa na Politechnice Warszawskiej od ponad 36 lat. To właśnie my!

W ciągu długoletniej działalności mieliśmy okazję realizować wiele projektów o różnorodnej tematyce takich jak Inżynierskie Targi Pracy, hackathon BEST Hacking League, czy cykl kursów międzynarodowych BEST Courses. Dobrze wiemy, czego potrzebują studenci, bo sami nimi jesteśmy! Robimy wszystko, aby uczelnia nie kojarzyła się tylko z nauką. Zostań jednym z nas: twórz wyjątkowe projekty, zawieraj przyjaźnie na całe życie, dostrzegaj swój nieodkryty potencjał.`;

const mapVariant = (
  type?: string
): "primary" | "secondary" | "orange" | "dark" => {
  if (type === "main") return "primary";
  if (type === "secondary" || type === "orange" || type === "dark") return type;
  return "secondary";
};

const DEFAULT_IMAGE: ImageType = {
  url: GROUP_IMAGE.src,
  alternativeText: "31 Inżynierskie Targi Pracy, Grupa",
  width: GROUP_IMAGE.width,
  height: GROUP_IMAGE.height,
};

/** Extract url from Strapi media (handles both flat and data.attributes shapes) */
const getMediaUrl = (item: unknown): string | null => {
  if (!item || typeof item !== "object") return null;
  const obj = item as Record<string, unknown>;
  if (typeof obj.url === "string") return obj.url;
  const data = obj.data as Record<string, unknown> | undefined;
  if (data?.attributes && typeof data.attributes === "object") {
    const attrs = data.attributes as Record<string, unknown>;
    if (typeof attrs.url === "string") return attrs.url;
  }
  if (Array.isArray(data) && data[0] && typeof data[0] === "object") {
    const first = (data[0] as Record<string, unknown>).attributes;
    if (first && typeof first === "object" && typeof (first as Record<string, unknown>).url === "string")
      return (first as Record<string, unknown>).url as string;
  }
  return null;
};

/** Normalize to ImageType from Strapi media (flat or nested) */
const toImage = (item: unknown): ImageType | null => {
  const url = getMediaUrl(item);
  if (!url) return null;
  const obj = (item && typeof item === "object" ? item : {}) as Record<string, unknown>;
  const attrs = (obj.data as Record<string, unknown> | undefined)?.attributes as Record<string, unknown> | undefined;
  const source = attrs ?? obj;
  return {
    url,
    alternativeText: (typeof source.alternativeText === "string" ? source.alternativeText : "") || "",
    width: (typeof source.width === "number" ? source.width : 800) || 800,
    height: (typeof source.height === "number" ? source.height : 600) || 600,
  };
};

const normalizeImages = (props?: OrganizationSection): ImageType[] => {
  const fromArray = (arr: unknown[]): ImageType[] =>
    arr.map(toImage).filter((x): x is ImageType => x !== null);
  const fromImages = props?.images != null ? (Array.isArray(props.images) ? fromArray(props.images) : []) : [];
  const fromImage = props?.image != null ? fromArray([props.image]) : [];
  const combined = fromImages.length > 0 ? fromImages : fromImage;
  return combined.length > 0 ? combined : [DEFAULT_IMAGE];
};

const Organization = (props?: OrganizationSection) => {
  const title = props?.title ?? DEFAULT_TITLE;
  const paragraphs = props?.paragraphs ?? DEFAULT_PARAGRAPHS;
  const cta = props?.cta;
  const images = normalizeImages(props);

  return (
    <section className="itp-main_section--organization">
      <div className="itp-c-organization_container">
        <h2 className="itp-c-organization_header">{title}</h2>
        <div className="itp-c-organization_about">
          <Markdown>{formatRichText(paragraphs)}</Markdown>
        </div>
        {cta ? (
          <LinkButton
            href={cta.link.url}
            target={cta.link.target === "self" ? "_self" : "_blank"}
            variant={mapVariant(cta.type)}
            disabled={cta.disabled}
            className="itp-c-organization_join_us"
          >
            {cta.link.label}
          </LinkButton>
        ) : (
          <LinkButton
            href="https://new.best.warszawa.pl/"
            variant="secondary"
            className="itp-c-organization_join_us"
          >
            Dołącz do nas
          </LinkButton>
        )}
      </div>
      <aside className="itp-c-organization_photos">
        <OrganizationGallery images={images} />
      </aside>
    </section>
  );
};

export default Organization;
