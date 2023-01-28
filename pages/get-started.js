import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useAppContext } from "../components/AppContext";
import GetStartedForm from "../components/GetStarted/Form";

const GetStarted = () => {
  const { setLogoDark } = useAppContext();
  useEffect(() => {
    setLogoDark(false);
  }, []);

  return (
    <Layout
      title="Get Started "
      bgNav="bg-pri_dark"
      textNav="text-white"
      bgHamburger="bg-white"
    >
      <section className="min-h-screen  bg-pri_dark text-white py-20">
        <div className="screen-center">
          <div className="md:w-[70%]">
            <p className="h2-text">
              Integrate TexKoop’s Solution <br></br>Into Your Retail Service.
            </p>
            <div className="md:w-[80%] mt-5">
              <p className="mb-5">Run a retail enterprise?</p>
              <p>
                Subscribe to TexKoop’s enterprise service and have our solution
                seamlessly built in to handle your orders in real-time.
              </p>
            </div>
            <GetStartedForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GetStarted;
