import React from "react";
import { View, StyleSheet, Text } from "react-native";

function PrivacyScreen(props) {
  return (
    <View style={styles.view}>
      <Text>PrivacyScreen</Text>
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

export default PrivacyScreen;
