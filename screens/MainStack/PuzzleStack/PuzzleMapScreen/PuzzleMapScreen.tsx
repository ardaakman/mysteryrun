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
  const [location, setLocation] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View>
      <Text>Location: {text}</Text>
      <MapView
        style={styles.mapStyle}
        showsUserLocation={true}
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
