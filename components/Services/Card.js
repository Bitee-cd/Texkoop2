import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/Services.module.css";
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";
import useTranslation from "next-translate/useTranslation";

const Card = ({ item }) => {
  const { t } = useTranslation("services");
  return (
    <div
      className={`${styles.shadowCard} rounded-[15px] p-5 lg:p-10 lg:py-16 h-auto  my-10 2xl:my-20 flex `}
    >
      <div className={`md:flex lg:gap-10 gap-y-10 justify-between`}>
        <div className="md:w-[50%]">
          <Slide direction="left">
            <Fade delay={200} duration={500} damping={0.4} cascade>
              <p className="h2-text text-pri_dark">{t(item.title)}</p>
              <p className="p-text text-[#3B3C3C] mt-5 font-[500]">
                {t(item.text)}
              </p>
              <Link href="/get-started">
                <button className="button3 mt-5">{t("common:buttona")}</button>
              </Link>
            </Fade>
          </Slide>
        </div>
        <div className="hidden md:w-[50%] mb-5">
          <Slide direction="right">
            <div
              className={`${item.id === 4 && "w-[80%] mx-auto lg:ml-auto"} `}
            >
              <img
                src={item.image}
                loading="lazy"
                className={` ${styles.slideIn} h-full object-contain`}
              />
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Card;
