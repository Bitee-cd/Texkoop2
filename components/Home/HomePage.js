import React, { useEffect } from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import Partners from "./Partners";
import SuperApp from "./SuperApp";
import { useAppContext } from "../AppContext";

const HomePage = ({ modal }) => {
  const { setLogoDark } = useAppContext();
  useEffect(() => {
    setLogoDark(false);
  }, []);

  return (
    <div className={`${modal && "blur"}`}>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Partners />
      <SuperApp bgcolor="bg-[#F2F2F2]" />
    </div>
  );
};

export default HomePage;
