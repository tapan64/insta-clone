import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "../../redux/actions/themeActions";
function ThemeScreen() {
  const value = useSelector((state) => state.themeReducers.theme);
  const dispatch = useDispatch();
  return (
    <View style={styles.view}>
      <RadioButton.Group
        onValueChange={(value) => dispatch(switchTheme(value))}
        value={value}
      >
        <RadioButton.Item label="Light" value="light" />
        <RadioButton.Item label="Dark" value="dark" />
      </RadioButton.Group>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default ThemeScreen;
