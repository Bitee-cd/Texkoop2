import Image from "next/image";
import React from "react";

const RelatedArticle = () => {
  return (
    <section className="screen-center my-10">
      <div className="grid md:grid-cols-2 md:gap-10 gap-5 mt-10">
        <div className={` relative `}>
          <Image
            src="/images/blog/recent.png"
            alt="blog slug"
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
            <p className="font-[700] text-[#3B3C3C]">-Feb 2022</p>
          </div>
          <p className="p-tiny-text mt-2 md:mt-5">
            Lorem ipsum dolor sit amet consectetur. Vulputate dui dui nunc
            tellus ac egestas netus risus leo. Ut ullamcorper amet in purus
            lectus enim gravida aliquet. Magna ut nibh urna mauris tempor nisi
            tortor at. Mattis senectus porta risus nisi.
          </p>
        </div>
      </div>
      <hr className=" hidden lg:block  border-sec border-t w-full my-10 bottom-[3%] left-[10%]"></hr>
    </section>
  );
};

export default RelatedArticle;
