/**
 * SimpleCard.js
 *
 * This component is a widget to be displayed on the Dashboard with insights about the user's
 *
 * Programmer: Emma Nasseri
 * Created on: 10/06/2023
 * Revised on: 10/06/2023
 *
 * Preconditions:
 * - `style` prop should be a valid React Native style object.
 *
 * Postconditions:
 * - None
 *
 * Error and exception conditions:
 * - If `navigation` or `style` prop is not provided, the component may not render correctly.
 *
 * Side effects:
 * - None.
 *
 * Invariants:
 * - The images used in this component should exist in the specified path.
 *
 * Known faults:
 * - None.
 */

import React from "react";
import { View, Text } from "react-native";
import globalStyles from "../styles/globalStyles";

const SimpleCard = ({ children, backgroundColor }) => {
  // Render the widget with a button and two images
  return (
    // When the widget is pressed, navigate to the "Insights" screen
    <View
      style={[
        globalStyles.cardStyle,
        { backgroundColor: backgroundColor || "#f5f5f5" },
      ]}
    >
      {children}
    </View>
  );
};

export default SimpleCard;
