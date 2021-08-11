import { FaTrashAlt } from "react-icons/fa";
import Input from "../../elements/Input";

const EducationFormPart = ({ education, handleChange, deleteEducation }) => {
  const { id, degree, university, grade, yop } = education;

  const handleDelete = (_e, id) => {
    deleteEducation(id);
  };

  return (
    <div className="pb-3 mb-0">
      <Input
        label="Degree/ Course"
        type="text"
        name={`degree_${id}`}
        value={degree}
        handleChange={handleChange}
      />
      <Input
        label="School/ University"
        type="text"
        name={`university_${id}`}
        value={university}
        handleChange={handleChange}
      />
      <Input
        label="Grade/ Score"
        type="text"
        name={`grade_${id}`}
        value={grade}
        handleChange={handleChange}
      />
      <div className="columns">
        <div className="column">
          <Input
            label="Year of Passing"
            type="number"
            name={`yop_${id}`}
            value={yop}
            handleChange={handleChange}
          />
        </div>
        <div className="column is-one-fifth">
          <button
            type="button"
            onClick={(e) => handleDelete(e, id)}
            className="button is-danger mt-5 is-fullwidth"
          >
            <FaTrashAlt className="mr-2" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationFormPart;
