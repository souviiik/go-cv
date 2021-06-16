import { useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  const MAX_STEPS = 3;
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

  const { prev, curr, next } = steps;

  return (
    <div className="container">
      {curr === 0 && <PersonalDetails />}
      {curr === 1 && <Education />}
      {curr === 2 && <Experience />}
      <div className="buttons">
        <button disabled={prev === -1} className="button" onClick={handlePrev}>
          Back
        </button>
        <button
          disabled={MAX_STEPS === next}
          className="button is-link"
          onClick={handleNext}
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
}

export default App;
