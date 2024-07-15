"use client";
import React, { useState, useEffect } from "react";
import ExerciseObj from "./exerciseObj";
import { Joan } from "next/font/google";

const Workouts = ({ _workoutsList, uncomplete }) => {
  let ___workoutList = [];
  try {
    ___workoutList = JSON.parse(
      window?.localStorage.getItem(uncomplete ? "completed" : "uncompleted")
    )
      ? _workoutsList.filter(
          ({ name }) =>
            !JSON.parse(
              window.localStorage.getItem(
                uncomplete ? "completed" : "uncompleted"
              )
            )?.some((e) => e.name === name)
        )
      : _workoutsList;
  } catch (e) {
    // this just produces window not defined and i dont know how to fix it
  }

  const [workoutsList, setWorkoutList] = useState(___workoutList);

  useEffect(() => {
    window.localStorage.setItem(
      uncomplete ? "uncompleted" : "completed",
      JSON.stringify(workoutsList)
    );
  }, [workoutsList]);

  return (
    <>
      <div className="mt-5 flex gap-3 flex-col pb-7">
        {workoutsList?.map((e, i) => (
          <ExerciseObj
            key={i}
            obj={e}
            uncomplete={uncomplete}
            completeFunc={deleteItem}
          />
        ))}
      </div>
    </>
  );

  function deleteItem(e, obj) {
    if (
      JSON.parse(
        window.localStorage.getItem(uncomplete ? "completed" : "uncompleted")
      ) == null
    )
      window.localStorage.setItem(
        uncomplete ? "completed" : "uncompleted",
        JSON.stringify([])
      );

    const completed = JSON.parse(
      window.localStorage.getItem(uncomplete ? "completed" : "uncompleted")
    );

    e.date = fullDate();
    completed.push(e);
    window.localStorage.setItem(
      uncomplete ? "completed" : "uncompleted",
      JSON.stringify(completed)
    );
    const parsedStorage = JSON.parse(
      window.localStorage.getItem(uncomplete ? "completed" : "uncompleted")
    )
      ? JSON.parse(
          window.localStorage.getItem(uncomplete ? "completed" : "uncompleted")
        )
      : [];
    const newArray = _workoutsList.filter(
      ({ name }) => !parsedStorage.some((e) => e.name === name)
    );
    setWorkoutList(newArray);
  }
};

function fullDate() {
  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", options);
  return formattedDate;
}

export default Workouts;
