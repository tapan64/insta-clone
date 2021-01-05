import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Camera } from "expo-camera";
import { Entypo, Ionicons } from "@expo/vector-icons";
import PhotoHeader from "./PhotoHeader";

function PostCamera({ getRef }) {
  const [cameraPermission, setCameraPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  useEffect(() => {
    getCameraPermission();
  }, []);
  const getCameraPermission = async () => {
    const { granted } = await Camera.requestPermissionsAsync();
    setCameraPermission(granted);
  };
  const switchCamera = (type) => {
    type === Camera.Constants.Type.back
      ? setType(Camera.Constants.Type.front)
      : setType(Camera.Constants.Type.back);
  };

  if (cameraPermission === null) return <View />;
  if (cameraPermission === false) return alert("Need Camera Permission");
  return (
    <Camera type={type} ref={(ref) => getRef(ref)}>
      <View style={{ aspectRatio: 1, justifyContent: "flex-end" }}>
        <View
          style={{
            padding: 10,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => switchCamera(type)}
          >
            <Ionicons name="ios-reverse-camera" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("flash")}>
            <Entypo name="flash" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </Camera>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});
export default PostCamera;
