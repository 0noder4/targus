"use-client";

import type { Metadata } from "next";
import "/styles/scss/index.scss";
import "/styles/css/index.css";

export const metadata: Metadata = {
  generator: "Next.js",
  metadataBase: new URL("https://targipracy.org.pl"),
  title: "Inżynierskie Targi Pracy 2025",
  keywords: ["Targi pracy", "Politechnika", "Staż", "Praca", "Politechnika"],
  authors: [{ name: "0noder4" }],
  creator: "Bartosz Kuklewksi",
  description:
    "31. Inżynierskie Targi Pracy – największe wydarzenie rekrutacyjne dla inżynierów i studentów kierunków technicznych na Politechnice Warszawskiej! Spotkaj czołowych pracodawców, znajdź staż, praktyki lub wymarzoną pracę. Dołącz 11-12 marca na Politechnice Warszawskiej i rozwijaj swoją karierę!",
  openGraph: {
    url: "https://targipracy.org.pl",
    title: "Inżynierskie Targi Pracy 2025",
    description: "Napędź swoją karierę",
    siteName: "Inżynierskie Targi Pracy",
    type: "website",
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
    </html>
  );
}
