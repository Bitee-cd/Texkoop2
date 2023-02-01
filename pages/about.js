import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Levelling from "../components/About/Levelling";
import YouLog from "../components/About/YouLog";
import WhoWeWorkWith from "../components/About/WhoWeWorkWith";
import ImageSlider from "../components/About/ImageSlider";
import OurMission from "../components/About/OurMission";
import OurFocus from "../components/About/OurFocus";
import SuperApp from "../components/Home/SuperApp";
import { useAppContext } from "../components/AppContext";
import { Fade } from "react-awesome-reveal";

const about = () => {
  const { setLogoDark, navOpen } = useAppContext();
  useEffect(() => {
    setLogoDark(true);
  }, []);
  return (
    <Layout
      title="About"
      bgNav="bg-white"
      textNav="text-pri_dark"
      bgHamburger="bg-pri_dark"
    >
      <div className={`${navOpen && "blur"} `}>
        <Fade duration={500} damping={0.1} cascade>
          <Levelling />
          <YouLog />
          <WhoWeWorkWith />
          <ImageSlider />
          <OurMission />
          <OurFocus />
          <SuperApp bgcolor="bg-white" />
        </Fade>
      </div>
    </Layout>
  );
};

export default about;
