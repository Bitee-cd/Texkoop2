import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useAppContext } from "../components/AppContext";
import { services } from "../utils/data";
import Card from "../components/Services/Card";

const Services = () => {
  const { setLogoDark } = useAppContext();
  useEffect(() => {
    setLogoDark(true);
  }, []);
  const { data } = services;
  return (
    <Layout
      title="Our Services"
      bgNav="bg-white"
      textNav="text-pri_dark"
      bgHamburger="bg-pri_dark"
    >
      <section className="max-w-[1400px] lg:w-[90%] mx-auto my-10">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </section>
    </Layout>
  );
};

export default Services;
