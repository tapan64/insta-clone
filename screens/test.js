import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import { Viewport } from "@skele/components";
import { Video } from "expo-av";
function test(props) {
  const [items, setItems] = useState([
    { id: 1, videoUrl: require("../assets/videos/first.mp4"), name: "first" },
    { id: 2, videoUrl: require("../assets/videos/second.mp4"), name: "second" },
    { id: 3, videoUrl: require("../assets/videos/third.mp4"), name: "third" },
  ]);
  const [play, setPlay] = useState(false);
  const videoref = useRef(false);
  const flatref = useRef();
  const Placeholder = () => (
    <View
      style={{
        height: height - 50,
        width: "100%",
        backgroundColor: "darkgray",
      }}
    />
  );
  const ViewportAwareVideo = Viewport.Aware(
    Viewport.WithPlaceholder(Video, Placeholder)
  );
  const PRE_TRIGGER_RATIO = -0.4;
  const { height } = Dimensions.get("window");
  return (
    <View style={styles.view}>
      <Viewport.Tracker>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          snapToInterval={height - 50}
          snapToAlignment="start"
          decelerationRate="fast"
          ref={flatref}
          renderItem={({ item }) => (
            <ViewportAwareVideo
              source={item.videoUrl}
              preTriggerRatio={PRE_TRIGGER_RATIO}
              retainOnceInViewport={false}
              onViewportEnter={() => console.log("h")}
              onViewportLeave={() => console.log(item.name, "pause")}
              //   videoref={videoref}
              ref={videoref}
              resizeMode="cover"
              shouldPlay={false}
              isLooping
              style={{
                height: height - 50,
                width: "100%",
                backgroundColor: "darkgray",
              }}
            />
          )}
        />
      </Viewport.Tracker>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default test;
