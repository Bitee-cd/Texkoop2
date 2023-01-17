import React from "react";
import Form from "./Form";
import { one_super_app } from "../utils/data";
import useTranslation from "next-translate/useTranslation";
import SocialIcons from "./SocialIcons";
import ScrollButton from "./ScrollButton";
import Logo from "./Logo";

const OneSuperApp = () => {
  const { t, lang } = useTranslation("home");
  const { items } = one_super_app;
  return (
    <section className="bg-ter text-black min-h-[50vh] flex justify-center items-center">
      <div>
        <div className="py-20 font mx-auto max-w-[1440px] w-[90%] ">
          <div className="lg:flex justify-between ">
            <div className="lg:w-[70%] grid grid-cols-5 md:gap-10">
              <Form />
              <div className="col-span-2">
                <img
                  src="/images/mobile2.png"
                  alt="Mobile application"
                  className="hidden lg:block "
                />
                <img
                  src="/images/mobile.png"
                  alt="Mobile application"
                  className="lg:hidden block  object-contain"
                />
              </div>
            </div>
            <div className="lg:w-[30%]">
              {items.map((item) => (
                <div key={item.id} className="mb-5 p-text">
                  <p className="text-pri_dark  font-extrabold">
                    {t(item.head)}
                  </p>
                  <p className="font-light">{t(item.text)}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-pri_dark mt-10 lg:block hidden">
            <ScrollButton />
          </div>
          <div className=" lg:hidden text-pri_dark grid grid-cols-2 mt-10">
            <div className="">
              <SocialIcons />
            </div>
            <div className="ml-auto">
              <ScrollButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneSuperApp;
