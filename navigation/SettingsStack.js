import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../screens/SettingsScreen";
import AccountScreen from "../screens/Settings/AccountScreen";
import FollowInviteScreen from "../screens/Settings/FollowInviteScreen";
import NotificationsScreen from "../screens/Settings/NotificationsScreen";
import PrivacyScreen from "../screens/Settings/PrivacyScreen";
import SecurityScreen from "../screens/Settings/SecurityScreen";
import AdsScreen from "../screens/Settings/AdsScreen";
import HelpScreen from "../screens/Settings/HelpScreen";
import AboutScreen from "../screens/Settings/AboutScreen";
import ThemeScreen from "../screens/Settings/ThemeScreen";
function SettingsStack(props) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Follow and Invite Friends"
        component={FollowInviteScreen}
        options={{ title: "Follow and Invite Friends" }}
      />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen
        name="Privacy"
        component={PrivacyScreen}
        options={{ title: "Privacy" }}
      />
      <Stack.Screen name="Security" component={SecurityScreen} />
      <Stack.Screen name="Ads" component={AdsScreen} />
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Help" component={HelpScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Theme" component={ThemeScreen} />
    </Stack.Navigator>
  );
}

export default SettingsStack;
