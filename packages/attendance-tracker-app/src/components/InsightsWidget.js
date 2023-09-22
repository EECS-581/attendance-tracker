// InsightsWidget.js
import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

const InsightsWidget = ({ navigation, style }) => {
  return (
    <TouchableOpacity
      style={style}
      onPress={() => navigation.navigate("Insights")}
    >
      <Image
        source={require("../../assets/images/tempinsight1.png")}
        style={styles.image}
      />
      <Image
        source={require("../../assets/images/tempinsight2.png")}
        style={styles.image}
      />
      {/* Add more images or content as needed */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    margin: 5,
  },
});

export default InsightsWidget;
