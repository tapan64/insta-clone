import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import PostStack from "./PostStack";
import MessagesScreen from "../screens/MessagesScreen";
import MessageSearchScreen from "../screens/MessageSearchScreen";
import ChatScreen from "../screens/ChatScreen";
function AppStack(props) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tab" component={TabNavigator} />
      <Stack.Screen name="PostStack" component={PostStack} />
      <Stack.Screen
        name="Messages"
        component={MessagesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MessageSearch"
        component={MessageSearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AppStack;
