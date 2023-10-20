/**
 * SimpleCard.js
 *
 * This component is a widget to be displayed on the Dashboard with insights about the user's
 *
 * Programmer: Emma Nasseri
 * Created on: 10/20/2023
 * Revised on: 10/20/2023
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
import { View, Text, Image } from "react-native";

const CouponCard = ({
  company,
  details,
  offer,
  expiryDate,
  terms,
  logo,
  backgroundColor,
}) => {
  return (
    <View>
      {logo && (
        <Image
          source={logo}
          style={{ width: 50, height: 50, marginRight: 10 }}
        />
      )}

      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{company}</Text>
        <Text style={{ marginVertical: 5 }}>{details}</Text>
        <Text style={{ fontSize: 12, color: "gray" }}>
          Expires on: {expiryDate}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "blue",
            textDecorationLine: "underline",
          }}
        >
          {terms}
        </Text>
      </View>

      <View
        style={{
          padding: 10,
          backgroundColor: "black",
          borderRadius: 5,
          marginLeft: 10,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>{offer}</Text>
      </View>
    </View>
  );
};

export default CouponCard;
