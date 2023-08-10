import React from "react";
// import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";
import projectOne from "../../assets/background.jpg";
import projectTwo from "../../assets/background.jpg";
import projectThree from "../../assets/background.jpg";

import { eyes, chat_pdf, yoga, crop, toxic } from "./Import";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full bg-bodyColor text-lightText py-16 border-b-[1px] border-b-black px-10"
    >
      <div className="flex justify-center items-center text-center">
        <p className="bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent font-extrabold lg:text-6xl md:text-5xl text-2xl pb-6">
          Machine Learning Projects
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="AI Eyes"
          des=" The project focuses on developing advanced software that empowers the blind to navigate and engage with their surroundings independently."
          src={eyes}
          git="https://github.com/JatinSingh28/AI-Glasses"
        />
        <ProjectsCard
          title="Chat with your PDFs"
          des="Harness the power of Llama2 LLm to engage in natural conversations, extract information, and navigate PDFs effortlessly. Say hello to intuitive PDF interactions."
          src={chat_pdf}
          git="https://github.com/JatinSingh28/Chat-with-your-PDFs-Llama2"
        />
        <ProjectsCard
          title="Real-time Yoga Pose Classifier "
          des="AI solution that uses computer vision to offers instant feedback on your yoga poses."
          src={yoga}
          git="https://github.com/JatinSingh28/Yoga-pose-deployed"
          link="https://yoga-pose-v13.netlify.app/"
        />
        <ProjectsCard
          title="Crop yield prediction with satellite data"
          des=" A revolutionary system using satellite data to forecast crop yields. By analyzing satellite data, it offers accurate insights into crop health and growth, empowering farmers with real-time information to optimize decisions and enhance productivity."
          src={crop}
          git="https://github.com/JatinSingh28/Crop-yield-prediction-with-satellite-data"
        />
        <ProjectsCard
          title="Toxic Comment Classifier"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={toxic}
          git="https://github.com/JatinSingh28/NLP-Toxic-Comment-multi-class-Classifier"
        />
      </div>
    </section>
  );
};

export default Projects;
