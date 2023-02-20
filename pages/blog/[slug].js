import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import { useAppContext } from "../../components/AppContext";
import SinglePost from "../../components/Blog/SinglePost";
import RelatedArticle from "../../components/Blog/RelatedArticles";
import { blog } from "../../utils/data";
import MiddleSection from "../../components/Blog/MiddleSection";
const BlogDetail = () => {
  const { setLogoDark } = useAppContext();
  const { topArticles } = blog;
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
      <SinglePost />
      <MiddleSection />
      <div className="bg-[#f5f5f5] py-10">
        <RelatedArticle />
      </div>
    </Layout>
  );
};

export default BlogDetail;
