import { firestore } from "firebase";
import React, { useState } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
const initialLayout = { width: Dimensions.get("window").width };
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ExploreCategory from "../components/ExploreCategory";
import ExploreHeader from "../components/ExploreHeader";
import Constants from "expo-constants";
function ExploreScreen({ navigation }) {
  return (
    <View style={styles.view}>
      <ExploreHeader navigation={navigation} />
      <ExploreCategory
        navigation={navigation}
        onPress={(item) => navigation.navigate(item.name)}
      />
      {/* <LottieView
        source={require("../assets/9809-loading.json")}
        autoPlay
        loop
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});

export default ExploreScreen;
