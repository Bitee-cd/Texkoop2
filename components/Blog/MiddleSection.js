import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import parse from 'html-react-parser';
import { useRouter } from "next/router";


const MiddleSection = () => {
  const router = useRouter()
  const [message, setMessage] = useState(undefined)

  const getFeaturedMessage=async()=>{
    const res = await fetch('/api/blog/featured-message/')
    if(res.ok){
      const response = await res.json()
    
      setMessage(response?.data?.featuredMessage)
    }
    
  }
  useEffect(()=>{
    getFeaturedMessage()
  }, [])
  const language = router.locale
  const orig = ''
  const { t } = useTranslation("common");
  if(message){
  return (
    
    <section className="screen-center my-10">
      <div className="md:flex justify-between md:gap-10  lg:gap-20 gap-y-10 mt-10">
        <div className={` relative md:w-[40%] `}>
          <Image
            src={message?.image ?? ''}
            alt="blog slug"
            placeholder="blur"
            blurDataURL="#f2f2f2"
            className="w-full h-full image-cover "
            width={700}
            height={475}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>

        <div className={`md:w-[55%]`}>
          <p className="h2 text-pri_dark font-[900] ">
            {message?.title}
            {language === 'fr' && message?.french_message ?  message?.french_message.title:message?.title}
          </p>

          <div className="p-text mt-2 md:mt-5">
          
          {language === 'fr' && message?.french_message   ?  parse(message?.french_message?.body):parse(message?.body)}
          </div>
          <Link href="/get-started">
            <button className="button3 mt-5">{t("common:buttona")}</button>
          </Link>
        </div>
      </div>
    </section>
  );
          };
};

export default MiddleSection;
