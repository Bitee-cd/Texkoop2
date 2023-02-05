import Link from "next/link";
import React from "react";
import SocialIcons from "./Reusable/SocialIcons";
import ScrollButton from "./Reusable/ScrollButton";
import useTranslation from "next-translate/useTranslation";
import { useAppContext } from "./AppContext";

const Footer = () => {
  const { t } = useTranslation("common");
  const { navOpen } = useAppContext();
  return (
    <footer className={`${navOpen && "blur"} bg-pri_dark py-10 text-white `}>
      <div className="screen-center">
        <div className="hidden lg:flex lg:w-full justify-between">
          <Link href="/about"> {t("Fooa")}</Link>
          <Link href="/rider" className="text-end">
            {t("Foob")}
          </Link>
          <Link href="/get-started" className="lg:text-center">
            {t("Fooc")}
          </Link>
          <Link href="/privacy-policy" className="text-end lg:text-center">
            {t("Food")}
          </Link>
          <Link href="/terms-and-conditions" className="">
            {t("Fooe")}
          </Link>
          <Link href="/faqs" className="text-end ">
            {t("Foof")}
          </Link>
        </div>
        <div className="lg:hidden flex justify-between text-[15px] md:text-[17px]">
          <div>
            <div>
              <Link href="/about"> {t("Fooa")}</Link>
            </div>
            <div>
              <Link href="/privacy-policy" className="">
                {t("Food")}
              </Link>
            </div>
            <div>
              <Link href="/terms-and-conditions" className="">
                {t("Fooe")}
              </Link>
            </div>
          </div>
          <div>
            <div>
              <Link href="/rider" className="">
                {t("Foob")}
              </Link>
            </div>
            <div>
              <Link href="/get-started" className="">
                {t("Fooc")}
              </Link>
            </div>
            <div>
              <Link href="/faqs" className=" ">
                {t("Foof")}
              </Link>
            </div>
          </div>
        </div>
        <hr className=" bg-white border-white border w-full my-5 lg:my-10 "></hr>
      </div>
      <div className="screen-center flex justify-between">
        <SocialIcons />
        <div className="absolute right-[5%]">
          <ScrollButton />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
