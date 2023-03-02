import React from "react";
import styles from "../../styles/Home.module.css";
import { Fade } from "react-awesome-reveal";
import useTranslation from "next-translate/useTranslation";
import mobile from "../../public/images/phone.png";
import mobile_phone from "../../public/images/mobile2.png";
import googleplay from "../../public/images/logo/googleplay.png";
import appstore from "../../public/images/logo/appstore.png";
import Image from "next/image";
import AppWaiting from "./AppWaiting";

const SuperApp = (bgcolor) => {
  const { t } = useTranslation("common");
  return (
    <section className={`${styles.shadowCard} ${bgcolor} `}>
      <div className="screen-center py-10 lg:py-20 md:flex">
        <div className="lg:w-[60%] flex justify-between">
          <div className="w-[60%] grid content-around  lg:pb-10">
            {/* <div>
              <Fade delay={200} duration={500} damping={0.2} cascade>
                <p className="superapp-text text-pri_dark font-black leading-tight">
                  {t("super_app_head")}
                </p>
                <p className="small-text mt-3 text-main_black">
                  {t("super_app_text")}
                </p>
              </Fade>
            </div>
            <div className="flex items-end gap-2 lg:gap-10">
              <div>
                <Image
                  src={googleplay}
                  placeholder="blur"
                  alt="download on google play"
                />
              </div>
              <div>
                <Image
                  src={appstore}
                  placeholder="blur"
                  alt="download on apple store"
                />
              </div>
            </div> */}
            <AppWaiting />
          </div>
          <div className="w-[40%] mt-2">
            <Image
              src={mobile}
              alt="texkoop mobile phone"
              placeholder="blur"
              className={`w-full h-full hidden lg:block object-cover`}
            />
            <Image
              src={mobile_phone}
              alt="texkoop mobile phone"
              placeholder="blur"
              className={`w-full h-full lg:hidden object-cover`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperApp;
