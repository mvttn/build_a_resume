import PropTypes from "prop-types";

export default function SkillsPreview({ skillsList }) {
  return (
    <div className="m-1 px-4 py-1">
      <ul className="list-disc pl-5 text-sm text-gray-700">
        {skillsList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

SkillsPreview.propTypes = {
  skillsList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
