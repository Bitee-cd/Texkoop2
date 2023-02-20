import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useAppContext } from "../components/AppContext";
import { FAQ, services } from "../utils/data";
import Card from "../components/FAQs/Card";
import useTranslation from "next-translate/useTranslation";

const FAQs = () => {
  const { setLogoDark } = useAppContext();
  useEffect(() => {
    setLogoDark(true);
  }, []);
  const { faquestions } = FAQ;
  const { t } = useTranslation("faq");

  return (
    <Layout
      title="Frequently Asked Questions"
      bgNav="bg-white"
      textNav="text-bg-pri_dark"
      bgHamburger="bg-pri_dark"
    >
      <section className={` min-h-screen  bg-white text-pri_dark py-10`}>
        <div className="screen-center">
          <p className="h2-text">Frequently Asked Questions</p>
          <div className="my-5">
            {faquestions.map((faq) => (
              <div key={faq.id} className="my-10">
                <p className="h2-text">{t(faq.text)}</p>
                {faq.data.map((item) => (
                  <Card item={item} key={item.id} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQs;
