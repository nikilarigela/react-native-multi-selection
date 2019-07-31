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
    flex: 1
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
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 14,
    fontWeight: "bold",
    color: "#757575"
  },
  chipContainer: { flexDirection: "row", flexWrap: "wrap", marginTop: 4 }
});

export default styles;
