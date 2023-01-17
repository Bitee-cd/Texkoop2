import useTranslation from "next-translate/useTranslation";
import React, { useState } from "react";
import { form } from "../utils/data";

const Form = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const createWaitlist = async (form_values) => {
    const waitlist = await fetch(`/api/forms/waitlist/`, {
      method: "POST",

      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(form_values),
    });
    //it returns status of 201 if it was successfull and 400 if not successfull

    if (waitlist.status === 201) {
      setSuccess(true);
    } else setError(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);

    const form_values = Object.fromEntries(formData);

    createWaitlist(form_values);
  };

  const { t, lang } = useTranslation("home");
  const { select } = form;
  return (
    <div className="col-span-3">
      <p className="p-text text-pri_dark capitalize font-[600]">{t("Headb")}</p>
      <p className="p-tiny-text text-black">{t("textb")}</p>
      <form
        onSubmit={submitHandler}
        id="riderForm"
        className=" grid gap-2 md:gap-5 my-5 md:my-10  p-tiny-text"
      >
        <p className="p-tiny-text text-pri_dark font-medium">{t("FillIn")}</p>
        <div className="">
          <input
            required
            type="text"
            placeholder={t("FirstName")}
            name="name"
            className="input"
          />
        </div>
        <div className="">
          <input
            required
            placeholder={t("Email")}
            name="email"
            type="email"
            className="input"
          />
        </div>
        <div className="">
          <select
            required
            defaultValue={t("Role")}
            name="role"
            className=" w-full px-3 h-[30px] lg:h-[50px] text-color outline-none  border-pri_dark bg-ter border"
          >
            <option disabled>{t("Role")}</option>
            {select.map((item) => (
              <option key={item.name} value={t(item.name)}>
                {t(item.name)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button type={"submit"} className="button">
            {t("button2")}
          </button>
        </div>
        <div>
          {success && (
            <p className="text-pri_dark p-tiny-text font-[500]">
              {t("success")}
            </p>
          )}
          {error && (
            <p className="text-red-600 p-tiny-text font-[500]">{t("error")}</p>
          )}
        </div>
      </form>
    </div>
  );
};
export default Form;
