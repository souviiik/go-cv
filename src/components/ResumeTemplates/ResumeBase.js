import { FaPrint } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

import Candid from "./Candid";

const ResumeBase = () => {
  const { name } = useParams();

  return (
    <div className="container">
      <Link to="/resume-templates">&lt; back</Link>
      <h2 className="title is-size-2">Candid</h2>
      {name === "candid" && <Candid />}
      <br />
      <hr />
      <br />
      <button className="button is-link" onClick={() => window.print()}>
        <FaPrint className="mr-2" /> Print
      </button>
    </div>
  );
};

export default ResumeBase;
