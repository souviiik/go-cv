import { useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Objective from "./components/Objective";
import Publications from "./components/Publications";
import Projects from "./components/Projects";
import Languages from "./components/Languages";
import Certificates from "./components/Certificates";
import Interests from "./components/Interests";
import AdditionalInfo from "./components/AdditionalInfo";
import Reference from "./components/Reference";
import Signature from "./components/Signature";
import Buttons from "./components/common/Buttons";

function App() {
  const [steps, setSteps] = useState({
    prev: -1,
    curr: 0,
    next: 1,
  });

  const handlePrev = () => {
    setSteps((prevSteps) => ({
      prev: prevSteps.prev - 1,
      curr: prevSteps.curr - 1,
      next: prevSteps.next - 1,
    }));
  };

  const handleNext = () => {
    setSteps((prevSteps) => ({
      prev: prevSteps.prev + 1,
      curr: prevSteps.curr + 1,
      next: prevSteps.next + 1,
    }));
  };

  const handleSave = () => {
    alert("Finally");
  };

  const { prev, curr, next } = steps;

  return (
    <div className="container">
      {curr === 0 && <PersonalDetails />}
      {curr === 1 && <Education />}
      {curr === 2 && <Experience />}
      {curr === 3 && <Skills />}
      {curr === 4 && <Objective />}
      {curr === 5 && <Publications />}
      {curr === 6 && <Projects />}
      {curr === 7 && <Languages />}
      {curr === 8 && <Certificates />}
      {curr === 9 && <Interests />}
      {curr === 10 && <AdditionalInfo />}
      {curr === 11 && <Reference />}
      {curr === 12 && <Signature />}

      <Buttons
        prev={prev}
        next={next}
        handlePrev={handlePrev}
        handleNext={handleNext}
        handleSave={handleSave}
      />
    </div>
  );
}

export default App;
