import Input from "../Input";
import PropTypes from "prop-types";

export default function SkillsForm({ value, onChange, onSave }) {
  // Function to handle the Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && value.trim() !== "") {
      e.preventDefault(); // Prevent the default form submission
      onSave(); // Call the save function to add the skill
    }
  };

  return (
    <div className="mb-2 flex w-full flex-col items-start justify-evenly rounded-b-xl transition-all duration-300 ease-in-out">
      <Input
        id="skill"
        placeholder="Enter Skill"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

SkillsForm.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};
