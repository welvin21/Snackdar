import React,{ Component } from 'react';
import { View,Text,StyleSheet,ScrollView,Fragment,SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements';
import OptionCard from './components/OptionCard';
import ItemsCard from './components/ItemsCard';
import MapScreen from './components/MapScreen';
import * as dataModule from './assets/data/Data';

const { OptionCards } = dataModule;

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      category : null,
      itemCode : null
    }
  }

  handleOptionCardOnPress = (category) => {
    this.setState({category : category.toLowerCase()});
  }

  handleItemOnPress = (itemCode) => {
    this.setState({itemCode : itemCode.toLowerCase()})
  }

  handleBackButtonPress = () => {
    this.setState({
      category : null,
      itemCode : null
    })
  }

  render(){
    const { category,itemCode } = this.state;
    if(category === null){
      return(
        <View style={styles.container}>
          <Header
            centerComponent={{ text: 'MY VENDING MACHINE', style : {color : '#fff'} }}
          />
          <ScrollView style={styles.content}>
            {OptionCards.map(Option => 
              <OptionCard 
                text={Option.text} 
                key={Option.key}
                onPress={this.handleOptionCardOnPress.bind(this)}
              />
            )}
          </ScrollView>       
        </View>
      );
    }else if(itemCode === null){
      return(
        <View style={styles.container}>
          <ItemsCard
            category={category} 
            onPress={this.handleItemOnPress.bind(this)}
            onBackButtonPress={this.handleBackButtonPress.bind(this)}
          />
        </View>
      )
    }else{
      return(
        <MapScreen />
      )
    }
  }
}

const styles = StyleSheet.create({
  container : {
    alignItems: 'center',
    flex: 1,
    paddingTop : 0,
    // justifyContent: 'center'
  },
  scroll : {
    alignContent : 'center',
    flex: 1,
    paddingTop : 0,

  },
  content : {
    width : '100%',
    alignContent : 'center',
    flex: 1,
    paddingTop : 50,
    // alignItems : 'center'
  }
})