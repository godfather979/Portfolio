
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import portfolioData from "../../portfolioData.json"

function VisitingPosition() {

  const { visitingpositions } = portfolioData;

  return (
    <div className="container mx-auto px-4 py-4 bg-gray-50">
      <SectionTitle text="bold" title="Visiting Faculty at:" />
      <div className="space-y-2">
        {visitingpositions.map((visitingposition, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-sm shadow-sm p-2 mb-2 sm:w-full lg:w-1/2 transition-transform hover:scale-105 transform-gpu"
          >
            <div>
              <h1 className="text-md font-semibold">
                {visitingposition.institute}
              </h1>
              <div className="mt-1">
                <p className="text-xs text-gray-600">
                  Course taught: {visitingposition.course}
                </p>
                <p className="text-xs text-gray-600">
                  Tenure: {visitingposition.tenure}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VisitingPosition;
