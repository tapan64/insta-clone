import firebase from "../../config/fireConfig";

export const USER_DETAILS = "USER_DETAILS";

export const getUserDetails = () => {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("users")
      .doc(`${firebase.auth().currentUser.uid}`)
      .get()
      .then((doc) => {
        if (doc.exists) {
          dispatch({ type: USER_DETAILS, userDetails: doc.data() });
          console.log(doc.data());
        } else console.log("NO data available");
      });
  };
};
