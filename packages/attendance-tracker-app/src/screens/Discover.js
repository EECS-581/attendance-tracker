/**
 * Name of code artifact: Discover Component
 * Brief description: This component renders the Discover screen, displaying a title and a description about events.
 * Programmer’s name: Emma Nasseri
 * Date the code was created: 9/24/23
 * Dates the code was revised: N/A
 * Brief description of each revision & author: N/A
 * Preconditions:
 * - The component expects a `navigation` prop, typically passed from React Navigation.
 * Acceptable and unacceptable input values or types:
 * - `navigation`: Object (from React Navigation)
 * Postconditions: Renders the Discover screen UI.
 * Return values or types: JSX elements (React components)
 * Error and exception condition values or types that can occur: N/A
 * Side effects: N/A
 * Invariants: N/A
 * Any known faults: N/A
 */

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import globalStyles from "../styles/globalStyles"; // Importing global styles
import CameraButton from "../components/CameraButton";

const Discover = ({ navigation }) => {
  // Render the Discover screen UI
  return (
    <>
      <CameraButton navigation={navigation} visible={true} />
      <View style={styles.container}>
        <Text style={[globalStyles.defaultFont, { fontSize: 24 }]}>
          Discover
        </Text>
        <Text
          style={[globalStyles.defaultFont, { fontSize: 12 }]}
          marginTop={20}
        >
          Discover local events here, when they are listed.
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default Discover;
