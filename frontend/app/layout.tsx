import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

import "/styles/scss/index.scss";
import "/styles/css/index.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://targipracy.org.pl"),
  generator: "Next.js",
  authors: [{ name: "0noder4" }],
  creator: "Bartosz Kuklewksi",
  alternates: {
    canonical: "/",
    languages: {
      "pl-PL": "pl-PL",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <Script
          id={`CookieDeclaration`}
          async={true}
          src={`https://consent.cookiebot.com/${process.env.COOKIEBOT_ID}/cd.js`}
          strategy={`beforeInteractive`}
          data-cbid={`${process.env.COOKIEBOT_ID}`}
          data-blockingmode={`auto`}
          type={`text/javascript`}
        />
      </head>
      <body>{children}</body>
      {/* <GoogleAnalytics gaId={process.env.GA_ID ? process.env.GA_ID : ""} /> */}
      <GoogleTagManager gtmId={`${process.env.GTM_ID}`} />
    </html>
  );
}
