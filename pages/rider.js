import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useAppContext } from "../components/AppContext";
import GetStartedForm from "../components/GetStarted/Form";
import RiderForm from "../components/Rider/Form";

const Rider = () => {
  const { setLogoDark } = useAppContext();
  useEffect(() => {
    setLogoDark(false);
  }, []);

  return (
    <Layout
      title="Home"
      bgNav="bg-pri_dark"
      textNav="text-white"
      bgHamburger="bg-white"
    >
      <section className="min-h-screen  bg-pri_dark text-white py-20">
        <div className="screen-center">
          <div className="md:w-[70%]">
            <p className="h2-text">
              Become a part of the good work.<br></br> Be a transport partner
              for efficient delivery!
            </p>
            <div className="md:w-[80%] mt-5">
              <p>
                Would you like to earn extra income while working in a
                rider-friendly environment? Join our community of riders today!
              </p>
            </div>
            <RiderForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Rider;
