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
import { useFonts } from "expo-font";
import {
  orangeA700,
  white,
} from "react-native-paper/lib/typescript/styles/colors";

export default function PuzzleMapScreen({ navigation, route }) {
  const [location, setLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const [loaded] = useFonts({
    Inconsolata: require("../../../../assets/fonts/Inconsolata.otf"),
  });
  const [currentPuzzleText, setPuzzleText] = useState("");
  const [puzzleNum, setPuzzleNum] = useState(0);
  const [distance, setDistance] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [timerVar, setTimerVar] = useState(0);
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
  }, [timerVar]);

  useEffect(() => {
    if (puzzleNum === 0) {
      setPuzzleText("Please proceed to the location on the map to begin.");
    } else if (puzzleNum === 1) {
      setPuzzleText(`            ---- INCOMING TRANSMISSION ----

      We have reason to believe that the notorious criminal known only as “Shade” has established a presence somewhere in the Berkeley area. We’ve received a few clues about his location, however, and we need you to help figure out where he is so we can bring him to justice.
      
      Your second location can be found from unscrambling the following words. But some of our data got messed up when we were getting it, so once you unscramble a word, you will need to remove one or more letters to get the actual word in the location.
      
      arcleyl
      eawra, ncderh (these will combine to make one word)
      hlwalo
      `);
    } else if (puzzleNum === 2) {
      setPuzzleText(`            ---- INCOMING TRANSMISSION ----

      Damn it! Looks like he left here about half an hour ago. We’re not sure where he went next, but we know he’s on foot, so we can still catch up to him. He planned to drop off a package somewhere in North Berkeley, but we were only able to catch a partial transcript of his phone call. If you can figure out where he’s headed next, you might be able to intercept the dropoff.
      
      Phone Transcript:
      
      Unknown: Give me the package at [inaudible].
      Shade: Which way should I go?
      Unknown: From Earl Warren, you’ll want to go down on [inaudible], through [inaudible] park, and then you cross [inaudible] street to get to the location. I’ll be waiting there, ready to take the next [inaudible] out of there.
      Unknown: If you get to University Avenue, you’ve gone too far south. 
      Shade: I’ll meet you there in 20 minutes.
      `);
    } else if (puzzleNum === 3) {
      setPuzzleText(`             ---- INCOMING TRANSMISSION ----

      It’s looking like the package dropoff was successful, and whoever Shade was working with took the train the other way. You’re not going to be able to catch up to them, but Shade left pretty recently, and on foot, so that’s the way to go. We’re not sure exactly which way he went, but we have some information on where some of his safe houses are. We don’t know which one he’s at, but we know that he switches between them based on the day of the week. We’ve gathered a few clues for you - help us figure out where he’s hiding out.
      
      SAFE HOUSE LOCATIONS:
      1: Across from Cedar Rose Park
      2: At the corner of Terrace and Neilson, near Jewel’s Terrace Park
      3: Next to King Track and Field
      4: On the side of Live Oak Park
      5: Across the street from the Berryman Reservoir
      6: On Arlington Avenue, right by Indian Rock Park
      7: Right next to Charlie Dorr Mini Park
      
      What we know:
      - Shade uses a different safe house on each day of the week. 
      - If Monday corresponds to 1, Tuesday to 2, and so on, none of Shade’s safe houses are used on the same day of the week as their number.
      - On the weekends, Shade doesn’t use any safe house east of Martin Luther King Jr. Way.
      - The two closest and two farthest safe houses to Strawberry Creek Park are used on weekdays that are not Friday.
      - Using the same day of week numbering as before, none of the combinations of safe house number plus day of week number add up to 8. 
      
      After learning these rules, however, we learned that in order to further hurt efforts to capture him, Shade uses different days of the week than normal. Today is Saturday, according to his
      days of the week.
      `);
    } else if (puzzleNum === 4) {
      setPuzzleText(`            ---- INCOMING TRANSMISSION ----

      It seems like he’s not using any of his safe houses at the moment, or perhaps he’s fled this one. We’ve managed to hack into his phone to get his current location, but all we got was a message in binary, which we believe contains some coordinates, before he figured out we had access to his phone and stopped us from getting any more information. Here’s what we have - maybe you can make something of it?
      
      0011 0111 1000 1000 0111 0100 1000 0000 0011 N
      0001 0010 0010 0010 0110 1001 0010 0000 0001 1000 W
      `);
    } else if (puzzleNum === 5) {
      setPuzzleText(`            ---- INCOMING TRANSMISSION ----

      It looks like he’s on the run now. He knows we’re after him. But with every location he has to flee, he gets a bit more tired - and we should be able to catch him soon. We’ve got a helicopter in the air, trying to track him down now. We think he’s trying to head back to the UC Berkeley campus, where he can disguise himself as a student. He’s going south on either Shattuck, Walnut, Oxford, or Spruce. But we don’t know which of the streets he’s chosen, and we need you to deduce that and come down that street towards the campus. We’ve tried to track him down before, and we know a few patterns that he generally follows.
      
      - When he has the option, Shade generally avoids streets with names that have a value of over $1.00. The value of a name is determined by adding up the value of each letter in the word (A=1, B=2, …, Z=26). 
      - Shade also avoids streets which contain the names of animals, if the letters are rearranged.
      - Finally, Shade doesn’t want to enter the campus from the north, so he’ll probably take a street where he can eventually turn and enter from the east.
      
      `);
    } else if (puzzleNum === 6) {
      setPuzzleText(`            ---- INCOMING TRANSMISSION ----

      Alright, you’re almost back on campus. Shade is somewhere here, and he’ll probably want to go somewhere with a lot of people to blend in. Luckily, we’ve been able to contact our friends at the Air Force, and they’ve let us know which GPS satellites he’s currently connected to, as well as the potential locations that he could be for each of them.
      
      Satellite 12 - usable north of Gilman Hall
      Satellite 23 - usable south of Koshland Hall
      Satellite 28 - usable west of People’s Park
      Satellite 36 - usable east of Dwinelle Hall
      
      Using this, you should be able to get an approximation of his location, and head to that area.
      `);
    } else if (puzzleNum === 7) {
      setPuzzleText(`            ---- INCOMING TRANSMISSION ----

      Looks like he’s moved, but it can’t have been far. He’s definitely still on the campus. 
      Our helicopter saw him briefly, and we believe that he moved somewhere on the other side of the Campanile - the large bell tower. He is believed to be wearing green, which is why we can’t see him on the helicopter - he must be in a green area. You’ll have to move fast - he’s going to leave soon.
      `);
    } else if (puzzleNum === 8) {
      setPuzzleText(`            ---- INCOMING TRANSMISSION ----
      
      Congratulations! You helped us catch a violent criminal, and the city is in your debt. We'll definitely call on you again the next time we need help solving puzzles.`);
    }
  }, [puzzleNum]);

  let text = "Waiting..";
  let latitude = "";
  let longitude = "";
  const allLats = [
    37.8703,
    37.87425,
    37.87396,
    37.883,
    37.88748,
    37.87661,
    37.87314,
    37.87136,
  ];
  const allLongs = [
    -122.2595,
    -122.26683,
    -122.28309,
    -122.27914,
    -122.2692,
    -122.26782,
    -122.25946,
    -122.25655,
  ];
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    if (location["coords"] != null) {
      latitude = location["coords"]["latitude"];
      longitude = location["coords"]["longitude"];
    }
    //latitude = JSON.stringify(location.coords.latitude)
    //longitude = JSON.stringify(location.coords.longitude)
  }

  useEffect(() => {
    if (location["coords"] != null) {
      latitude = location["coords"]["latitude"];
      longitude = location["coords"]["longitude"];
      let float_lat = parseFloat(latitude);
      let float_long = parseFloat(longitude);
      let distanceTemp = [0, 0, 0, 0, 0, 0, 0, 0];
      console.warn("got here");
      for (let i = 0; i < distanceTemp.length; i++) {
        distanceTemp[i] =
          Math.abs(float_lat - allLats[i]) + Math.abs(float_long - allLongs[i]);
      }
      setDistance(distanceTemp);
      if (
        puzzleNum === 0 &&
        Math.abs(float_lat - 37.8673) + Math.abs(float_long - -122.2609) <
          0.0004
      ) {
        setPuzzleNum(1);
      }
    }
  }, [location]);
  if (!loaded) {
    return null;
  }
  /*useEffect(() => {
    if (
      location["timestamp"] != null &&
      Date.now() - 10000 > location["timestamp"]
    ) {
      setTimerVar(timerVar + 1);
      console.warn("timerVar is now" + timerVar);
    }
  });*/

  class SlidingPanel extends React.Component {
    render() {
      return (
        <View style={styles.slideStyle}>
          <SlidingUpPanel
            ref={(c) => (this._panel = c)}
            draggableRange={{
              top: Dimensions.get("window").height + 100,
              bottom: 0,
            }}
          >
            <View style={styles.slideContainer}>
              <Text style={styles.headerTextStyle}>Puzzle Information</Text>
              <Text style={styles.positionTextStyle}>
                Your current position is:
              </Text>
              <Text style={styles.positionTextStyle}>
                ({latitude}, {longitude}), {distance}, {text}
              </Text>
              <Text style={styles.puzzleTextStyle}>{currentPuzzleText}</Text>
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
    height: "200%",
  },
  headerTextStyle: {
    fontFamily: "Inconsolata",
    fontSize: 30,
    fontWeight: "500",
    width: "100%",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "black",
    color: "white",
  },
  puzzleTextStyle: {
    fontFamily: "Inconsolata",
    fontSize: 12,
    marginTop: 50,
    color: "white",
    width: "90%",
    textAlign: "left",
  },
  positionTextStyle: {
    fontFamily: "Inconsolata",
    fontSize: 12,
    marginTop: 10,
    color: "white",
  },
  top: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 90,
  },
  slideContainer: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    height: 10000,
  },
});
