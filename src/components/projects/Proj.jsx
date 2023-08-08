import React from "react";
import data from "./webProjectData"
import ProjectComp from "./ProjectComp";

export default function Proj() {
  return (
    <div className="bg-green-800">
      <div
        className="container bg-black  h-fit pb-36 px-4 md:px-14 w-screen"
      >
        {/* <img
        src={cursor}
        // onMouseEnter={enter}
        // onMouseLeave={leave}
        className="cursor-img absolute h-28"
        alt="cursor"
      /> */}
        <h2 className="text-3xl md:text-4xl text-white pt-28 pb-5 font-bold">
          Web Development Projects
        </h2>
        <div className="md:grid md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <ProjectComp
              key={index}
              name={item.name}
              image={item.image}
              images={item.images}
              features={item.features}
              github={item.github}
              live={item.live}
              vide={item.live}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
