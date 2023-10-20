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

export default function Scan() {
  // State to manage camera permission and scan status
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const { setShowCameraButton } = useContext(CameraButtonContext);
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
    setScanned(true);
    Alert.alert(`QR code data: ${data}`);
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
  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
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
  },
});
