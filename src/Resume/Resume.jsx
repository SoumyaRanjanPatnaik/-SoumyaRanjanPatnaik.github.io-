import React, { useContext, useEffect, useRef, useState } from "react";
import windowContext from "../windowContext";
import handleHoverBox from "./ResumeHeader/handlehoverBox";
import ResumeHeader from "./ResumeHeader";
import ResumeSection from "./ResumeSection";

const Resume = () => {
  // States
  const selected = useState(0);
  const item = useState(selected[0]);

  return (
    <section
      id="resume"
      className="relative flex items-center justify-center min-h-screen px-2 pt-12 pb-5 
            snappedElement sm:px-9 bg-gradient-to-b from-gray-50 to-blue-50 "
    >
      {/*Resume Glass Container*/}
      <div
        className="w-5/6 max-w-3xl overflow-hidden bg-gray-500 shadow-lg h-4/5 grid 
            grid-rows-5 sm:grid-rows-2 sm:grid-cols-12 md:grid-cols-12 sm:w-full 
            bg-opacity-5 ring-inset ring-2 ring-white rounded-3xl backdrop-blur 
            md:max-w-6xl "
      >
        <ResumeHeader
          {...{
            selected,
            item,
          }}
        />
        <ResumeSection current={item[0]} />
      </div>
    </section>
  );
};

export default Resume;
