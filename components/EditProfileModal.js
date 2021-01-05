import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import LottieView from "lottie-react-native";
import EditProfileHeader from "./EditProfileHeader";
import MyText from "./MyText";
import Modal from "react-native-modal";
import NameModal from "./EditProfile/NameModal";
import UsernameModal from "./EditProfile/UsernameModal";
import {} from "react-redux";
import BioModal from "./EditProfile/BioModal";
import * as ImagePicker from "expo-image-picker";
import firebase from "../config/fireConfig";
function EditProfileModal({ onPress, name, pic, username, pwebsite, bio }) {
  const [nameModal, setNameModal] = useState(false);
  const [usernameModal, setUsernameModal] = useState(false);
  const [bioModal, setBioModal] = useState(false);
  const [website, setWebsite] = useState(pwebsite);
  const [imageUri, setImageUri] = useState(null);
  const [updatingImage, setUpdatingImage] = useState(false);
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    if (!result.cancelled) setImageUri(result.uri);
  };
  const changeImage = async () => {
    setUpdatingImage(true);
    const fetched = await fetch(imageUri);
    const file = await fetched.blob();
    const ref = firebase
      .storage()
      .ref(`users/${firebase.auth().currentUser.uid}/photoUrl.jpg`);

    await ref.put(file).catch((error) => console.log(error));
    const res = await ref.getDownloadURL().catch((error) => console.log(error));
    await firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .update({ pic: res })

      .catch((error) => console.log(error));
    setImageUri(null);
    setUpdatingImage(false);
  };

  return (
    <View style={{ flex: 1 }}>
      {updatingImage && (
        <LottieView
          autoPlay
          loop
          source={require("../assets/uploading.json")}
        />
      )}
      <EditProfileHeader
        pressCross={onPress}
        headerTitle="Edit Profile"
        pressDone={() => console.log("Done")}
      />
      {!updatingImage && (
        <>
          <View style={{ alignItems: "center", height: "100%", width: "100%" }}>
            {!imageUri && (
              <>
                <TouchableOpacity onPress={pickImage}>
                  <Image
                    style={{
                      height: 100,
                      width: 100,
                      margin: 10,
                      borderRadius: 50,
                    }}
                    source={{ uri: pic }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={pickImage}>
                  <Text style={{ fontSize: 18, color: "dodgerblue" }}>
                    Change Profile Photo
                  </Text>
                </TouchableOpacity>
              </>
            )}
            {imageUri && (
              <>
                <TouchableOpacity onPress={pickImage}>
                  <Image
                    style={{
                      height: 100,
                      width: 100,
                      margin: 10,
                      borderRadius: 50,
                    }}
                    source={{ uri: imageUri }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={changeImage}>
                  <Text style={{ fontSize: 18, color: "dodgerblue" }}>
                    Confirm
                  </Text>
                </TouchableOpacity>
              </>
            )}

            <View
              style={{
                width: "100%",
                paddingHorizontal: 10,
                marginVertical: 10,
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "gray" }}>Name</Text>

              <TouchableOpacity
                style={{ borderBottomColor: "silver", borderBottomWidth: 1 }}
                onPress={() => setNameModal(true)}
              >
                <Text
                  style={{ fontSize: 18, marginVertical: 5, fontWeight: "500" }}
                >
                  {name}
                </Text>
              </TouchableOpacity>
            </View>

            <NameModal
              modal={nameModal}
              closeModal={() => setNameModal(false)}
              pressDone={() => console.log("Name Done")}
              pname={name}
            />
            <View
              style={{
                width: "100%",
                paddingHorizontal: 10,
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "gray" }}>Username</Text>

              <TouchableOpacity
                style={{ borderBottomColor: "silver", borderBottomWidth: 1 }}
                onPress={() => setUsernameModal(true)}
              >
                <Text
                  style={{ fontSize: 18, marginVertical: 5, fontWeight: "500" }}
                >
                  {username}
                </Text>
              </TouchableOpacity>
            </View>
            <UsernameModal
              modal={usernameModal}
              closeModal={() => setUsernameModal(false)}
              pressDone={() => console.log("Username Done")}
              pusername={username}
            />

            <View
              style={{
                width: "100%",
                paddingHorizontal: 10,
                marginTop: 20,
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "gray" }}>Website</Text>

              <TextInput
                style={{
                  borderBottomColor: "silver",
                  borderBottomWidth: 1,
                  fontSize: 18,
                  fontWeight: "500",
                }}
                value={website}
                onChangeText={(text) => setWebsite(text)}
              />
              {/* <TouchableOpacity
            style={{ borderBottomColor: "silver", borderBottomWidth: 1 }}
            onPress={() => console.log("website")}
          >
            <Text
              style={{ fontSize: 18, marginVertical: 5, fontWeight: "500" }}
            >
              web
            </Text>
          </TouchableOpacity> */}
            </View>
            <View
              style={{
                height: 80,
                width: "100%",
                paddingHorizontal: 10,

                justifyContent: "center",
              }}
            >
              <Text style={{ color: "gray" }}>Bio</Text>

              <TouchableOpacity
                style={{ borderBottomColor: "silver", borderBottomWidth: 1 }}
                onPress={() => setBioModal(true)}
              >
                <Text
                  style={{ fontSize: 18, marginVertical: 5, fontWeight: "500" }}
                >
                  i don't wanna tell
                </Text>
              </TouchableOpacity>
            </View>
            <BioModal
              modal={bioModal}
              closeModal={() => setBioModal(false)}
              pressDone={() => console.log("Bio Done")}
              pusername={bio}
            />
            {/* <Modal
          isVisible={modal}
          onBackButtonPress={() => setModal(false)}
          backdropColor="white"
          backdropOpacity={1}
          style={{ margin: 0 }}
        >
          <View style={{ flex: 1 }}>
            <EditProfileHeader
              pressCross={() => setModal(false)}
              headerTitle="Name"
              pressDone={() => console.log("Name Done")}
            />
            <View
              style={{ backgroundColor: "blue", height: 100, width: 100 }}
            ></View>
          </View>
        </Modal> */}

            {/* <TouchableOpacity
          onPress={() => console.log("username")}
          style={{
            height: 80,
            width: "95%",
            marginVertical: 10,
            borderBottomColor: "gray",
            borderBottomWidth: 1,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "gray", marginVertical: 5 }}>Username</Text>
          <Text style={{ fontSize: 18, marginVertical: 5, fontWeight: "500" }}>
            tpn.64
          </Text>
        </TouchableOpacity> */}

            <TouchableOpacity
              onPress={() => console.log("Switch to Professional Account")}
              style={{
                height: 60,
                width: "95%",
                marginVertical: 10,
                borderBottomColor: "silver",
                borderBottomWidth: 1,
                borderTopColor: "silver",
                borderTopWidth: 1,

                justifyContent: "center",
              }}
            >
              <Text style={{ color: "dodgerblue", fontSize: 18 }}>
                Switch to Professional Account
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => console.log("Personal Information Settings")}
              style={{
                height: 60,
                width: "95%",
                marginVertical: 10,
                borderBottomColor: "silver",
                borderBottomWidth: 1,
                borderTopColor: "silver",
                borderTopWidth: 1,

                justifyContent: "center",
              }}
            >
              <Text style={{ color: "dodgerblue", fontSize: 18 }}>
                Personal Information Settings
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {},
});

export default EditProfileModal;
