import React from "react";
import styles from "../../styles/Home.module.css";
import { home } from "../../utils/data";

const ThirdSection = () => {
  const { testimonial } = home;
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
          <div className="lg:w-[80%]  2xl:my-20">
            <p className="h2-text text-white font-bold">Reviews</p>
            {testimonial.map((testimonial) => (
              <div key={testimonial.id} className="my-5 p-text">
                <p className="text-sec">{testimonial.name}</p>
                <p className="text-sec uppercase font-medium">
                  {testimonial.title}
                </p>
                <p className="mt-5 text-white">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
