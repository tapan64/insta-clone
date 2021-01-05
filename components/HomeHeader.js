import React, { useEffect } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  Feather,
  FontAwesome5,
  Ionicons,
  EvilIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
function HomeHeader({ navigation }) {
  // const getCameraPermission = async () => {
  //   const { granted } = await ImagePicker.requestCameraPermissionsAsync();
  //   if (!granted) alert("Need Camera Permission");
  // };
  // const launchCamera = async () => {
  //   getCameraPermission(), [];
  //   await ImagePicker.launchCameraAsync();
  // };
  return (
    <View style={styles.header}>
      {/* <TouchableOpacity onPress={() => console.log("camera")}>
        <EvilIcons name="camera" size={40} />
      </TouchableOpacity> */}
      <View style={{ flexGrow: 1, justifyContent: "center", left: 30 }}>
        <Image
          source={require("../assets/instaName.jpg")}
          style={styles.instaName}
        />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={() => navigation.navigate("Explore")}>
          <Ionicons name="ios-search" size={30} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginHorizontal: 10, marginLeft: 20 }}
          onPress={() => navigation.navigate("Messages")}
        >
          <MaterialCommunityIcons name="facebook-messenger" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",

    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E2E4",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  instaName: {
    width: 150,
    height: 40,
  },
  view: {},
});

export default HomeHeader;
