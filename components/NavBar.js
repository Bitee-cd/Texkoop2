import React, { useState } from "react";
import Logo from "./Reusable/Logo";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { AnimatePresence, motion } from "framer-motion";
import SocialIcons from "./Reusable/SocialIcons";
import LogoDark from "./Reusable/LogoDark";
import { useAppContext } from "./AppContext";
import LanguageMobile from "./Reusable/LanguageMobile";
import useTranslation from "next-translate/useTranslation";

const NavBar = ({ modal, bgNav, textNav, bgHamburger }) => {
  const [sticky, setSticky] = useState(false);
  const { logoDark, navOpen, setNavOpen } = useAppContext();
  const { t } = useTranslation("common");

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 20) {
      setSticky(true);
    } else if (scrolled <= 500) {
      setSticky(false);
    }
  };
  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      className={`${sticky && "fixed"} ${
        modal && "blur"
      } w-full top-0 duration-300 transition-all ease-in z-10 min-w-screen overflow-x-hidden ${bgNav} ${textNav} `}
    >
      <nav className={`flex justify-between  screen-center py-5 items-center`}>
        <div className={`${navOpen && "blur"}`}>
          <Link href="/">{logoDark ? <LogoDark /> : <Logo />}</Link>
        </div>
        <div
          className={`${navOpen && "blur"} flex items-center pr-[5%] lg:hidden`}
        >
          <div className="flex gap-5 ">
            <LanguageMobile />
            <div
              onClick={() => {
                setNavOpen(!navOpen);
              }}
              className={` relative w-6  items-center lg:hidden`}
            >
              <Hamburger logoDark={logoDark} />
            </div>
          </div>
        </div>
        <div className="lg:flex-row p-tiny-text  hidden lg:flex w-[60%] ml-auto justify-between items-center">
          <Link href="/about">{t("Nav1")} </Link>
          <Link href="/services">{t("Nav2")} </Link>
          <Link href="/blog">{t("Nav4")} </Link>
          <LanguageMobile />
          <Link href="/say-hi">
            <button
              className={`navButton ${
                logoDark ? "border-pri_dark" : "border-white"
              }`}
            >
              {t("contact_button")}
            </button>
          </Link>
        </div>
        <AnimatePresence>
          {navOpen && (
            <motion.div
              key={navOpen}
              initial={{ x: 500, opacity: 0 }}
              exit={{ x: 500 }}
              transition={{ duration: 0.7 }}
              animate={{ x: 0, opacity: 1 }}
              className={`z-50 top-0  fixed right-0  text-white  lg:hidden w-full`}
            >
              <div
                className={`${styles.navborder} p-text h-screen pt-10 pb-5 gap-5 gap-y-10 px-3 w-[60%] ml-auto bg-pri_dark flex flex-col`}
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
                <Link href="/about">{t("Nav1")} </Link>
                <Link href="/services">{t("Nav2")} </Link>
                <Link href="/blog">{t("Nav4")} </Link>
                <Link href="/say-hi">{t("contact_button")}</Link>
                <div className="mt-auto">
                  <SocialIcons />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default NavBar;

export const Hamburger = ({ logoDark }) => (
  <svg
    width={38}
    height={30}
    viewBox="0 0 38 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 3C0 1.34314 1.34314 0 3 0H35C36.6568 0 38 1.34314 38 3C38 4.65686 36.6568 6 35 6H3C1.34314 6 0 4.65686 0 3ZM0 15C0 13.3432 1.34314 12 3 12H35C36.6568 12 38 13.3432 38 15C38 16.6568 36.6568 18 35 18H3C1.34314 18 0 16.6568 0 15ZM0 27C0 25.3432 1.34314 24 3 24H35C36.6568 24 38 25.3432 38 27C38 28.6568 36.6568 30 35 30H3C1.34314 30 0 28.6568 0 27Z"
      fill={!logoDark ? "#FFF" : "#2C4E86"}
    />
  </svg>
);
