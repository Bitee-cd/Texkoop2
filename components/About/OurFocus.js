import React from "react";
import styles from "../../styles/About.module.css";
import { about } from "../../utils/data";
import Step from "./Step";

const OurFocus = () => {
  const { secondSteps } = about;
  return (
    <>
      <section className={`${styles.shadowCard}  py-10`}>
        <div className="screen-center">
          <p className="text-pri_dark h2-text font-[700]">Our Focus </p>
          <p className="p-text mt-5 md:w-[80%]">
            We are committed to our core values of excellence, innovation,
            sustainability, social responsibility, and customer satisfaction. We
            continuously strive to improve and streamline our processes,
            utilizing the latest technology and techniques to make sure every
            shipment is handled with the utmost care and attention.
          </p>
        </div>
      </section>
      <section className={`${styles.shadowCard}  py-10`}>
        <div className="screen-center grid grid-cols-2 gap-5  gap-y-10 p-tiny-text lg:grid-cols-4 my-10 xl:my-20">
          {secondSteps.map((step) => (
            <Step key={step.id} step={step} />
          ))}
        </div>
      </section>
    </>
  );
};

export default OurFocus;
