import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { FaPrint } from "react-icons/fa";

import "./Candid.css";

export default function Candid() {
  const details = useSelector(({ details }) => details);
  // const { name } = useParams();

  return (
    <div className="container">
      <Link to="/resume-templates">&lt; back</Link>
      <h2 className="title is-size-2">Candid</h2>
      <div id="section-to-print" style={{ width: "100%" }}>
        <div className="has-text-centered">
          <hr style={{ "border-top": "1px solid #1e1e1e" }} />
          <h1 className="title is-size-1 mb-5 is-uppercase">
            {details.personalDetails.name}
          </h1>
          <p className="subtitle is-size-5 has-text-black">
            {details.personalDetails.jobTitle}
          </p>
          <hr style={{ "border-top": "1px solid #1e1e1e" }} />
          <h2 className="title is-size-5 is-uppercase">Profile</h2>
          <div className="columns is-centered">
            <div className="column is-four-fifths">
              <p>{details.personalDetails.profile}</p>
            </div>
          </div>
          <hr style={{ "border-top": "1px solid #1e1e1e" }} />
        </div>
        <div>
          <div className="columns">
            <div className="column is-one-third">
              <h2 className="title is-size-5 is-uppercase">Details</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                feugiat turpis quam, non aliquam felis auctor vel. Vestibulum
                pellentesque, nibh sit amet sagittis semper, ante quam aliquam
                nunc, a vulputate nulla leo nec massa. Aenean nec volutpat nisi.
                Cras massa nunc, cursus eget augue in, porttitor congue ligula.
                Praesent libero magna, pharetra et rutrum in, sollicitudin non
                tortor. Ut ac euismod tortor.
              </p>
            </div>
            <div className="column is-two-thirds">
              <h2 className="title is-size-5 is-uppercase has-text-centered">
                Experiences
              </h2>
              <div>
                {details.experienceDetails.map((exd) => (
                  <div className="mb-5 ">
                    <div className="has-text-centered">
                      <h3 className="title is-size-5 mb-3">
                        {exd.designation} at {exd.company}
                      </h3>
                      <h4
                        className="title is-size-6 mb-3"
                        style={{ color: "#666" }}
                      >
                        {moment(exd.joiningDate).format("D MMMM, YYYY")} to{" "}
                        {moment(exd.lastWorkDate).format("D MMMM, YYYY")}
                      </h4>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam feugiat turpis quam, non aliquam felis auctor vel.
                      Vestibulum pellentesque, nibh sit amet sagittis semper,
                      ante quam aliquam nunc, a vulputate nulla leo nec massa.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <button className="button is-link" onClick={() => window.print()}>
        <FaPrint className="mr-3" /> Print
      </button>
    </div>
  );
}
