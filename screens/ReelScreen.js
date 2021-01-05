import React, { useRef, useState, useEffect } from "react";
import { View, StyleSheet, Button, TouchableOpacity, Text } from "react-native";
import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";
import Swiper from "react-native-swiper";
import ReelPlayer from "../components/ReelPlayer";

import {
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  EvilIcons,
  MaterialCommunityIcons,
  Octicons,
  Entypo,
} from "@expo/vector-icons";
import SafeScreen from "../components/SafeScreen";
import { Avatar } from "react-native-paper";
// import LottieView from "lottie-react-native";
// import { useSelector, useDispatch } from "react-redux";
function ReelScreen(props) {
  const [mute, setMute] = useState(false);
  const [index, setIndex] = useState();
  const [startIndex, setStartIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pause, setPause] = useState(false);
  const [play, setPlay] = useState(false);
  const [videoRef, setVideoRef] = useState(null);
  const [like, setLike] = useState(false);
  const [videos, setVideos] = useState([
    { id: 0, videoUrl: require("../assets/videos/first.mp4"), name: "first" },
    { id: 1, videoUrl: require("../assets/videos/second.mp4"), name: "second" },
    { id: 2, videoUrl: require("../assets/videos/third.mp4"), name: "third" },
  ]);
  // const [animation, setAnimation] = useState();

  // const theme = useSelector((state) => state.themeReducers.theme);
  // const [playing, setPlaying] = useState(false);
  // const play = () => {
  //   setPlaying(true);
  // };
  // const pause = () => {
  //   setPlaying(false);
  // };
  // const toggle = (index) => {
  //   playing ? setPlaying(false) : setPlaying(true);
  // };
  const onLike = () => {
    if (!like) setLike(true);
    else setLike(false);
  };
  const mutefunc = () => {
    setMute(!mute);
  };
  const playPause = async () => {
    await videoRef.pauseAsync();
  };
  const onIndexChange = (index) => {
    setCurrentIndex(index);
    setPlay(true);
  };
  // const resetAnimation = () => {
  //   animation.reset();
  //   animation.play();
  // };
  return (
    <SafeScreen>
      <View style={styles.view}>
        <Swiper
          horizontal={false}
          showsPagination={false}
          loop={false}
          index={0}
          onIndexChanged={(e) => {
            setCurrentIndex(e);
          }}
        >
          {videos.map((item) => (
            <View key={item.id}>
              <View>
                <Video
                  ref={(ref) => setVideoRef(ref)}
                  source={item.videoUrl}
                  rate={1.0}
                  volume={1.0}
                  isMuted={mute}
                  resizeMode="cover"
                  shouldPlay={currentIndex === item.id}
                  isLooping
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
              <View
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                }}
              >
                <View
                  style={{
                    padding: 10,
                    width: "100%",
                    backgroundColor: "transparent",
                    flexDirection: "row",
                    alignItems: "center",
                    // position: "absolute",
                  }}
                >
                  <View style={{ flexGrow: 1 }}>
                    <Text style={{ color: "white", fontSize: 18 }}>Reel</Text>
                  </View>
                  <TouchableOpacity onPress={() => setMute(!mute)}>
                    <Octicons name="mute" size={30} color="white" />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  onPress={() => console.log("mute")}
                  // onPress={() => mutefunc()}
                  style={{
                    flexGrow: 1,
                    // top: 50,
                    width: "100%",
                    // height: "70%",
                    // backgroundColor: "red",
                    // position: "absolute",
                  }}
                ></TouchableOpacity>

                <View style={{ width: "100%" }}>
                  <View
                    style={{
                      // position: "absolute",
                      // bottom: 100,
                      flexDirection: "row",
                      alignItems: "center",
                      paddingHorizontal: 10,
                    }}
                  >
                    <Avatar.Image
                      size={40}
                      source={require("../assets/tpn.jpg")}
                    />
                    <Text style={{ marginHorizontal: 10, color: "white" }}>
                      tpn.64
                    </Text>
                    <Entypo name="dot-single" color="white" />
                    <TouchableOpacity onPress={() => console.log("follow")}>
                      <Text style={{ color: "white", fontSize: 16 }}>
                        Follow
                      </Text>
                    </TouchableOpacity>
                  </View>
                  {/* <View
                    style={{
                      width: "100%",
                      height: 50,
                      backgroundColor: "dodgerblue",
                    }}
                  >
                    <LottieView
                      autoPlay
                      loop
                      style={{
                        width: 40,
                        height: 40,
                      }}
                      source={require("../assets/beats.json")}
                    />
                    <View>
                      <Button
                        title="Restart Animation"
                        onPress={resetAnimation}
                      />
                    </View>
                  </View> */}
                  <View
                    style={{
                      flexDirection: "row",
                      paddingHorizontal: 10,
                      height: 40,
                      alignItems: "center",
                      // position: "absolute",
                      // bottom: 0,
                    }}
                  >
                    <View
                      style={{
                        flexGrow: 1,
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <TouchableOpacity
                        style={{ marginLeft: 10 }}
                        onPress={onLike}
                      >
                        <Ionicons
                          name="ios-heart"
                          size={30}
                          color={!like ? "silver" : "red"}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => console.log("comment")}>
                        <FontAwesome
                          style={{ marginHorizontal: 15 }}
                          name="comment"
                          size={28}
                          color="silver"
                        />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => console.log("send")}>
                        <FontAwesome5
                          name="telegram-plane"
                          size={30}
                          color="silver"
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{ marginHorizontal: 15 }}
                        onPress={() => console.log("options")}
                      >
                        <MaterialCommunityIcons
                          name="dots-vertical"
                          size={30}
                          color="silver"
                        />
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        right: 15,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => console.log("like details")}
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginRight: 10,
                        }}
                      >
                        <Ionicons
                          style={{ marginRight: 5 }}
                          name={"ios-heart"}
                          size={22}
                          color={"silver"}
                        />
                        <Text style={{ color: "silver" }}>13.8k</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => console.log("comment details")}
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <FontAwesome
                          style={{ marginRight: 5 }}
                          name="comment"
                          size={18}
                          color="silver"
                        />
                        <Text style={{ color: "silver" }}>388</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ))}
          {/* <TouchableOpacity style={{ backgroundColor: "lime", flex: 1 }}> */}
          {/* <ReelPlayer
              videoUrl={require("../assets/videos/first.mp4")}
              mute={mute}
            /> */}
          {/* </View>
          <View style={{ backgroundColor: "yellow", flex: 1 }}>
            <Text>3</Text>
          </View>
          <View style={{ backgroundColor: "dodgerblue", flex: 1 }}>
            <Text>4</Text>
          </View> */}
          {/* </TouchableOpacity> */}
        </Swiper>

        {/* <Video
        source={{ uri: "https://www.w3schools.com/html/mov_bbb.mp4" }} // Can be a URL or a local file.
        //  ref={(ref) => {
        //    this.player = ref
        //  }}                                      // Store reference
        //  onBuffer={this.onBuffer}                // Callback when remote video is buffering
        //  onError={this.videoError}               // Callback when video cannot be loaded
        style={styles.backgroundVideo}
        shouldPlay={playing}
        isLooping
        resizeMode="cover"
        isMuted
      />
      <Button title="play" onPress={play}></Button>
    <Button title="pause" onPress={pause}></Button> */}
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 100,
  },
  text: { fontSize: 24 },
  backgroundVideo: { height: 300, width: "100%" },
});

export default ReelScreen;
