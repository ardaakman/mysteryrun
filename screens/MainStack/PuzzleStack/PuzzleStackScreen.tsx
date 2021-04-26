import React, { useEffect, useState } from "react";
import {View, Text, Button,  Dimensions, Image, StyleSheet} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { greaterThan } from "react-native-reanimated";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import PuzzleMapScreen from "./PuzzleMapScreen/PuzzleMapScreen";
import { PuzzleListScreen } from "./PuzzleListScreen/PuzzleListScreen";

const PuzzleStack = createStackNavigator();

export function PuzzleStackScreen ({navigation}) {
    return (
        <PuzzleStack.Navigator initialRouteName="PuzzleListScreen">
        <PuzzleStack.Screen
          name="PuzzleListScreen"
          component={PuzzleListScreen}
          options={{ headerShown: false }}
        />
        <PuzzleStack.Screen
        name = "PuzzleMapScreen"
        component = {PuzzleMapScreen}
        options = {{headerShown: false}}
        />
      </PuzzleStack.Navigator>
    )
}