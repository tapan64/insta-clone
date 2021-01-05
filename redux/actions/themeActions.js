import firebase from "../../config/fireConfig";
export const SWITCH_THEME = "SWITCH_THEME";
export const USER_DETAILS = "USER_DETAILS";

export const switchTheme = (theme) => {
  return (dispatch) => {
    dispatch({
      type: SWITCH_THEME,
      theme,
    });
  };
};

export const getUserDetails = () => {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("users")
      .doc(`${firebase.auth().currentUser.uid}`)
      .onSnapshot((doc) => {
        if (doc.exists) {
          dispatch({ type: USER_DETAILS, userDetails: doc.data() });
        } else console.log("NO data available");
      });
  };
};
