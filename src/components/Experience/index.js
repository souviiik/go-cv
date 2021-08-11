import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { updateExperienceDetails } from "../../actions/details.actions";
import Buttons from "../Buttons";
import ExperienceFormPart from "./ExperienceFormPart";
import { FaPlusCircle } from "react-icons/fa";

export default function Experience() {
  const experienceDetailsFromStore = useSelector(
    (store) => store.details.experienceDetails
  );

  const initialState = experienceDetailsFromStore || [];

  const [experiences, setExperiences] = useState(initialState);

  const addExperienceHandler = () => {
    setExperiences([
      ...experiences,
      {
        id: uuidv4(),
        company: "",
        designation: "",
        joiningDate: "",
        lastWorkDate: "",
      },
    ]);
  };

  const deleteExperience = (id) => {
    const newExperience = experiences.filter(
      (experience) => experience.id !== id
    );
    setExperiences([...newExperience]);
  };

  const handleChange = (e) => {
    const field = e.target.name.split("_")[0];
    const id = e.target.name.split("_")[1];

    const objIndex = experiences.findIndex((obj) => obj.id === id);
    experiences[objIndex][field] = e.target.value;
    setExperiences([...experiences]);
  };

  return (
    <div className="App">
      <h2 className="title is-size-2">Experience Details</h2>
      <form>
        {experiences.map((experience, i) => (
          <fieldset class="box">
            <legend class="subtitle is-3 has-text-link mb-0">{`Experience ${
              i + 1
            }`}</legend>
            <ExperienceFormPart
              key={experience.id}
              experience={experience}
              handleChange={handleChange}
              deleteExperience={deleteExperience}
            />
          </fieldset>
        ))}
        <div>
          <button
            type="button"
            onClick={addExperienceHandler}
            className="button is-success"
          >
            <FaPlusCircle className="mr-2" />
            {experiences.length === 0
              ? "Add experience"
              : "Add another experience"}
          </button>
        </div>
        <Buttons
          formData={experiences}
          targetAction={updateExperienceDetails}
        />
      </form>
    </div>
  );
}
