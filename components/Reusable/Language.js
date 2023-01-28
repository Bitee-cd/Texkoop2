import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../../styles/Home.module.css";

const Language = () => {
  const [locale, setLocale] = useState(false);
  const router = useRouter();
  return (
    <div className="relative">
      {locale ? (
        <AnimatePresence key={locale}>
          <motion.div
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            exit={{ y: 10 }}
            transition={{ duration: 0.3 }}
            className={` cursor-pointer`}
            onMouseOver={() => setLocale(!locale)}
            onMouseOut={() => setLocale(locale)}
          >
            <Link href={`${router.asPath}`} locale="en-US">
              <div className="flex gap-1">
                <img
                  src="https://flagcdn.com/gb.svg"
                  alt="English"
                  className="cursor-pointer"
                  width="30"
                />
                EN
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
      ) : (
        <AnimatePresence key={locale}>
          <motion.div
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            exit={{ y: 10 }}
            transition={{ duration: 0.3 }}
            className={` cursor-pointer`}
            onMouseOver={() => setLocale(!locale)}
            onMouseOut={() => setLocale(locale)}
          >
            <Link href={`${router.asPath}`} locale="fr">
              <div className="flex gap-1">
                <img
                  alt="French"
                  className="cursor-pointer"
                  src="https://flagcdn.com/w40/za.png"
                  srcset="https://flagcdn.com/w80/za.png 2x"
                  width="40"
                />
                FR
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Language;
