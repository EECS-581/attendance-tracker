import React from "react";
import { View, Text, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import globalStyles from "../../styles/globalStyles";
import { diffClassesData } from "./DiffClassesData";

const DiffClassesPieChartComponent = () => {
  const pieData = diffClassesData.map((item) => ({
    name: item.name, // Only using the class name for the legend
    population: item.classes,
    color: item.color,
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  }));

  const chartWidth = Dimensions.get("window").width - 32 - 20; // Reduced 20 to account for possible paddings and margins
  const chartHeight = 200; // Adjusted height

  return (
    <View
      style={{
        ...globalStyles.dataVisualizationStyle,
        backgroundColor: "black",
      }}
    >
      <PieChart
        data={pieData}
        width={chartWidth}
        height={chartHeight}
        chartConfig={{
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        center={[10, 50]}
        absolute
      />
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 18,
          padding: 16,
        }}
      >
        Distribution of Classes Attended
      </Text>
    </View>
  );
};

export default DiffClassesPieChartComponent;
