import React, { useState } from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import moment from "moment";
import portfolioData from "../../portfolioData.json"

function AddPosition() {
  // const { portfolioData } = useSelector((state) => state.root);
  const { addpositions } = portfolioData;


  return (
    <div className="container mx-auto px-4 py-4 bg-gray-50 ">
      <SectionTitle text="bold" title="Additional Positions" />
      <div>
        {addpositions.map((addposition, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-sm shadow-sm p-1 mb-2 sm:w-full lg:w-1/2 hover:scale-105"
          >
            <div className="">
              <h1 className="text-md font-semibold">
                {addposition.position}
              </h1>
              <div className="">
                <p className="text-xs text-gray-600 f">
                  {addposition.department}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddPosition;
