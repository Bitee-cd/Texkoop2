import Link from "next/link";
import React from "react";
import SocialIcons from "./SocialIcons";
import ScrollButton from "./ScrollButton";

const Footer = () => {
  return (
    <footer className="bg-pri_dark py-10 lg:pl-[5%]">
      <div className="screen-center ">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-10 lg:gap-0">
          <Link href="#">About</Link>
          <Link href="#" className="">
            Become A Rider
          </Link>
          <Link href="#" className="lg:text-center">
            Partner With Us
          </Link>
          <Link href="#" className="lg:text-center">
            Privacy Policy
          </Link>
          <Link href="#" className="lg:text-end">
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
