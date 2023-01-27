import Image from "next/image";
import React from "react";
import styles from "../../styles/About.module.css";
import { about } from "../../utils/data";

const ImageSlider = () => {
  const { imageSlider } = about;
  return (
    <section className="my-10 mt-20 inline-block">
      <div className={` flex ${styles.overflow} `}>
        {imageSlider.map((item) => (
          <div
            className={`${styles.imageHeight} $ relative border-[5px] border-y-[10px] border-sec `}
          >
            <div className={` ${styles.background}`}></div>
            <img
              src={item.image}
              alt={item.text}
              blurDataURL="data:..."
              placeholder="blur"
              className=" w-full h-full object-cover"
            />
            <p
              className={`${styles.zindex2} bottom-[5%] absolute mx-5 text-white`}
            >
              {item.text}
            </p>
          </div>
        ))}
        <div></div>
      </div>
    </section>
  );
};

export default ImageSlider;
