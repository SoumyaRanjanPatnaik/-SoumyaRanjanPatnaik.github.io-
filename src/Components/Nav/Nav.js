import React, { useState, useRef, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import links from "../../Config/navLinks";
import SingleLink from "./SingleLink";
import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  const [windowWidth, setWindowWidth] = useState(Number(window.innerWidth));
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const handleResize = () => {
    setIsShow(false);
    setWindowWidth((prev) => {
      const curr = Number(window.innerWidth);
      if (curr > 640) setIsShow(true);
      else setIsShow(false);
      return curr;
    });
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const closeMenu = () => {
    if (windowWidth <= 640) setIsShow(false);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (windowWidth > 640) {
      setIsShow(true);
      linksContainerRef.current.style.height = "fit-content";
    } else if (isShow) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [isShow, windowWidth]);

  return (
    <header className="fixed top-0 z-50 w-full hit-fit">
      <nav
        className="relative px-2 lg:px-4 flex flex-col h-fit 
                text-white bg-gray-900 sm:flex-row sm:justify-between overflow-hidden"
      >
        {/*Nav Header */}
        <div className="flex items-center justify-between w-full h-16 xl:h-20 my-auto">
          <Link to="/">
            <Icon />
          </Link>
          <div
            className=" absolute right-3  sm:translate-y-32 flex items-center 
                        cursor-pointer transition transform  duration-300 hover:scale-110 "
            onClick={() => {
              setIsShow(!isShow);
            }}
          >
            <span className="text-gray-100 font-semibold">Navigate</span>
            <FiMenu
              className={`m-2 text-xl sm:hidden transition-transform transform 
                            duration-300 ${isShow && "rotate-90"}`}
            />
          </div>
        </div>
        {/* Nav Links Container*/}
        <div
          className={`flex items-center w-full h-full overflow-hidden sm:w-auto 
                    sm:overflow-visible transition-all duration-[250]`}
          ref={linksContainerRef}
        >
          {/* Links */}
          <ul
            className={`flex flex-col text-center items-stretch w-full duration-300
                        sm:flex-row sm:h-full ${
                          isShow
                            ? "translate-y-1 xl:translate-y-4"
                            : "-translate-y-7 opacity-0"
                        } 
                        sm:mr-3 justify-center items`}
            ref={linksRef}
          >
            {links.map((item, index) => {
              return (
                (!item.disbled && (
                  <SingleLink
                    className=""
                    path={item.url}
                    name={item.name}
                    id={item.id}
                    disabled={item.disbled}
                    key={index}
                    closeMenu={closeMenu}
                  />
                )) || <div />
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
