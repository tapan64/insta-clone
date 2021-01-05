import React from "react";
import { View, Text, StyleSheet } from "react-native";

function DiscoverPeople(props) {
  return (
    <View style={styles.view}>
      <Text>DiscoverPeople</Text>
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

export default DiscoverPeople;
