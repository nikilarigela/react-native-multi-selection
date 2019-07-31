import React, { PureComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  ITEM_HEIGHT,
  ITEM_PADDING_TOP
} from "react-native-multi-selection/src/constants";

class ListItem extends PureComponent {
  onPress = () => {
    const { onItemPress, value } = this.props;
    onItemPress(value);
  };

  render() {
    const { label, isSelected, labelColor } = this.props;

    return (
      <TouchableOpacity onPress={this.onPress}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            height: ITEM_HEIGHT,
            width: "100%",
            paddingHorizontal: 24,
            paddingVertical: ITEM_PADDING_TOP + 4,
            backgroundColor: isSelected ? "rgba(0, 0, 0, 0.14)" : "white"
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: labelColor || "#212121",
              fontWeight: isSelected ? "bold" : "normal"
            }}
          >
            {label}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
export default ListItem;
