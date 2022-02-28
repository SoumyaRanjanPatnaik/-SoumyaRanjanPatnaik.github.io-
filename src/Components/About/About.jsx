import React from "react";
import SocialLinks from "./SocialLinks";
import aboutConfig from "../../Config/aboutConfig";

const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center
      pt-20 pb-5 bg-gradient-to-br from-red-50 to-green-50"
    >
      <div
        className="flex flex-col items-center justify-center w-5/6 
        max-w-2xl px-4 m-auto shadow-lg gap-6 sm:w-4/6 sm:mx-36 py-12 
        glass-card rounded-2xl bg-gradient-to-br from-transparent 
      to-white transition-all "
      >
        <img
          src={aboutConfig.profilePic}
          className="object-cover rounded-full select-none w-36 h-36"
          alt="My Photo"
        />
        <div className="flex flex-col items-stretch w-5/6 mx-4 gap-3">
          <h1
            className="pb-2 text-2xl font-bold text-center text-gray-900 border-b-4
           border-green-200 "
          >
            About
          </h1>
          <SocialLinks />
          <div className="overflow-y-auto flex flex-col gap-2 sm:h-full min-h-[7rem] max-h-[300px]">
            {aboutConfig.content.map((item, index) => {
              return (
                <p
                  key={index}
                  className="mx-1 font-sans text-center text-gray-600 text-md"
                  dangerouslySetInnerHTML={{ __html: item }}
                ></p>
              );
            })}
          </div>
          <DownloadButton />
        </div>
      </div>
    </section>
  );
};

const DownloadButton = () => {
  const {
    resume: { downloadable, resumeLocation },
  } = aboutConfig;
  const DownloadIcon = () => (
    <svg
      className="fill-current w-4 h-4 mr-2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
    </svg>
  );
  return (
    <a
      className={`flex group relative m-auto justify-center mt-5 bg-blue-600
      text-gray-50 font-bold py-2 px-4 rounded-lg w-full items-center transition  ${
        !downloadable
          ? "hover:cursor-not-allowed hover:bg-blue-200"
          : "cursor-pointer hover:bg-blue-500 focus:outline-offset-2 focus:outline-1"
      } mb-2 `}
      href={downloadable && resumeLocation}
    >
      <DownloadIcon />
      <span>Download Resume</span>
      {downloadable || <ToolTip />}
    </a>
  );
};

const ToolTip = () => {
  return (
    <div
      className="absolute inset-x-0 px-2 py-1 text-sm text-gray-100 bg-black 
      rounded-lg -bottom-6 bg-opacity-75 scale-0 group-hover:scale-100 transform origin-top 
      transition-transform my-1 -translate-y-2 group-hover:translate-y-3"
    >
      Currently Unavailable
    </div>
  );
};
export default About;
