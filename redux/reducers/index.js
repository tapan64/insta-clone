import { combineReducers } from "redux";
import { user } from "./user";
import themeReducers from "./themeReducers";
import UserReducer from "./UserReducer";
export default Reducers = combineReducers({
  userDetails: UserReducer,
  themeReducers: themeReducers,
});
