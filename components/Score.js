import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styles from '../Styles/ScoreStyles'

export class Score extends Component {
  static propTypes = {
    totalCorrect: PropTypes.number
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.score}> {this.props.totalCorrect} </Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
    totalCorrect: state.totalCorrect
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Score)
