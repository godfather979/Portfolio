
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import moment from "moment";
import portfolioData from "../../portfolioData.json"

function Recognitions() {
  const { recognitions } = portfolioData;
   console.log(recognitions);
  return (
    <div className="bg-slate-50 container mx-auto -mt-5 px-4 py-4 mb-5">
      <SectionTitle text = "bold" title="Recognitions" />

      <div className="space-y-4">
        <ul>
          {recognitions.map((recognition, index) => (
            <li key={index} className="font-semibold mb-1 py-1" style={{ fontSize: '17px' }}>
             • Recognized as {recognition.title} with effect from {moment(recognition.date).format('YYYY-MM-DD')}
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

export default Recognitions;
