import {combineReducers} from "redux";

import erro from "./erro";
import album from "./album";
import buscar from "./buscar";

export default combineReducers({
  album,
  buscar,
  erro,
});
