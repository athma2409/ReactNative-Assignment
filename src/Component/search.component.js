import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class SearchComponent extends Component {

    static navigationOptions = ({ navigation }) => {
        navigation.title = "SearchComponent"
    }

    constructor() {
        super()
    }


    render() {
        return (
            <View>
                <Text>Search Here</Text>
            </View>
        )
    }
}