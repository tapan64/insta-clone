import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from "react-native";

import Constants from "expo-constants";
import Card from "../components/Card";

import Stories from "../components/Stories";
import HomeHeader from "../components/HomeHeader";

import firebase from "../config/fireConfig";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../redux/actions/themeActions";

function HomeScreen({ navigation }) {
  const [fireposts, setFirePosts] = useState([]);
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [followIds, setFollowIds] = useState([]);
  const [pho, setPho] = useState();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.themeReducers.userDetails);

  useEffect(() => {
    start();
  }, []);

  const start = async () => {
    dispatch(getUserDetails(userDetails));
    await getData();
    await getStoryData();
    setLoaded(true);
  };
  const getStoryData = async () => {
    const res = await firebase
      .firestore()
      .collection("post")
      .get()
      .catch((error) => console.log(error));
    const ar = [];
    res.forEach((doc) => {
      ar.push(doc.data());
    });
    setItems(ar);
  };
  const getData = async () => {
    const res = await firebase
      .firestore()
      .collection("post")
      .get()
      .catch((error) => console.log(error));
    const ar = [];
    res.forEach((doc) => {
      ar.push(doc.data());
    });
    setFirePosts(ar);
  };
  const getDataLater = async () => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .collection("following")
      .onSnapshot((snapshots) => {
        snapshots.docs.forEach((doc) => {
          const uid = doc.data().uid;
          const username = doc.data().username;
          const profilePic = doc.data().pic;

          firebase
            .firestore()
            .collection("users")
            .doc(uid)
            .collection("posts")
            .onSnapshot((snapshots) => {
              let posts = snapshots.docs.map((doc) => {
                const data = doc.data();
                return {
                  ...data,
                  username,
                  profilePic,
                };
              });
              setFirePosts(posts);
            });
        });
      });
  };
  if (loaded === false)
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );

  if (loaded === true) {
    return (
      <View style={styles.view}>
        <View>
          <HomeHeader navigation={navigation} />
        </View>
        <FlatList
          data={fireposts}
          keyExtractor={(item) => item.imageUri}
          ListHeaderComponent={<Stories items={items} />}
          renderItem={({ item }) => (
            <Card
              post={item}
              name={item.name}
              place={item.place}
              pic={item.pic}
              imageUri={item.imageUri}
              description={item.description}
            />
          )}
          refreshing={refreshing}
          onRefresh={() => {
            getData();
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: "#fff",
    top: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    paddingBottom: 50,
    // flex: 1,
  },
});

export default HomeScreen;
