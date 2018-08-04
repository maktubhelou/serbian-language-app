import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styles from '../Styles/HeaderStyles'
import { Images } from '../Themes/';
import Score from './Score'

export class Header extends Component {
  static propTypes = {
    selectedCategory: PropTypes.string,
    totalCorrect: PropTypes.number
  }

  render() {
    return (
        <View style={styles.header}>
          <Text style={styles.headerText}>{this.props.selectedCategory || 'Welcome!'} </Text>
            <View style={styles.scoreAndFlag}>
              <Score from style={styles.score}/>
              <View style={styles.flagShadow}>
                <Image source={Images.serbian_flag} style={styles.flag} />
            </View>
          </View>
        </View>
    )
  }
}

const mapStateToProps = (state) => ({
    totalCorrect: state.totalCorrect,
    selectedCategory: state.selectedCategory
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
