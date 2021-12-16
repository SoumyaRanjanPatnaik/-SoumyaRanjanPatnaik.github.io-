import React, { useEffect, useState } from "react";

const TextScrollY = ({ scrollText, vowel, article, ...rest }) => {
  const [currId, setCurrId] = useState(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setCurrId((prev) => {
        return (prev + 1) % scrollText.length;
      });
    }, 2250);

    return () => {
      clearInterval(intervalRef);
    };
  });

  useEffect(() => {
    if (article) {
      if (currId === scrollText.length - 1) {
        article(false);
        return;
      } else {
        article(true);
      }
    }
    if (vowel) {
      const curr = scrollText[currId];
      if (vowel && curr.match(`^[aeiouAEIOU].*`)) {
        vowel(true);
      } else {
        vowel(false);
      }
    }
  }, [currId, article, scrollText, vowel]);
  // Render the required elements
  const renderElements = scrollText.reduce((prev, curr, id) => {
    const len = scrollText.length;
    if ((currId + 1 + len) % len === id) {
      return [...prev, { desc: curr, type: "next" }];
    } else if (currId === id) {
      return [...prev, { desc: curr, type: "curr" }];
    } else {
      return [...prev, { desc: curr, type: "prev" }];
    }
  }, []);
  let inlineStyles = {
    ...rest,
  };

  return (
    <div className="relative flex justify-center w-full overflow-hidden select-none h-11 sm:h-20">
      {renderElements.map((item, index) => {
        return (
          <h3
            className={`absolute text-4xl sm:text-5xl font-bold duration-300 transition-all capitalize ${item.type}-slider`}
            style={inlineStyles}
            key={index}
          >
            {item.desc}
          </h3>
        );
      })}
    </div>
  );
};

export default TextScrollY;
