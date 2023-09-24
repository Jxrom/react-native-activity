import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black", // Set the background color to black
    padding: 20,
  },
  title: {
    fontSize: 24,
    margin: 10,
    fontWeight: "bold",
    color: "white", // Set the font color to white
  },
  date: {
    fontSize: 16,
    marginBottom: 10,
    color: "white", // Set the font color to white
  },
  chartDateTitle: {
    fontSize: 24,
    margin: 10,
    marginLeft: 10,
    fontWeight: "bold",
    color: "white", // Set the font color to white
  },
  button: {
    backgroundColor: "transparent",
    margin: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonIcon: {
    width: 40, // Set the width and height to your desired icon size
    height: 40,
  },
  chartTitles: {
    marginLeft: 5,
  },
});
