import firebase from "../../config/fireConfig";
export const fetchUser = () => {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("users")
      .doc(`${firebase.auth().currentUser.uid}`)
      .get()
      .then((doc) => {
        if (doc.exists) {
          dispatch({ type: USER_STATE_CHANGE, currentUser: doc.data() });
        } else {
          console.log("Does not exist");
        }
      });
  };
};
