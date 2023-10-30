import React, { useState, useEffect, useContext, useRef } from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import CameraButtonContext from "../contexts/CameraButtonContext";
import { useWeb3Context } from "../contexts/web3ContextApp";
import { useGraphContext } from "../contexts/graphContextApp";

export default function Scan() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const { setShowCameraButton } = useContext(CameraButtonContext);
  const { mintAttendanceToken, getAttendanceBalance, balance, userWallet } =
    useWeb3Context();
  const { queryClassAttendance, checkClassSessionExists } = useGraphContext();
  const [showMintingAnimation, setShowMintingAnimation] = useState(false);
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);

  useEffect(() => {
    setShowCameraButton(false);
    return () => {
      setShowCameraButton(true);
    };
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const checkAttendance = async (address, sessionId) => {
    const data = await queryClassAttendance(sessionId);
    if (!data || !data.mintEvents) return false;
    return data.mintEvents.some(
      (event) => event.to.toLowerCase() === address.toLowerCase()
    );
  };

  const scannedRef = useRef(false);

  const handleBarCodeScanned = async ({ type, data }) => {
    try {
      if (scannedRef.current) return;
      scannedRef.current = true;
      setScanned(true);
      console.log("Scanned QR code data:", data);

      // Manually parse the sessionId and userWallet from the URL
      const queryString = data.split("?")[1];
      const params = queryString.split("&").reduce((acc, current) => {
        const [key, value] = current.split("=");
        acc[key] = value;
        return acc;
      }, {});

      const sessionId = params.sessionId;
      const userWallet = params.userWallet;

      if (!sessionId) {
        Alert.alert("Error", "Session ID not found in the QR code");
        return;
      }

      const sessionExists = await checkClassSessionExists(sessionId);
      if (!sessionExists) {
        Alert.alert("Error", "Class session does not exist");
        return;
      }

      if (!userWallet) {
        Alert.alert("Error", "User wallet not found in the QR code");
        return;
      }

      const hasAttended = await checkAttendance(userWallet, sessionId);
      if (hasAttended) {
        Alert.alert("Attendance", "User has already attended");
        return;
      }

      setShowMintingAnimation(true);
      await mintAttendanceToken(userWallet, 1, sessionId);
      await getAttendanceBalance(userWallet);
      setShowMintingAnimation(false);
      setShowSuccessAnimation(true);

      setTimeout(() => {
        setShowSuccessAnimation(false);
      }, 4000); // Adjust time as needed
    } catch (error) {
      console.error("Error handling QR code scan:", error);
      Alert.alert("Error", "An error occurred while processing the QR code");
    } finally {
      setScanned(false);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {showMintingAnimation && (
        <Image
          source={require("../../assets/animations/coinminting.gif")}
          style={styles.animation}
        />
      )}

      {showSuccessAnimation && (
        <>
          <Image
            source={require("../../assets/animations/success.gif")} // Replace with the correct path
            style={styles.animation}
          />
          <Text style={styles.successText}>
            Attendance Token Minted! New Balance: {balance}
          </Text>
        </>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    position: "absolute",
    color: "white",
    fontSize: 18,
  },
  successText: {
    position: "absolute",
    color: "white",
    fontSize: 18,
  },
  animation: {
    width: 220,
    height: 220,
    position: "absolute",
  },
});
