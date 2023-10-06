import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CameraButton = ({ onPress }) => {
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
