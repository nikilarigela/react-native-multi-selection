import React from "react";
import {
  Modal,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  SectionList
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { getStatusBarHeight } from "./iphoneXhelpers";
import ListItem from "./ListItem";
import Chip from "./Chip";

class Multiple extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      text: ""
    };
  }

  onItemPress = key => {
    const hasKey = this.props.selected.includes(key);
    let selected = [];

    if (hasKey) {
      selected = this.props.selected.filter(selectedKey => selectedKey !== key);
    } else {
      selected = [...this.props.selected, key];
    }

    this.props.onChange(selected);
  };

  renderItem = ({ item }) => {
    const [key, label, image] = this.props.identifiers;
    const { checkboxColor, labelColor, imageSize } = this.props;

    const isSelected = this.props.selected.includes(item[key]);

    return (
      <ListItem
        onItemPress={this.onItemPress}
        value={item[key]}
        label={item[label]}
        isSelected={isSelected}
        image={item[image]}
        checkboxColor={checkboxColor}
        labelColor={labelColor}
        imageSize={imageSize}
      />
    );
  };

  keyExtractor = (item, index) => {
    const [key] = this.props.identifiers;
    return item[key];
  };

  separator = () => <View style={styles.separator} />;

  sectionHeader = ({ section }) => (
    <Text style={styles.sectionHeader}>
      {section.title.charAt(0).toUpperCase() + section.title.slice(1)}
    </Text>
  );

  showModal = () => this.setState({ visible: true });

  hideMoadal = () => this.setState({ visible: false, text: "" });

  render() {
    let titles;
    let sections;
    const { visible, text } = this.state;
    const {
      data,
      selected,
      counter,
      identifiers,
      selectBoxStyle,
      searchBarStyle,
      buttonStyle,
      headerText
    } = this.props;
    const [key, label, , title] = identifiers;

    const filteredData = data.filter(
      item => item[label].toLowerCase().indexOf(text.toLowerCase()) > -1
    );

    if (title) {
      titles = [...new Set(filteredData.map(item => item[title]))];

      sections = titles.map(t => ({
        title: t,
        data: filteredData.filter(item => item[title] === t)
      }));

      /** alternative method
      titles = filteredData.reduce((acc, cur) => {
        const curTitle = cur[title];

        if (curTitle in acc) {
          acc[curTitle].push(cur);
        } else {
          acc[curTitle] = [cur];
        }

        return acc;
      }, {});

      sections = Object.keys(titles).map(t => ({ title: t, data: titles[t] }));
      */
    }

    const counterText = `${selected.length} of ${data.length}`;

    const chips = data
      .filter(item => selected.includes(item[key]))
      .map(item => (
        <Chip
          key={item[key]}
          value={item[key]}
          label={item[label]}
          onPress={this.onItemPress}
        />
      ));

    return (
      <View>
        <TouchableOpacity
          style={[styles.main, { ...selectBoxStyle }]}
          onPress={this.showModal}
        >
          <View style={styles.select}>
            <Text>Select</Text>
            <Icon name="arrow-drop-down" size={20} style={{ paddingLeft: 8 }} />
          </View>
        </TouchableOpacity>

        <View style={styles.chipContainer}>{chips}</View>

        <Modal visible={visible} onRequestClose={this.hideMoadal}>
          <View style={{ marginTop: getStatusBarHeight(), flex: 1 }}>
            {headerText && <Text style={{ marginLeft: 8 }}>{headerText}</Text>}
            <View style={styles.body}>
              <TextInput
                ref={this.state.text}
                placeholder="Search"
                onChangeText={text => this.setState({ text })}
                style={[styles.textInput, { ...searchBarStyle }]}
              />
              {counter && (
                <Text style={{ color: "grey", marginTop: 4 }}>
                  {counterText}
                </Text>
              )}
              {title ? (
                <SectionList
                  sections={sections}
                  renderItem={this.renderItem}
                  renderSectionHeader={this.sectionHeader}
                  keyExtractor={this.keyExtractor}
                  ItemSeparatorComponent={this.separator}
                  stickySectionHeadersEnabled
                />
              ) : (
                <FlatList
                  data={filteredData}
                  renderItem={this.renderItem}
                  keyExtractor={this.keyExtractor}
                  ItemSeparatorComponent={this.separator}
                  initialNumToRender={2}
                />
              )}
            </View>

            <TouchableOpacity
              style={[
                styles.footer,
                buttonStyle && { backgroundColor: buttonStyle.backgroundColor }
              ]}
              onPress={this.hideMoadal}
            >
              <Text style={{ color: buttonStyle && buttonStyle.fontColor }}>
                Done
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

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

export default Multiple;
