import { useState } from "react";
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Skills from "./Skills/Skills";
import PersonalDetailsPreview from "./PersonalDetails/PersonalDetailsPreview";
import EducationPreview from "./Education/EducationPreview";
export default function Parent() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const handlePersonalDetailsChange = (e) => {
    setPersonalDetails({ ...personalDetails, [e.target.id]: e.target.value });
  };

  // First element is the empty entry
  const [educationHistory, setEducationHistory] = useState([
    {
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    },
  ]);

  // New education form state
  const [newEducation, setNewEducation] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });
  const [isEditingEducation, setIsEditingEducation] = useState(false);

  const handleEducationChange = (e) => {
    const { id, value } = e.target;
    setNewEducation((prev) => ({ ...prev, [id]: value }));
  };

  const addEducation = () => {
    setEducationHistory([...educationHistory, newEducation]);
    // Reset the form state after saving
    setNewEducation({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
    setIsEditingEducation(false);
  };

  const removeEducation = (index) => {
    setEducationHistory((prev) => prev.filter((_, i) => i !== index));
  };

  const cancelEdit = () => {
    setNewEducation({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
    setIsEditingEducation(false);
  };

  return (
    <div className="flex">
      <div>
        <PersonalDetails
          formData={personalDetails}
          onChange={handlePersonalDetailsChange}
        />
        <Education
          // Show all education entries (if needed, you can slice the array to hide the example)
          educationList={educationHistory}
          newEducation={newEducation}
          isEditingEducation={isEditingEducation}
          onChange={handleEducationChange}
          onAdd={() => setIsEditingEducation(true)}
          onRemove={removeEducation}
          onSave={addEducation}
          onCancel={cancelEdit}
        />
        <Experience />
        <Skills />
      </div>
      <div className="m-10 ml-5 block min-h-[297mm] w-full max-w-sm min-w-[210mm] justify-evenly border border-gray-200 bg-white px-6 shadow-sm">
        <PersonalDetailsPreview formData={personalDetails} />
        <hr className="solid" />
        <h2 className="m-2 text-base font-semibold text-gray-700 underline italic">Education</h2>
        {[
          ...educationHistory.slice(1),
          isEditingEducation ? newEducation : null,
        ].map(
          (edu, index) =>
            edu && <EducationPreview key={index} formData={edu} />,
        )}
      </div>
    </div>
  );
}
