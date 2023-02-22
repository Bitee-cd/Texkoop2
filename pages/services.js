import React, { useEffect, useLayoutEffect } from "react";
import Layout from "../components/Layout";
import { useAppContext } from "../components/AppContext";
import { services } from "../utils/data";
import Card from "../components/Services/Card";
import styles from "../styles/Services.module.css";

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
      bgHamburger="bg-[#2C4E86]"
    >
      <div className={` relative bottom-0 `}>
        <section className="w-[90%] max-w-[1440px] mx-auto lg:px-1 py-10  overflow-hidden ">
          <div
            className={`${styles.circle} hidden md:block ${styles.cornerRight}`}
          ></div>
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default Services;
