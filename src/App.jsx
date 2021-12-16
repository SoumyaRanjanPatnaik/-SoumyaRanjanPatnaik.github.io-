import "./App.css";
import Navbar from "./Nav/Nav";
import { HomeDark } from "./Home/Home";
import About from "./About/About";
import Resume from "./Resume/Resume";
import { useLocation, useNavigate } from "react-router-dom";
import links from "./Nav/links";
import { useEffect, useRef, useState } from "react";
import windowContext from "./windowContext";

function App() {
  const currUrl = useLocation();
  const setUrl = useNavigate();
  const [windowDim, setWindowDim] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  //const [currNavIndex, setCurrNavIndex] = useState(0);
  const [homeRef, aboutRef, resumeRef] = [
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const handleResize = () => {
    setWindowDim({ width: window.innerWidth, height: window.innerHeight });
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (windowDim.height >= 400) {
      const curr_id = links.find((item) => item.url === currUrl.pathname)?.id;
      const elementDOM = document.getElementById(curr_id);
      if (elementDOM) {
        elementDOM.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [currUrl, windowDim]);
  return (
    <windowContext.Provider value={windowDim}>
      <div
        className={`h-screen overflow-y-hidden overflow-x-hidden scrollbar scrollbar-thin scrollbar-track-white  scrollbar-thumb-gray-400 ${
          windowDim.height >= 400 && "snapY sm:overflow-y-hidden"
        }`}
        dir="ltr"
      >
        <Navbar />
        <HomeDark refContainer={homeRef} />
        <About refContainer={aboutRef} />
        <Resume refContainer={resumeRef} />
      </div>
    </windowContext.Provider>
  );
}

export default App;
