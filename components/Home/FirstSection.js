import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import ImageSlider from "./ImageSlider";
import ImageSliderMobile from "./ImageSliderMobile";

const FirstSection = () => {
  const [text, setText] = useState(1);
  useEffect(() => {
    setTimeout(function () {
      setText((text % 3) + 1);
    }, 4000);
  });

  return (
    <section className="relative  gap-10 bg-pri_dark  lg:h-auto flex justify-center items-center">
      <div className="my-10 mt-20 lg:my-20 container w-[90%] lg:w-[80%] mx-auto">
        <div className="lg:hidden flex justify-center  h-[250px] md:h-[350px] w-full lg:mb-20 ">
          <ImageSliderMobile text={text} />
        </div>
        <p className="big-text ">
          We are Professionally Equipped to Render
          <br></br>
          <span className="text-sec">
            {text === 1 ? (
              <Typewriter
                options={{
                  strings: ["Business Deliveries"],
                  autoStart: true,
                  delay: 50,
                  cursorClassName: "cursor",
                }}
              />
            ) : text === 2 ? (
              <p>
                <Typewriter
                  options={{
                    strings: ["Errand Services"],
                    autoStart: true,
                    delay: 70,
                    cursorClassName: "cursor",
                  }}
                />
              </p>
            ) : (
              <p>
                <Typewriter
                  options={{
                    strings: ["Bike Rentals"],
                    autoStart: true,
                    delay: 80,
                    cursorClassName: "cursor",
                  }}
                />
              </p>
            )}
          </span>
        </p>
        <div className="md:flex md:justify-between my-10">
          <div className="lg:w-[50%]">
            <p className="lg:my-5 p-big-text leading-tight">
              We provide on-demand and customizable delivery services, through
              our seamless digital platform, that is designed to support users'
              need for ease and transparency.
            </p>
            <button className="button mt-10">Get Started</button>
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
