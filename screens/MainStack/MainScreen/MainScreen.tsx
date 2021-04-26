import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, Image, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { greaterThan } from "react-native-reanimated";
import { Appbar, Card, Button, Headline } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native";

export function MainScreen({ navigation }) {
  const dimensionprint = () => {
    console.warn(Dimensions.get("window").width); 
    console.warn(Dimensions.get("window").height);
  };

  const runningIcon = () => {
    return <Icon style={mainScreenStyles.runningIcon} name="running" size={200} />;
  };

  const playButton = () => {
    return (
      <View style={mainScreenStyles.playButton}>
        <TouchableOpacity  onPress = {() => navigation.navigate('PuzzleStack')}>
          <Text> Puzzles </Text>
        </TouchableOpacity>
      </View>
    );
  };

  //dimensionprint();

  const BottomBar = () => {
    return (
      <Appbar style={mainScreenStyles.bottom}>
        <Appbar.Action
          icon="cog-outline"
          onPress={() => navigation.navigate("SettingsScreen")}
        />

        <Appbar.Action
          icon="poll"
          //onPress={() => navigation.navigate("PuzzleMapScreen")}
        />

        <Appbar.Action icon="newspaper-variant" />
      </Appbar>
    );
  };

  const TopBar = () => {
    return (
      <Appbar style={mainScreenStyles.top}>
        <Appbar.Content title="Mystery Run" />
      </Appbar>
    );
  };

  return (
    <View style={mainScreenStyles.container}>
      <View style={mainScreenStyles.middlePinkBox} />
      {playButton()}
      {runningIcon()}
      {BottomBar()}
      {TopBar()}
    </View>
  );
}

export const mainScreenStyles = StyleSheet.create({
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 640,
    alignItems: "center",
  },
  top: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 90,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  middlePinkBox: {
    alignItems: "center",
    flex: 0.06,
    backgroundColor: "#FF52BA",
    top: 80,
  },
  runningIcon: {
    position: "absolute",
    left: 80,
    top: 180,
  },
  playButton: {
    position: "absolute",
    width: 160,
    alignItems: "center",
    backgroundColor: "#FFFFFE",
    borderWidth: 3,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    top: 400,
    left: 80,
    padding: 10,
    borderColor: "#FF52BA",
  },
});
