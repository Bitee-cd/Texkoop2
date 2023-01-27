import Link from "next/link";
import React from "react";
import SocialIcons from "./SocialIcons";
import ScrollButton from "./ScrollButton";

const Footer = () => {
  return (
    <footer className="bg-pri_dark py-10 text-white ">
      <div className="screen-center ">
        <div className="grid grid-cols-2 lg:flex lg:w-full justify-between">
          <Link href="/about">About</Link>
          <Link href="/rider" className="">
            Become A Rider
          </Link>
          <Link href="#" className="lg:text-center">
            Partner With Us
          </Link>
          <Link href="#" className="lg:text-center">
            Privacy Policy
          </Link>
          <Link href="#" className="">
            Terms and Conditions
          </Link>
          <Link href="#" className="lg:text-end">
            FAQs
          </Link>
        </div>
        <hr className=" bg-white border-white border w-full my-5 lg:my-10 "></hr>
        <div className="grid grid-cols-2 justify-between">
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
