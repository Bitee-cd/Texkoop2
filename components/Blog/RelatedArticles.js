import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import parse from 'html-react-parser';
import { useRouter } from "next/router";

const RelatedArticle = () => {
  const router = useRouter()
  const [articles, setArticles] = useState(undefined)
  const language = router.locale
  const getTopArticles=async()=>{
    const res = await fetch('/api/blog/top-articles/')
    if(res.ok){
      const response = await res.json()
      
      setArticles(response.data.articles)
    }
    
  }
  useEffect(()=>{
    getTopArticles()
  }, [])

  const truncate = (str) => {
    
    return str.length > 60 ? str.substring(0, 200) + "..." : str;
  };

  const orig =''
  return (
    <>
    {articles?.map((item, index)=>{
      return(
        <section className="screen-center my-10" key={index}>
      <div className="grid md:grid-cols-2 md:gap-10 gap-5 mt-10">
        <div className={` relative `}>
          <Image
            src={item?.image}
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

        <div className={`mt-5`}>
          <p className="h1-text text-pri_dark font-[600]">
            
            {language === 'fr' && item?.french_article ?  item.french_article?.title:item?.title}
          </p>
          <div className="flex my-2 p-tiny-text items-center gap-2 ">
            <div className="bg-[#D9D9D9] w-[39px] h-[39px] rounded-full"></div>
            <p>By {item?.author.name}</p>
            <p className="font-[700] text-[#3B3C3C]">-{item?.date_created}</p>
          </div>
          <div className="p-tiny-text mt-2 md:mt-5">
          
          {language === 'fr' && item?.french_article  ?  parse(truncate(item?.french_article?.body)):parse(truncate(item?.body))}
          </div>
        </div>
      </div>
      <hr className=" hidden lg:block  border-sec border-t w-full my-10 bottom-[3%] left-[10%]"></hr>
    </section>

      )

    })
    }
    
    </>
  );
};

export default RelatedArticle;
