import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import {
  MaterialCommunityIcons,
  Feather,
  AntDesign,
  Entypo,
  FontAwesome5,
  Ionicons,
  Octicons,
  Foundation,
} from "@expo/vector-icons";
import { useSelector } from "react-redux";
function SettingsListItem({
  iconName,
  iconType,
  size,
  itemName,
  onPress,
  navigation,
}) {
  const theme = useSelector((state) => state.themeReducers.theme);

  switch (iconType) {
    case "mci":
      return (
        <TouchableOpacity style={styles.view} onPress={onPress}>
          {iconName && (
            <View style={styles.icon}>
              <MaterialCommunityIcons
                color={theme === "light" ? "#000" : "#fff"}
                name={iconName}
                size={size}
              />
            </View>
          )}
          <Text
            style={[
              styles.text,
              { color: theme === "light" ? "#000" : "#fff" },
            ]}
          >
            {itemName}
          </Text>
        </TouchableOpacity>
      );
    case "en":
      return (
        <TouchableOpacity style={styles.view} onPress={onPress}>
          {iconName && (
            <View style={styles.icon}>
              <Entypo
                color={theme === "light" ? "#000" : "#fff"}
                name={iconName}
                size={size}
              />
            </View>
          )}
          <Text
            style={[
              styles.text,
              { color: theme === "light" ? "#000" : "#fff" },
            ]}
          >
            {itemName}
          </Text>
        </TouchableOpacity>
      );
    case "font5":
      return (
        <TouchableOpacity style={styles.view} onPress={onPress}>
          {iconName && (
            <View style={styles.icon}>
              <FontAwesome5
                color={theme === "light" ? "#000" : "#fff"}
                name={iconName}
                size={size}
              />
            </View>
          )}
          <Text
            style={[
              styles.text,
              { color: theme === "light" ? "#000" : "#fff" },
            ]}
          >
            {itemName}
          </Text>
        </TouchableOpacity>
      );
    case "feather":
      return (
        <TouchableOpacity style={styles.view} onPress={onPress}>
          {iconName && (
            <View style={styles.icon}>
              <Feather
                color={theme === "light" ? "#000" : "#fff"}
                name={iconName}
                size={size}
              />
            </View>
          )}
          <Text
            style={[
              styles.text,
              { color: theme === "light" ? "#000" : "#fff" },
            ]}
          >
            {itemName}
          </Text>
        </TouchableOpacity>
      );
    case "ant":
      return (
        <TouchableOpacity style={styles.view} onPress={onPress}>
          {iconName && (
            <View style={styles.icon}>
              <AntDesign
                color={theme === "light" ? "#000" : "#fff"}
                name={iconName}
                size={size}
              />
            </View>
          )}
          <Text
            style={[
              styles.text,
              { color: theme === "light" ? "#000" : "#fff" },
            ]}
          >
            {itemName}
          </Text>
        </TouchableOpacity>
      );
    case "foundation":
      return (
        <TouchableOpacity style={styles.view} onPress={onPress}>
          {iconName && (
            <View style={styles.icon}>
              <Foundation
                color={theme === "light" ? "#000" : "#fff"}
                name={iconName}
                size={size}
              />
            </View>
          )}
          <Text
            style={[
              styles.text,
              { color: theme === "light" ? "#000" : "#fff" },
            ]}
          >
            {itemName}
          </Text>
        </TouchableOpacity>
      );
    case "ion":
      return (
        <TouchableOpacity style={styles.view} onPress={onPress}>
          {iconName && (
            <View style={styles.icon}>
              <Ionicons
                color={theme === "light" ? "#000" : "#fff"}
                name={iconName}
                size={size}
              />
            </View>
          )}
          <Text
            style={[
              styles.text,
              { color: theme === "light" ? "#000" : "#fff" },
            ]}
          >
            {itemName}
          </Text>
        </TouchableOpacity>
      );
    case "oct":
      return (
        <TouchableOpacity style={styles.view} onPress={onPress}>
          {iconName && (
            <View style={styles.icon}>
              <Octicons
                color={theme === "light" ? "#000" : "#fff"}
                name={iconName}
                size={size}
              />
            </View>
          )}
          <Text
            style={[
              styles.text,
              { color: theme === "light" ? "#000" : "#fff" },
            ]}
          >
            {itemName}
          </Text>
        </TouchableOpacity>
      );

    default:
      return null;
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
    justifyContent: "center",
    marginRight: 10,
    alignItems: "flex-start",
  },

  text: {
    fontSize: 18,
  },

  view: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default SettingsListItem;
