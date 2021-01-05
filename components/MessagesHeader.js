import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  MaterialCommunityIcons,
  Feather,
  SimpleLineIcons,
  Entypo,
} from "@expo/vector-icons";
import SwichProfile from "./SwichProfile";
function MessagesHeader({ navigation, username }) {
  return (
    <View style={styles.view}>
      <MaterialCommunityIcons
        style={{ marginRight: 10 }}
        name="keyboard-backspace"
        size={30}
        onPress={() => navigation.goBack()}
      />
      <SwichProfile username={username} />
      <Feather
        style={{ marginHorizontal: 25 }}
        name="video"
        size={30}
        onPress={() => console.log("video")}
      />
      <Entypo
        style={{}}
        name="new-message"
        size={30}
        onPress={() => console.log("new message")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    height: 65,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
});

export default MessagesHeader;
