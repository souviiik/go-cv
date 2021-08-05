import {
  UPDATE_EDUCATION_DETAILS,
  UPDATE_EXPERIENCE_DETAILS,
  UPDATE_PERSONAL_DETAILS
} from "../actions/constants";

const initialState = {
  personalDetails: {},
  educationDetails: [],
  experienceDetails: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_PERSONAL_DETAILS:
      return {
        ...state,
        personalDetails: action.payload
      };
    case UPDATE_EDUCATION_DETAILS:
      return {
        ...state,
        // educationDetails: [...state.educationDetails, action.payload]
        educationDetails: action.payload
      };
    case UPDATE_EXPERIENCE_DETAILS:
      return {
        ...state,
        // experienceDetails: [...state.experienceDetails, action.payload]
        experienceDetails: action.payload
      };
    default:
      return state;
  }
}
