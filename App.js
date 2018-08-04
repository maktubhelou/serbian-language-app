import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/'
import MainScreen from './components/MainScreen';
import Header from './components/Header';

import styles from './Themes/ApplicationStyles'

const middleware = applyMiddleware(thunk);

const store = createStore(reducers, middleware);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.screen.mainContainer}>
          <Header />
          <MainScreen />
        </View>
      </Provider>
    );
  }
}

