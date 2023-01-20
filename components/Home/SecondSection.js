import React from "react";
import styles from "../../styles/Home.module.css";

const SecondSection = () => {
  return (
    <div
      className={`bg-[#ECF3FF] lg:h-screen relative overflow-hidden  flex items-center justify-center ${styles.shadowCard}`}
    >
      <div className={`${styles.circle} ${styles.cornerRight}`}></div>
      <div className={`${styles.circle} ${styles.topLeft}`}></div>
      <div
        className={`${styles.zindex2} ${styles.boxCard} screen-center rounded-[10px] my-10 bg-white 2xl:h-[60%] h-[90%] w-[90%] md:w-[80%]  text-black p-5  md:p-10 lg:flex lg:items-center gap-y-5`}
      >
        <div className="lg:w-[45%]">
          <p className="h2-text font-[700] leading-tight text-pri">
            Become a Rider and Start Earning
          </p>
          <p className="p-text my-5 md:my-10">
            Would you like to earn extra income while working in a
            rider-friendly environment? Join our community of riders today!
          </p>
          <div className="hidden lg:block">
            <button className="button2 ">Ride With Us</button>
          </div>
        </div>
        <div className="lg:w-[45%]">
          <img src="/images/bike-rider.png" alt="Bike rider" />
          <button className="button2 lg:hidden">Ride With Us</button>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
