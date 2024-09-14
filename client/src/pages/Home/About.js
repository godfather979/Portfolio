
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import portfolioData from "../../portfolioData.json"



function About() {
  // const { loading, portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const { skills, lottieURL, description1, description2 } = about;

  return (
    <div className="min-h-screen h-auto  bg-slate-300 flex items-center justify-center">
      <div className="flex w-full items-center justify-center p-5 flex-wrap sm:flex-col">
        <div className="w-1/2 sm:w-full m-auto p-2">
        <div className="lg:scale-110 sm:scale-95">
          <img
            src="./Kiran-Talele-picture.png"
            alt="Profile"
            className="rounded-full shadow-xl w-64 h-64   object-fit mx-auto"
          />
          </div>
        </div>
        <div className="flex flex-col justify-center w-1/2 sm:w-full pr-4 pl-2 pt-5">
          <SectionTitle title="About" />
          <p className="text-black">{description1 || ""}</p>
          <p className="text-black">{description2 || ""}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
