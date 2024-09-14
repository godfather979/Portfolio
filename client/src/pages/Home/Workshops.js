
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import { convertLegacyProps } from "antd/lib/button/button";
import moment from "moment";
import portfolioData from "../../portfolioData.json"

function Workshops() {

  const { workshops } = portfolioData;
  console.log(workshops);
  // console.log(interests);
  // console.log(portfolioData);
  // const { skills, lottieURL, description1, description2 } = interests;
  return (
    <div className="m-10">
      <h1 className="flex justify-center items-center text-4xl text-primary font-bold">Workshops</h1>

      <div className="flex w-full items-center sm:flex-col mt-10 text-lg">
        <ul>
          {workshops.map((workshop, index) => (
            <li key={index} className="text-black">
                [{index + 1}] 
             Title: {workshop.title}
              <br></br>
              Description: {workshop.description}
              <br></br>
              From: {moment(workshop.from).format('YYYY-MM-DD')}
              <br></br>
              To: {moment(workshop.from).format('YYYY-MM-DD')}
              <br></br><br></br>
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

export default Workshops;
