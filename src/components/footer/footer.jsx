import React from 'react'
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {logo} from "../../assets/index"
import { BiLogoGmail } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="logo" />
        <div className="flex gap-4">
        <a href="mailto:archisdhakne@gmail.com">
            <span className="bannerIcon">
              <BiLogoGmail />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/archis-dhakne-2040b91a5/" target="blank">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a href="" target="blank">
            <span className="bannerIcon">
              <FaTwitter />
            </span>
          </a>
        </div>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-green-400 tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className="w-full text-lg relative hover:text-green-400 duration-300 group cursor-pointer">
              About
              <span className="w-full h-[1px] bg-green-400 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-green-400 duration-300 group cursor-pointer">
              Portfolio
              <span className="w-full h-[1px] bg-green-400 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-green-400 duration-300 group cursor-pointer">
              Services
              <span className="w-full h-[1px] bg-green-400 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-green-400 duration-300 group cursor-pointer">
              Blog
              <span className="w-full h-[1px] bg-green-400 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-green-400 duration-300 group cursor-pointer">
              Contact
              <span className="w-full h-[1px] bg-green-400 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-green-400 tracking-wider">
          RESOURCES
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className="w-full text-lg relative hover:text-green-400 duration-300 group cursor-pointer">
              Authentication
              <span className="w-full h-[1px] bg-green-400 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-green-400 duration-300 group cursor-pointer">
              System Status
              <span className="w-full h-[1px] bg-green-400 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-green-400 duration-300 group cursor-pointer">
              Terms of Service
              <span className="w-full h-[1px] bg-green-400 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-green-400 duration-300 group cursor-pointer">
              Pricing
              <span className="w-full h-[1px] bg-green-400 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-green-400 duration-300 group cursor-pointer">
              Over Right
              <span className="w-full h-[1px] bg-green-400 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-green-400 tracking-wider">
          DEVELOPERS
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <li>
            <span className="w-full text-lg relative hover:text-green-400 duration-300 group cursor-pointer">
              Documentation
              <span className="w-full h-[1px] bg-green-400 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-green-400 duration-300 group cursor-pointer">
              Authentication
              <span className="w-full h-[1px] bg-green-400 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-green-400 duration-300 group cursor-pointer">
              API Reference
              <span className="w-full h-[1px] bg-green-400 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-green-400 duration-300 group cursor-pointer">
              Support
              <span className="w-full h-[1px] bg-green-400 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-green-400 duration-300 group cursor-pointer">
              Open Source
              <span className="w-full h-[1px] bg-green-400 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer