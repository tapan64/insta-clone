import { USER_DETAILS } from "../actions/UserActions";
const initialState = {
  userDetails: null,
};
export default UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DETAILS:
      return {
        ...state,
        userDetails: action.userDetails,
      };
    default:
      return state;
  }
};
