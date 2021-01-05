import React from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";

function MyText({ children, style }) {
  const theme = useSelector((state) => state.themeReducers.theme);

  return (
    <Text style={[style, { color: theme === "light" ? "#000" : "#fff" }]}>
      {children}
    </Text>
  );
}

export default MyText;
