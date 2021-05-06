import { StyleSheet } from "react-native";
import { mainScreenStyles } from "../../MainScreen/MainScreen";

export const imageUrl =
  "https://www.berkeleyside.com/wp-content/uploads/2020/04/1920px-UCBerkeleyCampus-720x468.jpg";
export const styles = StyleSheet.create({
  ...mainScreenStyles,
  topPuzzles: {
    flex: 0.2,
  },

  titleText: {
    fontSize: 12,
    fontWeight: "200",
    fontFamily: "Inconsolata",
  },

  header: {
    alignItems: "center",
  },

  card: {
    color: "#FF52BA",
    borderColor: "#FF52BA",
    borderWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    fontFamily: "Inconsolata",
  },
  headerText: {
    fontFamily: "Inconsolata",
    fontSize: 30,
  },
  titleStyle: {
    fontFamily: "Inconsolata",
    fontWeight: "800",
    fontSize: 30,
  },
  descStyle: {
    fontFamily: "Inconsolata",
  },
});
