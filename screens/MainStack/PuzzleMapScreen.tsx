import React, { useEffect, useState } from "react";
import {View, Text, Button,  Dimensions, Image, StyleSheet} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { greaterThan } from "react-native-reanimated";

export default function PuzzleMapScreen({ navigation, route }) {

  return (
    <View>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: 37.9,
          longitude: -122.253982,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
    searchStyle: {
      backgroundColor: "#003262",
      width: 50,
    },
    settingsStyle: {
      backgroundColor: "#003262",
      width: 50,
      paddingLeft: 20,
    },
    mapStyle: {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
    },
    headerStyle: {
      backgroundColor: "#003262",
    },
    imageView: {
      width: "10%",
    },
  });


