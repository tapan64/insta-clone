import React from "react";
import { View, StyleSheet, Text } from "react-native";

function Namedetail(props) {
  return (
    <View style={styles.view}>
      <Text>Namedetail</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default Namedetail;
