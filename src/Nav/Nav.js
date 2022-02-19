import React, { useState, useRef, useEffect } from "react";
import Icon from "../Icon/Icon";
import { FiMenu } from "react-icons/fi";
import links from "./links";
import SingleLink from "./SingleLink";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  const [windowWidth, setWindowWidth] = useState(Number(window.innerWidth));
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth((prev) => {
        const curr = Number(window.innerWidth);
        if (windowWidth >= 640 && curr < 640) {
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
  }, windowWidth);

  const closeMenu = () => {
    setIsShow(false);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

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
    <header className="fixed top-0 z-50 w-full min-h-12">
      <nav
        className="relative px-2 py-2 sm:py-3 md:px-3 lg:px-4  flex flex-col 
      text-white bg-gray-900 sm:flex-row sm:justify-between overflow-hidden"
      >
        {/*Nav Header */}
        <div className="flex items-center justify-between w-full h-12 my-auto">
          <Link to="/">
            <Icon />
          </Link>
          <div
            className=" absolute right-3  sm:translate-y-72 flex items-center 
            cursor-pointer transition transform  duration-300 hover:scale-110 "
            onClick={() => {
              setIsShow(!isShow);
            }}
          >
            <span className="text-gray-100 font-semibold">Navigate</span>
            <FiMenu
              className={`m-2 text-xl sm:hidden transition-transform
              transform  duration-300 ${isShow ? "rotate-90" : ""}`}
            />
          </div>
        </div>
        {/* Nav Links Container*/}
        <div
          className="w-full h-full overflow-hidden sm:w-auto 
                    sm:overflow-visible transition-all sm:translate-y-7 duration-[250]"
          ref={linksContainerRef}
        >
          {/* Links */}
          <ul
            className="flex flex-col text-center 
                        items-stretch w-full sm:flex-row sm:h-full
                        sm:mr-3 justify-center items"
            ref={linksRef}
          >
            {links.map((item, index) => {
              return (
                <SingleLink
                  className=""
                  path={item.url}
                  name={item.name}
                  id={item.id}
                  disabled={item.disbled}
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
