import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import IgtvShopBar from "./IgtvShopBar";

function ExploreCategory({ onPress, navigation }) {
  const [categories, setCategories] = useState([
    { name: "Travel" },
    { name: "Architecture" },
    { name: "Decor" },
    { name: "Art" },
    { name: "Food" },
    { name: "Style" },
    { name: "TV & Movies" },
    { name: "DIY" },
    { name: "Music" },
    { name: "Sports" },
    { name: "Beauty" },
  ]);

  return (
    <FlatList
      horizontal
      data={categories}
      keyExtractor={(item) => item.name}
      ListHeaderComponent={<IgtvShopBar navigation={navigation} />}
      renderItem={({ item }) => (
        <View>
          <TouchableOpacity onPress={() => onPress(item)}>
            <View
              style={{
                padding: 10,
                paddingHorizontal: 20,
                marginHorizontal: 5,
                borderColor: "grey",
                borderWidth: 1,
                borderRadius: 5,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 15 }}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      showsHorizontalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  view: {},
});

export default ExploreCategory;
