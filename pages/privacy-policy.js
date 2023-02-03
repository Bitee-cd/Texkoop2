import useTranslation from "next-translate/useTranslation";
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { privacy } from "../utils/data";
import { useAppContext } from "../components/AppContext";

const privacy_policy = () => {
  const { t } = useTranslation("privacy");
  const { data } = privacy;
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
      <section className="">
        {data.map((card) => (
          <div className={`termsShadowCard my-10 pb-1 `} key={card.id}>
            <div className="screen-center">
              <p className="my-5 h2-text font-bold text-pri_dark">
                {t(card.head)}
              </p>
              <p className="my-5 p-text ">{t(card.text)}</p>
              <div>
                {card.sub &&
                  card.sub.map((data) => (
                    <div className={` my-10`} key={data.id}>
                      <p className="my-5 p-text font-[700] text-pri_dark">
                        {t(data.head)}
                      </p>
                      <p className="my-5 p-text ">{t(data.text)}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default privacy_policy;
