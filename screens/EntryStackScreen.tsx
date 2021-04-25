import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import { EventsScreen } from "./MainStack/EventsScreen";
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
            </EntryStack.Navigator>
        </NavigationContainer>
    )
}

