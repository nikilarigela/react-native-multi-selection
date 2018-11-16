import React, { PureComponent } from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

class ListItem extends PureComponent {
  onPress = () => {
    const { onItemPress, value } = this.props;
    onItemPress(value);
  };

  render() {
    const {
      label,
      isSelected,
      image,
      labelColor,
      checkboxColor,
      imageSize
    } = this.props;

    return (
      <TouchableOpacity onPress={this.onPress}>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 8,
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          {image && (
            <Image
              source={{ uri: image }}
              style={{
                width: imageSize ? imageSize : 25,
                height: imageSize ? imageSize : 25,
                margin: 6
              }}
            />
          )}
          <Text
            style={{ marginLeft: 4, fontSize: 18, flex: 1, color: labelColor }}
          >
            {label}
          </Text>
          <Icon
            name={isSelected ? "check-box" : "check-box-outline-blank"}
            size={24}
            color={checkboxColor}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
export default ListItem;
