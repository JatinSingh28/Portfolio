import React from "react";
// import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

import {chat,docs,heart} from "./Import";

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
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Real-time Chat Application"
          des="Real-Time Chat App built on the robust foundation of the MERN (MongoDB, Express.js, React, Node.js) technology stack. Seamlessly connect with friends, family, or colleagues in real-time. "
          src={chat}
          git="https://github.com/JatinSingh28/chat-app"
          link="https://chat-app-mern28.netlify.app/"
        />
        <ProjectsCard
          title="Google Docs Clone"
          des="Revolutionize the way you work together on documents, enabling real-time updates and seamless synchronization among all contributors."
          src={docs}
          git="https://github.com/JatinSingh28/google-docs-clone"
        />
        <ProjectsCard
          title="Heart Failure Prediction Website"
          des="Our innovative Heart Failure Prediction Website offers a user-friendly interface to assess your heart health risk."
          src={heart}
          git="https://github.com/JatinSingh28/Heart-Failure-deployed"
          link="https://heart-failure-deployed.vercel.app/"
        />
      </div>
    </section>
  );
};

export default Projects2;
