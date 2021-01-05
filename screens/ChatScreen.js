import React, { useCallback, useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import {
  renderActions,
  renderBubble,
  renderComposer,
  renderInputToolbar,
  renderSend,
  renderTime,
} from "../components/CustomChat";
import { useSelector } from "react-redux";
import firebase from "../config/fireConfig";
import { useRoute, useNavigation } from "@react-navigation/native";
import MyScreen from "../components/MyScreen";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
function ChatScreen(props) {
  const [messages, setMessages] = useState([]);
  const [texta, setTexta] = useState("");
  const userDetails = useSelector((state) => state.themeReducers.userDetails);
  const route = useRoute();
  const navigation = useNavigation();
  const userId = firebase.auth().currentUser.uid;
  const othersId = route.params.item.uid;
  const getChatroomId = () => {
    if (userId < othersId) return userId + othersId;
    else return othersId + userId;
  };
  const chatroomId = getChatroomId();

  //   useEffect(() => {
  //     setMessages([
  //       {
  //         _id: 1,
  //         text: "hi my name is john",
  //         createdAt: new Date(),
  //         user: {
  //           _id: 2,
  //           name: "harry receiver",
  //           avatar: require("../assets/tpn.jpg"),
  //         },
  //       },
  //     ]);
  //   }, []);

  //   const onSend = useCallback((messages = []) => {
  //     setMessages((previousMessages) =>
  //       GiftedChat.append(previousMessages, messages)
  //     );
  //   }, []);
  useEffect(() => {
    const unSubscribe = firebase
      .firestore()
      .collection("chatrooms")
      .doc(chatroomId)
      .collection("chats")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const messages = snapshot.docs.map((doc) => {
          const firebaseData = doc.data();

          const data = {
            _id: doc.id,
            text: "",
            createdAt: new Date().getTime(),
            // avatar:'',
            ...firebaseData,
          };

          if (!firebaseData.system) {
            data.user = {
              ...firebaseData.user,
              name: firebaseData.user.displayName,
              // avatar:firebaseData.user.avatar
            };
          }

          return data;
        });
        setMessages(messages);
      });

    return () => unSubscribe();
  }, []);

  const onSend = async (messages) => {
    const text = messages[0].text;

    await firebase
      .firestore()
      .collection("chatrooms")
      .doc(chatroomId)
      .collection("chats")
      .add({
        text,
        createdAt: new Date().getTime(),
        user: {
          _id: userId,
          displayName: userDetails.name,
          avatar: userDetails.pic,
        },
      });
    await firebase
      .firestore()
      .collection("chatrooms")
      .doc(chatroomId)
      .set(
        {
          latestMessage: {
            text,
            createdAt: new Date().getTime(),
          },
        },
        { merge: true }
      );
  };

  return (
    <MyScreen>
      <View
        style={{
          flexDirection: "row",
          height: 60,
          width: "100%",
          alignItems: "center",
          paddingHorizontal: 15,
        }}
      >
        <MaterialCommunityIcons
          onPress={() => navigation.goBack()}
          name="keyboard-backspace"
          size={30}
        />
        <Image
          source={{ uri: route.params.item.pic }}
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            marginHorizontal: 15,
          }}
        />

        <Text style={{ flex: 1 }}>{route.params.item.username}</Text>
        <Feather
          onPress={() => console.log("video")}
          name="video"
          size={30}
          style={{ marginHorizontal: 15 }}
        />
        <Feather onPress={() => console.log("info")} name="info" size={30} />
      </View>
      <View style={{ flex: 1, paddingBottom: 10, paddingHorizontal: 10 }}>
        <GiftedChat
          renderBubble={renderBubble}
          renderTime={renderTime}
          renderInputToolbar={renderInputToolbar}
          renderActions={renderActions}
          renderSend={renderSend}
          renderComposer={renderComposer}
          text={texta}
          onInputTextChanged={(text) => setTexta(text)}
          messages={messages}
          onSend={(messages) => onSend(messages)}
          user={{ _id: userId }}
        />
      </View>
    </MyScreen>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default ChatScreen;
