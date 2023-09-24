import React from "react";
import { View, Text } from "react-native";
import globalStyles from "../styles/globalStyles.js";
import QRScanner from "../components/QRScanner.js";
import InsightsWidget from "../components/InsightsWidget.js";

const Dashboard = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <QRScanner style={globalStyles.widgetStyle} />
      <InsightsWidget
        navigation={navigation}
        style={globalStyles.widgetStyle}
      />

      {/* ... other components */}
    </View>
  );
};

export default Dashboard;
