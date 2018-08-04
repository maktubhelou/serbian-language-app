import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import VocabList from './VocabList';
import { Colors } from '../Themes/';

import styles from '../Styles/CategoryItemStyles'

class CategoryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.selectedCategory,
            current: false
        }
    }

    pressHandler(title) {
        this.setState({
            current: !this.state.current
        })
        this.props.updateCategory(title)
        this.props.scrollToIndex()
    }

    render() {
        const { title, content, currentCorrect } = this.props;
        const active = (this.props.selectedCategory && this.state.current) && true;
        const vocab = active ? <VocabList data={content} /> : <View />
        return(
            <View style={active ? {opacity: 1} : {opacity: 0.6}}>
                <TouchableOpacity
                    onPress={() => this.pressHandler(title)}
                >
                    <Text style={[styles.text, active && {backgroundColor: Colors.primaryBackgroundColor}]}>{title} | {content.length} | {currentCorrect} </Text>
                </TouchableOpacity>
                { vocab }
            </View>
        );
    }
}

const mapStateToProps = state => ({
    currentCorrect: state.currentCorrect,
    selectedCategory: state.selectedCategory
});

const mapDispatchToProps = dispatch => ({
    updateCategory: title => dispatch({ type: 'UPDATE_CATEGORY', title})
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);