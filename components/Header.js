import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styles from '../Styles/HeaderStyles'

export class Header extends Component {
  static propTypes = {
    selectedCategory: PropTypes.string
  }

  render() {
    return (
        <View style={styles.header}>
        <Text style={styles.headerText}>Category: {this.props.selectedCategory} | {this.props.totalCorrect} </Text>
        </View>
    )
  }
}

const mapStateToProps = (state) => ({
    totalCorrect: state.totalCorrect
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
