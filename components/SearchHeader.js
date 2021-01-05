import React from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { EvilIcons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
function SearchHeader({ navigation, onChange }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        paddingRight: 20,
      }}
    >
      <TouchableOpacity
        style={{ marginHorizontal: 5, marginRight: 15 }}
        onPress={() => navigation.goBack()}
      >
        <MaterialCommunityIcons name="keyboard-backspace" size={30} />
      </TouchableOpacity>
      <TextInput
        style={{
          backgroundColor: "lightgrey",
          flexGrow: 1,
          height: 50,
          borderRadius: 10,
          paddingHorizontal: 15,
          fontSize: 20,
        }}
        onChangeText={onChange}
        placeholder="Search"
        placeholderTextColor="#696869"
        autoFocus
      />
      {/* <TextInput
        style={{
          width: "100%",
          height: "100%",
          fontSize: 20,
        }}
        placeholder="Search"
        placeholderTextColor="grey"
        autoFocus
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: "100%",
    height: 50,
  },
});

export default SearchHeader;
