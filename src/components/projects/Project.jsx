import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="CHAT APP"
          des="ChatApp is a real-time messaging platform built with the MERN stack, offering seamless communication with features like user authentication, message history, and a sleek, responsive UI. Designed for simplicity and speed, it connects people instantly, anywhere."
          src={projectOne}
          githubProject={'https://github.com/ArchisDhakne/ChatApp'}
          liveLink='https://chatapp-cz01.onrender.com'
        />
        <ProjectsCard
          title="AI-TRAINER"
          des="TrainerApp is a personalized fitness platform that creates custom workout plans based on user details like age, weight, and fitness level. It offers a variety of training options, daily progress tracking, and exercise demos to help users achieve their fitness goals."
          src={projectTwo}
        />
        <ProjectsCard
          title="TEXT-EDITOR"
          des="TextEditor is a lightweight, browser-based text editor designed for quick note-taking and editing. With a clean, minimal interface, it provides essential features like saving and editing text, making it perfect for everyday use."
          src={projectThree}
          githubProject={'https://github.com/ArchisDhakne/Text-Editor'}
        />
        {/* <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        /> */}
      </div>
    </section>
  );
}

export default Projects