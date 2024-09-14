
import { useSelector } from "react-redux";
import portfolioData from "../../portfolioData.json"

function Intro() {
 
  const { intro } = portfolioData;
  const { firstName, lastName, welcomeText, description, caption } = intro;
  return (

    <div className="min-h-[91vh] h-auto bg-slate-200 flex items-center justify-between px-10 py-5 sm:w-full sm:px-5 ">
      <div className="flex flex-col items-start justify-center gap-8 ">
        <h1 className="text-black text-lg">{welcomeText || ""} </h1>
        <h1 className="text-7xl sm:text-4xl drop-shadow-md font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-purple-500 to-purple-900 hover:scale-105  transform duration-200">
          {firstName || ""} {lastName || ""}
        </h1>
        <h1 className="text-5xl sm:text-3xl text-slate-800 font-semibold">
          {caption || ""}
        </h1>
        <p className="text-black w-2/3 sm:w-full sm:pr-2">{description || ""}</p>
        <a
          href="/profilepicture.jpg"
          download
          className="block border-2 border-secondary rounded-lg px-3 py-2 text-secondary font-semibold cursor-pointer hover:bg-secondary hover:text-white"
        >
          Resume
        </a>

      </div>
    </div>
  );
}

export default Intro;
