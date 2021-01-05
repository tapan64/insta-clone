import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
function TestAnimation(props) {
  return (
    <View style={styles.view}>
      {/* <LottieView
        autoPlay
        loop={false}
       
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    height: 500,
    width: 250,
    borderColor: "green",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    top: 100,
    left: 100,
  },
});

export default TestAnimation;
