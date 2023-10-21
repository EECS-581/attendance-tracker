/**
 * Name of code artifact: Insights Component
 * Brief description: This component renders the Insights screen, displaying a title and two images.
 * Programmer’s name: Emma Nasseri
 * Date the code was created: 9/24/23
 * Dates the code was revised: 10/6/23
 * Brief description of each revision & author: Emma edited to add current token count
 * Preconditions:
 * - The component expects a `navigation` prop, typically passed from React Navigation.
 * Acceptable and unacceptable input values or types:
 * - `navigation`: Object (from React Navigation)
 * Postconditions: Renders the Insights screen UI.
 * Return values or types: JSX elements (React components)
 * Error and exception condition values or types that can occur: N/A
 * Side effects: N/A
 * Invariants: N/A
 * Any known faults: N/A
 */

import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import globalStyles from "../styles/globalStyles"; // Importing global styles
import SimpleCard from "../components/SimpleCard";
import CameraButton from "../components/CameraButton";
import { useWeb3ContextApp } from "../../../shared/contexts/web3ContextApp";
import AttendanceGraphComponent from "../components/Data Visualizations/AttendanceGraphComponent";
import DiffClassesPieChartComponent from "../components/Data Visualizations/DiffClassesPieChartComponent";

const Insights = ({ navigation }) => {
  const { balance } = useWeb3ContextApp();
  // Render the Insights screen UI
  return (
    <>
      <CameraButton navigation={navigation} visible={true} />
      <View style={styles.container}>
        <CameraButton navigation={navigation} visible={true} />
        <SimpleCard backgroundColor="lightblue">
          <Text style={[globalStyles.defaultFont, { fontSize: 20 }]}>
            You currently have {balance} tokens.
          </Text>
        </SimpleCard>

        <AttendanceGraphComponent />
        <DiffClassesPieChartComponent />
      </View>
    </>
  );
};

// Styling for the Insights component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    height: 100,
    width: 100,
    margin: 30,
  },
});

export default Insights;
