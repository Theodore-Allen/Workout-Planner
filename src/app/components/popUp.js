"use client";
import React, { useState } from "react";
import { GoX } from "react-icons/go";

const PopUp = ({ children, handler, on }) => {
  
  return (
    on && (
      <div className="z-20 bg-slate-500 fixed left-0 top-0 w-screen h-screen bg-opacity-55 flex items-center justify-center">
        <div className="bg-white rounded-md shadow-md p-2">
          <div className="flex justify-end">
            <button onClick={btnHandler}>
              <GoX
                className="p-1 bg-gray-100 rounded-full hover:bg-gray-300 transition-all"
                size={30}
              />
            </button>
          </div>
          <div className="px-10">{children}</div>
        </div>
      </div>
    )
  );

  function btnHandler() {
    handler(false)
  }
};

export default PopUp;
