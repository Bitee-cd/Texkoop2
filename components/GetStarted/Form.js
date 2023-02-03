import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../../styles/Check.module.css";
import postData from "../formHandlers/post";

const GetStartedForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const createData = async (form_values) => {
    let url = `/api/forms/partner/`;
    let response = await postData(url, form_values);
    //it returns status of true if it was successfull and false if not successfull

    if (response) {
      setSuccess(true);
    } else setError(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);

    const form_values = Object.fromEntries(formData);

    createData(form_values);
  };

  const { t, lang } = useTranslation("started");

  return (
    <form
      onSubmit={submitHandler}
      id="riderForm"
      className=" grid gap-2 md:gap-5 py-5 md:py-10  p-text"
    >
      <div className="my-5">
        <label className="">{t("name")}</label>
        <input required type="text" name="name" className="input" />
      </div>
      <div className="mt-5">
        <label className="">{t("c_name")}</label>
        <input required type="text" name="business_name" className="input" />
      </div>
      <div className="mt-5">
        <label className="">{t("email")}</label>
        <input required type="email" name="email" className="input" />
      </div>
      <div className="mt-5">
        <label className="">{t("number")}</label>
        <input required type="number" name="phone_number" className="input" />
      </div>
      <div className="mt-5">
        <label className="">{t("country")}</label>
        <input required type="text" name="country" className="input" />
      </div>
      <div className="mt-5">
        <label className="">{t("city")}</label>
        <input required type="text" name="city" className="input" />
      </div>
      <div className="mt-5">
        <label className="">{t("industry")}</label>
        <input required type="text" name="industry" className="input" />
      </div>
      <div className="mt-5">
        <label className="">{t("volume")}</label>
        <input
          required
          type="number"
          name="delivery_volume"
          className="input"
        />
      </div>
      <div className=" relative mt-5">
        <label className="absolute bg-pri_dark -translate-y-[50%] px-3 ml-2">
          {t("message")}
        </label>
        <textarea
          rows="10"
          required
          type="number"
          name="message"
          className="bg-transparent border border-white w-full p-5"
        />
      </div>
      <div className="mb-3">
        <p>
          {t("select_a")}
          <span className="text-sec mx-2">
            <Link href="#">{t("privacy_policy")}</Link>
          </span>
          {t("select_a")}
          <span className="text-sec mx-2">
            <Link href="#">{t("terms_of_service")}</Link>
          </span>
        </p>
        <label className={`${styles.checkbox}`}>
          <input required type="checkbox" />
          <span className={styles.checkmark}></span>
        </label>
      </div>

      <div>
        <button type={"submit"} className="button">
          {t("button_send")}
        </button>
      </div>
      <div>
        {success && (
          <p className="text-pri_dark p-tiny-text font-[500]">
            {t("common:success")}
          </p>
        )}
        {error && (
          <p className="text-red-600 p-tiny-text font-[500]">
            {t("common:error")}
          </p>
        )}
      </div>
    </form>
  );
};
export default GetStartedForm;
