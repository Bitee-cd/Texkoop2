import Image from "next/image";
import React from "react";
import styles from "../../styles/About.module.css";
import { about } from "../../utils/data";
import useTranslation from "next-translate/useTranslation";

const ImageSlider = () => {
  const { imageSlider } = about;
  const { t } = useTranslation("about");
  return (
    <section className="my-10 mt-20 inline-block">
      <div className={`animate-slide flex trans translate-x-[-100px]`}>
        {imageSlider.map((item) => (
          <div
            key={item.id}
            className={`${styles.imageHeight} $ relative border-[5px] border-y-[10px] border-sec `}
          >
            <div className={` ${styles.background}`}></div>
            <img
              src={item.image}
              alt={t(item.text)}
              blurDataURL="data:..."
              placeholder="blur"
              className=" w-full h-full object-cover"
            />
            <p
              className={`${styles.zindex2} bottom-[5%] absolute mx-5 text-white`}
            >
              {t(item.text)}
            </p>
          </div>
        ))}
        <div></div>
      </div>
    </section>
  );
};

export default ImageSlider;
