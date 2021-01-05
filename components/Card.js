import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Button,
} from "react-native";
import {
  Feather,
  FontAwesome5,
  Ionicons,
  EvilIcons,
  Octicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import ModalOption from "./ModalOption";
import Modal from "react-native-modal";
function Card({ name, place, pic, imageUri, description, post, navigation }) {
  const [modal, setModal] = useState(false);
  const [like, setLike] = useState(false);
  const onLike = () => {
    if (!like) setLike(true);
    else setLike(false);
  };
  return (
    <View style={styles.view}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log("profile photo")}>
          <Image style={styles.profilePic} source={{ uri: pic }} />
        </TouchableOpacity>
        <View style={{ left: 20, flexGrow: 1 }}>
          <TouchableOpacity onPress={() => console.log(post.name)}>
            <Text style={{ fontSize: 20, fontWeight: "600" }}>{name}</Text>
          </TouchableOpacity>
          {place && (
            <Text style={{ marginTop: -5, fontSize: 16, color: "#0971DE" }}>
              {place}
            </Text>
          )}
        </View>
        <TouchableOpacity onPress={() => setModal(true)}>
          <MaterialCommunityIcons name="dots-vertical" size={30} />
        </TouchableOpacity>

        <Modal
          onBackButtonPress={() => setModal(false)}
          onBackdropPress={() => setModal(false)}
          style={{ margin: 0 }}
          isVisible={modal}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <View
              style={{
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                backgroundColor: "#fff",
                width: "100%",
                alignItems: "center",
                paddingBottom: 10,
              }}
            >
              <View
                style={{
                  margin: 10,
                  width: 35,
                  height: 5,
                  backgroundColor: "gray",
                  borderRadius: 35,
                }}
              />
              <ModalOption option="Report..." />
              <ModalOption option="Turn on Post Notifications" />
              <ModalOption option="Copy Link" />
              <ModalOption option="Share to..." />
              <ModalOption option="Unfollow" />
              <ModalOption option="Mute" />
            </View>
          </View>
        </Modal>
      </View>
      <Image style={styles.image} source={{ uri: imageUri }} />
      <View style={styles.footer}>
        <View
          style={{ flexGrow: 1, flexDirection: "row", alignItems: "center" }}
        >
          <TouchableOpacity onPress={onLike}>
            <Ionicons
              name={!like ? "ios-heart-empty" : "ios-heart"}
              size={30}
              color={!like ? null : "red"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("comment")}>
            <EvilIcons
              style={{ marginHorizontal: 10 }}
              name="comment"
              size={40}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("send")}>
            <FontAwesome5 name="telegram-plane" size={30} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => console.log("bookmark")}>
          <Feather name="bookmark" size={30} />
        </TouchableOpacity>
      </View>
      {description && (
        <View style={styles.description}>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 20,
              marginHorizontal: 10,
            }}
          >
            {name}
          </Text>
          <View style={{ width: 300 }}>
            <Text style={{ color: "#4C555E", fontSize: 18 }}>
              {description}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  description: {
    flexDirection: "row",
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    height: 40,
    backgroundColor: "white",
    alignItems: "center",
  },
  header: {
    height: 50,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 1,
  },
  image: {
    width: "100%",
    height: 300,
  },
  profilePic: {
    left: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  view: {
    borderRadius: 10,
    overflow: "hidden",
    width: "100%",
    marginVertical: 10,
  },
});

export default Card;
