import React from "react";
import { View, Text, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import globalStyles, {
  brightColors,
  themeColors,
} from "../../styles/globalStyles";
import { diffClassesData } from "./DiffClassesData";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
};

const DiffClassesPieChartComponent = () => {
  const shuffledColors = shuffleArray([...brightColors]); // Create a copy and shuffle it

  const pieData = diffClassesData.map((item, index) => ({
    name: item.name,
    population: item.classes,
    color: shuffledColors[index % shuffledColors.length], // Use modulo to cycle through colors if there are more data items than colors
    legendFontColor: "white",
    legendFontSize: 15,
  }));

  const chartWidth = Dimensions.get("window").width - 32 - 20;
  const chartHeight = 200;

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
        paddingLeft={"15"}
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
