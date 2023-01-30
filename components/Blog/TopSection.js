import React from "react";
import { blog } from "../../utils/data";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

const TopSection = () => {
  const { topArticles } = blog;
  return (
    <section className="screen-center">
      <p className="h2-text text-pri_dark font-[700] my-5">Blog</p>
      <div className="grid grid-cols-2 md:grid-cols-3 md:gap-5 gap-2 mt-10">
        {topArticles.map((blog) => (
          <div key={blog.id} className="relative ">
            <Image
              src={blog.image}
              alt={blog.text}
              placeholder="blur"
              className="w-full h-full image-cover "
              width={700}
              height={475}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              blurDataURL="#f2f2f2"
            />
            <img
              src="/images/about/background.png"
              className={`${styles.zindez2} top-0 right-0 h-full w-full absolute`}
            />
            <div
              className={`${styles.zindez2} absolute bottom-0 left-0 right-0 p-2 md:p-5  text-white`}
            >
              <p className="p-tiny-text">{blog.text}</p>
              <p className="p-tiny-text mt-2 md:mt-5">{blog.date}</p>
            </div>
          </div>
        ))}
      </div>
      <hr className=" hidden lg:block  border-pri_dark border-top w-full my-10 bottom-[3%] left-[10%]"></hr>
    </section>
  );
};

export default TopSection;
