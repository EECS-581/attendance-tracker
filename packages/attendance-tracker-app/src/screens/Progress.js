/**
 * Name of code artifact: Progress Component
 * Brief description: This component renders the Progress screen, displaying a title and an image representing user progress.
 * Programmer’s name: Emma Nasseri
 * Date the code was created: 9/24/23
 * Dates the code was revised: N/A
 * Brief description of each revision & author: N/A
 * Preconditions:
 * - The component expects a `navigation` prop, typically passed from React Navigation.
 * Acceptable and unacceptable input values or types:
 * - `navigation`: Object (from React Navigation)
 * Postconditions: Renders the Progress screen UI.
 * Return values or types: JSX elements (React components)
 * Error and exception condition values or types that can occur: N/A
 * Side effects: None.
 * Invariants: N/A
 * Any known faults: N/A
 */

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import globalStyles from "../styles/globalStyles"; // Importing global styles

const Progress = ({ navigation }) => {
  // Render the Progress screen UI
  return (
    <View style={styles.container}>
      <Text style={[globalStyles.defaultFont, { fontSize: 24 }]}>Progress</Text>
      <Image
        source={require("../../assets/images/progresstemp.png")}
        style={styles.image}
      />
    </View>
  );
};

// Styling for the Progress component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: 200,
    height: 120,
    margin: 20,
  },
});

export default Progress;
