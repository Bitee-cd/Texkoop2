import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import parse from 'html-react-parser';

const SinglePost = () => {
  const [data, setData] = useState(undefined)
  const router = useRouter()
  
  const {slug} = router.query
   const getArticle=async()=>{
    const res = await fetch(`/api/blog/${slug}/`)
    const response = await res.json()
    setData(response?.data?.article)
    
  }

  

  useEffect(()=>{
    getArticle()
  },[])
  const orig = ''
  const language = router.locale

  if(data){
  return (
    <section className="screen-center text-black">
      <p className="h2-text text-pri_dark font-[700] my-5">Blog</p>
      <div className=" items-center my-10 flex gap-x-2 md:gap-x-10">
        <div>
          <Image
            
            src={data?.author.image}
            alt="author name"
            placeholder="blur"
            className="w-[40px] md:w-[100px] h-[40px] md:h-[100px] rounded-full image-cover "
            width={100}
            height={100}
            blurDataURL="#f2f2f2"
          />
        </div>
        <p className="p-text font-[600]">{data?.author?.name}</p>
        <p className="p-tiny-text">{data?.reading_time} minutes of reading time</p>
      </div>
      <div className="">
        <p className="big-text font-[900] text-pri_dark">
          {language === 'fr' && data?.french_article ?  data?.french_article?.title:data?.title}
          
        </p>
        <div className="md:w-[80%] md:ml-auto my-5">
          {/* <p className="h2-text text-pri_dark my-5 font-[700]">
            Lorem ipsum dolor it ame consectetur.
          </p> */}
          <div className="text-black p-text text-justify">
           
            {language === 'fr' && data?.french_article  ?  parse(data?.french_article?.body):parse(data?.body)}
          </div>
          <p className="p-text text-[#3B3C3C] mt-5">-{data&& data?.date_created}</p>
        </div>
      </div>
      <hr className=" hidden lg:block  border-pri_dark border-t-2 w-full my-10 bottom-[3%] left-[10%]"></hr>
    </section>
  );
        }
};

export default SinglePost;
