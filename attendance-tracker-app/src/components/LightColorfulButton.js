/**
 * LightColorfulButton.js
 *
 * This component displays a button with a light colorful shadow.
 *
 * Programmer: Emma Nasseri
 * Created on: 9/24/23
 * Revised on: 9/42/23
 *
 * Revision Description:
 * - N/A
 *
 * Preconditions:
 * - `title` prop should be a string representing the button's label.
 * - `onPress` prop should be a function that gets called when the button is pressed.
 * - `shadowColor` prop (optional) should be a valid color string. Defaults to "#D1CDC7".
 *
 * Postconditions:
 * - Renders a button with the provided title and shadow color.
 *
 * Error and exception conditions:
 * - If `title` or `onPress` prop is not provided, the component may not function correctly.
 *
 * Side effects:
 * - None.
 *
 * Invariants:
 * - The button will always have a black border and white background.
 *
 * Known faults:
 * - None.
 */

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const LightColorfulButton = ({ title, onPress, shadowColor = "#D1CDC7" }) => {
  // Render the button with a shadow
  return (
    // The shadow view with customizable color
    <View style={[styles.shadow, { backgroundColor: shadowColor }]}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles for the button and its shadow
const styles = StyleSheet.create({
  shadow: {
    borderRadius: 10,
  },
  button: {
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 3,
    marginRight: 3,
  },
  buttonText: {
    fontWeight: "bold",
  },
});

export default LightColorfulButton;
