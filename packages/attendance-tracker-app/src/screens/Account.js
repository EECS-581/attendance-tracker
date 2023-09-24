import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import globalStyles from "../styles/globalStyles";
import SolidColorButton from "../components/SolidColorButton";
import { Ionicons } from "@expo/vector-icons";

const Account = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileIconContainer}>
        <Ionicons name="person-outline" size={100} color="black" />
      </View>
      <Text style={[globalStyles.defaultFont, styles.title]}>[Username]</Text>
      <View style={styles.buttonContainer}>
        <SolidColorButton
          title="Settings"
          onPress={() => {}}
          backgroundColor="powderblue"
        />
        <SolidColorButton
          title="Help"
          onPress={() => {}}
          backgroundColor="powderblue"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  profileIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 140, // Adjust as needed
    height: 140, // Adjust as needed
    borderRadius: 70, // Half of width and height to make it circular
    borderColor: "black",
    borderWidth: 2,
    marginBottom: 40,
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    flex: 1,
    width: "30%",
    paddingVertical: 20,
  },
});

export default Account;
