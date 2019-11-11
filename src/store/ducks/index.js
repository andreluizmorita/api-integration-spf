import {combineReducers} from "redux";

import erro from "./erro";
import album from "./album";
import buscar from "./buscar";
import player from "./player";

export default combineReducers({
  album,
  buscar,
  erro,
  player,
});
