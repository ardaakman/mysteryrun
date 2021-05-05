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
import SlidingUpPanel from "rn-sliding-up-panel";
import { listStyles } from "../PuzzleListScreen/PuzzleListScreenStyles";

export default function PuzzleMapScreen({ navigation, route }) {
  const [location, setLocation] = useState({});
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
  class SlidingPanel extends React.Component {
    render() {
      return (
        <View style={styles.slideStyle}>
          <SlidingUpPanel ref={(c) => (this._panel = c)}>
            <View style={styles.container}>
              <Text style={styles.headerTextStyle}>Puzzle Information</Text>
              <Text style={styles.puzzleTextStyle}>
                Please proceed to the location on the map to begin.
              </Text>
            </View>
          </SlidingUpPanel>
        </View>
      );
    }
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
      >
        <Marker
          coordinate={{ latitude: 37.8703, longitude: -122.2595 }}
          title={"Begin the Puzzle"}
          description={"Go here to begin the puzzle!"}
        />
      </MapView>
      <SlidingPanel />
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
    height: Dimensions.get("window").height * 0.8,
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
  opacityStyle: {
    position: "absolute",
    width: 80,
    height: 100,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    //justifyContent: "center",
  },
  slideStyle: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    alignItems: "center",
    padding: 20,
  },
  headerTextStyle: {
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "500",
    width: "100%",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "yellow",
  },
  puzzleTextStyle: {
    fontFamily: "Roboto",
    fontSize: 12,
    marginTop: 300,
  },
});
