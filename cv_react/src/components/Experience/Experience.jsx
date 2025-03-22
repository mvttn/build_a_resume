import { useState } from "react";
import { MdArrowBackIosNew, MdWork } from "react-icons/md";
import Button from "../Button";
import PropTypes from "prop-types";
import ExperienceForm from "./ExperienceForm";
import formatMonthYear from "../formatDate";

export default function Experience({
  experienceList,
  newExperience,
  isEditingExperience,
  onChange,
  onAdd,
  onRemove,
  onSave,
  onCancel,
}) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="m-10 block w-full max-w-sm min-w-[475px] justify-evenly rounded-lg border border-gray-200 bg-white px-6 shadow-sm">
      <button
        className={`flex h-[50px] w-full items-center justify-between transition-all duration-300 ease-in-out ${collapsed ? "rounded-xl" : "rounded-t-xl"}`}
        onClick={() => setCollapsed(!collapsed)}
      >
        <div className="flex items-center justify-center space-x-2">
          <MdWork size="1.3em" />
          <h3 className="text-lg font-semibold">Experience</h3>
        </div>
        <MdArrowBackIosNew
          className={`text-sm transition-transform duration-300 ${collapsed ? "rotate-90" : "-rotate-90"}`}
        />
      </button>
      <div
        className={`flex w-full flex-col items-center transition-all duration-300 ease-in-out ${collapsed ? "h-0 overflow-hidden" : "min-h-[75px] pb-4"}`}
      >
        {experienceList.slice(1).map((entry, index) => (
          <div
            key={index}
            className="flex w-full items-center justify-between rounded border border-stone-300 p-2"
          >
            {/* Left section */}
            <div className="flex flex-col">
              <p className="text-sm font-medium">
                {entry.companyName} - {entry.positionTitle}
              </p>
              <p className="text-xs text-gray-600">
                {`${formatMonthYear(entry.startDate)} - ${formatMonthYear(entry.endDate)}`}
              </p>
            </div>
            {/* Remove button */}
            <button
              className="ml-4 text-sm font-medium text-red-500"
              onClick={() => onRemove(index)}
            >
              X
            </button>
          </div>
        ))}

        {!collapsed && !isEditingExperience && (
          <Button buttonText="+ Experience" onClick={onAdd} />
        )}

        {!collapsed && isEditingExperience && (
          <>
            <ExperienceForm values={newExperience} onChange={onChange} />
            <div className="mt-3 flex w-full items-center justify-end gap-2">
              <Button
                buttonText="Cancel"
                onClick={onCancel}
                className="h-6 w-15 px-1 py-0.5 text-xs"
              />
              <Button
                buttonText="Save"
                onClick={onSave}
                className="h-6 w-15 bg-sky-900 px-1 py-0.5 text-xs text-white"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
Experience.propTypes = {
  experienceList: PropTypes.array.isRequired,
  newExperience: PropTypes.object.isRequired,
  isEditingExperience: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
