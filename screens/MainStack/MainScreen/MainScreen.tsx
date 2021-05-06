import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, Image, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { greaterThan } from "react-native-reanimated";
import { Appbar, Card, Button, Headline } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { styles } from "../PuzzleStack/PuzzleListScreen/PuzzleListScreenStyles";
import { white } from "react-native-paper/lib/typescript/styles/colors";

export function MainScreen({ navigation }) {
  const dimensionprint = () => {
    console.warn(Dimensions.get("window").width);
    console.warn(Dimensions.get("window").height);
  };

  const runningIcon = () => {
    return (
      <Icon style={mainScreenStyles.runningIcon} name="running" size={200} />
    );
  };

  const playButton = () => {
    return (
      <View style={mainScreenStyles.playButton}>
        <Button onPress={() => navigation.navigate("PuzzleStack")}>
          <Text style={mainScreenStyles.puzzleText}> Puzzles </Text>
        </Button>
      </View>
    );
  };
  const [loaded] = useFonts({
    Inconsolata: require("../../../assets/fonts/Inconsolata.otf"),
  });

  if (!loaded) {
    return null;
  }

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
        <Appbar.Content
          title={<Text style={mainScreenStyles.headerText}>Mystery Run </Text>}
        />
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
    flexDirection: "row",
    alignContent: "space-between",
  },
  top: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 90,
    fontFamily: "Inconsolata",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "gray",
  },
  middlePinkBox: {
    alignItems: "center",
    flex: 0.06,
    //backgroundColor: "#FF52BA",
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
    backgroundColor: "gray",
    borderWidth: 3,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    top: 400,
    left: 80,
    padding: 0,
    borderColor: "#FF52BA",
    marginTop: 50,
  },
  headerText: {
    fontFamily: "Inconsolata",
    alignItems: "center",
    fontSize: 30,
  },
  puzzleText: {
    fontFamily: "Inconsolata",
    alignItems: "center",
    fontSize: 15,
    color: "white",
  },
});
