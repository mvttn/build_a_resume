import PersonalDetails from "./components/PersonalDetails";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="flex justify-center">
      <div>
        <PersonalDetails />
        <Education />
        <Experience />
        <Skills />
      </div>
      <Resume />
    </div>
  );
}

export default App;
