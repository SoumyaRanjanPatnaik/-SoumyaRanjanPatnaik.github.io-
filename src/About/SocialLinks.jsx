import React from "react";
import social from "./Social";

const SocialLinks = () => {
  return (
    <div className="w-full flex justify-center cursor-pointer rela ">
      {social.map((item, index) => {
        return (
          <a
            href={item.url}
            className=" group text-gray-700 text-2xl sm:text-xl transition-all mt-2 mb-3 p-2 hover:bg-blue-50 rounded-full"
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
