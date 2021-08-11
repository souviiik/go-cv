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
    jobTitle: "",
    profile: "",
    phone: "",
    email: "",
  };

  const [personalDetails, setPersonalDetails] = useState(initialState);

  const { name, jobTitle, profile, phone, email } = personalDetails;

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
          <label>Job Title: </label>
          <textarea
            class="textarea"
            name="profile"
            value={profile}
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
        <Buttons
          formData={personalDetails}
          targetAction={updatePersonalDetails}
        />
      </form>
    </div>
  );
}