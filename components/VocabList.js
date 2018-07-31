
import React, { Component } from 'react'
import FlashCard from './FlashCard'
import { FlatList, Animated, Easing, LayoutAnimation } from 'react-native'
import styles from '../Styles/FlashCardStyles'

export default class VocabList extends Component {
    constructor () {
    super()
        this.opacityValue = new Animated.Value(0)
        this.translateYValue = new Animated.Value(0)
        this.state = {
            h: 0,
        }
    }
  componentDidMount () {
    this.animate()
  }

  animate () {
    LayoutAnimation.spring();
    this.setState({
        h: 800
    })
    this.opacityValue.setValue(0)
    Animated.parallel([
        Animated.timing(
          this.opacityValue,
          {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear
          }),
        // Animated.timing(
        //   this.translateYValue,
        //   {
        //     toValue: 1,
        //     duration: 3000,
        //     easing: Easing.easOutBack
        //   })
    ]).start();
  }

  render() {
    const opacity = this.opacityValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.5, 1]
    })
    // const listPosition = this.translateYValue.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [-100, 0]
    // })
    return (
        <Animated.View style={[{opacity}
        // , {transform: [{translateY: listPosition}]}
        ]}>
            <FlatList
                style={[styles.flashCardList]}
                numColumns="2"
                data={this.props.data}
                renderItem={({item, index}) =>
                    <FlashCard data={item} index={index} />}
                keyExtractor={(item) => item.english}
            />
        </Animated.View>
    )
  }
}