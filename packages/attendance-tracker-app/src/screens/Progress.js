import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import globalStyles from "../styles/globalStyles";

const Progress = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={[globalStyles.defaultFont, { fontSize: 24 }]}>Progress</Text>
      <Image
        source={require("../../assets/images/progresstemp.png")}
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

  image: {
    width: 200,
    height: 120,
    margin: 20,
  },
});

export default Progress;
