import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppStack from "./AppStack";

import DrawerContentScreen from "../screens/DrawerContentScreen";

import QRCode from "../screens/DrawerContents/QRCode";

import CloseFriends from "../screens/DrawerContents/CloseFriends";
import DiscoverPeople from "../screens/DrawerContents/DiscoverPeople";

function DrawerNavigator(props) {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType="slide"
        drawerPosition="right"
        drawerStyle={{
          width: "66%",
        }}
        screenOptions={{ swipeEnabled: false }}
        drawerContent={(props) => <DrawerContentScreen {...props} />}
        drawerContentOptions={{}}
      >
        <Drawer.Screen name="App" component={AppStack} />
        <Drawer.Screen name="QR Code" component={QRCode} />
        <Drawer.Screen name="Close Friends" component={CloseFriends} />
        <Drawer.Screen name="Discover People" component={DiscoverPeople} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigator;
