
//SplashScreen :=>  https://github.com/crazycodeboy/react-native-splash-screen
//QrCodeScxanner :=> https://aboutreact.com/react-native-scan-qr-code/

import React, { Component } from 'react';
import { View, Text, Header, Button, ActivityIndicator } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { NetInfo } from 'react-native';


export default class HomeComponent extends Component {

    constructor() {
        super()
        this.state = {
            isLoading: true,
            text: '',
            NetworkInfo: '',
        }


    }

    componentDidMount() {
        // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();

        //Spinner
        setTimeout(() => {
            //this.state.isLoading= false
            newState = this.state;
            newState.isLoading = false;
            this.setState(newState)
        }, 3000);

    
        
            //NetworkInfo
            NetInfo.isConnected.addEventListener(
                'connectionChange',
                this._handleConnectivityChange
        
            );
           
            NetInfo.isConnected.fetch().done((isConnected) => {
        
              if(isConnected == true)
              {
                this.setState({NetworkInfo : "Online"})
              }
              else
              {
                this.setState({NetworkInfo : "Offline"})
              }
        
            });
        }
        //NetworkInfo
          componentWillUnmount() {
        
            NetInfo.isConnected.removeEventListener(
                'connectionChange',
                this._handleConnectivityChange
        
            );
        
          }
        
          _handleConnectivityChange = (isConnected) => {
        
            if(isConnected == true)
              {
                this.setState({NetworkInfo : "Online"})
              }
              else
              {
                this.setState({NetworkInfo : "Offline"})
              }
            }
        

    static navigationOptions = ({ navigation }) => {
        navigation.title = "HomeComponent"
    }
    render() {
        //Spinner
        if (this.state.isLoading == true) {
            return (
                <View style={{ flex: 1, paddingTop: 50 }}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            );

        }

        //Data after rendering
        return (

            < View>
    
                <Text style={{ padding: 20,color:'red',fontSize:20  }}>NetworkInfo : {this.state.NetworkInfo}</Text>
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

                <Text> </Text>

                <Button
                    title='AsyncView'
                    onPress={() => this.props.navigation.navigate('AsyncView')}

                />

                <Text> </Text>
                <Text> </Text>

                <Button
                    title='NteworkInfo'
                    onPress={() => this.props.navigation.navigate('NteworkInfo')}

                />


                {/* <Button
                    title="Location"
                    onPress={() => this.props.navigation.navigate('GeoLocationComponent')} /> */}
            </View>



        )
    }



}