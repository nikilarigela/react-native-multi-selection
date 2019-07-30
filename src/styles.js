import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textInput: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    padding: 8
  },
  body: {
    flex: 1,
    margin: 8
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "#dddddd"
  },
  select: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8
  },
  main: {
    backgroundColor: "#ddd",
    paddingVertical: 8,
    paddingHorizontal: 4,
    marginBottom: 4
  },
  separator: {
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  sectionHeader: {
    paddingTop: 4,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 4,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)"
  },
  chipContainer: { flexDirection: "row", flexWrap: "wrap", marginTop: 4 }
});

export default styles;
