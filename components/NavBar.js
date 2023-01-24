import React, { useState } from "react";
import Logo from "./Logo";
import LanguageMobile from "./LanguageMobile";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { AnimatePresence, motion } from "framer-motion";
import SocialIcons from "./SocialIcons";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div
      className={`${styles.filter}relative min-w-screen overflow-x-hidden bg-pri_dark text-white `}
    >
      <navbar className="flex justify-between w-full screen-center py-5">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex items-center pr-[5%] lg:hidden">
          <div className="flex gap-5 ">
            <LanguageMobile />
            <div
              onClick={() => {
                setNavOpen(!navOpen);
              }}
              className={` relative w-6  items-center lg:hidden`}
            >
              <div className={`${styles.hamburger} mt-0`}></div>
              <div className={`${styles.hamburger} mt-2`}></div>
              <div className={`${styles.hamburger} mt-2`}></div>
            </div>
          </div>
        </div>
        <div className="lg:flex-row p-tiny-text  hidden lg:flex w-[60%] ml-auto justify-between items-center">
          <Link href="/about">About </Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Blog</Link>
          <LanguageMobile />
          <button className="button">Contact us</button>
        </div>
        <AnimatePresence>
          {navOpen && (
            <motion.div
              initial={{ x: 500, opacity: 0 }}
              exit={{ x: 500 }}
              transition={{ duration: 0.7 }}
              animate={{ x: 0, opacity: 1 }}
              className={`${styles.zindex2} top-0  absolute right-0  border-white  lg:hidden w-full`}
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
                <Link href="/blog">Say Hi</Link>
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
