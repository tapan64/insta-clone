import React from "react";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProfilePosts from "./ProfilePosts";
import TagPosts from "./TagPosts";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
function ProfileTab({ id }) {
  const Tab = createMaterialTopTabNavigator();
  const ProfilePostswithId = () => <ProfilePosts id={id} />;
  const TagPostswithId = () => <TagPosts id={id} />;
  return (
    <Tab.Navigator
      tabBarOptions={{ indicatorStyle: { backgroundColor: "black" } }}
    >
      <Tab.Screen
        name="ProfilePosts"
        component={ProfilePostswithId}
        options={{
          tabBarLabel: ({ color }) => (
            <MaterialCommunityIcons name="grid" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="TagPosts"
        component={TagPostswithId}
        options={{
          tabBarLabel: ({ color }) => (
            <MaterialCommunityIcons
              name="clipboard-account-outline"
              size={30}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  view: {},
});

export default ProfileTab;
