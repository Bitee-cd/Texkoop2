import React from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import bike from "../../public/images/bike-rider.png";
import Image from "next/image";

const SecondSection = () => {
  return (
    <div
      className={`bg-[#ECF3FF] min-h-screen 2xl:min-h-[50vh] relative overflow-hidden  flex items-center justify-center ${styles.shadowCard}`}
    >
      <div className={`${styles.circle} ${styles.cornerRight}`}></div>
      <div className={`${styles.circle} ${styles.topLeft}`}></div>
      <div
        className={`${styles.zindex2} ${styles.boxCard} screen-center rounded-[10px] my-20 bg-white py-10 lg:py-20 h-[90%] w-[90%] md:w-[80%]  text-[#3B3C3C] p-5  md:p-10 lg:flex lg:items-center gap-y-5`}
      >
        <div className="lg:w-[45%]">
          <Fade delay={200} duration={500} damping={0.2} cascade>
            <p className="h2-text leading-tight text-pri">
              Become a Rider and Start Earning
            </p>
            <p className="p-text my-5 md:my-10">
              Would you like to earn extra income while working in a
              rider-friendly environment? Join our community of riders today!
            </p>
            <div className="hidden lg:block">
              <Link href="rider">
                <button className="button2 ">Ride With Us</button>
              </Link>
            </div>
          </Fade>
        </div>

        <div className="lg:w-[45%]">
          <Image
            src={bike}
            alt="Bike rider"
            placeholder="blur"
            width={700}
            height={475}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <button className="button2 lg:hidden mt-10">Ride With Us</button>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
