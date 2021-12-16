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
      className="relative z-10 flex flex-col items-stretch justify-center w-full h-screen overflow-hidden bg-gray-900 home-dark snappedElement transition-all"
    >
      <div className="relative block text-2xl text-center text-gray-300 select-none sm:text-4xl -top-5 ">
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
