import useTranslation from "next-translate/useTranslation";
import React from "react";
import { Fade } from "react-awesome-reveal";

const AppWaiting = () => {
  const { t } = useTranslation("common");
  return (
    <div className="w-full grid content-around ">
      <Fade delay={200} duration={500} damping={0.2} cascade>
        <p className="superapp-text text-pri_dark font-[600]  leading-tight">
          {t("common:super_app_head")}
        </p>
      </Fade>
      <p className="p-tiny-text  text-[#3B3C3C]"> {t("Modal_text")}</p>
      <form>
        <div className="">
          <input
            required
            type="text"
            placeholder={t("f_name")}
            name="name"
            className="modal_input"
          />
        </div>
        <div className="">
          <input
            required
            placeholder={t("email")}
            name="email"
            type="email"
            className="modal_input"
          />
        </div>
        <button
          type={"submit"}
          className="modal_button mt-2 lg:mt-5 lg:w-[300px] flex justify-center"
        >
          {t("Modal_button")}
        </button>
      </form>
    </div>
  );
};

export default AppWaiting;
