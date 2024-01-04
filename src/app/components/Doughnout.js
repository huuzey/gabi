"use client";
import React, { useEffect } from "react";
import CanvasJS from "@canvasjs/charts";
import Type from "./Type";
const Doughnout = ({data}) => {
  useEffect(() => {
    var chart = new CanvasJS.Chart("chartContainer4", {
      title: {
        text: `${data[8].title}`,
      },
      backgroundColor: "#e6e6e6",

      data: [
        {
          type: "doughnut",
          dataPoints: [
            { y: data[7].price, indexLabel: `${data[7].title}` },
            { y: data[8].price, indexLabel: `${data[8].title}` },
            { y: data[9].price, indexLabel: `${data[9].title}`},
          ],
        },
      ],
    });

    chart.render();
  }, {});
  return (
    <div
      className="h-[150px]  shadow-lg shadow-black"
      id="chartContainer4"
    ></div>
  );
};

export default Doughnout;
