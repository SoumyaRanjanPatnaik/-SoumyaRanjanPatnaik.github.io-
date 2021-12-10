import React, { useState, useRef, useEffect } from "react";
import Icon from "../Icon/Icon";
import { FiMenu } from "react-icons/fi";
import "./links";
import links from "./links";
import SingleLink from "./SingleLink";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  const [windowWidth, setWindowWidth] = useState(Number(window.innerWidth));
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  useState(() => {
    const handleResize = () => {
      setWindowWidth((prev) => {
        const curr = Number(window.innerWidth);
        if (prev >= 640 && curr < 640) {
          setIsShow(true);
        } else {
          setIsShow(false);
        }
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const closeMenu = () => {
    setIsShow(false);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    console.log(linksRef.current, windowWidth);
    if (windowWidth >= 640) {
      linksContainerRef.current.style.height = "3rem";
    } else {
      if (isShow) {
        linksContainerRef.current.style.height = `${linksHeight}px`;
      } else {
        linksContainerRef.current.style.height = "0px";
      }
    }
  }, [isShow, windowWidth]);

  return (
    <header className="fixed top-0 min-h-12 z-10 w-full">
      <nav className="relative text-white flex flex-col sm:flex-row sm:justify-between bg-gray-900 ">
        {/*Nav Header */}
        <div className="flex items-center justify-between w-full my-auto h-12">
          <Icon />
          <FiMenu
            className={`m-2 text-xl cursor-pointer transition-transform transform  duration-300 hover:scale-125 sm:hidden ${
              isShow ? "rotate-90" : ""
            }`}
            onClick={() => {
              setIsShow(!isShow);
            }}
          />
        </div>
        {/* Nav Links Container*/}
        <div
          className="w-full sm:w-auto overflow-hidden sm:overflow-visible transition-all"
          ref={linksContainerRef}
        >
          {/* Links */}
          <ul
            className="w-full flex flex-col sm:flex-row sm:h-full items-stretch sm:mr-3"
            ref={linksRef}
          >
            {links.map((item, index) => {
              return (
                <SingleLink
                  className=""
                  path={item.url}
                  name={item.name}
                  key={index}
                  closeMenu={closeMenu}
                />
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
