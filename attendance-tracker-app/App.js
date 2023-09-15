import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import globalStyles from "./src/styles/globalStyles.js";
import MainNavigator from "./src/navigation/MainNavigator.js";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <Text>Welcome to our attendance tracker app!</Text>
      <StatusBar style="auto" />
      <MainNavigator />
    </NavigationContainer>
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
