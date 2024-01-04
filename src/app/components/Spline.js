"use client";
import React, { useEffect } from "react";
import CanvasJS from "@canvasjs/charts";
import Type from "./Type";
const Spline = ({ data }) => {
  useEffect(() => {
    var chart = new CanvasJS.Chart("chartContainer6", {
      title: {
        text: `${data[6].title}`,
      },

      axisX: {
        gridThickness: 0,
        tickLength: 0,
        lineThickness: 0,
      },
      axisY: {
        prefix: "$",
        labelAngle: 10,

        labelTextAlign: "right",
        gridThickness: 0,
        tickLength: 0,
        lineThickness: 0,
      },

      backgroundColor: "#e6e6e6",
      animationEnabled: true,
      exportEnabled: true,

      data: [
        {
          toolTipContent: "Week {x}: {y}%",

          markerType: "none",
          type: "line",
          dataPoints: [
            { x: new Date(2012, 0, 1), y: data[7].price },
            { x: new Date(2012, 1, 1), y: data[2].price },
            { x: new Date(2012, 2, 1), y: data[4].price },
            { x: new Date(2012, 3, 1), y: data[1].price },
            { x: new Date(2012, 4, 1), y: data[3].price },
            { x: new Date(2012, 5, 1), y: data[9].price },
          ],
        },
      ],
    });

    chart.render();
  }, {});
  return (
    <div
      className="h-[150px]  shadow-lg shadow-black"
      id="chartContainer6"
    ></div>
  );
};

export default Spline;
