import React, { useState } from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import moment from "moment";
import portfolioData from "../../portfolioData.json"

function CurrentPosition() {

  const { currentpositions } = portfolioData;

  return (
    <div className=" m-auto px-4 py-4 bg-gray-50 ">
      <SectionTitle text="bold" title="Current Positions" />
      <div className="flex flex-col justify-center">
        {currentpositions.map((currentposition, index) => (
          <div
            key={index}
            className="border-b-2 w-full lg:w-1/2 bg-slate-200 mb-2 p-1 rounded-sm"
          >
            <div className="pt-1">
              <h1 className="text-md font-semibold">
                {currentposition.position}
              </h1>
             
                <div className="p-0 gap-0">
                  <p className="text-xs text-gray-600 font-semibold">
                    Department: {currentposition.department}
                  </p>
                  <p className="text-xs text-gray-600 font-semibold">
                    Working from:{" "}
                    {moment(currentposition.tenure).format("YYYY-MM-DD")}
                  </p>
                </div>
       
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CurrentPosition;
