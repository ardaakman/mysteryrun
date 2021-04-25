import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import { EventsScreen } from "./EventsScreen";
import {MainScreen} from "./MainScreen/MainScreen"
import { PuzzleStackScreen } from "./PuzzleStack/PuzzleStackScreen";
import { SettingsScreen } from "./SettingsScreen";

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
                name = "EventsScreen"
                component = {EventsScreen}
            />
            <MainStack.Screen
                name = "SettingsScreen"
                component = {SettingsScreen}
            />
                    
        </MainStack.Navigator>
    );
    }
