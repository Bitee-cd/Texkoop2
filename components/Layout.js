import Head from "next/head";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children, title, bgNav, textNav, bgHamburger }) => {
  useEffect(() => {
    scrollToTop;
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Head>
        <title>{title ? title + " - Texkoop" : "Texkoop"}</title>
        <meta name="description" content="Texkoop Logistics Company" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <NavBar bgNav={bgNav} textNav={textNav} bgHamburger={bgHamburger} />
      <main className={` min-h-screen font-Helvetica`}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
