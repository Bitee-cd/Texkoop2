import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialIcons = () => {
  let date = new Date().getFullYear();
  return (
    <div>
      <p className="h4-text font-medium ">Texkoop {date}</p>
      <div className="flex items-center gap-5 mt-2">
        <a href="https://twitter.com/TEXKOOP" target="_blank">
          <FaTwitter />
        </a>
        <a href="https://web.facebook.com/TEXKOOP/" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/texkoop/" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/company/texkoop/" target="_blank">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
