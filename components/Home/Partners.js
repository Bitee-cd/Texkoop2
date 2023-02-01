import React from "react";
import styles from "../../styles/Home.module.css";
const Partners = () => {
  return (
    <div className={`${styles.shadowCard} bg-white  `}>
      <div className=" w-[90%] md:ml-auto  mx-auto max-w-[1440px] py-10 md:pt-20">
        <p className="h2-text leading-tight text-pri ">Partners</p>
        <hr className="hidden md:block bg-black border-black border-top w-screen mt-5"></hr>
        <div className="flex items-center  xl:gap-10">
          <div className="min-w-[200px]">
            <img
              src="/images/logo/amazon.png"
              alt="amazon"
              className=" w-full"
            />
          </div>
          <div className="min-w-[200px]">
            <img
              src="/images/logo/chronopost.png"
              alt="chronopost"
              className=" w-full"
            />
          </div>
          <div className="min-w-[200px]">
            <img
              src="/images/logo/youStock.png"
              alt="youStock"
              className=" w-full"
            />
          </div>
          <div className="flex justify-center min-w-[150px]">
            <img
              src="/images/logo/aggPrint.png"
              alt="aggPrint"
              className=" w-[50%]"
            />
          </div>
          <div className="min-w-[200px]">
            <img
              src="/images/logo/electric.png"
              alt="electric"
              className=" w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
