import React from "react";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
export const social = [
  {
    name: "GitHub",
    icon: (
      <FaGithub className="group-hover:text-black group-hover:bg-white rounded-full transition-all" />
    ),
    url: "https://github.com/SoumyaRanjanPatnaik",
  },
  {
    name: "Facebook",
    icon: (
      <FaFacebook className="group-hover:text-blue-700 group-hover:bg-white rounded-full transition-all" />
    ),
    url: "",
  },
  {
    name: "Instagram",
    icon: (
      <FaInstagram className="group-hover:text-pink-800 group-hover:bg-white rounded-full transition-all" />
    ),
    url: "https://www.instagram.com/_soumya_r6_/",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn className="group-hover:text-blue-500 transition-all" />,
    url: "",
  },
];

export default social;
