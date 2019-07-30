import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import ListItem from "./ListItem";
import Chip from "./Chip";
import styles from "./styles";
import ListModal from "./Modal";

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

  keyExtractor = item => {
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

  hideModal = () => this.setState({ visible: false, text: "" });

  onChangeText = text => this.setState({ text });

  render() {
    let titles;
    let sections;
    const { visible, text } = this.state;
    const {
      data,
      selected,
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

        <ListModal
          visible={visible}
          hideModal={this.hideModal}
          headerText={headerText}
          text={text}
          searchBarStyle={searchBarStyle}
          onChangeText={this.onChangeText}
          title={title}
          sections={sections}
          filteredData={filteredData}
          renderItem={this.renderItem}
          sectionHeader={this.sectionHeader}
          keyExtractor={this.keyExtractor}
          separator={this.separator}
          buttonStyle={buttonStyle}
        />
      </View>
    );
  }
}

export default Multiple;
