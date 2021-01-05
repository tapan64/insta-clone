import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

function ProfileDetail({
  navigation,
  photoUrl,
  name,
  followers,
  following,
  posts,
  bio,
}) {
  return (
    <View style={styles.view}>
      <View
        style={{
          flexDirection: "row",
          paddingTop: 10,
        }}
      >
        <View
          style={{
            paddingLeft: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={{ uri: photoUrl }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 20 }}>{posts}</Text>
            <Text style={styles.text}>Posts</Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Followlist", {
                initialRouteName: "FollowersTab",
                followers,
                following,
              })
            }
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginHorizontal: 20,
            }}
          >
            <Text style={{ fontSize: 20 }}>{followers}</Text>
            <Text style={styles.text}>Followers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Followlist", {
                initialRouteName: "FollowingTab",
                followers,
                following,
              })
            }
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Text style={{ fontSize: 20 }}>{following}</Text>
            <Text style={styles.text}>Following</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ paddingLeft: 20, paddingVertical: 10 }}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{bio}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {},
  text: {
    fontSize: 16,
  },
});

export default ProfileDetail;
