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
import { Feather, Ionicons, Octicons } from "@expo/vector-icons";
import ModalOption from "./ModalOption";
import Modal from "react-native-modal";
import SettingsListItem from "./SettingsListItem";
import SwichProfile from "./SwichProfile";
function ProfileHeader({ navigation, username }) {
  const [modal, setModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
      }}
    >
      {/* <TouchableOpacity
        style={{
          flexDirection: "row",
          flexGrow: 1,
          alignItems: "center",
          paddingLeft: 5,
        }}
        onPress={() => setProfileModal(true)}
      >
        <Text style={{ marginRight: 5, fontWeight: "700", fontSize: 24 }}>
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
      </Modal> */}

      <SwichProfile username={username} />

      <TouchableOpacity onPress={() => setModal(true)}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
      <Modal
        onBackButtonPress={() => setModal(false)}
        onBackdropPress={() => setModal(false)}
        style={{ margin: 0 }}
        isVisible={modal}
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
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Create New</Text>
            <ModalOption icon="grid" option="Feed Post" />
            <ModalOption icon="shape-circle-plus" option="Story" />
            <ModalOption icon="calendar-heart" option="Story Highlight" />
            <ModalOption icon="message-video" option="IGTV Video" />
            <ModalOption icon="library-music" option="Reel" />
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={{ marginHorizontal: 10, marginLeft: 20 }}
        onPress={() => navigation.openDrawer()}
      >
        <Ionicons name="ios-menu" size={40} />
      </TouchableOpacity>
    </View>
  );
}

export default ProfileHeader;
