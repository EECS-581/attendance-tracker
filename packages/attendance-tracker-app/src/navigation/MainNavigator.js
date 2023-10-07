/**
 * MainNavigator.js
 *
 * This component sets up the main navigation for the app, including both stack and tab navigators.
 *
 * Programmer: Emma Nasseri
 * Created on: 9/24/23
 * Dates the code was revised: N/A
 * Brief description of each revision & author: N/A
 *
 * Preconditions:
 * - All imported screens (e.g., Landing, Dashboard, etc.) should be correctly defined and exported from their respective files.
 *
 * Postconditions:
 * - Renders the main navigation structure of the app.
 *
 * Error and exception conditions:
 * - If any of the imported screens are not correctly defined or missing, the navigator will not function correctly.
 *
 * Side effects:
 * - None.
 *
 * Invariants:
 * - The initial route for the stack navigator is always "Landing".
 *
 * Known faults:
 * - None.
 */

import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../screens/Landing";
import Dashboard from "../screens/Dashboard";
import Insights from "../screens/Insights";
import Progress from "../screens/Progress";
import Account from "../screens/Account";
import Discover from "../screens/Discover";
import Scan from "../screens/Scan";
import { Ionicons } from "@expo/vector-icons";
import CameraButton from "../components/CameraButton";
import { useNavigation } from "@react-navigation/native";
import CameraButtonContext from "../contexts/CameraButtonContext";

// Create instances for bottom tab and stack navigators
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
        tabBarActiveTintColor: "plum",
        tabBarInactiveTintColor: "black",
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      })}
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
  const navigation = useNavigation();
  const { showCameraButton } = useContext(CameraButtonContext);

  // Define the main stack navigation structure
  return (
    <>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

      {showCameraButton && <CameraButton navigation={navigation} />}
    </>
  );
};

export default MainNavigator;
