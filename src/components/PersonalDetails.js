import React, { useState } from "react";
import H2 from "./common/H2";

export default function PersonalDetails() {
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    photo: "",
    dob: "",
    nationality: "",
    maritalStatus: "",
    website: "",
    github: "",
    linkedin: "",
    medium: "",
    stackOverflow: "",
    twitter: "",
    facebook: "",
    youtube: "",
  });

  const {
    name,
    address,
    email,
    phone,
    photo,
    dob,
    nationality,
    maritalStatus,
    website,
    github,
    linkedin,
    medium,
    stackOverflow,
    twitter,
    facebook,
    youtube,
  } = personalDetails;

  const handleChange = (e) => {
    setPersonalDetails({
      ...personalDetails,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <H2 text="Personal Details" />
      <div className="columns">
        <div className="column">
          <div className="control">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              className="input"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="column">
          <div className="control">
            <label for="address">Address</label>
            <input
              type="text"
              id="address"
              className="input"
              name="address"
              value={address}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="control">
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              className="input"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="column">
          <div className="control">
            <label for="phone">Phone</label>
            <input
              type="text"
              id="phone"
              className="input"
              name="phone"
              value={phone}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="control">
            <label for="photo">Photo</label>
            <input
              type="text"
              id="photo"
              className="input"
              name="photo"
              value={photo}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="column">
          <div className="control">
            <label for="dob">Date of Birth</label>
            <input
              type="text"
              id="dob"
              className="input"
              name="dob"
              value={dob}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="control">
            <label for="nationality">Nationality</label>
            <input
              type="text"
              id="nationality"
              className="input"
              name="nationality"
              value={nationality}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="column">
          <div className="control">
            <label for="maritalStatus">Marital Status</label>
            <input
              type="text"
              id="maritalStatus"
              className="input"
              name="maritalStatus"
              value={maritalStatus}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="control">
            <label for="website">Website URL</label>
            <input
              type="text"
              id="website"
              className="input"
              name="website"
              value={website}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="column">
          <div className="control">
            <label for="github">Github URL</label>
            <input
              type="text"
              id="github"
              className="input"
              name="github"
              value={github}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="control">
            <label for="linkedin">Linkedin URL</label>
            <input
              type="text"
              id="linkedin"
              className="input"
              name="linkedin"
              value={linkedin}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="column">
          <div className="control">
            <label for="medium">Medium URL</label>
            <input
              type="text"
              id="medium"
              className="input"
              name="medium"
              value={medium}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="control">
            <label for="stackOverflow">Stack Overflow URL</label>
            <input
              type="text"
              id="stackOverflow"
              className="input"
              name="stackOverflow"
              value={stackOverflow}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="column">
          <div className="control">
            <label for="twitter">Twitter URL</label>
            <input
              type="text"
              id="twitter"
              className="input"
              name="twitter"
              value={twitter}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="control">
            <label for="facebook">Facebook URL</label>
            <input
              type="text"
              id="facebook"
              className="input"
              name="facebook"
              value={facebook}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="column">
          <div className="control">
            <label for="youtube">YouTube URL</label>
            <input
              type="text"
              id="youtube"
              className="input"
              name="youtube"
              value={youtube}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
