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
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 10,
    width: "90%",
    height: 150,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10, // This will give rounded edges
    borderColor: "black", // This will give a black border
    borderWidth: 1, // This sets the border width
    flexDirection: "row", // This will arrange child components in a row
  },
});

export default globalStyles;
