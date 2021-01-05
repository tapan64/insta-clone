import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Constants from "expo-constants";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import firebase from "../config/fireConfig";
import SettingsListItem from "../components/SettingsListItem";
import { useSelector } from "react-redux";

function SettingsScreen({ navigation }) {
  const [list] = useState([
    {
      itemName: "Follow and Invite Friends",
      iconName: "account-plus-outline",
      iconType: "mci",
    },
    { itemName: "Notifications", iconName: "bell-outline", iconType: "mci" },
    { itemName: "Privacy", iconName: "lock-outline", iconType: "mci" },
    { itemName: "Security", iconName: "security", iconType: "mci" },
    { itemName: "Ads", iconName: "signal-distance-variant", iconType: "mci" },
    {
      itemName: "Account",
      iconName: "account-circle-outline",
      iconType: "mci",
    },
    { itemName: "Help", iconName: "help-circle-outline", iconType: "mci" },
    { itemName: "About", iconName: "information-outline", iconType: "mci" },
    { itemName: "Theme", iconName: "chart-bubble", iconType: "mci" },
  ]);
  const theme = useSelector((state) => state.themeReducers.theme);
  const userDetails = useSelector((state) => state.themeReducers.userDetails);

  const handleLogOut = () => {
    firebase.auth().signOut();
  };
  return (
    <View
      style={[
        styles.view,
        { backgroundColor: theme === "light" ? "#fff" : "#000" },
      ]}
    >
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ paddingHorizontal: 15 }}
          data={list}
          keyExtractor={(item) => item.itemName}
          renderItem={({ item }) => (
            <SettingsListItem
              iconType={item.iconType}
              navigation={navigation}
              iconName={item.iconName}
              itemName={item.itemName}
              onPress={() => navigation.navigate(item.itemName)}
              size={30}
            />
          )}
          ListHeaderComponent={
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                height: 50,
              }}
            >
              <MaterialIcons
                style={{
                  marginHorizontal: 10,
                  alignSelf: "center",
                  color: theme === "light" ? "#000" : "#fff",
                }}
                name="search"
                size={30}
              />
              <TextInput
                style={{
                  borderBottomColor: "dodgerblue",
                  borderBottomWidth: 1,
                  width: "100%",
                  paddingHorizontal: 5,
                }}
                placeholder="Search"
                placeholderTextColor="gray"
              />
            </View>
          }
          ListFooterComponent={
            <>
              <Text
                style={{
                  marginVertical: 5,
                  fontSize: 18,
                }}
              >
                Logins
              </Text>
              <TouchableOpacity
                onPress={() => console.log("hey")}
                style={{
                  height: 40,
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "dodgerblue", fontSize: 18 }}>
                  Set up Multi-Account Login
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => console.log("hey")}
                style={{
                  height: 40,
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "dodgerblue", fontSize: 18 }}>
                  Add Account
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => firebase.auth().signOut()}
                style={{
                  height: 40,
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "dodgerblue", fontSize: 18 }}>
                  Log Out {userDetails.username}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => console.log("hey")}
                style={{
                  height: 40,
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "dodgerblue", fontSize: 18 }}>
                  Log Out All Accounts
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  height: 100,
                  paddingHorizontal: 15,
                  paddingTop: 15,
                  paddingBottom: 30,
                  backgroundColor: "#ECECEC",
                  borderTopColor: "gray",
                  borderTopWidth: 0.5,
                }}
              >
                <Text style={{ color: "gray" }}>from</Text>
                <Text style={{ fontWeight: "bold" }}>FACEBOOK</Text>
              </View>
            </>
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
  },
});

export default SettingsScreen;
