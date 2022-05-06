import React, { useState } from "react";
import ResumeHeader from "./ResumeHeader";
import ResumeSection from "./ResumeSection/ResumeSection.tsx";

const Resume = () => {
  // States
  const selected = useState(0);
  const item = useState(selected[0]);

  return (
    <section
      id="resume"
      className="absolute flex items-center justify-center h-screen px-2 
      pt-20 pb-5 sm:px-9 bg-gradient-to-b from-white to-blue-100"
    >
      {/*Resume Glass Container*/}
      <div
        className="w-[97%] max-w-3xl overflow-hidden bg-gray-50 shadow-lg h-[80%] grid 
            grid-rows-5 sm:grid-rows-2 sm:grid-cols-12 md:grid-cols-12 sm:w-full 
            bg-opacity-20 ring-inset ring-2 ring-white rounded-3xl backdrop-blur 
            md:max-w-6xl max-h-[650px] min-h-[450px] overflow-x-hidden m-auto"
      >
        <ResumeHeader
          {...{
            selected,
            item,
          }}
        />
        <ResumeSection current={selected[0]} />
      </div>
    </section>
  );
};

export default Resume;
