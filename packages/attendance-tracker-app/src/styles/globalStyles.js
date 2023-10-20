import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center", // Center children horizontally
    justifyContent: "center", // Center children vertically
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  widgetStyle: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "black",
    marginBottom: 10,
    width: "90%",
    height: 150,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10, // This will give rounded edges
    flexDirection: "row", // This will arrange child components in a row
  },

  cardStyle: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "black",
    marginBottom: 10,
    width: "90%",
    backgroundColor: "#f5f5f5", // default background color, but it will be overridden if a prop is passed
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    flexDirection: "row",
  },

  dataVisualizationStyle: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "black",
    marginBottom: 10,
    width: "90%",
    backgroundColor: "#f5f5f5", // default background color, but it will be overridden if a prop is passed
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});

export default globalStyles;
