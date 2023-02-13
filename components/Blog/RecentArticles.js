import React, { useEffect, useState } from "react";
import { blog } from "../../utils/data";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import parse from 'html-react-parser';
import { useRouter } from "next/router";
import useSWR from 'swr'

const RecentArticles = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const router = useRouter()
  const language = router.locale
  
  const fetcher = (...args) =>
    fetch(...args).then((response) => response.json());
  
    const { data, error } = useSWR(`/api/blog/articles/${pageIndex}`, fetcher)
    if (error) {
      
      return(
        <>
        <p>Cannont access backend</p>
        </>

      )
    }
    
    
  const truncate = (str) => {
    
    return str.length > 30 ? str.substring(0, 100) + "..." : str;
  };
  const orig = ''
  const { recentArticles } = blog;
  
  if(data){
  return (
    <section className="screen-center my-10">
      <p className="h2-text text-pri_dark font-[700] my-5">Recent Articles</p>
      <div className="grid grid-cols-2 md:grid-cols-3 md:gap-5 gap-2 mt-10">
        {data && data?.data?.result?.map((blog, index) => (
          <div key={index} className="">
            <div className={`${styles.blogBackground} relative `}>
              <Image
                // src={orig + blog.image}
                src={blog?.image}
                alt={blog?.title}
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
                
                {language === 'fr' && blog?.french_article ?  blog?.french_article?.title:blog?.title}
              </p>
              <div className="flex my-2 p-tiny-text items-center gap-2 ">
                <div className="bg-[#D9D9D9] w-[39px] h-[39px] rounded-full overflow-hidden">
                <Image
                // src={orig + blog.image}
                src={blog?.author.image}
                alt={blog?.title}
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
                <p>By {blog?.author.name}</p>
                <p className="font-[700] text-[#3B3C3C]">-{blog?.date_created}</p>
              </div>
              <div className="p-tiny-text mt-2 md:mt-5">
                
                {language === 'fr' && blog?.french_article ?  parse(truncate(blog?.french_article.body)):parse(truncate(blog?.body))}
              </div>
              <Link href={`/blog/${blog?.slug}`}>
                <p className="text-sec hover:text-pri_dark">Read more</p>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-7 flex gap-7 justify-center">
    {/* {data.map(item => <div key={item.id}>{item.name}</div>)} */}
    {data?.data?.previous && <button  className="rounded-sm bg-[#3B3C3C] p-2 text-[white]" onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>}
    {data?.data?.next && <button className="rounded-sm bg-[#3B3C3C] p-2 text-[white]" onClick={() => setPageIndex(pageIndex + 1)}>Next</button>}
  </div>

    </section>
  );
              }
              else{
                return(
                  <>
                  <p>Loading</p>
                  </>
                )
              }
};

export default RecentArticles;
