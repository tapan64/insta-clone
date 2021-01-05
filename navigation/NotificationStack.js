import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Namedetail from "../screens/Namedetail";
import NotificationScreen from "../screens/NotificationScreen";
import test from "../screens/test";
import TestAnimation from "../screens/TestAnimation";

function NotificationStack(props) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Notification">
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{ title: "Activity" }}
      />
      <Stack.Screen name="Namedetail" component={Namedetail} />
      <Stack.Screen name="TestAnimation" component={TestAnimation} />
      <Stack.Screen
        name="Test"
        component={test}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default NotificationStack;
