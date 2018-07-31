import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/'
import MainScreen from './components/MainScreen';
import Header from './components/Header';

import styles from './Themes/ApplicationStyles'

const store = createStore(reducers);

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
      <Provider store={store}>
        <View style={styles.screen.mainContainer}>
          <Header selectedCategory={this.state.selectedCategory}/>
          <MainScreen updateCategory={(title) => this.updateCategory(title)}/>
        </View>
      </Provider>
    );
  }
}

