import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
        {/* part one */}
      <div data-aos="fade-up">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl text-black font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front end internship"
            subTitle="Remotly intern at Web-Masters Academy(July-Aug)"
            result="Online Intern"
            des="This intern was a practical experience in front-end development by working on projects using HTML, CSS, JavaScript, and React.js. Developed and implemented responsive web interfaces, enhanced UI/UX design skills, and collaborated on creating dynamic and interactive web applications."
          />
          <ResumeCard
            title="Java Core, Java Spring framework"
            subTitle="Java & banking internship at Egyptian Banking Institute (EBI) - (Jan-Feb)"
            result="Offline"
            des="Gained hands-on experience in Java development and banking operations. Enhanced coding skills while understanding about banking processes and industry practices."
          />
        </div>
      </div>
      
      {/* part Two */}
      <div data-aos="fade-down">
        <div className="py-0 lgl:py-0 xl:py-5 font-titleFont flex flex-col">
        </div>
        <div className="mt-0 md:mt-16 lgl:mt-24 xl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="AI hackathon"
            subTitle="Hackathon Orange Digital Center (June 2022 - Jule 2022)"
            result="Offline"
            des="Participated in a fast-paced hackathon focused on developing innovative AI solutions. Gained brief but valuable experience in brainstorm, dealing with python packages like Numby, Pandas,... and gaining hands-on toughed-experience with machine learning technologies and problem-solving in a competitive environment."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
