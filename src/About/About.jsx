import React from "react";
import SocialLinks from "./SocialLinks";
import PassportPhoto from "../assets/PassportPhoto.jpg";
import ScrollDown from "../ScrollDown";

const About = (props) => {
  return (
    <section
      id="about"
      className="relative snappedElement flex flex-col items-center py-10 bg-gradient-to-br from-red-50 to-green-50 min-h-screen"
    >
      <div className="flex flex-col items-center gap-6 shadow-lg w-5/6 sm:w-4/6 mx-5 sm:mx-36 my-10 max-w-2xl px-4 py-7 glass-card rounded-2xl bg-gradient-to-br from-transparent to-white">
        <img
          src={PassportPhoto}
          className="object-cover w-36 h-36 rounded-full select-none"
          alt=""
        />
        <div className="w-5/6 mx-4 flex flex-col items-stretch">
          <h1 className="text-center pb-2 text-2xl text-gray-900 font-bold border-b-4 border-green-200 ">
            About
          </h1>
          <SocialLinks />
          <p className="text-md text-center font-sans text-gray-600">
            I am a Computer Science and Engineering undergraduate currently
            studying in <strong> IIIT, Naya Raipur </strong>. I love technology
            and like to make the best out of it in any way possible, and I love
            to recreate existing software from scratch.
          </p>
          <p className="text-md text-center font-sans text-gray-600 mt-3">
            My primary interests include <strong>systems development</strong>,{" "}
            <strong>web development </strong> and
            <strong> machine learning</strong>.{" "}
          </p>
          <button class="flex group relative m-auto justify-center mt-5 bg-blue-500 hover:bg-blue-200 text-gray-50 font-bold py-2 px-4 rounded-lg w-full items-center cursor-not-allowed mb-2">
            <svg
              class="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download Resume</span>
            <div className="absolute -bottom-6 text-sm inset-x-0 text-gray-100 bg-black bg-opacity-75 rounded-lg scale-0 group-hover:scale-100 transform origin-top transition-transform ">
              Currently Unavailable
            </div>
          </button>
        </div>
      </div>
      <ScrollDown color="gray-600" url="/resume" />
    </section>
  );
};

export default About;
