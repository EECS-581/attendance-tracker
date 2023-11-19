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
import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import globalStyles from "../styles/globalStyles";
import SimpleCard from "../components/SimpleCard";
import CameraButton from "../components/CameraButton";
import { useWeb3Context } from "../contexts/web3ContextApp";
import AttendanceGraphComponent from "../components/Data Visualizations/AttendanceGraphComponent";
import DiffClassesPieChartComponent from "../components/Data Visualizations/DiffClassesPieChartComponent";
import ProgressComponent from "../components/Data Visualizations/ProgressComponent";

const Insights = ({ navigation }) => {
  const { balance } = useWeb3Context();
  let updatedBalance = balance;

  useEffect(() => {
    console.log("balance", balance);
    updatedBalance = balance;
  }, [balance]); // Added dependency on balance

  // Check if balance is a valid number
  const isBalanceNumeric = !isNaN(balance) && isFinite(balance);

  return (
    <>
      <CameraButton
        navigation={navigation}
        visible={true}
        onPress={() => {
          navigation.navigate("Scan");
        }}
      />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <SimpleCard backgroundColor="lightblue">
          <Text style={[globalStyles.defaultFont, { fontSize: 20 }]}>
            You currently have {updatedBalance} tokens.
          </Text>
        </SimpleCard>

        {isBalanceNumeric ? (
          <>
            <AttendanceGraphComponent />
            <DiffClassesPieChartComponent />
            <ProgressComponent
              currentAmount={balance}
              amountRequired={5}
              companyName={"Nike"}
            />
            {/* Repeat ProgressComponent for other companies */}
          </>
        ) : (
          <View style={styles.noAnalyticsView}>
            <Text style={styles.noAnalyticsText}>
              No analytics can be displayed.
            </Text>
          </View>
        )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
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
