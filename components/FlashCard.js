import React, { Component } from 'react'
import { Text, TouchableOpacity, TextInput } from 'react-native'

import { Metrics } from '../Themes/'
import styles from '../Styles/FlashCardStyles'

const CheckAnswer = ( {english, compareAnswers }) => (
    <TextInput 
        style={{
            width: ( Metrics.screenWidth / 2 ) - (3 * Metrics.marginHorizontal),
            textAlign: 'center'}
        } 
        placeholder="answer..."
        onSubmitEditing={e => compareAnswers(e.nativeEvent.text, english)}
    />
)

export default class FlashCard extends Component {
  constructor(props) {
      super(props)
      this.state = {
          english: this.props.data.english,
          serbian: this.props.data.serbian,
          longPressed: false,
          pressed: false,
          correct: null,
          rightAnswer: false
      }
  }

  longPressHandler() {
      this.setState({
          longPressed: !this.state.longPressed,
      });
  }

  compareAnswers(userAnswer, realAnswer) {
    if (userAnswer === realAnswer) {
        this.setState({
            correct: true,
        });
    } else if (userAnswer !== realAnswer) {
        this.setState({
            correct: false,
        });
    }
  }

  checkResult() {
    if ( this.state.correct === true) {
        return 'correct'
    } else if ( this.state.correct === false) {
        return 'try again'
    } else {
        return ''
    }
  }

  checkIndexIsEven (n) {
    return n % 2 == 0;
  }

  render() {
    const {serbian, english, longPressed, correct } = this.state;
    const display = !longPressed ? serbian : english;
    const answer = this.checkResult();
    return (
    <TouchableOpacity
        onLongPress={() => this.longPressHandler()}
        style={this.checkIndexIsEven(this.props.index) ? styles.flashCardLeft : styles.flashCardRight}
    >
        <Text style={styles.flashCardText}> {display} </Text>
        <CheckAnswer english={english} compareAnswers={(realAnswer, userAnswer) => this.compareAnswers(realAnswer, userAnswer)}/>
        <Text> { answer } </Text>
    </TouchableOpacity>
    )
  }
}
