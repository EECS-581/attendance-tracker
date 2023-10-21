import React from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import globalStyles from "../../styles/globalStyles";
import { classesAttendedData } from "./ClassesAttendedData";

const DataVisualizationComponent = ({ chartTitle }) => {
  const chartConfig = {
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 4,
  };

  const chartWidth = Dimensions.get("window").width - 32 - 20; // Reduced 20 to account for possible paddings and margins
  const chartHeight = 200; // Adjusted height

  return (
    <View
      style={{
        ...globalStyles.dataVisualizationStyle,
        backgroundColor: "black",
      }}
    >
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 18,
          padding: 16,
        }}
      >
        {chartTitle}
      </Text>
    </View>
  );
};

export default DataVisualizationComponent;
