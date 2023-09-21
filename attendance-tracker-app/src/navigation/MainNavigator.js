import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Landing from "../screens/Landing";
import Dashboard from "../screens/Dashboard";
import Insights from "../screens/Insights";
import Progress from "../screens/Progress";
import Account from "../screens/Account";
import Discover from "../screens/Discover";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Landing">
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Progress" component={Progress} />
      <Tab.Screen name="Insights" component={Insights} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
