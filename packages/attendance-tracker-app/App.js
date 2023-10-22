/**
 * Name of code artifact: App Component
 * Brief description: This is the main entry point of the application. It handles font loading, splash screen display, and initializes the main navigation.
 * Programmer’s name: Emma Nasseri
 * Date the code was created: 9/24/23
 * Dates the code was revised: N/A
 * Brief description of each revision & author: N/A
 * Preconditions:
 * - App should have proper permissions to access and load fonts.
 * Acceptable and unacceptable input values or types: N/A
 * Postconditions: Renders the main navigation of the app after loading necessary fonts.
 * Return values or types: JSX elements (React components)
 * Error and exception condition values or types that can occur:
 * - Font loading failure.
 * Side effects:
 * - Prevents the native splash screen from auto-hiding until fonts are loaded.
 * Invariants: N/A
 * Any known faults: N/A
 */

// Import necessary modules and components
import { decode, encode } from "base-64";

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

import React, { useState, useEffect, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import globalStyles from "./src/styles/globalStyles.js";
import MainNavigator from "./src/navigation/MainNavigator.js";
import { NavigationContainer } from "@react-navigation/native";
import CameraButtonContext from "./src/contexts/CameraButtonContext.js";
import { LoadingProvider } from "./src/contexts/Loading/LoadingContext.js";

import { Web3ProviderApp } from "../shared/contexts/web3ContextApp.js";

// This might also be required for crypto operations

export default function App() {
  // State to manage font loading status
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [showCameraButton, setShowCameraButton] = useState(true);

  // Effect hook to prevent native splash screen from auto-hiding
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  // Function to load the necessary fonts
  const loadFonts = async () => {
    await Font.loadAsync({
      "proximanova-regular": require("./assets/fonts/proximanova-regular.otf"),
    });
  };

  // Effect hook to load fonts and then hide the splash screen
  useEffect(() => {
    async function prepareApp() {
      try {
        await loadFonts();
      } catch (e) {
        console.warn(e); // Log any font loading errors
      } finally {
        setFontsLoaded(true);
        SplashScreen.hideAsync();
      }
    }

    prepareApp();
  }, []);

  // If fonts haven't been loaded, return null or a loading component
  if (!fontsLoaded) {
    return null; // or return a loading component if you have one
  }

  // Render the main navigation of the app
  return (
    <Web3ProviderApp>
      <LoadingProvider>
        <CameraButtonContext.Provider
          value={{ showCameraButton, setShowCameraButton }}
        >
          <NavigationContainer>
            <StatusBar style="auto" />
            <MainNavigator />
          </NavigationContainer>
        </CameraButtonContext.Provider>
      </LoadingProvider>
    </Web3ProviderApp>
  );
}

// Styling for the App component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
