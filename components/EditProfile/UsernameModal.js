import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import EditProfileHeader from "../EditProfileHeader";
import Modal from "react-native-modal";
function UsernameModal({ modal, closeModal, pressDone, pusername }) {
  const [username, setUsername] = useState(pusername);
  return (
    <Modal
      isVisible={modal}
      onBackButtonPress={closeModal}
      backdropColor="white"
      backdropOpacity={1}
      style={{ margin: 0 }}
    >
      <View style={{ flex: 1 }}>
        <EditProfileHeader
          pressCross={closeModal}
          headerTitle="Username"
          pressDone={pressDone}
        />
        <View
          style={{
            height: 80,
            width: "100%",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <View
            style={{
              width: "100%",
              height: 50,
              borderBottomColor: "gray",
              borderBottomWidth: 1,
            }}
          >
            <TextInput
              style={{ height: "100%", fontSize: 18 }}
              onChangeText={(text) => setUsername(text)}
              value={username}
              autoFocus
            />
          </View>
        </View>
        <View style={{ width: "100%", padding: 10 }}>
          <Text style={{ color: "grey", textAlign: "justify" }}>
            You'll be able to change your username back to
            <Text style={{ color: "#666666", fontWeight: "bold" }}>
              {" "}
              {username}{" "}
            </Text>
            for another 14 days.
          </Text>
          <Text
            onPress={() => console.log("learn more")}
            style={{ color: "dodgerblue" }}
          >
            Learn More
          </Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UsernameModal;
