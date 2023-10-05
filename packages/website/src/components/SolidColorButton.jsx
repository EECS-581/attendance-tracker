/**
 * SolidColorButton.jsx
 *
 * This component renders a button with customizable background and text colors.
 *
 * Programmer: Emma Nasseri
 * Created on: 9/25/23
 * Dates the code was revised: N/A
 * Brief description of each revision & author: N/A
 *
 * Preconditions:
 * - `title` prop should be provided to display the button's label.
 * - `onPress` prop should be provided to handle the button press event.
 * - `backgroundColor` prop (optional) can be provided to customize the button's background color. Default is "plum".
 * - `textColor` prop (optional) can be provided to customize the button's text color. Default is "black".
 *
 * Postconditions:
 * - Renders a button with the provided title, background color, and text color.
 *
 * Error and exception conditions:
 * - If `title` or `onPress` prop is not provided, the component may not function correctly.
 *
 * Side effects:
 * - None.
 *
 * Invariants:
 * - The button will always have a black border and bold text.
 *
 * Known faults:
 * - None.
 */

import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const SolidColorButton = ({
  title,
  onPress,
  backgroundColor = "plum",
  textColor = "black",
}) => {
  // Render the button with customizable background and text colors
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

// Styles for the SolidColorButton component
const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  buttonText: {
    fontWeight: "bold",
  },
});

export default SolidColorButton;
