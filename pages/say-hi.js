import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useAppContext } from "../components/AppContext";
import SayHiForm from "../components/SayHI/Form";

const GetStarted = () => {
  const { setLogoDark } = useAppContext();
  useEffect(() => {
    setLogoDark(true);
  }, []);

  return (
    <Layout
      title="Say Hi "
      bgNav="white"
      textNav="text-bg-pri_dark"
      bgHamburger="bg-pri_dark"
    >
      <section className="min-h-screen  bg-white text-pri_dark py-20">
        <div className="screen-center">
          <div className="md:w-[70%]">
            <p className="h2-text">Interact with the Team</p>
            <div className="lg:w-[60%] mt-5">
              <p>
                Have a Suggestion, Request or Complaint? We are here to take
                them all. Kindly fill in the form below.
              </p>
            </div>
            <SayHiForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GetStarted;
