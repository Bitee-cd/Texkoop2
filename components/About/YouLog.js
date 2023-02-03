import React from "react";
import styles from "../../styles/About.module.css";
import { about } from "../../utils/data";
import Step from "./Step";
import useTranslation from "next-translate/useTranslation";

const YouLog = () => {
  const { steps } = about;
  const { t } = useTranslation("about");
  return (
    <>
      <section className={`${styles.shadowCard}  py-10`}>
        <div className="screen-center">
          <p className="text-pri_dark h2-text font-[700]">{t("head_b")}</p>
        </div>
      </section>
      <section>
        <div className="screen-center grid grid-cols-2 gap-5 lg:gap-10 xl:gap-20 gap-y-10 p-tiny-text lg:grid-cols-3 my-10 xl:my-20">
          {steps.map((step) => (
            <Step key={step.id} step={step} />
          ))}
        </div>
      </section>
    </>
  );
};

export default YouLog;
