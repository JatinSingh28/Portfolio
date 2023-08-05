import React from "react";
import Proj1 from "./webProjects/Proj1";
import Proj2 from "./webProjects/Proj2";
import Proj3 from "./webProjects/Proj3";
import Proj4 from "./webprojects/Proj4";

function Web() {
  return (
    <div className="px-16">
      <p className="text-3xl md:text-4xl font-bold text-white">Web Projects</p>
      <div className="grid grid-cols-3 px-16 pt-28 gap-8 pb-36">
        <Proj1 />
        <Proj2 />
        <Proj3 />
        <Proj4 />
      </div>
    </div>
  );
}

export default Web;
