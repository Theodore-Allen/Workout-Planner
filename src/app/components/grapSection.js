"use client";
import React from "react";
import { BarChart } from "@mui/x-charts";
import { DataGrid } from "@mui/x-data-grid";

import Workouts from "./workouts";

const GrapSection = ({ weekArray }) => {
  const days = [
    "Monday",
    "Tuesday",
    "Wensday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const rows = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
    { id: 3, col1: "MUI", col2: "is Amazing" },
  ];

  const columns = [
    { field: "col1", headerName: "Column 1", width: 150 },
    { field: "col2", headerName: "Column 2", width: 150 },
  ];

  // workouts completed this week
  return (
    <>
      <div className=" ">
        <h1 className="text-center text text-3xl ">Weekly statistics</h1>
        <BarChart
          yAxis={[
            {
              label: "Workouts",
            },
          ]}
          xAxis={[
            {
              id: "barCategories",
              data: days,

              scaleType: "band",
            },
          ]}
          series={[
            {
              data: weekArray,
              label: "Workouts Completed",
            },
          ]}
          height={370}
          colors="black"
        />
      </div>

      <div className="md:grid grid-flow-col-dense gap-6">
        <Table info={[{ name: "days", data: 22 }]} />
       
      </div>
    </>
  );
};

function Table({ info, name }) {
  const rows = info.map((e, i) => {
    return { id: i, col1: e[0], col2: e[2] };
  });

  // const rows = [
  //     { id: 2, col1: 'Hello', col2: 'World' },
  //     { id: 1, col1: 'DataGridPro', col2: 'is Awesome' },
  //     { id: 3, col1: 'MUI', col2: 'is Amazing' },
  //   ];

  const columns = [
    { field: "col1", headerName: "WORKOUT", width: 150 },
    { field: "col2", headerName: "REPS", width: 150 },
  ];

  return (
    <div className="">
      <h1 className=" text-xl text-center mb-5">Completed That Day</h1>
      <div className="w-full">
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
}

export default GrapSection;
