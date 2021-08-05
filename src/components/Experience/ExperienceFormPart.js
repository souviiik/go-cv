import Input from "../../elements/Input";

const ExperienceFormPart = ({ experience, handleChange, deleteExperience }) => {
  const { id, company, designation, joiningDate, lastWorkDate } = experience;

  const handleDelete = (_e, id) => {
    deleteExperience(id);
  };

  return (
    <>
      <Input
        label="Company Name"
        type="text"
        name={`company_${id}`}
        value={company}
        handleChange={handleChange}
      />
      <Input
        label="Designation"
        type="text"
        name={`designation_${id}`}
        value={designation}
        handleChange={handleChange}
      />
      <div className="columns">
        <div className="column">
          <Input
            label="Joining Date"
            type="date"
            name={`joiningDate_${id}`}
            value={joiningDate}
            handleChange={handleChange}
          />
        </div>
        <div className="column">
          <Input
            label="Last Working Day"
            type="date"
            name={`lastWorkDate_${id}`}
            value={lastWorkDate}
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
    </>
  );
};

export default ExperienceFormPart;
