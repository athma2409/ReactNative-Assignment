import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';

export default class SearchComponent extends Component {

    static navigationOptions = ({ navigation }) => {
        navigation.title = "SearchComponent"
    }
    constructor() {
        super()
        //DefaultSpinnerState==True
        this.state = {
            isLoading: true,
            text: '',
        }
    }
    //SpinnerSetTimeOut
    componentDidMount() {
        setTimeout(() => {
            newState = this.state;
            //SpinnerState we are making false after 3 sec
            newState.isLoading = false;
            this.setState(newState)
        }, 3000);
    }

    render() {
        //SetTimeOut We have to write inseide render
        if (this.state.isLoading == true) {
            return (
                <View style={{ flex: 1, paddingTop: 50 }}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            );
        }
        return (
            <View>
                <Text>Search Here</Text>
            </View>
        )
    }
}