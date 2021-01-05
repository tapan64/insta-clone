import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
function IgtvShopBar({ navigation }) {
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("IGTV")}
        style={{
          padding: 10,
          paddingHorizontal: 20,
          marginHorizontal: 5,
          borderColor: "grey",
          borderWidth: 1,
          borderRadius: 5,
          height: 30,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <MaterialIcons name="live-tv" size={20} />
        <Text style={{ marginLeft: 5, fontSize: 15 }}>IGTV</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Shop")}
        style={{
          padding: 10,
          paddingHorizontal: 20,
          marginHorizontal: 5,
          borderColor: "grey",
          borderWidth: 1,
          borderRadius: 5,
          height: 30,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <MaterialCommunityIcons name="shopping" size={20} />
        <Text style={{ marginLeft: 5, fontSize: 15 }}>Shop</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {},
});

export default IgtvShopBar;
