/**
 * Name of code artifact: Landing Component
 * Brief description: This component renders the Landing screen, displaying a welcome message and buttons for account creation and login.
 * Programmer’s name: Emma Nasseri
 * Date the code was created: 9/24/23
 * Dates the code was revised: N/A
 * Brief description of each revision & author: N/A
 * Preconditions:
 * - The component expects a `navigation` prop, typically passed from React Navigation.
 * Acceptable and unacceptable input values or types:
 * - `navigation`: Object (from React Navigation)
 * Postconditions: Renders the Landing screen UI.
 * Return values or types: JSX elements (React components)
 * Error and exception condition values or types that can occur: N/A
 * Side effects: Navigates to the "Tabs" route when either button is pressed.
 * Invariants: N/A
 * Any known faults: N/A
 */

import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import globalStyles from "../styles/globalStyles"; // Importing global styles
import LightColorfulButton from "../components/LightColorfulButton"; // Importing the LightColorfulButton component
import CameraButtonContext from "../contexts/CameraButtonContext";
import { useLoading, useSpecificLoading } from "../contexts/Loading/useLoading";
import { GeneralLoading } from "../components/Loading";
import GoogleSignInButton from "../components/GoogleSigninButton";

const Landing = ({ navigation }) => {
  const { setShowCameraButton } = useContext(CameraButtonContext);
  const [isLoading, load] = useLoading();

  /* example of how loading will work 
  const handleSomeAction = () => {
    load(async () => {
      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 5000));
    });
  };
  if (isLoading) {
    return <GeneralLoading />;
  }
*/
  useEffect(() => {
    setShowCameraButton(false); // Hide the camera button

    return () => {
      setShowCameraButton(true); // Show the camera button when leaving the screen
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={{ marginTop: 50, width: 220, height: 220 }}
        />
      </View>
      <GoogleSignInButton />

      <View style={styles.buttonContainer}>
        <LightColorfulButton
          title="Get Started"
          shadowColor="plum"
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
      </View>
    </View>
  );
};

// Styling for the Landing component
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
