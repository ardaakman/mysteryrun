import { View, Text, Dimensions, Image, StyleSheet } from "react-native";
import React from "react";
import {
  Appbar,
  Card,
  Button,
  Headline,
  Paragraph,
  Title,
} from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native";
import { styles, imageUrl } from "./PuzzleListScreenStyles";
import SlidingUpPanel from "rn-sliding-up-panel";
import { useFonts } from "expo-font";

export function PuzzleListScreen({ navigation }) {
  const TopBar = () => {
    return (
      <Appbar style={styles.topPuzzles}>
        <Appbar.Action icon="arrow-left" onPress={() => navigation.goBack()} />
        <Appbar.Content
          style={styles.header}
          title={<Text style={styles.headerText}>All Puzzles</Text>}
        />
      </Appbar>
    );
  };
  const [loaded] = useFonts({
    Inconsolata: require("../../../../assets/fonts/Inconsolata.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {TopBar()}
      <Card
        onPress={() => {
          navigation.navigate("PuzzleMapScreen");
        }}
        style={styles.card}
      >
        <Card.Content>
          <Card.Cover source={{ uri: imageUrl }} />
          <Title style={styles.titleStyle}> {"Oski Trail"} </Title>
          <Paragraph style={styles.descStyle}>
            {"A thrilling puzzle that will take you around North Berkeley."}
          </Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
}
