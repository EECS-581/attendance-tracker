/**
 * Name of code artifact: Dashboard Component
 * Brief description: This component renders the Dashboard screen, displaying widgets for QR scanning, insights, and progress.
 * Programmer’s name: Emma Nasseri
 * Date the code was created: 9/24/23
 * Dates the code was revised: N/A
 * Brief description of each revision & author: N/A
 * Preconditions:
 * - The component expects a `navigation` prop, typically passed from React Navigation.
 * Acceptable and unacceptable input values or types:
 * - `navigation`: Object (from React Navigation)
 * Postconditions: Renders the Dashboard screen UI.
 * Return values or types: JSX elements (React components)
 * Error and exception condition values or types that can occur: N/A
 * Side effects: N/A
 * Invariants: N/A
 * Any known faults: N/A
 */

import React from "react";
import { View, Text } from "react-native";
import globalStyles from "../styles/globalStyles.js"; // Importing global styles
import QRScanner from "../components/QRScanner.js"; // Importing QRScanner widget
import InsightsWidget from "../components/InsightsWidget.js"; // Importing InsightsWidget
import ProgressWidget from "../components/ProgressWidget.js"; // Importing ProgressWidget
import CameraButton from "../components/CameraButton.js";

const Dashboard = ({ navigation }) => {
  // Render the Dashboard screen UI
  return (
    <>
      <CameraButton navigation={navigation} visible={true} />
      <View style={globalStyles.container}>
        <QRScanner navigation={navigation} style={globalStyles.widgetStyle} />

        <InsightsWidget
          navigation={navigation}
          style={globalStyles.widgetStyle}
        />

        <ProgressWidget
          navigation={navigation}
          style={globalStyles.widgetStyle}
        />
      </View>
    </>
  );
};

export default Dashboard;
