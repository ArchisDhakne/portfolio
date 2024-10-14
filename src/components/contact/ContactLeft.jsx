import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { BiLogoGmail } from "react-icons/bi";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Archis Dhakne</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I’m a full-stack developer with expertise in the MERN stack, dedicated to building modern, efficient web applications that deliver real impact.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <a href="callto:+919307570081"><span className="text-lightText">9307570081</span></a>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <a href="mailto:archisdhakne@gmail.com"><span className="text-lightText">archisdhakne@gmail.com</span></a>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          {/* <span className="bannerIcon">
            <FaFacebookF />
          </span> */}
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
    </div>
  );
}

export default ContactLeft