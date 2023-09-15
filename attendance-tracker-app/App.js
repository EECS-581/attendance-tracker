import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import globalStyles from "./src/styles/globalStyles.js";

export default function App() {
  return (
    //probably want to update globalStyles to replace styles
    <View style={styles.container}>
      <Text>Welcome to our attendance tracker app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
