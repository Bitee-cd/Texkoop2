import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Timer = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  const startNumber = 9;
  const percentageString = timerSeconds.toString();
  const digits = percentageString.split("").map((digit) => (
    <AnimatePresence>
      <motion.div
        initial={{ y: 10 }}
        animate={{ y: 0 }}
        exit={{ y: -5, opacity: 0.4 }}
        transition={{ type: "tween" }}
        key={digit}
        className="mr-1"
      >
        {digit}
      </motion.div>
    </AnimatePresence>
  ));
  return (
    <>
      <section className="grid grid-cols-4 gap-5">
        <div className="timer">{timerDays}</div>
        <div className="timer">{timerHours}</div>
        <div className="timer">{timerMinutes}</div>
        <div className="timer flex">{digits}</div>
      </section>
      {/* <section>
        <h2>second part</h2>
        <div className="flip_card flip">
          <div className="top">{startNumber}</div>
          <div className="bottom">{startNumber}</div>
        </div>
      </section> */}
    </>
  );
};
Timer.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};
export default Timer;
