/**
 * CameraButton.js
 *
 * This component is the camera button for scanning
 *
 * Programmer: Emma Nasseri
 * Created on: 10/06/23
 * Dates the code was revised: N/A
 * Brief description of each revision & author: N/A
 *
 * Preconditions:
 * - it should be on an approved page
 *
 * Postconditions:
 * - navigates to scanning screen
 *
 * Error and exception conditions:
 * - None
 *
 * Side effects:
 * - None.
 *
 * Invariants:
 * - The initial route for the stack navigator is always "Landing".
 *
 * Known faults:
 * - None.
 */

import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CameraButton = ({ onPress, visible }) => {
  if (!visible) return null;

  return (
    <TouchableOpacity style={styles.cameraButton} onPress={onPress}>
      <Ionicons name="camera" size={30} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cameraButton: {
    position: "absolute",
    top: 40,
    right: 30,
    backgroundColor: "black",
    borderRadius: 30,
    padding: 10,
    zIndex: 999, // Ensure it floats above other UI elements
  },
});

export default CameraButton;
