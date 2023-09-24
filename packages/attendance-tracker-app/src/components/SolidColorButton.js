import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const SolidColorButton = ({
  title,
  onPress,
  backgroundColor = "plum",
  textColor = "black",
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

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
