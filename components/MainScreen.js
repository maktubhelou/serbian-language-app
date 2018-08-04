import React from 'react';
import { FlatList, KeyboardAvoidingView, Image } from 'react-native';
import CategoryItem from './CategoryItem';
import vocab from '../Serbian.json';

import styles from '../Themes/ApplicationStyles'
import { Images } from '../Themes';

const categories = Object.keys(vocab);
const categoryContent = Object.values(vocab);


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToIndex = this.scrollToIndex.bind(this)
  }
  scrollToIndex(index) {
    this.list.scrollToIndex({animated: true, index: index})
  }



  render() {
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Image source={Images.app_background} style={styles.backgroundImage} />
            <FlatList
            style={styles.list}
            ref={(ref) => { this.list = ref; }}
            data={categories}
            renderItem={({item, index}) => 
                <CategoryItem
                updateCategory={(title) => this.props.updateCategory(title)}
                title={item}
                index={index}
                scrollToIndex={() => this.scrollToIndex(index)}
                content={categoryContent[index]}
                />}
            keyExtractor={(item, index) => index.toString()}
            />
        </KeyboardAvoidingView>
    );
  }
}

