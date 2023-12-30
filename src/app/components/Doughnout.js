"use client";
import React, { useEffect } from "react";
import CanvasJS from "@canvasjs/charts";
import Type from "./Type";
const Doughnout = () => {
  useEffect(() => {
    var chart = new CanvasJS.Chart("chartContainer4", {
      title: {
        text: "Merchant by Expenses",
      },
      backgroundColor: "#e6e6e6",

      data: [
        {
          type: "doughnut",
          dataPoints: [
            { y: 5, indexLabel: "McDonald's $0.01k(0.73%)" },
            { y: 35.0, indexLabel: "KFC $0.5k(30.26%)" },
            { y: 227, indexLabel: "Others $1,13k(68.4%)" },
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
