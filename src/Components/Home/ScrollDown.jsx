import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import windowContext from "../../windowContext";

const ScrollDown = ({ color, url, text }) => {
  const setUrl = useNavigate();
  const { height } = useContext(windowContext);
  const currUrl = useLocation();
  return (
    <div
      className={`${height < 450 ? "hidden" : ""} absolute flex ${
        currUrl === "/about" && "bottom-5"
      } bottom-1 w-full justify-center cursor-pointer visible sm:scale-0 sm:opacity-0 transition
                transition-none text-gray-100 text-lg mb-5  font-bold`}
      onClick={() => {
        setUrl(url || "/about");
      }}
    >
      <span>{text || "Next Section"}</span>
    </div>
  );
};
export default ScrollDown;
