import { FaTrashAlt } from "react-icons/fa";
import Input from "../../elements/Input";

const ExperienceFormPart = ({ experience, handleChange, deleteExperience }) => {
  const { id, company, designation, joiningDate, lastWorkDate, details } =
    experience;

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
      <div className="columns">
        <div className="column">
          <Input
            label="Designation"
            type="text"
            name={`designation_${id}`}
            value={designation}
            handleChange={handleChange}
          />
        </div>
        <div className="column">
          <Input
            label="Start Date"
            type="date"
            name={`joiningDate_${id}`}
            value={joiningDate}
            handleChange={handleChange}
          />
        </div>
        <div className="column">
          <Input
            label="End Date"
            type="date"
            name={`lastWorkDate_${id}`}
            value={lastWorkDate}
            handleChange={handleChange}
          />
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <div className="control mb-3">
            <label>details: </label>
            <textarea
              class="textarea"
              name={`details_${id}`}
              value={details}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      </div>
      <div>
        <button
          type="button"
          onClick={(e) => handleDelete(e, id)}
          className="button is-danger "
        >
          <FaTrashAlt className="mr-2" />
          Delete
        </button>
      </div>
    </>
  );
};

export default ExperienceFormPart;
