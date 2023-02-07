import React from "react";
import Logo from "./Reusable/Logo";
import NormalTimer from "./Home/NormalTimer";
import { motion } from "framer-motion";

const PreLoader = () => {
  return (
    <div className="bg-pri_dark text-white w-screen h-screen flex justify-center items-center">
      <div>
        <motion.div
          initial={{ y: -500 }}
          animate={{ y: 0 }}
          className="uppercase font-[700] text-xl   "
        >
          <Logo />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <NormalTimer />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PreLoader;
