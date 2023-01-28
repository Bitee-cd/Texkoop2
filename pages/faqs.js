import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useAppContext } from "../components/AppContext";
import { services } from "../utils/data";
import Card from "../components/FAQs/Card";

const FAQs = () => {
  const { setLogoDark } = useAppContext();
  useEffect(() => {
    setLogoDark(true);
  }, []);
  const { data } = services;

  return (
    <Layout
      title="Frequently Asked Questions"
      bgNav="white"
      textNav="text-bg-pri_dark"
      bgHamburger="bg-pri_dark"
    >
      <section className="min-h-screen  bg-white text-pri_dark py-10">
        <div className="screen-center">
          <p className="h2-text">Frequently Asked Questions</p>
          <div className="my-5">
            {data.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQs;
