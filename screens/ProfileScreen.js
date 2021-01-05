import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import firebase from "../config/fireConfig";
import Constants from "expo-constants";
import ProfileHeader from "../components/ProfileHeader";
import ProfileDetail from "../components/ProfileDetail";
import ProfilePosts from "../components/ProfilePosts";
import ProfileTab from "../components/ProfileTab";
import Modal from "react-native-modal";
import EditProfileModal from "../components/EditProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../redux/actions/UserActions";
function ProfileScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [posts, setPosts] = useState();
  const [following, setFollowing] = useState();
  const [followers, setFollowers] = useState();
  const userDetails = useSelector((state) => state.themeReducers.userDetails);
  const userId = firebase.auth().currentUser.uid;
  useEffect(() => {
    getDetails();
    return () => getDetails();
  }, []);
  const getDetails = async () => {
    firebase
      .firestore()
      .collection("users")
      .doc(userId)
      .collection("posts")
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.length);
      });

    firebase
      .firestore()
      .collection("users")
      .doc(userId)
      .collection("followers")
      .onSnapshot((snapshot) => {
        setFollowers(snapshot.docs.length);
      });
    firebase
      .firestore()
      .collection("users")
      .doc(userId)
      .collection("following")
      .onSnapshot((snapshot) => {
        setFollowing(snapshot.docs.length);
      });
  };

  // const getData = () => {
  //   dispatch(getUserDetails);
  // };
  // const userDetails = useSelector((state) => state.themeReducers.userDetails);
  // console.log(userDetails);
  // console.log(userDetails);
  // console.log(userDetails);
  // const update = async () => {
  //   await firebase.auth().currentUser.updateProfile({
  //     displayName: "johny",
  //   });
  // };

  // firebase
  //   .firestore()
  //   .collection("users")
  //   .doc(`${firebase.auth().currentUser.uid}`)
  //   .get()
  //   .then((doc) => {
  //     if (doc.exists) {
  //       setName(doc.data().name);
  //       setPhotoUrl(doc.data().pic);
  //       setFollowers(doc.data().followers);
  //       setFollowing(doc.data().following);
  //     }
  //   })
  //   .catch((error) => console.log(error));
  return (
    <View style={styles.view}>
      <ProfileHeader navigation={navigation} username={userDetails.username} />
      <ProfileDetail
        navigation={navigation}
        photoUrl={userDetails.pic}
        name={userDetails.name}
        followers={followers}
        following={following}
        posts={posts}
        bio={userDetails.bio}
      />
      {/* <TouchableOpacity onPress={() => firebase.auth().signOut()}> */}
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View
          style={{
            alignSelf: "center",
            marginVertical: 10,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
            borderColor: "#A3A3A5",
            borderWidth: 1,
            backgroundColor: "#fff",
            width: "93%",
            height: 30,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>Edit Profile</Text>
        </View>
      </TouchableOpacity>
      <Modal
        isVisible={modalVisible}
        onBackButtonPress={() => setModalVisible(false)}
        // onBackdropPress={() => setModalVisible(false)}
        backdropColor="white"
        backdropOpacity={1}
        style={{ margin: 0 }}
      >
        <EditProfileModal
          onPress={() => setModalVisible(false)}
          name={userDetails.name}
          pic={userDetails.pic}
          username={userDetails.username}
          pwebsite={userDetails.website}
          bio={userDetails.bio}
        />
      </Modal>
      <ProfileTab id={userId} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#F5F5F7",
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});

export default ProfileScreen;
