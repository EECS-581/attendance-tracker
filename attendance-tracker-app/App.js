// Import necessary modules and components
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import globalStyles from "./src/styles/globalStyles.js";
import MainNavigator from "./src/navigation/MainNavigator.js";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Prevent native splash screen from auto-hiding
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  const loadFonts = async () => {
    await Font.loadAsync({
      "proximanova-regular": require("./assets/fonts/proximanova-regular.otf"),
    });
  };

  // Load fonts and then hide the splash screen
  useEffect(() => {
    async function prepareApp() {
      try {
        await loadFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
        SplashScreen.hideAsync();
      }
    }

    prepareApp();
  }, []);

  return (
    <NavigationContainer>
      <Text style={{ fontFamily: "proximanova-regular" }}>
        Welcome to our attendance tracker app!
      </Text>
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
