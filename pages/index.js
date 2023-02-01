import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Logo from "../components/Reusable/Logo";
import { motion } from "framer-motion";
import Timer from "../components/Home/Timer";
import HomePage from "../components/Home/HomePage";
import { useAppContext } from "../components/AppContext";

export default function Home() {
  const [start, setStart] = useState(true);
  const [animation, setAnimation] = useState(false);
  const { setLogoDark, navOpen } = useAppContext();
  useEffect(() => {
    setLogoDark(false);
  }, []);

  const startTimer = () => {
    setStart(false);
    setTimeout(() => {
      setAnimation(true);
    }, 3500);
  };
  return (
    <Layout
      title="Home"
      bgNav="bg-pri_dark"
      textNav="text-white"
      bgHamburger="bg-white"
    >
      {/* <div className="text-white bg-pri_dark">
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
      </div> */}
      <div className={`${navOpen && "blur"} `}>
        <HomePage />
      </div>
    </Layout>
  );
}
