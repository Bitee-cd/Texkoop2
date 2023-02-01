import React from "react";
import styles from "../../styles/About.module.css";

const OurMission = () => {
  return (
    <section className={`${styles.shadowCard}  py-10`}>
      <div className="screen-center">
        <p className="text-pri_dark h2-text font-[700]">Our Mission</p>
        <p className="p-text mt-5">
          To offer exceptional delivery services and to ensure flexibility
          through seamless coordination.
        </p>
      </div>
    </section>
  );
};

export default OurMission;
