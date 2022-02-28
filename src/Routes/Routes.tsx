import { Route, Routes, useLocation } from "react-router";
import About from "../Components/About/About";
import Home from "../Components/Home/Home";
import Resume from "../Components/Resume/Resume";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import links from "../Config/navLinks";
import { useState } from "react";
import "./transitions.css";
import { useEffect } from "react";
import Contact from "../Components/Contact/Contact";
const findIndex = (path) => {
  return links.findIndex((loc) => loc.url === path);
};

const AppRoutes: React.FC = () => {
  const location = useLocation();
  const [pageIndex, setPageIndex] = useState(findIndex(location.pathname));
  useEffect(() => console.log(pageIndex), [pageIndex]);

  const getClass = () => {
    if (pageIndex === findIndex(location.pathname)) return null;
    if (pageIndex < findIndex(location.pathname)) {
      return "top";
    } else {
      return "bottom";
    }
  };
  return (
    <TransitionGroup>
      <CSSTransition
        classNames="pageSlider"
        timeout={500}
        key={location.key}
        mountOnEnter={false}
        onEntered={() => setPageIndex(findIndex(location.pathname))}
      >
        <div className={`page ${getClass()}`}>
          <Routes location={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AppRoutes;
