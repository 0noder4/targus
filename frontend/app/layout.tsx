import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";

import "/styles/scss/index.scss";
import "/styles/css/index.css";
import Script from "next/script";

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
      <body>
        {children}
        <Script
          id="CookieDeclaration"
          src={`https://consent.cookiebot.com/${process.env.COOKIEBOT_ID}/cd.js`}
          type="text/javascript"
          async={true}
          strategy="afterInteractive"
        />
      </body>
      <GoogleTagManager gtmId={`${process.env.GTM_ID}`} />
    </html>
  );
}
