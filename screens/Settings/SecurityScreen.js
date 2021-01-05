import React from "react";
import { View, StyleSheet, Text } from "react-native";

function SecurityScreen(props) {
  return (
    <View style={styles.view}>
      <Text>SecurityScreen</Text>
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

export default SecurityScreen;
