import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Button,
} from "react-native";
import { Feather, Ionicons, Octicons, MaterialIcons } from "@expo/vector-icons";
import MyText from "./MyText";

function EditProfileHeader({ pressCross, headerTitle, pressDone }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        height: 60,
      }}
    >
      <TouchableOpacity onPress={pressCross}>
        <MaterialIcons name="clear" size={35} />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          flexGrow: 1,
          alignItems: "center",
          paddingLeft: 20,
        }}
      >
        <MyText style={{ marginRight: 5, fontWeight: "500", fontSize: 22 }}>
          {headerTitle}
        </MyText>
      </View>
      <TouchableOpacity onPress={pressDone}>
        <Feather name="check" size={35} color="dodgerblue" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {},
});

export default EditProfileHeader;
