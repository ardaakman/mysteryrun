import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import {MainScreen} from "./MainScreen/MainScreen"
import { PuzzleStackScreen } from "./PuzzleStack/PuzzleStackScreen";

const MainStack = createStackNavigator();

export function MainStackScreen() {
    return (
        <MainStack.Navigator initialRouteName="MainScreen">
            <MainStack.Screen
                name = "MainScreen"
                component = {MainScreen}
                options = {{headerShown: false}}
            />
            <MainStack.Screen
                name = "Events"
                component = {PuzzleStackScreen}
            />
                    
        </MainStack.Navigator>
    );
    }
