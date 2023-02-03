import React from "react";
import styles from "../../styles/About.module.css";
import useTranslation from "next-translate/useTranslation";

const WhoWeWorkWith = () => {
  const { t } = useTranslation("about");
  return (
    <section className={`${styles.shadowCard}  py-10`}>
      <div className="screen-center">
        <p className="text-pri_dark h2-text font-[700]">{t("head_c")}</p>
        <p className="p-text mt-5">{t("text_c")}</p>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
