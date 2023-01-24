import React from "react";
import { about } from "../../utils/data";
import styles from "../../styles/About.module.css";

const Step = ({ step }) => {
  return (
    <div>
      <div
        className={`${styles.shadowSteps} px-2 md:px-5 py-2 md:py-4 rounded-[5px] lg:rounded-[10px] `}
      >
        <p className="text-pri_dark md:font-[700]">{step.title}</p>
        <div className={`${styles.cardHeight} flex justify-center`}>
          <img
            src={step.image}
            alt={step.title}
            className="h-full object-contain"
          />
        </div>
      </div>
      <p className="mt-3 lg:mt-5 leading-tight">{step.text}</p>
    </div>
  );
};

export default Step;
