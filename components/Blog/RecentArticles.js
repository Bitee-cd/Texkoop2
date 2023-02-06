import React from "react";
import { blog } from "../../utils/data";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

const RecentArticles = () => {
  const { recentArticles } = blog;
  return (
    <section className="screen-center my-10">
      <p className="h2-text text-pri_dark font-[700] my-5">Recent Articles</p>
      <div className="grid grid-cols-2 md:grid-cols-3 md:gap-5 gap-2 mt-10">
        {recentArticles.map((blog) => (
          <div key={blog.id} className="">
            <div className={`${styles.blogBackground} relative `}>
              <Image
                src={blog.image}
                alt={blog.text}
                placeholder="blur"
                blurDataURL="#f2f2f2"
                className="w-full h-full image-cover "
                width={700}
                height={475}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>

            <div className={`mt-5`}>
              <p className="h1-text text-pri_dark font-[600]">
                Lorem ipsum dolor sit ame consectetur.
              </p>
              <div className="flex my-2 p-tiny-text items-center gap-2 ">
                <div className="bg-[#D9D9D9] w-[39px] h-[39px] rounded-full"></div>
                <p>By Carol Abinson</p>
                <p className="font-[700] text-[#3B3C3C]">-{blog.date}</p>
              </div>
              <p className="p-tiny-text mt-2 md:mt-5">
                Lorem ipsum dolor sit amet consectetur. Vulputate dui dui nunc
                tellus ac egestas netus risus leo. Ut ullamcorper amet in purus
                lectus enim gravida aliquet. Magna ut nibh urna mauris tempor
                nisi tortor at. Mattis senectus porta risus nisi.
              </p>
              <Link href={`/blog/${blog.id}`}>
                <p className="text-sec hover:text-pri_dark">Read more</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentArticles;
