import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../screens/Landing";
import Dashboard from "../screens/Dashboard";
import Insights from "../screens/Insights";
import Progress from "../screens/Progress";
import Account from "../screens/Account";
import Discover from "../screens/Discover";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // Choose the icon based on the route name
          if (route.name === "Dashboard") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Discover") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Progress") {
            iconName = focused ? "bar-chart" : "bar-chart-outline";
          } else if (route.name === "Insights") {
            iconName = focused ? "analytics" : "analytics-outline";
          } else if (route.name === "Account") {
            iconName = focused ? "person" : "person-outline";
          }

          // Return the icon component
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "plum",
        inactiveTintColor: "black",
      }}
    >
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
