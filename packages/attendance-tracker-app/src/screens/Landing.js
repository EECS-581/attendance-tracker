import React from "react";
import { View, Text, StyleSheet } from "react-native";
import globalStyles from "../styles/globalStyles";
import LightColorfulButton from "../components/LightColorfulButton";

const Landing = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[globalStyles.defaultFont, { fontSize: 30 }]}>
          Welcome
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <LightColorfulButton
          title="Start Here"
          shadowColor="powderblue"
          onPress={() => {
            navigation.navigate("Tabs");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
  titleContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default Landing;
