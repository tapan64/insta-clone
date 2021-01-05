import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import Constants from "expo-constants";
import MessagesHeader from "../components/MessagesHeader";
import { useSelector } from "react-redux";
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";
import firebase from "../config/fireConfig";
import { useNavigation } from "@react-navigation/native";
function MessagesScreen() {
  const userDetails = useSelector((state) => state.themeReducers.userDetails);
  const [fakedata, setFakedata] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    getUsersList();
  }, []);
  const getUsersList = async () => {
    const userId = firebase.auth().currentUser.uid;
    firebase
      .firestore()
      .collection("users")

      .get()
      .then((docs) => {
        let a = [];
        docs.forEach((doc) => {
          if (doc.data().uid && doc.data().uid !== userId) a.push(doc.data());
        });
        setFakedata(a);
      });
  };
  return (
    <View style={styles.view}>
      <MessagesHeader navigation={navigation} username={userDetails.username} />

      <FlatList
        data={fakedata}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Chat", { item})}
            style={{
              flexDirection: "row",
              paddingHorizontal: 15,
              height: 80,
              width: "100%",
              marginVertical: 7,
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: item.pic }}
              style={{ height: 60, width: 60, borderRadius: 30 }}
            />
            <View style={{ flex: 1, marginHorizontal: 10 }}>
              <Text>{item.name}</Text>
            </View>
            <MaterialIcons
              onPress={() => console.log("camera to video call may be")}
              style={{}}
              name="camera-alt"
              size={30}
              color="silver"
            />
          </TouchableOpacity>
        )}
        ListHeaderComponent={() => (
          <View style={{ paddingHorizontal: 15 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("MessageSearch")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "silver",
                height: 40,
                width: "100%",
                borderRadius: 10,
                alignSelf: "center",
                paddingHorizontal: 10,
              }}
            >
              <EvilIcons name="search" size={30} color="#4E4E4E" />
              <Text
                style={{
                  fontSize: 18,
                  color: "#4E4E4E",
                  marginHorizontal: 10,
                }}
              >
                Search
              </Text>
            </TouchableOpacity>

            <Text
              style={{ fontSize: 18, fontWeight: "600", marginVertical: 20 }}
            >
              Messages
            </Text>
          </View>
        )}
      />
      <TouchableOpacity
        onPress={() => console.log("Camera")}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: 55,
          width: "100%",
          position: "absolute",
          bottom: 0,
          borderTopColor: "silver",
          borderTopWidth: 0.2,
        }}
      >
        <MaterialIcons
          style={{ marginRight: 5 }}
          name="camera-alt"
          size={30}
          color="dodgerblue"
        />
        <Text
          style={{
            fontSize: 16,
            color: "dodgerblue",
            fontWeight: "bold",
            marginLeft: 5,
          }}
        >
          Camera
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    paddingBottom: 55,
  },
});

export default MessagesScreen;
