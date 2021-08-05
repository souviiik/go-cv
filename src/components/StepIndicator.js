import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../actions/steps.action";
import "./StepIndicator.css";

const StepIndicator = () => {
  const dispatchEvent = useDispatch();
  const currentStep = useSelector((state) => state.steps.currentStep);
  const links = ["Personal Details", "Education Details", "Experience Details"];

  const doSomething = (_e, stepNumber) => {
    dispatchEvent(setStep(stepNumber));
  };

  return (
    <ul className="navbar">
      {links.map((link, i) => (
        <li key={i} className="navbar-item">
          {i < currentStep ? (
            <a href onClick={(e) => doSomething(e, i)}>
              {link}
            </a>
          ) : (
            <span className={currentStep === i ? "current" : ""}>{link}</span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default StepIndicator;
