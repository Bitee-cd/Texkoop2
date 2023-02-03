import React from "react";
import styles from "../../styles/Home.module.css";
import { Fade } from "react-awesome-reveal";
import useTranslation from "next-translate/useTranslation";
const SuperApp = (bgcolor) => {
  const { t } = useTranslation("common");
  return (
    <section className={`${styles.shadowCard} ${bgcolor} `}>
      <div className="screen-center py-10 lg:py-20 md:flex">
        <div className="lg:w-[60%] flex justify-between">
          <div className="w-[60%]">
            <Fade delay={200} duration={500} damping={0.2} cascade>
              <p className="h2-text text-pri_dark font-black leading-tight">
                {t("super_app_head")}
              </p>
              <p className="p-text my-2 lg:my-10 text-[#3B3C3C]">
                {t("super_app_text")}
              </p>
            </Fade>
            <div className="flex gap-2 lg:gap-10">
              <div>
                <img
                  src="/images/logo/googleplay.png"
                  alt="download on google play"
                />
              </div>
              <div>
                <img
                  src="/images/logo/appstore.png"
                  alt="download on apple store"
                />
              </div>
            </div>
          </div>
          <div className="w-[37%]">
            <img
              src="/images/phone.png"
              alt="texkoop mobile phone"
              className={`w-full h-full`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperApp;
