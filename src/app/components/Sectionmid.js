"use client";
import React, { useEffect } from "react";
import CanvasJS from "@canvasjs/charts";
import Type from "./Type";
const Sectionmd = ({ data }) => {
  useEffect(() => {
    var chart = new CanvasJS.Chart("chartContainer2", {
      title: {
        text: `${data[6].title}`,
      },
      backgroundColor: "#e6e6e6",

      axisX: {
        gridThickness: 0,
        tickLength: 0,
        lineThickness: 0,
      },
      axisY: {
        gridThickness: 0,
        tickLength: 0,
        lineThickness: 0,
      },
      data: [
        
        {
         
          type: "column",

          dataPoints: [
            { label: `${data[0].title}`, y: data[0].price },
            { label: `${data[1].title}`, y:  data[1].price },
            { label: `${data[2].title}`, y:  data[2].price },
            { label: `${data[3].title}`, y:  data[3].price },
            { label: `${data[4].title}`, y: data[4].price },
            { label: `${data[5].title}`, y:  data[5].price },
            { label: `${data[6].title}`, y:  data[6].price },
            { label: `${data[7].title}`, y:  data[7].price },
            { label: `${data[8].title}`, y:  data[8].price },
            { label: `${data[9].title}`, y:  data[9].price },
          ],
        },
      ],
    });

    chart.render();
  }, {});
  return (
    <div className="lg:flex lg:flex-row gap-4 mt-6 flex flex-col  items-center justify-center  ">
      <div className="h-[150px] w-[50%] shadow-lg shadow-black">
        <Type data={data} />
      </div>
      <div
        className="h-[150px] w-[50%] shadow-lg shadow-black"
        id="chartContainer2"
      ></div>
    </div>
  );
};

export default Sectionmd;
