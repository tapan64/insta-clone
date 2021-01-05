import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import RegisterDetailsScreen from "../screens/RegisterDetailsScreen";

function AuthNavigator(props) {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            animationEnabled: false,
          }}
        />
        {/* <Stack.Screen
          name="RegisterDetails"
          component={RegisterDetailsScreen}
          options={{
            animationEnabled: false,
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthNavigator;
