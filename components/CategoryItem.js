import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import VocabList from './VocabList';
import { Colors } from '../Themes/';

import styles from '../Styles/CategoryItemStyles'

class CategoryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: false
        }
    }

    pressHandler(title) {
        this.props.updateCategory(title)
        this.setState({
            current: !this.state.current
        })
    }

    render() {
        const { title, content } = this.props;
        return(
            <View style={this.state.current ? {opacity: 1} : {opacity: 0.6}}>
                <TouchableOpacity onPress={() => this.pressHandler(title)}>
                    <Text style={[styles.text, this.state.current && {backgroundColor: Colors.primaryBackgroundColor}]}>{title} | {content.length}</Text>
                </TouchableOpacity>
                {this.state.current &&
                    <VocabList data={content}/>
                }
            </View>
        );
    }
}

export default CategoryItem;