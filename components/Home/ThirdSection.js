import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import { home } from "../../utils/data";
import { Fade } from "react-awesome-reveal";
import useTranslation from "next-translate/useTranslation";

const ThirdSection = () => {
  const { testimonial } = home;
  const [data, setData] = useState(testimonial);
  const [change, setChange] = useState(true);

  const { t } = useTranslation("home");
  useEffect(() => {
    change ? setData(testimonial.slice(0, 2)) : setData(testimonial);
  }, [change]);

  return (
    <div
      className={`bg-[#F4F8FF]  relative overflow-hidden  flex items-center ${styles.shadowCard}`}
    >
      <div className={`${styles.circle2} ${styles.bottomRight}`}></div>
      <div className={`${styles.circle2} ${styles.cornerLeft}`}></div>
      <div className={`${styles.zindex2} screen-center`}>
        <div
          className={`${styles.boxCard2} rounded-[10px] bg-pri_dark lg:ml-[5%] mx-auto h-[50%] lg:w-[60%] my-10 lg:my-20 text-black p-5 lg:p-10 gap-y-5`}
        >
          <div className="md:hidden lg:w-[80%]  2xl:my-20">
            <Fade delay={200} duration={500} damping={0.3} cascade>
              <p className="h2-text text-white ">{t("Headc")}</p>
              {data.map((testimonial) => (
                <div key={testimonial.id} className="my-5 p-text">
                  <p className="text-sec">{t(testimonial.name)}</p>
                  <p className="text-sec font-medium">{t(testimonial.title)}</p>
                  <p className="mt-5 text-white font-[300]">
                    {t(testimonial.text)}
                  </p>
                </div>
              ))}
            </Fade>
            <div
              onClick={() => setChange(!change)}
              className="md:hidden text-sec"
            >
              {change ? <p>{t("read_more")}</p> : <p>{t("read_less")}</p>}
            </div>
          </div>
          {/* dekstop versopm  */}
          <div className="hidden md:block lg:w-[80%]  2xl:my-20">
            <Fade delay={200} duration={500} damping={0.3} cascade>
              <p className="h2-text text-white ">{t("Headc")}</p>
              {testimonial.map((testimonial) => (
                <div key={testimonial.id} className="my-5 p-text">
                  <p className="text-sec">{t(testimonial.name)}</p>
                  <p className="text-sec font-medium">{t(testimonial.title)}</p>
                  <p className="mt-5 text-white font-[300]">
                    {t(testimonial.text)}
                  </p>
                </div>
              ))}
            </Fade>
          </div>
          {/* deskop  */}
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
