import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { EvilIcons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
function ExploreHeader({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
      }}
    >
      <TouchableOpacity
        style={{ marginHorizontal: 5, marginRight: 15 }}
        onPress={() => navigation.goBack()}
      >
        <MaterialCommunityIcons name="keyboard-backspace" size={30} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "lightgrey",
          flexDirection: "row",
          alignItems: "center",
          flexGrow: 1,
          height: 50,
          borderRadius: 10,
          paddingHorizontal: 15,
        }}
        onPress={() => navigation.navigate("Search")}
      >
        {/* <EvilIcons name="search" size={40} color="#696869" /> */}
        <Text style={{ fontSize: 20, color: "#696869" }}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginHorizontal: 15, marginLeft: 25 }}
        onPress={() => console.log("insta-qr")}
      >
        <Feather name="instagram" size={30} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {},
});

export default ExploreHeader;
