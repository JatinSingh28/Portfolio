import React from "react";
// import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";
import projectOne from "../../assets/background.jpg";
import projectTwo from "../../assets/background.jpg";
import projectThree from "../../assets/background.jpg";

const Projects2 = () => {
  return (
    <section
      id="projects"
      className="w-full bg-bodyColor text-lightText py-16 border-b-[1px] border-b-black px-10"
    >
      <div className="flex justify-center items-center text-center">
        <p className="bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent font-extrabold lg:text-6xl md:text-5xl text-2xl pb-6 ">
          Web Devlopment Projects
        </p>
        {/* <Title
          // title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="Web Development Projects"
        /> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
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
        />
      </div>
    </section>
  );
};

export default Projects2;
