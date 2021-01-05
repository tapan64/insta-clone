import firebase from "./fireConfig";

const getOtherUserDetails = (otherId) => {
  const userDetails = {};
  firebase
    .firestore()
    .collection("users")
    .doc(otherId)
    .get()
    .then((doc) => {
      if (doc.exists) userDetails = doc.data();
      else console.log("No data available");
    });
  return userDetails;
};
export default {
  getOtherUserDetails,
};
