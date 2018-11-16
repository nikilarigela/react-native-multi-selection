# react-native-multi-selection

A simple multi select component with flatlist and sectionlist.

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
    data: ,
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
the identifier says all 

```
0 index of array is Unique key 
1 index of array is label 
2 index  of array is image(you can pass only image urls)
3 index of array is groupby attribute for generating section list
```

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

