import useTranslation from "next-translate/useTranslation";
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { terms } from "../utils/data";
import { useAppContext } from "../components/AppContext";

const TermsConditions = () => {
  const { t } = useTranslation("terms");
  const { data } = terms;
  const { setLogoDark } = useAppContext();
  useEffect(() => {
    setLogoDark(true);
  }, []);

  return (
    <Layout
      title="Terms and Conditions"
      bgNav="bg-white"
      textNav="text-bg-pri_dark"
      bgHamburger="bg-pri_dark"
    >
      <section className={` my-10`}>
        <div className="screen-center">
          <p className="h2-text font-[700] text-pri_dark">{t("main_head")}</p>
        </div>
        <div>
          {data.map((data) => (
            <div key={data.id} className={`termsShadowCard pb-2 mb:pb-5`}>
              <div className="screen-center ">
                {data.head && (
                  <p className="h2-text font-[700] my-5 text-pri_dark">
                    {t(data.head)}
                  </p>
                )}
                {data.text && (
                  <p className="p-text text-main_black">{t(data.text)}</p>
                )}
                {data.sub &&
                  data.sub.map((item) => (
                    <div key={item.id}>
                      {item.head && (
                        <p className="h2-text font-[700] my-5 text-pri_dark">
                          {t(item.head)}
                        </p>
                      )}
                      {item.text && (
                        <p className="p-text text-main_black">{t(item.text)}</p>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default TermsConditions;
