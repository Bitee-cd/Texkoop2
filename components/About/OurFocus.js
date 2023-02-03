import React from "react";
import styles from "../../styles/About.module.css";
import { about } from "../../utils/data";
import Step from "./Step";
import useTranslation from "next-translate/useTranslation";

const OurFocus = () => {
  const { secondSteps } = about;
  const { t } = useTranslation("about");
  return (
    <>
      <section className={`${styles.shadowCard}  py-10`}>
        <div className="screen-center">
          <p className="text-pri_dark h2-text font-[700]">{t("head_e")} </p>
          <p className="p-text mt-5 md:w-[80%]">{t("text_e")}</p>
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
