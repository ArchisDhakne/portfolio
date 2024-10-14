import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaGithub,
  FaNode
} from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

import { SiTailwindcss, SiMongodb  } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [ "MERN Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-green-400 capitalize">Archis Dhakne</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#22c55e"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I’m a passionate full-stack developer with expertise in the MERN stack, on building modern, user-centric web applications.From deploying scalable web apps like <span className="text-xl text-bold text-green-400">ChatApp</span> to creating AI-driven fitness platforms like <span className="text-xl text-bold text-green-400"> AI-Trainer</span>, I enjoy crafting solutions that blend innovation with functionality. Explore my work and let's build something amazing together!
        </p>
      </div>
      <a href="/path/to/your/resume.pdf" download>
  <div className="flex items-center gap-2 hover:gap-6 cursor-pointer bg-green-400 w-60 text-black rounded-xl p-3 hover:bg-green-500 shadow-2xl shadow-green-500/100 transition-all duration-300 ease-in-out">
    <button>Download Resume</button>
    <div className="text-3xl transition-transform duration-300 ease-in-out">
      <IoIosArrowRoundForward />
    </div>
  </div>
</a>

      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4 ">
            <a href="https://github.com/ArchisDhakne" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            {/* <a href="https://github.com/noorjsdivs/portfolioone" target="blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a> */}
            <a href="https://github.com/" target="blank">
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/archis-dhakne-2040b91a5/" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaNode className="text-4xl"/>
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiMongodb  />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;