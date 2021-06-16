import React from "react";

export default function Buttons({ prev, next, handlePrev, handleNext, handleSave }) {
  const MAX_STEPS = 13;

  return (
    <>
      <hr className="my-5" />
      <div className="buttons">
        <div className="columns">
          <div className="column is-one-third">
            <button
              disabled={prev === -1}
              className="button bd-pagination-prev"
              onClick={handlePrev}
            >
              <i class="fas fa-arrow-left"></i> Back
            </button>
          </div>
          <div className="column is-one-third">
            <p style={{ lineHeight: "40px" }}>
              step {next} of {MAX_STEPS}
            </p>
          </div>
          <div className="column is-one-third">
            {MAX_STEPS === next ? (
              <button
                className="button is-link bd-pagination-next"
                onClick={handleSave}
              >
                Save <i class="fas fa-save"></i>
              </button>
            ) : (
              <button
                className="button is-link bd-pagination-next"
                onClick={handleNext}
              >
                Save & Continue <i class="fas fa-save"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
