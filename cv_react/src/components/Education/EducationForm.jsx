import Input from "../Input";
import PropTypes from "prop-types";

export default function EducationForm({ values, onChange }) {
  return (
    <div className="mb-2 flex min-h-[325px] w-full flex-col items-start justify-evenly rounded-b-xl transition-all duration-300 ease-in-out">
      <Input
        id="school"
        placeholder="Enter School / University"
        labelText="School"
        value={values.school}
        onChange={onChange}
      />
      <Input
        id="degree"
        placeholder="Enter Degree / Field Of Study"
        labelText="Degree"
        value={values.degree}
        onChange={onChange}
      />
      <div className="flex gap-5">
        <div>
          <Input
            id="startDate" // changed to camelCase to match parent's state key
            placeholder="Enter Start Date"
            labelText="Start Date"
            type="month"
            value={values.startDate}
            onChange={onChange}
          />
        </div>
        <div>
          <Input
            id="endDate" // changed to camelCase to match parent's state key
            placeholder="Enter End Date"
            labelText="End Date"
            type="month"
            value={values.endDate}
            onChange={onChange}
          />
        </div>
      </div>
      <Input
        id="location"
        placeholder="Enter Location"
        labelText="Location"
        value={values.location}
        onChange={onChange}
      />
    </div>
  );
}

EducationForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  values: PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
};
