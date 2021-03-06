import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Camera } from "expo-camera";
import PhotoHeader from "./PhotoHeader";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
function PhotoTab({ onPress }) {
  const [cameraPermission, setCameraPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const navigation = useNavigation();
  useEffect(() => {
    getCameraPermission();
  }, []);
  const getCameraPermission = async () => {
    const { granted } = await Camera.requestPermissionsAsync();
    setCameraPermission(granted);
  };
  const switchCamera = () => {
    type === Camera.Constants.Type.back
      ? setType(Camera.Constants.Type.front)
      : setType(Camera.Constants.Type.back);
  };
  const switchFlash = () => {
    flash === Camera.Constants.FlashMode.off
      ? setFlash(Camera.Constants.FlashMode.on)
      : setFlash(Camera.Constants.FlashMode.off);
  };

  if (cameraPermission === null) return <View />;
  if (cameraPermission === false) return alert("Need Camera Permission");
  const capture = async () => {
    const { uri } = await cameraRef.takePictureAsync();
    const imageUri = uri;
    navigation.navigate("SavePost", { imageUri });
  };

  return (
    <View style={styles.view}>
      <PhotoHeader onPress={onPress} />
      <Camera type={type} ref={(ref) => setCameraRef(ref)} flashMode={flash}>
        <View style={{ aspectRatio: 1, justifyContent: "flex-end" }}>
          <View
            style={{
              padding: 10,
              flexDirection: "row",
            }}
          >
            <TouchableOpacity onPress={() => switchCamera()}>
              <Ionicons name="ios-reverse-camera" size={30} color="white" />
            </TouchableOpacity>
            <View style={{ flex: 1 }}></View>
            {type === Camera.Constants.Type.back && (
              <TouchableOpacity onPress={() => switchFlash()}>
                <Ionicons
                  name={
                    flash === Camera.Constants.FlashMode.off
                      ? "ios-flash-off"
                      : "ios-flash"
                  }
                  size={30}
                  color="white"
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </Camera>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
        }}
      >
        <TouchableOpacity
          onPress={capture}
          style={{
            height: 100,
            width: 100,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "lightgray",
            borderRadius: 50,
          }}
        >
          <View
            style={{
              height: 60,
              width: 60,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 30,
              backgroundColor: "white",
            }}
          ></View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default PhotoTab;
