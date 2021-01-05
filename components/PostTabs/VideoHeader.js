import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import MyText from "../MyText";

function VideoHeader({ onPress }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        height: 40,
        borderBottomColor: "gray",
        borderBottomWidth: 0.5,
      }}
    >
      <TouchableOpacity onPress={onPress}>
        <MaterialIcons name="clear" size={30} />
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          flexGrow: 1,
          alignItems: "center",
          paddingLeft: 20,
        }}
      >
        <MyText style={{ marginRight: 5, fontWeight: "500", fontSize: 18 }}>
          Video
        </MyText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {},
});

export default VideoHeader;
