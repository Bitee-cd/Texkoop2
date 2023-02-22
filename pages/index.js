import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Logo from "../components/Reusable/Logo";
import { motion } from "framer-motion";
import Timer from "../components/Home/Timer";
import HomePage from "../components/Home/HomePage";
import { useAppContext } from "../components/AppContext";
import NormalTimer from "../components/Home/NormalTimer";
import Modal from "../components/Home/Modal";

export default function Home({ previousRoute }) {
  const [start, setStart] = useState(true);
  const [animation, setAnimation] = useState(false);
  const { setLogoDark } = useAppContext();
  const [modal, setModal] = useState(false);
  useEffect(() => {
    setLogoDark(false);
    if (previousRoute) {
      setAnimation(true);
    }
  }, []);

  const startTimer = () => {
    setStart(false);
    setTimeout(() => {
      setAnimation(true);
      startModal();
    }, 3500);
  };

  const startModal = () => {
    setTimeout(() => {
      setModal(true);
    }, 12000);
  };
  return (
    <>
      {!animation ? (
        <div className="h-screen w-screen bg-pri_dark text-white flex justify-center items-center ">
          <div className="">
            {start ? (
              <div
                onClick={() => startTimer()}
                className="uppercase font-[700] text-xl cursor-pointer h-screen w-screen flex justify-center items-center"
              >
                <div> click to start</div>
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
                  <NormalTimer />
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      ) : (
        <Layout
          title="Home"
          bgNav="bg-pri_dark"
          textNav="text-white"
          bgHamburger="bg-white"
          modal={modal}
        >
          <HomePage modal={modal} />
          <Modal modal={modal} setModal={setModal} />
        </Layout>
      )}
    </>
  );
}
