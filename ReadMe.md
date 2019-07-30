# react-native-multi-selection

A simple multi select component with flatlist and sectionlist. 

## Note : Work in progress.

## FlatList
![FlatList](https://github.com/nikilarigela/react-native-multi-selection/blob/master/video2gif_20181117_125539.gif?raw=true)

## SectionList
![SectionList](https://github.com/nikilarigela/react-native-multi-selection/blob/master/video2gif_20181117_124226.gif?raw=true)

## Getting Started

To install 

```
npm install react-native-multi-select
```
or
```
yarn add react-native-multi-select
```


### Prerequisites

you need to install react native vector icons

```
yarn add or npm install react-native-vector-icons
```

### Usage

```
import React, { Component } from "react";
import { View } from "react-native";
import Multiple from "react-native-multi-selection";

const data =  [
  {
    id: "5bedc4dde9d981f05ef43d79",
    index: 0,
    picture: "http://placehold.it/32x32",
    age: 35,
    eyeColor: "brown",
    name: "Herring Aguirre",
    gender: "male",
    company: "STEELFAB",
    email: "herringaguirre@steelfab.com",
    phone: "+1 (833) 439-3967"
  },
  {
    id: "5bedc4dd5eaa9e0977f982f8",
    index: 1,
    picture: "http://placehold.it/32x32",
    age: 27,
    eyeColor: "blue",
    name: "Kellie Rosa",
    gender: "female",
    company: "ENDIPINE",
    email: "kellierosa@endipine.com",
    phone: "+1 (898) 598-3093"
  },
  {
    id: "5bedc4dd668554d7d2695c32",
    index: 2,
    picture: "http://placehold.it/32x32",
    age: 34,
    eyeColor: "blue",
    name: "Katy Bass",
    gender: "female",
    company: "UNIWORLD",
    email: "katybass@uniworld.com",
    phone: "+1 (936) 413-2750"
  },
  {
    id: "5bedc4dd630f5e6de96b0cfa",
    index: 3,
    picture: "http://placehold.it/32x32",
    age: 22,
    eyeColor: "green",
    name: "Mcintyre Reynolds",
    gender: "male",
    company: "ECLIPSENT",
    email: "mcintyrereynolds@eclipsent.com",
    phone: "+1 (952) 557-3662"
  },
  {
    id: "5bedc4dd271a3e18bf428da8",
    index: 4,
    picture: "http://placehold.it/32x32",
    age: 24,
    eyeColor: "brown",
    name: "Torres Knox",
    gender: "male",
    company: "CEDWARD",
    email: "torresknox@cedward.com",
    phone: "+1 (863) 447-3305"
  },
 ];

export default class App extends Component {
  state = {
    data: data,
    selected: []
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Multiple
          data={this.state.data}
          selected={this.state.selected}
          onChange={selected => this.setState({ selected })}
          counter={true}
          identifiers={["id", "name", "picture", "eyeColor"]}
          searchBarStyle={{ borderColor: "#1A237E" }}
          checkboxColor="#CE93D8"
          labelColor="#1A237E"
          imageSize={50}
        />
      </View>
    );
  }
}
```
## identifiers(prop)
the identifier says all 

```
0 index of array is Unique key 
1 index of array is label 
2 index of array is image(you can pass only image urls)
3 index of array is groupby attribute for generating section list
```

## props

**selected**
selected takes an array of unique keys which is mentioned in the 0 index of identifiers array.
```
selected={this.state.selected}
```
**onChange**
onChange takes an callback function and  calls each selection of item in list list, it gives the selected id.
```
 onChange={selected => this.setState({ selected })}
```

**counter**
It takes boolean value it shows the number of item selected.
```
Type: 'true' | 'false'
Default value: false

counter={true}
```
**searchBarStyle**
onChange takes an object of StyleSheet.
```
 searchBarStyle={{ borderColor: "#1A237E" }}
```
**checkboxColor**
It takes an string of color.
```
 checkboxColor="#1A237E"
```
**labelColor**
It takes an string of color.
```
 labelColor="#1A237E"
```
**imageSize**
It takes an number, default size is 25.
```
 imageSize=50
```
**buttonStyle**
It takes of object, which has to have ```backgroundColor``` and ```color```.
```
 buttonStyle={backgroundColor: "green", color:"white"}
```

## Authors

* **Nikil Arigela** - *Initial work* - [Classpro](https://github.com/nikilarigela)
* **Geek Vijay** - *Initial work* - [Classpro](https://github.com/geekvijay)source

## Used Packages
thanks to [Elad Gil](https://github.com/ptelad) for the IphoneX helper

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://opensource.org/licenses/MIT) file for details

