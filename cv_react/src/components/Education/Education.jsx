import { useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import Button from "../Button";
import EducationForm from "./EducationForm";
import PropTypes from "prop-types";
import formatMonthYear from "../formatDate";

export default function Education({
  educationList,
  newEducation,
  isEditingEducation,
  onChange,
  onAdd,
  onRemove,
  onSave,
  onCancel,
}) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="mx-10 my-5 block w-full max-w-sm min-w-[475px] justify-evenly rounded-lg border border-gray-200 bg-white px-6 shadow-sm">
      <button
        className={`flex h-[50px] w-full items-center justify-between transition-all duration-300 ease-in-out ${
          collapsed ? "rounded-xl" : "rounded-t-xl"
        }`}
        onClick={() => setCollapsed(!collapsed)}
      >
        <div className="flex items-center justify-center space-x-2">
          <GiGraduateCap size="1.4em" />
          <h3 className="text-lg font-semibold">Education</h3>
        </div>
        <MdArrowBackIosNew
          className={`text-sm transition-transform duration-300 ${
            collapsed ? "rotate-90" : "-rotate-90"
          }`}
        />
      </button>

      <div
        className={`flex w-full flex-col items-center transition-all duration-300 ease-in-out ${
          collapsed ? "h-0 overflow-hidden" : "min-h-[75px] pb-4"
        }`}
      >
        {educationList.slice(1).map((entry, index) => (
          <div
            key={index}
            className="mb-2 flex w-full items-center justify-between rounded border border-stone-300 p-2"
          >
            {/* Left section: School & Degree */}
            <div className="flex w-full flex-col">
              <p className="text-sm ">{`${entry.school} - ${entry.degree}`}</p>
              <p className="self-end text-xs text-gray-600">
                {`${formatMonthYear(entry.startDate)} - ${formatMonthYear(entry.endDate)}`}
              </p>
            </div>

            {/* Right section: Remove button */}
            <button
              className="ml-4 text-sm font-medium text-red-500"
              onClick={() => onRemove(index)}
            >
              X
            </button>
          </div>
        ))}

        {/* Button to add a new entry */}
        {!collapsed && !isEditingEducation && (
          <Button buttonText="+ Education" onClick={onAdd} />
        )}

        {/* Show the form when adding a new entry */}
        {!collapsed && isEditingEducation && (
          <>
            <EducationForm values={newEducation} onChange={onChange} />
            <div className="mt-3 flex w-full items-center justify-end gap-2">
              <Button
                buttonText="Cancel"
                className="h-6 w-15 px-1 py-0.5 text-xs"
                onClick={onCancel}
              />
              <Button
                buttonText="Save"
                className="h-6 w-15 bg-sky-900 px-1 py-0.5 text-xs text-white"
                onClick={onSave}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

Education.propTypes = {
  educationList: PropTypes.array.isRequired,
  newEducation: PropTypes.object.isRequired,
  isEditingEducation: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
