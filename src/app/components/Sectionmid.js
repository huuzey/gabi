"use client";
import React, { useEffect } from "react";
import CanvasJS from "@canvasjs/charts";
import Type from "./Type";
const Sectionmd = () => {
  useEffect(() => {
    var chart = new CanvasJS.Chart("chartContainer2", {
      title: {
        text: "Expenses by Amount",
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
        //array of dataSeries
        {
          //dataSeries object

          /*** Change type "column" to "bar", "area", "line" or "pie"***/
          type: "column",

          dataPoints: [
            { label: "banana", y: 18 },
            { label: "orange", y: 29 },
            { label: "apple", y: 40 },
            { label: "mango", y: 34 },
            { label: "grape", y: 24 },
            { label: "pineapple", y: 4 },
            { label: "strawberry", y: 2 },
            { label: "watermelon", y: 1 },
            { label: "papaya", y: 8 },
            { label: "cucrela", y: 2 },
          ],
        },
      ],
    });

    chart.render();
  }, {});
  return (
    <div className="lg:flex lg:flex-row gap-4 mt-6 flex flex-col  items-center justify-center  ">
      <div className="h-[150px] w-[50%] shadow-lg shadow-black">
        <Type />
      </div>
      <div
        className="h-[150px] w-[50%] shadow-lg shadow-black"
        id="chartContainer2"
      ></div>
    </div>
  );
};

export default Sectionmd;
