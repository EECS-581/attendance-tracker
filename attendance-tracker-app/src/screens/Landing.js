import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Landing = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Landing</Text>
      <Button
        title="Get Started"
        onPress={() => {
          // Navigate to another screen or perform any other action
          // For example: navigation.navigate('Dashboard');
        }}
      />
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
});

export default Landing;
