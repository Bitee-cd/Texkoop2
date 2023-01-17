import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Preloader() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => prevPercentage + 1);
    }, 99);
    return () => clearInterval(interval);
  }, []);

  const percentageString = percentage.toString();
  const digits = percentageString.split("").map((digit) => (
    <AnimatePresence>
      <motion.div
        initial={{ y: 10 }}
        animate={{ y: 0 }}
        exit={{ opacity: 0.7 }}
        transition={{ type: "tween" }}
        key={digit}
        className=""
      >
        {digit}
      </motion.div>
    </AnimatePresence>
  ));

  return (
    <div className="flex text-white justify-center items-center">
      <div className="text-center flex">{percentage}</div>
    </div>
  );
}

export default Preloader;
