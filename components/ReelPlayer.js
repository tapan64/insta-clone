import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Video } from "expo-av";
function ReelPlayer({ videoUrl, mute }) {
  const { height, width } = Dimensions.get("screen");
  return (
    <Video
      source={videoUrl}
      style={{ flex: 1 }}
      resizeMode="cover"
      shouldPlay
      isMuted={mute}
      isLooping
      useNativeControls
    />
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ReelPlayer;
