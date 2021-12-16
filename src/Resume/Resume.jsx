import React, { useContext, useEffect, useRef, useState } from "react";
import windowContext from "../windowContext";

const resumeItems = [
  "Skills",
  "Education",
  "Projects",
  "Achievements",
  "Publications",
];

const Resume = () => {
  const [currSelected, setCurrSelected] = useState(0);
  const [currItem, setCurrItem] = useState(currSelected);
  const posRef = useRef({ top: 0, left: 0 });
  const [currDim, setCurrDim] = useState({ width: 32, height: 124 });
  const { width: windowWidth, height: windowHeight } =
    useContext(windowContext);
  useEffect(() => {
    const coordParent = document
      .getElementById("tabs-container")
      .getBoundingClientRect();
    const coordChild = document
      .getElementById(resumeItems[currItem])
      .getBoundingClientRect();
    const hoverBox = document.getElementById("hover-box");
    posRef.current = {
      top: coordChild["top"] - coordParent["top"],
      left: coordChild["left"] - coordParent["left"],
    };
    hoverBox.style.transform = `translate(${posRef.current["left"]}px, ${posRef.current["top"]}px)`;
    setCurrDim({ width: coordChild["width"], height: coordChild["height"] });
  }, [currItem, windowWidth, windowHeight]);

  useEffect(() => {
    setCurrItem(currSelected);
  }, [currSelected]);
  return (
    <section
      id="resume"
      className="relative flex items-center justify-center min-h-screen px-2 pt-12 pb-5 snappedElement sm:px-9 bg-gradient-to-b from-gray-50 to-blue-50 "
    >
      {/*Resume Glass Container*/}
      <div className="w-4/5 max-w-3xl overflow-hidden bg-gray-500 shadow-lg h-2/3 grid grid-rows-4 sm:grid-rows-1 sm:grid-cols-12 md:grid-cols-12 md:w-5/6 sm:w-full bg-opacity-5 ring-inset ring-2 ring-white rounded-3xl backdrop-blur md:max-w-6xl sm:h-2/3 ">
        <div className="flex flex-col justify-center py-2 mb-2 overflow-hidden sm:mb-0 sm:pb-28 sm:col-start-1 sm:col-end-4 bg-gradient-to-b from-white to-blue-50 bg-opacity-80 sm:px-4 md:px-7 sm:py-12 ">
          <div className="flex flex-col items-center w-full">
            <h2 className="w-full text-lg font-bold text-center text-gray-700 sm:text-2xl">
              Resume
            </h2>
            {/*Underline*/}
            <div className="w-1/5 h-0 border-4 border-green-300 rounded-lg sm:w-1/2" />
          </div>

          <div
            id="tabs-container"
            className="relative flex flex-wrap justify-center flex-grow-0 flex-shrink-0 px-2 mt-2 overflow-hidden sm:mt-5 sm:flex-col sm:justify-center sm:overflow-x-hidden scrollbar-thin"
          >
            <div
              id="hover-box"
              className="absolute top-0 bottom-0 left-0 z-0 w-1/6 h-3 h-8 bg-blue-400 rounded sm:w-full sm:rounded duration-150 transition-all"
              style={{
                transform: `translate(${posRef.current["left"]}px, ${posRef.current["top"]}px)`,
                  transitionTimingFunction: "cubic-bezier(.3,.6,.9,1.0)",
                ...currDim,
              }}
            />
            {resumeItems.map((item, index) => {
              return (
                <h3
                  className={`block rounded cursor-pointer text-xs sm:text-base w-24 px-1 sm:mx-0 sm:w-full text-center py-1 cursor-pointer z-10 transition-all select-none 
                      ${
                        currSelected === index
                          ? `bg-blue-${
                              currItem !== index ? "200 text-gray-700" : 500
                            } text-white`
                          : ""
                      }
                        ${
                          currItem !== currSelected && currItem === index
                            ? "text-white"
                            : ""
                        } 
                    `}
                  key={index}
                  id={item}
                  onClick={() => {
                    setCurrSelected(index);
                  }}
                  onMouseEnter={(e) => {
                    setCurrItem(index);
                  }}
                  onMouseLeave={() => setCurrItem(currSelected)}
                    style={{minWidth:"4rem"}}
                >
                  {item}
                </h3>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
