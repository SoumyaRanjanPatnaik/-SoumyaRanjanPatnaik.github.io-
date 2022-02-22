import React from "react";
import social from "../../Config/socialLinks";

const SocialLinks = () => {
  return (
    <div className="flex justify-center w-full cursor-pointer rela ">
      {social.map((item, index) => {
        return (
          <a
            href={item.url}
            className="px-2 mt-2 mb-2 text-2xl text-gray-700 rounded-full group sm:text-xl transition-all hover:bg-blue-50"
            key={index}
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
