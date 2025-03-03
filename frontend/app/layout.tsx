import type { Metadata } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

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
      <body>{children}</body>
      {/* <GoogleAnalytics gaId={process.env.GA_ID ? process.env.GA_ID : ""} /> */}
      <GoogleTagManager gtmId={process.env.GTM_ID ? process.env.GTM_ID : ""} />
    </html>
  );
}
