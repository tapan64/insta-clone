import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MyScreen from "../components/MyScreen";
import firebase from "../config/fireConfig";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FollowingTab from "./FollowingTab";
import FollowersTab from "./FollowersTab";

function FollowingScreen(props) {
  const [loaded, setLoaded] = useState(false);
  const Tab = createMaterialTopTabNavigator();
  const navigation = useNavigation();
  const route = useRoute();
  const userDetails = useSelector((state) => state.themeReducers.userDetails);

  return (
    <MyScreen>
      <View
        style={{
          height: 60,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 15,
        }}
      >
        <MaterialCommunityIcons
          onPress={() => navigation.goBack()}
          name="keyboard-backspace"
          size={30}
        />
        <Text style={{ marginLeft: 20, fontSize: 22, flex: 1 }}>
          {userDetails.username}
        </Text>
      </View>
      <Tab.Navigator
        tabBarOptions={{ indicatorStyle: { backgroundColor: "black" } }}
        initialRouteName={route.params.initialRouteName}
      >
        <Tab.Screen
          name="FollwersTab"
          component={FollowersTab}
          options={{
            tabBarLabel: ({ color, focused }) => (
              <Text
                style={{
                  color: color,
                }}
              >
                {route.params.followers} Followers
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="FollowingTab"
          component={FollowingTab}
          options={{
            tabBarLabel: ({ color, focused }) => (
              <Text
                style={{
                  color: color,
                }}
              >
                {route.params.following} Following
              </Text>
            ),
          }}
        />
      </Tab.Navigator>
      {/* <Text>FollowingScreen</Text>
      {arr.map((item) => (
        <Text key={item.name}>{item.name}</Text>
      ))} */}
      {/* <FlatList
        data={arr}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      /> */}
    </MyScreen>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FollowingScreen;
