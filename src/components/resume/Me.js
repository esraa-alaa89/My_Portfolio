import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div className="flex-1" data-aos="fade-down">
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Quick info about me"
            des='Hi, "I’m a front-end developer dedicated to crafting dynamic and user-friendly web applications using JavaScript frameworks like React-Js. I excel in collaborative team environments and am passionate about continuously learning and evolving in the ever-changing field of web development."'
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
