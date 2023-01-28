import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const LanguageMobile = () => {
  const router = useRouter();
  let lang = router.locale;
  const [locale, setLocale] = useState(lang);
  useEffect(() => {
    setLocale(router.locale);
    scrollToTop();
  }, [router]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div className="">
        {locale == "fr" && (
          <Link href={`${router.asPath}`} locale="en-US">
            <div className="flex gap-1 font-[400] items-center">
              <div className="w-[32px] lg:w-[40px] h-[15px] lg:h-[20px]">
                <img
                  alt="English"
                  className="cursor-pointer h-full w-full"
                  src="https://flagcdn.com/h20/gb.png"
                  srcSet="https://flagcdn.com/h40/gb.png 2x,
                      https://flagcdn.com/h60/gb.png 3x"
                  height="20"
                />
              </div>
              <p className="uppercase">En</p>
            </div>
          </Link>
        )}
        {locale == "en-US" && (
          <Link href={`${router.asPath}`} locale="fr">
            <div className="flex gap-1 font-[400] items-center">
              <div className="w-[32px] lg:w-[40px] h-[20px] ">
                <img
                  src="https://flagcdn.com/h20/fr.png"
                  srcSet="https://flagcdn.com/h40/fr.png 2x,
                      https://flagcdn.com/h60/fr.png 3x"
                  height="20"
                  alt="France"
                  className="w-full h-full"
                />
              </div>
              <p className="uppercase">Fr</p>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default LanguageMobile;
