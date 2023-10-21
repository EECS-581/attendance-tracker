import React from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import globalStyles from "../../styles/globalStyles";
import { attendanceData } from "./AttendanceData";

const AttendanceGraphComponent = () => {
  const chartConfig = {
    backgroundGradientFrom: "transparent",
    backgroundGradientTo: "transparent",
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
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
      <LineChart
        data={attendanceData}
        width={chartWidth}
        height={chartHeight}
        yAxisLabel=""
        chartConfig={chartConfig}
        bezier
        style={{
          marginVertical: 8,
          backgroundColor: "transparent",
        }}
      />
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 18,
          padding: 16,
        }}
      >
        Classes Attended
      </Text>
    </View>
  );
};

export default AttendanceGraphComponent;
