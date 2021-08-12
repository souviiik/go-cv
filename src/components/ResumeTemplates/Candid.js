import moment from "moment";
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";

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
        <div className="columns is-centered mb-5">
          <div className="column is-four-fifths">
            <p>{profile}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="columns">
          <div
            className="column is-one-third pr-0"
            style={{
              "border-top": "1px solid #1e1e1e",
              "margin-top": "15px",
              "border-right": "solid 1px black",
              "margin-top": "12px",
            }}
          >
            <h2
              className="title is-size-5 is-uppercase has-text-centered"
              style={{
                "border-bottom": "solid 1px black",
                "padding-bottom": "12px",
              }}
            >
              Contact
            </h2>
            <ul>
              <li style={{ paddingBottom: "14px" }}>
                <FaRegEnvelope className="mr-2" />
                {email}
              </li>
              <li style={{ paddingBottom: "14px" }}>
                <FaPhoneAlt className="mr-2" />
                {phone}
              </li>
              <li>
                <FaMapMarkerAlt className="mr-2" />
                {address}
              </li>
            </ul>
            <h2
              className="title is-size-5 is-uppercase has-text-centered mt-5"
              style={{
                "border-top": "solid 1px black",
                "border-bottom": "solid 1px black",
                "padding-top": "12px",
                "padding-bottom": "12px",
              }}
            >
              Educations
            </h2>
            <div>
              {educationDetails.map((edd) => (
                <div className="mb-5 ">
                  <div className="has-text-centered mb-3">
                    <h3 className="title is-size-5 mb-3">
                      {edd.degree}, {edd.yop}
                    </h3>
                    <p className="subtitle mt-3 mb-0 has-text-black">
                      {edd.university}
                    </p>
                    <p>
                      <strong>Grade/ Score</strong>: {edd.grade}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="column is-two-thirds pl-0"
            style={{ "border-top": "1px solid #1e1e1e", "margin-top": "12px" }}
          >
            <h2
              className="title is-size-5 is-uppercase has-text-centered"
              style={{
                "border-bottom": "solid 1px black",
                "padding-bottom": "12px",
              }}
            >
              Experiences
            </h2>
            <div>
              {experienceDetails.map((exd) => (
                <div className="mb-5 pl-5">
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
                  <p>{exd.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
