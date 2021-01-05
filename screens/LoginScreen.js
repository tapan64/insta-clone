import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import firebase from "../config/fireConfig";
import MyScreen from "../components/MyScreen";
import { useNavigation } from "@react-navigation/native";
// import Dialog, { DialogContent, DialogTitle } from "react-native-popup-dialog";
function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  // const [dialog, setDialog] = useState(false);
  const navigation = useNavigation();
  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email.trim(), password.trim())
      .catch((error) => {
        Keyboard.dismiss();
        setError(error.message);
        // setDialog(true);
      });
  };
  return (
    <MyScreen>
      {/* <Dialog
        visible={dialog}
        onTouchOutside={() => setDialog(false)}
        dialogStyle={{
          backgroundColor: "#697288",
          alignItems: "center",
          justifyContent: "center",
        }}
        dialogTitle={
          <DialogTitle
            title="Login Error"
            style={{ backgroundColor: "#697288" }}
          />
        }
      >
        <DialogContent style={{}}>
          <Text>{error}</Text>
        </DialogContent>
      </Dialog> */}
      <View style={styles.view}>
        <View style={{}}>
          <Image
            source={require("../assets/instaNameWhite.png")}
            style={{ height: 60, width: 180 }}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Email"
            placeholderTextColor="#C5C5C7"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
            placeholderTextColor="#C5C5C7"
            secureTextEntry
            value={password}
          />
        </View>
        {error && (
          <Text style={{ color: "red", fontSize: 16, marginBottom: 10 }}>
            {error}
          </Text>
        )}
        <TouchableOpacity
          disabled={!email || !password}
          onPress={handleLogin}
          style={{
            height: 50,
            width: "100%",
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: !email || !password ? "#182C58" : "dodgerblue",
          }}
        >
          <Text
            style={{
              color: !email || !password ? "#6183CA" : "white",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Log in
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableWithoutFeedback onPress={() => navigation.navigate("Register")}>
        <View
          style={{
            borderTopColor: "grey",
            borderTopWidth: 0.5,
            width: "100%",
            height: 60,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: 0,
          }}
        >
          <Text style={{ color: "#6E6E7B" }}>
            Don't have and account?{" "}
            <Text style={{ color: "white", fontWeight: "bold" }}>Sign up.</Text>
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </MyScreen>
  );
}

const styles = StyleSheet.create({
  input: {
    color: "white",
  },
  inputContainer: {
    height: 50,
    margin: 20,
    width: "100%",
    paddingHorizontal: 15,
    backgroundColor: "#444856",
    justifyContent: "center",
    borderRadius: 5,
  },
  view: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25,
  },
});

export default LoginScreen;
