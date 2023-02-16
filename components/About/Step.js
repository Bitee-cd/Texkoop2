import React from "react";
import { about } from "../../utils/data";
import styles from "../../styles/About.module.css";
import { Fade, Slide } from "react-awesome-reveal";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

const Step = ({ step }) => {
  const { t } = useTranslation("about");
  return (
    <Slide cascade duration={2000}>
      <div>
        <Fade delay={200} duration={1000} cascade>
          <div
            className={`${styles.shadowSteps} px-2 md:px-5 py-2 md:py-4 rounded-[5px] lg:rounded-[10px] `}
          >
            <p className="text-pri_dark font-[400] md:font-[700]">
              {t(step.title)}
            </p>
            <div className={`${styles.cardHeight} flex justify-center`}>
              <Image
                src={step.image}
                alt={step.title}
                placeholder="blur"
                blurDataURL="/images/logo.png"
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
          <p className="mt-3 lg:mt-5 leading-tight">{t(step.text)}</p>
        </Fade>
      </div>
    </Slide>
  );
};

export default Step;
