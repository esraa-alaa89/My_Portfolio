import React from 'react'
import myImg from "../../assets/images/my-img.jpg";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative bg-white" data-aos='fade-up'>
      <img
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
        src={myImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px]  flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner