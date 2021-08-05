import { SET_STEP, NEXT_STEP, PREV_STEP } from "./constants";

export const setStep = (index) => (dispatch) =>
  dispatch({
    type: SET_STEP,
    payload: index
  });

export const nextStep = () => (dispatch) =>
  dispatch({
    type: NEXT_STEP
  });

export const prevStep = () => (dispatch) =>
  dispatch({
    type: PREV_STEP
  });
