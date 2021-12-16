import React, {useContext, useEffect, useState} from "react";
import SocialLinks from "./SocialLinks";
import PassportPhoto from "../assets/PassportPhoto.jpg";
import ScrollDown from "../ScrollDown";
import windowContext from "../windowContext";

const About = (props) => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center min-h-screen py-10 snappedElement bg-gradient-to-br from-red-50 to-green-50"
    >
        <div className="flex flex-col items-center w-5/6 h-0 max-w-2xl px-4 mx-5 my-5 shadow-lg gap-6 sm:w-4/6 sm:mx-36 py-7 glass-card rounded-2xl bg-gradient-to-br from-transparent to-white"
            style={{height:"32rem"}}
        >
        <img
          src={PassportPhoto}
          className="object-cover rounded-full select-none w-36 h-36"
          alt=""
        />
        <div className="flex flex-col items-stretch w-5/6 mx-4 gap-3">
          <h1 className="pb-2 text-2xl font-bold text-center text-gray-900 border-b-4 border-green-200 ">
            About
          </h1>
          <SocialLinks />
            <div className="overflow-y-auto sm:h-full"
                style={{height: "7rem"}}
            >
                <p className="mx-1 font-sans text-center text-gray-600 text-md">
                    I am a Computer Science and Engineering undergraduate currently
                    studying in <strong> IIIT, Naya Raipur </strong>. I love technology
                    and like to make the best out of it in any way possible, and I love
                    to recreate existing software from scratch.
                </p>
                <p className="mx-1 mt-3 font-sans text-center text-gray-600 text-md">
                    My primary interests include <strong>systems development</strong>,{" "}
                    <strong>web development </strong> and
                    <strong> machine learning</strong>.{" "}
                </p>
            </div>
          <button class="flex group relative m-auto justify-center mt-5 bg-blue-500 hover:bg-blue-200 text-gray-50 font-bold py-2 px-4 rounded-lg w-full items-center cursor-not-allowed mb-2">
            <svg
              class="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download Resume</span>
            <div className="absolute inset-x-0 text-sm text-gray-100 bg-black rounded-lg -bottom-6 bg-opacity-75 scale-0 group-hover:scale-100 transform origin-top transition-transform ">
              Currently Unavailable
            </div>
          </button>
        </div>
      </div>
        <ScrollDown color="gray-600" url="/resume"/>
    </section>
  );
};

export default About;
