import useTranslation from "next-translate/useTranslation";
import React from "react";

const Modal = ({ modal, setModal }) => {
  const { t } = useTranslation("common");
  return (
    <>
      {modal ? (
        <div className="fixed  top-0 bottom-0 left-0 right-0 flex justify-center items-center z-50 ">
          <div className="screen-center w-[70%] md:w-[50%] rounded-[10px] max-w-[400px] p-5 z-50 bg-[#D9D9D9] modal">
            <div onClick={() => setModal(false)} className="flex justify-end">
              <CancelIcon />
            </div>
            <div className="">
              <p className="superapp-text font-[600] uppercase text-pri_dark">
                {t("Modal_headi")}
                <br></br>
                {t("Modal_headii")}
              </p>
              <p className="p-text w-[80%] text-[#3B3C3C]">
                {" "}
                {t("Modal_text")}
              </p>
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
                  className="modal_button my-5 lg:w-[300px] flex justify-center"
                >
                  {t("Modal_button")}
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;

const CancelIcon = () => (
  <svg
    width={25}
    height={25}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.49045 0L0 4.49045L2.29299 6.78344L7.96178 12.5478L2.29299 18.2166L0 20.414L4.49045 25L6.78344 22.707L12.5478 16.9427L18.2166 22.707L20.414 25L25 20.414L22.707 18.2166L16.9427 12.5478L22.707 6.78344L25 4.49045L20.414 0L18.2166 2.29299L12.5478 7.96178L6.78344 2.29299L4.49045 0Z"
      fill="#818284"
    />
  </svg>
);
