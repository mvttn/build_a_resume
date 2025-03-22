import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";
import formatMonthYear from "../formatDate";

export default function ExperiencePreview({ formData }) {
  return (
    <div className="m-1 px-4 py-1">
      {/* Experience Details Row */}
      <div className="flex flex-wrap items-center justify-between text-gray-700">
        {/* Left Side: Company Name and Position */}
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold">
            {formData.companyName || "Company Name"}
          </p>
          <p>-</p>
          <p className="text-sm italic">
            {formData.positionTitle || "Position Title"}
          </p>
        </div>

        {/* Right Side: Dates and Location */}
        <div className="flex flex-col items-end text-sm text-gray-500">
          <p>
            {formatMonthYear(formData.startDate) || "Start Date"} -{" "}
            {formatMonthYear(formData.endDate) || "End Date"}
          </p>
          <div className="flex items-center gap-1">
            <FaLocationDot />
            <p>{formData.location || "Location"}</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-3 text-sm text-gray-500">
        <ul className="list-disc pl-5">
          {(
            formData.description ||
            "Describe your role and responsibilities here."
          )
            .split("/n")
            .map((line, index) => (
              <li key={index}>{line}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}

ExperiencePreview.propTypes = {
  formData: PropTypes.shape({
    companyName: PropTypes.string,
    positionTitle: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
