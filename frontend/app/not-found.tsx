import Image from "next/image";
import LOGO from "/public/images/brand/itp-logo--horizontal--light.svg";

import "/styles/scss/error.scss";
import Link from "next/link";

export default function Error({ error }: { error: Error & { code?: string } }) {
  return (
    <div className="itp-error">
      <div className="itp-logo">
        <Link href={"/"}>
          <Image src={LOGO} alt="LOGO" />
        </Link>
      </div>
      <div className="itp-error-container">
        <span className="itp-decor_1">oopsie</span>
        <h1 className="itp-error__code">404</h1>
        <div className="itp-error__message">
          <h2>
            nie znaleziono żądanej <br />
            strony {`->`} <Link href={"/"}> powrót na główną</Link>
          </h2>
          <span className="itp-decor_2">{`:((`}</span>
        </div>
      </div>
    </div>
  );
}
