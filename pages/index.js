import { useState } from "react";
import Layout from "../components/Layout";
import Logo from "../components/Logo";
import { motion } from "framer-motion";
import Timer from "../components/Home/Timer";
import HomePage from "../components/Home/HomePage";

export default function Home() {
  const [start, setStart] = useState(true);
  const [animation, setAnimation] = useState(false);
  const startTimer = () => {
    setStart(false);
    setTimeout(() => {
      setAnimation(true);
    }, 3500);
  };
  return (
    <Layout title="Start" background="bg-pri_dark">
      <div className="text-white">
        {!animation ? (
          <div className="flex justify-center items-center h-screen">
            {start ? (
              <div
                onClick={() => startTimer()}
                className="uppercase font-[700] text-xl cursor-pointer "
              >
                click to start
              </div>
            ) : (
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
                  <Timer setAnimation={setAnimation} />
                </motion.div>
              </motion.div>
            )}
          </div>
        ) : (
          <HomePage />
        )}
      </div>
    </Layout>
  );
}
