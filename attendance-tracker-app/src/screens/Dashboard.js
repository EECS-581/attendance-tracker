import React from "react";
import { View, Text } from "react-native";
import globalStyles from "../styles/globalStyles.js";

const Dashboard = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Dashboard</Text>
      {/* ... other components */}
    </View>
  );
};

export default Dashboard;
