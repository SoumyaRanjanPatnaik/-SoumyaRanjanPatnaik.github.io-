import React, { useState } from "react";
import TextScrollY from "./TextScrollY";
import iAmA from "./iAmA";
import ScrollDown from "../ScrollDown";

export const HomeDark = ({ refContainer }) => {
  const [isVowel, setIsVowel] = useState(false);
  const [isShowArticle, setIsShowArticle] = useState(true);
  return (
    <section
      id="home"
      ref={refContainer}
      className="home-dark snappedElement relative h-screen flex flex-col justify-center items-stretch  bg-gray-900 transition-all w-full overflow-hidden  z-10"
    >
      <div className="select-none block text-gray-300 text-2xl sm:text-4xl text-center relative -top-5 ">
        <span className="flex justify-center">
          I'm {isShowArticle && "A" + (isVowel ? "n" : "")}
        </span>
        <TextScrollY
          scrollText={iAmA}
          vowel={setIsVowel}
          article={setIsShowArticle}
        />
      </div>
      <ScrollDown color="gray-200" url="/about" />
    </section>
  );
};

export default HomeDark;
