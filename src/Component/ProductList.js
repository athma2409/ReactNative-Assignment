import React,{Component} from 'react';
import { Text, StyleSheet, View, ListView, TextInput, ActivityIndicator, Alert } from 'react-native';

export default class ProductList extends Component{
    static navigationOptions = ({ navigation }) => {
        navigation.title = "ProductList"
    }
   
    constructor(props) {

        super(props);
    
        this.state = {
    
          isLoading: true,
          text: '',
        
        }
    
        this.arrayholder = [] ;
      }
//Create Fetch() API in componentDidMount() method. The Fetch() Web API is used in this project to Parse JSON from given HTTP URL. We would also store the Parsed JSON inside arrayholder Array.


      componentDidMount() {
 
        return fetch('https://reactnativecode.000webhostapp.com/FruitsList.php')
          .then((response) => response.json())
          .then((responseJson) => {
            let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState({
              isLoading: false,
              dataSource: ds.cloneWithRows(responseJson),
            }, function() {
    
              // In this block you can do something with new state.
              this.arrayholder = responseJson ;
    
            });
          })
          .catch((error) => {
            console.error(error);
          });
          
      }
//for retrieve selected ListView item and show inside Alert message.
      GetListViewItem (fruit_name) {
    
        Alert.alert(fruit_name);
       
       }
//Create SearchFilterFunction() and pass Text inside it as argument. Now we would filter the JSON array according to given value pass as argument. After filtering data we would set the newly data in dataSource state.
       SearchFilterFunction(text){
     
        const newData = this.arrayholder.filter(function(item){
            const itemData = item.fruit_name.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(newData),
            text: text
        })
    }

//Create ListViewItemSeparator() function to show a horizontal line between each ListView element .
    ListViewItemSeparator = () => {
        return (
          <View
            style={{
              height: .5,
              width: "100%",
              backgroundColor: "#000",
            }}
          />
        );
      }

      render() {
        if (this.state.isLoading) {
          return (
            <View style={{flex: 1, paddingTop: 20}}>
              <ActivityIndicator />
            </View>
          );
        }
     
        return (
     
          <View style={styles.MainContainer}>
    
          <TextInput 
           style={styles.TextInputStyleClass}
           onChangeText={(text) => this.SearchFilterFunction(text)}
           value={this.state.text}
           underlineColorAndroid='transparent'
           placeholder="Search Here"
            />
     
            <ListView
     
              dataSource={this.state.dataSource}
     
              renderSeparator= {this.ListViewItemSeparator}
     
              renderRow={(rowData) => <Text style={styles.rowViewContainer} 
    
              onPress={this.GetListViewItem.bind(this, rowData.fruit_name)} >{rowData.fruit_name}</Text>}
    
              enableEmptySections={true}
    
              style={{marginTop: 10}}
     
            />
     
          </View>
        );
      }


 
}

const styles = StyleSheet.create({
 
    MainContainer :{
   
     justifyContent: 'center',
     flex:1,
     margin: 7,
    
     },
    
    rowViewContainer: {
      fontSize: 17,
      padding: 10
     },
   
     TextInputStyleClass:{
           
      textAlign: 'center',
      height: 40,
      borderWidth: 1,
      borderColor: '#009688',
      borderRadius: 7 ,
      backgroundColor : "#FFFFFF"
           
      }
    
   });


