import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  Bubble,
  Time,
  InputToolbar,
  Send,
  Composer,
  Actions,
} from "react-native-gifted-chat";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
const renderBubble = (props) => (
  <Bubble
    {...props}
    wrapperStyle={{
      left: {
        backgroundColor: "#D9D9DA",
      },
      right: {
        backgroundColor: "#3D22F8",
      },
    }}
    textStyle={{
      left: {
        color: "black",
      },
      right: {
        color: "white",
      },
    }}
  />
);
const renderTime = (props) => (
  <Time
    {...props}
    timeTextStyle={{
      left: {
        color: "#767676",
      },
      right: {
        color: "#E4E4E5",
      },
    }}
  />
);
const renderInputToolbar = (props) => (
  <InputToolbar
    {...props}
    containerStyle={{
      backgroundColor: "#E2E2E2",
      borderRadius: 30,
      justifyContent: "center",
      paddingVertical: 3,
    }}
    primaryStyle={{ alignItems: "center" }}
  />
);

const renderActions = (props) => (
  <Actions
    {...props}
    containerStyle={{
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 8,
      marginRight: 4,
      marginBottom: 0,
      backgroundColor: "#0FA9DC",
    }}
    icon={() =>
      !props.text ? (
        <MaterialIcons
          onPress={() => console.log("camera")}
          name="camera-alt"
          size={25}
          color="white"
        />
      ) : (
        <TouchableOpacity>
          <MaterialCommunityIcons
            onPress={() => console.log("sticker")}
            name="sticker-emoji"
            size={25}
            color="white"
          />
        </TouchableOpacity>
      )
    }
    // // options={
    // //   !props.text
    // //     ? {
    // //         "Choose From Library": () => {
    // //           console.log("Choose From Library");
    // //         },
    // //         Cancel: () => {
    // //           console.log("Cancel");
    // //         },
    // //       }
    // //     : {
    // //         "emoji hi": () => {
    // //           console.log("Choose From Library");
    // //         },
    // //         Cancel: () => {
    // //           console.log("Cancel");
    // //         },
    // //       }
    // // }
    // optionTintColor="#222B45"
  />
);

const renderComposer = (props) => (
  <Composer
    {...props}
    textInputStyle={{
      color: "black",
      fontSize: 18,
      paddingTop: 8.5,
      paddingHorizontal: 12,
      marginLeft: 0,
    }}
    placeholder="Message..."
    placeholderTextColor="#6B6A74"
    multiline
  />
);

const renderSend = (props) => (
  <Send
    {...props}
    disabled={!props.text}
    containerStyle={{
      height: 44,
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 10,
    }}
  >
    <Text style={{ fontSize: 20, fontWeight: "bold", color: "dodgerblue" }}>
      Send
    </Text>
  </Send>
);

export {
  renderBubble,
  renderTime,
  renderInputToolbar,
  renderActions,
  renderComposer,
  renderSend,
};
