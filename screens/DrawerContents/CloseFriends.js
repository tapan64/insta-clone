import React from "react";
import { View, Text, StyleSheet } from "react-native";

function CloseFriends(props) {
  return (
    <View style={styles.view}>
      <Text>CloseFriends</Text>
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

export default CloseFriends;
