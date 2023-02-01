import Link from "next/link";
import React from "react";
import SocialIcons from "./Reusable/SocialIcons";
import ScrollButton from "./Reusable/ScrollButton";

const Footer = () => {
  return (
    <footer className="bg-pri_dark py-10 text-white ">
      <div className="screen-center ">
        <div className="hidden lg:flex lg:w-full justify-between">
          <Link href="/about">About</Link>
          <Link href="/rider" className="text-end">
            Become A Rider
          </Link>
          <Link href="/get-started" className="lg:text-center">
            Partner With Us
          </Link>
          <Link href="/privacy-policy" className="text-end lg:text-center">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="">
            Terms and Conditions
          </Link>
          <Link href="/faqs" className="text-end ">
            FAQs
          </Link>
        </div>
        <div className="lg:hidden flex justify-between text-[15px] md:text-[17px]">
          <div>
            <div>
              <Link href="/about">About</Link>
            </div>
            <div>
              <Link href="/privacy-policy" className="">
                Privacy Policy
              </Link>
            </div>
            <div>
              <Link href="/terms-and-conditions" className="">
                Terms and Conditions
              </Link>
            </div>
          </div>
          <div>
            <div>
              <Link href="/rider" className="">
                Become A Rider
              </Link>
            </div>
            <div>
              <Link href="/get-started" className="">
                Partner With Us
              </Link>
            </div>
            <div>
              <Link href="/faqs" className=" ">
                FAQs
              </Link>
            </div>
          </div>
        </div>
        <hr className=" bg-white border-white border w-full my-5 lg:my-10 "></hr>
        <div className="flex justify-between">
          <SocialIcons />
          <div className="ml-auto">
            <ScrollButton />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
