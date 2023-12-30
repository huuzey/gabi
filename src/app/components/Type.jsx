"use client";

import React, { useEffect } from "react";
import CanvasJS from "@canvasjs/charts";
const Type = () => {
  useEffect(() => {
    var chart = new CanvasJS.Chart("chartContainer1", {
      backgroundColor: "#e6e6e6",
      axisX: {
        gridThickness: 0,
        tickLength: 0,
        lineThickness: 0,
      },

      title: {
        text: "Transaction Type by Amount",
      },
      axisY: {
        prefix: "$",
        labelAngle: 10,
        suffix: "k",
        labelTextAlign: "right",
        gridThickness: 0,
        tickLength: 0,
        lineThickness: 0,
      },
      data: [
        {
          type: "bar",

          color: "#8fe673",
          dataPoints: [
            { y: 198, label: "Special" },
            { y: 201, label: "Place" },
          ],
        },
      ],
    });
    chart.render();
  }, {});
  return <div id="chartContainer1" className="h-[150px]"></div>;
};

export default Type;
