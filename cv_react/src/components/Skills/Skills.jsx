import { useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";
import Button from "../Button";
import SkillsForm from "./SkillsForm";
import PropTypes from "prop-types";

export default function Skills({
  skillsList,
  newSkill,
  isEditingSkill,
  onChange,
  onAdd,
  onRemove,
  onSave,
  onCancel,
}) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="m-10 block w-full max-w-sm min-w-[475px] justify-evenly rounded-lg border border-gray-200 bg-white px-6 shadow-sm">
      {/* Toggle Button */}
      <button
        className={`flex h-[50px] w-full items-center justify-between transition-all duration-300 ease-in-out ${
          collapsed ? "rounded-xl" : "rounded-t-xl"
        }`}
        onClick={() => setCollapsed(!collapsed)}
      >
        <div className="flex items-center justify-center space-x-2">
          <FaLightbulb size="1.3em" />
          <h3 className="text-lg font-semibold">Skills</h3>
        </div>
        <MdArrowBackIosNew
          className={`text-sm transition-transform duration-300 ${
            collapsed ? "rotate-90" : "-rotate-90"
          }`}
        />
      </button>

      {/* Skills Content */}
      <div
        className={`flex w-full flex-col items-center transition-all duration-300 ease-in-out ${
          collapsed ? "h-0 overflow-hidden" : "min-h-[75px] pb-4"
        }`}
      >
        {/* Existing Skills List as Pills */}
        {!collapsed && (
          <div className="mt-2 flex flex-wrap gap-2">
            {skillsList.map((skill, index) => (
              <span
                key={index}
                className="rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700"
              >
                {skill}
                <button
                  className="ml-2 text-red-500 hover:text-red-700"
                  onClick={() => onRemove(index)}
                >
                  ✖
                </button>
              </span>
            ))}
          </div>
        )}

        {/* Add New Skill Button */}
        {!collapsed && !isEditingSkill && (
          <Button buttonText="+ Skill" onClick={onAdd} />
        )}

        {/* Add Skill Form */}
        {!collapsed && isEditingSkill && (
          <>
            <SkillsForm value={newSkill} onChange={onChange} onSave={onSave} />
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
Skills.propTypes = {
  skillsList: PropTypes.arrayOf(PropTypes.string).isRequired,
  newSkill: PropTypes.string.isRequired,
  isEditingSkill: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
