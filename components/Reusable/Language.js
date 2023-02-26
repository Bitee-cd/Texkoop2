import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../../styles/Home.module.css";
const Language = () => {
  const [locale, setLocale] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { asPath } = useRouter();

  const variants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -10, opacity: 0 },
    hover: { scale: 1.05 },
  };

  const transition = { duration: 0.5 };

  const handleHover = () => {
    if (!hovered) {
      setHovered(true);
      setLocale(!locale);
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="relative">
      <AnimatePresence>
        <motion.div
          key={locale}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={transition}
          className="cursor-pointer"
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
          onClick={() => setLocale(!locale)}
          whileHover="hover"
        >
          <Link href={`${asPath}`} locale={locale ? "en-US" : "fr"}>
            <div className="flex gap-1">
              <img
                src={
                  locale
                    ? "https://flagcdn.com/gb.svg"
                    : "https://flagcdn.com/w40/fr.png"
                }
                alt={locale ? "English" : "French"}
                className="cursor-pointer"
                width="30"
              />
              {locale ? "EN" : "FR"}
            </div>
          </Link>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Language;
