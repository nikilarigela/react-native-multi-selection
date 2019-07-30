import React from "react";
import { Modal, View, FlatList, TextInput, SectionList } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./styles";

class ListModal extends React.Component {
  render() {
    const {
      visible,
      hideModal,
      text,
      onChangeText,
      title,
      sections,
      filteredData,
      renderItem,
      sectionHeader,
      keyExtractor,
      clearText
    } = this.props;
    return (
      <Modal visible={visible} onRequestClose={hideModal}>
        <View style={{ flex: 1 }}>
          <View style={styles.body}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderBottomColor: "#9E9E9E",
                borderWidth: 1
              }}
            >
              <Icon
                name="arrow-back"
                size={24}
                onPress={hideModal}
                style={{ paddingHorizontal: 16 }}
              />
              <TextInput
                value={text}
                placeholder="Search"
                onChangeText={onChangeText}
                style={{
                  paddingHorizontal: 6,
                  flex: 1
                }}
              />
              {text.length !== 0 && (
                <Icon
                  name="clear"
                  size={24}
                  onPress={clearText}
                  style={{ paddingHorizontal: 16 }}
                />
              )}
            </View>
            {title ? (
              <SectionList
                sections={sections}
                renderItem={renderItem}
                renderSectionHeader={sectionHeader}
                keyExtractor={keyExtractor}
                stickySectionHeadersEnabled
              />
            ) : (
              <FlatList
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                initialNumToRender={2}
              />
            )}
          </View>
        </View>
      </Modal>
    );
  }
}

export default ListModal;
