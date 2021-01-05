import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "../screens/ProfileScreen";
import Archive from "../screens/DrawerContents/Archive";
import YourActivity from "../screens/DrawerContents/YourActivity";
import Saved from "../screens/DrawerContents/Saved";
import SettingsStack from "./SettingsStack";
import FollowlistScreen from "../screens/FollowlistScreen";
import OtherProfileScreen from "../screens/OtherProfileScreen";
function ProfileStack(props) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Archive" component={Archive} />
      <Stack.Screen name="Your Activity" component={YourActivity} />
      <Stack.Screen name="Saved" component={Saved} />
      <Stack.Screen
        name="Followlist"
        component={FollowlistScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{ title: "Settings" }}
      />
      <Stack.Screen
        name="OtherProfilefromProfile"
        component={OtherProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default ProfileStack;
