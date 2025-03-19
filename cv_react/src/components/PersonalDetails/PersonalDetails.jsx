import { useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import PersonalDetailsForm from "./PersonalDetailsForm";

export default function PersonalDetails({ formData, onChange }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="m-10 block w-full max-w-sm min-w-[475px] justify-evenly rounded-lg border border-gray-200 bg-white px-6 shadow-sm">
      {" "}
      <button
        className={`flex h-[50px] w-full items-center justify-between transition-all duration-300 ease-in-out ${collapsed ? "rounded-xl" : "rounded-t-xl"}`}
        onClick={() => setCollapsed(!collapsed)}
      >
        <div className="flex items-center justify-center space-x-2">
          <FaUser size="1.3em" />
          <h3 className="font-semibold">Personal Details</h3>
        </div>
        <MdArrowBackIosNew
          className={`text-sm transition-transform duration-300 ${collapsed ? "rotate-90" : "-rotate-90"}`}
        />
      </button>
      <div
        className={`flex w-full flex-col items-start justify-evenly rounded-b-xl transition-all duration-300 ease-in-out ${collapsed ? "h-0" : "h-[325px]"}`}
      >
        {!collapsed && (
          <PersonalDetailsForm formData={formData} onChange={onChange} />
        )}
      </div>
    </div>
  );
}
