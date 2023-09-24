/**
 * Name of code artifact: Insights Component
 * Brief description: This component renders the Insights screen, displaying a title and two images.
 * Programmer’s name: Emma Nasseri
 * Date the code was created: 9/24/23
 * Dates the code was revised: N/A
 * Brief description of each revision & author: N/A
 * Preconditions:
 * - The component expects a `navigation` prop, typically passed from React Navigation.
 * Acceptable and unacceptable input values or types:
 * - `navigation`: Object (from React Navigation)
 * Postconditions: Renders the Insights screen UI.
 * Return values or types: JSX elements (React components)
 * Error and exception condition values or types that can occur: N/A
 * Side effects: N/A
 * Invariants: N/A
 * Any known faults: N/A
 */

import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import globalStyles from "../styles/globalStyles"; // Importing global styles

const Insights = ({ navigation }) => {
  // Render the Insights screen UI
  return (
    <View style={styles.container}>
      <Text style={[globalStyles.defaultFont, { fontSize: 24 }]}>Insights</Text>

      <Image
        source={require("../../assets/images/tempinsight1.png")}
        style={styles.image}
      />

      <Image
        source={require("../../assets/images/tempinsight2.png")}
        style={styles.image}
      />
    </View>
  );
};

// Styling for the Insights component
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
  image: {
    height: 100,
    width: 100,
    margin: 30,
  },
});

export default Insights;
