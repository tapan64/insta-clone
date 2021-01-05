import React from "react";
import { View, StyleSheet, Text } from "react-native";

function IgtvScreen(props) {
  return (
    <View style={styles.view}>
      <Text>IgtvScreen</Text>
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

export default IgtvScreen;
