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
import { brightColors } from "../../styles/globalStyles";

const ProgressComponent = ({ currentAmount, amountRequired, companyName }) => {
  const progressPercentage = (currentAmount / amountRequired) * 100;

  const getRandomThemeColor = () =>
    brightColors[Math.floor(Math.random() * brightColors.length)];

  const fillColor = getRandomThemeColor(); // get a random theme color

  return (
    <View style={styles.viewStyles}>
      <View style={styles.progressBarBackground}>
        <View
          style={[
            styles.progressBarFill,
            { width: `${progressPercentage}%`, backgroundColor: fillColor }, // set the background color here
          ]}
        ></View>
      </View>
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
  viewStyles: {
    padding: 3,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "black",
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    // backgroundColor: "black",
  },
});

export default ProgressComponent;
