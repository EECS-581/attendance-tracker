import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import LightColorfulButton from "./LightColorfulButton";
import { Ionicons } from "@expo/vector-icons";

export default function QRScanner({ navigation, style }) {
  return (
    <View style={styles.container}>
      <Button title="" />
      <LightColorfulButton
        title="Scan QR Code"
        onPress={() => navigation.navigate("Scan")}
        shadowColor="powderblue"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginBottom: 20,
  },
});
