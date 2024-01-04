import React from "react";
import Channel from "./Channel";
import Doughnout from "./Doughnout";
import Spline from "./Spline";

const Third = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-9">
      <Channel data={data} />
      <Doughnout data={data} />
      <Spline data={data} />
    </div>
  );
};

export default Third;
