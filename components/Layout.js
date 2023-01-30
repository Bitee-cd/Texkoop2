import Head from "next/head";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { motion, spring } from "framer-motion";

const Layout = ({ children, title, bgNav, textNav, bgHamburger }) => {
  const [circle, setCirlce] = useState({ x: 0, y: 0 });
  const [scaling, setScaling] = useState(false);
  useEffect(() => {
    scrollToTop;
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const mousemove = (e) => {
      setCirlce({ x: e.screenX, y: e.screenY });
      console.log(e);
    };
    window.addEventListener("mousemove", mousemove);

    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);
  useEffect(() => {}, []);
  return (
    <div className="relative h-full">
      <Head>
        <title>{title ? title + " - Texkoop" : "Texkoop"}</title>
        <meta name="description" content="Texkoop Logistics Company" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <div>
        <motion.div
          animate={{
            x: circle.x,
            y: circle.y,
          }}
          className={`h-[20px] w-[20px] bg-sec z-10 absolute top-0 rounded-full`}
        ></motion.div>
      </div>
      <NavBar bgNav={bgNav} textNav={textNav} bgHamburger={bgHamburger} />
      <main className={` min-h-screen font-Helvetica`}>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
