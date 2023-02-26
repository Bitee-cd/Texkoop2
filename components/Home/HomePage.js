import React from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import Partners from "./Partners";
import SuperApp from "./SuperApp";

const HomePage = () => {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Partners />
      <SuperApp bgcolor="bg-[#F2F2F2]" />
    </div>
  );
};

export default HomePage;
