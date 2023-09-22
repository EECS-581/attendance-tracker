import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../screens/Landing";
import Dashboard from "../screens/Dashboard";
import Insights from "../screens/Insights";
import Progress from "../screens/Progress";
import Account from "../screens/Account";
import Discover from "../screens/Discover";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Progress" component={Progress} />
      <Tab.Screen name="Insights" component={Insights} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
