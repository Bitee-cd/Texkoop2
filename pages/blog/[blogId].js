import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import { useAppContext } from "../../components/AppContext";

const BlogDetail = () => {
  const { setLogoDark } = useAppContext();
  useEffect(() => {
    setLogoDark(true);
  }, []);
  return (
    <Layout
      title="Blog"
      bgNav="bg-white"
      textNav="text-bg-pri_dark"
      bgHamburger="bg-pri_dark"
    >
      Blog
    </Layout>
  );
};

export default BlogDetail;
