import React from "react";
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  SectionList
} from "react-native";
import styles from "./styles";

class ListModal extends React.Component {
  render() {
    const {
      visible,
      hideModal,
      headerText,
      text,
      searchBarStyle,
      onChangeText,
      title,
      sections,
      filteredData,
      renderItem,
      sectionHeader,
      keyExtractor,
      buttonStyle
    } = this.props;
    return (
      <Modal visible={visible} onRequestClose={hideModal}>
        <View style={{ flex: 1 }}>
          {headerText && <Text style={{ marginLeft: 8 }}>{headerText}</Text>}
          <View style={styles.body}>
            <TextInput
              value={text}
              placeholder="Search"
              onChangeText={onChangeText}
              style={{ ...searchBarStyle }}
            />
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

          <TouchableOpacity
            style={[
              styles.footer,
              buttonStyle && { backgroundColor: buttonStyle.backgroundColor }
            ]}
            onPress={hideModal}
          >
            <Text style={{ color: buttonStyle && buttonStyle.fontColor }}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

export default ListModal;
