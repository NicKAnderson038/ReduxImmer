import { combineReducers } from "redux";
import character from "./character";
import characters from "./characters";
import location from "./location";

export default combineReducers({
  character,
  characters,
  location
});
