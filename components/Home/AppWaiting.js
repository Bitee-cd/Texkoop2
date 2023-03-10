import useTranslation from "next-translate/useTranslation";
import React from "react";
import { Fade } from "react-awesome-reveal";
import postData from "../formHandlers/post";
import { form2 } from "../../utils/data";

const AppWaiting = () => {
  const createData = async (form_values) => {
    let url = `/api/forms/app-waitlist/`;
    let response = await postData(url, form_values);
    //it returns status of true if it was successfull and false if not successfull

    if (response) {
      // setSuccess(true);
      console.log("sucess");
    }
    // else setError(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);

    const form_values = Object.fromEntries(formData);

    createData(form_values);
  };
  const { select } = form2;
  const { t } = useTranslation("common");
  return (
    <div className="w-full grid content-around ">
      <Fade delay={200} duration={500} damping={0.2} cascade>
        <p className="superapp-text text-pri_dark font-[700]  leading-tight">
          {t("common:super_app_head")}
        </p>
      </Fade>
      <p className="p-tiny-text  text-[#3B3C3C]">{t("Modal_text")}</p>
      <form onSubmit={submitHandler}>
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
        <div className="">
          <select
            required
            defaultValue={t("Role")}
            name="role"
            className="text-[14px] lg:text-[20px] mt-2 w-full px-3 h-[30px] lg:h-[50px] bg-white text-color outline-none  border-[#3B3C3C]  border-b"
          >
            <option disabled className="placeholder">
              {t("Role")}
            </option>
            {select.map((item) => (
              <option key={item.name} value={t(item.name)}>
                {t(item.name)}
              </option>
            ))}
          </select>
        </div>
        <button
          type={"submit"}
          className="modal_button mt-2 lg:mt-5  flex justify-center"
        >
          {t("Modal_button")}
        </button>
      </form>
    </div>
  );
};

export default AppWaiting;
