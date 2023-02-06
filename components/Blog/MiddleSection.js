import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MiddleSection = () => {
  const { t } = useTranslation("common");
  return (
    <section className="screen-center my-10">
      <div className="md:flex justify-between md:gap-10  lg:gap-20 gap-y-10 mt-10">
        <div className={` relative md:w-[40%] `}>
          <Image
            src="/images/blog/middle.png"
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

        <div className={`md:w-[55%]`}>
          <p className="h2 text-pri_dark font-[900] ">
            Lorem ipsum dolor sit amet consectetur. Sed faucibus consectetur id
            risus mauris fermentum.
          </p>

          <p className="p-text mt-2 md:mt-5">
            Lorem ipsum dolor sit amet consectetur. Sit aliquam et volutpat id
            in rhoncus egestas. Eleifend tempus gravida diam posuere ipsum massa
            tincidunt. Ac pellentesque eget mattis tellus etiam pellentesque
            nibh lacus morbi. Velit tincidunt tristique quam nulla lectus et.
            Elit tincidunt integer consectetur massa metus velit molestie in
            commodo. Consequat sagittis feugiat tristique ac blandit consequat
            dolor pellentesque erat. Neque ridiculus elit malesuada neque
            ultrices diam. Ornare lacus sed ac urna. Scelerisque posuere et
            etiam vitae. Est varius quam in ac integer pulvinar eget.
          </p>
          <Link href="/get-started">
            <button className="button3 mt-5">{t("common:buttona")}</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MiddleSection;
