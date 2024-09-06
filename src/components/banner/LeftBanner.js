import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Front-end Developer.", "Freelancer.", "Electrical Engineering and Computer Science speciallist"],
      loop: true,
      typeSpeed: 50,
      deleteSpeed: 50,
      delaySpeed: 1500,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20 bg-white" data-aos='fade-down'>
      <div className="flex flex-col gap-5">
        <h4 className="text-gray-900 text-lg font-normal">Hello  </h4>
        <h1 className="text-5xl md:text-6xl font-bold text-black">
          I'm <span className="text-designColor capitalize">Esraa Alaa Abdelmoneem</span>
        </h1>
        <h2 className="text-4xl font-bold text-black">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base text-gray-900 font-bodyFont leading-6 tracking-wide">
          "I’m a front-end developer dedicated to crafting dynamic and user-friendly web applications using JavaScript frameworks like React-Js. I excel in collaborative team environments and am passionate about continuously learning and evolving in the ever-changing field of web development."
        </p>
      </div>
     <Media />
    </div>
  );
}

export default LeftBanner