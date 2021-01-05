import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  Feather,
  Foundation,
  AntDesign,
} from "@expo/vector-icons";
import HomeStack from "./HomeStack";
import NotificationStack from "./NotificationStack";
import ProfileStack from "./ProfileStack";
import ReelStack from "./ReelStack";
function TabNavigator({ navigation, route }) {
  const Tab = createBottomTabNavigator();
  const Taba = createMaterialBottomTabNavigator();
  const EmptyScreen = () => {
    return null;
  };
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "black",
        inactiveTintColor: "black",
        style: { height: 50 },
      }}

      // tabBarOptions={({ route }) => ({
      //   showLabel: route.name === "ReelStack" ? false : true,
      // })}

      // labeled={false}
      // activeColor="#2C2E31"
      // inactiveColor="#C2C4C6"
      // shifting={false}
      // barStyle={{
      //   backgroundColor: "#fff",
      //   borderTopColor: "gray",
      //   borderTopWidth: 0.5,
      // }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ReelStack"
        component={ReelStack}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name="library-music-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Emptypost"
        component={EmptyScreen}
        listeners={({ navigation }) => ({
          tabPress: (event) => {
            event.preventDefault();
            navigation.navigate("PostStack");
          },
        })}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="plus-square" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationStack"
        component={NotificationStack}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign
              name={focused ? "heart" : "hearto"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? "account" : "account-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
