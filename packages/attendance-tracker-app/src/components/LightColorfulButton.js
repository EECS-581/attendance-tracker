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
