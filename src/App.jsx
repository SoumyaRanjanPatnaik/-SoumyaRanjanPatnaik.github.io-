import { Home } from "./Components/Home/Home";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import { useEffect, useRef, useState } from "react";
import windowContext from "./windowContext";
import { Route, Routes } from "react-router";
import Navbar from "./Components/Nav/Nav";
import AppRoutes from "./Routes/Routes";

function App() {
  const [windowDim, setWindowDim] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  //const [currNavIndex, setCurrNavIndex] = useState(0);
  const handleResize = () => {
    setWindowDim({ width: window.innerWidth, height: window.innerHeight });
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <windowContext.Provider value={windowDim}>
      <div
        className={`scrollbar scrollbar-thin scrollbar-track-transparent
        scrollbar-thumb-gray-400`}
      >
        <Navbar />

        <AppRoutes />
      </div>
    </windowContext.Provider>
  );
}

export default App;
