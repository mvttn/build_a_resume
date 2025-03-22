import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import PropTypes from "prop-types";

PersonalDetailsPreview.propTypes = {
  formData: PropTypes.object.isRequired,
};

export default function PersonalDetailsPreview({ formData }) {
  return (
    <div className="m-6 flex flex-col items-center justify-center text-gray-700">
      {/* Full Name */}
      <h1 className="mb-2 text-3xl font-semibold">
        {formData.fullName || "Your Name"}
      </h1>

      {/* Contact Details */}
      <div className="m-2 mb-0 flex flex-col items-center gap-6 sm:flex-row">
        {/* Email */}
        {formData.email && (
          <div
            className="flex items-center gap-2"
            aria-label="Email Address"
            title="Email Address"
          >
            <MdOutlineMailOutline size="1.3em" />
            <p className="whitespace-normal">{formData.email}</p>
          </div>
        )}

        {/* Phone Number */}
        {formData.phoneNumber && (
          <div
            className="flex items-center gap-2"
            aria-label="Phone Number"
            title="Phone Number"
          >
            <FaPhoneAlt size="1.2em" />
            <p className="whitespace-normal">{formData.phoneNumber}</p>
          </div>
        )}

        {/* Address */}
        {formData.address && (
          <div
            className="flex items-center gap-2"
            aria-label="Address"
            title="Address"
          >
            <FaLocationDot size="1.2em" />
            <p className="whitespace-pre">{formData.address}</p>
          </div>
        )}
      </div>

      {/* Fallback for Empty Fields */}
      {!(formData.email || formData.phoneNumber || formData.address) && (
        <p className="mt-4 text-sm text-gray-500 italic">
          Contact details will appear here when added.
        </p>
      )}
    </div>
  );
}
