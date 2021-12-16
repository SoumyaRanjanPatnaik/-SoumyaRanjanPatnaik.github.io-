import React, { useContext, useEffect, useRef, useState } from "react";
import windowContext from "../windowContext";
import ScrollDown from "../ScrollDown";

const resumeItems = [
  "Skills",
  "Education",
  "Projects",
  "Achievements",
  "Publications",
];

const Resume = (props) => {
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
      className="relative flex snappedElement justify-center items-center pt-12 pb-5 sm:px-9  px-2 min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 "
    >
      {/*Resume Glass Container*/}
      <div className=" h-2/3 grid grid-rows-4 sm:grid-rows-1 sm:grid-cols-12 md:grid-cols-12 w-4/5 md:w-5/6 sm:w-full bg-gray-500 bg-opacity-5 ring-inset ring-2 ring-white rounded-3xl backdrop-blur max-w-3xl md:max-w-6xl shadow-lg overflow-hidden sm:h-2/3 min-w-max">
        <div className="flex flex-col  justify-center mb-2 sm:mb-0 sm:pb-28 sm:col-start-1 sm:col-end-4 bg-gradient-to-b from-white to-blue-50 bg-opacity-80 sm:px-4 md:px-7 py-2 sm:py-12 overflow-hidden ">
          <div className="flex flex-col items-center w-full">
            <h2 className="text-lg sm:text-2xl w-full text-center text-gray-700 font-bold">
              Resume
            </h2>
            {/*Underline*/}
            <div className="border-green-300 border-4 h-0 w-1/5 sm:w-1/2 rounded-lg" />
          </div>

          <div
            id="tabs-container"
            className="relative mt-2 overflow-auto sm:mt-5 flex justify-center sm:flex-col sm:justify-center flex-grow-0 flex-shrink-0  sm:overflow-x-hidden scrollbar-thin px-2"
          >
            <div
              id="hover-box"
              className=" absolute top-0 left-0 bg-blue-400 bottom-0 w-1/6 h-3 sm:w-full h-8 z-0 rounded sm:rounded transition-all"
              style={{
                transform: `translate(${posRef.current["left"]}px, ${posRef.current["top"]}px)`,
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
                >
                  {item}
                </h3>
              );
            })}
          </div>
        </div>
      </div>
      <ScrollDown url="/about" text="Scroll Up" color="gray-500" />
    </section>
  );
};
export default Resume;
