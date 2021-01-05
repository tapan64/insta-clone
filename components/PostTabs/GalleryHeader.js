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
import ModalOption from "../ModalOption";
import Modal from "react-native-modal";
import SettingsListItem from "../SettingsListItem";
import MyText from "../MyText";

function GalleryHeader({ navigation, onPress }) {
  const [listModal, setListModal] = useState(false);

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        height: 40,
        borderBottomColor: "gray",
        borderBottomWidth: 0.5,
      }}
    >
      <TouchableOpacity onPress={onPress}>
        <MaterialIcons name="clear" size={30} />
      </TouchableOpacity>

      <Modal
        onBackButtonPress={() => setListModal(false)}
        onBackdropPress={() => setListModal(false)}
        style={{ margin: 0 }}
        isVisible={listModal}
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
              width: "70%",
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
      <TouchableOpacity
        style={{
          flexDirection: "row",
          flexGrow: 1,
          alignItems: "center",
          paddingLeft: 20,
        }}
        onPress={() => setListModal(true)}
      >
        <MyText style={{ marginRight: 5, fontWeight: "500", fontSize: 18 }}>
          Gallery
        </MyText>
        <Ionicons name="ios-arrow-down" size={15} style={{ top: 3 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("yes")}>
        <Text style={{ fontSize: 18, color: "dodgerblue" }}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

export default GalleryHeader;
