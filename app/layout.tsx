// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cactus Clash",
  description:
    "A fast-paced cowboy-themed mini jumper game built with JavaScript and the Kaboom library. Swing from ropes, jump over enemies, trade ammo, and join forces with helpful allies—as waves of raiders intensify across this wild west world.",
  authors: [{ name: "Cole Wendling" }],
  openGraph: {
    title: "Cactus Clash",
    description:
      "A fast-paced cowboy-themed mini jumper game built with JavaScript and the Kaboom library. Swing from ropes, jump over enemies, trade ammo, and join forces with helpful allies—as waves of raiders intensify across this wild west world.",
    url: "https://cactusclash.com",
    images: [
      {
        url: "/meta/social-share.png",
        width: 1200,
        height: 630,
        alt: "Cactus Clash - A fast-paced cowboy-themed mini jumper game built with JavaScript and the Kaboom library.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cactus Clash",
    description:
      "A fast-paced cowboy-themed mini jumper game built with JavaScript and the Kaboom library. Swing from ropes, jump over enemies, trade ammo, and join forces with helpful allies—as waves of raiders intensify across this wild west world.",
    images: ["/meta/social-share.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
