import { combineReducers } from "redux";
import detailsReducer from "./detailsReducer";
import stepsReducer from "./stepsReducer";

const rootReducer = combineReducers({
  details: detailsReducer,
  steps: stepsReducer
});

export default rootReducer;
