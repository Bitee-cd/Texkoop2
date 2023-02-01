import React from "react";
import styles from "../../styles/Home.module.css";
const SuperApp = (bgcolor) => {
  return (
    <section className={`${styles.shadowCard} ${bgcolor} `}>
      <div className="screen-center py-10 lg:py-20 md:flex">
        <div className="lg:w-[60%] flex justify-between">
          <div className="w-[60%]">
            <p className="p-text text-pri_dark font-black leading-tight">
              ONE SUPER APP FOR SWIFT DELIVERIES!
            </p>
            <p className="p-text my-2 lg:my-10 text-[#3B3C3C]">
              We provide on-demand and customizable delivery services through
              our seamless digital platform that is designed to support users’
              need for easy and transparency.
            </p>
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
