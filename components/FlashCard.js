import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from '../Styles/FlashCardStyles'

export default class FlashCard extends Component {
  constructor(props) {
      super(props)
      this.state = {
          english: this.props.data.english,
          serbian: this.props.data.serbian,
          flipped: false,
      }
  }

  clickHandler() {
      this.setState({
          flipped: !this.state.flipped,
      });
  }

  checkIndexIsEven (n) {
    return n % 2 == 0;
  }

  render() {
    const {serbian, english, flipped} = this.state;
    const display = !flipped ? serbian : english;
    return (
    <TouchableOpacity 
        onPress={() => this.clickHandler()}
        style={this.checkIndexIsEven(this.props.index) ? styles.flashCardLeft : styles.flashCardRight}
    >
        <Text style={styles.flashCardText}> {display} </Text>
    </TouchableOpacity>
    )
  }
}
