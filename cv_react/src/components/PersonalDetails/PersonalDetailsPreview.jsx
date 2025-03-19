import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function PersonalDetailsPreview({ formData }) {
  if (!formData) return null; 

  return (
    <div className="m-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold">{formData.fullName}</h1>
      <div className="m-3 flex w-full items-center justify-between">
        {formData.email && ( 
          <div className="flex items-center justify-center gap-1">
            <MdOutlineMailOutline size="1.3em" />
            <p>{formData.email}</p>
          </div>
        )}
        {formData.phoneNumber && ( 
          <div className="flex items-center justify-center gap-1">
            <FaPhoneAlt />
            <p>{formData.phoneNumber}</p>
          </div>
        )}
        {formData.address && ( 
          <div className="flex items-center justify-center gap-1">
            <FaLocationDot />
            <p>{formData.address}</p>
          </div>
        )}
      </div>
    </div>
  );
}
