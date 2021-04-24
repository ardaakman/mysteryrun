import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PuzzleMapScreen from "./screens/PuzzleMapScreen"

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator initialRouteName="MainScreen">
      <Stack.Screen
        name="PuzzleMapScreen"
        component={PuzzleMapScreen}
        options={{
          title: "PuzzleMapScreen",
          headerStyle: { backgroundColor: "#003262" },
          headerTitleAlign: "center",
          headerTitleStyle: { fontWeight: "bold"},
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
