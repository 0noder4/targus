import type { Metadata } from "next";

import "/styles/scss/index.scss";
import "/styles/css/index.css";
import GoogleAnalytics from "/lib/analytics/GoogleAnalytics";
import CookieBanner from "/components/analytics/CookieBanner";
import { Suspense } from "react";

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
      <Suspense>
        <GoogleAnalytics GA_MEASUREMENT_ID={`${process.env.GA_ID}`} />
      </Suspense>
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
