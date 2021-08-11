import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EducationFormPart from "./EducationFormPart";
import { useSelector } from "react-redux";
import { updateEducationDetails } from "../../actions/details.actions";
import Buttons from "../Buttons";
import { FaPlusCircle } from "react-icons/fa";

export default function Education() {
  const educationDetailsFromStore = useSelector(
    (store) => store.details.educationDetails
  );

  const initialState = educationDetailsFromStore || [];

  const [educations, setEducations] = useState(initialState);

  const handleChange = (e) => {
    const field = e.target.name.split("_")[0];
    const id = e.target.name.split("_")[1];

    const objIndex = educations.findIndex((obj) => obj.id === id);
    educations[objIndex][field] = e.target.value;
    setEducations([...educations]);
  };

  const addEducationHandler = () => {
    setEducations([
      ...educations,
      {
        id: uuidv4(),
        degree: "",
        university: "",
        yop: ""
      }
    ]);
  };

  const deleteEducation = (id) => {
    const newEducation = educations.filter((education) => education.id !== id);
    setEducations([...newEducation]);
  };

  return (
    <div className="App">
      <h2 className="title is-size-2">Education Details</h2>
      <form>
        {educations.map((education) => (
          <EducationFormPart
            key={education.id}
            education={education}
            handleChange={handleChange}
            deleteEducation={deleteEducation}
          />
        ))}
        <div>
          <button
            type="button"
            onClick={addEducationHandler}
            className="button is-success"
          >
            <FaPlusCircle className="mr-2" />
            {educations.length === 0
              ? "Add education"
              : "Add another education"}
          </button>
        </div>
        <Buttons formData={educations} targetAction={updateEducationDetails} />
      </form>
    </div>
  );
}
