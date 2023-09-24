import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const LightColorfulButton = ({ title, onPress, shadowColor = "#D1CDC7" }) => {
  return (
    <View style={[styles.shadow, { backgroundColor: shadowColor }]}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    borderRadius: 10,
    padding: 2, // This determines the offset of the shadow
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
  },
  buttonText: {
    fontWeight: "bold",
  },
});

export default LightColorfulButton;
