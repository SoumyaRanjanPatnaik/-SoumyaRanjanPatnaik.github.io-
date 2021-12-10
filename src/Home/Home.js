import React from "react";

const Home = () => {
  return (
    <section className="home flex flex-col relative bg-gradient-to-br bg-gray-900 h-3/4">
      <ScrollText text="Software Developer " forward={true} />
    </section>
  );
};

const ScrollText = ({ text, forward }) => {
  let elements = [text, text, text, text];
  return (
    <h1
      className={` text-8xl text-gray-500 whitespace-nowrap font-mono font-bold text__hollow p-5 animate-move-${
        forward ? "forward" : "reverse"
      } inline-block capitalize`}
    >
      {elements.map((text_val, index) => {
        return (
          <span key={index} className="inline-block animate-pulse mx-24">
            {text_val}
          </span>
        );
      })}
    </h1>
  );
};

export default Home;
