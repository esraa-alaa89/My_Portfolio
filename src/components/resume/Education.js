import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div data-aos="fade-up">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl text-black md:text-4xl font-bold">Educational Qualification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Faculty of Engineering, Al-azhar University"
            subTitle="Bachelor Degree of Electrical Engineering and Computer Science (Sep 2018 - Jul 2023)"
            result="GPA : 83.70%"
            des="Studied Hardware material like Embedded systems, IC and Software materials like DBMS, OOP, Java, AI, Compiler Design etc."
          />
          <ResumeCard
            title="Digital Egyptian Pioneers Institute"
            result="Hybird"
            subTitle="Full stack diploma & Softskills (June 2024 - October 2024)"
            des="React-js, Node-Js, Git & Github "
          />
        </div>
      </div>
      
      {/* part Two */}
      <div data-aos="fade-down">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl text-black font-bold">Certificates</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <a className='cursor-pointer' href='https://drive.google.com/file/d/1s7evnjVpaMjT734bBELGmGPGk-u1YHXn/view?usp=sharing' target='_blank'>
            <ResumeCard
              title="Front end Development diploma"
              subTitle="at Route Academey [5 months]"
              result="offline"
              des="Learnt frontend development using html, css, javascript language, React-Js with real and smart projects."
          />
          </a>
          <a className='cursor-pointer' href='https://drive.google.com/file/d/1LTQcX2G-yiD3mdKI_xDfr4V0Hxsy4ZBz/view?usp=drive_link' target='_blank'>
            <ResumeCard
              title="Database Fundamentals | SQL Server course"
              subTitle="Online course at Mahara-Tech Website"
              result="Online"
              des="Learnt basics of database fundmentals & types of servers as a crash course."
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Education