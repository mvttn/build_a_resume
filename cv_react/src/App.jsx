import { useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
function App() {
  return (
    <>
      <PersonalDetails />
      <Education />
      <Experience />
      <Skills />
    </>
  );
}

export default App;
