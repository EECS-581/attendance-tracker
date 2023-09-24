import React from "react";
import { View, Text } from "react-native";
import globalStyles from "../styles/globalStyles.js";
import QRScanner from "../components/QRScanner.js";
import InsightsWidget from "../components/InsightsWidget.js";
import ProgressWidget from "../components/ProgressWidget.js";

const Dashboard = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <QRScanner navigation={navigation} style={globalStyles.widgetStyle} />
      <InsightsWidget
        navigation={navigation}
        style={globalStyles.widgetStyle}
      />

      <ProgressWidget
        navigation={navigation}
        style={globalStyles.widgetStyle}
      />
    </View>
  );
};

export default Dashboard;
