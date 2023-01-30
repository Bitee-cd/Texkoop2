import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const AnotherTime = () => {
  const [percentage, setPercentage] = useState(0);
  const [running, setRunning] = useState(true);
  let interval;
  useEffect(() => {
    interval = setInterval(() => {
      setPercentage((prevPercentage) => prevPercentage + 1);
      if (percentage >= 99) {
        clearInterval(interval.current);
      }
    }, 100);
  }, [percentage]);
  useEffect(() => {
    if (percentage >= 99) {
      setRunning(false);
    }
  }, [percentage]);

  return (
    <AnimatePresence mode="wait">
      <motion.div>{percentage}</motion.div>
    </AnimatePresence>
  );
};

export default AnotherTime;
