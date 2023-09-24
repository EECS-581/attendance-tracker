import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import globalStyles from "../styles/globalStyles";

const Insights = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={[globalStyles.defaultFont, { fontSize: 24 }]}>Insights</Text>
      <Image
        source={require("../../assets/images/tempinsight1.png")}
        style={styles.image}
      />
      <Image
        source={require("../../assets/images/tempinsight2.png")}
        style={styles.image}
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
  image: {
    height: 100,
    width: 100,
    margin: 30,
  },
});

export default Insights;
