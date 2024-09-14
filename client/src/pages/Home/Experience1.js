import { useState } from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import portfolioData from "../../portfolioData.json"

function Experience1() {
  const [selectedItemIndex , setSelectedItemIndex] = useState(0);

  const { experiences } = portfolioData;
 

  return (
    <div className="bg-slate-200 container mx-auto px-4 py-4">
      <SectionTitle title="Teaching Experience" />

      
         <div className=" flex py-5 gap-10  sm:flex-col max-h-[65vh]">
         <div className="flex flex-col gap-5 border-l-2 border-[#135e4c82] w-1/3 overflow-y-auto sm:flex-row sm:overflow-x-scroll sm:w-full sm:h-fit">
         
          {experiences.map((experience, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 sm:text-lg
                 ${
                   selectedItemIndex === index
                     ? "text-black border-tertiary border-l-4  bg-slate-400 ml-3 py-3 sm:py-1 sm:pt-2"
                     : "text-black"
                 } `}
              >
                {experience.title}
              </h1>
            </div>
          ))}
        </div>

        
        <div className=" flex flex-col justify-center gap-3 w-1/2 sm:w-full ">
          <h1 className="text-primary text-3xl font-semibold sm:text-xl">
            {experiences[selectedItemIndex].company}
          </h1>
          <h1 className="text-tertiary text-xl sm:text-lg">
            {experiences[selectedItemIndex].period}
          </h1>
          <p className="text-black ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            expedita accusantium nulla ad odio quisquam consequuntur laudantium
            saepe ratione consectetur optio necessitatibus ut, impedit ducimus
            corrupti ullam veniam error non.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience1;
