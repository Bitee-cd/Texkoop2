import React, { useEffect, useState } from "react";
import styles from "./../styles/Home.module.css";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import SocialIcons from "./SocialIcons";
import Timer from "./Timer";
import LanguageMobile from "./LanguageMobile";
import Logo from "./Logo";

const WhatIsComing = () => {
  const { t, lang } = useTranslation("home");
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();
  const [diff, setDiff] = useState();
  let interval;
  const startTimer = () => {
    const countDownDate = new Date("March 13,2023").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = countDownDate - now;
      setDiff(difference);
      const days = Math.floor(difference / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (difference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((difference % (60 * 1000)) / 1000);
      if (difference < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    startTimer();
  });

  return (
    <section className={`${styles.background} h-screen  `}>
      <div className={`${styles.background_image}`}></div>
      <div
        className={`${styles.text} text-white max-w-[1440px] w-[90%] mx-auto`}
      >
        <div className=" md:flex justify-between">
          <div className="md:w-[45%]">
            <div className="lg:hidden mb-20 mt-10">
              <LanguageMobile />
            </div>

            <div className="flex gap-5 items-end mb-10">
              <Logo />

              <div className="w-[100px]">
                <div className="animate bg-sec"></div>
              </div>
            </div>
            <div>
              <p className="uppercase h1-text font-black">
                {t("Headi")}
                <br></br> {t("Headii")}
              </p>
              <p className="p-text font-light tracking-wider my-7 md:w-[90%]">
                {t("texta")}
              </p>
              <button className="button">
                <a href="#riderForm">{t("button")}</a>
              </button>
            </div>
          </div>
          <div className="md:w-[40%] flex flex-end items-end mt-10 md:mt-0">
            <div className=" justify-end text-3xl font-black">
              {/* <CountDownTimer /> */}
              {diff > 0 ? (
                <Timer
                  timerDays={timerDays}
                  timerHours={timerHours}
                  timerMinutes={timerMinutes}
                  timerSeconds={timerSeconds}
                />
              ) : (
                <p> We are Live</p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-20 mb-10 text-white lg:flex justify-between hidden  ">
          <SocialIcons />
          <div className="">
            <LanguageMobile />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsComing;
