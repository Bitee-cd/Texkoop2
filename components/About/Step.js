import React from "react";
import { about } from "../../utils/data";
import styles from "../../styles/About.module.css";
import { Fade, Slide } from "react-awesome-reveal";
import Image from "next/image";

const Step = ({ step }) => {
  return (
    <Slide cascade damping={0.3}>
      <div>
        <Fade delay={200} duration={500} damping={0.2} cascade>
          <div
            className={`${styles.shadowSteps} px-2 md:px-5 py-2 md:py-4 rounded-[5px] lg:rounded-[10px] `}
          >
            <p className="text-pri_dark font-[400] md:font-[700]">
              {step.title}
            </p>
            <div className={`${styles.cardHeight} flex justify-center`}>
              <Image
                src={step.image}
                alt={step.title}
                width={700}
                height={475}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                className="h-full object-contain"
              />
            </div>
          </div>
          <p className="mt-3 lg:mt-5 leading-tight">{step.text}</p>
        </Fade>
      </div>
    </Slide>
  );
};

export default Step;
