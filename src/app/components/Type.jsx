"use client";

import React, { useEffect, useState } from "react";
import CanvasJS from "@canvasjs/charts";
const Type = ({ data }) => {
  useEffect(() => {
    var chart = new CanvasJS.Chart("chartContainer1", {
      backgroundColor: "#e6e6e6",
      axisX: {
        gridThickness: 0,
        tickLength: 0,
        lineThickness: 0,
      },

      title: {
        text: `${data[4].title}`,
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
            { y: data[1].price, label: `${data[2].title}` },
            { y: data[6].price, label: `${data[6].title}` },
          ],
        },
      ],
    });
    chart.render();
  }, {});
  return <div id="chartContainer1" className="h-[150px]"></div>;
};

export default Type;
