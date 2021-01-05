import React from "react";
import { View, Text, StyleSheet } from "react-native";

function ExploreCategoryScreen({ item }) {
  return (
    <View style={styles.view}>
      <Text>{item.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ExploreCategoryScreen;
