import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PostScreen from "../screens/PostScreen";
import SavePostScreen from "../screens/SavePostScreen";

function PostStack({ navigation }) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Post">
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SavePost" component={SavePostScreen} />
    </Stack.Navigator>
  );
}

export default PostStack;
