
//SplashScreen :=>  https://github.com/crazycodeboy/react-native-splash-screen
//QrCodeScxanner :=> https://aboutreact.com/react-native-scan-qr-code/

import React, { Component } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import SplashScreen from 'react-native-splash-screen'

export default class HomeComponent extends Component {
    componentDidMount() {
        // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    }
    static navigationOptions = ({ navigation }) => {
        navigation.title = "HomeComponent"
    }
    constructor() {
        super()
        this.state = {
            isLoading: true,
            text: '',
        }
    }
    componentDidMount() {
        setTimeout(() => {
            //this.state.isLoading= false
            newState=this.state;
            newState.isLoading=false;
        this.setState(newState)
        }, 3000);
      }

    render() {
     
        if (this.state.isLoading==true) {
            return (
                <View style={{ flex: 1, paddingTop: 50 }}>
                    <ActivityIndicator size="large" color="#0000ff"  />
                </View>
            );
        }
        return (
            < View>
                <Button
                    title='Scanner'
                    onPress={() => this.props.navigation.navigate('ScannerComponent')}
                />
                <Text> </Text>
                <Button
                    title='Search'
                    onPress={() => this.props.navigation.navigate('SearchComponent')}

                />

                <Text> </Text>

                <Button
                    title='ProductList'
                    onPress={() => this.props.navigation.navigate('ProductList')}

                />

                {/* <Button
                    title="Location"
                    onPress={() => this.props.navigation.navigate('GeoLocationComponent')} /> */}
            </View>



        )
    }



}