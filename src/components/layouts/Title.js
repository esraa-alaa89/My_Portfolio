import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-lg font-light text-designColor tracking-wide" data-aos="fade-down">
       {title}
      </h3>
      <h1 className="text-4xl md:text-7xl text-black font-bold capitalize" data-aos="fade-down">{des}</h1>
    </div>
  );
}

export default Title