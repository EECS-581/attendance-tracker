import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import globalStyles from "../styles/globalStyles";

const Account = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={[globalStyles.defaultFont, styles.title]}>Account</Text>
      <View style={styles.buttonContainer}>
        <Button title="Button 1" onPress={() => {}} />
        <Button title="Button 2" onPress={() => {}} />
        <Button title="Button 3" onPress={() => {}} />
        <Button title="Button 4" onPress={() => {}} />
        <Button title="Button 5" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "space-between",
    width: "80%", // You can adjust this as needed
    paddingVertical: 20, // Padding at the top and bottom
  },
});

export default Account;
