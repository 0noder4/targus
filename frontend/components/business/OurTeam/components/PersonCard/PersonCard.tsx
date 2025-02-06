import React from "react";
import "./PersonCard.scss";
import Image, { StaticImageData } from "next/image";

type Props = {
  name: string;
  surname: string;
  tel: string;
  email: string;
  avatar: StaticImageData;
};

const PersonCard: React.FC<Props> = ({
  name,
  surname,
  tel,
  email,
  avatar,
  ...props
}) => {
  console.log(avatar);
  return (
    <div
      className="itp-c-person_card"
      style={{ backgroundImage: `url(${avatar.src})` }}
      {...props}
    >
      <Image
        src={avatar}
        alt={`${name} ${surname}`}
        className="itp-c-image_meta"
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
