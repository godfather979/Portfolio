import { useSelector } from "react-redux";

import About from "./About";
import Intro from "./Intro";
import Awards from "./Awards";
import CurrentPosition from "./CurrentPosition";
import PastPosition from "./PastPosition";
import Interest from "./Interest";
import Recognitions from "./Recognitions";
import AddPosition from "./AddPosition";
import VisitingPosition from "./VisitingPosition";
import Experience1 from "./Experience1";
import portfolioData from "../../portfolioData.json"

function Home() {

  return (
    <div>
      {/* <Header /> */}

      {portfolioData && (
        <div className="">
          <Intro />
          <About />
          <CurrentPosition/>          
          <AddPosition />
          <PastPosition/>
          <VisitingPosition />
          {/* <Experiences/> */}
          <Experience1 />
          <Awards/> 
          <Interest />
          <Recognitions />
          {/* <LeftSider /> */}
        </div>
      )}
    </div>
  );
}

export default Home;
