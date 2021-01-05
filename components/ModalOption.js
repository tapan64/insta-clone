import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function ModalOption({ option, icon, margin }) {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 15,
        height: 40,
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        marginVertical: 5,
      }}
      onPress={() => console.log(option)}
    >
      {icon && (
        <MaterialCommunityIcons
          style={{ marginRight: 10 }}
          name={icon}
          size={35}
          color="#3C3A3A"
        />
      )}
      <Text style={{ fontSize: 16, fontWeight: "700" }}>{option}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  view: {},
});

export default ModalOption;
