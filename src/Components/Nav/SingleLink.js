import React from "react";
import { useLocation, NavLink } from "react-router-dom";

const SingleLink = ({ path, name, closeMenu, id }) => {
  const { pathname } = useLocation();
  const handleClick = (e) => {
    closeMenu();
    if (pathname === path) e.preventDefault();
  };
  return (
    <li className="relative flex-1 flex flex-col justify-center list-none gap-1 group ">
      <NavLink
        to={path}
        className={`flex w-full sm:w-max sm:p-1 ${
          pathname === path && "text-green-100"
        } rounded-lg  h-10 sm:h-12 items-center px-1 transition-all`}
        onClick={handleClick}
      >
        {name}
      </NavLink>
      <div
        className={`hidden sm:block h-0 origin-left border-green-100 
                    border-2 w-5/6 relative bottom sm:bottom-3.5 left-1.5
                    ${
                      pathname === path ? "scale-x-30" : "scale-x-0"
                    } rounded-md 
                group-hover:scale-x-100 transform transition-transform `}
      />
    </li>
  );
};

export default SingleLink;
