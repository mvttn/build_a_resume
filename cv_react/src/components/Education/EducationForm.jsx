import Input from "../Input";
import Button from "../Button";

export default function EducationForm() {
  return (
    <div className="mb-2 flex min-h-[325px] w-full flex-col items-start justify-evenly rounded-b-xl transition-all duration-300 ease-in-out">
      <Input
        id="school"
        placeholder="Enter School / University"
        labelText="School"
      />
      <Input
        id="degree"
        placeholder="Enter Degree / Field Of Study"
        labelText="Degree"
      />
      <div className="flex gap-5">
        <div>
          <Input
            id="start-date"
            placeholder="Enter Start Date"
            labelText="Start Date"
            type="month"
          />
        </div>
        <div>
          <Input
            id="end-date"
            placeholder="Enter End Date"
            labelText="End Date"
            type="month"
          />
        </div>
      </div>
      <Input id="location" placeholder="Enter Location" labelText="Location" />
    </div>
  );
}
