import React from "react";
import { View } from "react-native";
import PostModalTab from "./PostModalTab";

function PostModal({ onPress }) {
  return (
    <View>
      <PostModalTab onPress={onPress} />
    </View>
  );
}

export default PostModal;
