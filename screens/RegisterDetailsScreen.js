import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import MyScreen from "../components/MyScreen";
import { useNavigation } from "@react-navigation/native";
function RegisterDetailsScreen(props) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigation = useNavigation();
  return (
    <MyScreen>
      <View style={styles.view}>
        <Text>RegisterDetailsScreen</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setName(text)}
            secureTextEntry
            placeholder="Name"
            placeholderTextColor="#C5C5C7"
            value={name}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setUsername(text)}
            secureTextEntry
            placeholder="Username"
            placeholderTextColor="#C5C5C7"
            value={username}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#C5C5C7"
            value={password}
          />
        </View>
        {error && (
          <Text style={{ color: "red", fontSize: 16, marginBottom: 10 }}>
            {error}
          </Text>
        )}

        <TouchableOpacity
          onPress={() => console.log("Sign up")}
          style={{
            backgroundColor: "dodgerblue",
            height: 50,
            width: "100%",
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Login")}>
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
            Already have an account?{" "}
            <Text style={{ color: "white", fontWeight: "bold" }}>Log in.</Text>
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

export default RegisterDetailsScreen;
