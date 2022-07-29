import { combineReducers } from "redux";

import shops from "./shops";
import order from "./order";
import history from "./history";

export default combineReducers({
  shops,
  order,
  history,
});
