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
function FollowersTab(props) {
  const navigation = useNavigation();
  const [followersList, setFollowersList] = useState([]);
  useEffect(() => {
    getFollowers();
  }, []);
  const getFollowers = async () => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .collection("followers")
      .onSnapshot((docs) => {
        const ar = [];
        docs.forEach((doc) => {
          ar.push(doc.data());
        });

        setFollowersList(ar);
      });
  };

  return (
    <View style={styles.view}>
      <FlatList
        data={followersList}
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
            </View>
            <TouchableOpacity
              onPress={() => console.log("remove")}
              style={{
                borderColor: "silver",
                marginHorizontal: 5,
                borderWidth: 1,
                paddingHorizontal: 20,
                paddingVertical: 2,
                borderRadius: 5,
              }}
            >
              <Text style={{ fontSize: 16 }}>Remove</Text>
            </TouchableOpacity>
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
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FollowersTab;
