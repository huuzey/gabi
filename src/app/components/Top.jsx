"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Month from "@/components/ui/Month";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import CanvasJS from "@canvasjs/charts";

const Top = ({ data }) => {
  console.log("top", data);
  useEffect(() => {
    var gauge = {
      title: { text: `${data[0].title}` },
      data: { y: 66.69 }, //gauge value
      ot: { y: "$" + 66.69 + "k" }, //ot value
      maximum: 133.91,
    };

    var chart = new CanvasJS.Chart("chartContainer", {
      backgroundColor: "#e6e6e6",
    });
    createGauge(chart);

    //Function for gauge
    function createGauge(chart) {
      //Caluculation of remaining parameters to render gauge with the help of doughnut
      gauge.unoccupied = {
        y: gauge.maximum - gauge.data.y,
        color: "#DEDEDE",
        toolTipContent: null,
        highlightEnabled: false,

        click: function () {
          gauge.unoccupied.exploded = true;
        },
      };
      gauge.data.click = function () {
        gauge.data.exploded = true;
      };

      if (!gauge.data.color) gauge.data.color = "#69C434";
      gauge.valueText = {
        text: gauge.ot.y.toString(),
        verticalAlign: "center",
        fontSize: "15",
        fontFamily: "DIN Light",
      };

      var data = {
        type: "doughnut",
        indexLabelPlacement: "outside",
        innerRadius: "60%",

        dataPoints: [
          {
            y: 1,
            indexLabel: "$" + 133.9 + "k",
            color: "transparent",
          },
          {
            y: gauge.maximum - 2,
            indexLabel: "$" + 66.69 + "k",
            color: "transparent",
          },
          {
            y: 1,
            indexLabel: "$" + 0 + "k",
            color: "transparent",
          },
          gauge.data,

          gauge.unoccupied,
        ],
      };

      if (!chart.options.data) chart.options.data = [];
      chart.options.data.push(data);

      if (gauge.title) {
        chart.options.title = gauge.title;
      }

      //For showing value
      if (!chart.options.subtitles) chart.options.subtitles = [];
      chart.options.subtitles.push(gauge.valueText);

      chart.render();
    }
  }, {});

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {/* nominal account */}
        <div className="flex shadow-lg py-8 px-0 h-[150px] shadow-black flex-col justify-center items-center">
          <Button className="text-black text-3xl">${data[4].price}</Button>
          <p className="text-xs">{data[4].title}</p>
        </div>
        {/* months*/}

        <div className="  shadow-lg gap-y-1 h-[150px] gap-x-0.5 py-2 px-8 shadow-black grid grid-cols-3">
          <Month text={"select all"} />
          <Month text={"February"} />
          <Month text={"April"} />
          <Month text={"January"} />
          <Month text={"March"} />
          <Month text={"May"} />
        </div>
        {/* category */}
        <div className="h-[150px] ">
          <div className="flex shadow-lg  px-0 mb-5  shadow-black  flex-col  ">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="ml-3 mr-3">
                  {data[2].title}
                </AccordionTrigger>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xs ml-4 mr-4 mb-2  font-light">
                  All
                </AccordionTrigger>
              </AccordionItem>
            </Accordion>
          </div>
          <div className=" shadow-lg  px-0  flex flex-col shadow-black ">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="ml-3 mr-3">
                  {data[5].title}
                </AccordionTrigger>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xs  mb-2 mr-4   ml-4 font-light">
                  All
                </AccordionTrigger>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        {/* half donut */}
        <div
          id="chartContainer"
          className="h-[150] shadow-lg shadow-black "
        ></div>
      </div>{" "}
    </div>
  );
};

export default Top;
