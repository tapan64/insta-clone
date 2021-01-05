import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import SettingsListItem from "../../components/SettingsListItem";

function AccountScreen(props) {
  const [list] = useState([
    { itemName: "Personal Information", iconType: "mci" },
    { itemName: "Your Activity", iconType: "mci" },
    { itemName: "Saved", iconType: "mci" },
    { itemName: "Close Friends", iconType: "mci" },
    { itemName: "Language", iconType: "mci" },
    { itemName: "Captions", iconType: "mci" },
    { itemName: "Browser Autofill", iconType: "mci" },
    { itemName: "contacts Syncing", iconType: "mci" },
    { itemName: "Linked Accounts", iconType: "mci" },
    { itemName: "Cellular Data Use", iconType: "mci" },
    { itemName: "Original Posts", iconType: "mci" },
    { itemName: "Request Verification", iconType: "mci" },
    { itemName: "Posts You've Liked", iconType: "mci" },
    { itemName: "Branded Content Tools", iconType: "mci" },
  ]);
  return (
    <View style={styles.view}>
      <FlatList
        data={list}
        keyExtractor={(item) => item.itemName}
        renderItem={({ item }) => (
          <SettingsListItem
            iconType={item.iconType}
            itemName={item.itemName}
            onPress={() => console.log(item.itemName)}
          />
        )}
        ListFooterComponent={
          <TouchableOpacity
            style={{
              height: 60,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 15,
            }}
            onPress={() => console.log("Switch to Professional Account")}
          >
            <Text style={{ fontSize: 18, color: "dodgerblue" }}>
              Switch to Professional Account
            </Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
  },
});

export default AccountScreen;
