import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useAppContext } from "../components/AppContext";
import RiderForm from "../components/Rider/Form";
import useTranslation from "next-translate/useTranslation";

const Rider = () => {
  const { setLogoDark } = useAppContext();
  const { t } = useTranslation("rider");
  useEffect(() => {
    setLogoDark(false);
  }, []);

  return (
    <Layout
      title="Home"
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
              <br></br> {t("headaii")}
            </p>
            <div className=" mt-5">
              <p>
                {t("textai")}
                <br></br>
                {t("textaii")}
              </p>
            </div>
            <RiderForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Rider;
