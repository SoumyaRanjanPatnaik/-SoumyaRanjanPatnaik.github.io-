import "./App.css";
import Navbar from "./Nav/Nav";
import {HomeDark} from "./Home/Home";
import About from "./About/About";
import Resume from "./Resume/Resume";
import {useEffect, useRef, useState} from "react";
import windowContext from "./windowContext";
import {Route, Routes} from "react-router";

function App() {
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
        setWindowDim({width: window.innerWidth, height: window.innerHeight});
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
                className={`h-screen overflow-y-hidden overflow-x-hidden scrollbar scrollbar-thin scrollbar-track-transparent  scrollbar-thumb-gray-400 ${windowDim.height >= 500 ? "snapY sm:overflow-y-hidden" : "overscroll-y-auto"
                    }`}
                dir="ltr"
            >
                <Navbar />

                <Routes>
                    <Route path="/" element={
                        <HomeDark refContainer={homeRef} />
                    } />
                    <Route path="/about" element={
                        <About refContainer={aboutRef} />
                    } />
                    <Route path="/resume" element={
                        <Resume refContainer={resumeRef} />
                    } />
                </Routes>
            </div>
        </windowContext.Provider>
    );
}

export default App;
