/**
 * CouponCard.js
 *
 * This component is a widget to be displayed on the Dashboard with insights about the user's
 *
 * Programmer: Emma Nasseri
 * Created on: 10/20/2023
 * Revised on: 10/20/2023
 *
 * Preconditions:
 * - `company`
 * - `details`
 * - `offer`
 * - `expirydate`
 * - `terms`
 * - `logo`
 * - `backgroundColor`
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
import { View, Text, Image } from "react-native";
import ProgressComponent from "./Data Visualizations/SimpleProgress";

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
    <View
      style={{
        flex: 1,
        borderWidth: 1,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
      }}
    >
      <ProgressComponent />
      {/* Top section for the logo and offer */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        {logo && (
          <Image
            source={logo}
            style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }}
          />
        )}

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

      {/* Bottom section for company and other details */}
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 5,
          }}
        >
          {company}
        </Text>
        <Text style={{ marginVertical: 5 }}>{details}</Text>
        <Text style={{ fontSize: 12, color: "gray", marginBottom: 5 }}>
          Expires on: {expiryDate}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "black",
            textDecorationLine: "underline",
          }}
        >
          {terms}
        </Text>
      </View>
    </View>
  );
};

export default CouponCard;
