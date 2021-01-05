import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";
import SafeScreen from "../components/SafeScreen";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SettingsListItem from "../components/SettingsListItem";
import { useSelector } from "react-redux";
function DrawerContentScreen({ navigation }) {
  const [list] = useState([
    {
      itemName: "Archive",
      iconName: "history",
      iconType: "mci",
    },
    { itemName: "Your Activity", iconName: "activity", iconType: "feather" },
    { itemName: "QR Code", iconName: "qrcode-scan", iconType: "mci" },
    { itemName: "Saved", iconName: "bookmark", iconType: "font5" },
    { itemName: "Close Friends", iconName: "bars", iconType: "ant" },
    {
      itemName: "Discover People",
      iconName: "account-plus-outline",
      iconType: "mci",
    },
  ]);
  const userDetails = useSelector((state) => state.themeReducers.userDetails);
  return (
    <View style={styles.view}>
      <View style={styles.header}>
        <Text style={{ fontSize: 16 }}>{userDetails.username}</Text>
      </View>
      <View style={styles.content}>
        {list.map((item) => (
          <SettingsListItem
            key={item.itemName}
            iconName={item.iconName}
            iconType={item.iconType}
            itemName={item.itemName}
            size={30}
            onPress={() => navigation.navigate(item.itemName)}
          />
        ))}
      </View>
      <View style={styles.footer}>
        <SettingsListItem
          iconName="settings"
          iconType="feather"
          itemName="Settings"
          size={30}
          onPress={() => navigation.navigate("SettingsStack")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    justifyContent: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
  },
  content: {
    flex: 1,
  },
  view: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 15,
  },
  footer: {
    justifyContent: "center",
    height: 50,
    borderTopColor: "gray",
    borderTopWidth: 0.5,
  },
});

export default DrawerContentScreen;
