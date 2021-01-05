import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

function Story({ imageUri, name }) {
  return (
    <View style={styles.view}>
      <Image style={styles.image} source={{ uri: imageUri }} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  text: {
    top: -5,
    fontSize: 18,
    fontWeight: "600",
  },
  view: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 7,
  },
});

export default Story;
