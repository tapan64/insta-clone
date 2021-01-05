import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import MessagesScreen from "../screens/MessagesScreen";
import ExploreScreen from "../screens/ExploreScreen";
import ExploreHeader from "../components/ExploreHeader";
import SearchScreen from "../screens/SearchScreen";
import SearchHeader from "../components/SearchHeader";
import IgtvScreen from "../screens/Explore/IgtvScreen";
import ShopScreen from "../screens/Explore/ShopScreen";
import TravelScreen from "../screens/Explore/TravelScreen";
import OtherProfileScreen from "../screens/OtherProfileScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
function HomeStack({ navigation }) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Explore"
        component={ExploreScreen}
        options={{ headerShown: false }}
        // options={{
        //   headerTitle: (props) => (
        //     <ExploreHeader navigation={navigation} {...props} />
        //   ),
        //   headerStyle: { borderBottomWidth: 0 },
        // }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
        // options={{
        //   headerTitle: (props) => <SearchHeader {...props} />,
        // }}
      />
      <Stack.Screen name="IGTV" component={IgtvScreen} />
      <Stack.Screen name="Shop" component={ShopScreen} />
      <Stack.Screen name="Travel" component={TravelScreen} />
      <Stack.Screen
        name="OtherProfile"
        component={OtherProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
