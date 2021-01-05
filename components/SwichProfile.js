import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import ModalOption from "./ModalOption";
import SettingsListItem from "./SettingsListItem";
function SwichProfile({ username }) {
  const [profileModal, setProfileModal] = useState(false);
  return (
    <>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          flexGrow: 1,
          alignItems: "center",
          paddingLeft: 5,
        }}
        onPress={() => setProfileModal(true)}
      >
        <Text style={{ marginRight: 5, fontWeight: "700", fontSize: 22 }}>
          {username}
        </Text>
        <Ionicons name="ios-arrow-down" size={20} style={{ top: 3 }} />
      </TouchableOpacity>
      <Modal
        onBackButtonPress={() => setProfileModal(false)}
        onBackdropPress={() => setProfileModal(false)}
        style={{ margin: 0 }}
        isVisible={profileModal}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              backgroundColor: "#fff",
              width: "100%",
              alignItems: "center",
              paddingBottom: 10,
            }}
          >
            <View
              style={{
                margin: 10,
                width: 35,
                height: 5,
                backgroundColor: "gray",
                borderRadius: 35,
              }}
            />
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Change Profile
            </Text>
            <ModalOption icon="grid" option="Feed Post" />

            <ModalOption icon="library-music" option="Reel" />
            <SettingsListItem
              iconType="mci"
              itemName="hello"
              onPress={() => console.log("sh")}
            />
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  view: {
    // flex:1,
    // alignItems:'center',
    // justifyContent:'center',
  },
});

export default SwichProfile;
