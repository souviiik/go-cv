import Input from "../../elements/Input";

const EducationFormPart = ({ education, handleChange, deleteEducation }) => {
  const { id, degree, university, yop } = education;

  const handleDelete = (_e, id) => {
    deleteEducation(id);
  };

  return (
    <div className="pb-3 mb-5" style={{ borderBottom: "1px dashed #ccc" }}>
      <Input
        label="Degree/ Diploma"
        type="text"
        name={`degree_${id}`}
        value={degree}
        handleChange={handleChange}
      />
      <Input
        label="University"
        type="text"
        name={`university_${id}`}
        value={university}
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
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationFormPart;
