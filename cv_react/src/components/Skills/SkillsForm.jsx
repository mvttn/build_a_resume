import Input from "../Input";
export default function SkillsForm() {
  return (
    <div className="mb-2 flex w-full flex-col items-start justify-evenly rounded-b-xl transition-all duration-300 ease-in-out">
      <Input
        id="skill"
        placeholder="Enter Skill"
      />
    </div>
  );
}
