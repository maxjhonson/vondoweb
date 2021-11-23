import { combineReducers } from "redux";
import toursReducer from "./toursReducer";

export default combineReducers({
  tours: toursReducer,
});
