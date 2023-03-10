import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import ImageSlider from "./ImageSlider";
import ImageSliderMobile from "./ImageSliderMobile";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const FirstSection = () => {
  const [text, setText] = useState(1);
  const { t, lang } = useTranslation("home");
  useEffect(() => {
    setTimeout(function () {
      setText((text % 3) + 1);
    }, 4000);
  });
  const texta = t("home:card_title_a");
  const textb = t("home:card_title_b");
  const textc = t("home:card_title_c");

  return (
    <section className=" blur-background relative min-h-screen gap-10 text-white bg-pri_dark  lg:h-auto flex justify-center items-center">
      <div className="my-10 mt-20 lg:my-20 container w-[90%] lg:w-[80%] mx-auto">
        <div className="lg:hidden flex justify-center  h-[250px] md:h-[350px] w-full lg:mb-20 ">
          <ImageSliderMobile text={text} />
        </div>
        <div className="big-text ">
          {t("Headi")}
          <br></br>
          {t("Headii")}
          <div className="text-sec">
            {text === 1 ? (
              <Typewriter
                options={{
                  strings: [texta],
                  autoStart: true,
                  delay: 50,
                  cursorClassName: "cursor",
                }}
              />
            ) : text === 2 ? (
              <div>
                <Typewriter
                  options={{
                    strings: [textb],
                    autoStart: true,
                    delay: 70,
                    cursorClassName: "cursor",
                  }}
                />
              </div>
            ) : (
              <div>
                <Typewriter
                  options={{
                    strings: [textc],
                    autoStart: true,
                    delay: 80,
                    cursorClassName: "cursor",
                  }}
                />
              </div>
            )}
          </div>
        </div>
        <div className="md:flex md:justify-between my-10 2xl:mt-20">
          <div className="lg:w-[50%]">
            <p className="lg:my-5 p-big-text leading-tight font-[600]">
              {" "}
              {t("texta")}
            </p>

            <Link href="/get-started">
              <button className="button mt-10"> {t("buttona")} </button>
            </Link>
          </div>
          <div className="hidden lg:w-[45%] h-[300px] lg:flex items-center">
            <ImageSlider text={text} />
          </div>
        </div>
      </div>
      <hr className="absolute hidden lg:block bg-white border-white border-top w-full my-10 bottom-[3%] left-[10%]"></hr>
    </section>
  );
};

export default FirstSection;
