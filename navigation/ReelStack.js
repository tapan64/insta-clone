import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Namedetail from "../screens/Namedetail";
import ReelScreen from "../screens/ReelScreen";

function ReelStack(props) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Reel">
      <Stack.Screen
        name="Reel"
        component={ReelScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Namedetail" component={Namedetail} />
    </Stack.Navigator>
  );
}

export default ReelStack;
