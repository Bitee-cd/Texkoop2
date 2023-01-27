import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../../styles/Check.module.css";

const GetStartedForm = () => {
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

  return (
    <form
      onSubmit={submitHandler}
      id="riderForm"
      className=" grid gap-2 md:gap-5 py-5 md:py-10  p-text"
    >
      <div className="my-5">
        <label className="">Your Name</label>
        <input required type="text" name="name" className="input" />
      </div>
      <div className="mt-5">
        <label className="">Business Name</label>
        <input required type="text" name="business_name" className="input" />
      </div>
      <div className="mt-5">
        <label className="">Your Email</label>
        <input required type="email" name="email" className="input" />
      </div>
      <div className="mt-5">
        <label className="">Phone Number</label>
        <input required type="number" name="number" className="input" />
      </div>
      <div className="mt-5">
        <label className="">Country</label>
        <input required type="text" name="country" className="input" />
      </div>
      <div className="mt-5">
        <label className="">City</label>
        <input required type="text" name="city" className="input" />
      </div>
      <div className="mt-5">
        <label className="">Industry</label>
        <input required type="text" name="industry" className="input" />
      </div>
      <div className="mt-5">
        <label className="">Delivery Volume</label>
        <input required type="number" name="volume" className="input" />
      </div>
      <div className=" relative mt-5">
        <label className="absolute bg-pri_dark -translate-y-[50%] px-3 ml-2">
          Message
        </label>
        <textarea
          rows="10"
          required
          type="number"
          name="volume"
          className="bg-transparent border border-white w-full p-5"
        />
      </div>
      <div className="mb-3">
        <p>
          We collect this data for the purposes of processing your application.
          By clicking this box, you acknowledge that you have read and
          understood the
          <span className="text-sec mx-2">
            <Link href="#">privacy policy</Link>
          </span>
          and
          <span className="text-sec mx-2">
            <Link href="#">terms of service</Link>
          </span>
        </p>
        <label className={`${styles.checkbox}`}>
          <input type="checkbox" />
          <span className={styles.checkmark}></span>
        </label>
      </div>

      <div>
        <button type={"submit"} className="button">
          Send
        </button>
      </div>
      <div>
        {success && (
          <p className="text-pri_dark p-tiny-text font-[500]">{t("success")}</p>
        )}
        {error && (
          <p className="text-red-600 p-tiny-text font-[500]">{t("error")}</p>
        )}
      </div>
    </form>
  );
};
export default GetStartedForm;
