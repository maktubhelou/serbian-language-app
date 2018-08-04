import React, { Component } from 'react'
import { Text, TouchableOpacity, TextInput } from 'react-native'
import {connect} from 'react-redux';

import { Metrics, Colors } from '../Themes/'
import styles from '../Styles/FlashCardStyles'

const CheckAnswer = ( {english, compareAnswers, editable, value }) => (
    <TextInput 
        style={{
            width: ( Metrics.screenWidth / 2 ) - (3 * Metrics.marginHorizontal),
            textAlign: 'center',
            }
        }
        autoCapitalize="none"
        autoCorrect={false}
        underlineColorAndroid="transparent"
        clearTextOnFocus={editable}
        keyboardAppearance="dark"
        placeholder="answer..."
        value={value}
        placeholderTextColor={Colors.secondaryBackgroundColor}
        onSubmitEditing={e => compareAnswers(e.nativeEvent.text, english)}
    />
)

class FlashCard extends Component {
  constructor(props) {
      super(props)
      this.state = {
          english: this.props.data.english,
          serbian: this.props.data.serbian,
          longPressed: false,
          pressed: false,
          correct: null,
          rightAnswer: false,
          editable: true,
          value: ''
      }
  }

  longPressHandler() {
      this.setState({
          longPressed: !this.state.longPressed,
      });
  }

  compareAnswers(userAnswer, realAnswer) {
    if (userAnswer === realAnswer) {
        this.props.updateCorrect()
        this.setState({
            correct: true,
            value: userAnswer,
            editable: false
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

        <CheckAnswer editable={this.state.editable} value={this.state.value} english={english} compareAnswers={(realAnswer, userAnswer) => this.compareAnswers(realAnswer, userAnswer)}/>
        <Text> { answer } </Text>
    </TouchableOpacity>
    )
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    updateCorrect: () => dispatch({ type: 'UPDATE_CORRECT'})
})

export default connect(mapStateToProps, mapDispatchToProps)(FlashCard);
