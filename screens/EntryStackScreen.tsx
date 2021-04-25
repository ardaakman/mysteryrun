import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import { EventsScreen } from "./EventsScreen";
import {MainStackScreen} from "./MainStack/MainStackScreen"

const EntryStack = createStackNavigator();

export function EntryStackScreen() {
    return (
        <NavigationContainer>
            <EntryStack.Navigator>
                <EntryStack.Screen
                    name = "PuzzleStack"
                    component = {MainStackScreen}
                    options = {{headerShown: false}}
                />
                <EntryStack.Screen
                    name = "Events"
                    component = {EventsScreen}
                />
                    
            </EntryStack.Navigator>
        </NavigationContainer>
    )
}