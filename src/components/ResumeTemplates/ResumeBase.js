import { FaPrint } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

import Candid from "./Candid";

const ResumeBase = () => {
  const { name } = useParams();

  return (
    <div id="section-to-print" style={{ width: "8.5in", margin: "0 auto" }}>
      <div className="container">
        <h2 className="title is-size-2">Candid</h2>
        {name === "candid" && <Candid />}
        <br />
        <hr />
        <br />
        <button className="button is-link" onClick={() => window.print()}>
          <FaPrint className="mr-2" /> Print
        </button>
      </div>
    </div>
  );
};

export default ResumeBase;
