import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
