/**
 * ProgressWidget.js
 *
 * This component displays a progress widget with an image and a button.
 *
 * Programmer: Emma Nasseri
 * Created on: 9/24/23
 *
 * Preconditions:
 * - `navigation` prop should be provided and should have a `navigate` function.
 * - `style` prop (optional) can be provided to customize the widget's style.
 *
 * Postconditions:
 * - Renders an image and a button. When the button is pressed, it navigates to the "Progress" screen.
 *
 * Error and exception conditions:
 * - If `navigation` prop is not provided or doesn't have a `navigate` function, the component may not function correctly.
 *
 * Side effects:
 * - None.
 *
 * Invariants:
 * - The button will always have the title "View Progress" and a pink shadow.
 *
 * Known faults:
 * - None.
 */

import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import LightColorfulButton from "./LightColorfulButton";

const RedeemWidget = ({ navigation, style }) => {
  // Render the redeem widget with an image and a button
  return (
    <TouchableOpacity
      style={style}
      onPress={() => navigation.navigate("Insights")}
    >
      <Image
        source={require("../../assets/images/redeemtemp.png")}
        style={styles.image}
      />
      <LightColorfulButton
        title="View Progress"
        onPress={() => navigation.navigate("Redeem")}
        shadowColor="pink"
      />
    </TouchableOpacity>
  );
};

// Styles for the redeem image
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 60,
    margin: 20,
  },
});

export default RedeemWidget;
