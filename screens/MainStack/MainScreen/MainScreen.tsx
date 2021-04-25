import React, { useEffect, useState } from "react";
import {View, Text,  Dimensions, Image, StyleSheet} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { greaterThan } from "react-native-reanimated";
import { Appbar, Card, Button, Headline } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome5';



const anyanyprint = () => {
    console.warn("pressed")
}
const settingsIcon = (
    <Icon.Button
      name="puzzle-piece"
      backgroundColor="#FAE1A0"
      onPress = {anyanyprint}
    >
      Puzzles
    </Icon.Button>
  );

  const leaderboardIcon = (
    <Icon.Button
      name="leaderboard"
      backgroundColor="#FAE1A0"
      onPress = {anyanyprint}
    >

    </Icon.Button>
  );


const BottomBar = () => {
    return (
        <Appbar style ={styles.bottom}>
            <Appbar.Action
            icon = "cog-outline"
            />

            <Appbar.Action
            icon = 'poll'
            />

            <Appbar.Action
            icon = 'newspaper-variant'
            />

        </Appbar>
    )
} 


const TopBar = () => {
    return (
        <Appbar style ={styles.top}>
                <Appbar.Content title = 'Mystery Run'/>

        </Appbar>
    )
} 
export function MainScreen() {
    return (
    <View>
        {BottomBar()}
        {TopBar()}
    </View>
    )
}

const styles = StyleSheet.create({
    bottom: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 640
    },
    top : {
        position : "absolute",  
        left: 0,
        right: 0,
        top: 0,
        
    }
  });