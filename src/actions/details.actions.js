import {
  UPDATE_PERSONAL_DETAILS,
  UPDATE_EDUCATION_DETAILS,
  UPDATE_EXPERIENCE_DETAILS
} from "./constants";

export const updatePersonalDetails = (personalDetails) => (dispatch) =>
  dispatch({
    type: UPDATE_PERSONAL_DETAILS,
    payload: personalDetails
  });

export const updateEducationDetails = (educationDetails) => (dispatch) =>
  dispatch({
    type: UPDATE_EDUCATION_DETAILS,
    payload: educationDetails
  });

export const updateExperienceDetails = (experienceDetails) => (dispatch) =>
  dispatch({
    type: UPDATE_EXPERIENCE_DETAILS,
    payload: experienceDetails
  });

export const submitDetails = (details) => (dispatch) => {
  console.log(JSON.stringify(details, null, 4));
};
