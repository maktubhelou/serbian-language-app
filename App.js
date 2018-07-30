import React from 'react';
import { View, Text } from 'react-native';
import MainScreen from './components/MainScreen';
import vocab from './Serbian.json';

import styles from './Themes/ApplicationStyles'

const categories = Object.keys(vocab);
const categoryContent = Object.values(vocab);

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedCategory: ''
    }
  }
  updateCategory(title) {
    this.setState({
      selectedCategory: title
    })
  }
  render() {
    return (
      <View style={styles.screen.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Category: {this.state.selectedCategory} </Text>
        </View>
        <MainScreen updateCategory={(title) => this.updateCategory(title)}/>
      </View>
    );
  }
}

