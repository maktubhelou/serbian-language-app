import React from 'react';
import { FlatList, View, Text } from 'react-native';
import CategoryItem from './CategoryItem';
import vocab from '../Serbian.json';

import styles from '../Themes/ApplicationStyles'

const categories = Object.keys(vocab);
const categoryContent = Object.values(vocab);

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedCategory: ''
    }
  }

  render() {
    return (
        <View style={styles.container}>
            <FlatList
            style={styles.list}
            data={categories}
            renderItem={({item, index}) => 
                <CategoryItem
                updateCategory={(title) => this.props.updateCategory(title)}
                title={item}
                index={index}
                content={categoryContent[index]}
                />}
            keyExtractor={(index) => index.toString()}
            />
        </View>
    );
  }
}

