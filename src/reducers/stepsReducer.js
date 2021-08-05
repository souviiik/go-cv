import { NEXT_STEP, PREV_STEP, SET_STEP } from "../actions/constants";

const initialState = {
  currentStep: 0
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_STEP:
      return {
        ...state,
        currentStep: action.payload
      };
    case NEXT_STEP:
      return {
        ...state,
        currentStep: state.currentStep + 1
      };
    case PREV_STEP:
      return {
        ...state,
        currentStep: state.currentStep - 1
      };
    default:
      return state;
  }
}
