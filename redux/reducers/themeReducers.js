import { SWITCH_THEME, USER_DETAILS } from "../actions/themeActions";

const initialState = {
  theme: "light",
  userDetails: {},
};

export default themeReducers = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    case USER_DETAILS:
      return {
        ...state,
        userDetails: action.userDetails,
      };
    default:
      return state;
  }
};
