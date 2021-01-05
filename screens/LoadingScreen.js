import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import firebase from "../config/fireConfig";
import AuthNavigator from "../navigation/AuthNavigator";
import DrawerNavigator from "../navigation/DrawerNavigator";
function LoadingScreen(props) {
  const [loaded, setLoaded] = useState(false);
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setLoaded(true);
        setLogged(false);
      } else {
        setLoaded(true);
        setLogged(true);
      }
    });
  });
  if (!loaded)
    return (
      <View style={styles.view}>
        <Image source={require("../assets/insta_splash.jpg")} />
      </View>
    );
  if (!logged) return <AuthNavigator />;
  return <DrawerNavigator />;
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoadingScreen;
