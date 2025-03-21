import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import PropTypes from "prop-types";

PersonalDetailsPreview.propTypes = {
  formData: PropTypes.object.isRequired,
};

export default function PersonalDetailsPreview({ formData }) {
  return (
    <div className="m-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold">{formData.fullName}</h1>
      <div className="m-2 flex gap-10">
        {formData.email && (
          <div className="flex items-center justify-center gap-1">
            <MdOutlineMailOutline size="1.3em" />
            <p className="whitespace-normal">{formData.email}</p>
          </div>
        )}
        {formData.phoneNumber && (
          <div className="flex items-center justify-center gap-1">
            <FaPhoneAlt />
            <p className="whitespace-normal">
              {formData.phoneNumber}
            </p>
          </div>
        )}
        {formData.address && (
          <div className="flex items-center justify-center gap-1">
            <FaLocationDot />
            <p className="whitespace-pre">{formData.address}</p>
          </div>
        )}
      </div>
    </div>
  );
}
