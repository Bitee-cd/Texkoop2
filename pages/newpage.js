import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useAppContext } from "../components/AppContext";

const newpage = () => {
  const { setLogoDark } = useAppContext();
  useEffect(() => {
    setLogoDark(true);
  }, []);

  return (
    <Layout
      title="Privacy Policy"
      bgNav="bg-white"
      textNav="text-bg-pri_dark"
      bgHamburger="bg-pri_dark"
    >
      new page layout
    </Layout>
  );
};

export default newpage;
