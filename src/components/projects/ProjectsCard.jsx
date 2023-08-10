import React from "react";
// import { BsGithub } from "react-icons/bs";
// import { FaGlobe } from "react-icons/fa";
// import { FaCalendar } from 'react-icons/fa'
import github from "../../assets/github.png";
import live from "../../assets/live.png";

const ProjectsCard = ({ title, des, src, git, link }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] hover:bg-gradient-to-b hover:from-purple-800 hover:to-gray-900 transition-colors duration-1000">
      <div className="w-full h-60 overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-lg uppercase bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent font-bold">
              {title}
            </h3>
            <div className="flex gap-2 pl-1">
              {git != null && (
                <span className="text-lg w-10 h-10 rounded-full bg-white inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                  <a href={git} target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="github-icon" />
                  </a>
                </span>
              )}
              {link != null && (
                <span className="text-lg w-10 h-10 bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={live} alt="globe-icon" className="p-1" />
                  </a>
                </span>
              )}
            </div>
          </div>
          <p className="text-base tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
