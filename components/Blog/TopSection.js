import React from "react";
import { blog } from "../../utils/data";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import {useState, useEffect} from 'react'
import Link from "next/link";
import { useRouter } from "next/router";

const TopSection = () => {
  const router = useRouter()
  const [articles, setArticles] = useState(undefined)

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
  const language = router.locale
  const { topArticles } = blog;
  const orig = 'http://127.0.0.1:8000'
  return (
    <section className="screen-center">
      <p className="h2-text text-pri_dark font-[700] my-5">Blog</p>
      <div className="grid grid-cols-2 md:grid-cols-3 md:gap-5 gap-2 mt-10">
        {articles?.map((blog, index) => (
          <div key={index} className="relative ">
            <Image
              // src={'/images/blog/1a.png'}
              src={orig + blog.image}
              alt={blog.text}
              placeholder="blur"
              className="w-full h-full image-cover "
              width={700}
              height={475}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              blurDataURL="#f2f2f2"
            />
            <img
              src="/images/about/background.png"
              className={`${styles.zindz2} top-0 right-0 h-full w-full absolute`}
            />
            <div
              className={`${styles.zinde2} absolute bottom-0 left-0 right-0 p-2 md:p-5  text-white`}
            >
              <Link href={`/blog/${blog.slug}`} className="p-tiny-text">
               
                {language === 'fr' && blog?.french_article ?  blog.french_article?.title:blog.title}
                </Link>
              <p className="p-tiny-text mt-2 md:mt-5">{blog.date_created}</p>
            </div>
          </div>
        ))}
      </div>
      <hr className=" hidden lg:block  border-pri_dark border-top w-full my-10 bottom-[3%] left-[10%]"></hr>
    </section>
  );
};

export default TopSection;
