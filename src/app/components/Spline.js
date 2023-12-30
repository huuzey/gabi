"use client";
import React, { useEffect } from "react";
import CanvasJS from "@canvasjs/charts";
import Type from "./Type";
const Spline = () => {
  useEffect(() => {
    var chart = new CanvasJS.Chart("chartContainer6", {
      title: {
        text: "Amount Spent per Month",
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
            { x: new Date(2012, 0, 1), y: 1352 },
            { x: new Date(2012, 1, 1), y: 154 },
            { x: new Date(2012, 2, 1), y: 1321 },
            { x: new Date(2012, 3, 1), y: 63 },
            { x: new Date(2012, 4, 1), y: 950 },
            { x: new Date(2012, 5, 1), y: 1201 },
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
