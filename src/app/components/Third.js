import React from "react";
import Channel from "./Channel";
import Doughnout from "./Doughnout";
import Spline from "./Spline";

const Third = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-9">
      <Channel />
      <Doughnout />
      <Spline />
    </div>
  );
};

export default Third;
