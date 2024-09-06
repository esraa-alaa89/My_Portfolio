import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import {  FaLinkedinIn } from "react-icons/fa";
import { SiGithub,SiGmail } from "react-icons/si";
import logo from "../../assets/images/my-img.jpg"
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu]=useState(false);
  return (
    <div className="w-full h-24 sticky top-0 z-50 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 bg-white">
      <div>
        <span className='text-base text-slate-900'>Esraa.Alaa</span>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base text-gray-700 font-normal tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={2000}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-white w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer transition-all duration-700"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-100 p-4 scrollbar-hide transition-all duration-700">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-16 h-16 rounded-full" src={logo} alt="logo" />
                <p className="text-sm text-gray-900 font-bodyFont mt-2">
                  Hi, "I’m a front-end developer dedicated to crafting dynamic and user-friendly web applications using JavaScript frameworks like React-Js. I excel in collaborative team environments and am passionate about continuously learning and evolving in the ever-changing field of web development.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-900 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={2000}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base text-black uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <span className="bannerIcon">
                    <SiGithub />
                  </span>
                  <span className="bannerIcon">
                    <SiGmail />
                  </span>
                  <span className="bannerIcon">
                    <FaLinkedinIn />
                  </span>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-900 font-bodyFont hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar