/**
 * Name of code artifact: Scan Component
 * Brief description: This component provides functionality to scan QR codes using the device's camera.
 * Programmer’s name: Emma Nasseri
 * Date the code was created: 9/24/23
 * Dates the code was revised: N/A
 * Brief description of each revision & author: N/A
 * Preconditions:
 * - Camera access permission is required.
 * Acceptable and unacceptable input values or types: N/A
 * Postconditions: Renders the QR code scanner or appropriate messages based on camera permissions.
 * Return values or types: JSX elements (React components)
 * Error and exception condition values or types that can occur:
 * - Camera permission not granted.
 * Side effects:
 * - Requests camera permission on component mount.
 * Invariants: N/A
 * Any known faults: N/A
 */

import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import CameraButtonContext from "../contexts/CameraButtonContext";
//import LottieView from "lottie-react-native";

export default function Scan() {
  // State to manage camera permission and scan status
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const { setShowCameraButton } = useContext(CameraButtonContext);
  const [showMintingAnimation, setShowMintingAnimation] = useState(false);
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);
  useEffect(() => {
    setShowCameraButton(false); // Hide the camera button

    return () => {
      setShowCameraButton(true); // Show the camera button when leaving the screen
    };
  }, []);

  // Effect hook to request camera permission on component mount
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  // Handler for when a QR code is scanned
  const handleBarCodeScanned = ({ type, data }) => {
    setShowMintingAnimation(true);

    setTimeout(() => {
      setShowMintingAnimation(false);
      setShowSuccessAnimation(true);
    }, 4000);

    setTimeout(() => {
      setShowSuccessAnimation(false);
    }, 8000); // Assuming successAnimation lasts for 4 seconds
    setScanned(true);
  };

  // Display message while waiting for permission status
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  // Display message if camera access is denied
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // Render the QR code scanner
  //...
  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {showMintingAnimation && (
        <></>
        // <LottieView
        //   source={require("../../assets/animations/mintingTokenAnimation.json")}
        //   autoPlay
        //   loop={true}
        //   style={styles.lottieAnimation}
        ///>
      )}

      {showSuccessAnimation && (
        <></>
        // <LottieView
        //   source={require("../../assets/animations/tokenMintedSuccess.json")} // Path to your success animation
        //   autoPlay
        //   loop={false}
        //   onAnimationFinish={() => setShowSuccessAnimation(false)}
        //   style={styles.lottieAnimation}
        // />
      )}

      {scanned && !showMintingAnimation && !showSuccessAnimation && (
        <Button
          title={"Tap to Scan Again"}
          color={"white"}
          onPress={() => setScanned(false)}
        />
      )}
    </View>
  );
}

// Styling for the Scan component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center", // Add this line to center child components horizontally
  },
  lottieAnimation: {
    position: "absolute",
    width: 300, // adjust width
    height: 300, // adjust height
  },
});
