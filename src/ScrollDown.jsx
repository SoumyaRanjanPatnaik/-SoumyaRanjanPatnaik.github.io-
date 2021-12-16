import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import windowContext from "./windowContext";

const ScrollDown = ({ color, url, text }) => {
  const setUrl = useNavigate();
  const { height } = useContext(windowContext);
  return (
    <div
      className={`${
        height < 450 ? "" : ""
      } absolute flex bottom-5 w-full justify-center cursor-pointer visible sm:hidden text-${
        color || "white"
      } } text-lg ${"animate-bounce"} mb-5  font-bold`}
      onClick={() => {
        setUrl(url || "/about");
      }}
    >
      <span>{text || "Next Section"}</span>
    </div>
  );
};
export default ScrollDown;
