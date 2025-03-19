import { useState } from "react";
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Skills from "./Skills/Skills";
import PersonalDetailsPreview from "./PersonalDetails/PersonalDetailsPreview";

export default function Parent() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (e) => {
    setPersonalDetails({ ...personalDetails, [e.target.id]: e.target.value });
  };

  return (
    <div className="flex">
      <div>
        <PersonalDetails formData={personalDetails} onChange={handleChange} />
        <Education />
        <Experience />
        <Skills />
      </div>
      <div className="m-10 ml-5 block min-h-[297mm] w-full max-w-sm min-w-[210mm] justify-evenly border border-gray-200 bg-white px-6 shadow-sm">
        <PersonalDetailsPreview formData={personalDetails} />
      </div>
    </div>
  );
}
