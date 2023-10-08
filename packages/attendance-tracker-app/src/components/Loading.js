import React from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";

export const Loading = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <LottieView
      source={require("../../assets/animations/generalLoading.json")}
      autoPlay
      loop
      style={{ width: 100, height: 100 }}
    />
  </View>
);

export const SpecificLoading = () => (
  <View>
    <Text>Loading specific action...</Text>
  </View>
);
