import Image from "next/image";
import React from "react";

const SinglePost = () => {
  <section className="screen-center">
    <p className="h2-text text-pri_dark font-[700] my-5">Blog</p>
    <div className="grid grid-cols-2 md:grid-cols-3 md:gap-5 gap-2 mt-10">
      <div className="relative ">
        <Image
          src="/images/about/author.png"
          alt="Author picture"
          placeholder="blur"
          className="w-full h-full image-cover "
          width={200}
          height={200}
          blurDataURL="#f2f2f2"
        />

        <div
          className={`absolute bottom-0 left-0 right-0 p-2 md:p-5  text-white`}
        >
          <p className="p-tiny-text"></p>
          <p className="p-tiny-text mt-2 md:mt-5">name</p>
        </div>
      </div>
    </div>
    <hr className=" hidden lg:block  border-pri_dark border-top w-full my-10 bottom-[3%] left-[10%]"></hr>
  </section>;
};

export default SinglePost;
