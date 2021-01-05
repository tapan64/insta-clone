import React, { useState } from "react";
import { TabBar, TabView, SceneMap } from "react-native-tab-view";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  TextInput,
  Dimensions,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import firebase from "../config/fireConfig";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import GalleryTab from "../components/PostTabs/GalleryTab";
import PhotoTab from "../components/PostTabs/PhotoTab";
import VideoTab from "../components/PostTabs/VideoTab";
import SafeScreen from "../components/SafeScreen";
function PostScreen({ navigation, route }) {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "gallery",
      title: "GALLERY",
    },
    {
      key: "photo",
      title: "PHOTO",
    },
    {
      key: "video",
      title: "VIDEO",
    },
  ]);
  const GalleryTabWithOnPress = () => {
    return <GalleryTab onPress={() => navigation.goBack()} />;
  };
  const PhotoTabWithOnPress = () => {
    return (
      <PhotoTab
        onPress={() => navigation.goBack()}
        navigation={navigation}
        route={route}
      />
    );
  };
  const VideoTabWithOnPress = () => {
    return <VideoTab onPress={() => navigation.goBack()} />;
  };
  const renderScene = SceneMap({
    gallery: GalleryTabWithOnPress,
    photo: PhotoTabWithOnPress,
    video: VideoTabWithOnPress,
  });
  // const [imageUri, setImageUri] = useState();
  // const [description, setDescription] = useState();
  // const pickImage = async () => {
  //   const result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //   });
  //   if (!result.cancelled) setImageUri(result.uri);
  // };

  // const post = async () => {
  //   Keyboard.dismiss();
  //   const fetched = await fetch(imageUri);
  //   const file = await fetched.blob();
  //   const ref = firebase
  //     .storage()
  //     .ref(`users/${firebase.auth().currentUser.uid}/${Date.now()}.jpg`);
  //   await ref.put(file).catch((error) => console.log(error));
  //   const res = await ref.getDownloadURL().catch((error) => console.log(error));
  //   const timestamp = Date.now();
  //   await firebase
  //     .firestore()
  //     .collection("users")
  //     .doc(`${firebase.auth().currentUser.uid}`)
  //     .collection("posts")
  //     .doc(`${timestamp}`)
  //     .set({
  //       timestamp: timestamp,
  //       pic: res,
  //       description: description,
  //     })
  //     .catch((error) => console.log(error));
  //   setImageUri(null);
  //   setDescription(null);
  //   alert("Done");
  // };

  // const deleteImage = () => {
  //   setImageUri(null);
  // };
  return (
    <SafeScreen>
      <TabView
        renderScene={renderScene}
        initialLayout={{ width: Dimensions.get("window").width }}
        onIndexChange={setIndex}
        navigationState={{ index, routes }}
        tabBarPosition="bottom"
        renderTabBar={(props) => (
          <TabBar
            {...props}
            labelStyle={{ color: "black" }}
            indicatorStyle={{ backgroundColor: "#2C2C2C" }}
            style={{ backgroundColor: "white" }}
          />
        )}
      />
    </SafeScreen>
    // <View style={styles.view}>
    //   {imageUri && (
    //     <View
    //       style={{
    //         height: 200,
    //         width: 350,
    //         borderRadius: 20,
    //         overflow: "hidden",
    //       }}
    //     >
    //       <ImageBackground
    //         style={{ height: 200, borderRadius: 20 }}
    //         source={{ uri: imageUri }}
    //       >
    //         <TouchableWithoutFeedback onPress={deleteImage}>
    //           <View style={{ alignSelf: "flex-end", right: 2, top: 2 }}>
    //             <Entypo name="cross" size={40} color="#666769" />
    //           </View>
    //         </TouchableWithoutFeedback>
    //       </ImageBackground>
    //     </View>
    //   )}
    //   {!imageUri && (
    //     <TouchableOpacity onPress={pickImage}>
    //       <View
    //         style={{
    //           height: 200,
    //           width: 350,
    //           backgroundColor: "#F6B5F8",
    //           alignItems: "center",
    //           justifyContent: "center",
    //           borderRadius: 15,
    //         }}
    //       >
    //         <MaterialCommunityIcons name="camera" size={70} color="#494D51" />
    //       </View>
    //     </TouchableOpacity>
    //   )}
    //   <View
    //     style={{
    //       flexDirection: "row",
    //       width: 350,
    //       marginVertical: 10,
    //       alignItems: "center",
    //     }}
    //   >
    //     <Image
    //       style={{
    //         height: 60,
    //         width: 60,
    //         borderRadius: 30,
    //         marginRight: 10,
    //       }}
    //       source={require("../assets/tpn.jpg")}
    //     />
    //     <TextInput
    //       style={{
    //         marginVertical: 10,
    //         borderColor: "#494D51",
    //         borderWidth: 1,
    //         borderRadius: 15,
    //         paddingHorizontal: 10,
    //         fontSize: 18,
    //         height: 70,
    //         width: 280,
    //       }}
    //       onChangeText={(text) => setDescription(text)}
    //       value={description}
    //       multiline
    //     />
    //   </View>
    //   <TouchableOpacity
    //     style={{
    //       width: 150,
    //       height: 40,
    //       alignItems: "center",
    //       justifyContent: "center",
    //       borderRadius: 20,
    //       backgroundColor: "dodgerblue",
    //     }}
    //     onPress={post}
    //   >
    //     <Text style={{ color: "#43437D", fontSize: 18, fontWeight: "bold" }}>
    //       Post
    //     </Text>
    //   </TouchableOpacity>
    // </Modal>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PostScreen;
