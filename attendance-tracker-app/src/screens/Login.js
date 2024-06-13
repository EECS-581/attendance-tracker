import React, { useState } from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import globalStyles from "../styles/globalStyles.js"; // Importing global styles
import LightColorfulButton from "../components/LightColorfulButton"; // Importing the LightColorfulButton component

const { width } = Dimensions.get("window");

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Render the Dashboard screen UI
  return (
    <>
      <View style={globalStyles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            secureTextEntry={true}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.buttonContainer}>
          <LightColorfulButton
            title="Create Account"
            shadowColor="plum"
            disabled={!username || !password}
            onPress={() => {
              navigation.navigate("Tabs");
            }}
          />
        </View>
      </View>
    </>
  );
};

// Styling for the Landing component
const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: width * 0.4,
  },
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },

  buttonContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default Login;
