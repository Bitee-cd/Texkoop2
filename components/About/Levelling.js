import React from "react";
import styles from "../../styles/About.module.css";
const Levelling = () => {
  return (
    <section className={`${styles.shadowCard}  py-10`}>
      <div className="screen-center">
        <p className="text-pri_dark h2-text font-[700]">
          <span className="hidden md:block">
            Levelling the playing field in last-mile
            <br></br>
            delivery
          </span>
          <span className="md:hidden">
            Levelling the playing field in last-mile delivery
          </span>
        </p>
        <p className="p-text mt-5">
          We understand that getting products to their destination on time is
          crucial for businesses, and we strive to be the best in the industry
          at making that happen.<br></br> Our system uses real-time data to
          adjust routes and delivery schedules in order to minimize delays and
          ensure that shipments arrive on time.
        </p>
      </div>
    </section>
  );
};

export default Levelling;
