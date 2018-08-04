
import React, { Component } from 'react'
import FlashCard from './FlashCard'
import { FlatList, Animated, Easing, LayoutAnimation } from 'react-native'
import styles from '../Styles/FlashCardStyles'

export default class VocabList extends Component {
    constructor () {
    super()
        this.opacityValue = new Animated.Value(0)
    }
  componentDidMount () {
    this.open()
  }
  componentWillUnmount () {
    this.close()
  }

  open () {
    LayoutAnimation.linear();
    this.opacityValue.setValue(0)
    Animated.timing(
        this.opacityValue,
        {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear
        }).start();
  }
  close () {
    LayoutAnimation.linear();
    Animated.parallel([
        Animated.timing(
          this.opacityValue,
          {
            toValue: 0,
            duration: 1000,
          })
    ]).start();
  }

  render() {
    const opacity = this.opacityValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    })
    return (
        <Animated.ScrollView style={{opacity}}>
            <FlatList
                horizontal
                style={[styles.flashCardList]}
                data={this.props.data}
                renderItem={({item, index}) =>
                    <FlashCard data={item} index={index} />}
                keyExtractor={(item, index) => index.toString()}
            />
        </Animated.ScrollView>
    )
  }
}