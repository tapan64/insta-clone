import React, { useState } from "react";
import { Dimensions } from "react-native";
import { TabBar, TabView, SceneMap } from "react-native-tab-view";
import GalleryTab from "./PostTabs/GalleryTab";
import PhotoTab from "./PostTabs/PhotoTab";
import VideoTab from "./PostTabs/VideoTab";

function PostModalTab({ onPress }) {
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
    return <GalleryTab onPress={onPress} />;
  };
  const PhotoTabWithOnPress = () => {
    return <PhotoTab onPress={onPress} />;
  };
  const VideoTabWithOnPress = () => {
    return <VideoTab onPress={onPress} />;
  };
  const renderScene = SceneMap({
    gallery: GalleryTabWithOnPress,
    photo: PhotoTabWithOnPress,
    video: VideoTabWithOnPress,
  });
  return (
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
  );
}

export default PostModalTab;
