"use client";

import Nav from "@/components/Nav";

import "../styles/styles.scss";

import { Inter, Playfair_Display } from "next/font/google";

import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { useEffect, useState } from "react";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter-font",
});

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--playfair_display-font",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(true);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    showMenu
      ? document.body.classList.add("noscroll")
      : document.body.classList.remove("noscroll");
  }, [showMenu]);

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair_display.variable}`}
    >
      <Head>
        <title>
          Johnathon Spectre | Helping companies build better, scalable software
        </title>
      </Head>
      <body>
        <Nav openMenu={openMenu} />
        <Menu closeMenu={closeMenu} showMenu={showMenu} />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
