/**
 * CouponCard.js
 *
 * This component is a widget displaying progress towards a given marker
 *
 * Programmer: Emma Nasseri
 * Created on: 10/20/2023
 * Revised on: 10/20/2023
 *
 * Preconditions:
 * - `currentAmount`
 * - `amountRequired`
 * - `companyName`
 *
 *
 *
 * Error and exception conditions:
 * - N/A
 *
 * Side effects:
 * - None.
 *
 * Invariants:
 * -
 *
 * Known faults:
 * - None.
 */
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import globalStyles, { brightColors } from "../../styles/globalStyles";

const ProgressComponent = ({ currentAmount, amountRequired, companyName }) => {
  console.log(
    "current amount: ",
    currentAmount,
    "amount required: ",
    amountRequired
  );

  // Ensure currentAmount and amountRequired are numbers
  const numericCurrentAmount = Number(currentAmount);
  const numericAmountRequired = Number(amountRequired);
  const progressPercentage =
    (numericCurrentAmount / numericAmountRequired) * 100;

  const isValidProgress =
    !isNaN(progressPercentage) && isFinite(progressPercentage);

  const getRandomThemeColor = () =>
    brightColors[Math.floor(Math.random() * brightColors.length)];

  const fillColor = getRandomThemeColor(); // get a random theme color

  return (
    <View
      style={{
        ...globalStyles.dataVisualizationStyle,
        backgroundColor: "black",
      }}
    >
      <View style={styles.progressBarBackground}>
        <View
          style={[
            styles.progressBarFill,
            {
              width: isValidProgress ? `${progressPercentage}%` : "0%",
              backgroundColor: fillColor,
            },
          ]}
        ></View>
      </View>
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 16,
          padding: 16,
        }}
      >
        {
          isValidProgress
            ? `${Math.floor(
                progressPercentage
              )}% progress to your next ${companyName} reward.`
            : "Progress unavailable." // You can customize this message
        }
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  progressBarBackground: {
    width: "90%",
    height: 20,
    backgroundColor: "white", // Changed this line to set the background to white
    borderRadius: 10,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
  },
  progressText: {
    marginTop: 8,
    fontSize: 14,
  },
});

export default ProgressComponent;
