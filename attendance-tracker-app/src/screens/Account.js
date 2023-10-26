/**
 * Name of code artifact: Account Component
 *
 * Brief description: This component renders the Account screen, displaying a profile icon, username, and buttons for settings and help.
 * Programmer’s name: Emma Nasseri
 * Date the code was created: 9/24/23
 * Dates the code was revised: N/A
 * Brief description of each revision & author: N/A
 *
 * Preconditions:
 * - The component expects a `navigation` prop, typically passed from React Navigation.
 *
 *  Acceptable and unacceptable input values or types:
 * - `navigation`: Object (from React Navigation)
 *
 * Postconditions: Renders the Account screen UI.
 * Return values or types: JSX elements (React components)
 * Error and exception condition values or types that can occur: N/A
 * Side effects: N/A
 * Invariants: N/A
 * Any known faults: N/A
 */

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import globalStyles from "../styles/globalStyles";
import SolidColorButton from "../components/SolidColorButton";
import { Ionicons } from "@expo/vector-icons";

const Account = ({ navigation }) => {
  // Render the Account screen UI
  return (
    <View style={styles.container}>
      <View style={styles.profileIconContainer}>
        <Ionicons name="person-outline" size={100} color="black" />
      </View>

      <Text style={[globalStyles.defaultFont, styles.title]}>[Username]</Text>

      <View style={styles.buttonContainer}>
        <SolidColorButton
          title="Manage Classes"
          onPress={() => {}}
          backgroundColor="powderblue"
        />
        <SolidColorButton
          title="Manage Account"
          onPress={() => {}}
          backgroundColor="powderblue"
        />
      </View>
    </View>
  );
};

// Styles for the Account component
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
    width: 140,
    height: 140,
    borderRadius: 70,
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
    width: "50%",
    paddingVertical: 20,
  },
});

export default Account;
