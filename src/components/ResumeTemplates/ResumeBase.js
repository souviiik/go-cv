import { FaPrint } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

import Candid from "./Candid";

const ResumeBase = () => {
  const { name } = useParams();

  return (
    <div className="container">
      <h2 className="title is-size-2">Candid</h2>
      <div id="section-to-print" style={{ width: "100%", margin: "0 auto" }}>
        {name === "candid" && <Candid />}
      </div>
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
