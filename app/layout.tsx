import type { Metadata } from "next";
import { Montserrat, Nuosu_SIL } from "next/font/google";
import "./globals.css";

const nuosuSIL = Nuosu_SIL({
  variable: "--font-nuosu-sil",
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Courtney Lee Roberts",
  description: "Courtney Lee Roberts Actor & Artist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${nuosuSIL.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
