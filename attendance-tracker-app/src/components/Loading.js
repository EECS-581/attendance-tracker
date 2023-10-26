/**
 * Loading.js
 *
 * This component renders a loading animation
 *
 * Programmer: Emma Nasseri
 * Created on: 10/20/23
 * Dates the code was revised: N/A
 * Brief description of each revision & author: N/A
 *
 * Preconditions:
 * - N/A
 *
 * Postconditions:
 * - Renders a loading anumation
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
import { View, Text } from "react-native";
//import LottieView from "lottie-react-native";

export const Loading = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    {/* <LottieView
      source={require("../../assets/animations/generalLoading.json")}
      autoPlay
      loop
      style={{ width: 100, height: 100 }}
    /> */}
  </View>
);

export const SpecificLoading = () => (
  <View>
    <Text>Loading specific action...</Text>
  </View>
);
