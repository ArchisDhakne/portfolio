import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        
  <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
    <p className="text-sm text-green-400 tracking-[4px]"></p>
    <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
  </div>
  <p className="text-sm text-green-400 tracking-[4px] uppercase">
            Education
          </p>
  <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
    <ResumeCard
      title="B.E in INFORMATION TECHNOLOGY"
      subTitle="PVG'S COLLEGE OF ENGINEERING PUNE (2019 - 2023)"
      result="7.71/10"
      des="Completed a comprehensive curriculum focused on software development, data structures, algorithms, and emerging technologies, equipping me with skills for the IT industry."
    />
    <ResumeCard
      title="HSC"
      subTitle="KPBD SECONDARY AND HIGHER SECONDARY SCHOOL (2018 - 2019)"
      result="80.31/100"
      des="Specialized in Science with a focus on Mathematics, Physics, and Computer Science, building a strong foundation for engineering studies."
    />
    <ResumeCard
      title="SSC"
      subTitle="CHAMPAVATI VIDHYALAYA BEED ( 2017)"
      result="92.60/100"
      des="Excelled in core subjects like Mathematics and Science, laying the groundwork for my future academic and professional achievements."
    />
  </div>
</div>

      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-green-400 tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Education;