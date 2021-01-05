import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import firebase from "../config/fireConfig";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import MyScreen from "../components/MyScreen";
import { useNavigation } from "@react-navigation/native";
function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [imageUri, setImageUri] = useState(
    "https://firebasestorage.googleapis.com/v0/b/inst-c7aba.appspot.com/o/noProfile.jfif?alt=media&token=212a7ed3-af97-4f97-bfa8-e607f58d250a"
  );
  const [error, setError] = useState(null);
  const navigation = useNavigation();
  // useEffect(() => {
  //   getLibraryPermission();
  // }, []);
  // const getLibraryPermission = async () => {
  //   const result = await ImagePicker.requestCameraRollPermissionsAsync();
  //   if (!result.granted) alert("need permission");
  // };
  // const pickImage = async () => {
  //   const result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //   });
  //   if (!result.cancelled) setImageUri(result.uri);
  // };
  const handleRegister = async () => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email.trim(), password.trim())
      .catch((error) => setError(error.message));

    // const fetched = await fetch(imageUri);
    // const file = await fetched.blob();
    // const ref = firebase
    //   .storage()
    //   .ref(`users/${firebase.auth().currentUser.uid}/photoUrl.jpg`);
    // await ref.put(file).catch((error) => console.log(error));
    // const res = await ref.getDownloadURL().catch((error) => console.log(error));

    await firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .set({
        uid: firebase.auth().currentUser.uid,
        email: email,
        name: name,
        username: username,
        pic: imageUri,
        website: "",
        bio: "",
      })
      .catch((error) => console.log(error));
  };

  // const deleteImage = () => {
  //   setImageUri(null);
  // };
  return (
    <MyScreen>
      <View style={styles.view}>
        {/* {imageUri && (
          <View
          style={{
            height: 100,
            width: 100,
            borderRadius: 50,
            overflow: "hidden",
          }}
        >
        <ImageBackground
        style={{ height: 100, width: 100, borderRadius: 50 }}
        source={{ uri: imageUri }}
            >
            <TouchableWithoutFeedback onPress={deleteImage}>
            <View style={{ alignSelf: "flex-end", right: 5, top: 5 }}>
            <Entypo name="cross" size={40} color="grey" />
            </View>
            </TouchableWithoutFeedback>
            </ImageBackground>
            </View>
          )} */}
        {/* {!imageUri && (
          <TouchableWithoutFeedback onPress={pickImage}>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: "#B7C0CF",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
            }}
          >
            <MaterialCommunityIcons name="camera" size={30} color="#494D51" />
            </View>
        </TouchableWithoutFeedback>
      )} */}
        {/* <View style={styles.inputContainer}>
        <Text>Full Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setName(text)}
          value={name}
          />
        </View> */}

        <View>
          <Image
            source={require("../assets/instaNameWhite.png")}
            style={{ height: 60, width: 180 }}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Email"
            placeholderTextColor="#C5C5C7"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setName(text)}
            value={name}
            placeholder="Name"
            placeholderTextColor="#C5C5C7"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setUsername(text)}
            value={username}
            placeholder="Username"
            placeholderTextColor="#C5C5C7"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#C5C5C7"
            value={password}
          />
        </View>
        {error && (
          <Text style={{ color: "red", fontSize: 16, marginBottom: 10 }}>
            {error}
          </Text>
        )}

        <TouchableOpacity
          disabled={!email || !name || !username || !password}
          onPress={handleRegister}
          style={{
            backgroundColor:
              !email || !name || !username || !password
                ? "#182C58"
                : "dodgerblue",
            height: 50,
            width: "100%",
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color:
                !email || !name || !username || !password ? "#6183CA" : "white",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Login")}>
        <View
          style={{
            borderTopColor: "grey",
            borderTopWidth: 0.5,
            width: "100%",
            height: 60,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: 0,
          }}
        >
          <Text style={{ color: "#6E6E7B" }}>
            Already have an account?{" "}
            <Text style={{ color: "white", fontWeight: "bold" }}>Log in.</Text>
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </MyScreen>
  );
}

const styles = StyleSheet.create({
  input: {
    color: "white",
  },
  inputContainer: {
    height: 50,
    margin: 20,
    width: "100%",
    paddingHorizontal: 15,
    backgroundColor: "#444856",
    justifyContent: "center",
    borderRadius: 5,
  },
  view: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    paddingHorizontal: 25,
    justifyContent: "center",
  },
});

export default RegisterScreen;
