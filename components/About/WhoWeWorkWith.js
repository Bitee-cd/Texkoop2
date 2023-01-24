import React from "react";
import styles from "../../styles/About.module.css";

const WhoWeWorkWith = () => {
  return (
    <section className={`${styles.shadowCard}  py-10`}>
      <div className="screen-center">
        <p className="text-pri_dark h2-text">Who we work with</p>
        <p className="p-text mt-5">
          We offer delivery services to individuals and
        </p>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
