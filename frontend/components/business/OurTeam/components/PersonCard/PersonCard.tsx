import React from "react";
import "./PersonCard.scss";
import Image, { StaticImageData } from "next/image";

type AvatarType = StaticImageData | { url: string; alternativeText?: string };

type Props = {
  name: string;
  surname: string;
  tel: string;
  email: string;
  avatar: AvatarType;
};

const isStaticImage = (
  a: AvatarType
): a is StaticImageData => "src" in a && typeof (a as StaticImageData).src === "string";

const PersonCard: React.FC<Props> = ({
  name,
  surname,
  tel,
  email,
  avatar,
  ...props
}) => {
  const avatarSrc = isStaticImage(avatar) ? avatar.src : avatar.url;
  const avatarAlt = isStaticImage(avatar)
    ? `${name} ${surname}`
    : (avatar as { alternativeText?: string }).alternativeText ?? `${name} ${surname}`;

  return (
    <div
      className="itp-c-person_card"
      style={{ backgroundImage: `url(${avatarSrc})` }}
      {...props}
    >
      <Image
        src={isStaticImage(avatar) ? avatar : avatar.url}
        alt={avatarAlt}
        width={100}
        height={100}
        className="itp-c-image_meta"
        {...(!isStaticImage(avatar) && { unoptimized: true })}
      ></Image>
      <div className="itp-c-person_card__info">
        <h2 className="itp-c-person_card__info__name">
          {name} {surname}
        </h2>
        <h3 className="itp-c-person_card__info__phone">+48 {tel}</h3>
        <h3 className="itp-c-person_card__info__email">
          <a href={`mailto:${email}`}>{email}</a>
        </h3>
      </div>
    </div>
  );
};

export default PersonCard;
