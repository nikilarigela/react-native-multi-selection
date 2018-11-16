import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Chip = ({ value, label, onPress }) => {
  return (
    <View key={value} style={styles.chip}>
      <Text style={{ marginLeft: 4 }}>{label}</Text>
      <Icon
        name="cancel"
        size={16}
        style={{ paddingLeft: 8 }}
        onPress={() => onPress(value)}
      />
    </View>
  );
};

export default Chip;

const styles = StyleSheet.create({
  chip: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 20,
    padding: 4,
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 4,
    marginBottom: 4
  }
});
