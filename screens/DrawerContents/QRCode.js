import React from "react";
import { View, Text, StyleSheet } from "react-native";

function QRCode(props) {
  return (
    <View style={styles.view}>
      <Text>QRCode</Text>
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

export default QRCode;
