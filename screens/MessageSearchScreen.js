import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MyScreen from "../components/MyScreen";

function MessageSearchScreen({ navigation }) {
  return (
    <MyScreen>
      <View
        style={{
          flexDirection: "row",
          padding: 15,
          width: "100%",
          borderBottomColor: "grey",
          borderBottomWidth: 0.5,
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          onPress={() => navigation.goBack()}
          name="keyboard-backspace"
          size={30}
        />
        <View
          style={{
            marginLeft: 10,
            flexGrow: 1,
            height: 40,
            justifyContent: "center",
          }}
        >
          <TextInput
            style={{
              fontSize: 16,
            }}
            autoFocus
            placeholder="Search"
            placeholderTextColor="grey"
          />
        </View>
      </View>
      <Text style={{ marginLeft: 15 }}>Suggested</Text>
    </MyScreen>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MessageSearchScreen;
