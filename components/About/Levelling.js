import React from "react";
import styles from "../../styles/About.module.css";
import { Fade } from "react-awesome-reveal";
import useTranslation from "next-translate/useTranslation";
const Levelling = () => {
  const { t } = useTranslation("about");
  return (
    <section className={`${styles.shadowCard}  py-10`}>
      <div className="screen-center">
        <Fade delay={200} duration={1000} cascade>
          <p className="text-pri_dark h2-text font-[700]">
            <span className="">{t("Heada")}</span>
          </p>
          <p className="p-text mt-5">
            {t("textai")}
            <br></br> {t("textaii")}
          </p>
        </Fade>
      </div>
    </section>
  );
};

export default Levelling;
