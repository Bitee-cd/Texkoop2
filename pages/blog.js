import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useAppContext } from "../components/AppContext";
import TopSection from "../components/Blog/TopSection";
import RecentArticles from "../components/Blog/RecentArticles";

const Blog = () => {
  const { setLogoDark } = useAppContext();
  useEffect(() => {
    setLogoDark(true);
  }, []);
  return (
    <Layout
      title="Blog"
      bgNav="white"
      textNav="text-bg-pri_dark"
      bgHamburger="bg-pri_dark"
    >
      <TopSection />
      <RecentArticles />
    </Layout>
  );
};

export default Blog;
