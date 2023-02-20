import useTranslation from "next-translate/useTranslation";
import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const Card = ({ item }) => {
  const [open, setOpen] = useState();
  const { t } = useTranslation("faq");
  return (
    <div
      className={`faqShadowCard my-5 bg-[#f5f5f5] p-2 md:p-5 rounded-[15px]`}
    >
      <div className="flex items-center justify-between">
        <p className="w-[90%] md:w-[80%] text-[#3F3D56]">{t(item.question)}</p>
        <div
          className=" w-[5%] duration-1000 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <FiMinus className="w-full" size="100%" color="#DD8626" />
          ) : (
            <FiPlus className="w-full" size="100%" color="#DD8626" />
          )}
        </div>
      </div>
      {open && (
        <div className={`duration-1000 `}>
          <p className="py-3 text-[#3F3d56] ml-auto p-text">
            {item.answer && t(item.answer)}
          </p>
          <div className="grid md:grid-cols-3 gap-5 ">
            {item.sub_answers &&
              item.sub_answers.map((sub) => (
                <div className="" key={sub.id}>
                  <p className="pb-2 text-[#3F3D56] font-[500] p-text">
                    {t(sub.head)}
                  </p>
                  {sub.sub.map((text) => (
                    <p key={text.id}>{t(text.text)}</p>
                  ))}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
