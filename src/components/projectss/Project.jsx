import React from "react";
import Web from "./web/Web";
import Ml from "./ml/Ml";

export default function Project() {
  return (
    <div className="bg-black">
      <Ml />
      <Web />
    </div>
  );
}
