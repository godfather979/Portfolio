import { useState } from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import { current } from "@reduxjs/toolkit";
import moment from "moment";
import portfolioData from "../../portfolioData.json"


function Awards() {
  const [selectedItemIndex , setSelectedItemIndex] = useState(0);

  const { awards } = portfolioData;
  return (
    <div className="bg-slate-50 mx-auto px-5 pt-5">
      <SectionTitle title="Awards" />

      <div className="flex py-5 gap-10  sm:flex-col ">
        <div className="flex flex-col gap-5 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {awards.map((award, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5
                 ${
                   selectedItemIndex === index
                     ? "text-black border-tertiary border-l-4  bg-slate-400 ml-3 py-3"
                     : "text-black"
                 } `}
              >
                {award.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 items-center ">
        <img 
            src={awards[selectedItemIndex].photo} 
            alt={awards[selectedItemIndex].title} 
            className="w-48 h-68 object-cover rounded-lg ml-3"
          />
        </div>
        <div>
        <h1 className="text-primary text-xl flex justify-center">
            Date: {moment(awards[selectedItemIndex].date).format('YYYY-MM-DD')}
          </h1>
          <h1 className="text-primary text-xl flex justify-center">
            Organisation : {awards[selectedItemIndex].organisation}
          </h1>
          <h1 className="text-secondary text-xl flex justify-center ">
            {awards[selectedItemIndex].remark}
          </h1>
          
        </div>
      </div>
    </div>
  );
}

export default Awards;
