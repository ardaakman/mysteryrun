import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import { EntryStackScreen } from "./screens/EntryStackScreen";
import {DefaultTheme, Provider} from 'react-native-paper'

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FAE1A0',
    accent: '#FF52BA',
  },
};

export default function App() {
  return (
    <Provider theme = {theme}>
    <SafeAreaProvider>
      <EntryStackScreen/>
    </SafeAreaProvider>
    </Provider>
  );
}
