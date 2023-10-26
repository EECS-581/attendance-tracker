/**
 * InsightsWidget.js
 *
 * This component is a widget to be displayed on the Dashboard with insights about the user's
 *
 * Programmer: Emma Nasseri
 * Created on: 09/24/2023
 * Revised on: 09/24/2023
 *
 * Preconditions:
 * - `navigation` prop should be passed in from React Navigation's context.
 * - `style` prop should be a valid React Native style object.
 *
 * Postconditions:
 * - Navigates to the "Insights" screen when the widget or button is pressed.
 *
 * Error and exception conditions:
 * - If `navigation` or `style` prop is not provided, the component may not render correctly.
 *
 * Side effects:
 * - None.
 *
 * Invariants:
 * - The images used in this component should exist in the specified path.
 *
 * Known faults:
 * - None.
 */

import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import LightColorfulButton from "./LightColorfulButton";

const InsightsWidget = ({ navigation, style }) => {
  // Render the widget with a button and two images
  return (
    // When the widget is pressed, navigate to the "Insights" screen
    <TouchableOpacity
      style={style}
      onPress={() => navigation.navigate("Insights")}
    >
      <LightColorfulButton
        title="View Insights"
        onPress={() => navigation.navigate("Insights")}
        shadowColor="plum"
      />
      <Image
        source={require("../../assets/images/tempinsight1.png")}
        style={styles.image}
      />
      <Image
        source={require("../../assets/images/tempinsight2.png")}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

// Styles for the images displayed in the widget
const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    margin: 10,
  },
});

export default InsightsWidget;
