import React from "react";
import Proj1 from "./mlProjects/Proj1";
import Proj2 from "./mlProjects/Proj2";
import Proj3 from "./mlProjects/Proj3";
import Proj4 from "./mlProjects/Proj4";

function Ml() {
  return (
    <div className="px-16">
      <p className="text-3xl md:text-4xl font-bold text-white">ML Projects</p>
      <div className="grid grid-cols-3 px-16 pt-28 gap-8 pb-36">
        <Proj1 />
        <Proj2 />
        <Proj3 />
        <Proj4 />
      </div>
    </div>
  );
}

export default Ml;
