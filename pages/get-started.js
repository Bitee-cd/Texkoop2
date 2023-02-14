import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useAppContext } from "../components/AppContext";
import GetStartedForm from "../components/GetStarted/Form";
import useTranslation from "next-translate/useTranslation";

const GetStarted = () => {
  const { setLogoDark } = useAppContext();
  const { t } = useTranslation("started");
  useEffect(() => {
    setLogoDark(false);
  }, []);

  return (
    <Layout
      title="Get Started "
      bgNav="bg-pri_dark"
      textNav="text-white"
      bgHamburger="bg-white"
    >
      <section
        className={` min-h-screen blur-background   bg-pri_dark text-white py-20`}
      >
        <div className="screen-center">
          <div className="md:w-[70%]">
            <p className="h2-text">
              {t("headai")}
              <br></br>
              {t("headaii")}
            </p>
            <div className="md:w-[80%] mt-5">
              <p className="mb-5">{t("textai")}</p>
              <p>{t("textaii")}</p>
            </div>
            <GetStartedForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GetStarted;
