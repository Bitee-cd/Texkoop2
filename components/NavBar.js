import React, { useState } from "react";
import Logo from "./Reusable/Logo";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { AnimatePresence, motion } from "framer-motion";
import SocialIcons from "./Reusable/SocialIcons";
import LogoDark from "./Reusable/LogoDark";
import { useAppContext } from "./AppContext";
import LanguageMobile from "./Reusable/LanguageMobile";
import Language from "./Reusable/Language";

const NavBar = ({ bgNav, textNav, bgHamburger }) => {
  const [navOpen, setNavOpen] = useState(false);

  const { logoDark } = useAppContext();

  return (
    <div
      className={`${styles.filter}relative min-w-screen overflow-x-hidden ${bgNav} ${textNav} `}
    >
      <navbar className="flex justify-between w-full screen-center py-5 items-center">
        <Link href="/">{logoDark ? <LogoDark /> : <Logo />}</Link>
        <div className="flex items-center pr-[5%] lg:hidden">
          <div className="flex gap-5 ">
            <LanguageMobile />
            <div
              onClick={() => {
                setNavOpen(!navOpen);
              }}
              className={` relative w-6  items-center lg:hidden`}
            >
              <div className={`${styles.hamburger} ${bgHamburger} mt-0`}></div>
              <div className={`${styles.hamburger} ${bgHamburger} mt-2`}></div>
              <div className={`${styles.hamburger} ${bgHamburger} mt-2`}></div>
            </div>
          </div>
        </div>
        <div className="lg:flex-row p-tiny-text  hidden lg:flex w-[60%] ml-auto justify-between items-center">
          <Link href="/about">About </Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Blog</Link>
          <LanguageMobile />
          <Link href="/say-hi">
            <button
              className={`navButton ${
                logoDark ? "border-pri_dark" : "border-white"
              }`}
            >
              Contact us
            </button>
          </Link>
        </div>
        <AnimatePresence>
          {navOpen && (
            <motion.div
              initial={{ x: 500, opacity: 0 }}
              exit={{ x: 500 }}
              transition={{ duration: 0.7 }}
              animate={{ x: 0, opacity: 1 }}
              className={`${styles.zindex2} top-0  absolute right-0  text-white border-white  lg:hidden w-full`}
            >
              <div
                className={`${styles.navborder} p-text h-screen pt-10 pb-5 gap-5 px-3 w-[60%] ml-auto bg-pri_dark flex flex-col`}
              >
                <div
                  onClick={() => {
                    setNavOpen(!navOpen);
                  }}
                  className="mt-5 mb-10 relative"
                >
                  <div className={`${styles.cancel}  rotate-45`}></div>
                  <div
                    className={`${styles.cancel} -rotate-45 absolute `}
                  ></div>
                </div>
                <Link href="/about">About </Link>
                <Link href="/services">Services</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/say-hi">Say Hi</Link>
                <div className="mt-auto">
                  <SocialIcons />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </navbar>
    </div>
  );
};

export default NavBar;
