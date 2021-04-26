import React, { useEffect, useState } from "react";
import {View, Text,  Dimensions, Image, StyleSheet} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { greaterThan } from "react-native-reanimated";
import { Appbar, Card, Button, Headline } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from "react-native-gesture-handler";
import {SettingsScreen} from 



export function MainScreen({navigation}) {

    const dimensionprint = () => {
        console.warn(Dimensions.get('window').width)
        console.warn(Dimensions.get('window').height)
    }
    const runningIcon = () => {
        return (
            <Icon style = {styles.runningIcon} name = 'running' size = {200}/>
        )
    }

    const playButton = () => {
        return (
            <TouchableOpacity style = {styles.playButton}>
                <Text> Puzzles </Text>
            </TouchableOpacity>
        )
    }

    // dimensionprint();


    const BottomBar = () => {
        return (
            <Appbar style ={styles.bottom}>
                <Appbar.Action
                icon = "cog-outline"
                onPress = {() => navigation.navigate("SettingsScreen")}
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

    return (
    <View style = {styles.container}>
        <View style={styles.middlePinkBox}/>
        {playButton()}
        {runningIcon()}
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
      top: 640,
      alignItems: "center"
    },
    top : {
        position : "absolute",  
        left: 0,
        right: 0,
        top: 0,
        height : 90
        
    },
    container: {
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: "#fff",
      },
    middlePinkBox : {
        alignItems:'center',
        flex: 0.06,
        backgroundColor:  "#FF52BA",
        top : 80
    },
    runningIcon :{
        position: 'absolute',
        left: 80,
        top: 180
    
    },
    playButton : {
        position : "absolute",
        width : 160,
        alignItems: "center",
        backgroundColor: "#FFFFFE",
        borderWidth : 3,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        top : 380,
        left : 80,
        padding : 10,
        borderColor: "#FF52BA"
    },

  })