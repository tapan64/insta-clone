import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import SearchHeader from "../components/SearchHeader";
import firebase from "../config/fireConfig";
import { createFilter } from "react-native-search-filter";
import { useNavigation } from "@react-navigation/native";
function SearchScreen() {
  const keysToFilter = ["name", "username"];
  const [searchText, setSearchText] = useState("");
  const [searchList, setSearchList] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .limit(30)
      .onSnapshot((docs) => {
        const list = docs.docs.map((doc) => {
          const id = doc.id;
          const data = doc.data();
          return { id, ...data };
        });
        setSearchList(list);
      });
  }, []);
  const filtered = searchList.filter(createFilter(searchText, keysToFilter));
  return (
    <View style={styles.view}>
      <SearchHeader
        navigation={navigation}
        onChange={(search) => setSearchText(search)}
      />
      <FlatList
        data={filtered}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("OtherProfile", { item })}
            style={{
              flexDirection: "row",
              height: 90,
              width: "100%",
              alignItems: "center",
              paddingHorizontal: 10,
            }}
          >
            <Image
              style={{ height: 60, width: 60, borderRadius: 30 }}
              source={{ uri: item.pic }}
            />
            <View style={{ marginHorizontal: 10 }}>
              <Text style={{ fontSize: 16 }}>{item.username}</Text>
              <Text style={{ fontSize: 16, color: "grey" }}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        style={{ width: "100%" }}
      />

      {/* <Text>SearchScreen</Text>
      {filtered.map((item) => (
        <View key={item.name}>
          <Text>{item.name}</Text>
          <Text>{item.username}</Text>
        </View>
      ))} */}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    width: "100%",
    paddingHorizontal: 10,
  },
});

export default SearchScreen;
