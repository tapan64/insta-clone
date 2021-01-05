import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import EditProfileHeader from "../EditProfileHeader";
import Modal from "react-native-modal";

function BioModal({ modal, closeModal, pressDone, pbio }) {
  const [bio, setBio] = useState(pbio);
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
          headerTitle="Bio"
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
          <Text style={{ color: "gray", marginVertical: 5 }}>Bio</Text>
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
              onChangeText={(text) => setBio(text)}
              value={bio}
              autoFocus
            />
          </View>
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

export default BioModal;
