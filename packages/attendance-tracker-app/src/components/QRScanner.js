/**
 * QRScanner.js
 *
 * This component displays a QR scanner widget with an icon and a button.
 *
 * Programmer: Emma Nasseri
 * Created on: 9/24/23
 * Dates the code was revised: N/A
 * Brief description of each revision & author: N/A
 *
 * Preconditions:
 * - `navigation` prop should be provided and should have a `navigate` function.
 * - `style` prop (optional) can be provided to customize the widget's style.
 *
 * Postconditions:
 * - Renders an icon and a button. When the button is pressed, it navigates to the "Scan" screen.
 *
 * Error and exception conditions:
 * - If `navigation` prop is not provided or doesn't have a `navigate` function, the component may not function correctly.
 *
 * Side effects:
 * - None.
 *
 * Invariants:
 * - The button will always have the title "Scan QR Code" and a powderblue shadow.
 *
 * Known faults:
 * - None.
 */

import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import LightColorfulButton from "./LightColorfulButton";
import { Ionicons } from "@expo/vector-icons";

export default function QRScanner({ navigation, style }) {
  // Render the QR scanner widget with an icon and a button
  return (
    <TouchableOpacity style={style} onPress={() => navigation.navigate("Scan")}>
      <Ionicons
        name="camera-outline"
        size={60}
        color="black"
        style={styles.icon}
      />
      <LightColorfulButton
        title="Scan QR Code"
        onPress={() => navigation.navigate("Scan")}
        shadowColor="powderblue"
      />
    </TouchableOpacity>
  );
}

// Styles for the QR scanner widget
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginBottom: 20,
  },
  icon: {
    marginRight: 10, // spacing between the icon and the button
  },
});
