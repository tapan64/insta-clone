import React from "react";
import { View, StyleSheet, Text } from "react-native";

function HelpScreen(props) {
  return (
    <View style={styles.view}>
      <Text>HelpScreen</Text>
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

export default HelpScreen;
