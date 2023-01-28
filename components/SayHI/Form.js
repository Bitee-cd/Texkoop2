import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../../styles/Check.module.css";

const SayHiForm = () => {
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
        <input required type="text" name="name" className="input2" />
      </div>

      <div className="mt-5">
        <label className="">Email</label>
        <input required type="email" name="email" className="input2" />
      </div>
      <div className="mt-5">
        <label className="">Phone Number</label>
        <input required type="number" name="number" className="input2" />
      </div>
      <div className="mt-5">
        <label className="">City</label>
        <input required type="text" name="city" className="input2" />
      </div>
      <div className=" relative mt-5">
        <label className="absolute bg-white -translate-y-[50%] px-3 ml-2">
          Message
        </label>
        <textarea
          rows="10"
          required
          type="number"
          name="volume"
          className="bg-transparent border border-pri_dark w-full p-5"
        />
      </div>
      <div>
        <button type={"submit"} className="button3">
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
export default SayHiForm;
