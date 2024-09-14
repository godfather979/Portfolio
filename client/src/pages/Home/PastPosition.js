import {useRef} from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import moment from "moment";
import { FaChevronDown } from 'react-icons/fa'; 
import portfolioData from "../../portfolioData.json"

function PastPosition() {

  const { pastpositions } = portfolioData;
  const scrollContainerRef = useRef(null); // Create a ref for the scrollable container

  // Function to scroll the container
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 200, // Adjust the value to scroll more or less
        behavior: 'smooth',
      });
    }
  };


  return (
    <div className="bg-gray-50 h-screen mx-auto p-2 grid sm:grid-cols-1 lg:grid-cols-2">
      <div className="h-[vh-5] flex flex-col overflow-hidden scale-95">
        <SectionTitle text="bold" className="fixed" title="Past Positions" />
        <div className="scroll-container overflow-y-auto "  ref={scrollContainerRef}>
          {pastpositions.map((pastposition, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg overflow-hidden shadow-sm mb-2 p-1 text-center"
            >
              <div className="">
                <h1 className="text-lg font-extrabold">
                  {pastposition.position}
                </h1>
                  <p className="text-sm text-gray-600">
                    {pastposition.department}
                    <br />
                    {moment(pastposition.tenurefrom).format('YYYY-MM-DD')} - {moment(pastposition.tenureto).format('YYYY-MM-DD')}
                  </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-4" onClick={handleScroll}>
            <FaChevronDown size={20} />
          </div>
      </div>
      <div className="m-auto">
        <img src="./Kiran-talele-picture.png" className="h-64" alt="Past Position Image" />
      </div>
    </div>
  );
}

export default PastPosition;
