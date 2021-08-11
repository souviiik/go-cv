import moment from "moment";
import React from "react";
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";

import "./Candid.css";

export default function Candid({
  personalDetails,
  educationDetails,
  experienceDetails,
}) {
  const {
    name,
    address,
    jobTitle,
    profile,
    phone,
    email,
    dob,
    maritalStatus,
    nationality,
    website,
    github,
    linkedin,
  } = personalDetails;

  return (
    <>
      <div className="has-text-centered">
        <hr style={{ "border-top": "1px solid #1e1e1e" }} />
        <h1 className="title is-size-1 mb-5 is-uppercase">{name}</h1>
        <p className="subtitle is-size-5 has-text-black">{jobTitle}</p>
        <hr style={{ "border-top": "1px solid #1e1e1e" }} />
        <h2 className="title is-size-5 is-uppercase">Profile</h2>
        <div className="columns is-centered">
          <div className="column is-four-fifths">
            <p>{profile}</p>
          </div>
        </div>
        <hr style={{ "border-top": "1px solid #1e1e1e" }} />
      </div>
      <div>
        <div className="columns">
          <div className="column is-one-third">
            <h2 className="title is-size-5 is-uppercase">Contact</h2>
            <ul>
              <li>
                <FaRegEnvelope className="mr-2" />
                {email}
              </li>
              <li>
                <FaPhoneAlt className="mr-2" />
                {phone}
              </li>
            </ul>
          </div>
          <div className="column is-two-thirds">
            <h2 className="title is-size-5 is-uppercase has-text-centered">
              Experiences
            </h2>
            <div>
              {experienceDetails.map((exd) => (
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    feugiat turpis quam, non aliquam felis auctor vel.
                    Vestibulum pellentesque, nibh sit amet sagittis semper, ante
                    quam aliquam nunc, a vulputate nulla leo nec massa.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
