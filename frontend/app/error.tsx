"use client";
import Image from "next/image";
import LOGO from "/public/images/brand/itp-logo--horizontal--light.svg";

import "/styles/scss/error.scss";

export default function Error({ error }: { error: Error & { code?: string } }) {
  console.log(error);
  return (
    <div className="itp-error">
      <div className="itp-logo">
        <Image src={LOGO} alt="LOGO" />
      </div>
      <div className="itp-error-container">
        <span className="itp-decor_1">oopsie</span>
        <h1 className="itp-error__code">500</h1>
        <div className="itp-error__message">
          <h2>
            przepraszamy, serwis jest
            <br /> chwilowo niedostępny
          </h2>
          <span className="itp-decor_2">:((</span>
        </div>
      </div>
    </div>
  );
}
