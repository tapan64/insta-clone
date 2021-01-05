import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import firebase from "../config/fireConfig";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import MyScreen from "../components/MyScreen";
import { useNavigation, useRoute } from "@react-navigation/native";
function SavePostScreen({}) {
  const navigation = useNavigation();
  const route = useRoute();
  const [description, setDescription] = useState();
  const userDetails = useSelector((state) => state.themeReducers.userDetails);
  const imageUri = route.params.imageUri;
  const post = async () => {
    Keyboard.dismiss();
    const fetched = await fetch(imageUri);
    const file = await fetched.blob();
    const ref = firebase
      .storage()
      .ref(`users/${firebase.auth().currentUser.uid}/${Date.now()}.jpg`);
    await ref.put(file).catch((error) => console.log(error));
    const res = await ref.getDownloadURL().catch((error) => console.log(error));
    const timestamp = Date.now();
    await firebase
      .firestore()
      .collection("users")
      .doc(`${firebase.auth().currentUser.uid}`)
      .collection("posts")
      .doc(`${timestamp}`)
      .set({
        timestamp: timestamp,
        pic: res,
        description: description,
      })
      .catch((error) => console.log(error));

    setDescription(null);
    alert("done");
    navigation.navigate("Home");
  };

  return (
    <MyScreen>
      <View style={styles.view}>
        <Image
          style={{
            height: 100,
            width: 100,
            borderRadius: 50,
            marginRight: 10,
          }}
          source={{ uri: userDetails.pic }}
        />
        <Text
          style={{
            marginTop: 10,
            marginBottom: 30,
            fontSize: 18,
          }}
        >
          {userDetails.username}
        </Text>

        <View
          style={{
            height: 200,
            width: 350,
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <Image
            style={{ height: 200, borderRadius: 20 }}
            source={{ uri: imageUri }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            width: 350,
            marginVertical: 10,
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              marginVertical: 10,
              borderColor: "#494D51",
              borderWidth: 1,
              borderRadius: 15,
              paddingHorizontal: 10,
              fontSize: 18,
              height: 70,
              width: "100%",
            }}
            onChangeText={(text) => setDescription(text)}
            value={description}
            multiline
          />
        </View>
        <TouchableOpacity
          style={{
            width: 150,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
            backgroundColor: "dodgerblue",
          }}
          onPress={post}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
            Post
          </Text>
        </TouchableOpacity>
      </View>
    </MyScreen>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SavePostScreen;
