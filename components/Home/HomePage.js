import React from "react";
import NavBar from "../NavBar";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import Footer from "../Footer";
import Partners from "./Partners";
import SuperApp from "./SuperApp";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Partners />
      <SuperApp />
      <Footer />
    </>
  );
};

export default HomePage;
