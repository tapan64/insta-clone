import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MyScreen from "../components/MyScreen";
import { useNavigation, useRoute } from "@react-navigation/native";
import firebase from "../config/fireConfig";
import { useSelector } from "react-redux";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ProfilePosts from "../components/ProfilePosts";
import TagPosts from "../components/TagPosts";
import ProfileTab from "../components/ProfileTab";
function OtherProfileScreen(props) {
  const [isfollowing, setIsFollowing] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const userId = firebase.auth().currentUser.uid;
  const otherId = route.params.item.uid;
  const userDetails = useSelector((state) => state.themeReducers.userDetails);
  const [posts, setPosts] = useState();
  const [following, setFollowing] = useState();
  const [followers, setFollowers] = useState();
  const Tab = createMaterialTopTabNavigator();
  useEffect(() => {
    getDetails();
  }, []);
  useEffect(() => {
    isFollowing();
  }, [isfollowing]);

  const getDetails = async () => {
    firebase
      .firestore()
      .collection("users")
      .doc(otherId)
      .collection("posts")
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.length);
      });

    firebase
      .firestore()
      .collection("users")
      .doc(otherId)
      .collection("followers")
      .onSnapshot((snapshot) => {
        setFollowers(snapshot.docs.length);
      });
    firebase
      .firestore()
      .collection("users")
      .doc(otherId)
      .collection("following")
      .onSnapshot((snapshot) => {
        setFollowing(snapshot.docs.length);
      });
  };

  const isFollowing = () => {
    firebase
      .firestore()
      .collection("users")
      .doc(userId)
      .collection("following")
      .where("uid", "==", otherId)
      .get()
      .then((docs) => {
        setIsFollowing(!docs.empty);
      })
      .catch((error) => console.log(error));
  };
  // const increaseFollowing = () => {
  //   firebase
  //   .firestore()
  //   .collection("users")
  //   .doc(userId)
  //   .update({
  //     following: userDetails.following + 1,
  //   });
  // firebase
  //   .firestore()
  //   .collection("users")
  //   .doc(otherId)
  //   .update({
  //     followers: route.params.item.followers + 1,
  //   });
  // };
  // const decreaseFollowing = () => {
  //   firebase
  //     .firestore()
  //     .collection("users")
  //     .doc(userId)
  //     .update({
  //       following: userDetails.following - 1,
  //     });
  //   firebase
  //     .firestore()
  //     .collection("users")
  //     .doc(otherId)
  //     .update({
  //       followers: route.params.item.followers - 1,
  //     });
  // };
  const follow = async () => {
    firebase
      .firestore()
      .collection("users")
      .doc(userId)
      .collection("following")
      .doc(otherId)
      .set(route.params.item)
      .then(() => {
        isFollowing();
      })
      .catch((error) => console.log(error));
    firebase
      .firestore()
      .collection("users")
      .doc(otherId)
      .collection("followers")
      .doc(userId)
      .set(userDetails)
      .catch((error) => console.log(error));
  };
  const unFollow = () => {
    firebase
      .firestore()
      .collection("users")
      .doc(userId)
      .collection("following")
      .doc(otherId)
      .delete()
      .then(() => {
        isFollowing();
      })
      .catch((error) => console.log(error));
    firebase
      .firestore()
      .collection("users")
      .doc(otherId)
      .collection("followers")
      .doc(userId)
      .delete()
      .catch((error) => console.log(error));
  };
  return (
    <MyScreen>
      <View
        style={{
          height: 60,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 15,
        }}
      >
        <MaterialCommunityIcons
          onPress={() => navigation.goBack()}
          name="keyboard-backspace"
          size={30}
        />
        <Text style={{ marginLeft: 20, fontSize: 22, flex: 1 }}>
          {route.params.item.username}
        </Text>
        <MaterialCommunityIcons
          onPress={() => console.log("dotss")}
          name="dots-vertical"
          size={30}
        />
      </View>

      <View style={styles.view}>
        <View
          style={{
            flexDirection: "row",
            paddingTop: 10,
          }}
        >
          <View
            style={{
              paddingLeft: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={{ uri: route.params.item.pic }}
              style={{ width: 100, height: 100, borderRadius: 50 }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              flexGrow: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text style={{ fontSize: 20 }}>{posts}</Text>
              <Text style={styles.text}>Posts</Text>
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginHorizontal: 20,
              }}
            >
              <Text style={{ fontSize: 20 }}>{followers}</Text>
              <Text style={styles.text}>Followers</Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text style={{ fontSize: 20 }}>{following}</Text>
              <Text style={styles.text}>Following</Text>
            </View>
          </View>
        </View>
        <View style={{ paddingLeft: 20, paddingVertical: 10 }}>
          <Text style={styles.text}>{route.params.item.name}</Text>
          <Text style={styles.text}>{route.params.item.bio}</Text>
        </View>
      </View>
      <ProfileTab id={otherId} />

      {isfollowing ? (
        <Button title="following" onPress={unFollow} />
      ) : (
        <Button title="follow" onPress={follow} />
      )}
    </MyScreen>
  );
}

const styles = StyleSheet.create({
  view: {},
});

export default OtherProfileScreen;
