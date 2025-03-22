import Input from "../Input";
import PropTypes from "prop-types";

export default function ExperienceForm({ values, onChange }) {
  return (
    <div className="mb-2 flex min-h-[325px] w-full flex-col items-start justify-evenly rounded-b-xl transition-all duration-300 ease-in-out">
      <Input
        id="companyName"
        placeholder="Enter Company Name"
        labelText="Company Name"
        value={values.companyName}
        onChange={onChange}
      />
      <Input
        id="positionTitle"
        placeholder="Enter Position Title"
        labelText="Position Title"
        value={values.positionTitle}
        onChange={onChange}
      />
      <div className="flex gap-5">
        <div>
          <Input
            id="startDate"
            placeholder="Enter Start Date"
            labelText="Start Date"
            type="month"
            value={values.startDate}
            onChange={onChange}
          />
        </div>
        <div>
          <Input
            id="endDate"
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
        placeholder="City, Country"
        labelText="Location"
        value={values.location}
        onChange={onChange}
      />
      <textarea
        id="description"
        placeholder="Describe your role and responsibilities..."
        rows="6"
        value={values.description}
        onChange={onChange}
        className="ease mb-4 w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm text-slate-700 shadow-sm transition duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-slate-400 focus:shadow focus:outline-none"
      />
    </div>
  );
}
ExperienceForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  values: PropTypes.shape({
    companyName: PropTypes.string,
    positionTitle: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
