import React from 'react'
import { FaLinkedinIn, FaFilePdf } from "react-icons/fa";
import { SiGithub,SiGmail } from "react-icons/si";
import { Link } from 'react-scroll';
import { navLinksdata } from '../../constants';

const Media = () => {

  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0">
        <div>
          <h2 className="text-base text-black uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href="https://github.com/esraa-alaa89" target="_blank" rel="noopener noreferrer">
              <SiGithub /></a>
            </span>
            <span className="bannerIcon">
              <a href="mailto:esraaalaa2288@gmail.com" target="_blank" rel="noopener noreferrer">
              <SiGmail /></a>
            </span>
            <span className="bannerIcon">
              <a href="https://www.linkedin.com/in/esraa-alaa22/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn /></a>
            </span>
          </div>
        </div>
        <div className='pt-10 xl:pt-0 xl:ml-14'>
          <h2 className="text-base text-black uppercase font-titleFont mb-4">
            Related data
          </h2>

          <div className="flex content-between gap-x-3">
            <span className="w-full bannerIcon p-3 xl:p-5 w-full flex items-center w-full">
              <a className='pr-2' href="https://drive.google.com/file/d/18xjk13snJ1JEGisUee_mbvvA8HpHLwPc/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                Look at my CV
              </a>
              <FaFilePdf />
            </span>

            <Link className='bannerIcon p-3 xl:p-5 w-full flex items-center cursor-pointer'
              activeClass="active"
              to={navLinksdata[4].link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
  )
}

export default Media