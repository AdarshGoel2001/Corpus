/* App.js */
import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
//var CanvasJSReact = require('@canvasjs/react-charts');

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = (props) => {
  const corpusPoints = props.data?.map((corpusPoint) => {
    return { y: corpusPoint.corpusLeft, label: corpusPoint.age };
  });
  const expensePoints = props.data?.map((expensePoint) => {
    return { y: expensePoint.expenses, label: expensePoint.age };
  });
  const options = {
    animationEnabled: true,
    title: {
      text: "Increasing Age",
    },
    axisY: {
      title: "Money in your denomination",
    },
    toolTip: {
      shared: true,
    },
    data: [
      {
        type: "spline",
        name: "expenses",
        showInLegend: true,
        dataPoints: expensePoints,
      },
      {
        type: "spline",
        name: "net worth remaining",
        showInLegend: true,
        dataPoints: corpusPoints,
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart
        options={options}
        classname=""
        /* onRef={ref => this.chart = ref} */
      />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
};

export default Chart;
