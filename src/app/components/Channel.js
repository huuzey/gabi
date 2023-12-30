"use client";
import React, { useEffect } from "react";
import CanvasJS from "@canvasjs/charts";
import Type from "./Type";
const Channel = () => {
  useEffect(() => {
    var chart = new CanvasJS.Chart("chartContainer3", {
      title: {
        text: "Payment channel by Amount",
      },
      backgroundColor: "#e6e6e6",

      axisY: {
        prefix: "$",
        labelAngle: 10,
        suffix: "k",
        labelTextAlign: "right",
        gridThickness: 0,
        tickLength: 0,
        lineThickness: 0,
      },
      axisX: {
        gridThickness: 0,
        tickLength: 0,
        lineThickness: 0,
      },
      data: [
        //array of dataSeries
        {
          //dataSeries object

          /*** Change type "column" to "bar", "area", "line" or "pie"***/
          type: "column",
          color: "#33abf5",
          dataPoints: [
            { label: "Online", y: 118 },
            { label: "In store", y: 49 },
            { label: "Other", y: 20 },
          ],
        },
      ],
    });

    chart.render();
  }, {});
  return (
    <div
      className="h-[150px]  shadow-lg shadow-black"
      id="chartContainer3"
    ></div>
  );
};

export default Channel;
