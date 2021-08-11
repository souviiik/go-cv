import { useState } from "react";
import { useSelector } from "react-redux";
import { updatePersonalDetails } from "../../actions/details.actions";
import Input from "../../elements/Input";
import Buttons from "../Buttons";
// import { updatePersonalDetails } from "../actions/details.actions";
// import Input from "../elements/Input";
// import Buttons from "./Buttons";

export default function PersonalDetails() {
  const personalDetailsfromStore = useSelector(
    (store) => store.details.personalDetails
  );

  const initialState = personalDetailsfromStore || {
    name: "",
    address: "",
    jobTitle: "",
    profile: "",
    phone: "",
    email: "",
    dob: "",
    maritalStatus: "",
    nationality: "",
    website: "",
    github: "",
    linkedin: "",
  };

  const [personalDetails, setPersonalDetails] = useState(initialState);

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

  const handleChange = (e) => {
    setPersonalDetails({
      ...personalDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="App">
      <h2 className="title is-size-2">Personal Details</h2>
      <form>
        <div className="columns">
          <div className="column">
            <Input
              label="Name"
              type="text"
              name="name"
              value={name}
              handleChange={handleChange}
            />
            <Input
              label="Job title"
              type="text"
              name="jobTitle"
              value={jobTitle}
              handleChange={handleChange}
            />
            <div className="control mb-3">
              <label>Profile: </label>
              <textarea
                class="textarea"
                name="profile"
                value={profile}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="control mb-3">
              <label>Address: </label>
              <textarea
                class="textarea"
                name="address"
                value={address}
                onChange={handleChange}
              ></textarea>
            </div>
            <Input
              label="Phone"
              type="tel"
              name="phone"
              value={phone}
              handleChange={handleChange}
            />
            <Input
              label="Email"
              type="email"
              name="email"
              value={email}
              handleChange={handleChange}
            />
          </div>
          <div className="column">
            <Input
              label="Date of Birth"
              type="date"
              name="dob"
              value={dob}
              handleChange={handleChange}
            />
            <Input
              label="Marital Status"
              type="text"
              name="maritalStatus"
              value={maritalStatus}
              handleChange={handleChange}
            />
            <Input
              label="Nationality"
              type="text"
              name="nationality"
              value={nationality}
              handleChange={handleChange}
            />
            <Input
              label="Website"
              type="text"
              name="website"
              value={website}
              handleChange={handleChange}
            />
            <Input
              label="Github"
              type="text"
              name="github"
              value={github}
              handleChange={handleChange}
            />
            <Input
              label="Linkedin"
              type="text"
              name="linkedin"
              value={linkedin}
              handleChange={handleChange}
            />
          </div>
        </div>

        <Buttons
          formData={personalDetails}
          targetAction={updatePersonalDetails}
        />
      </form>
    </div>
  );
}
