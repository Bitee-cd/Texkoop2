import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useAppContext } from "../components/AppContext";
import SayHiForm from "../components/SayHI/Form";
import useTranslation from "next-translate/useTranslation";

const GetStarted = () => {
  const { setLogoDark } = useAppContext();
  const { t } = useTranslation("contact");
  useEffect(() => {
    setLogoDark(true);
  }, []);

  return (
    <Layout
      title="Say Hi "
      bgNav="bg-white"
      textNav="text-bg-pri_dark"
      bgHamburger="bg-pri_dark"
    >
      <section className={` min-h-screen  bg-white text-pri_dark py-20`}>
        <div className="screen-center">
          <div className="md:w-[70%]">
            <p className="h2-text">{t("head")}</p>
            <div className="lg:w-[60%] mt-5">
              <p>
                {t("textai")}
                <br></br>
                {t("textaii")}
              </p>
            </div>
            <SayHiForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GetStarted;
