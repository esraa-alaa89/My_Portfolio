import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, tools, src,githubLink,websiteLink }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col transition-colors bg-gray-100 bg-opacity-100 duration-500 hover:bg-gray-400 hover:bg-opacity-50 hover:text-black duration-500" data-aos="fade-down">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-auto object-cover hover:scale-110 duration-500 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-500 cursor-pointer">
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <BsGithub /></a>
              </span>
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-500 cursor-pointer">
              <a href={websiteLink} target="_blank" rel="noopener noreferrer">
                <FaGlobe /></a>
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-500 tracking-wide my-3">
            {des}
          </p>
          <span className='text-sm tracking-wide mt-3 duration-500 text-red-600'>Used-tools: <span className='text-sm text-gray-500 hover:text-black'>{tools}</span> </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard