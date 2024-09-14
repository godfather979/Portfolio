
import { useSelector } from "react-redux";
import portfolioData from "../../portfolioData.json"
import SectionTitle from "../../components/SectionTitle";

function Interest() {

  const { interests } = portfolioData;
  // console.log(interests);
  // console.log(portfolioData);
  // const { skills, lottieURL, description1, description2 } = interests;
  return (
    <div className="bg-slate-50 container -mt-2 mb-2 px-4 py-4">
      <SectionTitle text = "bold" title="Areas Of Interest" />

      <div className="space-y-4">
        <ul>
          {interests.map((interest, index) => (
            <li key={index} className="text-lg font-semibold mb-1">
              {interest.title}
            </li>
          ))}
        </ul>

        {/* <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">{description1 || ""}</p>
          <p className="text-white">{description2 || ""}</p> */}
        {/* </div> */}
      </div>


    </div>
  );
}

export default Interest;
