import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";
import formatMonthYear from "../formatDate";

export default function EducationPreview({ formData }) {
  return (
    <div className="m-1 px-4 py-1">
      {/* Education Details Row */}
      <div className="flex flex-wrap items-center justify-between text-gray-700">
        {/* Left Side: School and Degree */}
        <div className="flex flex-col">
          <p className="text-sm font-semibold">
            {formData.school || "School Name"}
          </p>
          <p className="text-sm">{formData.degree || "Degree"}</p>
        </div>

        {/* Right Side: Dates and Location */}
        <div className="flex flex-col items-end text-sm text-gray-500">
          <p>
            {formatMonthYear(formData.startDate) || "Start Date"} -{" "}
            {formatMonthYear(formData.endDate) || "End Date"}
          </p>
          <div className="flex items-center gap-1">
            <FaLocationDot size="1.2em" />
            <p className="m-0">{formData.location || "Location"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

EducationPreview.propTypes = {
  formData: PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
};
