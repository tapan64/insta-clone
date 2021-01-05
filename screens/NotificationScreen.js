import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
// import firebase from "../config/fireConfig";
// import * as ImagePicker from "expo-image-picker";
import { SectionGrid } from "react-native-super-grid";
function NotificationScreen(props) {
  // const [imageUri, setImageUri] = useState();
  // const [downuri, setdownuri] = useState();
  // const [description, setDescription] = useState();
  const [items, setItems] = useState([
    {
      name: "unknown,angel and 4 others started following you.",
      code: "#1abc9c",
      pic: require("../assets/pic1.jpg"),
      time: "  2d",
    },
    {
      name: "bunny tagged you in a post.",
      code: "#2ecc71",
      pic: require("../assets/tpn.jpg"),
      time: "  4w",
    },
    {
      name: "peter_brook liked your post.",
      code: "#3498db",
      pic: require("../assets/pic1.jpg"),
      time: "  6w",
    },
    {
      name: "unknown tagged you in a post.",
      code: "#9b59b6",
      pic: require("../assets/pic2.jpg"),
      time: "  7w",
    },
    {
      name: "bunny liked your post.",
      code: "#34495e",
      pic: require("../assets/pic3.jpg"),
      time: "  4w",
    },
    {
      name: "Your contact John Smith is on Instagram as smithjohn.",
      code: "#16a085",
      pic: require("../assets/pic4.jpg"),
      time: "  5w",
    },
    {
      name: "johny_lever liked your post.",
      code: "#27ae60",
      pic: require("../assets/pic5.jpg"),
      time: "  6w",
    },
    {
      name: "bob_rock",
      code: "#2980b9",
      pic: require("../assets/pic1.jpg"),
      time: "",
    },
    {
      name: "johnystar",
      code: "#8e44ad",
      pic: require("../assets/pic3.jpg"),
      time: "",
    },
    {
      name: "artist4you",
      code: "#2c3e50",
      pic: require("../assets/pic4.jpg"),
      time: "",
    },
  ]);

  // const additem = async (name, description) => {
  //   await firebase
  //     .firestore()
  //     .collection("post")
  //     .doc(name)
  //     .set({
  //       name: name,
  //       description: description,
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   alert("done");
  // };
  // const storeitem = () => {
  //   const file = require("../assets/sunshine.jpg");
  //   firebase.storage().ref("my/shine.jpg").put(file).then(alert("done"));
  // };
  // const getitem = async () => {
  //   const response = await firebase
  //     .firestore()
  //     .collection("users/john/posts")
  //     .doc("HkX4sGRPnNw30qiKJa1b")
  //     .get()
  //     .catch((error) => console.log(error));
  //   console.log(response.data());
  // };
  // const removeitem = async (name) => {
  //   await firebase
  //     .firestore()
  //     .collection("post")
  //     .doc(name)
  //     .delete()
  //     .catch((error) => console.log(error));
  //   alert("done");
  // };

  // const uploadImage = async () => {
  //   const fetched = await fetch(imageUri);
  //   const file = await fetched.blob();
  //   firebase
  //     .storage()
  //     .ref("post/tpn/sun3.jpg")
  //     .put(file)
  //     .then(alert("done"))
  //     .catch((error) => console.log(error));
  // };
  // const geturl = async () => {
  //   const res = await firebase
  //     .storage()
  //     .ref("post/tpn/waterfall.jpg")
  //     .getDownloadURL()
  //     .catch((error) => console.log(error));
  //   setdownuri(res);
  // };
  // const updateitem = async () => {
  //   await firebase
  //     .firestore()
  //     .collection("post")
  //     .doc("sana")
  //     .update({
  //       imageUri: downuri,
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   alert("done");
  // };
  // const pickImage = async () => {
  //   const result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //   });
  //   if (!result.cancelled) setImageUri(result.uri);
  // };
  // const gettime = () => {
  //   console.log(Date.now());
  // };
  // const navigation = useNavigation();
  return (
    <View style={styles.view}>
      {/* <TouchableOpacity
        style={{ height: 50, width: 50, backgroundColor: "blue" }}
        onPress={() => navigation.navigate("TestAnimation")}
      /> */}
      <SectionGrid
        itemDimension={350}
        sections={[
          {
            title: "This Week",
            data: items.slice(0, 2),
          },
          {
            title: "This Month",
            data: items.slice(2, 5),
          },
          {
            title: "Earlier",
            data: items.slice(5, 7),
          },
          {
            title: "Suggestions for you",
            data: items.slice(7, 10),
          },
        ]}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => console.log("tap")}>
            <View
              style={{
                height: 60,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  flexGrow: 1,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ left: 10, width: 50, height: 50, borderRadius: 25 }}
                  source={item.pic}
                />
                <View style={{ width: "70%", left: 20 }}>
                  <Text style={{ fontSize: 15 }}>
                    {item.name}
                    <Text style={{ fontSize: 15, color: "grey" }}>
                      {item.time}
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={{ left: 10, fontSize: 16, fontWeight: "700" }}>
            {section.title}{" "}
          </Text>
        )}
      />

      {/* {imageUri && (
        <Image style={{ height: 150, width: 300 }} source={{ uri: imageUri }} />
        )}
        
        <Button color="grey" title="pick" onPress={pickImage} />
      <TextInput
        style={{ borderColor: "dodgerblue", width: "80%", borderWidth: 1 }}
        onChangeText={(text) => setDescription(text)}
        value={description}
        />
      <Button title="upload to fire storage" onPress={uploadImage} />
      <Button title="get downloadurl" onPress={geturl} />

      <Text>NotificationScreen</Text>
      <Button
      title="add in firestore"
        onPress={() => additem("Angel", "hello guys")}
      />
      <Button title="get from firestore" onPress={getitem} />
      <Button
        title="remove from firestore"
        onPress={() => removeitem("Angel")}
      />
      <Button title="update to firestore" onPress={updateitem} />
      <Button title="store to storage" onPress={storeitem} />
    <Button title="get time" onPress={gettime} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NotificationScreen;
