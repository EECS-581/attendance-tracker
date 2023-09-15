import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Landing from "../screens/Landing";
import Dashboard from "../screens/Dashboard";
import Insights from "../screens/Insights";
import Account from "../screens/Account";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Landing">
      <Tab.Screen name="Landing" component={Landing} />
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Insights" component={Insights} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
