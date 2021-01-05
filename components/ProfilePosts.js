import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";
import firebase from "../config/fireConfig";
function ProfilePosts({ id }) {
  const [pics, setPics] = useState([]);
  const [postsLoaded, setpostsLoaded] = useState(false);
  const route = useRoute();
  useEffect(() => {
    getPosts();
    return () => getPosts();
  }, []);

  const getPosts = () => {
    firebase
      .firestore()
      .collection("users")
      .doc(id)
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((docs) => {
        let arr = [];
        docs.forEach((doc) => {
          if (doc.exists) {
            arr.push(doc.data());
          } else {
            console.log("No data");
          }
        });
        setPics(arr);
        setpostsLoaded(true);
      });
  };
  const deletePost = async (post) => {
    await firebase
      .firestore()
      .collection("users")
      .doc(id)
      .collection("posts")
      .doc(`${post.timestamp}`)
      .delete()
      .catch((error) => console.log(error));
  };
  if (!postsLoaded)
    return <ActivityIndicator size="large" style={{ alignSelf: "center" }} />;
  //  <Text>posts</Text>
  else
    return (
      <View style={styles.view}>
        <FlatGrid
          data={pics}
          keyExtractor={(item) => item.timestamp}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  height: 130,
                  margin: 1,
                }}
              >
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={{ uri: item.pic }}
                />
              </View>
            </TouchableOpacity>
          )}
          spacing={0}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  view: { flex: 1 },
});

export default ProfilePosts;
