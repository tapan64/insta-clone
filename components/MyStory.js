import React from "react";
import { View, StyleSheet, Image, Text, ImageBackground } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useSelector } from "react-redux";
function MyStory() {
  const userDetails = useSelector((state) => state.themeReducers.userDetails);
  return (
    <View style={styles.view}>
      <ImageBackground
        style={styles.imageBackground}
        source={{ uri: userDetails.pic }}
      >
        <Entypo
          name="circle-with-plus"
          color="dodgerblue"
          size={25}
          style={{ left: 30, top: 30 }}
        />
      </ImageBackground>
      <Text style={styles.text}>Your Story</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    height: 60,
    width: 60,
    borderRadius: 30,
    overflow: "hidden",
  },
  text: {
    top: -5,
    fontSize: 18,
    fontWeight: "600",
  },
  view: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 7,
  },
});

export default MyStory;
