import React from "react";
import Layout from "../components/Layout";
import Levelling from "../components/About/Levelling";
import YouLog from "../components/About/YouLog";
import WhoWeWorkWith from "../components/About/WhoWeWorkWith";
import ImageSlider from "../components/About/ImageSlider";
import OurMission from "../components/About/OurMission";
import OurFocus from "../components/About/OurFocus";
import SuperApp from "../components/Home/SuperApp";

const about = () => {
  return (
    <Layout title="About">
      <Levelling />
      <YouLog />
      <WhoWeWorkWith />
      <ImageSlider />
      <OurMission />
      <OurFocus />
      <SuperApp bgcolor="bg-white" />
    </Layout>
  );
};

export default about;
