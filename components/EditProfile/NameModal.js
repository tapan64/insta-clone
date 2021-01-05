import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import EditProfileHeader from "../EditProfileHeader";
import Modal from "react-native-modal";
function NameModal({ modal, closeModal, pressDone, pname }) {
  const [name, setName] = useState(pname);
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
          headerTitle="Name"
          pressDone={pressDone}
        />
        <View
          style={{
            height: 80,
            width: "100%",
            marginVertical: 10,

            justifyContent: "center",
            padding: 10,
          }}
        >
          <Text style={{ color: "gray", marginVertical: 5 }}>Name</Text>
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
              onChangeText={(text) => setName(text)}
              value={name}
              autoFocus
            />
          </View>
        </View>
        <View style={{ width: "100%", padding: 10 }}>
          <Text
            style={{ marginBottom: 10, color: "grey", textAlign: "justify" }}
          >
            Help people Discover your account by using the Name you're known by:
            either your full name, nickname, or business name.
          </Text>
          <Text style={{ color: "grey" }}>
            You can only change your name twice within 14 days.
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

export default NameModal;
