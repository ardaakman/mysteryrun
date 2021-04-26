import React, { useEffect, useState } from "react";
import {
  Alert,
  View,
  Text,
  Button,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { greaterThan } from "react-native-reanimated";
import * as Location from "expo-location";

export default function PuzzleMapScreen({ navigation, route }) {
  const [curLoc, setCurLoc] = useState("");

  function findCoordinates() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = JSON.stringify(position);

        setCurLoc(location);
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  return (
    <View>
      <TouchableOpacity onPress={findCoordinates()}>
        <Text style={styles.welcome}>Find My Coords?</Text>
        <Text>Location: {curLoc}</Text>
      </TouchableOpacity>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: 37.9,
          longitude: -122.253982,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      ></MapView>
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
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});
