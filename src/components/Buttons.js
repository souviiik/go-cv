import { FaArrowCircleLeft, FaRegSave } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { submitDetails } from "../actions/details.actions";
import { nextStep, prevStep } from "../actions/steps.action";

export default function Buttons({ formData, targetAction }) {
  const MAX_STEPS = 3;
  const dispatchEvent = useDispatch();
  const currentStep = useSelector((state) => state.steps.currentStep);
  const store = useSelector((store) => store);

  const handlePrev = () => {
    dispatchEvent(prevStep());
  };

  const handleNext = () => {
    dispatchEvent(targetAction(formData));
    dispatchEvent(nextStep());
  };

  const handleSave = () => {
    dispatchEvent(targetAction(formData));
    // dispatchEvent(nextStep());
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatchEvent(submitDetails(store.details));
  // };

  return (
    <>
      <hr />
      <div className="is-pulled-left">
        <div className="buttons">
          <button
            type="button"
            className="button is-primary is-light mr-3"
            onClick={handlePrev}
            disabled={currentStep === 0}
          >
            <FaArrowCircleLeft className="mr-2" /> Prev
          </button>
          {currentStep < MAX_STEPS - 1 ? (
            <button
              type="button"
              className="button is-primary mr-3"
              onClick={handleNext}
            >
              <FaRegSave className="mr-2" /> Save & Continue
            </button>
          ) : (
            <button
              type="button"
              className="button is-primary mr-3"
              onClick={handleSave}
            >
              <FaRegSave className="mr-2" /> Save
            </button>
          )}
        </div>
      </div>

      <div className="is-pulled-right">
        {currentStep === MAX_STEPS - 1 && (
          <Link className="button is-success" to="/resume-templates">
            Create Resume
          </Link>
        )}
      </div>
    </>
  );
}
