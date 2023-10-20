import React from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import globalStyles from "../../styles/globalStyles";

const AttendanceGraphComponent = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [15, 18, 16, 20, 19, 17],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <View style={globalStyles.dataVisualizationStyle}>
      <LineChart
        data={data}
        width={Dimensions.get("window").width - 32} // from react-native
        height={220}
        yAxisLabel=""
        chartConfig={chartConfig}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <Text style={{ textAlign: "center", fontSize: 18, padding: 16 }}>
        Classes Attended
      </Text>
    </View>
  );
};

export default AttendanceGraphComponent;
