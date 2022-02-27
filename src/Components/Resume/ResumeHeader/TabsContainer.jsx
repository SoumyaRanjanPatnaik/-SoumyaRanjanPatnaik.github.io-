import resumeItems from "../../../Config/resumeItemsList";
import SingleResumeItem from "./SingleResumeItem";
import { useContext, useEffect, useRef, useState } from "react";
import windowContext from "../../../windowContext";
import handleHoverBox from "./handlehoverBox";

const TabsContainer = ({ selected, item }) => {
  const posRef = useRef({ top: 0, left: 0 });
  const [currDim, setCurrDim] = useState({ width: 32, height: 124 });
  const { width: windowWidth, height: windowHeight } =
    useContext(windowContext);
  const [currSelected, setCurrSelected] = selected;
  const [currItem, setCurrItem] = item;
  // Effects
  useEffect(() => {
    handleHoverBox(windowWidth, windowHeight, currItem, posRef, setCurrDim);
  }, [currItem, windowWidth, windowHeight]);

  useEffect(() => {
    setCurrItem(currSelected);
  }, [currSelected]);

  return (
    <div
      id="tabs-container"
      className="relative flex flex-wrap justify-center flex-grow-0
				flex-shrink-0 px-2 mt-2 overflow-hidden sm:mt-5 sm:flex-col
				 sm:justify-center sm:overflow-x-hidden scrollbar-thin sm:h-full"
    >
      <div
        id="hover-box"
        className={`${
          windowWidth < 640 && "hidden"
        } absolute top-0 bottom-0 left-0 z-0 w-1/6 h-3 bg-blue-400 
					rounded sm:w-full sm:rounded duration-150 transition-transform`}
        style={{
          transform: `translate(${posRef.current["left"]}px, ${posRef.current["top"]}px)`,
          transitionTimingFunction: "cubic-bezier(.3,.6,.9,1.0)",
          ...currDim,
        }}
      />
      {resumeItems.map((item, index) => {
        return (
          <SingleResumeItem
            {...{
              item,
              index,
              currItem,
              setCurrSelected,
              setCurrItem,
              currSelected,
            }}
            key={index}
          />
        );
      })}
    </div>
  );
};
export default TabsContainer;
