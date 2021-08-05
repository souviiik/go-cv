import { useSelector } from "react-redux";
import Education from "./components/Education";
import Experience from "./components/Experience";
import PersonalDetails from "./components/PersonalDetails";
import StepIndicator from "./components/StepIndicator";

export default function App() {
  const currentStep = useSelector((state) => state.steps.currentStep);

  return (
    <div className="container">
      <StepIndicator />
      <hr />
      <div className="columns">
        {/* <div className="column pt-5">
          <StepIndicator />
        </div> */}
        <div className="column">
          {currentStep === 0 && <PersonalDetails />}
          {currentStep === 1 && <Education />}
          {currentStep === 2 && <Experience />}
        </div>
      </div>
    </div>
  );
}
