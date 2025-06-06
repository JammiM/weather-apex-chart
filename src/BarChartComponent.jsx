import React from "react";
import Chart from "react-apexcharts";

const BarChartComponent = () => {
  const apexOptions = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };

  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];

  return <Chart options={apexOptions} series={series} type="bar" width="500" />;
};

export default BarChartComponent;
