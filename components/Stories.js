import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import MyStory from "./MyStory";
import Story from "./Story";
function Stories({ items }) {
  return (
    <View style={styles.view}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={items}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={<MyStory />}
        renderItem={({ item }) => (
          <Story imageUri={item.pic} name={item.name} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E2E4",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    height: 90,
    flexDirection: "row",
  },
});

export default Stories;
