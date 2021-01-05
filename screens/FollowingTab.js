import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import firebase from "../config/fireConfig";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
function FollowingTab(props) {
  const navigation = useNavigation();
  const [followingList, setFollowingList] = useState([]);

  useEffect(() => {
    getFollowing();
  }, []);
  const getFollowing = async () => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .collection("following")
      .onSnapshot((docs) => {
        const ar = [];
        docs.forEach((doc) => {
          ar.push(doc.data());
        });

        setFollowingList(ar);
      });
  };

  return (
    <View style={styles.view}>
      <FlatList
        data={followingList}
        keyExtractor={(item) => item.uid}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("OtherProfilefromProfile", { item })
            }
            style={{
              flexDirection: "row",
              height: 100,
              width: "100%",
              alignItems: "center",
              paddingHorizontal: 10,
            }}
          >
            <Image
              style={{ height: 70, width: 70, borderRadius: 35 }}
              source={{ uri: item.pic }}
            />
            <View style={{ marginHorizontal: 10, flex: 1 }}>
              <Text style={{ fontSize: 16 }}>{item.username}</Text>
              <Text style={{ fontSize: 16, color: "grey" }}>{item.name}</Text>
            </View>
            <TouchableOpacity
              onPress={() => console.log("unfollow")}
              style={{
                borderColor: "silver",
                marginHorizontal: 5,
                borderWidth: 1,
                paddingHorizontal: 20,
                paddingVertical: 2,
                borderRadius: 5,
              }}
            >
              <Text style={{ fontSize: 16 }}>Following</Text>
            </TouchableOpacity>
            <MaterialCommunityIcons
              onPress={() => console.log("dot")}
              name="dots-vertical"
              size={30}
            />
          </TouchableOpacity>
        )}
        style={{ width: "100%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default FollowingTab;
