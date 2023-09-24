import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import globalStyles from "../styles/globalStyles";
import LightColorfulButton from "../components/LightColorfulButton";

const Discover = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={[globalStyles.defaultFont, { fontSize: 24 }]}>Discover</Text>
      <Text style={[globalStyles.defaultFont, { fontSize: 12 }]} marginTop={20}>
        Events in your area eligible for tokens will be diplayed here.
      </Text>
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

export default Discover;
