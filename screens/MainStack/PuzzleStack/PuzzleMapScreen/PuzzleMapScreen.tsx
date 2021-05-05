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
import { Appbar, Card, Headline } from "react-native-paper";
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
  let latitude = "";
  let longitude = "";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    //latitude = JSON.stringify(location.coords.latitude)
    //longitude = JSON.stringify(location.coords.longitude)
  }

  class SlidingPanel extends React.Component {
    render() {
      return (
        <View style={styles.slideStyle}>
          <SlidingUpPanel
            ref={(c) => (this._panel = c)}
            draggableRange={{
              top: Dimensions.get("window").height - 100,
              bottom: 0,
            }}
          >
            <View style={styles.container}>
              <Text style={styles.headerTextStyle}>Puzzle Information</Text>
              <Text style={styles.positionTextStyle}>
                Your current position is :
              </Text>
              <Text style={styles.positionTextStyle}>
                ({latitude} , {longitude})
              </Text>
              <Text style={styles.puzzleTextStyle}>
                Please proceed to the location on the map to begin.
              </Text>
            </View>
          </SlidingUpPanel>
        </View>
      );
    }
  }

  const TopBar = () => {
    return (
      <Appbar style={styles.topBar}>
        <Appbar.Action icon="arrow-left" onPress={() => navigation.goBack()} />
        <Appbar.Content title="Oski Trail" />
      </Appbar>
    );
  };

  return (
    <View>
      {TopBar()}
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
    height: Dimensions.get("window").height * 0.9,
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
    marginTop: 100,
  },
  positionTextStyle: {
    fontFamily: "Roboto",
    fontSize: 12,
    marginTop: 10,
  },
  top: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 90,
  },
});
