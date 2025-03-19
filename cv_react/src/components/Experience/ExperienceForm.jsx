import Input from "../Input";
import Button from "../Button";
export default function ExperienceForm() {
  return (
    <div className="mb-2 flex min-h-[325px] w-full flex-col items-start justify-evenly rounded-b-xl transition-all duration-300 ease-in-out">
      <Input
        id="company-name"
        placeholder="Enter Company Name"
        labelText="Company Name"
      />
      <Input
        id="position-title"
        placeholder="Enter Position Title"
        labelText="Position Title"
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

      <label htmlFor="description" className="text-sm font-semibold">
        Description
      </label>
      <textarea
        id="description"
        placeholder="Describe your role and responsibilities..."
        rows="5"
        className="ease mb-4 w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm text-slate-700 shadow-sm transition duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-slate-400 focus:shadow focus:outline-none"
      />
      <div className="flex w-full items-center justify-between">
        <Button
          buttonText="Delete"
          className="h-6 w-15 bg-red-500 px-1 py-0.5 text-xs text-white"
        />
        <div className="flex items-center justify-between">
          <Button
            buttonText="Cancel"
            className="h-6 w-15 px-1 py-0.5 text-xs"
          />
          <Button
            buttonText="Save"
            className="h-6 w-15 bg-sky-900 px-1 py-0.5 text-xs text-white"
          />
        </div>
      </div>
    </div>
  );
}
