import type { Metadata } from "next";
import "@/styles/scss/index.scss";
import "@/styles/css/index.css";
import Head from "next/head";

import "./page.scss";

export const metadata: Metadata = {
  title: "Inżynierskie Targi Pracy 2025",
  description: "Największe Inżynierskie Targi Pracy w Polsce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <Head>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <body className="itp-business">{children}</body>
    </html>
  );
}
